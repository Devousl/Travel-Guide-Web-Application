import { SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* Added more columns for information */}
            <div className="flex flex-col gap-5">
              <FooterColumn title="Explore Sri Lanka">
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  <Link href="/places-to-visit">Places to Visit</Link>
                  <Link href="/best-time-to-visit">Best Time to Visit</Link>
                  <Link href="/travel-tips">Travel Tips</Link>
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title="Contact Us">
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  <li>
                    <p className="medium-14 text-blue-70">Email: contact@travel-srilanka.com</p>
                  </li>
                  <li>
                    <p className="medium-14 text-blue-70">Phone: +94 11 2345678</p>
                  </li>
                  <li>
                    <p className="medium-14 text-blue-70">Address: Colombo, Sri Lanka</p>
                  </li>
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title="Useful Links">
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  <Link href="/blog">Blog</Link>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title="Follow Us">
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="social logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            {/* Added a new column with a short description */}
            <div className="flex flex-col gap-5">
              <FooterColumn title="About Us">
                <p className="regular-14 text-gray-30">
                  Discover Sri Lanka's top attractions, best travel spots, tips, and much more. Let us guide you through the beauty of the island.
                </p>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2023 Sri Lanka Travel Guide | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
