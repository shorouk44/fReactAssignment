import React from "react";
import Cards from "../Cards/Cards";

import style from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <section className={style.bg}>
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h2 className="text-uppercase">portfolio component</h2>
          <div className="container text-center">
            <div className="row py-5 my-5 " >
              <Cards />
            </div>
          </div>
        </div>





      </section>
    </>
  );
}
