import { useEffect, useState } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const [currentNews, setCurrentNews] = useState();
  useEffect(() => {
    const selectedNews = news.find((sNews) => sNews._id == id);
    setCurrentNews(selectedNews);
    console.log(currentNews);
  }, [currentNews, id, news]);
  const { title, image_url, details } = currentNews
    ? currentNews
    : "Loading...";
  return (
    <div>
      <Header />
      <Nav />
      <div className="grid grid-cols-1 my-6 gap-8 lg:grid-cols-4">
        <div className="col-span-3 w-full">
          <h3 className="mb-4">Dragon News</h3>
          <img className="w-full" src={image_url} alt="" />
          <h5 className="text-2xl my-2">{title}</h5>
          <p>{details}</p>
          <Link
            to={"/"}
            className="no-underline text-white"
          >
            <button className="btn btn-secondary bg-red-500 my-5 hover:bg-red-600">All News</button>
          </Link>
        </div>
        <div>
        <div className="w-full">
      <div className="mb-6">
        <h3 className="mb-4">Login With</h3>
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
        <div className="flex flex-col m-0 mb-4 rounded-md">
          <div className="flex items-center m-0 p-4 gap-2 border border-[#a5a4a4] rounded-md">
            <FaFacebook size={20} />
            <a
              target="_blank"
              className="w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
              href="https://www.facebook.com/maybemahiiii"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center p-4 m-0 gap-2">
            <FaTwitter size={20} />
            <a
              target="_blank"
              className="w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
              href="https://www.twitter.com/maybemahiiii"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center m-0 p-4 gap-2">
            <FaInstagram size={20} />
            <a
              target="_blank"
              className="w-full border no-underline text-[#4f4e4e] border-[#1d1a1a] rounded-t-lg"
              href="https://www.instagram.com/mayb3_mahdi"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col mb-6 bg-[#F3F3F3] p-[15px]">
          <h3>Q-Zone</h3>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
