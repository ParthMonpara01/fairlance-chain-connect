
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatsCardProps) => {
  return (
    <div className={cn("rounded-xl p-6 bg-white border border-gray-100 shadow-sm", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
          {trend && (
            <p className={cn("mt-2 text-xs font-medium flex items-center", 
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}>
              <span className="mr-1">
                {trend.isPositive ? "↑" : "↓"}
              </span>
              {trend.isPositive ? "+" : ""}{trend.value}%
              <span className="ml-1 text-gray-500">vs. last month</span>
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg bg-fairlance-accent text-fairlance-primary">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
