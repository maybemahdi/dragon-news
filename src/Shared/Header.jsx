import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src={logo} alt="" />
      <p className="m-2">Journalism Without Fear or Favour</p>
      <p className="m-0">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
