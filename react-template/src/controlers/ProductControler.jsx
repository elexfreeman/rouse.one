import React, {Component} from 'react';
require('imports-loader?window.jQuery=jquery!../jquery/jquery.elevatezoom.min.js');

class ProductControler extends Component {
  constructor(props) {
    super(props);
    // берем картинку из рута
    let root = document.getElementById('root');
    console.log(root.getAttribute('img'))
    this.state = {
      img: root.getAttribute('img')
    };
  }

  // после рендеринго
  componentDidMount() {
    // проверяем ширину
    if (document.documentElement.clientWidth >= 768) {
      //если это десктоп
      $('#zoom_01').elevateZoom({
        tint: true,
        tintOpacity: 0.5
      });
    }
  }

  render() {
    return ( <div>
      <img className="img-responsive" id="zoom_01"   data-zoom-image={this.state.img} src={this.state.img} / >

      </div>)
    }
  }

  export default ProductControler;
