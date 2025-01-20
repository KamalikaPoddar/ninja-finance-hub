import { useState } from "react";
import { Menu, X, Bell, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate('/vault');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b"
      style={{ 
        backgroundColor: theme.colors.surface + 'CC',
        borderColor: theme.colors.background
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href={isAuthenticated ? '/vault' : '/'}
            className="text-xl md:text-2xl font-bold cursor-pointer"
            style={{ color: theme.colors.primary }}
            onClick={(e) => {
              e.preventDefault();
              handleLogoClick();
            }}
          >
            {siteConfig.header.brand}
          </a>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              style={{ color: theme.colors.text.primary }}
            >
              <UserRound className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              style={{ color: theme.colors.text.primary }}
            >
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  style={{ color: theme.colors.text.primary }}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-48"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <DropdownMenuItem
                  style={{ color: theme.colors.text.primary }}
                >
                  About
                </DropdownMenuItem>
                <DropdownMenuItem
                  style={{ color: theme.colors.text.primary }}
                >
                  FAQ
                </DropdownMenuItem>
                <DropdownMenuItem
                  style={{ color: theme.colors.text.primary }}
                >
                  Contact
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleLogout}
                  style={{ color: theme.colors.error }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};