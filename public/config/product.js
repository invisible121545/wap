var proConfig = {
	hreadConf: {
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
		}],
		hasLogo: true,
		title: null
	},
	productSwipe: [{
		img: 'img',
		color: 'color' //这个属性绑定到下面color相同的ID属性(color.value)
	}],
	productInfo: {
		title: 'title',
		currentPrice: 99,
		oldPrice: 99,
		discount: 99,
		reviewPercent: 80,
		reviewCount: 99,
		wishCount: 99,
		isWish: true
	},
	productColor: {
		current: 'current', //对应color.value
		color: {
			text: 'color',
			value: 11
		}
	},
	productSize: {
		current: 'current', //同上
		size: {
			text: 'size',
			value: 222
		}
	},
	//如果需要限制产品购买数量 加入这个属性
	maxQty: 99,

	//产品描述
	productDesc: {
		detail: 'detail',
		sizeChart: 'sizeChart',
	},
	productReview: {
		href: 'href',
		reviewList: [{
			avator: 'avator', //评论者头像
			customerName: 'customerName',
			reviewPercent: 99,
			date: 'date',
			title: 'title',
			text: 'text',
			sizeInfo: 'sizeInfo',
			likeCount: 99,
			dislikeCount: 99,
			isReview: true
		}]
	},
	// 推荐产品模块 结构与首页产品列表一样
	productSimilar: [{
		// 所属分类 string
		category: 'Recommend',
		productId: 'productColor',
		href: 'href',
		img: 'img',
		oldPrice: 99,
		currentPrice: 99,
		discount: 30,
		wishCount: 99
	}]
}

module.exports = proConfig;