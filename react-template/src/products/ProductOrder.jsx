import React from 'react';

const ProductOrder = ({}) => {

  return (<div className="product-order">
    <div className='price'>Итого: 20 200 руб.</div>
    <div className="divider"></div>

    <div className="columns">
      <div className="form-horizontal column col-xs-6 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">

        <div className="form-group">
          <div className="col-4 col-xs-6 col-md-6 col-lg-6 col-sm-12">
            <label className="form-label">Кол-во:</label>
          </div>
          <div className="col-4 col-xs-6 col-md-4 col-lg-6 col-sm-12">
            <input className="form-input" type="number" />
          </div>
        </div>

      </div>
      <div className="to_cart column col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-6">
        <button className="btn btn-primary  btn-lg">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; В корзину</button>
      </div>
    </div>

    <div className="divider"></div>
  </div>)

}

export default ProductOrder;
