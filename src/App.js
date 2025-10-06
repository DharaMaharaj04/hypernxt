"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Layers, Shield, Cable, Sun, Building2, Lock, MapPin, Phone, Mail } from "lucide-react";
import LOGO from "./assets/images/Hypernext Logo Blue.png";


// Minimal inline Button (no external deps)
function Button({ children, className = "", variant = "solid", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center font-medium transition rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sz = size === "lg" ? "h-11 px-6 text-sm" : size === "sm" ? "h-8 px-4 text-xs" : "h-10 px-5 text-sm";
  const variants = {
    solid: "bg-[var(--ink)] text-white hover:opacity-90",
    outline: "border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
    brand: "bg-[var(--brand)] text-[var(--ink)] hover:opacity-90",
    ghost: "text-[var(--ink)] hover:bg-black/5",
  };
  const v = variants[variant] || variants.solid;
  return <button className={`${base} ${sz} ${v} ${className}`} {...props}>{children}</button>;
}

function DeviceFrame({ children, caption }) {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
      <div className="h-10 flex items-center justify-center"><div className="h-1.5 w-24 rounded-full bg-slate-200" /></div>
      <div className="px-6 pb-6">{children}</div>
      {caption ? (<div className="px-6 pb-6 text-center text-xs text-slate-500">{caption}</div>) : null}
    </div>
  );
}

function Stat({ k, v, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight">{v}</div>
      <div className="mt-1 text-sm text-slate-700">{k}</div>
      {sub ? <div className="text-xs text-slate-500">{sub}</div> : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

export default function HypernextAppleStyle() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -40]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.985]);

  // Balanced dual brand colors
  const cssVars = {
    "--brand": "#00FF40", // green accent
    "--ink": "#0B1220",  // deep navy
  };

  return (
    <div className="bg-white text-slate-900 font-[system-ui]" style={cssVars}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[var(--ink)]/20">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Hypernext" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight text-[var(--ink)]">Hypernext Data Center Limited</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost">Overview</Button>
            <Button variant="ghost">Technology</Button>
            <Button variant="ghost">Campuses</Button>
            <Button variant="solid">Talk to Sales</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"linear-gradient(180deg, rgba(0,255,64,0.08) 0%, rgba(11,18,32,0.05) 40%, #ffffff 100%)"}} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-[var(--ink)]">AI‑Ready. Tier IV. Built for the GPU era.</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">Patented closed‑loop direct‑to‑chip liquid cooling and the HyperOne™ Operating System power our hyperscale campuses across India.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Patented Liquid Cooling</Pill>
              <Pill>HyperOne™ DCOS</Pill>
              <Pill>Tier IV Design</Pill>
              <Pill>SOC 2‑as‑a‑Service</Pill>
              <Pill>7‑Layer Security</Pill>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="brand">Get Reference Design</Button>
              <Button size="lg" variant="outline">Download Overview</Button>
            </div>
          </div>
          <motion.div style={{ y, scale }}>
            <DeviceFrame caption="Engineered for the trillion‑token era">
              <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200 grid place-items-center">
                <Cpu className="w-16 h-16" style={{color:'var(--brand)'}} />
              </div>
            </DeviceFrame>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat k="Hyderabad" v="100 MW" sub="AI‑ready campus" />
          <Stat k="Andhra Pradesh" v="192 MW" sub="GPU‑first clusters" />
          <Stat k="Kutch Solar" v="600 MW" sub="Utility‑scale green PPA" />
          <Stat k="Vizag" v="CLS" sub="Cable Landing Station (upcoming)" />
        </div>
      </section>

      {/* TECHNOLOGY — COOLING */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold text-[var(--ink)]">Closed‑Loop Direct‑to‑Chip Cooling</h2>
            <p className="mt-4 text-slate-600">Sealed secondary loop with quick‑disconnect plates and zone isolation. Designed for GPU trays with field‑swappable plates and leak containment.</p>
            <ul className="mt-4 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>40–80 kW+ AI rack density ready</li>
              <li>Drip‑less couplings, leak detection & containment</li>
              <li>Service isolation for hot‑swap plates</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <DeviceFrame caption="D2C manifold concept">
              <div className="relative aspect-[10/7] rounded-2xl border border-slate-200 overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(900px 300px at 20% 15%, rgba(0,255,64,0.10) 0%, transparent 60%), radial-gradient(800px 280px at 85% 85%, rgba(11,18,32,0.10) 0%, transparent 60%)"}} />
                <motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.0, ease: "easeOut" }} className="absolute left-6 top-10 h-2 rounded-full" style={{background:"rgba(11,18,32,0.55)", boxShadow:"0 0 20px rgba(11,18,32,0.25)"}} />
                <motion.div initial={{ height: 0 }} whileInView={{ height: "72%" }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.0, delay: 0.12, ease: "easeOut" }} className="absolute left-6 top-10 w-2 rounded-full" style={{background:"rgba(0,255,64,0.65)", boxShadow:"0 0 22px rgba(0,255,64,0.45)"}} />
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
                  {[0,1,2,3,4,5].map(i => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: 0.06 * i }} className="rounded-xl border bg-gradient-to-br from-white to-slate-50" style={{borderColor:"rgba(11,18,32,0.2)"}} />
                  ))}
                </div>
              </div>
            </DeviceFrame>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY — HYPERONE */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <DeviceFrame caption="HyperOne™ unified telemetry (concept)">
              <div className="relative aspect-[10/7] rounded-2xl border border-slate-200 overflow-hidden p-6">
                <div className="grid grid-cols-3 gap-4">
                  {["PUE","kW","°C","CFD","Latency","Carbon"].map((t,i)=> (
                    <motion.div key={t} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.4, delay:0.06*i}} className="rounded-xl border bg-white p-4" style={{borderColor:"rgba(11,18,32,0.18)", boxShadow:"0 0 10px rgba(0,255,64,0.08)"}}>
                      <div className="text-xs text-slate-500">{t}</div>
                      <div className="mt-1 text-xl font-semibold text-[var(--ink)]">{t==="PUE"?"1.09":t==="kW"?"78,240":t==="°C"?"29.4":t==="Latency"?"1.8 ms":t==="Carbon"?"‑37%":"OK"}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: "easeOut" }} className="mt-6 h-24 rounded-xl border p-3" style={{borderColor:"rgba(11,18,32,0.2)"}}>
                  <div className="h-full w-full rounded-md bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                    <motion.svg initial={{ x: -200 }} animate={{ x: 0 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} viewBox="0 0 600 120" className="absolute inset-0" style={{color:"#00FF40"}}>
                      <path d="M0,60 C60,20 120,100 180,60 240,20 300,100 360,60 420,20 480,100 540,60 600,20 660,100 720,60" fill="none" stroke="currentColor" strokeWidth="2" />
                    </motion.svg>
                  </div>
                </motion.div>
              </div>
            </DeviceFrame>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[var(--ink)]">HyperOne™ Data Center Operating System</h2>
            <p className="mt-4 text-slate-600">Unified telemetry, capacity orchestration, and predictive maintenance across facilities, energy, and interconnects — presented in a calm, operator‑first UI.</p>
            <ul className="mt-4 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Observability: racks → grid, live</li>
              <li>Optimization: carbon‑aware scheduling</li>
              <li>Automation: playbooks & SOAR hooks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAMPUSES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-[var(--ink)]">Campuses & Energy</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl p-6 border shadow-sm" style={{borderColor:"rgba(11,18,32,0.15)", background:"linear-gradient(135deg, rgba(0,255,64,0.05), rgba(11,18,32,0.04))"}}>
              <div className="flex items-center gap-2"><Building2 className="w-5 h-5"/><h3 className="font-medium">Hyderabad — 100 MW</h3></div>
              <p className="mt-2 text-sm text-slate-600">GPU‑dense halls, SOC/NOC, liquid‑cooling manifolds, 7‑layer security.</p>
            </div>
            <div className="rounded-3xl p-6 border shadow-sm" style={{borderColor:"rgba(11,18,32,0.15)", background:"linear-gradient(135deg, rgba(0,255,64,0.05), rgba(11,18,32,0.04))"}}>
              <div className="flex items-center gap-2"><Building2 className="w-5 h-5"/><h3 className="font-medium">Andhra Pradesh — 192 MW</h3></div>
              <p className="mt-2 text-sm text-slate-600">Twin halls, Tier IV objectives, HyperOne™ telemetry, dark fiber IX links.</p>
            </div>
            <div className="rounded-3xl p-6 border shadow-sm" style={{borderColor:"rgba(11,18,32,0.15)", background:"linear-gradient(135deg, rgba(0,255,64,0.05), rgba(11,18,32,0.04))"}}>
              <div className="flex items-center gap-2"><Sun className="w-5 h-5"/><h3 className="font-medium">Kutch, Gujarat — 600 MW Solar</h3></div>
              <p className="mt-2 text-sm text-slate-600">Utility‑scale renewable energy, RECs, carbon‑aware scheduling.</p>
            </div>
            <div className="rounded-3xl p-6 border shadow-sm" style={{borderColor:"rgba(11,18,32,0.15)", background:"linear-gradient(135deg, rgba(0,255,64,0.05), rgba(11,18,32,0.04))"}}>
              <div className="flex items-center gap-2"><Cable className="w-5 h-5"/><h3 className="font-medium">Vizag — Cable Landing Station</h3></div>
              <p className="mt-2 text-sm text-slate-600">Upcoming subsea landing, diverse paths, low‑latency metro access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--ink)]">7‑Layer Security</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Perimeter & Vehicle","Guarded Entry","Building Access","Data Hall","Cage/Suite","Rack","Logical & SOC"].map((t)=> (
                <div key={t} className="rounded-2xl border bg-white p-4 flex gap-3 items-start" style={{borderColor:"rgba(11,18,32,0.15)"}}>
                  <Lock className="w-4 h-4 mt-1"/>
                  <div>
                    <div className="font-medium text-sm">{t}</div>
                    <div className="text-xs text-slate-600">Layered controls with auditing and monitoring.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[var(--ink)]">Compliance</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4" style={{borderColor:"rgba(11,18,32,0.15)"}}>
                <div className="flex items-center gap-2"><Layers className="w-5 h-5"/><div className="font-medium text-sm">Tier IV Design</div></div>
                <p className="mt-2 text-xs text-slate-600">Fault‑tolerant, concurrently maintainable.</p>
              </div>
              <div className="rounded-2xl border bg-white p-4" style={{borderColor:"rgba(11,18,32,0.15)"}}>
                <div className="flex items-center gap-2"><Shield className="w-5 h-5"/><div className="font-medium text-sm">SOC 2‑as‑a‑Service</div></div>
                <p className="mt-2 text-xs text-slate-600">Shared controls, continuous evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">Design your AI‑Ready Hall</h2>
        <p className="mt-4 text-slate-600 max-w-xl mx-auto">Send your cluster shape (GPU type, racks, density, network) and get a hall‑level reference design with power, cooling, and interconnect options.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg" variant="brand">Request Design</Button>
          <Button size="lg" variant="outline">Contact Sales</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t text-sm" style={{background:"linear-gradient(180deg, rgba(0,255,64,0.04) 0%, rgba(255,255,255,1) 100%)", borderColor:"rgba(2,6,23,0.06)"}}>
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-medium mb-2">Locations</h4>
            <ul className="space-y-1 text-slate-600">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Hyderabad</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Andhra Pradesh</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Vizag (CLS)</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kutch Solar</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Contact</h4>
            <ul className="space-y-1 text-slate-600">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91‑XXXXXXXXXX</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@hypernext.example</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Compliance</h4>
            <ul className="space-y-1 text-slate-600">
              <li>Tier IV Design</li>
              <li>SOC 2‑as‑a‑Service</li>
              <li>ISO 27001/27701 (roadmap)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Hypernext Data Center Limited. HyperOne™ is a trademark of Hypernext. All rights reserved.</div>
      </footer>
    </div>
  );
}
