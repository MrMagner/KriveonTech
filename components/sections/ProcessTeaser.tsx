"use client";

import { motion } from "framer-motion";
import { ListChecks, Code, BookOpenCheck, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  { id: 1, title: "Requirement Analysis", icon: <ListChecks className="w-5 h-5" /> },
  { id: 2, title: "Code Development", icon: <Code className="w-5 h-5" /> },
  { id: 3, title: "Knowledge Transfer", icon: <BookOpenCheck className="w-5 h-5" /> },
  { id: 4, title: "Delivery & Support", icon: <Rocket className="w-5 h-5" /> },
];

export function ProcessTeaser() {
  return (
    <section className="py-24 bg-card border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          The 8-Step Engineering Process
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-16">
          We follow a rigorous SDLC to ensure absolute precision, from initial wireframing to the final Knowledge Transfer session.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal Line connecting nodes */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary mb-4 shadow-[0_0_15px_rgba(0,122,255,0.2)]">
                  {step.icon}
                </div>
                <h4 className="text-foreground font-semibold mb-1">Phase {step.id}</h4>
                <p className="text-sm text-muted-foreground">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href="/process">
              View Detailed Timeline
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
