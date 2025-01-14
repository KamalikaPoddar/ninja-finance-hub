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
        <div className="max-w-3xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center justify-between p-6 rounded-xl bg-ninja-gray-100 hover:bg-ninja-gray-200 transition-colors animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1 pr-6">
                <h3 className="text-lg font-semibold text-ninja-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-ninja-gray-600">{feature.description}</p>
              </div>
              <feature.icon className="w-10 h-10 text-ninja-primary flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};