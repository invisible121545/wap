import {
	common
} from './common'
import 'lazyload'
export let home_swipe = '';
export let BASE_URL = 'http://gm.yoins.com/API/v1'
export let cateObj = {
	Recommend: 1
};
class Home {
	constructor(homeSwipe, baseUrl, cateObj) {
		this.homeSwipe = '';
		this.baseUrl = 'http://gm.yoins.com/API/v1';
		this.cateObj = {
			Recommend: 1
		}
	}
	initHomeSwipe() {
		this.homeSwipe = new Swiper('.home_swipe', {
			pagination: '.swiper-pagination',
			autoplay: 3000,
			loop: true,
			lazyLoading: true
		});
	}
	switchRecommendNav(_this) {
		if (_this.hasClass('active')) return;
		let _view = _this.attr("data_view");
		_this.addClass('active').siblings('li').removeClass('active');
		let target_ul = _this.parents('.recommend_nav_wrap').siblings('.collection_view').children('ul[data_target=' + _view + ']');
		target_ul.length ? target_ul.show().siblings('ul').hide() : this.fecthCategoryProducts(_this, _view, 1);
	}
	fecthCategoryProducts(_this, _view, _index) {
		$.ajax({
			url: 'http://gm.yoins.com/API/v1/index/getRecommendProList?name=' + _view + '&page=' + _index,
			type: 'get',
			async: true,
			beforeSend: () => {
				_this.parent().hasClass('more') ? _this.text('Loading ...') : common.addLoadingView();
			},
			success: (res) => {
				_this.parent().hasClass('more') ? _this.text('VIEW MORE') : common.removeLoadingView();
				let json = JSON.parse(res);
				let sub_htm = '';
				json.productList.forEach(function(item) {
					// console.log(item);
					sub_htm += `<li class="col_4 ${_view}_${_index}">
		                <a href="${item.href}">
		                    <div class="img_box">
		                      <img data-original="${item.img}" src="../images/grey.gif" class="img_responsive lazy" />
		                    </div>
		                    <div class="item_text">
		                        <strike>US&#36;${item.oldPrice}</strike>
		                        <strong>US&#36;${item.currentPrice}</strong>
		                    </div>
		                    <span class="discount_label">${item.discount}%OFF</span>
		                </a>
		                <span class="absolute_right wish_label">
		                  <i class="icon icon_wish_empty"></i>
		                  <small>${item.wishCount}</small>
		                </span>
		            </li>`;
				});
				if (_this.parents('.recommend_nav').length) {
					$('.home_recommend .collection_view').append(`<ul data_target="${_view}">${sub_htm}<ul>`);
					$(`.home_recommend .collection_view ul[data_target=${_view}]`).siblings('ul').hide();
					this.cateObj[_view] = _index;
				} else {
					$(`.home_recommend .collection_view ul[data_target=${_view}]`).append(sub_htm);
					this.cateObj[_view] += 1;
				}

				$(`.collection_view ul[data_target=${_view}] li.${_view}_${_index}`).find('img').lazyload({
					effect: "fadeIn",
					threshold: 300
				});
			}
		})
	}
	getMoreProducts(_this) {
		const cate = $('.recommend_nav ul li.active').attr('data_view');
		const pageIndex = this.cateObj[cate] + 1;
		this.fecthCategoryProducts(_this, cate, pageIndex);
	}

	fixedRecommendNav() {
		const _offtop = $('.recommend_nav_wrap').offset().top - 46;
		$(document).scrollTop() > _offtop ? $('.recommend_nav').addClass('fixed_under') : $('.recommend_nav').removeClass('fixed_under');
	}
}

export let home = new Home();