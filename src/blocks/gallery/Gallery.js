import React, { Component } from "react";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import PropTypes from "prop-types";
import GalleryTexts from "./GalleryTexts";
import { isMobile } from "react-device-detect";
import perinatalImage from "../../assets/img/placeholder/perinatal_1.jpeg";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);

    this.state = {
      selected: 0,
    };
  }

  handleClick(i, e) {
    e.preventDefault();

    this.setState({
      selected: i,
    });

    return false;
  }

  onFilterChange = (newFilter) => {
    var gallery_items_name = this.grid;
    var gallery_item_name = ".gallery-item";

    if (this.iso === undefined) {
      this.iso = new Isotope(gallery_items_name, {
        itemSelector: gallery_item_name,
        masonry: {
          horizontalOrder: true,
        },
      });
    }

    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  componentDidMount() {
    var gallery_items_name = this.grid;
    var gallery_item_name = ".gallery-item";

    var iso = new Isotope(gallery_items_name, {
      itemSelector: gallery_item_name,
      masonry: {
        horizontalOrder: true,
      },
    });

    var imgLoad = new ImagesLoaded(gallery_items_name);

    imgLoad.on("progress", function (instance, image) {
      iso.layout();
    });
  }

  render() {
    const data = this.props.data;
    return (
      <>
        {!isMobile ? (
          <div className="gallery">
            <div
              className={"gallery-item-wrapper" + this.props.paddingBottomClass}
            >
              <div className="gallery-items" ref={(c) => (this.grid = c)}>
                {data &&
                  data.map((item, key) => {
                    return (
                      <a
                        key={key}
                        title={item.title}
                        className={"gallery-item active " + item.category}
                        href={`#${item.anchor}`}
                      >
                        <div className="img object-fit">
                          <div className="object-fit-cover">
                            <img src={item.imgLink} alt={item.title} />
                          </div>
                        </div>

                        <div className="gallery-hover">
                          <div className="gallery-hover-wrapper">
                            <h3 className="mb-3">{item.title}</h3>

                            <a
                              className="btn btn-link border-0 transform-scale-h p-0"
                              href={`#${item.anchor}`}
                            >
                              {item.button}
                              <i className="icon-c icon-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          <div className="gallery">
            <div className="wrapper">
              <ul className="gallery-filter list-unstyled no-space mb-4">
                {data.map((item, key) => (
                  <React.Fragment key={key}>
                    <li>
                      <a
                        href={`#${item.anchor}`}
                        title={item.title}
                        className={
                          "btn btn-link transform-scale-h click" +
                          (key === this.state.selected ? " active" : "")
                        }
                        data-filter={item.filter}
                      >
                        {item.title}
                      </a>
                    </li>

                    <li>
                      <span className="btn btn-link">-</span>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="img object-fit">
              <div className="object-fit-cover">
                <img src={perinatalImage} alt={"Perinatal"} />
              </div>
            </div>
          </div>
        )}
        <GalleryTexts data={data} />
      </>
    );
  }
}

Gallery.propTypes = {
  seeMore: PropTypes.string,
  paddingBottomClass: PropTypes.string,
};

export default Gallery;
