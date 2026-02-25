import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

const INITIAL_CURRENCIES = [
  { code: "USD", symbol: "$", amount: 4100 },
  { code: "EUR", symbol: "€", amount: 3780 },
  { code: "GBP", symbol: "£", amount: 3250 },
  { code: "JPY", symbol: "¥", amount: 612000 },
  { code: "CAD", symbol: "C$", amount: 5520 },
];

function RollingDigit({ digit }: { digit: string }) {
  const isNumber = /^\d$/.test(digit);

  if (!isNumber) {
    return <span className="inline-block h-[1em]">{digit}</span>;
  }

  const num = parseInt(digit, 10);

  return (
    <div style={{ height: "1em", overflow: "hidden", display: "inline-block", position: "relative" }}>
      <motion.div
        animate={{ y: `-${num * 10}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 12, mass: 1.2 }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} style={{ height: "1em", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function RollingNumber({ value, currencySymbol }: { value: number; currencySymbol: string }) {
  const formatted = Math.floor(value).toLocaleString();
  const chars = formatted.split("");

  return (
    <div className="flex items-center tabular-nums leading-none h-[1em] overflow-hidden">
      <span className="mr-1">{currencySymbol}</span>
      {chars.map((char, index) => (
        <RollingDigit key={index} digit={char} />
      ))}
    </div>
  );
}

export function IncomingBalanceCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currencies, setCurrencies] = useState(INITIAL_CURRENCIES);
  const [direction, setDirection] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies(prev => prev.map((curr) => {
        const increment = Math.floor(Math.random() * 50) + 10;
        return { ...curr, amount: curr.amount + increment };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (delta: number) => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    setDirection(delta > 0 ? 1 : -1);
    
    if (delta > 0) {
      setCurrentIndex((prev) => (prev + 1) % currencies.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + currencies.length) % currencies.length);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
        handleScroll(e.deltaY);
    }, 50);
  };

  const currency = currencies[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      rotateX: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
    center: {
      rotateX: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateX: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden relative group">
      <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-base font-semibold">Incoming</CardTitle>
          <p className="text-xs text-muted-foreground">Payout balance</p>
        </div>
        <div className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded flex items-center gap-1">
            <span className="hidden group-hover:inline transition-opacity">Scroll</span>
            <ChevronUp className="w-3 h-3" />
            <ChevronDown className="w-3 h-3" />
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col items-center justify-center relative min-h-0" onWheel={handleWheel}>
        {/* Compact 3D Drum */}
        <div 
          className="flex-1 flex items-center justify-center w-full relative perspective-[800px] cursor-ns-resize select-none"
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
              className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground flex items-baseline gap-2">
                 <RollingNumber value={currency.amount} currencySymbol={currency.symbol} />
              </div>
              <div className="text-sm font-medium text-muted-foreground mt-1 bg-secondary/50 px-2 rounded-full">
                {currency.code}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1 mt-2 mb-1">
          {currencies.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full cursor-pointer ${
                index === currentIndex 
                  ? "bg-primary" 
                  : "bg-muted"
              }`}
              animate={{
                width: index === currentIndex ? 16 : 4,
                backgroundColor: index === currentIndex ? "var(--primary)" : "var(--muted)"
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
