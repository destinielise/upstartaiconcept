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
    /* Polaris Card */
    <div style={{
      backgroundColor: "var(--p-color-bg-surface)",
      border: "1px solid var(--p-color-border)",
      borderRadius: "var(--p-border-radius-300)",
      boxShadow: "var(--p-shadow-card)",
      padding: "var(--p-space-400)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--p-space-300)",
    }}>
      {/* Card Header — InlineStack align="space-between" */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Polaris Text variant="headingMd" */}
        <span style={{
          fontFamily: "var(--p-font-family-sans)",
          fontSize: "var(--p-font-size-heading-md)",
          fontWeight: "var(--p-font-weight-semibold)",
          color: "var(--p-color-text)",
          lineHeight: 1.5,
        }}>
          Sales per Hour
        </span>
        {/* Polaris Text variant="bodySm" tone="subdued" */}
        <span style={{
          fontFamily: "var(--p-font-family-sans)",
          fontSize: "var(--p-font-size-body-sm)",
          fontWeight: "var(--p-font-weight-medium)",
          color: "var(--p-color-text-secondary)",
          lineHeight: 1.5,
        }}>
          Today's breakdown
        </span>
      </div>

      {/* Chart — fixed pixel height avoids ResponsiveContainer 0×0 issue */}
      <ResponsiveContainer width="100%" height={130}>
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
                <div style={{
                  backgroundColor: "var(--p-color-bg-surface)",
                  border: "1px solid var(--p-color-border)",
                  borderRadius: "var(--p-border-radius-200)",
                  padding: "var(--p-space-200) var(--p-space-300)",
                  boxShadow: "var(--p-shadow-md)",
                  fontFamily: "var(--p-font-family-sans)",
                }}>
                  <div style={{ fontSize: "var(--p-font-size-body-sm)", color: "var(--p-color-text-secondary)" }}>{label}</div>
                  <div style={{ fontSize: "var(--p-font-size-body-md)", fontWeight: "var(--p-font-weight-semibold)", color: "var(--p-color-text)" }}>
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
                fill={entry.isCurrentHour ? "var(--p-color-text)" : "var(--p-color-text-secondary)"}
                fillOpacity={entry.isCurrentHour ? 1 : entry.isEstimation ? 0.4 : 0.2}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend — InlineStack gap="300" align="end" */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "var(--p-space-300)",
      }}>
        {[
          { label: "Past",    opacity: 0.2 },
          { label: "Current", opacity: 1   },
          { label: "Est.",    opacity: 0.4 },
        ].map(({ label, opacity }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "var(--p-space-100)" }}>
            <div style={{
              width: 8, height: 8, borderRadius: "var(--p-border-radius-full)",
              backgroundColor: "var(--p-color-text)",
              opacity,
            }} />
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-body-sm)",
              fontWeight: "var(--p-font-weight-medium)",
              color: "var(--p-color-text-secondary)",
              lineHeight: 1.5,
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
