import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-6">
          Ready to build something <span className="text-primary">exceptional?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Skip the lengthy forms. Get connected directly with a senior engineer and let's architect your solution today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg shadow-[0_0_20px_rgba(0,122,255,0.4)]">
            <a href="tel:+917670865257">
              <PhoneCall className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg">
            <Link href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20ready%20to%20build!" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
