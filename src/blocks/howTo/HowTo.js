import React from "react";
import servicio from "../../assets/img/servicio1.png";

const HowTo = () => {
  return (
    <section id="howTo" class="block spacer p-top-xl mb-4">
      <div className="wrapper">
        <h4 class="text-right">
          <span class="line">Cómo</span> lo hacemos?
        </h4>
        <div class="row gutter-width-lg with-pb-lg">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
              <div
                className="card-body p-large"
                style={{
                  backgroundImage: `url("https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg")`,
                }}
              >
                <h4>Presencial</h4>
                <p class="mt-0">Presencial</p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="card">
              <div class="card-body p-large">
                <h4>Online</h4>
                <p class="mt-0">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
