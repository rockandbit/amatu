import React, { Component } from "react";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import PropTypes from "prop-types";
import GalleryMenuData from "../../data/gallery/galleryMenu";
import GalleryItemsData from "../../data/gallery/galleryItems";

class GalleryTexts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onFilterChange = this.onFilterChange.bind(this);

  //   this.state = {
  //     selected: 0,
  //     list: GalleryMenuData,
  //   };
  // }

  render() {
    return (
      <div className="block spacer p-top-xl">
        <div className="row gutter-width-lg with-pb-lg">
          {GalleryItemsData &&
            GalleryItemsData.map((item, key) => {
              return (
                <div
                  id={item.anchor}
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
                >
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <h4>{item.title}</h4>
                      <p className="p-large">{item.description}</p>
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
