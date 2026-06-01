import React, { useState, useCallback } from "react";
import { Bell } from "lucide-react";
import { Frame, Navigation, TopBar, Text } from "@shopify/polaris";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((value) => !value),
    [],
  );

  const navigationMarkup = (
    <Navigation location="/finances/payouts">
      <Navigation.Section
        items={[
          { label: "Home", url: "#" },
          { label: "Orders", url: "#", badge: "15" },
          { label: "Products", url: "#" },
          { label: "Customers", url: "#" },
          { label: "Content", url: "#" },
          { label: "Finances", url: "#", selected: true },
          { label: "Analytics", url: "#" },
          { label: "Marketing", url: "#" },
          { label: "Discounts", url: "#" },
        ]}
      />
      <Navigation.Section
        title="Sales channels"
        items={[
          { label: "Online Store", url: "#" },
          { label: "Point of Sale", url: "#" },
          { label: "Shop", url: "#" },
        ]}
      />
      <Navigation.Section
        title="Apps"
        items={[{ label: "Shopify Email", url: "#" }]}
        separator
      />
      <Navigation.Section
        items={[{ label: "Settings", url: "#" }]}
      />
    </Navigation>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={setSearchValue}
      value={searchValue}
      placeholder="Search"
    />
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Settings" }, { content: "Log out" }],
        },
      ]}
      name="Stellar Interiors"
      initials="SI"
      detail="Store"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Shopify wordmark */}
        <Text as="span" variant="headingMd" tone="inverse">
          shopify
        </Text>

        {/* Sidekick pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "2px 10px",
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #ffffff 0, #9c6ade 35%, #5c6ac4 100%)",
            }}
          />
          <Text as="span" variant="bodySm" tone="inverse">
            Sidekick
          </Text>
        </div>

        {/* Notification bell */}
        <button
          type="button"
          aria-label="Notifications"
          style={{
            marginLeft: 4,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: 999,
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <Bell
            style={{
              width: 18,
              height: 18,
              color: "#e3e3e3",
            }}
          />
        </button>
      </div>
    </TopBar>
  );

  return (
    <Frame
      navigation={navigationMarkup}
      topBar={topBarMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {children}
    </Frame>
  );
}
