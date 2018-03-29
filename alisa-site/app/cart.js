let express = require('express');
let router = express.Router();

let cart_model = require('../models/cart');

/* GET home page. */
router.post('/get', function(req, res, next) {

  if (req.body.cart == null) {
    res.json({'error': 1, 'products': {}});
  } else {
    // перебераем cart
    let to_model = req.body.cart.map((item, key) => {
      console.log(typeof item.productId);
      if (typeof item.productId == 'string') {
        return parseInt(item.productId);
      }else if (typeof item.productId == 'number') {
        return item.productId;
      } else {
        return 0;
      }
    });

    let cart_resp_products = [];
    cart_model.get(to_model).then((products) => {
      // собираем продукты
      cart_resp_products = products.map((product, key) => {

        // проставляем кол-во
        req.body.cart.map((item_b, key) => {
          if (parseInt(item_b.productId) == product.id) {
            product.count = item_b.count;
          }
        });

        return product;
      });
      res.json({'error': 0, 'products': cart_resp_products});
    });
  }

});

module.exports = router;
