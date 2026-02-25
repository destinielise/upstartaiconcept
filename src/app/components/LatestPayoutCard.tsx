import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import {
  Badge,
  BlockStack,
  Button,
  Card,
  InlineStack,
  ProgressBar,
  Text,
} from "@shopify/polaris";

const payout = {
  amount: 14250.0,
  currency: "USD",
  status: "Processing",
  estimatedArrival: "5:00 PM",
  bank: "Chase •••• 4829",
  progress: 75,
  currentStep: "Sent to Bank",
};

export function LatestPayoutCard() {
  const [hasReceived, setHasReceived] = useState<boolean | null>(null);

  const handleConfirmation = (received: boolean) => {
    setHasReceived(received);
    if (received) toast.success("Marked as received");
    else toast.info("Thanks for your feedback");
  };

  return (
    <Card>
      <BlockStack gap="300">
        <InlineStack align="space-between" blockAlign="start">
          <BlockStack gap="100">
            <Text as="h2" variant="headingMd">
              Latest payout
            </Text>
            <Text as="p" variant="headingXl">
              {payout.amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}{" "}
              <Text as="span" variant="bodySm" tone="subdued">
                {payout.currency}
              </Text>
            </Text>
          </BlockStack>

          <Badge tone="warning">{payout.status}</Badge>
        </InlineStack>

        <BlockStack gap="100">
          <InlineStack align="space-between">
            <Text as="span" variant="bodySm" fontWeight="semibold">
              {payout.currentStep}
            </Text>
            <Text as="span" variant="bodySm" tone="subdued">
              {payout.progress}%
            </Text>
          </InlineStack>
          <ProgressBar progress={payout.progress} />
        </BlockStack>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--p-color-bg-surface-secondary)",
            border: "1px solid var(--p-color-border)",
            borderRadius: "var(--p-border-radius-200)",
            padding: "var(--p-space-200) var(--p-space-300)",
            fontFamily: "var(--p-font-family-sans)",
            fontSize: "var(--p-font-size-body-sm)",
            color: "var(--p-color-text-secondary)",
            lineHeight: 1.5,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--p-space-150)",
            }}
          >
            <Clock style={{ width: 14, height: 14 }} />
            <span>
              Est:{" "}
              <span
                style={{
                  color: "var(--p-color-text)",
                  fontWeight: "var(--p-font-weight-semibold)",
                }}
              >
                {payout.estimatedArrival}
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--p-space-150)",
            }}
          >
            <ArrowRight style={{ width: 14, height: 14 }} />
            <span>{payout.bank}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {hasReceived === null ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <InlineStack align="space-between" blockAlign="center">
                <Text as="span" variant="bodySm" tone="subdued">
                  Did you receive this payout?
                </Text>
                <InlineStack gap="200">
                  <Button
                    size="slim"
                    variant="secondary"
                    onClick={() => handleConfirmation(false)}
                  >
                    No
                  </Button>
                  <Button
                    size="slim"
                    variant="primary"
                    onClick={() => handleConfirmation(true)}
                  >
                    Yes
                  </Button>
                </InlineStack>
              </InlineStack>
            </motion.div>
          ) : (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <InlineStack
                align="center"
                blockAlign="center"
                gap="150"
                style={{
                  backgroundColor: "var(--p-color-bg-fill-success)",
                  borderRadius: "var(--p-border-radius-150)",
                  padding: "var(--p-space-150)",
                  fontFamily: "var(--p-font-family-sans)",
                  fontSize: "var(--p-font-size-body-sm)",
                  fontWeight: "var(--p-font-weight-medium)",
                  color: "var(--p-color-text-success)",
                }}
              >
                <Check style={{ width: 14, height: 14 }} />
                <span>Confirmed</span>
                <Button
                  variant="plain"
                  size="slim"
                  onClick={() => setHasReceived(null)}
                >
                  Undo
                </Button>
              </InlineStack>
            </motion.div>
          )}
        </AnimatePresence>
      </BlockStack>
    </Card>
  );
}
