import React, { Component } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

class GalleryTexts extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="block spacer p-top-xl">
        <div className="row gutter-width-lg with-pb-lg">
          {data &&
            data.map((item, key) => {
              return (
                <div
                  id={item.anchor}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                >
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h4>{item.title}</h4>
                      <p className="p-large">{parse(item.description)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

GalleryTexts.propTypes = {
  seeMore: PropTypes.string,
  paddingBottomClass: PropTypes.string,
};

export default GalleryTexts;
