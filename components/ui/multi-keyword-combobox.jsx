"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function MultiKeywordCombobox({ value = [], onChange, placeholder = "Select keywords...", description = "Type a keyword and press enter to add it", label = "Keywords", name = "keywords" }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between flex-wrap min-h-[40px] h-auto !bg-transparent cursor-pointer",
              !value?.length && "text-muted-foreground"
            )}
          >
            {value?.length === 0 && placeholder}
            {value?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {value.map((keyword) => (
                  <Badge
                    variant="secondary"
                    key={keyword}
                    className="flex items-center cursor-auto"
                  >
                    {keyword}
                    <span
                      tabIndex={-1}
                      className="ml-1 rounded-full hover:bg-muted-foreground/20 transition-colors p-0.5 group cursor-pointer"
                      onClick={e => {
                        e.stopPropagation();
                        const newValue = value.filter((k) => k !== keyword);
                        onChange(newValue);
                      }}
                    >
                      <X className="h-3 w-3 group-hover:text-destructive" />
                    </span>
                  </Badge>
                ))}
              </div>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput
              value={inputValue}
              onValueChange={setInputValue}
              placeholder="Type keyword and press enter"
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const newKeyword = inputValue.trim();
                  if (newKeyword && !value.includes(newKeyword)) {
                    onChange([...value, newKeyword]);
                  }
                  setInputValue("");
                }
              }}
            />
            <CommandList>
              <CommandEmpty>
                <div className="px-4">Type a keyword and press enter to add</div>
              </CommandEmpty>
              {value?.length > 0 && (
                <CommandGroup heading="Current Keywords">
                  {value.map((keyword) => (
                    <CommandItem
                      key={keyword}
                      onSelect={() => {}}
                      className="flex items-center"
                    >
                      {keyword}
                      <span
                        tabIndex={-1}
                        className="ml-auto rounded-full hover:bg-muted-foreground/20 transition-colors p-0.5 group cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          const newValue = value.filter((k) => k !== keyword);
                          onChange(newValue);
                        }}
                      >
                        <X className="h-4 w-4 group-hover:text-destructive" />
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {description && <div className="text-xs text-muted-foreground mt-1">{description}</div>}
    </div>
  );
}
