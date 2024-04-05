import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import LeftSide from "../components/LeftSide";
import NewsCard from "../components/NewsCard";
import RightSide from "../components/RightSide";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const  news  = useLoaderData();
  console.log(news)
  return (
    <div>
      <Header />
      <Nav />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 my-5">
        <div>
          <LeftSide />
        </div>
        <div className="lg:col-span-2">
          <h3 className="mb-4">Dragon News Home</h3>
          <div className="flex flex-col gap-8">
          {
            news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}/>)
          }
          </div>
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
