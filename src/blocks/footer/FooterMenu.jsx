// FooterMenu.jsx
import React from "react";
import dataFooterMenu from "../../data/footer/footerMenu";

const FooterMenu = () => {
  return (
    <nav
      className="menu-secondary"
      aria-label="Menú de enlaces del pie de página"
    >
      <ul className="clearfix list-unstyled m-0 p-0 d-flex flex-wrap justify-content-center">
        {dataFooterMenu &&
          dataFooterMenu.map((item, key) => {
            const isExternal = /^https?:\/\//i.test(item.link);
            return (
              <li key={key} className="mx-2 my-1">
                <a
                  title={item.title}
                  className="btn btn-link transform-scale-h border-0 p-0"
                  href={item.link}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default FooterMenu;
