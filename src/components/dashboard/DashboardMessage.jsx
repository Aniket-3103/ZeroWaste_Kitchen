import { Button } from "@mui/material";

export default function DashboardMessage() {
  return (
    <div className="shadow-lg rounded-lg relative bg-gradient-to-b from-white to-pink-50 p-6">
      <div className="mx-auto max-w-6xl">
        
        <div className=" grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 flex items-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-5xl">
              With your help, we've provided{" "}
              <span className="text-pink-500">0 meals</span>{" "}
              to those in need. Your kindness is making a real difference—one meal at a time. 🙏❤️
            </h1>
            
          </div>
          
          <div className="relative h-[400px]">
            <img
              src="/donation.png"
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
