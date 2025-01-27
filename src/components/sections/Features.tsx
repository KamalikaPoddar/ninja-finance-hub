import { Shield, CheckCircle, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const features = [
  {
    icon: Shield,
    title: siteConfig.texts.features.vault.title,
    description: siteConfig.texts.features.vault.description,
  },
  {
    icon: CheckCircle,
    title: siteConfig.texts.features.nomination.title,
    description: siteConfig.texts.features.nomination.description,
  },
  {
    icon: Search,
    title: siteConfig.texts.features.claims.title,
    description: siteConfig.texts.features.claims.description,
  },
];

export const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full bg-white py-8 rounded-lg">
          <section className="relative w-full h-[300px] overflow-hidden">
            <div className="absolute w-[calc(340px*50)] flex flex-row items-center animate-infinite-scroll">
              {Array.from({ length: 30 }, (_, index) => {
                const feature = features[index % features.length];
                return (
                  <div
                    key={index}
                    className="w-[340px] h-[300px] p-6 mx-2 flex flex-col items-center justify-center space-y-4 bg-ninja-gray-100 rounded-xl hover:bg-ninja-gray-200 transition-colors"
                  >
                    <feature.icon className="w-12 h-12 text-ninja-primary" />
                    <h3 className="text-lg font-semibold text-ninja-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-ninja-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};