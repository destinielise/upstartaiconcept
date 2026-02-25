import { 
  Home, 
  Package, 
  Tag, 
  Users, 
  FileText, 
  Wallet, 
  BarChart2, 
  Megaphone, 
  Percent, 
  Settings, 
  Store, 
  AppWindow, 
  Mail,
  Search,
  Bell,
  ChevronRight
} from "lucide-react";
import { cn } from "./ui/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Package, label: "Orders", href: "#", badge: "15" },
  { icon: Tag, label: "Products", href: "#" },
  { icon: Users, label: "Customers", href: "#" },
  { icon: FileText, label: "Content", href: "#" },
  { icon: Wallet, label: "Finances", href: "#", active: true },
  { icon: BarChart2, label: "Analytics", href: "#" },
  { icon: Megaphone, label: "Marketing", href: "#" },
  { icon: Percent, label: "Discounts", href: "#" },
];

const salesChannels = [
  { icon: Store, label: "Online Store", href: "#" },
  { icon: AppWindow, label: "Point of Sale", href: "#" },
  { icon: Store, label: "Shop", href: "#" }, // Using Store as fallback for Shop icon
];

const apps = [
  { icon: Mail, label: "Shopify Email", href: "#" },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-secondary/30 font-sans">
      {/* Sidebar */}
      <aside className="w-[240px] bg-secondary/50 border-r border-border flex-shrink-0 flex flex-col h-screen sticky top-0">
        {/* Logo Area */}
        <div className="h-14 flex items-center px-3 mb-2">
          <div className="flex items-center gap-2 px-2 py-1 bg-secondary rounded-md cursor-pointer hover:bg-border/50 transition-colors w-full">
            <div className="w-6 h-6 bg-emerald-600 rounded text-white flex items-center justify-center text-xs font-bold">S</div>
            <span className="text-sm font-semibold text-foreground">Stellar Interiors</span>
            <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-6">
          {/* Main Nav */}
          <ul className="space-y-0.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors",
                    item.active 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", item.active ? "text-foreground" : "text-muted-foreground")} strokeWidth={1.5} />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="bg-secondary text-foreground text-[11px] px-1.5 py-0.5 rounded font-semibold">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Sales Channels */}
          <div>
            <div className="flex items-center justify-between px-3 mb-1 text-xs font-medium text-muted-foreground group cursor-pointer hover:text-foreground">
              <span>Sales channels</span>
              <ChevronRight className="w-3 h-3 group-hover:text-foreground" />
            </div>
            <ul className="space-y-0.5">
              {salesChannels.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps */}
          <div>
            <div className="flex items-center justify-between px-3 mb-1 text-xs font-medium text-muted-foreground group cursor-pointer hover:text-foreground">
              <span>Apps</span>
              <ChevronRight className="w-3 h-3 group-hover:text-foreground" />
            </div>
            <ul className="space-y-0.5">
              {apps.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-2 mt-auto border-t border-border">
           <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              <span>Settings</span>
            </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 bg-[#1a1a1a] flex items-center justify-between px-4 sticky top-0 z-10 shrink-0">
           <div className="flex items-center gap-4 flex-1">
             <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg tracking-tight">shopify</span>
             </div>
             
             {/* Search Bar */}
             <div className="max-w-md w-full ml-8 relative group">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-[#8a8a8a] group-focus-within:text-white transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-[#303030] text-[#e3e3e3] placeholder-[#8a8a8a] text-[13px] rounded-lg border border-[#616161] py-1.5 pl-9 pr-8 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-[#8a8a8a] transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                  <span className="text-[10px] text-[#8a8a8a] border border-[#616161] rounded px-1 py-0.5">⌘K</span>
                </div>
             </div>
           </div>

           <div className="flex items-center gap-3">
             <button className="text-[#e3e3e3] hover:bg-[#303030] p-1.5 rounded-md transition-colors">
               <Bell className="w-4 h-4" />
             </button>
             <div className="flex items-center gap-2 bg-[#303030] pl-2 pr-1 py-1 rounded-md cursor-pointer hover:bg-[#4a4a4a] transition-colors">
               <span className="text-[#e3e3e3] text-xs font-medium">Stellar Interiors</span>
               <div className="w-5 h-5 bg-pink-500 rounded text-[10px] flex items-center justify-center text-white font-bold">
                 SI
               </div>
             </div>
           </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}
