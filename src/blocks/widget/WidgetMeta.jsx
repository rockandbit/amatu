import React from "react";

const WidgetCategories = () => {
  return (
    <div id="meta-2" className="widget widget_meta">
      <h5 className="widget-title">Meta</h5>

      <ul>
        <li>
          <a title="Log in" href={"/journal"}>
            Log in
          </a>
        </li>

        <li>
          <a title="Entries RSS" href={"/journal"}>
            Entries <abbr title="Really Simple Syndication">RSS</abbr>
          </a>
        </li>

        <li>
          <a title="Comments RSS" href={"/journal"}>
            Comments <abbr title="Really Simple Syndication">RSS</abbr>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WidgetCategories;
