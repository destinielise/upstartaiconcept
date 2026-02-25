import { ArrowLeft } from "lucide-react";
import { DashboardLayout } from "./components/DashboardLayout";
import { HourlySalesChart } from "./components/HourlySalesChart";
import { IncomingBalanceCard } from "./components/IncomingBalanceCard";
import { LatestPayoutCard } from "./components/LatestPayoutCard";
import { PayoutsTable } from "./components/PayoutsTable";
import { Toaster } from "./components/ui/sonner";

/* ── Polaris Button (full-size for Page header) ────────────────────── */
function PageButton({
  children,
  variant = "secondary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--p-space-150)",
        padding: "var(--p-space-200) var(--p-space-400)",
        height: 32,
        borderRadius: "var(--p-border-radius-150)",
        fontFamily: "var(--p-font-family-sans)",
        fontSize: "var(--p-font-size-body-md)",
        fontWeight: "var(--p-font-weight-semibold)",
        lineHeight: 1,
        cursor: "pointer",
        border: "1px solid",
        transition: "all 150ms cubic-bezier(0.25,0.1,0.25,1)",
        whiteSpace: "nowrap",
        ...(isPrimary ? {
          backgroundColor: "var(--p-color-bg-fill-brand)",
          borderColor: "var(--p-color-bg-fill-brand)",
          color: "var(--p-color-text-on-color)",
          boxShadow: "inset 0px -1px 0px rgba(0,0,0,0.30), inset 0px 1px 0px rgba(255,255,255,0.16)",
        } : {
          backgroundColor: "var(--p-color-bg-surface)",
          borderColor: "var(--p-color-border)",
          color: "var(--p-color-text)",
          boxShadow: "0px 1px 0px rgba(26,26,26,0.07), inset 0px -1px 0px rgba(26,26,26,0.16)",
        }),
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <DashboardLayout>
      {/* Polaris Page wrapper */}
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "var(--p-space-600) var(--p-space-600) var(--p-space-1200)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--p-space-800)",
      }}>

        {/* ── Polaris Page header ───────────────────────────────────── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--p-space-400)",
          flexWrap: "wrap",
        }}>
          {/* Back action + Title — InlineStack gap="200" blockAlign="center" */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-200)" }}>
            <button
              aria-label="Back to Finances"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32, height: 32,
                backgroundColor: "var(--p-color-bg-surface)",
                border: "1px solid var(--p-color-border)",
                borderRadius: "var(--p-border-radius-200)",
                cursor: "pointer",
                boxShadow: "var(--p-shadow-xs)",
                flexShrink: 0,
              }}
            >
              <ArrowLeft style={{ width: 16, height: 16, color: "var(--p-color-text)" }} />
            </button>

            {/* Polaris Text variant="headingXl" as="h1" */}
            <h1 style={{
              margin: 0,
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-heading-xl)",
              fontWeight: "var(--p-font-weight-bold)",
              color: "var(--p-color-text)",
              lineHeight: 1.25,
            }}>
              Payouts
            </h1>
          </div>

          {/* Page actions — InlineStack gap="200" */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-200)" }}>
            <PageButton variant="secondary">Export</PageButton>
            <PageButton variant="secondary">Document</PageButton>
            <PageButton variant="primary">Order transactions</PageButton>
          </div>
        </div>

        {/* ── Metric Cards — Polaris InlineGrid columns={3} gap="400" ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "var(--p-space-400)",
        }}
          className="grid-cols-polaris"
        >
          <HourlySalesChart />
          <IncomingBalanceCard />
          <LatestPayoutCard />
        </div>

        {/* ── Payout Transactions — Polaris Layout.Section ─────────── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--p-space-400)",
        }}>
          {/* Polaris Text variant="headingLg" as="h2" */}
          <h2 style={{
            margin: 0,
            fontFamily: "var(--p-font-family-sans)",
            fontSize: "var(--p-font-size-heading-lg)",
            fontWeight: "var(--p-font-weight-semibold)",
            color: "var(--p-color-text)",
            lineHeight: 1.5,
          }}>
            Payout transactions
          </h2>
          <PayoutsTable />
        </div>

      </div>

      <Toaster />

      {/* Responsive: collapse to 1-col on small screens */}
      <style>{`
        @media (max-width: 768px) {
          .grid-cols-polaris {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-polaris {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
