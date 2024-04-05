import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { title, thumbnail_url, _id, details } = singleNews;
  return (
    <div className="flex flex-col gap-5 w-full bg-gray-200 p-6 rounded-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <img className="w-full h-[400px]" src={thumbnail_url} alt="" />
      {details.length > 200 ? (
        <p>
          {" "}
          {details.slice(0,200)}
          <Link to={`news/${_id}`} className="text-blue-500 font-semibold ml-2 no-underline">read more...</Link>
        </p>
      ) : (
        details
      )}
    </div>
  );
};

export default NewsCard;
