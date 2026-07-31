import Logo from "./Logo";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.66 2 11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 0 0-7.1 3.8A11.9 11.9 0 0 1 3.2 4.6a4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1a4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a11.9 11.9 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.6 1.5-1.3 2.1-2.1Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];

const SOCIALS = [FacebookIcon, TwitterIcon, InstagramIcon];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] px-6 pt-16 pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-muted">
            <span className="font-semibold text-navy">LaslesVPN</span> is a
            private virtual network that has unique features and has high
            security.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-sm transition-colors hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400">©2026 LaslesVPN</p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-bold text-navy">{col.title}</h3>
            <ul className="mt-5 space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
