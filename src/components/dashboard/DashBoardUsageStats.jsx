import { Card, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function DashBoardUsageStats() {
  return (
    <Card className="p-6 bg-white text-zinc-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Typography variant="h6" className="font-semibold">Food statistics</Typography>
          <Typography variant="body2" className="text-gray-500">Updated now</Typography>
        </div>
        <FormControl variant="outlined" className="w-[120px]">
          <InputLabel>Select</InputLabel>
          <Select defaultValue="monthly" label="Select">
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span>Total items</span>
          {/* added today.. */}
          <span className="bg-green-500/20 text-green-500 text-xs px-1 rounded">+0</span> 
        </div>
        <Typography variant="h4" className="font-bold">2,025</Typography>
        <div className="h-40 flex items-end gap-3" role="group" aria-label="Sales statistics graph">
          <div className="flex-1 bg-blue-500/20 rounded-t-lg h-[60%]" role="img" aria-label="Consumed: 60%" />
          <div className="flex-1 bg-red-500/20 rounded-t-lg h-[40%]" role="img" aria-label="Expired: 40%" />
          <div className="flex-1 bg-green-500/20 rounded-t-lg h-[80%]" role="img" aria-label="Donated: 80%" />
          <div className="flex-1 bg-yellow-500/20 rounded-t-lg h-[70%]" role="img" aria-label="Available: 70%" />
        </div>
        <div className="flex px-4 justify-between text-sm text-gray-500">
          <span>Consumed</span>
          <span>Expired</span>
          <span>Donated</span>
          <span>Available</span>
        </div>
      </div>
    </Card>
  );
} 