webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.common = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _product = __webpack_require__(6);

	__webpack_require__(5);

	var _inobounce = __webpack_require__(3);

	var _inobounce2 = _interopRequireDefault(_inobounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Common = function () {
		function Common() {
			_classCallCheck(this, Common);
		}

		_createClass(Common, [{
			key: 'slideSubGroup',
			value: function slideSubGroup(_this) {
				_this.siblings('.inner_group').slideToggle(200);
				_this.find('i').toggleClass('rotate_up');
			}
		}, {
			key: 'slideMenuToggle',
			value: function slideMenuToggle(_this) {
				/*$.ajax({
	   	url: 'gm.yoins.com/API/v1/index/getIndexData',
	   	type: 'get',
	   	async: true,
	   	success: function(res) {
	   		console.log(res);
	   	}
	   });*/

				$('body').toggleClass('disable_scroll');
				_this.parent().toggleClass('active').parents('.container').find('.menu_view').slideToggle(200);
				_this.parent().hasClass('active') ? _inobounce2.default.enable() : _inobounce2.default.disable();
			}
		}, {
			key: 'handleSearchFocus',
			value: function handleSearchFocus(_this) {
				_this.parents('.search_box').find('.search_list_wrap').show(20);
				_this.parents('.search_box').siblings('.category_container').hide();
			}
		}, {
			key: 'handleSearchBlur',
			value: function handleSearchBlur(_this) {
				_this.parents('.search_box').find('.search_list_wrap').hide();
				_this.parents('.search_box').siblings('.category_container').show();
			}
		}, {
			key: 'addLoadingView',
			value: function addLoadingView() {
				$('.container').append('<div class="loading_view"><div class="loading_section"><i></i></div></div>');
				$('.product_loading').show();
				$('body').addClass('disable_scroll');
				_inobounce2.default.enable();
			}
		}, {
			key: 'removeLoadingView',
			value: function removeLoadingView() {
				$('.container').find('.loading_view').remove();
				$('body').removeClass('disable_scroll');
				_inobounce2.default.disable();
			}
		}, {
			key: 'imgLazyLoad',
			value: function imgLazyLoad() {
				$("img.lazy").lazyload({
					effect: "fadeIn",
					threshold: 300
				});
			}
		}, {
			key: 'handleBackTopClick',
			value: function handleBackTopClick() {
				console.log(121);
				$('html,body').scrollTop(0);
			}
		}, {
			key: 'diaplayBackTop',
			value: function diaplayBackTop() {
				$(window).scrollTop() > 300 ? $(".backtop .icon_to_top").css({
					'display': 'inline-block'
				}) : $(".backtop .icon_to_top").hide(10);
			}
		}, {
			key: 'handleQuantityClick',
			value: function handleQuantityClick(_this) {
				var qty_input = parseInt(_this.siblings('input[type=number]').val());
				if (isNaN(qty_input)) {
					qty_input = 1;
				}
				if (_this.children('i').hasClass('icon_minus') && qty_input > 1) {
					qty_input--;
				} else if (_this.children('i').hasClass('icon_plus')) {
					qty_input++;
				}
				if (qty_input <= 1) {
					_this.parents('.dl_qty').find('.icon_minus').parent().addClass('unavailable');
				} else {
					_this.parents('.dl_qty').find('.icon_minus').parent().removeClass('unavailable');
				}
				return _this.siblings('input[type=number]').val(qty_input);
			}
		}]);

		return Common;
	}();

	var common = exports.common = new Common();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Swiper, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.product = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	var _inobounce = __webpack_require__(3);

	var _inobounce2 = _interopRequireDefault(_inobounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Product = function () {
		function Product(productSwipe) {
			_classCallCheck(this, Product);

			this.productSwipe = '';
		}

		_createClass(Product, [{
			key: 'initProductSwipe',
			value: function initProductSwipe() {
				this.productSwipe = new Swiper('.product_swipe', {
					pagination: '.swiper-pagination',
					loop: true,
					lazyLoading: true,
					spaceBetween: 2
				});
			}
		}, {
			key: 'checkStyleSelect',
			value: function checkStyleSelect(_this) {
				var _arr = [];
				$('.product_size').find('select.field_default').each(function (index, el) {
					!$(el).children('option:selected').val() && _arr.push(el);
				});
				if (_arr.length) {
					if (_this.hasClass('add_bag_btn')) {
						$('.product_option a.add_bag_btn').addClass('unselect').text('Please Select Styles');
						$(_arr[0]).focus();
					}
					return false;
				}
				if (!parseInt($('.product_size').find('input[type=number]').val()) > 0) {
					$('.product_size').find('input[type=number]').focus();
					$('.product_option a.add_bag_btn').addClass('unselect').text('Please Select Styles');
					return false;
				}
				$('.product_option a.add_bag_btn').removeClass('unselect').text('ADD TO BAG');
				return true;
			}
		}, {
			key: 'handleAddBag',
			value: function handleAddBag(_this) {
				if (!this.checkStyleSelect(_this)) return;
				$.getJSON({
					url: './js/test.json',
					beforeSend: function beforeSend() {
						_common.common.addLoadingView();
					},
					success: function success(res) {
						setTimeout(function () {
							_common.common.removeLoadingView();
							alert("One item has add to bag.");
						}, 1000);
					}
				});
			}
		}, {
			key: 'switchDescSegment',
			value: function switchDescSegment(_this) {
				if (_this.hasClass('active')) return;
				_this.addClass('active').siblings('a').removeClass('active');
				_this.parents('.title_tabs').siblings('.desc_content_wrap').find('.detail_content:eq(' + _this.index() + ')').show().siblings('.detail_content').hide();
				/*let _index = _this.index();
	   let _target = _this.parents('.segment_box').siblings('.segment_content').find('.segment_section' + _index);
	   if (_this.hasClass('active')) {
	       _this.removeClass('active');
	       _target.hide();
	       _this.parents('.segment_box').removeClass('content_show');
	   } else {
	       _this.addClass('active').siblings('.seg_item').removeClass('active');
	       _target.show();
	       _target.siblings('div').hide();
	       _this.parents('.segment_box').addClass('content_show');
	   }*/
			}
		}, {
			key: 'iconWishClick',
			value: function iconWishClick(_this) {
				if (_this.hasClass('loading')) return;
				if (_this.hasClass('icon_wish_theme')) {
					confirm('Product already exist');
					return;
				};
				$.getJSON({
					url: './js/test.json',
					beforeSend: function beforeSend() {
						_this.addClass('loading');
					},
					success: function success(res) {
						setTimeout(function () {
							_this.removeClass('loading');
							_this.removeClass('icon_wish_gray').addClass('icon_wish_theme');
							_this.siblings('small').text(parseInt(_this.siblings('small').text()) + 1);
						}, 2000);
					}
				});
			}
		}]);

		return Product;
	}();

	var product = exports.product = new Product();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _common = __webpack_require__(4);

	var _home = __webpack_require__(8);

	var _product = __webpack_require__(6);

	$(function () {
		$('.home_container').length && _home.home.initHomeSwipe();
		$('.product_container').length && _product.product.initProductSwipe();
		_common.common.imgLazyLoad();
	});

	$(window).scroll(function () {
		$('.home_container').length && _home.home.fixedRecommendNav();
		$('.backtop').length && _common.common.diaplayBackTop();
	});

	$(document).on("focus", ".search_box input.field_default", function () {
		_common.common.handleSearchFocus($(this));
	}).on("blur", ".search_box input.field_default", function () {
		_common.common.handleSearchBlur($(this));
	}).on("click", ".backtop .icon_to_top", function () {
		_common.common.handleBackTopClick($(this));
	}).on("click", ".home_recommend .more big", function () {
		_home.home.getMoreProducts($(this));
	}).on('click', '.product_option .op_btns a.add_wish_btn', function () {
		$('.product_text .wish_label .icon').trigger('click');
	}).on('click', '.product_text .wish_label .icon', function () {
		_product.product.iconWishClick($(this));
	}).on('click', '.product_desc .title_tabs a', function () {
		_product.product.switchDescSegment($(this));
	}).on('click', '.product_size dl.dl_qty span', function () {
		_common.common.handleQuantityClick($(this));
	}).on('change', '.product_size .select_box select,.product_size dl.dl_qty input[type=number]', function () {
		_product.product.checkStyleSelect($(this));
	}).on("click", ".product_option .op_btns .add_bag_btn", function () {
		_product.product.handleAddBag($(this));
	}).on("click", ".recommend_nav ul li", function () {
		_home.home.switchRecommendNav($(this));
	}).on('click', '.header .nav_item .icon_menu', function (event) {
		_common.common.slideMenuToggle($(this));
	}).on('click', '.list_group .list_group_item .group_top', function (event) {
		_common.common.slideSubGroup($(this));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Swiper, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.home = exports.cateObj = exports.BASE_URL = exports.home_swipe = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var home_swipe = exports.home_swipe = '';
	var BASE_URL = exports.BASE_URL = 'http://gm.yoins.com/API/v1';
	var cateObj = exports.cateObj = {
		Recommend: 1
	};

	var Home = function () {
		function Home(homeSwipe, baseUrl, cateObj) {
			_classCallCheck(this, Home);

			this.homeSwipe = '';
			this.baseUrl = 'http://gm.yoins.com/API/v1';
			this.cateObj = {
				Recommend: 1
			};
		}

		_createClass(Home, [{
			key: 'initHomeSwipe',
			value: function initHomeSwipe() {
				this.homeSwipe = new Swiper('.home_swipe', {
					pagination: '.swiper-pagination',
					autoplay: 3000,
					loop: true,
					lazyLoading: true
				});
			}
		}, {
			key: 'switchRecommendNav',
			value: function switchRecommendNav(_this) {
				if (_this.hasClass('active')) return;
				var _view = _this.attr("data_view");
				_this.addClass('active').siblings('li').removeClass('active');
				var target_ul = _this.parents('.recommend_nav_wrap').siblings('.collection_view').children('ul[data_target=' + _view + ']');
				target_ul.length ? target_ul.show().siblings('ul').hide() : this.fecthCategoryProducts(_this, _view, 1);
			}
		}, {
			key: 'fecthCategoryProducts',
			value: function fecthCategoryProducts(_this, _view, _index) {
				var _this2 = this;

				$.ajax({
					url: 'http://gm.yoins.com/API/v1/index/getRecommendProList?name=' + _view + '&page=' + _index,
					type: 'get',
					async: true,
					beforeSend: function beforeSend() {
						_this.parent().hasClass('more') ? _this.text('Loading ...') : _common.common.addLoadingView();
					},
					success: function success(res) {
						_this.parent().hasClass('more') ? _this.text('VIEW MORE') : _common.common.removeLoadingView();
						var json = JSON.parse(res);
						var sub_htm = '';
						json.productList.forEach(function (item) {
							// console.log(item);
							sub_htm += '<li class="col_4 ' + _view + '_' + _index + '">\n\t\t                <a href="' + item.href + '">\n\t\t                    <div class="img_box">\n\t\t                      <img data-original="' + item.img + '" src="../images/grey.gif" class="img_responsive lazy" />\n\t\t                    </div>\n\t\t                    <div class="item_text">\n\t\t                        <strike>US&#36;' + item.oldPrice + '</strike>\n\t\t                        <strong>US&#36;' + item.currentPrice + '</strong>\n\t\t                    </div>\n\t\t                    <span class="discount_label">' + item.discount + '%OFF</span>\n\t\t                </a>\n\t\t                <span class="absolute_right wish_label">\n\t\t                  <i class="icon icon_wish_empty"></i>\n\t\t                  <small>' + item.wishCount + '</small>\n\t\t                </span>\n\t\t            </li>';
						});
						if (_this.parents('.recommend_nav').length) {
							$('.home_recommend .collection_view').append('<ul data_target="' + _view + '">' + sub_htm + '<ul>');
							$('.home_recommend .collection_view ul[data_target=' + _view + ']').siblings('ul').hide();
							_this2.cateObj[_view] = _index;
						} else {
							$('.home_recommend .collection_view ul[data_target=' + _view + ']').append(sub_htm);
							_this2.cateObj[_view] += 1;
						}

						$('.collection_view ul[data_target=' + _view + '] li.' + _view + '_' + _index).find('img').lazyload({
							effect: "fadeIn",
							threshold: 300
						});
					}
				});
			}
		}, {
			key: 'getMoreProducts',
			value: function getMoreProducts(_this) {
				var cate = $('.recommend_nav ul li.active').attr('data_view');
				var pageIndex = this.cateObj[cate] + 1;
				this.fecthCategoryProducts(_this, cate, pageIndex);
			}
		}, {
			key: 'fixedRecommendNav',
			value: function fixedRecommendNav() {
				var _offtop = $('.recommend_nav_wrap').offset().top - 46;
				$(document).scrollTop() > _offtop ? $('.recommend_nav').addClass('fixed_under') : $('.recommend_nav').removeClass('fixed_under');
			}
		}]);

		return Home;
	}();

	var home = exports.home = new Home();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(1)))

/***/ }
]);