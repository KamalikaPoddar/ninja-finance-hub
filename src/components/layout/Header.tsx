 import React from "react";
 import { useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { useAuth } from "@/hooks/useAuth";
 import { siteConfig } from "@/config/site";
 import { theme } from "@/config/theme";
 import "../../pages/style.css"; // Ensure this CSS is added to your project
 
 export const Header = () => {
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
     <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-violet-500 to-purple-600 z-50 border-b">
       <div className="container mx-auto px-4">
         <div className="flex justify-between items-center py-4">
           <span className="text-xl font-semibold text-white" onClick={handleLogoClick}>
             {siteConfig.header.brand}
           </span>
           <div className="flex items-center gap-4 text-white">
             <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">person</span>
             <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">notifications</span>
             <Button
               variant="ghost"
               size="icon"
               style={{ color: theme.colors.text.primary }}
             >
               <span className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">menu</span>
             </Button>
           </div>
         </div>
       </div>
     </nav>
   );
 };