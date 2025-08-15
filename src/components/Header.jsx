import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#FFD100] flex items-center justify-between px-6 py-4">
      <button className="text-gray-800">
        <Menu size={28} />
      </button>
      <img
        src="https://yt3.googleusercontent.com/ytc/AIdro_lABDL1T80crmzs6j6f_W72qzhDXXQhcO9Qk_WzBagcHQ=s900-c-k-c0x00ffffff-no-rj"
        alt="Ipiranga"
        className="h-10"
      />
      <div className="w-8" />
    </header>
  );
}
