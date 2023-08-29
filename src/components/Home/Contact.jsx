import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_az2ousn', 'template_wp7fe4f', form.current, 'MaZH6oWdichytRZ2t')
            .then((result) => {
                e.target.reset()
                console.log(result);
            }, (error) => {
                e.target.reset()
                console.log(error.text);
            });
    };
    return (
        <div id="contact">
            <div className="w-full mt-14 md:mt-20">
                <div className=" pb-50 px-10 md:px-0">
                    <h2 className="font-mono font-bold text-4xl mb-5">Contact Me</h2>
                    <p>Let's talk how I can help you to grow your business. I appreciate any kind of suggestions or feedback.</p>
                </div>
                <div className="md:flex justify-between items-center">
                    <div data-aos="fade-right" data-aos-duration="2000" className="px-10 md:px-0">
                        <div className="flex items-center">
                            <div>
                                <AiFillPhone className="text-4xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                            </div>
                            <div className="ml-5">
                                <h2 className="text-2xl font-bold">Phone</h2>
                                <p className="text-xl font-medium text-slate-600">+8801814881491</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div>
                                <MdEmail className="text-4xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                            </div>
                            <div className="ml-5">
                                <h2 className="text-2xl font-bold">Email</h2>
                                <p className="text-xl font-medium text-slate-600">soheldot1239@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center my-5">
                            <div>
                                <MdLocationOn className="text-4xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                            </div>
                            <div className="ml-5">
                                <h2 className="text-2xl font-bold">Location</h2>
                                <p className="text-xl font-medium text-slate-600">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex items-center ml-16 space-x-4 mt-5">
                            <a href="https://github.com/Sohel0Raza"><BsGithub className="shadow-2xl rounded-full text-4xl border-2 border-[#63616f]  p-1" /></a>
                            <a href="https://www.linkedin.com/in/sohel-raza-361640282/"><BsLinkedin className="shadow-2xl rounded-full text-4xl border-2 border-[#63616f] p-1" /></a>
                            <a href="https://www.facebook.com/Mou.Himu12/"><BsFacebook className="shadow-2xl rounded-full text-4xl border-2 border-[#63616f] p-1" /></a>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="w-full md:ml-20 px-5 md:px-0">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="card w-full bg-base-100">
                                <div className="card-body">
                                    <div className="form-control shadow-2xl rounded-lg my-5">
                                        <input type="text" placeholder="Your name" name="name" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control shadow-2xl  rounded-lg mb-5">
                                        <input type="email" placeholder="Email" name="sender_email" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control shadow-2xl rounded-lg mb-5">
                                        <input type="text" placeholder="Subject" name="subject" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control shadow-2xl rounded-lg">
                                        <textarea type="text" placeholder="Message" name="message" required className="textarea textarea-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn-primary" type="submit" value="Send" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;