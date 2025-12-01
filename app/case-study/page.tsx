"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Users,
  BarChart3,
  FileText,
  Quote,
  Database,
  Search,
  CheckCircle2,
  LineChart,
  LayoutGrid,
  TrendingUp,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

/**
 * Accenture‑safe case study page (React + Tailwind + shadcn/ui)
 * - No third‑party logos or endorsements
 * - Neutral, factual claims
 * - Quote placeholder until approval
 * - CTAs wired safely (no Next.js router dependency)
 */

// -------------------------
// Utilities
// -------------------------
function useInView<T extends Element>(ref: React.RefObject<T | null>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const obs = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      root: null,
      rootMargin,
      threshold: 0.2,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, rootMargin])
  return isIntersecting
}

function easeOutCubic(p: number) {
  return 1 - Math.pow(1 - p, 3)
}

function CountUp({
  end,
  duration = 1200,
  prefix = "",
  suffix = "",
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const from = 0
    let frameId: number
    const step = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = easeOutCubic(p)
      setVal(Math.round(from + (end - from) * eased))
      if (p < 1) frameId = requestAnimationFrame(step)
    }
    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [end, duration, inView])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val}
      {suffix}
    </span>
  )
}


// -------------------------
// Visuals
// -------------------------
function DeviceMock({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-xl ring-1 ring-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-3 text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-auto font-medium">Executive Brief Preview</span>
      </div>
      <div className="max-h-96 overflow-y-auto bg-white relative">
        <Image
          src="/websiteonepager.png"
          alt="AI Technologies - Executive Brief Preview"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      {children}
    </div>
  )
}

function StatPill({ icon: Icon, label }: { icon: React.ElementType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm shadow-sm ring-1 ring-gray-100 backdrop-blur">
      <Icon className="h-4 w-4 text-gray-600" />
      <span className="text-gray-700">{label}</span>
    </div>
  )
}

function KpiChip({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 border border-gray-100">
      <div className="text-3xl font-semibold text-gray-900">
        <CountUp end={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

function Step({ icon: Icon, title, children }: { icon: React.ElementType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="min-w-[220px] max-w-[280px] shrink-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm ring-1 ring-gray-100 light-scrollbar">
      <div className="mb-2 flex items-center gap-2 text-gray-700">
        <Icon className="h-5 w-5" /> <span className="font-medium">{title}</span>
      </div>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  )
}

// -------------------------
// Page
// -------------------------
export default function CaseStudyPage() {
  const galleryImages = [
    {
      src: "/websiteonepager.png",
      alt: "AI Technologies - Executive Brief",
      caption:
        "Comprehensive AI-generated startup analysis with evaluation scores, market momentum, risk assessment, and competitive analysis for AI Technologies.",
      type: "one-pager",
    },
    {
      src: "/websiteonepager3.png",
      alt: "AI Technologies - Executive Brief",
      caption:
        "Comprehensive AI-generated startup analysis with evaluation scores, market momentum, risk assessment, and competitive analysis for AI Technologies.",
      type: "one-pager",
    },
    {
      src: "/websitetracker.png",
      alt: "Portfolio Tracker - Table View",
      caption:
        "Detailed portfolio management with comprehensive company metrics, funding stages, and performance tracking across multiple AI startups.",
      type: "portfolio-table",
    },
    {
      src: "/websiteworkspace.png",
      alt: "Portfolio Cards - Grid View",
      caption:
        "Interactive card-based portfolio overview with key metrics and visual company representation for easy comparison.",
      type: "portfolio-cards",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/** Navigation **/}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 xs:px-0 h-20 flex items-center justify-between">
          <Logo />
          <Link href="/" className="shrink-0">
            <Button variant="default" size="sm" className="border border-gray-300">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav> */}

      <div className="pt-0">
        {/** HERO **/}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-14 pt-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <Badge className="mb-3 bg-gray-100 text-gray-700 hover:bg-gray-200" variant="secondary">Case study</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">
                TechNext Challenge: screening 60 AI startups in 7 days
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                SamkhyaAI provided a single evaluation workspace with investor‑grade one‑pagers, live benchmarks, and a
                portfolio tracker. Review time per startup dropped from around 2 hours to about 15 minutes, with clearer
                alignment among reviewers.
              </p>
              {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button className="rounded-full bg-gray-600 hover:bg-gray-700 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 transition-all duration-300 hover:scale-105 shadow-md border border-gray-700" size="lg" onClick={onDemoClick} data-analytics-id="cta-hero-demo">
                  Book a demo
                </Button>
              </div> */}
              <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
                <KpiChip label="Startups covered" value={60} />
                <KpiChip label="Faster reviews" value={8} suffix="x" />
                <KpiChip label="Delivery timeline" value={7} suffix=" days" />
              </div>
            </div>
            <div className="md:col-span-5">
              <DeviceMock />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </section>

        {/** PROOF BELT **/}
        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <StatPill icon={ShieldCheck} label="Fair and transparent evaluation" />
            <StatPill icon={Users} label="Aligned global reviewers" />
            <StatPill icon={BarChart3} label="Benchmarks built in" />
          </div>
        </section>

        {/** CHALLENGE **/}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="mb-6 flex items-center gap-2 text-gray-700">
            <LayoutGrid className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">The challenge</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <FileText className="h-5 w-5 text-gray-600" />
                <div className="font-medium text-gray-900">Manual and fragmented</div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Key facts were buried in decks and spreadsheets, slowing analysis and increasing the risk of missed
                signals.
              </CardContent>
            </Card>
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Search className="h-5 w-5 text-gray-600" />
                <div className="font-medium text-gray-900">Inconsistent benchmarks</div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Different AI categories require different metrics. Without a shared index, comparisons were subjective.
              </CardContent>
            </Card>
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Users className="h-5 w-5 text-gray-600" />
                <div className="font-medium text-gray-900">Slow alignment</div>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Global stakeholders needed a single page of truth to get to decisions faster and more consistently.
              </CardContent>
            </Card>
          </div>
        </section>

        {/** SOLUTION RIBBON **/}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-center gap-2 text-gray-700">
            <BarChart3 className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">The solution</h2>
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 p-3">
            <Step icon={Database} title="Ingest">
              Secure vault for pitch decks and startup data. Everything centralized and searchable.
            </Step>
            <Step icon={Search} title="Enrich">
              Live signals from nine sources to track funding, hiring, web, and social momentum.
            </Step>
            <Step icon={FileText} title="One‑pagers">
              Plain‑English investor briefs with a calibrated evaluation index and risk highlights.
            </Step>
            <Step icon={BarChart3} title="Benchmark">
              Peer sets and sector baselines inline so reviewers compare like with like.
            </Step>
            <Step icon={LineChart} title="Track">
              Portfolio dashboard to sort, filter, and maintain an auditable trail of decisions.
            </Step>
          </div>
        </section>

        {/** IMPACT - Light Theme Version **/}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900">Impact</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Measurable transformation in investment decision-making
            </p>
          </div>

          {/** Key Metrics - Light Theme Cards **/}
          <div className="grid gap-6 md:grid-cols-3 mb-20">
            {/** Time Efficiency **/}
            <motion.div
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light tracking-tight text-gray-900">
                    <CountUp end={87} suffix="%" />
                  </div>
                  <div className="text-lg font-medium text-gray-900">Time Reduction</div>
                  <div className="text-sm text-gray-600">From 2 hours to 15 minutes</div>
                </div>
              </div>

              {/** Progress Indicator **/}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Before</span>
                  <span>After</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gray-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/** Scale Impact **/}
            <motion.div
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light tracking-tight text-gray-900">
                    <CountUp end={3} suffix="×" />
                  </div>
                  <div className="text-lg font-medium text-gray-900">Volume Increase</div>
                  <div className="text-sm text-gray-600">60 startups in 7 days</div>
                </div>
              </div>

              {/** Bar Chart **/}
              <div className="flex items-end gap-3 h-12">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-full bg-gray-400 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "16px" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                  <span className="text-xs text-gray-500 mt-2">Before</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-full bg-gray-600 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "48px" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                  <span className="text-xs text-gray-500 mt-2">After</span>
                </div>
              </div>
            </motion.div>

            {/** Quality Metric **/}
            <motion.div
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-gray-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light tracking-tight text-gray-900">
                    <CountUp end={95} suffix="%" />
                  </div>
                  <div className="text-lg font-medium text-gray-900">Alignment Rate</div>
                  <div className="text-sm text-gray-600">Consistent evaluation</div>
                </div>
              </div>

              {/** Circular Progress **/}
              <div className="flex justify-center">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      // stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-200"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-600"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.95 }}
                      transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/** Before vs After - Light Theme **/}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-3">
                  The Transformation
                </h3>
                <p className="text-gray-600">
                  From manual processes to automated intelligence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/** Before **/}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Before</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { text: "Manual PDF analysis", detail: "2+ hours per startup" },
                      { text: "Inconsistent evaluation criteria", detail: "Subjective decisions" },
                      { text: "Fragmented data sources", detail: "Missed opportunities" },
                      { text: "Slow team alignment", detail: "Weeks for consensus" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/** After **/}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">After</h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { text: "Automated one-pager generation", detail: "15 minutes per startup" },
                      { text: "Standardized evaluation index", detail: "95% team alignment" },
                      { text: "Real-time data integration", detail: "Zero missed signals" },
                      { text: "Instant decision support", detail: "7-day cohort analysis" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/** Results Highlight **/}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Key Achievement</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Successfully evaluated 60 AI startups in 7 days with 95% reviewer alignment, reducing analysis time by
                87% while maintaining institutional-grade evaluation standards.
              </p>
              <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>On-time delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <span>Quality maintained</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Team aligned</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/** GALLERY **/}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-center gap-2 text-gray-700">
            <FileText className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Gallery</h2>
          </div>
          <Carousel>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-[1.5] items-center justify-center p-6">
                        {image.type === "one-pager" ? (
                          <div className="w-full max-w-4xl mx-auto">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                              <div className="space-y-0">
                                {/* <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-auto object-contain"
                                /> */}
                                {/* <img
                                  src="/websiteonepager.png"
                                  alt="LEGOAI Technologies - Executive Brief Page 2"
                                  className="w-full h-auto object-contain"
                                /> */}

                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                          />
                        )}
                      </CardContent>
                    </Card>
                    <p className="mt-6 text-center text-sm text-gray-600 max-w-5xl leading-relaxed">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="default" />
            <CarouselNext variant="default" />
          </Carousel>
          <p className="mt-3 text-center text-xs text-gray-500">
            Screens shown for illustration. Actual platform interface and analysis results.
          </p>
        </section>

        {/** QUOTE **/}
        <section className="mx-auto max-w-4xl px-6 py-12">
          {/* <Card className="shadow-sm border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Quote className="mt-1 h-6 w-6 text-gray-500" />
                <div>
                  <p className="text-lg text-gray-700">"Quote pending client approval."</p>
                  <p className="mt-2 text-sm text-gray-600">TechNext 2025 panelist</p>
                </div>
              </div>

            </CardContent>
          </Card> */}


          {/* Client Quote */}
          <div className=" bg-white  rounded-2xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Quote className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <p className="text-md text-gray-700 italic leading-relaxed mb-3">
                  &quot;This transformed our entire evaluation process. We went from weeks of manual analysis to
                  getting comprehensive insights in minutes, with better consistency across our global team.&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">AA</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Associate Director</p>
                    <p className="text-sm text-gray-500">Accenture Ventures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** CTA BAND + FAQ **/}
        {/* <section className="relative isolate overflow-hidden bg-black py-14 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
            <h3 className="text-2xl font-semibold">Bring this workflow to your team</h3>
            <p className="max-w-2xl text-gray-300">
              Spin up an evaluation workspace with investor‑grade one‑pagers, benchmarks, and a live portfolio tracker.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="gap-2 bg-white text-gray-900 hover:bg-gray-100" onClick={onDemoClick} data-analytics-id="cta-footer-demo">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-4xl px-6">
            <Accordion type="single" collapsible className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">How long does deployment take?</AccordionTrigger>
                <AccordionContent className="text-gray-200">
                  Typical setup is 5 to 10 days for a 50 to 100 startup cohort, including ingest, enrichment, and index
                  calibration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white">What data sources are used?</AccordionTrigger>
                <AccordionContent className="text-gray-200">
                  We aggregate signals from public and licensed sources to track funding, hiring, web, and social
                  momentum. Sources can be tailored.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white">Can we keep the tracker after the event?</AccordionTrigger>
                <AccordionContent className="text-gray-200">
                  Yes. The portfolio dashboard rolls forward for ongoing monitoring and follow‑ups.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section> */}

        <footer className="px-6 py-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SamkhyaAI. All rights reserved. This page describes a specific event and does not
          imply endorsement. All trademarks belong to their respective owners.
        </footer>
      </div>
    </div>
  )
}
