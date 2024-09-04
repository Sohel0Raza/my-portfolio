import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

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
    <div id="contactSection">
      <div className="w-full mt-14 md:mt-20 py-5">
        <div className=" pb-50 px-10 md:px-0">
          <h2 className=" font-bold text-4xl mb-5">Contact Me</h2>
          <p>
            Let's talk how I can help you to grow your business. I appreciate
            any kind of suggestions or feedback.
          </p>
        </div>
        <div className="md:flex justify-between items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="px-10 md:px-0"
          >
            <div className="flex items-center">
              <div>
                <AiFillPhone className="myIcon" />
              </div>
              <div className="ml-5">
                <h2 className="text-2xl font-bold">Phone</h2>
                <p className="text-lg pt-2 font-medium text-[#EBECEC]">
                  +8801814881491
                </p>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div>
                <MdEmail className="myIcon" />
              </div>
              <div className="ml-5">
                <h2 className="text-2xl font-bold">Email</h2>
                <p className="text-lg pt-2 font-medium text-[#EBECEC]">
                  soheldot1239@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center my-5">
              <div>
                <MdLocationOn className="myIcon" />
              </div>
              <div className="ml-5">
                <h2 className="text-2xl font-bold">Location</h2>
                <p className="text-lg pt-2 font-medium text-[#EBECEC]">
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
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full md:ml-20 px-5 md:px-0 "
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="md:w-4/5 mx-auto mt-12 py-7 px-5 md:px-10 rounded-md "
            >
              <div className="form-control relative my-5">
                <input type="text" name="name" required className="myInput" />
                <label className="myLabel">Name</label>
              </div>
              <div className="form-control relative mb-5">
                <input
                  type="email"
                  name="sender_email"
                  required
                  className="myInput"
                />
                <label className="myLabel">Email</label>
              </div>
              <div className="form-control relative mb-5">
                <input
                  type="text"
                  name="subject"
                  required
                  className="myInput"
                />
                <label className="myLabel">Subject</label>
              </div>
              <div className="form-control relative">
                <textarea
                  type="text"
                  name="message"
                  required
                  className="myInput"
                />
                <label className="myLabel">Message</label>
              </div>
              <div className="form-control mt-6">
                <input className="btn-primary" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
