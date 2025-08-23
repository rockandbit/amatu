// src/blocks/gallery/Gallery.jsx
import React, { Component } from "react";

import GalleryTexts from "./GalleryTexts";
import PropTypes from "prop-types";
import _ from "lodash";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };

    // Carga eager para placeholders
    this.placeholderImages = import.meta.glob(
      "../../assets/img/placeholder/*.jpg",
      { eager: true }
    );
  }

  handleClick = (i) => {
    this.setState({ selected: i });
  };

  // Utilidad para obtener el módulo ESM o valor directo
  getImageModule = (path) => {
    const mod =
      this.placeholderImages[path] &&
      (this.placeholderImages[path].default || this.placeholderImages[path]);
    return mod;
  };

  render() {
    const { data, service, menu, texts, heroImage } = this.props;

    const imgPath = `../../assets/img/placeholder/${service}.jpg`;
    const src =
      heroImage && heroImage.trim() !== ""
        ? heroImage
        : this.getImageModule(`../../assets/img/placeholder/${service}.jpg`);

    // Si conoces tamaño real del JPG, ponlo aquí (evita CLS).
    // Ejemplo: 1600x900 -> aspect-ratio: 16/9
    const aspectRatio = "16 / 9";

    return (
      <>
        <div className="gallery">
          <div className="wrapper">
            {menu && (
              <nav aria-label="Secciones de la galería">
                <ul className="gallery-filter list-unstyled no-space mb-4 d-flex flex-wrap">
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
                          onClick={() => this.handleClick(key)}
                          aria-current={
                            key === this.state.selected ? "true" : undefined
                          }
                        >
                          {item.title}
                        </a>
                      </li>
                      {key !== data.length - 1 && (
                        <li aria-hidden="true">
                          <span className="btn btn-link">-</span>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className="row gutter-width-lg single-content">
            <div className="img mb-4">
              <div
                className="object-fit-cover"
                style={{ aspectRatio: "16 / 9" }}
              >
                {" "}
                <img
                  src={src}
                  alt={_.capitalize(service) || "Galería"}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {texts ? <GalleryTexts data={data} /> : null}
      </>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  service: PropTypes.string.isRequired,
  menu: PropTypes.bool,
  texts: PropTypes.bool,
  seeMore: PropTypes.string,
  paddingBottomClass: PropTypes.string,
};

export default Gallery;
