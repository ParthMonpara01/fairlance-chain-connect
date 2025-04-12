
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  User, 
  FileText, 
  ShieldAlert, 
  ChevronLeft,
  Wallet,
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform md:translate-x-0 md:relative",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-fairlance-primary to-fairlance-secondary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">FairLance</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="md:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
              Main
            </div>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <Briefcase className="mr-3 h-5 w-5" />
              Find Jobs
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <User className="mr-3 h-5 w-5" />
              My Profile
            </NavLink>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
              Projects
            </div>
            <NavLink
              to="/create-project"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <FileText className="mr-3 h-5 w-5" />
              Create Project
            </NavLink>
            <NavLink
              to="/disputes"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <ShieldAlert className="mr-3 h-5 w-5" />
              Disputes
            </NavLink>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
              Account
            </div>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <Wallet className="mr-3 h-5 w-5" />
              Wallet
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-fairlance-accent text-fairlance-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </NavLink>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
