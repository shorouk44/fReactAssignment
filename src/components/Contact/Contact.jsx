import React from "react";
import style from "./contact.module.css";
export default function Contact() {
  return (
    <>
      <section className={style.bg}>
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center  ">
      

          <div className="container py-5 ">
            <div className="text-center  py-4">
              <h1 className="text-white text-uppercase"> conatct section</h1>
            </div>
            <div>
              <input
                id="userName"
                type="text"
                className="form-control mb-3 fs-6"
                placeholder="Name"
              />
              <input
                id="email"
                type="email"
                className="form-control mb-3 fs-6"
                placeholder="Email Adress"
              />
              <input
                id="phoneNumber"
                type="tel"
                className="form-control mb-3 fs-6"
                placeholder="PhoneNumber"
              />
              <textarea
                id="message"
                name="message"
                className="form-control mb-3 fs-5"
                placeholder="Message"
              ></textarea>
              <button className="btn fs-3 mt-3 text-white fw-bold border border-3 px-4 py-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
