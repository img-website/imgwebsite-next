import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneInputWrapper({ value, onChange, className = "", ...props }) {


  return (
    <PhoneInput
      {...props}
      preferredCountries={["in", "us"]}
      value={value}
      onChange={onChange}
      className={`w-full ${className}`}
      inputClassName="w-full bg-transparent h-9 px-3 py-2 border rounded-md text-sm focus-visible:outline-none focus-visible:ring-ring/50"
      countrySelectorStyleProps={{
        buttonClassName: "border-r border-input px-2 py-1 bg-transparent",
        dropdownStyleProps: {
          className: "bg-popover text-popover-foreground border rounded-md shadow-md max-h-60 overflow-y-auto",
          listItemClassName: "px-2 py-1.5 text-sm cursor-pointer hover:bg-accent flex gap-2 items-center",
          preferredListDividerClassName: "my-1 border-t"
        }
      }}
    />
  );
}
