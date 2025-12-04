"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { cn } from "@/lib/utils";

export function LabeledInput({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium pl-1">
        {label}
      </label>
      <Input
        placeholder={placeholder}
        className="border-0 border-b border-neutral-200 rounded-none px-1 pl-0 h-10 bg-transparent focus-visible:ring-0 focus-visible:border-neutral-800 transition-colors placeholder:text-neutral-300 text-base"
      />
    </div>
  );
}

export function LabeledTextarea({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium pl-1">
        {label}
      </label>
      <Textarea
        placeholder={placeholder}
        className="border-0 border-b border-neutral-200 rounded-none px-1 pl-0 min-h-[100px] resize-none bg-transparent focus-visible:ring-0 focus-visible:border-neutral-800 transition-colors placeholder:text-neutral-300 text-base"
      />
    </div>
  );
}

export function LabeledSelect({
  label,
  placeholder,
  options,
  className,
}: {
  label: string;
  placeholder: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium pl-1">
        {label}
      </label>
      <Select>
        <SelectTrigger className="border-0 border-b border-neutral-200 rounded-none px-1 pl-0 h-10 bg-transparent focus:ring-0 focus:border-neutral-800 transition-colors text-base text-neutral-600 data-placeholder:text-neutral-300 shadow-none">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt.toLowerCase()}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default function DreamHouseSearchForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="w-full max-w-6xl px-4 h-fit relative z-10 shadow-2xl shadow-neutral-200/50"
    >
      <div className="bg-white shadow-2xl shadow-neutral-200/50 p-6 md:p-12 rounded-sm">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 border-b border-neutral-100 pb-6">
          <div className="w-full md:w-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-2 text-center md:text-left">
              Search Listings
            </h2>
            <p className="text-neutral-400 text-xs uppercase tracking-widest font-light text-center md:text-left">
              Find your perfect sanctuary
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 md:gap-y-12">
          <div className="md:col-span-6">
            <LabeledInput
              label="Location"
              placeholder="City, Neighborhood, or ZIP"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-6 md:grid-cols-2 md:gap-8">
            <LabeledSelect
              label="Type"
              placeholder="Property Type"
              options={["House", "Apartment", "Condo", "Land", "Commercial"]}
            />
            <LabeledSelect
              label="Sort By"
              placeholder="Default Order"
              options={[
                "Newest",
                "Price: Low to High",
                "Price: High to Low",
                "Featured",
              ]}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-6 md:grid-cols-2 md:gap-8">
            <LabeledSelect
              label="Bedrooms"
              placeholder="Any"
              options={["1+", "2+", "3+", "4+", "5+"]}
            />
            <LabeledSelect
              label="Baths"
              placeholder="Any"
              options={["1+", "2+", "3+", "4+"]}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-6 md:grid-cols-2 md:gap-8">
            <LabeledInput label="Min Price" placeholder="No Min" />
            <LabeledInput label="Max Price" placeholder="No Max" />
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <Button className="w-full md:w-auto h-14 px-12 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all hover:shadow-lg">
            Search Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
