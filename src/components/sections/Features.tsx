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
<<<<<<< Updated upstream
            <div className="absolute w-[calc(340px*50)] flex flex-row items-center animate-infinite-scroll">
=======
            <div className="absolute w-[18000px] flex flex-row items-center animate-infinite-scroll">
>>>>>>> Stashed changes
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
src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 262 70% 75%;
    --primary-foreground: 210 40% 98%;
    --secondary: 262 70% 75%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 262 70% 75%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
  }
}

@keyframes infinite-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-340px * 25)); }
}

.animate-infinite-scroll {
  animation: infinite-scroll 90s linear infinite;
}
tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ... keep existing code (colors configuration)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-340px * 25))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        "infinite-scroll": "infinite-scroll 90s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;