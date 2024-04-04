import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";


const Home = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 my-5">
                <div><LeftSide/></div>
                <div className="lg:col-span-2">
                    <h3>Dragon News Home</h3>
                </div>
                <div><RightSide/></div>
            </div>
        </div>
    );
};

export default Home;