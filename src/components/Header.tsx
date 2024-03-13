import React from 'react';

interface Hostname {
  name: string;
  description: string;
  subdomain: string;
  customDomain?: string;
}

interface HeaderProps {
  hostnames: Hostname[];
}

const Header: React.FC<HeaderProps> = ({ hostnames }) => {
  return (
    <header className="bg-white py-4">
      <div className="px-4  mx-auto flex items-center justify-between shadow-lg">
        <div className="logo">
          <img src="/logo.webp" alt="Logo" className="w-[128px] h-[58px] pb-2" />
        </div>
        <nav>
          <ul className="flex space-x-8">
            {hostnames.map((hostname) => (
              <li key={hostname.subdomain}>
                <a
                  href={`http://${hostname.customDomain ?? hostname.subdomain}.localhost:3000/`}
                  className="text-gray-700 font-bold hover:text-black"
                >
                  {hostname.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
