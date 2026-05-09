import Link from "next/link";

type NavLink = { name: string; href: string } | { name: string };

const links: NavLink[] = [
  { name: "New system quote", href: "/" },
  { name: "A/C Rejuvenation", href: "/about" },
  { name: "Repair & Tune-Up", href: "/contact" },
  { name: "Repair or Replace?", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <div className="bg-(--primary) border-b border-(--primary-light)">
      <nav className="h-16 text-white flex items-center justify-between px-4 container-wrapper font-(family-name:--font-barlow-condensed)">

        {/* logo  */}
        <div className="text-lg font-bold">Micah K Official</div>

        {/* nav links  */}
        <div className="space-x-4 uppercase">
          {links.map((link) =>
            "href" in link ? (
              <Link key={link.name} href={link.href} className="hover:text-gray-400">
                {link.name}
              </Link>
            ) : (
              <span key={link.name} className="text-gray-400">
                {link.name}
              </span>
            )
          )}
        </div>

        {/* schedule btn  */}
        <div className="flex items-center">
          <p className="mr-4 text-xl">(214) 252-7320</p>
          <button className="bg-(--secondary) hover:bg-(--secondary-light) text-white px-4 py-1.5 rounded cursor-pointer transition-colors duration-300">
            Schedule Service
          </button>
        </div>
      </nav>
    </div>
  );
}