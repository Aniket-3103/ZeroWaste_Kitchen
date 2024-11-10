import {
  Card,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function DashBoardUsageStats({ fetchedFoodItems }) {
  const isToday = (isoString) => {
    const today = new Date();
    const targetDate = new Date(isoString);

    return (
      today.getFullYear() === targetDate.getFullYear() &&
      today.getMonth() === targetDate.getMonth() &&
      today.getDate() === targetDate.getDate()
    );
  };

  const isExpired = (isoString) => {
    const today = new Date();
    const targetDate = new Date(isoString);

    return ( targetDate < today );
  };

  const calculateToday = () => {
    let today = 0;
    if (fetchedFoodItems != null) {
      for (const item of fetchedFoodItems) {
        if (isToday(item.createdAt)) {
          today++;
        }
      }
    }
    return today;
  };

  const calculateExpired = () => {
    let expired = 0;
    if (fetchedFoodItems != null) {
      for (const item of fetchedFoodItems) {
        if (isExpired(item.expiry)) {
          expired++;
        }
      }
    }
    return [fetchedFoodItems?.length, expired, fetchedFoodItems?.length - expired];
  };
  const expiryData = calculateExpired();

  return (
    <Card className="p-6 bg-white text-zinc-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Typography variant="h6" className="font-semibold">
            Food statistics
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Updated now
          </Typography>
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

          <span className="bg-green-500/20 text-green-500 text-xs px-1 rounded">
            +{calculateToday()}
          </span>
        </div>
        <Typography variant="h4" className="font-bold">
          {fetchedFoodItems && fetchedFoodItems.length}
        </Typography>
        <div
          className="h-40 flex items-end gap-3"
          role="group"
          aria-label=""
        >
          <div
            className={`flex-1 bg-blue-500/20 rounded-t-lg`}
            style={{height:(expiryData[2]/expiryData[0]+"")*100+"%"}}
            role="img"
          />
          <div
            className={`flex-1 bg-red-500/20 rounded-t-lg`}
            style={{height:(expiryData[1]/expiryData[0]+"")*100+"%"}}
            role="img"
            aria-label="Expired: 40%"
          />
          <div
            className="flex-1 bg-green-500/20 rounded-t-lg h-[10%]"
            role="img"
            aria-label="Donated: 80%"
          />
          <div
            className="flex-1 bg-yellow-500/20 rounded-t-lg "
            style={{height:(expiryData[2]/expiryData[0]+"")*100+"%"}}
            role="img"
            aria-label="Available: 70%"
          />
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
