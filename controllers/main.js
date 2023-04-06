const Products = require("../models/products")

exports.getE = (req, res, next) => {
	Products.electronics
		.findAll()
		.then((electronics) => {
			res.json(electronics)
		})
		.catch((err) => console.log(err))
}

exports.getS = (req, res, next) => {
	Products.skincare
		.findAll()
		.then((skincare) => {
			res.json(skincare)
		})
		.catch((err) => console.log(err))
}

exports.getF = (req, res, next) => {
	Products.food
		.findAll()
		.then((food) => {
			res.json(food)
		})
		.catch((err) => console.log(err))
}

exports.postE = (req, res, next) => {
	const price = req.body.price
	const name = req.body.name
	const catagory = req.body.catagoty

	Products.electronics.create({
		price: price,
		name: name,
		type: catagory,
	})
}

exports.postS = (req, res, next) => {
	const price = req.body.price
	const name = req.body.name
	const catagory = req.body.catagoty

	Products.skincare.create({
		price: price,
		name: name,
		type: catagory,
	})
}

exports.postF = (req, res, next) => {
	const price = req.body.price
	const name = req.body.name
	const catagory = req.body.catagoty

	Products.food.create({
		price: price,
		name: name,
		type: catagory,
	})
}

exports.deleteE = (req, res, next) => {
	const prodId = req.params.id

	Products.electronics
		.findByPk(prodId)
		.then(item => item.destroy())
		.catch((err) => console.log(err))
}

exports.deleteS = (req, res, next) => {
	const prodId = req.params.id

	Products.skincare
		.findByPk(prodId)
		.then(item => item.destroy())
		.catch((err) => console.log(err))
}

exports.deleteF = (req, res, next) => {
	const prodId = req.params.id

	Products.food
		.findByPk(prodId)
		.then(item => item.destroy())
		.catch((err) => console.log(err))
}
