import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-16 bg-gradient-to-br from-white to-ninja-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto text-left">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-ninja-gray-900">Ninja</h2>
            <Settings2 className="w-6 h-6 text-ninja-gray-600" />
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <img 
              src="/lovable-uploads/2ffb3ca5-54d5-4e18-99ce-53f4ce981b92.png" 
              alt="Ninja Card" 
              className="w-48 mx-auto mb-6"
            />
            <h1 className="text-2xl font-semibold text-ninja-gray-900 mb-2">
              Hi,
            </h1>
            <p className="text-sm text-ninja-gray-600 mb-4">
              Start building your financial future.
            </p>
            <Button
              size="lg"
              className="w-full bg-ninja-primary hover:bg-ninja-primary/90 text-white text-base"
            >
              {siteConfig.texts.hero.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};