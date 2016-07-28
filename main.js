import {
	common
} from './public/modules/common'
import {
	home
} from './public/modules/home'
import {
	product
} from './public/modules/product'

$(function() {
	$('.home_container').length && home.initHomeSwipe();
	$('.product_container').length && product.initProductSwipe();
	common.imgLazyLoad();
});

$(window).scroll(function() {
	$('.home_container').length && home.fixedRecommendNav();
	$('.backtop').length && common.diaplayBackTop();
});

$(document)
	.on("focus", ".search_box input.field_default", function() {
		common.handleSearchFocus($(this));
	})
	.on("blur", ".search_box input.field_default", function() {
		common.handleSearchBlur($(this));
	})
	.on("click", ".backtop .icon_to_top", function() {
		common.handleBackTopClick($(this));
	})
	.on("click", ".home_recommend .more big", function() {
		home.getMoreProducts($(this));
	})
	.on('click', '.product_option .op_btns a.add_wish_btn', function() {
		$('.product_text .wish_label .icon').trigger('click');
	})
	.on('click', '.product_text .wish_label .icon', function() {
		product.iconWishClick($(this));
	})
	.on('click', '.product_desc .title_tabs a', function() {
		product.switchDescSegment($(this));
	})
	.on('click', '.product_size dl.dl_qty span', function() {
		common.handleQuantityClick($(this));
	})
	.on('change', '.product_size .select_box select,.product_size dl.dl_qty input[type=number]', function() {
		product.checkStyleSelect($(this));
	})
	.on("click", ".product_option .op_btns .add_bag_btn", function() {
		product.handleAddBag($(this));
	})
	.on("click", ".recommend_nav ul li", function() {
		home.switchRecommendNav($(this));
	})
	.on('click', '.header .nav_item .icon_menu', function(event) {
		common.slideMenuToggle($(this));
	})
	.on('click', '.list_group .list_group_item .group_top', function(event) {
		common.slideSubGroup($(this))
	});