import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ninja-gray-100">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;