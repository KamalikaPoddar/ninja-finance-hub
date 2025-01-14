import { Shield, UserCheck, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const features = [
  {
    icon: Shield,
    title: siteConfig.texts.features.vault.title,
    description: siteConfig.texts.features.vault.description,
  },
  {
    icon: UserCheck,
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-ninja-gray-100 transition-colors animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-ninja-primary mb-4" />
              <h3 className="text-xl font-semibold text-ninja-gray-900 mb-3">{feature.title}</h3>
              <p className="text-ninja-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};