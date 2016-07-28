 var homeConf = {
 	navItem: [{
 			href: 'javascript:;',
 			class: 'item_1',
 			icon: 'menu'
 		}, {
 			href: 'sign',
 			class: 'item_2',
 			icon: 'person'
 		}, {
 			href: 'wish',
 			class: 'item_3',
 			icon: 'wish'
 		}, {
 			href: 'bag',
 			class: 'item_4',
 			icon: 'bag'
 		}
 		/*, {
 			href: 'bag.html',
 			class: 'item_right',
 			text: 'Add Images'
 		}*/
 	],
 	hasLogo: true,
 	title: null
 }

 var home = {
 	headConf: {
 		navItem: [{
 				href: 'javascript:;',
 				class: 'item_1',
 				icon: 'menu'
 			}, {
 				href: 'sign',
 				class: 'item_2',
 				icon: 'person'
 			}, {
 				href: 'wish',
 				class: 'item_3',
 				icon: 'wish'
 			}, {
 				href: 'bag',
 				class: 'item_4',
 				icon: 'bag'
 			}
 			/*, {
 				href: 'bag.html',
 				class: 'item_right',
 				text: 'Add Images'
 			}*/
 		],
 		hasLogo: true,
 		title: null
 	},
 	// 轮播图 array > object
 	homeSwipe: [{
 		href: 'href',
 		img: 'imgSrc'
 	}],
 	// 广告栏 object > object
 	homeBanner: {
 		preOrder: {
 			href: 'href',
 			img: 'img'
 		},
 		newIn: {
 			href: 'href',
 			img: 'img'
 		},
 		onlyYoins: {
 			href: 'href',
 			img: 'img'
 		}
 	},

 	// 推荐模块导航栏分类 array
 	homeRecNav: ['Recommend', 'Dress'],
 	// 推荐模块产品列表 array > object
 	productList: [{
 		// 所属分类 string
 		category: 'Recommend',
 		productId: '',
 		href: 'href',
 		img: 'img',
 		oldPrice: 99,
 		currentPrice: 99,
 		discount: 30,
 		wishCount: 99
 	}, {
 		// 所属分类 string
 		category: 'Recommend',
 		productId: '',
 		href: 'href',
 		img: 'img',
 		oldPrice: 99,
 		currentPrice: 99,
 		discount: 30,
 		wishCount: 99
 	}, {
 		// 所属分类 string
 		category: 'Recommend',
 		productId: '',
 		href: 'href',
 		img: 'img',
 		oldPrice: 99,
 		currentPrice: 99,
 		discount: 30,
 		wishCount: 99
 	}],
 	// 多语言选项 array > object
 	commonLanguage: {
 		current: 'Dresses',
 		languages: [{
 			value: 'Tops',
 			text: 'Tops'
 		}, {
 			value: 'Dresses',
 			text: 'Dresses'
 		}]
 	},
 	// 币种 array > object
 	commonCurrency: {
 		current: 'US',
 		currencys: [{
 			value: 'UK',
 			text: 'UK'
 		}, {
 			value: 'US',
 			text: 'US'
 		}]
 	},

 	// 菜单及搜索弹层
 	// 推荐分类
 	menuRecommend: [{
 		href: 'href',
 		text: 'new in'
 	}],
 	//所有分类及子分类列表
 	categorys: [{
 		text: 'Dresses',
 		href: 'href',
 		categoryId: '',
 		subCategory: [{
 			text: 'Dresses',
 			href: 'href',
 			categoryId: '',
 			subCategory: [{
 				text: 'Dresses',
 				href: 'href',
 				categoryId: ''
 			}]
 		}]
 	}]
 }



 module.exports = home;