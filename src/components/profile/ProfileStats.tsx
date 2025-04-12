
import { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description?: string;
}

const StatItem = ({ icon: Icon, title, value, description }: StatItemProps) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary">
      <Icon className="h-5 w-5" />
    </div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
      {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
    </div>
  </div>
);

interface ProfileStatsProps {
  stats: StatItemProps[];
}

const ProfileStats = ({ stats }: ProfileStatsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {stats.map((stat, index) => (
      <StatItem
        key={index}
        icon={stat.icon}
        title={stat.title}
        value={stat.value}
        description={stat.description}
      />
    ))}
  </div>
);

export default ProfileStats;
