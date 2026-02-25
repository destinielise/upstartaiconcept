import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";

export function HourlySalesChart() {
  const currentHour = new Date().getHours();

  // Generate hourly data from 00:00 to current hour + 1 (estimation)
  const generateHourlyData = () => {
    const data = [];
    for (let hour = 0; hour <= currentHour + 1; hour++) {
      const isCurrentHour = hour === currentHour;
      const isEstimation = hour === currentHour + 1;
      
      // Mock sales data - you can replace with real data
      const value = isEstimation 
        ? Math.random() * 500 + 200  // Estimated value
        : Math.random() * 800 + 300; // Actual sales
      
      data.push({
        hour: hour.toString().padStart(2, '0') + ':00',
        sales: Math.round(value),
        isCurrentHour,
        isEstimation
      });
    }
    return data;
  };

  const data = generateHourlyData();

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Sales per Hour</CardTitle>
          <span className="text-xs text-muted-foreground">Today's hourly breakdown</span>
        </div>
      </CardHeader>
      <CardContent className="pb-2 px-2">
        {/* Fixed pixel height avoids Recharts 0x0 issue from flex/percentage chain */}
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <XAxis 
              dataKey="hour" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              stroke="var(--muted-foreground)"
              interval="preserveStartEnd" 
              minTickGap={20}
            />
            <YAxis 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              stroke="var(--muted-foreground)"
            />
            <Tooltip
              cursor={{ fill: "var(--muted)" }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-popover p-2 shadow-sm text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.65rem] uppercase text-muted-foreground">
                            Hour
                          </span>
                          <span className="font-bold text-foreground">
                            {label}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.65rem] uppercase text-muted-foreground">
                            Sales
                          </span>
                          <span className="font-bold text-foreground">
                            ${payload[0].value}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={
                    entry.isCurrentHour 
                      ? "var(--chart-1)"
                      : "var(--muted-foreground)"
                  }
                  fillOpacity={
                    entry.isCurrentHour 
                      ? 1 
                      : entry.isEstimation 
                      ? 0.5 
                      : 0.2
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        {/* Compact Legend */}
        <div className="flex items-center justify-end gap-3 px-2 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#cbd5e1]"></div>
            <span className="text-muted-foreground">Past</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
            <span className="text-muted-foreground">Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#94a3b8] opacity-60"></div>
            <span className="text-muted-foreground">Est.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}