import { Globe } from "lucide-react";

// Brand colors matching GW
const brandColors = {
  navy: "#0a2240",
  navyLight: "#1a3a5c",
  gold: "#c9a227",
  goldLight: "#d4b84a",
  cream: "#f5f1e8",
  warmWhite: "#faf9f7",
};

// Footer
export function Footer3() {
  return (
    <footer className="bg-white/90 dark:bg-black/50 border-t border-border text-muted-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)` }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Center for</p>
                <p className="text-sm font-medium" style={{ color: brandColors.gold }}>Global Mental Health</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              At the George Washington University, we're dedicated to advancing mental health equity worldwide through research, innovation, and community partnerships.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "facebook"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-gray-500 rounded" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: brandColors.gold }}>Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Projects", "Publications"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: brandColors.gold }}>Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Looking to collaborate?</p>
              <a href="mailto:info@gwglobalmentalhealth.com" className="hover:text-white transition-colors block">
                info@gwglobalmentalhealth.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 The George Washington University Center for Global Mental Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}