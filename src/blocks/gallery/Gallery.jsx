import React, { Component } from "react";

import GalleryTexts from "./GalleryTexts";
import PropTypes from "prop-types";
import _ from "lodash";

// Mapeo de servicio → ruta del placeholder en /public/assets
const placeholders = {
  crianza: "/assets/img/placeholder/crianza.jpg",
  perinatal: "/assets/img/placeholder/perinatal.jpg",
  bienestar: "/assets/img/placeholder/bienestar.jpg",
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  handleClick = (i) => {
    this.setState({ selected: i });
  };

  render() {
    const { data, service, menu, texts, heroImage } = this.props;

    // 👇 Prioridad: imagen del CMS → si no, placeholder
    const src =
      heroImage && heroImage.trim() !== ""
        ? heroImage
        : placeholders[service] || "";

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
                          title={item.heading}
                          className={
                            "btn btn-link transform-scale-h click" +
                            (key === this.state.selected ? " active" : "")
                          }
                          onClick={() => this.handleClick(key)}
                          aria-current={
                            key === this.state.selected ? "true" : undefined
                          }
                        >
                          {item.heading}
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
  heroImage: PropTypes.string, // 👈 CMS image
};

export default Gallery;
