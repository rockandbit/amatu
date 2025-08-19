import React from "react";

const PageTitle = ({ title, quote = undefined }) => {
  return (
    <section id="page-title">
      <div className="wrapper">
        <div className="title position-relative">
          <h1>
            {title}
            <span className="dot">.</span>
          </h1>
        </div>
        {quote ? (
          <blockquote className="ml-4">
            <p className="p-large mt-4">{quote}</p>
          </blockquote>
        ) : null}
      </div>
    </section>
  );
};

export default PageTitle;
