import { Link } from "react-router-dom";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import "./shared.css";
import { FaGoogle } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const RightSide = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h3>Login With</h3>
        <Link>
          <button className="btn w-full mb-2 btn-outline">
          <FaGoogle />
            Log in with Google
          </button>
        </Link>
        <Link>
          <button className="btn w-full btn-outline text-black">
          <ImGithub />
            Log in with Github
          </button>
        </Link>
      </div>
      <div className="flex flex-col mb-6">
        <h3>Find Us On</h3>
        <div className="flex flex-col">
          <a
            target="_blank"
            className="p-2 w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
            href="https://www.facebook.com/maybemahiiii"
          >
            Facebook
          </a>
          <a
            target="_blank"
            className="p-2 w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
            href="https://www.twitter.com/maybemahiiii"
          >
            Twitter
          </a>
          <a
            target="_blank"
            className="p-2 w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
            href="https://www.instagram.com/mayb3_mahdi"
          >
            Instagram
          </a>
        </div>
        <div className="flex flex-col mb-6 bg-[#F3F3F3] p-[15px]">
          <h3>Q-Zone</h3>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
        <div className="bg-image h-fit px-8 py-16">
          <div className="flex flex-col items-center justify-center text-white">
            <h2 className="text-center">Create an Amazing Newspaper</h2>
            <p className="text-center">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn btn-secondary border-0 hover:border bg-red-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
