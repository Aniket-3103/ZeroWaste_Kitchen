import DashboardFoodItems from "../components/dashboard/DashboardFoodItems";
import DashboardMessage from "../components/dashboard/DashboardMessage";
import DashboardScore from "../components/dashboard/DashboardScore";
import DashBoardUsageStats from "../components/dashboard/DashBoardUsageStats";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Dashboard(){
    return (
        <div className="flex justify-start min-h-screen w-full">
            <div className="hidden md:block"><Sidebar /></div>
            <div className="ml-[calc(2vh)] md:ml-[calc(250px+4vh)] grow flex flex-col mr-[2vh]">
                <Header />
                <div className=" my-[2vh] rounded-2xl w-full h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh] mb-[2vh]">
                        <DashBoardUsageStats/>
                        <DashboardScore/>

                    </div>
                    <DashboardFoodItems/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;