import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email");
    } else {
      navigate("/success");
    }
  };

  return (
    <div className="lg:w-[1400px] mx-auto">
      <header>
        <nav className="flex justify-between m-4 p-4">
          <div>
            <Link to="/">
              <img src="./logo.png" alt="" />
            </Link>
          </div>
          <div className="flex gap-4 ">
            <Link to={"/"}>
              <div className="border p-2 rounded-full">
                <img src="./Close.png" alt="" />
              </div>
            </Link>
          </div>
        </nav>
      </header>

      <div>
        <div className="text-center my-12">
          {" "}
          <p className="covered-by-your-grace-regular text-3xl my-2 text-green-500 ">
            Registration Form
          </p>
          <h2 className="text-5xl leading-[4rem] font-semibold">
            Start your success <br />
            Journey here!
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex w-[350px] mx-auto items-center justify-center flex-col">
            <input
              className="border p-4 mb-6 w-[350px] bg-gray-200 rounded-[4rem] outline-none"
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className="border p-4 w-[350px] mb-2 bg-gray-200 rounded-[4rem] outline-none"
              placeholder="Enter your email"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {emailError && (
              <p className="text-left  w-full flex items-center justify-start text-red-600 font-semibold">
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                {emailError}
              </p>
            )}
            <input
              type="submit"
              value="Submit"
              className={`p-4 cursor-pointer w-[350px] mt-4 transition bg-gray-900 text-white rounded-[2rem] hover:bg-gray-800 ${
                !formData.name || !formData.email
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!formData.name || !formData.email}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
