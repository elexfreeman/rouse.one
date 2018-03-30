let express = require('express');
let router = express.Router();

let left_menu = require('../../models/left_menu');
let Products = require('../../models/products');


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

        res.render('product_page/index', {
            title: title
            , description: description
            , keywords: keywords
            , product: product
            , categories: categories
            , Url: Url
        });
    });
});

module.exports = router;
