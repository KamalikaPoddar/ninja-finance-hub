import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-16 bg-gradient-to-br from-white to-ninja-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-left space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-ninja-gray-900 leading-tight">
              {siteConfig.texts.hero.title}
            </h1>
            <p className="text-base md:text-lg text-ninja-gray-600">
              {siteConfig.texts.hero.subtitle}
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="w-full md:w-auto bg-ninja-primary hover:bg-ninja-primary/90 text-white rounded-full text-base"
              >
                {siteConfig.texts.hero.cta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};