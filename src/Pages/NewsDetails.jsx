import { useEffect, useState } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import RightSide from "../components/RightSide";

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
          <Link to={"/"} className="no-underline text-white">
            <button className="btn btn-secondary bg-red-500 my-5 hover:bg-red-600">
              All News
            </button>
          </Link>
        </div>
        <div>
          <RightSide/>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
