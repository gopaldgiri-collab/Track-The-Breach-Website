import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQ_ITEMS } from "../../data/content";

export default function FAQ({ limit }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;
  return (
    <section data-testid="faq-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">FAQ</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Questions, answered.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Can&apos;t find what you need? <a href="/contact" data-testid="faq-contact-link" className="text-blue-600 underline-offset-4 hover:underline">Reach our team</a> — we respond within 4 business hours.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-2">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 data-[state=open]:border-blue-300 data-[state=open]:shadow-lg data-[state=open]:shadow-blue-100/50 transition-all"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-900 hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
