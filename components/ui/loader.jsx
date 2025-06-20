import { Loader2Icon } from "lucide-react";

export default function Loader({ className, ...props }) {
  return <Loader2Icon className={"animate-spin " + (className || "") } {...props} />;
}
