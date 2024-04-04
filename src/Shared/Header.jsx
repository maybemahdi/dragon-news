import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        <img className="w-[200px] md:w-fit" src={logo} alt="" />
        <p className="m-2">Journalism Without Fear or Favour</p>
        <p className="m-0">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="flex items-center gap-6 mt-5">
        <button className="bg-red-500 text-white py-3 px-5 cursor-pointer rounded-lg border-0">
          Latest
        </button>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
          <p className="ml-10">
            {" "}
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
