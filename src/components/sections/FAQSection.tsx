import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
   {
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
   {
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#fdfbf7] border-y border-zinc-100">
      <div className="mx-auto max-w-4xl px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-headline uppercase tracking-tighter text-[#c1a05f]">
            PREGUNTAS FRECUENTES
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <Collapsible
                key={i}
                open={isOpen}
                onOpenChange={() =>
                  setOpenIndex(isOpen ? null : i)
                }
                className="border-b border-zinc-200"
              >
                {/* Trigger */}
                <CollapsibleTrigger className="flex w-full items-center justify-between py-6 text-left group">
                  <span className="text-lg font-headline uppercase tracking-widest">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <CollapsibleContent asChild>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-zinc-600 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
}