"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap } from "lucide-react";
import Link from "next/link";

import { TiltCard } from "@/components/shared/TiltCard";

const services = [
  {
    title: "Software Engineering",
    description: "Production-grade web apps, mobile apps, and scalable AI/ML pipelines.",
    icon: <Code2 className="w-8 h-8 text-foreground" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Embedded & IoT",
    description: "Hardware integration, ESP32/Raspberry Pi prototyping, and custom PCB firmware.",
    icon: <Cpu className="w-8 h-8 text-foreground" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Academic Solutions",
    description: "Complex IEEE paper implementations with rigorous documentation and Knowledge Transfer.",
    icon: <GraduationCap className="w-8 h-8 text-foreground" />,
    colSpan: "md:col-span-3",
  },
];

export function ServicesBento() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Engineering Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From pure software systems to integrated hardware-software architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${service.colSpan}`}
            >
              <TiltCard className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-t-white/20 transition-all">
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                  <div className="mb-6 inline-block shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full p-2">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8" style={{ transform: "translateZ(20px)" }}>
                  <Link href="/services" className="text-primary hover:text-accent font-medium text-sm inline-flex items-center transition-colors">
                    Explore Capabilities &rarr;
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
