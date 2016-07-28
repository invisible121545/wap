var express = require('express');
var router = express.Router();
// var fs = require('fs');
var request = require('request')
var conf = require('../public/config/home.js');
var signConf = require('../public/config/sign.js');
var proConfig = require('../public/config/product.js');
var BASE_URL = 'http://gm.yoins.com/API/v1';
// http://gm.yoins.com/API/v1/common/getCommonData
// http://gm.yoins.com/API/v1/index/getIndexData
// http://gm.yoins.com/API/v1/index/getRecommendProList?name=Bags&page=2
var com_ctx = null;
var fetch = require('node-fetch');
var co = require('co');


/* GET home page. */
/*var middleFunction = function(req, res, next) {
    console.log(com_ctx);
    if (com_ctx) {
        return com_ctx;
    } else {
        request(BASE_URL + '/index/getIndexData', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                com_ctx = JSON.parse(body);
            }
        });
    }
    console.log(com_ctx);
    return com_ctx;
}*/

router.get('/', function(req, res, next) {
    co(function*() {
        var common_res = yield fetch(BASE_URL + '/common/getCommonData');
        var common_ctx = yield common_res.json();
        var home_res = yield fetch(BASE_URL + '/index/getIndexData');
        var home_ctx = yield home_res.json();
        console.log(home_ctx.ET);
        res.render('index', {
            conf: conf.headConf,
            context: common_ctx,
            home: home_ctx
        });
    });

    /*request(BASE_URL + '/common/getCommonData', function(error, response, com) {
        if (!error && response.statusCode == 200) {
            var ctx = JSON.parse(com);
            request(BASE_URL + '/index/getIndexData', function(error, response, home) {
                if (!error && response.statusCode == 200) {
                    var home_ctx = JSON.parse(home);
                    res.render('index', {
                        conf: conf.headConf,
                        context: ctx,
                        home: home_ctx
                    });
                }
            });
        }
    });*/
});

router.get('/sign', function(req, res, next) {
    res.render('sign', {
        conf: signConf
    });
});

router.get('/product/:productId', function(req, res, next) {
    co(function*() {
        var common_res = yield fetch(BASE_URL + '/common/getCommonData');
        var common_ctx = yield common_res.json();
        var pro = yield fetch(BASE_URL + '/product/getInfo?productId=' + req.params.productId);
        var pro_ctx = yield pro.json();
        console.log(pro_ctx.productSize);
        console.log(pro_ctx.productColor);
        res.render('product', {
            conf: conf.headConf,
            context: common_ctx,
            pro: pro_ctx
        });
    })

});

router.get('/getProducts', function(req, res, next) {
    res.body = 'this is a text';
});

module.exports = router;