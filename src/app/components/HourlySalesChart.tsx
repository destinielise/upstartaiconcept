import { Card, BlockStack, InlineStack, Text } from "@shopify/polaris";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";

export function HourlySalesChart() {
  const currentHour = new Date().getHours();

  const generateHourlyData = () => {
    const data = [];
    for (let hour = 0; hour <= Math.min(currentHour + 1, 23); hour++) {
      const isCurrentHour = hour === currentHour;
      const isEstimation = hour === currentHour + 1;
      const value = isEstimation
        ? Math.random() * 500 + 200
        : Math.random() * 800 + 300;
      data.push({
        hour: hour.toString().padStart(2, "0") + ":00",
        sales: Math.round(value),
        isCurrentHour,
        isEstimation,
      });
    }
    return data;
  };

  const data = generateHourlyData();

  return (
    <Card>
      <BlockStack gap="300">
        <InlineStack align="space-between" blockAlign="center">
          <Text as="h2" variant="headingMd">
            Sales per hour
          </Text>
          <Text as="span" variant="bodySm" tone="subdued">
            Today&apos;s breakdown
          </Text>
        </InlineStack>

        <div style={{ width: "100%", height: 130 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <XAxis
                dataKey="hour"
                style={{ fontFamily: "var(--p-font-family-sans)", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                stroke="var(--p-color-text-secondary)"
                interval="preserveStartEnd"
                minTickGap={24}
              />
              <YAxis
                style={{ fontFamily: "var(--p-font-family-sans)", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v}`}
                stroke="var(--p-color-text-secondary)"
              />
              <Tooltip
                cursor={{ fill: "var(--p-color-bg-fill-secondary)" }}
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div
                      style={{
                        backgroundColor: "var(--p-color-bg-surface)",
                        border: "1px solid var(--p-color-border)",
                        borderRadius: "var(--p-border-radius-200)",
                        padding: "var(--p-space-200) var(--p-space-300)",
                        boxShadow: "var(--p-shadow-md)",
                        fontFamily: "var(--p-font-family-sans)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "var(--p-font-size-body-sm)",
                          color: "var(--p-color-text-secondary)",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "var(--p-font-size-body-md)",
                          fontWeight: "var(--p-font-weight-semibold)",
                          color: "var(--p-color-text)",
                        }}
                      >
                        ${payload[0].value?.toLocaleString()}
                      </div>
                    </div>
                  );
                }}
              />
              <Bar dataKey="sales" radius={[3, 3, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.isCurrentHour
                        ? "var(--p-color-text)"
                        : "var(--p-color-text-secondary)"
                    }
                    fillOpacity={
                      entry.isCurrentHour ? 1 : entry.isEstimation ? 0.4 : 0.2
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <InlineStack align="end" gap="300">
          {[
            { label: "Past", opacity: 0.2 },
            { label: "Current", opacity: 1 },
            { label: "Est.", opacity: 0.4 },
          ].map(({ label, opacity }) => (
            <InlineStack
              key={label}
              gap="100"
              blockAlign="center"
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "var(--p-border-radius-full)",
                  backgroundColor: "var(--p-color-text)",
                  opacity,
                }}
              />
              <Text as="span" variant="bodySm" tone="subdued">
                {label}
              </Text>
            </InlineStack>
          ))}
        </InlineStack>
      </BlockStack>
    </Card>
  );
}
