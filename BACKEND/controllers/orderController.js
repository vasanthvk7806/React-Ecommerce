const orderModel = require('../models/orderModel');
//create Order = api/v1/order
exports.createOrder = async (req, res, next) => {
     const cardItems = req.body;
     const amount = Number( cardItems.reduce( (acc, item) =>(acc + item.product.price * item.qty), 0 )).toFixed(2);
     const status = 'pending';
    const order = await orderModel.create({cardItems, amount, status})
    res.json(
        {
            success:true,
            order
        }
    )
}