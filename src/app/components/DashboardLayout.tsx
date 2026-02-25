import React, { useState } from "react";
import {
  Home, Package, Tag, Users, FileText, Wallet,
  BarChart2, Megaphone, Percent, Settings, Store,
  AppWindow, Mail, Search, Bell, ChevronRight, Menu, X
} from "lucide-react";

interface NavItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: Home,     label: "Home",      href: "#" },
  { icon: Package,  label: "Orders",    href: "#", badge: "15" },
  { icon: Tag,      label: "Products",  href: "#" },
  { icon: Users,    label: "Customers", href: "#" },
  { icon: FileText, label: "Content",   href: "#" },
  { icon: Wallet,   label: "Finances",  href: "#", active: true },
  { icon: BarChart2,label: "Analytics", href: "#" },
  { icon: Megaphone,label: "Marketing", href: "#" },
  { icon: Percent,  label: "Discounts", href: "#" },
];

const salesChannels: NavItem[] = [
  { icon: Store,     label: "Online Store",  href: "#" },
  { icon: AppWindow, label: "Point of Sale", href: "#" },
  { icon: Store,     label: "Shop",          href: "#" },
];

const apps: NavItem[] = [
  { icon: Mail, label: "Shopify Email", href: "#" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function NavItemRow({ item }: { item: NavItem }) {
  return (
    <li>
      <a
        href={item.href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--p-space-200)",
          padding: "var(--p-space-150) var(--p-space-300)",
          borderRadius: "var(--p-border-radius-200)",
          fontFamily: "var(--p-font-family-sans)",
          fontSize: "var(--p-font-size-body-md)",
          fontWeight: item.active ? "var(--p-font-weight-semibold)" : "var(--p-font-weight-medium)",
          color: item.active ? "var(--p-color-text)" : "var(--p-color-text-secondary)",
          backgroundColor: item.active ? "var(--p-color-bg-surface)" : "transparent",
          boxShadow: item.active ? "var(--p-shadow-xs)" : "none",
          textDecoration: "none",
          transition: `background-color var(--p-motion-duration-150) var(--p-motion-ease)`,
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          if (!item.active) {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--p-color-bg-fill-secondary)";
            (e.currentTarget as HTMLElement).style.color = "var(--p-color-text)";
          }
        }}
        onMouseLeave={e => {
          if (!item.active) {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--p-color-text-secondary)";
          }
        }}
      >
        <item.icon
          style={{
            width: 20, height: 20, flexShrink: 0,
            color: item.active ? "var(--p-color-text)" : "var(--p-color-text-secondary)",
            strokeWidth: 1.5,
          }}
        />
        <span style={{ flex: 1 }}>{item.label}</span>
        {item.badge && (
          <span style={{
            backgroundColor: "var(--p-color-bg-fill-secondary)",
            color: "var(--p-color-text)",
            fontSize: "var(--p-font-size-heading-xs)",
            fontWeight: "var(--p-font-weight-semibold)",
            padding: "1px var(--p-space-150)",
            borderRadius: "var(--p-border-radius-100)",
          }}>
            {item.badge}
          </span>
        )}
      </a>
    </li>
  );
}

function NavSection({
  title,
  items,
}: {
  title?: string;
  items: NavItem[];
}) {
  return (
    <div>
      {title && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--p-space-150) var(--p-space-300)",
          marginBottom: "var(--p-space-100)",
          fontFamily: "var(--p-font-family-sans)",
          fontSize: "var(--p-font-size-body-sm)",
          fontWeight: "var(--p-font-weight-medium)",
          color: "var(--p-color-text-secondary)",
          cursor: "pointer",
        }}>
          <span>{title}</span>
          <ChevronRight style={{ width: 12, height: 12 }} />
        </div>
      )}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map(item => <NavItemRow key={item.label} item={item} />)}
      </ul>
    </div>
  );
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const sidebar = (
    <aside style={{
      width: 240,
      backgroundColor: "var(--p-color-bg-surface-secondary)",
      borderRight: "1px solid var(--p-color-border)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flexShrink: 0,
    }}>
      {/* Store selector */}
      <div style={{ padding: "var(--p-space-200) var(--p-space-300)", borderBottom: "1px solid var(--p-color-border)" }}>
        <button style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--p-space-200)",
          width: "100%",
          padding: "var(--p-space-150) var(--p-space-200)",
          backgroundColor: "var(--p-color-bg-surface)",
          border: "1px solid var(--p-color-border)",
          borderRadius: "var(--p-border-radius-200)",
          boxShadow: "var(--p-shadow-xs)",
          cursor: "pointer",
          fontFamily: "var(--p-font-family-sans)",
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: "var(--p-border-radius-100)",
            backgroundColor: "#1b6b45",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff",
            fontSize: "var(--p-font-size-heading-xs)",
            fontWeight: "var(--p-font-weight-bold)",
            flexShrink: 0,
          }}>
            S
          </div>
          <span style={{
            flex: 1,
            textAlign: "left",
            fontSize: "var(--p-font-size-body-md)",
            fontWeight: "var(--p-font-weight-semibold)",
            color: "var(--p-color-text)",
          }}>
            Stellar Interiors
          </span>
          <ChevronRight style={{ width: 16, height: 16, color: "var(--p-color-text-secondary)" }} />
        </button>
      </div>

      {/* Navigation */}
      <nav style={{
        flex: 1,
        overflowY: "auto",
        padding: "var(--p-space-300) var(--p-space-200)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--p-space-600)",
      }}>
        <NavSection items={navItems} />
        <NavSection title="Sales channels" items={salesChannels} />
        <NavSection title="Apps" items={apps} />
      </nav>

      {/* Bottom: Settings */}
      <div style={{
        padding: "var(--p-space-200)",
        borderTop: "1px solid var(--p-color-border)",
      }}>
        <NavItemRow item={{ icon: Settings, label: "Settings", href: "#" }} />
      </div>
    </aside>
  );

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "var(--p-color-bg)",
      fontFamily: "var(--p-font-family-sans)",
    }}>
      {/* Desktop Sidebar */}
      <div style={{ display: "flex", position: "sticky", top: 0, height: "100vh" }}
           className="hidden md:flex">
        {sidebar}
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileNavOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 50,
            display: "flex",
          }}
        >
          <div
            onClick={() => setMobileNavOpen(false)}
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
            {sidebar}
          </div>
        </div>
      )}

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* TopBar */}
        <header style={{
          height: 56,
          backgroundColor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--p-space-400)",
          position: "sticky",
          top: 0,
          zIndex: 40,
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-400)", flex: 1 }}>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden"
              style={{
                color: "#e3e3e3",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "var(--p-space-150)",
                borderRadius: "var(--p-border-radius-150)",
              }}
            >
              <Menu style={{ width: 20, height: 20 }} />
            </button>

            {/* Shopify wordmark */}
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-heading-md)",
              fontWeight: "var(--p-font-weight-bold)",
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}>
              shopify
            </span>

            {/* Search */}
            <div style={{
              maxWidth: 440, width: "100%",
              marginLeft: "var(--p-space-600)",
              position: "relative",
            }}>
              <Search style={{
                position: "absolute", left: 10, top: "50%",
                transform: "translateY(-50%)",
                width: 16, height: 16, color: "#8a8a8a", pointerEvents: "none",
              }} />
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                style={{
                  width: "100%",
                  backgroundColor: "#303030",
                  color: "#e3e3e3",
                  fontFamily: "var(--p-font-family-sans)",
                  fontSize: "var(--p-font-size-body-md)",
                  border: "1px solid #616161",
                  borderRadius: "var(--p-border-radius-200)",
                  padding: "6px 32px 6px 32px",
                  outline: "none",
                }}
                onFocus={e => (e.target.style.borderColor = "#8a8a8a")}
                onBlur={e => (e.target.style.borderColor = "#616161")}
              />
              <span style={{
                position: "absolute", right: 10, top: "50%",
                transform: "translateY(-50%)",
                fontSize: "var(--p-font-size-body-sm)",
                color: "#8a8a8a",
                border: "1px solid #616161",
                borderRadius: "var(--p-border-radius-100)",
                padding: "1px 4px",
                pointerEvents: "none",
              }}>
                ⌘K
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-200)" }}>
            <button style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#e3e3e3",
              cursor: "pointer",
              padding: "var(--p-space-150)",
              borderRadius: "var(--p-border-radius-150)",
            }}>
              <Bell style={{ width: 18, height: 18 }} />
            </button>

            <button style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--p-space-200)",
              backgroundColor: "#303030",
              border: "none",
              borderRadius: "var(--p-border-radius-150)",
              padding: "var(--p-space-100) var(--p-space-150)",
              cursor: "pointer",
            }}>
              <span style={{
                fontFamily: "var(--p-font-family-sans)",
                fontSize: "var(--p-font-size-body-sm)",
                fontWeight: "var(--p-font-weight-medium)",
                color: "#e3e3e3",
              }}>
                Stellar Interiors
              </span>
              <div style={{
                width: 24, height: 24,
                backgroundColor: "#e84393",
                borderRadius: "var(--p-border-radius-100)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "var(--p-font-size-heading-xs)",
                fontWeight: "var(--p-font-weight-bold)",
                color: "#ffffff",
                flexShrink: 0,
              }}>
                SI
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
