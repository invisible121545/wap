{
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
		discount: 30
	}],
	// 多语言选项 array > object
	commonLanguage: {
		current: '',
		languages: [{
			value: '',
			text: ''
		}]
	},
	// 币种 array > object
	commonCurrency: {
		current: '',
		currencys: [{
			value: '',
			text: ''
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
		href: '',
		categoryId: '',
		subCategory: [{
			text: '',
			href: '',
			categoryId: '',
			subCategory: [{
				text: '',
				href: '',
				categoryId: ''
			}]
		}]
	}]
}