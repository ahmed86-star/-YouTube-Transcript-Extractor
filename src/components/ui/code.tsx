import * as React from "react";
import { cn } from "@/lib/utils";

export interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {}

const Code = React.forwardRef<HTMLPreElement, CodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "rounded-md border border-slate-200 bg-slate-950 p-4 text-slate-50 dark:border-slate-800",
          className,
        )}
        {...props}
      />
    );
  },
);
Code.displayName = "Code";

export { Code };
