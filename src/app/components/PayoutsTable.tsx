import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, Download, Filter, MoreHorizontal, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const transactions = [
  {
    id: 1,
    payoutDate: "May 21, 2025",
    orderDate: "May 1 – May 19, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Scheduled",
    fees: "-$62.52",
    amount: "$12,401.58",
    currency: "USD"
  },
  {
    id: 2,
    payoutDate: "May 14, 2025",
    orderDate: "Apr 25 – Apr 30, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$57.45",
    amount: "$11,782.77",
    currency: "USD"
  },
  {
    id: 3,
    payoutDate: "May 07, 2025",
    orderDate: "Apr 15 – Apr 24, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$49.01",
    amount: "$11,243.20",
    currency: "USD"
  },
  {
    id: 4,
    payoutDate: "Apr 30, 2025",
    orderDate: "Apr 1 – Apr 12, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$35.02",
    amount: "$10,951.34",
    currency: "USD"
  },
  {
    id: 5,
    payoutDate: "Apr 23, 2025",
    orderDate: "Mar 25 – Mar 31, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$61.08",
    amount: "$12,438.20",
    currency: "USD"
  },
  {
    id: 6,
    payoutDate: "Apr 16, 2025",
    orderDate: "Mar 15 – Mar 24, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$46.43",
    amount: "$10,204.22",
    currency: "USD"
  },
  {
    id: 7,
    payoutDate: "Apr 09, 2025",
    orderDate: "Mar 1 – Mar 14, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$75.02",
    amount: "$13,417.62",
    currency: "USD"
  },
  {
    id: 8,
    payoutDate: "Apr 02, 2025",
    orderDate: "Feb 15 – Feb 29, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$39.18",
    amount: "$12,253.64",
    currency: "USD"
  },
  {
    id: 9,
    payoutDate: "Mar 26, 2025",
    orderDate: "Feb 1 – Feb 14, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$42.03",
    amount: "$11,950.52",
    currency: "USD"
  },
  {
    id: 10,
    payoutDate: "Mar 19, 2025",
    orderDate: "Jan 15 – Jan 31, 2025",
    bankAccount: "JPMO...(7523)",
    status: "Paid",
    fees: "-$451.25",
    amount: "$11,441.57",
    currency: "USD"
  }
];

export function PayoutsTable() {
  return (
    <div className="bg-background rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-3 border-b border-border flex items-center justify-between gap-2 bg-background">
        <div className="flex items-center gap-2">
           <div className="flex items-center">
             <Button variant="outline" size="sm" className="rounded-r-none border-r-0 px-3 h-8 bg-secondary hover:bg-secondary/80 text-xs font-medium">
               All
             </Button>
             <Button variant="ghost" size="sm" className="rounded-none border border-l-0 border-r-0 px-3 h-8 text-xs font-medium text-muted-foreground">
               Today
             </Button>
             <Button variant="ghost" size="sm" className="rounded-none border border-l-0 border-r-0 px-3 h-8 text-xs font-medium text-muted-foreground">
               This week
             </Button>
             <Button variant="ghost" size="sm" className="rounded-l-none border-l-0 px-3 h-8 text-xs font-medium text-muted-foreground">
               This month
             </Button>
           </div>
           
           <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs font-medium text-muted-foreground">
             More views
             <ChevronDown className="w-3 h-3" />
           </Button>
        </div>

        <div className="flex items-center gap-2">
           <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-muted-foreground">
             Cancel
           </Button>
           <Button variant="outline" size="sm" className="h-8 text-xs font-medium bg-background shadow-sm">
             Save
           </Button>
           <div className="h-8 flex items-center bg-background border rounded-md shadow-sm px-2 gap-2">
             <Search className="w-3.5 h-3.5 text-muted-foreground" />
             <Filter className="w-3.5 h-3.5 text-muted-foreground" />
           </div>
           <Button variant="outline" size="sm" className="h-8 w-8 p-0">
             <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
           </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary text-muted-foreground font-medium border-b border-border">
            <tr>
              <th className="px-4 py-2.5 font-medium w-[15%]">Payout date</th>
              <th className="px-4 py-2.5 font-medium w-[25%]">Order date</th>
              <th className="px-4 py-2.5 font-medium w-[15%]">Bank account</th>
              <th className="px-4 py-2.5 font-medium w-[15%]">Status</th>
              <th className="px-4 py-2.5 font-medium w-[10%] text-right">Fees</th>
              <th className="px-4 py-2.5 font-medium w-[20%] text-right">
                <div className="flex items-center justify-end gap-1 cursor-pointer group">
                  Amount
                  <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((tx) => (
              <tr key={tx.id} className="group hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 text-chart-1 font-medium cursor-pointer hover:underline">
                  {tx.payoutDate}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {tx.orderDate}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {tx.bankAccount}
                </td>
                <td className="px-4 py-3">
                  <Badge 
                    variant={tx.status === "Scheduled" ? "secondary" : "secondary"}
                    className={`font-normal rounded-md px-2 py-0.5 border-0 shadow-none ${
                      tx.status === "Scheduled" 
                        ? "bg-warning text-warning-foreground hover:bg-warning/80" 
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tx.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  {tx.fees}
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  {tx.amount} <span className="text-muted-foreground font-normal text-xs ml-0.5">{tx.currency}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination / Footer */}
      <div className="p-2 border-t border-border flex items-center justify-center bg-secondary/10">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6" disabled>
            <ChevronLeft className="w-4 h-4" />
          </Button>
           <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
