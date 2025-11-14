import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#071A2E] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-center mb-10">
          <img src="/logo.png" className="mx-auto w-40 opacity-90" />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center gap-10 text-sm mb-12 opacity-80">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">Career</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <Icon
              key={i}
              className="w-6 h-6 opacity-70 hover:opacity-100 transition cursor-pointer"
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-xs opacity-60">
          © 2025 Excel Creative Network. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;