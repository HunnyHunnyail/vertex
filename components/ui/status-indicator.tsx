import React from "react";
import { CheckCircle2, PlayCircle, Lock, Loader2 } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  className = "",
}) => {
  const config = {
    "in-progress": {
      icon: <Loader2 className="w-4 h-4 text-[#F97316] animate-spin" />,
      defaultLabel: "In Progress",
      textColor: "text-[#334155]",
    },
    completed: {
      icon: <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />,
      defaultLabel: "Completed",
      textColor: "text-[#334155]",
    },
    "now-playing": {
      icon: <PlayCircle className="w-4 h-4 text-[#F97316] fill-[#F97316] text-white" />,
      defaultLabel: "Now Playing",
      textColor: "text-[#F97316] font-medium",
    },
    locked: {
      icon: <Lock className="w-4 h-4 text-[#64748B]" />,
      defaultLabel: "Locked",
      textColor: "text-[#64748B]",
    },
  };

  const item = config[status];

  return (
    <div className={`inline-flex items-center gap-2 text-xs ${item.textColor} ${className}`}>
      {item.icon}
      <span>{label || item.defaultLabel}</span>
    </div>
  );
};
