"use client";
import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

function DatePicker({ value, onChange, placeholder = "Pick a date", className }) {
  const selected = value ? new Date(value) : undefined;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full pl-3 justify-between font-normal",
            !selected && "text-muted-foreground",
            className
          )}
        >
          {selected ? format(selected, "PPP") : <span>{placeholder}</span>}
          <CalendarIcon className="size-3.5" />
          <span className="sr-only">Select date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => onChange(date ? format(date, "yyyy-MM-dd") : "")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
