import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";
import login from "../assets/login.jpg";

function Contact() {
  const [UserContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleContact = (e) => {
    setUserContact({ ...UserContact, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();

    if (!UserContact.username || !UserContact.email || !UserContact.msg) {
      return toast.error("All Field Are Required");
    } else {
      addDoc(collection(db, "Contact Information"), {
        Name: UserContact.username,
        Email: UserContact.email,
        Message: UserContact.msg,
      })
        .then(() => {
          toast.success(
            `${UserContact.username} Your Message Sent Successfully! Thank You.`
          );
          setUserContact({
            username: "",
            email: "",
            msg: "",
          });
        })
        .catch(() => {
          toast.error("There is Something Wrong! Please Try Again");
        });
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={login}
          alt="loginimage"
          className="object-cover w-full object-center h-[200px]"
        />

        <div className="w-full h-[200px] bg-black absolute top-[0.16%] left-0 opacity-[0.5]"></div>
        <h2 className="absolute top-[40%] left-[44%] right-auto text-white font-semibold text-4xl md:text-5xl ">
          Contact Us
        </h2>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112333.78506300821!2d79.3395385392802!3d28.376054022884535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726646806890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              CONTACT US
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              If you have any query feel free to contact
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                id="Name"
                name="username"
                type="text"
                autoComplete="off"
                value={UserContact.username}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={UserContact.email}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="msg"
                name="msg"
                type="text"
                autoComplete="off"
                value={UserContact.msg}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleSubmitContact}
            >
              SUBMIT
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Check Message Before Sending.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
