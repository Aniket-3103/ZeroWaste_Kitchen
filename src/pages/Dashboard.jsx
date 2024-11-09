import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Dashboard(){
    return (
        <div className="flex justify-start h-screen w-full">
            <Sidebar />
            <div className="md:ml-[calc(250px+4vh)] grow flex flex-col mr-[2vh]">
                <Header />
                <div className="bg-blue-500 my-[2vh] rounded-2xl w-full h-full">

                </div>
            </div>
        </div>
    )
}

export default Dashboard;