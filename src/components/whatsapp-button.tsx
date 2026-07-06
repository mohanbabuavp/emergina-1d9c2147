import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918344647098?text=Hi%20Emergina%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Emergina on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-105 transition"
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}