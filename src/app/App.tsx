import { Page, Layout, InlineGrid, BlockStack, Text } from "@shopify/polaris";
import { DashboardLayout } from "./components/DashboardLayout";
import { HourlySalesChart } from "./components/HourlySalesChart";
import { IncomingBalanceCard } from "./components/IncomingBalanceCard";
import { LatestPayoutCard } from "./components/LatestPayoutCard";
import { PayoutsTable } from "./components/PayoutsTable";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <DashboardLayout>
      <Page
        backAction={{ content: "Finances", url: "#" }}
        title="Payouts"
        primaryAction={{ content: "Order transactions" }}
        secondaryActions={[
          { content: "Export" },
          { content: "Document" },
        ]}
      >
        <Layout>
          <Layout.Section>
            <InlineGrid
              columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
              gap="400"
            >
              <HourlySalesChart />
              <IncomingBalanceCard />
              <LatestPayoutCard />
            </InlineGrid>
          </Layout.Section>

          <Layout.Section>
            <BlockStack gap="400">
              <Text variant="headingLg" as="h2">
                Payout transactions
              </Text>
              <PayoutsTable />
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Page>
      <Toaster />
    </DashboardLayout>
  );
}
