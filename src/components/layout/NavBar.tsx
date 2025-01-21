import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { theme } from "@/config/theme";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar = ({ items }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = items.find(item => item.url === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.name);
    }
  }, [location.pathname, items]);

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-md"
      style={{ 
        backgroundColor: theme.colors.surface + 'CC',
        borderColor: theme.colors.background
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  activeTab === item.name
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  {activeTab === item.name && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/10"
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};