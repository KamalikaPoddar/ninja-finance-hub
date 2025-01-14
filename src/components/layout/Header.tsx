import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-ninja-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="text-xl md:text-2xl font-bold text-ninja-primary">
            {siteConfig.header.brand}
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.header.menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-ninja-gray-700 hover:text-ninja-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-ninja-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {siteConfig.header.menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-ninja-gray-700 hover:text-ninja-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};