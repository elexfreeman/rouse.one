let express = require('express');
let router = express.Router();
let Categories = require('../../models/categories');
let left_menu = require('../../models/left_menu');

/* GET home page. */
router.get('/', function(req, res, next) {

  let Url = req.baseUrl.replace('\\', '');
  Url = Url.replace('/', '');
  Url = Url.split('/');
  Url = Url[1];

  let categories = [];
  let category = {};

  left_menu().then((c) => {
    categories = c;
    //получаем категории
    return Categories.getCategoryByUrl(Url);
  }).then((c) => {
    category = c;
    // получчаем продукты категории
    return Categories.getProducts(Url);
  }).then((categoryProducts) => {
    /* seo */

    let title = 'Rouse.One - ' + category.caption;
    let description = 'Rouse.One - Интернет магазин экологичекий косметики';
    let keywords = '';
    category.products = categoryProducts;

    res.render('category_page/index', {
      title: title,
      description: description,
      keywords: keywords,
      category: category,
      categories: categories,
      Url: Url
    });
  });
});

module.exports = router;
