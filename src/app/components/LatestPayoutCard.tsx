import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, X, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function LatestPayoutCard() {
  const [hasReceived, setHasReceived] = useState<boolean | null>(null);

  const payout = {
    amount: 14250.00,
    currency: "USD",
    status: "processing",
    estimatedArrival: "5:00 PM",
    bank: "Chase •••• 4829",
    progress: 75, // 3/4 steps
    currentStep: "Sent to Bank"
  };

  const handleConfirmation = (received: boolean) => {
    setHasReceived(received);
    if (received) {
      toast.success("Marked as received");
    } else {
      toast.info("Thanks for feedback");
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-base font-semibold">Latest Payout</CardTitle>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-2xl font-bold tracking-tight">
              ${payout.amount.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {payout.currency}
            </span>
          </div>
        </div>
        <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
          <span className="relative flex h-1.5 w-1.5 mr-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
          </span>
          Processing
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1 px-4 py-0 flex flex-col justify-center gap-3">
        {/* Progress Section */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-foreground">{payout.currentStep}</span>
            <span className="text-muted-foreground">{payout.progress}%</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full" />
          </div>
        </div>

        {/* Details Row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground bg-secondary/30 p-2 rounded-md border border-border/50">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Est: <span className="text-foreground font-medium">{payout.estimatedArrival}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowRight className="w-3.5 h-3.5" />
            <span>{payout.bank}</span>
          </div>
        </div>

        {/* Confirmation Footer (Compact) */}
        <div className="pt-1">
          <AnimatePresence mode="wait">
            {hasReceived === null ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-xs font-medium text-muted-foreground">Received?</span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleConfirmation(false)}
                    className="h-6 px-2 text-xs hover:text-destructive hover:bg-destructive/10"
                  >
                    No
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleConfirmation(true)}
                    className="h-6 px-2 text-xs hover:text-green-600 hover:bg-green-50"
                  >
                    Yes
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center h-6 text-xs font-medium text-green-600 bg-green-50 rounded border border-green-100 w-full"
              >
                <Check className="w-3 h-3 mr-1" />
                Confirmed
                <button 
                  onClick={() => setHasReceived(null)}
                  className="ml-2 underline opacity-50 hover:opacity-100"
                >
                  Undo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
}
