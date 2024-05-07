import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

export default function HomePage() {
  return (
    <div className="lg:w-[1400px] mx-auto">
      <header>
        <nav className="flex justify-between m-4 p-4 border items-center rounded-[6rem]">
          <div>
            <Link to="/">
              <img src="./logo.png" alt="" />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="/register" >
              <Button outline={true} text={"Get Projects"} />
            </Link>
            <Link>
              <Button text={"Onboard Talent"} />
            </Link>
          </div>
        </nav>

        <div className="hero-section ">
          <div className="text-center my-12">
            <p className="covered-by-your-grace-regular text-3xl my-2 text-green-500 ">
              Success Stories
            </p>
            <h2 className="text-4xl leading-[3rem] font-semibold">
              Every success journey <br /> we’ve encountered.
            </h2>
          </div>

          <div className="flex relative flex-col lg:flex-row items-center justify-center gap-16">
            <div>
              <img src="./hero-photo.png" alt="" />


              <div className="absolute w-60 bg-white shadow-md p-6 rounded-lg top-36 lg:left-32 left-20 ">

                      <img className="absolute -top-6 -left-4" src="./spark.png" alt="" />

                      <h1 className="text-6xl mb-4">40%</h1>
                      <p className="text-[1rem] font-medium">Achieved reduction in project execution time by optimising team availability.</p>
              </div>
              <div className="absolute w-60 bg-white shadow-md px-6 py-4 rounded-full top-[26rem] lg:left-32 left-36 flex gap-4">
                  <img className="object-contain" src="./flight.png" alt="" />
                  <div>
                    <h1 className="font-bold text-2xl">10DAYS</h1>
                    <p>Staff Deployment</p>
                  </div>
              </div>
              <div className="absolute bg-[#002E18]  w-60 shadow-md px-6 py-4 rounded-lg top-[26rem]  left-[35rem] text-white ">
                    <p className="text-gray-400"> <span className="text-4xl text-white">$0.5</span> MILLION</p>
                    <p className="text-gray-300 mt-3 font-medium">Reduced client expenses by saving on hiring and employee costs.</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-medium leading-[2.5rem] ">
                Enhance fortune 50 <br /> company’s insights <br /> teams
                research <br />
                capabilities.
              </h3>

              <div className="flex gap-2 my-8">
                <span className="h-3 w-3 bg-green-600 hover:bg-green-700 transition-all inline-block rounded-full"></span>
                <span className="h-3 w-3 bg-gray-200 hover:bg-gray-300 transition-all inline-block rounded-full"></span>
                <span className="h-3 w-3 bg-gray-200 hover:bg-gray-300 transition-all inline-block rounded-full"></span>
              </div>

              <div className="lg:mt-32 mt-20">
                <Button text={"Explore More"} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="accordian-section mx-4 justify-between items-center flex flex-col lg:flex-row bg-[#E8EEE7] my-32 rounded-3xl p-12">
        <div>
          <p className="covered-by-your-grace-regular text-2xl text-gray-400 mb-4 ">
            What's on your mind
          </p>
          <h2 className="text-5xl font-semibold mb-8">Ask Questions</h2>
          <img src="./Union.png" alt="" />
        </div>
        <div className="  lg:w-[600px]">
          <Accordion question="Do you offer freelancers?" answer="Yes, our platform connects you with skilled freelancers across various domains." />
          <Accordion question="What’s the guarantee that I will be satisfied with the hired talent?" answer="We provide ratings, reviews, and portfolios of freelancers to help you make informed decisions. Additionally, we offer dispute resolution for quality assurance." />
          <Accordion question="Can I hire multiple talents at once?" answer="Yes, you can hire multiple freelancers for different tasks simultaneously or collaborate with a team of freelancers for a comprehensive project." />
          <Accordion question="Why should I not go to an agency directly?" answer="Freelancers often offer cost-effective solutions, flexibility, and specialized expertise compared to agencies. You have direct communication with freelancers, enabling better customization and control over your project." />
          <Accordion question="Who can help me pick the right skillset and duration for me?" answer="Our platform provides tools and resources to help you assess your project needs. Additionally, our support team is available to assist you in choosing the right freelancers and project timelines based on your requirements." />
        </div>
      </div>



    <footer className="flex font-medium text-gray-600 justify-between p-8 m-4 border rounded-[5rem]">
      <div>
        <p>&#169; Talup 2023. All rights reserved.</p>
      </div>
      <div className="flex gap-6 ">
        <Link className="underline">Terms & Conditions</Link>
        <Link className="underline" >Privacy Policy</Link>
      </div>
    </footer>


    </div>
  );
}
