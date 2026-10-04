"use client";
import { useState } from "react";
import { cn } from "./utils";

export interface AccordionItemData { title: string; content: React.ReactNode; }
interface Props { items: AccordionItemData[]; defaultOpen?: number | null; }

export function Accordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black/[0.015] sm:px-6">
                <span className="text-[15px] font-medium text-ink sm:text-base">{item.title}</span>
                <svg className={cn("h-4 w-4 flex-none text-muted transition-transform duration-300", isOpen && "rotate-180")}
                  viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className="overflow-hidden"><div className="px-5 pb-5 sm:px-6">{item.content}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
