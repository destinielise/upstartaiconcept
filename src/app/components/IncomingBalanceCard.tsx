import { useState, useRef, useEffect } from "react";
import { Card, BlockStack, InlineStack, Text } from "@shopify/polaris";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

const INITIAL_CURRENCIES = [
  { code: "USD", symbol: "$",  amount: 4100   },
  { code: "EUR", symbol: "€",  amount: 3780   },
  { code: "GBP", symbol: "£",  amount: 3250   },
  { code: "JPY", symbol: "¥",  amount: 612000 },
  { code: "CAD", symbol: "C$", amount: 5520   },
];

function RollingDigit({ digit }: { digit: string }) {
  if (!/^\d$/.test(digit)) {
    return <span style={{ display: "inline-block", height: "1em" }}>{digit}</span>;
  }
  const num = parseInt(digit, 10);
  return (
    <div style={{ height: "1em", overflow: "hidden", display: "inline-block", position: "relative" }}>
      <motion.div
        animate={{ y: `-${num * 10}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 12, mass: 1.2 }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <div key={i} style={{ height: "1em", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function RollingNumber({ value, symbol }: { value: number; symbol: string }) {
  const chars = Math.floor(value).toLocaleString().split("");
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--p-font-family-sans)",
      tabularNums: "true",
      lineHeight: 1,
      height: "1em",
      overflow: "hidden",
    } as React.CSSProperties}>
      <span style={{ marginRight: 3 }}>{symbol}</span>
      {chars.map((c, i) => <RollingDigit key={i} digit={c} />)}
    </div>
  );
}

export function IncomingBalanceCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currencies, setCurrencies] = useState(INITIAL_CURRENCIES);
  const [direction, setDirection] = useState(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies(prev =>
        prev.map(c => ({ ...c, amount: c.amount + Math.floor(Math.random() * 50) + 10 }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (delta: number) => {
    setDirection(delta > 0 ? 1 : -1);
    setCurrentIndex(prev =>
      delta > 0
        ? (prev + 1) % currencies.length
        : (prev - 1 + currencies.length) % currencies.length
    );
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => navigate(e.deltaY), 50);
  };

  const currency = currencies[currentIndex];

  const variants = {
    enter: (d: number) => ({ rotateX: d > 0 ? -90 : 90, opacity: 0 }),
    center: { rotateX: 0, opacity: 1 },
    exit: (d: number) => ({ rotateX: d > 0 ? 90 : -90, opacity: 0 }),
  };

  return (
    <Card>
      <BlockStack gap="300">
        <InlineStack align="space-between" blockAlign="center">
          <BlockStack gap="050">
            <Text as="h2" variant="headingMd">
              Incoming
            </Text>
            <Text as="span" variant="bodySm" tone="subdued">
              Payout balance
            </Text>
          </BlockStack>

          <InlineStack
            gap="050"
            blockAlign="center"
            align="center"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: "var(--p-color-bg-fill-secondary)",
                borderRadius: "var(--p-border-radius-100)",
                padding: "2px var(--p-space-150)",
                fontFamily: "var(--p-font-family-sans)",
                fontSize: "var(--p-font-size-body-sm)",
                color: "var(--p-color-text-secondary)",
              }}
            >
              <ChevronUp style={{ width: 12, height: 12 }} />
              <ChevronDown style={{ width: 12, height: 12 }} />
            </div>
          </InlineStack>
        </InlineStack>

        <div
          onWheel={handleWheel}
          style={{
            position: "relative",
            height: 80,
            perspective: "800px",
            cursor: "ns-resize",
            userSelect: "none",
          }}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currency.code}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <Text
                as="div"
                variant="headingXl"
              >
                <RollingNumber value={currency.amount} symbol={currency.symbol} />
              </Text>
              <div
                style={{
                  marginTop: "var(--p-space-100)",
                  fontFamily: "var(--p-font-family-sans)",
                  fontSize: "var(--p-font-size-body-sm)",
                  fontWeight: "var(--p-font-weight-medium)",
                  color: "var(--p-color-text-secondary)",
                  backgroundColor: "var(--p-color-bg-fill-secondary)",
                  padding: "1px var(--p-space-200)",
                  borderRadius: "var(--p-border-radius-full)",
                }}
              >
                {currency.code}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--p-space-100)",
          }}
        >
          {currencies.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrentIndex(i)}
              animate={{
                width: i === currentIndex ? 16 : 4,
                backgroundColor:
                  i === currentIndex
                    ? "var(--p-color-text)"
                    : "var(--p-color-text-secondary)",
                opacity: i === currentIndex ? 1 : 0.35,
              }}
              style={{
                height: 4,
                borderRadius: "var(--p-border-radius-full)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </BlockStack>
    </Card>
  );
}
