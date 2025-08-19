import React from "react";

const WidgetCategories = () => {
  return (
    <div id="categories-2" className="widget widget_categories">
      <h5 className="widget-title">Categories</h5>

      <ul>
        <li className="cat-item">
          <a title="Advertising" href={"/journal"}>
            Advertising
          </a>
        </li>

        <li className="cat-item">
          <a title="Web developing" href={"/journal"}>
            Web developing
          </a>
        </li>

        <li className="cat-item">
          <a title="Graphic design<" href={"/journal"}>
            Graphic design
          </a>
        </li>

        <li className="cat-item">
          <a title="HTML" href={"/journal"}>
            HTML
          </a>
        </li>

        <li className="cat-item">
          <a title="Creative" href={"/journal"}>
            Creative
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WidgetCategories;
