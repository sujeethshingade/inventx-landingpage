// Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InfiniteScrollText from './InfiniteScroll';

const Footer = () => {
  return (<>
      <div className='border'>
        <div className="bg-white text-black p-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image src="images/logo/logo-light.svg" alt="Logo" width={200} height={100} className="mb-4" />
              <p>Domestico.pl - Twój sklep internetowy.</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Persona</h3>
              <ul>
                <li>
                  <Link href="/category/new-arrivals">
                    <span className="cursor-pointer hover:underline">Alumni</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/sale">
                    <span className="cursor-pointer hover:underline">Student</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/top-rated">
                    <span className="cursor-pointer hover:underline">Investor</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Resources</h3>
              <ul>
                <li>
                  <Link href="/about">
                    <span className="cursor-pointer hover:underline">O nas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="cursor-pointer hover:underline">Kontakt</span>
                  </Link>
                </li>
                <li>
                  <Link href="/policy">
                    <span className="cursor-pointer hover:underline">Polityka prywatności</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Company</h3>
              <ul>
                <li>
                  <Link href="/account/orders">
                    <span className="cursor-pointer hover:underline">Moje zamówienia</span>
                  </Link>
                </li>
                <li>
                  <Link href="/account/settings">
                    <span className="cursor-pointer hover:underline">Ustawienia konta</span>
                  </Link>
                </li>
                <li>
                  <Link href="/account/help">
                    <span className="cursor-pointer hover:underline">Pomoc</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700 mt-8">
            <p>&copy; {new Date().getFullYear()} Domestico.pl Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
      <div>
        <InfiniteScrollText/>
      </div>
    </>
  );
};

export default Footer;
