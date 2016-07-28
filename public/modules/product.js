import {
	common
} from './common'
import iNoBounce from 'inobounce'

class Product {
	constructor(productSwipe) {
		this.productSwipe = '';
	}
	initProductSwipe() {
		this.productSwipe = new Swiper('.product_swipe', {
			pagination: '.swiper-pagination',
			loop: true,
			lazyLoading: true,
			spaceBetween: 2
		});
	}
	checkStyleSelect(_this) {
		var _arr = [];
		$('.product_size').find('select.field_default').each((index, el) => {
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
	handleAddBag(_this) {
		if (!this.checkStyleSelect(_this)) return;
		$.getJSON({
			url: './js/test.json',
			beforeSend: () => {
				common.addLoadingView()
			},
			success: (res) => {
				setTimeout(() => {
					common.removeLoadingView();
					alert("One item has add to bag.")
				}, 1000)
			}
		})
	}
	switchDescSegment(_this) {
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
	iconWishClick(_this) {
		if (_this.hasClass('loading')) return;
		if (_this.hasClass('icon_wish_theme')) {
			confirm('Product already exist');
			return;
		};
		$.getJSON({
			url: './js/test.json',
			beforeSend: () => {
				_this.addClass('loading');
			},
			success: (res) => {
				setTimeout(function() {
					_this.removeClass('loading');
					_this.removeClass('icon_wish_gray').addClass('icon_wish_theme');
					_this.siblings('small').text(parseInt(_this.siblings('small').text()) + 1);
				}, 2000)
			}
		})
	}
}

export let product = new Product();