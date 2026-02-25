import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpDown, Search, SlidersHorizontal } from "lucide-react";

const transactions = [
  { id: 1,  payoutDate: "May 21, 2025", orderDate: "May 1 – May 19, 2025",   bankAccount: "JPMO...(7523)", status: "Scheduled", fees: "-$62.52",  amount: "$12,401.58", currency: "USD" },
  { id: 2,  payoutDate: "May 14, 2025", orderDate: "Apr 25 – Apr 30, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$57.45",  amount: "$11,782.77", currency: "USD" },
  { id: 3,  payoutDate: "May 07, 2025", orderDate: "Apr 15 – Apr 24, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$49.01",  amount: "$11,243.20", currency: "USD" },
  { id: 4,  payoutDate: "Apr 30, 2025", orderDate: "Apr 1 – Apr 12, 2025",   bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$35.02",  amount: "$10,951.34", currency: "USD" },
  { id: 5,  payoutDate: "Apr 23, 2025", orderDate: "Mar 25 – Mar 31, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$61.08",  amount: "$12,438.20", currency: "USD" },
  { id: 6,  payoutDate: "Apr 16, 2025", orderDate: "Mar 15 – Mar 24, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$46.43",  amount: "$10,204.22", currency: "USD" },
  { id: 7,  payoutDate: "Apr 09, 2025", orderDate: "Mar 1 – Mar 14, 2025",   bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$75.02",  amount: "$13,417.62", currency: "USD" },
  { id: 8,  payoutDate: "Apr 02, 2025", orderDate: "Feb 15 – Feb 29, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$39.18",  amount: "$12,253.64", currency: "USD" },
  { id: 9,  payoutDate: "Mar 26, 2025", orderDate: "Feb 1 – Feb 14, 2025",   bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$42.03",  amount: "$11,950.52", currency: "USD" },
  { id: 10, payoutDate: "Mar 19, 2025", orderDate: "Jan 15 – Jan 31, 2025",  bankAccount: "JPMO...(7523)", status: "Paid",      fees: "-$451.25", amount: "$11,441.57", currency: "USD" },
];

type TabId = "all" | "today" | "week" | "month";
const TABS: { id: TabId; label: string }[] = [
  { id: "all",   label: "All" },
  { id: "today", label: "Today" },
  { id: "week",  label: "This week" },
  { id: "month", label: "This month" },
];

/* ── Polaris Badge ──────────────────────────────────────────────────── */
function PolarisBadge({ children, tone }: { children: React.ReactNode; tone?: "attention" | "success" }) {
  const styles: Record<string, { bg: string; text: string }> = {
    attention: { bg: "var(--p-color-bg-fill-warning)", text: "var(--p-color-text-warning)" },
    success:   { bg: "var(--p-color-bg-fill-success)", text: "var(--p-color-text-success)" },
    default:   { bg: "var(--p-color-bg-fill-secondary)", text: "var(--p-color-text-secondary)" },
  };
  const s = styles[tone ?? "default"];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: s.bg,
      color: s.text,
      borderRadius: "var(--p-border-radius-full)",
      padding: "var(--p-space-050) var(--p-space-200)",
      fontFamily: "var(--p-font-family-sans)",
      fontSize: "var(--p-font-size-body-sm)",
      fontWeight: "var(--p-font-weight-medium)",
      lineHeight: 1.5,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

/* ── Polaris Button (slim) ──────────────────────────────────────────── */
function SlimButton({
  children,
  active,
  icon,
  onClick,
}: {
  children?: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--p-space-150)",
        padding: "var(--p-space-150) var(--p-space-300)",
        borderRadius: "var(--p-border-radius-150)",
        border: "1px solid var(--p-color-border)",
        backgroundColor: active ? "var(--p-color-bg-fill-secondary)" : "var(--p-color-bg-surface)",
        color: active ? "var(--p-color-text)" : "var(--p-color-text-secondary)",
        fontFamily: "var(--p-font-family-sans)",
        fontSize: "var(--p-font-size-body-sm)",
        fontWeight: active ? "var(--p-font-weight-semibold)" : "var(--p-font-weight-medium)",
        lineHeight: 1.5,
        cursor: "pointer",
        boxShadow: "var(--p-shadow-button)",
        transition: `all var(--p-motion-duration-150) var(--p-motion-ease)`,
        whiteSpace: "nowrap",
      }}
    >
      {icon}
      {children}
    </button>
  );
}

/* ── IndexTable column headers ──────────────────────────────────────── */
const thBase: React.CSSProperties = {
  padding: "var(--p-space-300) var(--p-space-400)",
  fontFamily: "var(--p-font-family-sans)",
  fontSize: "var(--p-font-size-body-sm)",
  fontWeight: "var(--p-font-weight-semibold)",
  color: "var(--p-color-text-secondary)",
  backgroundColor: "var(--p-color-bg-surface-secondary)",
  borderBottom: "1px solid var(--p-color-border)",
  whiteSpace: "nowrap",
  lineHeight: 1.5,
};

const tdBase: React.CSSProperties = {
  padding: "var(--p-space-300) var(--p-space-400)",
  fontFamily: "var(--p-font-family-sans)",
  fontSize: "var(--p-font-size-body-md)",
  fontWeight: "var(--p-font-weight-medium)",
  color: "var(--p-color-text)",
  borderBottom: "1px solid var(--p-color-border)",
  lineHeight: 1.5,
};

export function PayoutsTable() {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  return (
    /* Polaris Card with padding="0" */
    <div style={{
      backgroundColor: "var(--p-color-bg-surface)",
      border: "1px solid var(--p-color-border)",
      borderRadius: "var(--p-border-radius-300)",
      boxShadow: "var(--p-shadow-card)",
      overflow: "hidden",
    }}>

      {/* Toolbar — InlineStack align="space-between" */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "var(--p-space-200)",
        padding: "var(--p-space-300) var(--p-space-400)",
        borderBottom: "1px solid var(--p-color-border)",
      }}>

        {/* View tabs — Polaris ButtonGroup variant="segmented" */}
        <div style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid var(--p-color-border)",
          borderRadius: "var(--p-border-radius-150)",
          overflow: "hidden",
          boxShadow: "var(--p-shadow-xs)",
        }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "var(--p-space-150) var(--p-space-300)",
                backgroundColor: activeTab === tab.id
                  ? "var(--p-color-bg-fill-secondary)"
                  : "var(--p-color-bg-surface)",
                color: activeTab === tab.id
                  ? "var(--p-color-text)"
                  : "var(--p-color-text-secondary)",
                fontFamily: "var(--p-font-family-sans)",
                fontSize: "var(--p-font-size-body-sm)",
                fontWeight: activeTab === tab.id
                  ? "var(--p-font-weight-semibold)"
                  : "var(--p-font-weight-medium)",
                lineHeight: 1.5,
                border: "none",
                borderRight: "1px solid var(--p-color-border)",
                cursor: "pointer",
                transition: `all var(--p-motion-duration-150) var(--p-motion-ease)`,
              }}
              style-last={{ borderRight: "none" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Action buttons — InlineStack gap="200" */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-200)" }}>
          <SlimButton icon={<Search style={{ width: 14, height: 14 }} />}>
            Search
          </SlimButton>
          <SlimButton icon={<SlidersHorizontal style={{ width: 14, height: 14 }} />}>
            Filter
          </SlimButton>
          <SlimButton icon={<ArrowUpDown style={{ width: 14, height: 14 }} />}>
            Sort
          </SlimButton>
        </div>
      </div>

      {/* IndexTable */}
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--p-font-family-sans)",
        }}>
          <thead>
            <tr>
              <th style={{ ...thBase, textAlign: "left", width: "15%" }}>Payout date</th>
              <th style={{ ...thBase, textAlign: "left", width: "28%" }}>Order date</th>
              <th style={{ ...thBase, textAlign: "left", width: "17%" }}>Bank account</th>
              <th style={{ ...thBase, textAlign: "left", width: "14%" }}>Status</th>
              <th style={{ ...thBase, textAlign: "right", width: "11%" }}>Fees</th>
              <th style={{ ...thBase, textAlign: "right", width: "15%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4, cursor: "pointer" }}>
                  Amount
                  <ArrowUpDown style={{ width: 12, height: 12, opacity: 0.4 }} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr
                key={tx.id}
                style={{ transition: `background-color var(--p-motion-duration-100) var(--p-motion-ease)` }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--p-color-bg-surface-secondary)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
              >
                {/* Polaris Link */}
                <td style={tdBase}>
                  <a
                    href="#"
                    style={{
                      color: "var(--p-color-text-brand)",
                      fontFamily: "var(--p-font-family-sans)",
                      fontSize: "var(--p-font-size-body-md)",
                      fontWeight: "var(--p-font-weight-semibold)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.textDecoration = "underline")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.textDecoration = "none")}
                  >
                    {tx.payoutDate}
                  </a>
                </td>
                <td style={{ ...tdBase, color: "var(--p-color-text)" }}>{tx.orderDate}</td>
                <td style={{ ...tdBase, color: "var(--p-color-text)" }}>{tx.bankAccount}</td>
                <td style={tdBase}>
                  <PolarisBadge tone={tx.status === "Scheduled" ? "attention" : undefined}>
                    {tx.status}
                  </PolarisBadge>
                </td>
                <td style={{ ...tdBase, textAlign: "right", color: "var(--p-color-text-secondary)" }}>
                  {tx.fees}
                </td>
                <td style={{ ...tdBase, textAlign: "right" }}>
                  <span style={{ fontWeight: "var(--p-font-weight-semibold)" }}>{tx.amount}</span>
                  {" "}
                  <span style={{
                    fontFamily: "var(--p-font-family-sans)",
                    fontSize: "var(--p-font-size-body-sm)",
                    color: "var(--p-color-text-secondary)",
                    fontWeight: "var(--p-font-weight-medium)",
                  }}>
                    {tx.currency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination footer */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--p-space-100)",
        padding: "var(--p-space-200)",
        borderTop: "1px solid var(--p-color-border)",
        backgroundColor: "var(--p-color-bg-surface-secondary)",
      }}>
        <button
          disabled
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 28, height: 28,
            backgroundColor: "var(--p-color-bg-surface)",
            border: "1px solid var(--p-color-border)",
            borderRadius: "var(--p-border-radius-100)",
            cursor: "not-allowed",
            opacity: 0.4,
          }}
        >
          <ChevronLeft style={{ width: 16, height: 16, color: "var(--p-color-text)" }} />
        </button>
        <button
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 28, height: 28,
            backgroundColor: "var(--p-color-bg-surface)",
            border: "1px solid var(--p-color-border)",
            borderRadius: "var(--p-border-radius-100)",
            cursor: "pointer",
          }}
        >
          <ChevronRight style={{ width: 16, height: 16, color: "var(--p-color-text)" }} />
        </button>
      </div>
    </div>
  );
}
