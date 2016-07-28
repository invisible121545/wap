{
	productSwipe: [{
		img: 'img',
		color: '' //这个属性绑定到下面color相同的ID属性(color.value)
	}],
	productInfo: {
		title: '',
		currentPrice: 99,
		oldPrice: 99,
		discount: 99,
		reviewPercent: 80,
		reviewCount: 99,
		wishCount: 99,
		isWish: true
	},
	productColor: {
		current: '', //对应color.value
		color: [{
			text: '',
			value: ''
		}]
	},
	productSize: {
		current: '', //同上
		size: [{
			text: '',
			value: ''
		}]
	},
	//如果需要限制产品购买数量 加入这个属性
	maxQty: 99,

	//产品描述
	productDesc: {
		detail: '',
		sizeChart: '',
	},
	productReview: {
		href: '',
		addReview: 'href',
		reviewList: [{
			avator: '', //评论者头像
			customerName: '',
			reviewPercent: 99,
			date: '',
			title: '',
			text: '',
			sizeInfo: '',
			likeCount: '',
			dislikeCount: '',
			isReview: true
		}]
	},
	// 推荐产品模块 结构与首页产品列表一样
	productSimilar: [{
		// 所属分类 string
		category: 'Recommend',
		productId: '',
		href: 'href',
		img: 'img',
		oldPrice: 99,
		currentPrice: 99,
		discount: 30,
		wishCount: 99
	}]
}