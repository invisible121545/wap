import {
	product_swipe
} from './product.js'
import 'lazyload'
import iNoBounce from 'inobounce'

class Common {
	slideSubGroup(_this) {
		_this.siblings('.inner_group').slideToggle(200);
		_this.find('i').toggleClass('rotate_up');
	}
	slideMenuToggle(_this) {
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
		_this.parent().hasClass('active') ? iNoBounce.enable() : iNoBounce.disable();
	}
	handleSearchFocus(_this) {
		_this.parents('.search_box').find('.search_list_wrap').show(20);
		_this.parents('.search_box').siblings('.category_container').hide();
	}
	handleSearchBlur(_this) {
		_this.parents('.search_box').find('.search_list_wrap').hide();
		_this.parents('.search_box').siblings('.category_container').show();
	}
	addLoadingView() {
		$('.container').append('<div class="loading_view"><div class="loading_section"><i></i></div></div>');
		$('.product_loading').show();
		$('body').addClass('disable_scroll');
		iNoBounce.enable();
	}
	removeLoadingView() {
		$('.container').find('.loading_view').remove();
		$('body').removeClass('disable_scroll');
		iNoBounce.disable();
	}
	imgLazyLoad() {
		$("img.lazy").lazyload({
			effect: "fadeIn",
			threshold: 300
		});
	}
	handleBackTopClick() {
		console.log(121);
		$('html,body').scrollTop(0);
	}
	diaplayBackTop() {
		$(window).scrollTop() > 300 ? $(".backtop .icon_to_top").css({
			'display': 'inline-block'
		}) : $(".backtop .icon_to_top").hide(10);
	}
	handleQuantityClick(_this) {
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
}

export let common = new Common();