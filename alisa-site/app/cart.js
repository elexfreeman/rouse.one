let express = require('express');
let router = express.Router();

let cart_model = require('../models/cart');
let left_menu = require('../models/left_menu');
let Products = require('../models/products');

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

/* GET home page. */
router.get('/', function (req, res, next) {


    let Url = req.baseUrl.replace('\\', '');
    Url = Url.replace('/', '');
    let categories = [];
    let product = {};

    left_menu().then((c) => {
        categories = c;
        //получаем товар
        return Products.getByUrl(Url);
    }).then((product) => {

        /*seo*/
        let title = 'Rouse.One - ' + product.caption;
        let description = 'Rouse.One - Интернет магазин экологичекий косметики';
        let keywords = '';


        if( typeof product.description ==='string')
            product.description = product.description.replace(/\r\n|\r|\n/g,"<br />");

        res.render('cart_page/index', {
            title: title
            , description: description
            , keywords: keywords
            , product: product
            , categories: categories
            , Url: Url
            , base_href: 'cart'
        });
    });
});

module.exports = router;
