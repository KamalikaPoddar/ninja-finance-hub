import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-ninja-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-ninja-gray-600">{siteConfig.texts.footer.copyright}</p>
          <nav className="flex space-x-6">
            <a href="#" className="text-ninja-gray-600 hover:text-ninja-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-ninja-gray-600 hover:text-ninja-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-ninja-gray-600 hover:text-ninja-primary transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};