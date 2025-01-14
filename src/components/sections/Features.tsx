import { Banknote, ArrowDownUp } from "lucide-react";
import { siteConfig } from "@/config/site";

const features = [
  {
    icon: Banknote,
    title: "Try a Side Hustle",
    description: "Put more money in your pocket with a side job.",
  },
  {
    icon: ArrowDownUp,
    title: "Set up direct deposit",
    description: "Get paid up to 2 days early.",
  },
];

export const Features = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center p-4 rounded-xl bg-ninja-gray-100 hover:bg-ninja-gray-200 transition-colors animate-fadeIn cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold text-ninja-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-ninja-gray-600">{feature.description}</p>
              </div>
              <feature.icon className="w-8 h-8 text-ninja-primary ml-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};