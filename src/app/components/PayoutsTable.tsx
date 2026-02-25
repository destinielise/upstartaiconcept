import { useState } from "react";
import {
  ArrowUpDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import {
  Badge,
  BlockStack,
  Button,
  Card,
  InlineStack,
  IndexTable,
  Pagination,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

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

export function PayoutsTable() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const resourceName = {
    singular: "payout",
    plural: "payouts",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(transactions);

  const rowMarkup = transactions.map((tx, index) => {
    const id = tx.id.toString();
    const selected = selectedResources.includes(id);

    return (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selected}
        position={index}
      >
        <IndexTable.Cell>
          <Text as="span" variant="bodyMd" fontWeight="bold">
            {tx.payoutDate}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{tx.orderDate}</IndexTable.Cell>
        <IndexTable.Cell>{tx.bankAccount}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge tone={tx.status === "Scheduled" ? "attention" : undefined}>
            {tx.status}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" variant="bodyMd" tone="subdued" numeric>
            {tx.fees}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <InlineStack align="end" gap="050">
            <Text as="span" variant="bodyMd" fontWeight="bold" numeric>
              {tx.amount}
            </Text>
            <Text as="span" variant="bodySm" tone="subdued">
              {tx.currency}
            </Text>
          </InlineStack>
        </IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  return (
    <Card>
      <BlockStack gap="0">
        <div
          style={{
            padding: "var(--p-space-300) var(--p-space-400)",
            borderBottom: "1px solid var(--p-color-border)",
          }}
        >
          <InlineStack align="space-between" blockAlign="center" gap="200">
            <InlineStack gap="0">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid var(--p-color-border)",
                  borderRadius: "var(--p-border-radius-150)",
                  overflow: "hidden",
                  boxShadow: "var(--p-shadow-xs)",
                }}
              >
                {TABS.map((tab) => (
                  <Button
                    key={tab.id}
                    size="slim"
                    variant={activeTab === tab.id ? "primary" : "secondary"}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </InlineStack>

            <InlineStack gap="200">
              <Button variant="secondary" size="slim">
                <Search style={{ width: 14, height: 14, marginRight: 4 }} />
                Search
              </Button>
              <Button variant="secondary" size="slim">
                <SlidersHorizontal
                  style={{ width: 14, height: 14, marginRight: 4 }}
                />
                Filter
              </Button>
              <Button variant="secondary" size="slim">
                <ArrowUpDown
                  style={{ width: 14, height: 14, marginRight: 4 }}
                />
                Sort
              </Button>
            </InlineStack>
          </InlineStack>
        </div>

        <IndexTable
          resourceName={resourceName}
          itemCount={transactions.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Payout date" },
            { title: "Order date" },
            { title: "Bank account" },
            { title: "Status" },
            { title: "Fees", alignment: "end" },
            { title: "Amount", alignment: "end" },
          ]}
        >
          {rowMarkup}
        </IndexTable>

        <div
          style={{
            borderTop: "1px solid var(--p-color-border)",
            padding: "var(--p-space-200) var(--p-space-400)",
          }}
        >
          <InlineStack align="center" blockAlign="center">
            <Pagination hasPrevious={false} hasNext={false} />
          </InlineStack>
        </div>
      </BlockStack>
    </Card>
  );
}
