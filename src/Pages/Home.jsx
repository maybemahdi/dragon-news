import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";


const Home = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <div className="grid grid-cols-1 lg:grid-cols-4 text-center my-5">
                <div><RightSide/></div>
                <div className="lg:col-span-2">News Loading...</div>
                <div><LeftSide/></div>
            </div>
        </div>
    );
};

export default Home;