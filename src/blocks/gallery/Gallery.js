import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import GalleryTexts from "./GalleryTexts";
import { isMobile } from "react-device-detect";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  handleClick(i, e) {
    // e.preventDefault();

    this.setState({
      selected: i,
    });

    return false;
  }

  render() {
    const data = this.props.data;
    const service = this.props.service;
    return (
      <>
        {/* {!isMobile ? (
          <div className="gallery">
            <div className={"gallery-item-wrapper"}>
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
        ) : ( */}
        <div className="gallery">
          <div className="wrapper">
            <ul className="gallery-filter list-unstyled no-space mb-4">
              {this.props.menu &&
                data.map((item, key) => (
                  <React.Fragment key={key}>
                    <li>
                      <a
                        href={`#${item.anchor}`}
                        title={item.title}
                        className={
                          "btn btn-link transform-scale-h click" +
                          (key === this.state.selected ? " active" : "")
                        }
                        onClick={(event) => {
                          this.handleClick(key, event);
                        }}
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
          <div className="row gutter-width-lg single-content">
            <div className="col-xl-12 col-lg-7 col-md-7 col-sm-12">
              <div className="img object-fit">
                <div className="object-fit-cover">
                  <img
                    src={require(`../../assets/img/placeholder/${service}.jpg`)}
                    alt={_.capitalize(this.props.service)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
        {this.props.texts ? <GalleryTexts data={data} /> : null}
      </>
    );
  }
}

Gallery.propTypes = {
  seeMore: PropTypes.string,
  paddingBottomClass: PropTypes.string,
};

export default Gallery;
