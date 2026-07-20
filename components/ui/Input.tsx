import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-muted font-body">{label}</label>
      <input
        className={cn(
          "bg-card border border-border px-4 py-3 text-foreground text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-muted font-body">{label}</label>
      <textarea
        className={cn(
          "bg-card border border-border px-4 py-3 text-foreground text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none",
          className
        )}
        rows={5}
        {...props}
      />
    </div>
  );
}
