import React from "react";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";
import "../../styles.css"; // Ensure this CSS is added to your project

export const Footer = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button className="flex flex-col items-center text-gray-500 hover:text-violet-500 transition-colors">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-violet-500">
            <span className="material-symbols-outlined">lock</span>
            <span className="text-xs">Vault</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-violet-500 transition-colors">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="text-xs">Accounts</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-violet-500 transition-colors">
            <span className="material-symbols-outlined">family_restroom</span>
            <span className="text-xs">Family Tree</span>
          </button>
        </div>
      </div>
    </nav>
  );
};