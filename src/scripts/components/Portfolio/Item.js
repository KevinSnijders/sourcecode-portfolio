import React, { Component } from 'react';
import Details from './Details';
import Image from '../Shared/Image';
import Resources from './Resources';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  getEvenOrOddItem(item) {
    const col = 'col-sm-auto col-md-6';
    const detailsLeft = `${col} col-lg-5 order-2 order-md-1 fade-in`;
    const previewRight = `${col} col-lg-7 order-1 order-md-2 fade-in-right`;
    const detailsRight = `${col} col-lg-5 fade-in`;
    const previewLeft = `${col} col-lg-7 fade-in-left`;

    const { index, title, description, demo, source, preview } = item;
    const position = this.calculateOddOrEven(index);
    const detailsCompontent = (
      <Details title={title} description={description} demo={demo} source={source} />
    );
    const imageComponent = (
      <Image
        source={preview}
        alt={`Showcase example of the website called: ${title}`}
        style="preview__portfolio"
      />
    );
    return position ? (
      <>
        <div className={previewLeft}>{imageComponent}</div>
        <div className={detailsRight}>{detailsCompontent}</div>
      </>
    ) : (
      <>
        <div className={detailsLeft}>{detailsCompontent}</div>
        <div className={previewRight}>{imageComponent}</div>
      </>
    );
  }

  calculateOddOrEven(index) {
    const NUMBER = 2;
    return index % NUMBER === 0;
  }

  render() {
    const { item } = this.props;
    return (
      <>
        {Object.entries(item).length > 0 ? (
          <div className="portfolio__item">
            <div className="row d-flex align-items-center">{this.getEvenOrOddItem(item)}</div>
            <div className="row d-flex justify-content-center">
              <Resources resources={item.resources} />
            </div>
          </div>
        ) : (
          <div>Empty</div>
        )}
      </>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object
};

export default Item;
