import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Dashboard(){
    return (
        <div className="flex justify-start h-screen w-full">
            <Sidebar />
            <div className="md:ml-[calc(250px+4vh)] grow mr-[2vh]">
                <Header />

            </div>
        </div>
    )
}

export default Dashboard;