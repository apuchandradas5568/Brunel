import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const [seconds, setSeconds] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const reduceSeconds = () => {
      const newTime = seconds - 1;
      setSeconds(newTime);
    };

    setInterval(reduceSeconds, 1000);
    seconds === 0 && navigate("/");
  }, [seconds]);

  return (
    <div className="lg:w-[1400px] mx-auto">
      <header>
        <nav className="flex justify-between m-4 p-4">
          <div>
            <Link to="/">
              <img src="./logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="flex gap-4 "></div>
        </nav>
      </header>

      <div className="text-center w-2/3 mx-auto flex flex-col justify-center items-center my-12">
        <img className="mb-6" src="./success.png" alt="Success" />
        <p className="covered-by-your-grace-regular text-3xl my-2 text-green-500 ">
          Success Submitted
        </p>
        <h2 className="text-5xl leading-[4rem] font-semibold">
          Congratulations
        </h2>
        <p className="my-4 text-2xl leading-10 font-medium text-gray-600">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates.
        </p>
      </div>

      <div>
        <p className="mb-12 text-center text-xl">
          Redirecting you to Homepage in{" "}
          <span className="font-bold">{seconds} seconds</span>
        </p>
      </div>
    </div>
  );
}
