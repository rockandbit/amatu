import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import GalleryTexts from "./GalleryTexts";

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
