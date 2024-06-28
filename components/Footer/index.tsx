import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SharePost from '../Blog/SharePost';
import InfiniteScrollText from './InfiniteScroll';

const Footer = () => {
  return (
    <>
      <div className='border'>
        <div className="bg-white text-black p-10 sm:p-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <Image src="/images/logo/logo-light.svg" alt="Logo" width={200} height={100} className="mb-4 mx-auto" />
              <p>Where Innovation knows </p> <p>no Boundaries.</p>
              <div>
                <SharePost />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-8">Persona</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Alumni</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Student</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Investor</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Professor</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-8">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-8">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="cursor-pointer hover:text-primary">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div> 
          </div>
          <div className="flex justify-center items-center pt-4 sm:pt-8 border-t border-gray-200 mt-4 sm:mt-8">
            <p className="text-center">Copyright &copy; {new Date().getFullYear()} InventX. All Rights Reserved</p>
          </div>
        </div>
      </div>
      <div>
        <InfiniteScrollText />
      </div>
    </>
  );
};

export default Footer;
