import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-neutral-400 hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      <Icon size={22} />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 w-full border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <p className="text-xs text-neutral-400 tracking-widest uppercase">
            © {new Date().getFullYear()} Marci Metzger Homes
          </p>
          <p className="text-[10px] text-neutral-600 tracking-wide">
            All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-6">
          <SocialLink
            href="https://web.facebook.com/MarciHomes/?_rdc=1&_rdr#"
            icon={AiFillFacebook}
            label="Facebook"
          />
          <SocialLink
            href="https://www.instagram.com/marciandlauren_nvrealtors/"
            icon={AiFillInstagram}
            label="Instagram"
          />
          <SocialLink
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            icon={AiFillLinkedin}
            label="LinkedIn"
          />

          <Link
            href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
            target="_blank"
            className="relative w-5 h-5 opacity-60 hover:opacity-100 transition-opacity duration-300"
            aria-label="Yelp"
          >
            <Image
              src={"/yelp.png"}
              alt="Yelp"
              fill
              className="object-contain invert brightness-200"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
