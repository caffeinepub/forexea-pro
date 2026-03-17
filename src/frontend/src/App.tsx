import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Activity,
  ArrowRight,
  BarChart2,
  Bot,
  CheckCircle,
  ChevronDown,
  Clock,
  DollarSign,
  Download,
  Headphones,
  Menu,
  Play,
  Settings,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const TICKER_ITEMS = [
  "EUR/USD +0.42%",
  "GBP/USD +0.18%",
  "USD/JPY -0.09%",
  "AUD/USD +0.63%",
  "USD/CHF -0.22%",
  "NZD/USD +0.31%",
  "USD/CAD -0.15%",
  "EUR/GBP +0.08%",
];

export default function App() {
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const openPurchase = () => setPurchaseOpen(true);

  const features = [
    {
      icon: Bot,
      title: "Fully Automated Trading",
      desc: "Set it and forget it. The EA monitors markets 24/7 and executes trades without any manual input.",
    },
    {
      icon: TrendingUp,
      title: "High Profit Potential",
      desc: "Backtested strategy designed to generate $10,000+ monthly returns starting from just $100.",
    },
    {
      icon: BarChart2,
      title: "Works on MT4 & MT5",
      desc: "Compatible with the world's most popular forex trading platforms — no special software needed.",
    },
    {
      icon: Shield,
      title: "Risk Management Built-in",
      desc: "Automatic stop-loss, take-profit, and lot sizing algorithms protect your capital intelligently.",
    },
    {
      icon: Zap,
      title: "Easy Setup (10 Minutes)",
      desc: "Step-by-step guide included. Have your bot live and trading within 10 minutes of purchase.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated support team available around the clock to help with installation and optimization.",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Active Traders" },
    { icon: DollarSign, value: "$2M+", label: "Profit Generated" },
    { icon: Activity, value: "98%", label: "Win Rate" },
    { icon: Clock, value: "24/7", label: "Active Trading" },
  ];

  const steps = [
    {
      icon: Download,
      title: "Purchase & Download",
      desc: "Complete your purchase and instantly receive the EA file along with our comprehensive setup guide.",
    },
    {
      icon: Settings,
      title: "Install on MT4/MT5",
      desc: "Drop the EA into your MetaTrader platform following our clear step-by-step video instructions.",
    },
    {
      icon: Play,
      title: "Watch It Trade",
      desc: "Sit back as your EA scans the forex markets and executes profitable trades around the clock.",
    },
  ];

  const faqs = [
    {
      q: "Is this really fully automated?",
      a: "Yes, completely. Once installed on MetaTrader 4 or 5, the EA handles all analysis, entry, exit and risk management automatically. You don't need to watch charts or make any decisions.",
    },
    {
      q: "What broker do I need?",
      a: "ForexEA Pro works with any MetaTrader 4 or MT5 compatible broker. We recommend brokers with low spreads such as IC Markets, Pepperstone, or XM for best results.",
    },
    {
      q: "What's the minimum investment?",
      a: "The EA is designed to start trading profitably with as little as $100 in your trading account. More capital generally means higher absolute returns.",
    },
    {
      q: "Is it safe? What about losses?",
      a: "All trading involves risk. The EA includes built-in risk management with stop-loss orders and position sizing. Past performance of $10k/month is based on backtesting and live results, but markets can vary.",
    },
    {
      q: "How do I get support after purchase?",
      a: "Email us at support@forexeapro.com and our team responds within a few hours. We also offer a setup call for new customers to make sure everything is running perfectly.",
    },
  ];

  const standardFeatures = [
    "ForexEA Pro full version",
    "MT4 & MT5 compatible",
    "Setup guide & video walkthrough",
    "Email support",
    "Lifetime access",
    "Free bug fix updates",
  ];

  const discountFeatures = [
    "Everything in Standard Plan",
    "3 months of priority updates",
    "3 months of dedicated support",
    "Strategy optimization tips",
    "Bonus: Broker recommendations",
    "Lifetime access after discount period",
  ];

  const trustBadges = [
    { icon: Shield, text: "Secure Purchase" },
    { icon: Star, text: "500+ Happy Traders" },
    { icon: Zap, text: "Instant Delivery" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ticker tape */}
      <div className="bg-primary/10 border-b border-primary/20 py-1.5 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          <span className="flex gap-8 pr-8 text-xs text-primary font-body font-medium">
            {TICKER_ITEMS.map((t) => (
              <span key={t} className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </span>
          <span
            className="flex gap-8 pr-8 text-xs text-primary font-body font-medium"
            aria-hidden="true"
          >
            {TICKER_ITEMS.map((t) => (
              <span key={`dup-${t}`} className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              ForexEA <span className="text-gradient-gold">Pro</span>
            </span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing", "FAQ"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                data-ocid={`nav.${item.toLowerCase().replace(/ /g, "-")}.link`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={openPurchase}
              className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-body font-semibold"
              data-ocid="nav.primary_button"
            >
              Buy Now
            </Button>
            <button
              type="button"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-border"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {["Features", "How It Works", "Pricing", "FAQ"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() =>
                      scrollTo(item.toLowerCase().replace(/ /g, "-"))
                    }
                    className="text-left text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Button
                  onClick={openPurchase}
                  className="bg-primary text-primary-foreground font-body font-semibold w-full"
                >
                  Buy Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-trading.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-body font-medium px-4 py-1.5">
                🤖 AI-Powered Forex Trading Bot
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Turn <span className="text-gradient-gold">$100</span>
              <br />
              Into <span className="text-gradient-green">$10,000</span>
              <br />
              Every Month
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-body text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Fully automated forex trading. Our expert advisor works 24/7,
              executing high-probability trades while you live your life.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-6 mb-10"
            >
              {[
                { label: "Avg Monthly Profit", value: "$10,000+" },
                { label: "Automation", value: "100%" },
                { label: "Min Investment", value: "$100" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gradient-green">
                    {s.value}
                  </span>
                  <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={openPurchase}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-body font-semibold text-base px-8 h-14"
                data-ocid="hero.primary_button"
              >
                Get the Bot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("pricing")}
                className="border-border text-foreground hover:bg-secondary font-body font-semibold text-base px-8 h-14"
                data-ocid="hero.secondary_button"
              >
                See Pricing
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-12 bg-card border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col items-center text-center"
              >
                <s.icon className="w-6 h-6 text-primary mb-2" />
                <span className="font-display text-4xl font-bold text-gradient-green">
                  {s.value}
                </span>
                <span className="font-body text-sm text-muted-foreground mt-1">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-body">
            Why Choose Us
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient-gold block">Trade Like a Pro</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            ForexEA Pro is engineered for consistent performance, protecting
            your capital while maximizing returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="card-glass relative rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
              data-ocid={`features.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {f.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 bg-card border-y border-border"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 font-body">
              Simple Process
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Up and Running in
              <span className="text-gradient-green block">3 Easy Steps</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className="flex flex-col items-center text-center relative"
                data-ocid={`steps.item.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 glow-green relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
          data-ocid="pricing.section"
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 font-body">
            Simple Pricing
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            One-Time Payment.
            <span className="text-gradient-gold block">Lifetime Access.</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            No monthly subscriptions. Pay once, trade forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="card-glass rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold mb-1">
                Standard Plan
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Full EA, no expiry
              </p>
            </div>
            <div className="mb-8">
              <span className="font-display text-5xl font-bold">$200</span>
              <span className="font-body text-muted-foreground ml-2">
                one-time
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {standardFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:bg-primary/10 font-body font-semibold w-full h-12"
              onClick={openPurchase}
              data-ocid="pricing.standard.primary_button"
            >
              Buy Now — $200
            </Button>
          </motion.div>

          {/* Discount */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden border border-primary/50 glow-green"
            style={{
              background:
                "linear-gradient(135deg, oklch(8 0.012 250), oklch(10 0.015 180))",
            }}
          >
            <div className="absolute top-0 right-0">
              <div className="bg-primary text-primary-foreground text-xs font-body font-bold px-4 py-1.5 rounded-bl-xl">
                BEST VALUE
              </div>
            </div>

            <div className="mb-6">
              <Badge className="mb-3 bg-accent/20 text-accent border-accent/30 font-body text-xs animate-pulse">
                ⏳ Limited Time Offer
              </Badge>
              <h3 className="font-display text-2xl font-bold mb-1">
                3-Month Discount
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Best value — save $50
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-gradient-green">
                  $150
                </span>
                <span className="font-body text-xl text-muted-foreground line-through">
                  $200
                </span>
              </div>
              <span className="font-body text-sm text-primary mt-1 block">
                You save $50 — one-time payment
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {discountFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-bold w-full h-12 text-base"
              onClick={openPurchase}
              data-ocid="pricing.discount.primary_button"
            >
              Get Discount — $150
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {trustBadges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 text-muted-foreground font-body text-sm"
            >
              <b.icon className="w-4 h-4 text-primary" />
              {b.text}
            </div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 font-body">
              Got Questions?
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Frequently Asked
              <span className="text-gradient-gold block">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="card-glass rounded-xl border-0 px-6"
                  data-ocid={`faq.item.${i + 1}`}
                >
                  <AccordionTrigger className="font-body font-semibold text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(65 0.22 155 / 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, oklch(75 0.18 85 / 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Ready to Start
              <span className="text-gradient-green block">Earning?</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Join 500+ traders already using ForexEA Pro to grow their wealth
              on autopilot.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={openPurchase}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-body font-bold text-lg px-10 h-14"
                data-ocid="cta.primary_button"
              >
                Get ForexEA Pro Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("faq")}
                className="border-border text-foreground hover:bg-secondary font-body font-semibold text-base px-8 h-14"
              >
                Still have questions?
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                ForexEA <span className="text-gradient-gold">Pro</span>
              </span>
            </div>
            <div className="flex gap-6">
              {["Features", "Pricing", "FAQ"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <a
              href="mailto:support@forexeapro.com"
              className="font-body text-sm text-primary hover:text-primary/80 transition-colors"
            >
              support@forexeapro.com
            </a>
          </div>

          <div className="border-t border-border pt-8 space-y-4">
            <p className="font-body text-xs text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              <strong className="text-foreground">Risk Disclaimer:</strong>{" "}
              Trading forex and CFDs carries a high level of risk and may not be
              suitable for all investors. The high degree of leverage can work
              against you as well as for you. Past performance results shown are
              not necessarily indicative of future performance. You should
              carefully consider your investment objectives, level of
              experience, and risk appetite before trading.
            </p>
            <p className="font-body text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()}. Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      <Dialog open={purchaseOpen} onOpenChange={setPurchaseOpen}>
        <DialogContent
          className="sm:max-w-md bg-card border-border"
          data-ocid="purchase.modal"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              🎉 Almost There!
            </DialogTitle>
            <DialogDescription className="font-body text-base text-muted-foreground pt-2">
              Thank you for your interest in ForexEA Pro! To complete your
              purchase, please contact us directly:
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <div className="card-glass rounded-xl p-5 text-center">
              <p className="font-body text-sm text-muted-foreground mb-2">
                Send your purchase request to:
              </p>
              <a
                href="mailto:support@forexeapro.com"
                className="font-display text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                support@forexeapro.com
              </a>
            </div>
            <div className="space-y-2">
              {[
                "Mention which plan you want (Standard $200 or Discount $150)",
                "Our team will respond within a few hours",
                "Instant EA delivery after payment confirmation",
              ].map((tip) => (
                <p
                  key={tip}
                  className="font-body text-sm text-muted-foreground flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {tip}
                </p>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold"
              onClick={() => setPurchaseOpen(false)}
              data-ocid="purchase.modal.close_button"
            >
              Got it, I&apos;ll email you!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
