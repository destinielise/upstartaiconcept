import { ArrowLeft, ChevronLeft, Download, FileText, ArrowRight } from "lucide-react";
import { DashboardLayout } from "./components/DashboardLayout";
import { HourlySalesChart } from "./components/HourlySalesChart";
import { IncomingBalanceCard } from "./components/IncomingBalanceCard";
import { LatestPayoutCard } from "./components/LatestPayoutCard";
import { PayoutsTable } from "./components/PayoutsTable";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "next-themes";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <DashboardLayout>
        <div className="p-6 max-w-[1200px] mx-auto space-y-8">
          
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 -ml-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold text-foreground">Payouts</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white hover:bg-[#f7f7f7] border border-[#d0d0d0] text-[#303030] shadow-sm h-7 rounded-[8px] text-[13px] font-medium"
              >
                Export
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white hover:bg-[#f7f7f7] border border-[#d0d0d0] text-[#303030] shadow-sm h-7 rounded-[8px] text-[13px] font-medium"
              >
                Document
              </Button>
              <Button 
                size="sm" 
                className="bg-[#303030] hover:bg-[#2c2c2c] text-white shadow-sm h-7 rounded-[8px] text-[12px] font-semibold relative overflow-hidden border-0"
              >
                <span className="relative z-10">Order transactions</span>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="-scale-y-100 flex-none h-[28px] rotate-180 w-[57px] opacity-100">
                    <div className="relative size-full">
                      <div className="absolute bg-gradient-to-b from-[82.137%] from-[rgba(255,255,255,0.07)] inset-0 rounded-[8px] to-[94.444%] to-[rgba(255,255,255,0.15)]">
                        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.2),inset_2px_0px_0px_0px_rgba(255,255,255,0.2),inset_-2px_0px_0px_0px_rgba(255,255,255,0.2),inset_0px_-1px_0px_1px_black,inset_0px_1px_0px_0px_black]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {/* 
                 Fixed height cards (220px) as requested. 
                 Components within have been optimized to fit this compact space.
             */}
             <div className="h-[220px]">
               <HourlySalesChart />
             </div>
             <div className="h-[220px]">
               <IncomingBalanceCard />
             </div>
             <div className="h-[220px]">
               <LatestPayoutCard />
             </div>
          </div>

          {/* Transactions Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Payout transactions</h2>
            <PayoutsTable />
          </div>

        </div>
        <Toaster />
      </DashboardLayout>
    </ThemeProvider>
  );
}
