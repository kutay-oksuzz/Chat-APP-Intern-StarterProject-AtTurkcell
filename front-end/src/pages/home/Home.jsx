import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rouded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
