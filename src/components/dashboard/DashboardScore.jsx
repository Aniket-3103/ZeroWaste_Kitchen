import { Box, Card, Typography } from "@mui/material" // Import MUI components


export default function DashboardScore({ score = 30, className }) {
  // Ensure score is between 0 and 100
  const normalizedScore = Math.min(100, Math.max(0, score))
  
  return (
    <Card className="p-6 bg-white text-zinc-900">
    <div className="flex justify-between items-center mb-8">
      <div>
        <Typography variant="h6" className="font-semibold">sustainability Score</Typography>
        <Typography variant="body2" className="text-gray-500">Your Impact towards better community</Typography>
      </div>
    </div>
    <div className="w-full flex justify-around">
    <Box className={`relative w-48 h-48 ${className}`}> {/* Updated className usage */}
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
        }}
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(265, 89%, 62%)" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <mask id="heartMask">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="white"
            />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="#f3f4f6"
          mask="url(#heartMask)"
        />
        <rect
          x="0"
          y={24 * (1 - normalizedScore / 100)}
          width="24"
          height={24 * (normalizedScore / 100)}
          fill="url(#heartGradient)"
          mask="url(#heartMask)"
        />
      </svg>
      <Box className={`absolute inset-0 flex items-center justify-center`}> {/* Updated className usage */}
        <Typography variant="h4" className="font-bold text-purple-600 drop-shadow-sm"> {/* Use MUI Typography */}
          {normalizedScore}%
        </Typography>
      </Box>
    </Box>

    </div>
    
  </Card>

  )
}