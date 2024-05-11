import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animations/done.json";
import emailAnimation from "../../assets/animations/email.json";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  const [state, handleSubmit] = useForm("xwkgyaqo");

  return (
    <section className="contact-us ">
      <div className="left-contact ">
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="envolopIcon" />
        </span>
        <h1 className="title">Contact Us</h1>
      </div>
      <p className="sub-title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi magnam
        ducimus debitis ratione consectetur, odio exercitationem nemo facere,
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex" style={{ marginBottom: "2rem" }}>
            <label htmlFor="email">Email address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email adress"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="animation">
          {" "}
          <Lottie style={{ width: "350px" }} animationData={emailAnimation} />
        </div>
      </div>
      {state.succeeded && (
        <div className=" message flex">
          <Lottie
            style={{ width: "55px" }}
            loop="false"
            animationData={doneAnimation}
          />
          <h1>Your message has been sent successfully</h1>
        </div>
      )}
    </section>
  );
}
