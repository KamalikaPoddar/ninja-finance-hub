import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white to-ninja-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-ninja-gray-900 mb-6 animate-fadeIn">
            {siteConfig.texts.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-ninja-gray-600 mb-8 animate-fadeIn [animation-delay:200ms]">
            {siteConfig.texts.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-ninja-primary hover:bg-ninja-primary/90 text-white animate-fadeIn [animation-delay:400ms]"
          >
            {siteConfig.texts.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};