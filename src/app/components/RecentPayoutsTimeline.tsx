import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const payouts = [
  {
    id: 1,
    amount: 2450.00,
    currency: "USD",
    status: "completed",
    bank: "Chase •••• 4829",
    date: "2 hours ago",
    description: "Weekly payout"
  },
  {
    id: 2,
    amount: 1820.50,
    currency: "USD",
    status: "processing",
    bank: "Bank of America •••• 3721",
    date: "5 hours ago",
    description: "Weekly payout"
  },
  {
    id: 3,
    amount: 3100.00,
    currency: "USD",
    status: "completed",
    bank: "Chase •••• 4829",
    date: "1 day ago",
    description: "Weekly payout"
  },
  {
    id: 4,
    amount: 2750.25,
    currency: "USD",
    status: "completed",
    bank: "Wells Fargo •••• 8291",
    date: "3 days ago",
    description: "Weekly payout"
  },
  {
    id: 5,
    amount: 1950.00,
    currency: "USD",
    status: "failed",
    bank: "Chase •••• 4829",
    date: "5 days ago",
    description: "Weekly payout"
  }
];

export function RecentPayoutsTimeline() {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      completed: { variant: "default", label: "Completed" },
      processing: { variant: "secondary", label: "Processing" },
      failed: { variant: "destructive", label: "Failed" }
    };

    const config = variants[status] || variants.processing;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Payouts</CardTitle>
        <p className="text-sm text-muted-foreground">
          Transaction history
        </p>
      </CardHeader>
      <CardContent>
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-0 custom-scrollbar">
          {payouts.map((payout, index) => {
            const isFirst = index === 0;
            const isLast = index === payouts.length - 1;

            return (
              <div key={payout.id} className="flex flex-col items-center min-w-[200px] relative group shrink-0">
                
                {/* Connector Line Area */}
                <div className="relative flex items-center justify-center w-full mb-4">
                  {/* Line Background */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-px bg-border -z-10
                      ${isFirst ? 'left-1/2 right-0' : ''} 
                      ${isLast ? 'left-0 right-1/2' : ''}
                      ${!isFirst && !isLast ? 'left-0 right-0' : ''}
                    `} 
                  />
                  
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-background ${
                    payout.status === "completed" 
                      ? "bg-green-500 border-green-500" 
                      : payout.status === "processing"
                      ? "bg-yellow-500 border-yellow-500"
                      : "bg-red-500 border-red-500"
                  }`}>
                    {payout.status === "completed" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {payout.status === "processing" && (
                      <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {payout.status === "failed" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Payout Details */}
                <div className="flex flex-col items-center text-center space-y-2 w-full px-2">
                  <div>
                    <div className="font-semibold text-xl">
                      ${payout.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {payout.description}
                    </div>
                  </div>
                  
                  <div className="scale-90 transform">
                    {getStatusBadge(payout.status)}
                  </div>

                  <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      {payout.bank}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {payout.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
