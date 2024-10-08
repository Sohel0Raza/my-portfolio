import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../utils/Title";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_az2ousn",
        "template_wp7fe4f",
        form.current,
        "MaZH6oWdichytRZ2t"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result);
        },
        (error) => {
          e.target.reset();
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactSection">
      <div className="w-full md:mt-14 py-5">
        <Title heading={"Contact"} subHeading={"Get in Touch"}></Title>
        <div className="md:flex justify-between">
          <Slide direction="left" duration={1000} triggerOnce={true}>
            <div className="px-10 md:px-0 pb-5 ">
              <p className="pb-7">
                Let's talk how I can help you to grow your business. I
                appreciate any kind of suggestions or feedback.
              </p>
              <div className="flex items-center md:pt-5">
                <div>
                  <AiFillPhone className="contact-icon" />
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-bold">Phone</h2>
                  <p className="text-base pt-2 font-medium text-[#EBECEC]">
                    +8801814881491
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <div>
                  <MdEmail className="contact-icon" />
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-bold">Email</h2>
                  <p className="text-base pt-2 font-medium text-[#EBECEC]">
                    soheldot1239@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center my-5">
                <div>
                  <MdLocationOn className="contact-icon" />
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-bold">Location</h2>
                  <p className="text-base pt-2 font-medium text-[#EBECEC]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-cente justify-start space-x-4 pt-5">
                <a href="https://github.com/Sohel0Raza" title="GitHub">
                  <BsGithub className="myIcon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sohel-raza-361640282/"
                  title="Linkedin"
                >
                  <BsLinkedin className="myIcon" />
                </a>
                <a href="https://www.facebook.com/Mou.Himu12/" title="Facebook">
                  <BsFacebook className="myIcon" />
                </a>
              </div>
            </div>
          </Slide>
          <div className="w-full md:ml-40 md:px-0 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            <h2 className=" font-bold px-5 md:px-16 text-3xl py-7">
              Let's Work <span className="text-[#268aa3]">Together</span>
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" pb-5 px-5 md:px-16 rounded-md "
            >
              <Fade cascade damping={0.2} delay={500}>
                <div className="form-control relative md:my-5">
                  <input type="text" name="name" required className="myInput" />
                  <span className="myLabel">Your Name</span>
                </div>
                <div className="form-control relative mb-5">
                  <input
                    type="email"
                    name="sender_email"
                    required
                    className="myInput"
                  />
                  <span className="myLabel">Your Email</span>
                </div>
                <div className="form-control relative mb-5">
                  <input
                    type="text"
                    name="subject"
                    required
                    className="myInput"
                  />
                  <span className="myLabel"> Subject</span>
                </div>
                <div className="form-control relative">
                  <textarea
                    type="text"
                    name="message"
                    rows="3"
                    cols="50"
                    required
                    className="myInput"
                  />
                  <span className="myLabel"> Message</span>
                </div>
                <div className="form-control py-3">
                  <input className="btn-primary" type="submit" value="Send" />
                </div>
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
