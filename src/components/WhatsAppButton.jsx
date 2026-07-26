import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349164155880"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition z-50"
    >
      <FaWhatsapp />
    </a>
  );
}