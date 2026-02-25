import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const payout = {
  amount: 14250.00,
  currency: "USD",
  status: "Processing",
  estimatedArrival: "5:00 PM",
  bank: "Chase •••• 4829",
  progress: 75,
  currentStep: "Sent to Bank",
};

/* ── Polaris Badge (warning tone) ──────────────────────────────────── */
function PolarisStatusBadge({ children, tone }: { children: React.ReactNode; tone: "warning" | "success" | "info" }) {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    warning: { bg: "var(--p-color-bg-fill-warning)", text: "var(--p-color-text-warning)", dot: "#b86e00" },
    success: { bg: "var(--p-color-bg-fill-success)", text: "var(--p-color-text-success)", dot: "#008060" },
    info:    { bg: "var(--p-color-bg-fill-info)",    text: "var(--p-color-text-info)",    dot: "#0070c0" },
  };
  const c = colors[tone];
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--p-space-150)",
      backgroundColor: c.bg,
      borderRadius: "var(--p-border-radius-full)",
      padding: "var(--p-space-050) var(--p-space-200)",
      fontFamily: "var(--p-font-family-sans)",
      fontSize: "var(--p-font-size-body-sm)",
      fontWeight: "var(--p-font-weight-medium)",
      color: c.text,
      lineHeight: 1.5,
    }}>
      {/* Pulsing dot */}
      <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          backgroundColor: c.dot, opacity: 0.75,
          animation: "polaris-ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
        }} />
        <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", backgroundColor: c.dot }} />
      </span>
      {children}
    </div>
  );
}

/* ── Polaris ProgressBar ────────────────────────────────────────────── */
function PolarisProgressBar({ progress }: { progress: number }) {
  return (
    <div style={{
      width: "100%",
      height: 6,
      backgroundColor: "var(--p-color-bg-fill-secondary)",
      borderRadius: "var(--p-border-radius-full)",
      overflow: "hidden",
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          height: "100%",
          backgroundColor: "var(--p-color-bg-fill-brand)",
          borderRadius: "var(--p-border-radius-full)",
        }}
      />
    </div>
  );
}

/* ── Polaris Button (slim) ──────────────────────────────────────────── */
function PolarisButton({
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
        justifyContent: "center",
        padding: "var(--p-space-150) var(--p-space-300)",
        borderRadius: "var(--p-border-radius-150)",
        fontFamily: "var(--p-font-family-sans)",
        fontSize: "var(--p-font-size-body-sm)",
        fontWeight: "var(--p-font-weight-semibold)",
        lineHeight: 1.5,
        cursor: "pointer",
        border: "1px solid",
        transition: `all var(--p-motion-duration-150) var(--p-motion-ease)`,
        ...(isPrimary ? {
          backgroundColor: "var(--p-color-bg-fill-brand)",
          borderColor: "var(--p-color-bg-fill-brand)",
          color: "var(--p-color-text-on-color)",
          boxShadow: "var(--p-shadow-button-primary)",
        } : {
          backgroundColor: "var(--p-color-bg-surface)",
          borderColor: "var(--p-color-border)",
          color: "var(--p-color-text)",
          boxShadow: "var(--p-shadow-button)",
        }),
      }}
    >
      {children}
    </button>
  );
}

export function LatestPayoutCard() {
  const [hasReceived, setHasReceived] = useState<boolean | null>(null);

  const handleConfirmation = (received: boolean) => {
    setHasReceived(received);
    if (received) toast.success("Marked as received");
    else toast.info("Thanks for your feedback");
  };

  return (
    <>
      {/* Keyframe for pulsing dot */}
      <style>{`
        @keyframes polaris-ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      {/* Polaris Card */}
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

        {/* Header — InlineStack align="space-between" blockAlign="start" */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          {/* BlockStack gap="100" */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--p-space-100)" }}>
            {/* Polaris Text variant="headingMd" */}
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-heading-md)",
              fontWeight: "var(--p-font-weight-semibold)",
              color: "var(--p-color-text)",
              lineHeight: 1.5,
            }}>
              Latest Payout
            </span>
            {/* Polaris Text variant="headingXl" */}
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-heading-xl)",
              fontWeight: "var(--p-font-weight-bold)",
              color: "var(--p-color-text)",
              lineHeight: 1.25,
            }}>
              ${payout.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              {" "}
              <span style={{
                fontSize: "var(--p-font-size-body-sm)",
                fontWeight: "var(--p-font-weight-medium)",
                color: "var(--p-color-text-secondary)",
              }}>
                {payout.currency}
              </span>
            </span>
          </div>

          <PolarisStatusBadge tone="warning">{payout.status}</PolarisStatusBadge>
        </div>

        {/* Progress — BlockStack gap="100" */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--p-space-100)" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-body-sm)",
              fontWeight: "var(--p-font-weight-semibold)",
              color: "var(--p-color-text)",
              lineHeight: 1.5,
            }}>
              {payout.currentStep}
            </span>
            <span style={{
              fontFamily: "var(--p-font-family-sans)",
              fontSize: "var(--p-font-size-body-sm)",
              fontWeight: "var(--p-font-weight-medium)",
              color: "var(--p-color-text-secondary)",
              lineHeight: 1.5,
            }}>
              {payout.progress}%
            </span>
          </div>
          <PolarisProgressBar progress={payout.progress} />
        </div>

        {/* Details row */}
        <div style={{
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
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-150)" }}>
            <Clock style={{ width: 14, height: 14 }} />
            <span>
              Est:{" "}
              <span style={{ color: "var(--p-color-text)", fontWeight: "var(--p-font-weight-semibold)" }}>
                {payout.estimatedArrival}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--p-space-150)" }}>
            <ArrowRight style={{ width: 14, height: 14 }} />
            <span>{payout.bank}</span>
          </div>
        </div>

        {/* Confirmation footer */}
        <AnimatePresence mode="wait">
          {hasReceived === null ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{
                fontFamily: "var(--p-font-family-sans)",
                fontSize: "var(--p-font-size-body-sm)",
                fontWeight: "var(--p-font-weight-medium)",
                color: "var(--p-color-text-secondary)",
                lineHeight: 1.5,
              }}>
                Did you receive this payout?
              </span>
              {/* InlineStack gap="200" */}
              <div style={{ display: "flex", gap: "var(--p-space-200)" }}>
                <PolarisButton variant="secondary" onClick={() => handleConfirmation(false)}>
                  No
                </PolarisButton>
                <PolarisButton variant="primary" onClick={() => handleConfirmation(true)}>
                  Yes
                </PolarisButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--p-space-150)",
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
              Confirmed
              <button
                onClick={() => setHasReceived(null)}
                style={{
                  marginLeft: "var(--p-space-100)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "inherit",
                  opacity: 0.6,
                  fontFamily: "var(--p-font-family-sans)",
                  fontSize: "var(--p-font-size-body-sm)",
                }}
              >
                Undo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
