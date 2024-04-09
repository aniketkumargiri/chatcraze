import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter
      backdrop-blur-sm bg-opacity-30">
      <Sidebar />
      
      <MessageContainer />
    </div>
  );
};
export default Home;
