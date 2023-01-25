import React from "react";
import imagen from "../../assets/img/placeholder/online-presencial.jpg";

const HowTo = () => {
  return (
    <section id="howTo" className="block spacer p-top-xl mb-4">
      <div className="wrapper">
        <h4 className="text-right">
          <span className="line">Cómo</span> lo hacemos?
        </h4>
        <div className="row gutter-width-lg with-pb-lg">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card">
              <div
                className="card-body p-large img"
                style={{
                  backgroundImage: `url(${imagen})`,
                  backgroundRepeat: `no-repeat`,
                }}
              >
                <h4>Presencial</h4>
                <p className="mt-0">Presencial</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-large">
                <h4>Online</h4>
                <p className="mt-0">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
