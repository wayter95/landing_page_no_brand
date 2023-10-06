"use client";

import Image from "next/image"
import Link from "next/link"
import { Link as Scroll } from "react-scroll";

const footerItems = [
  {
    id: 1,
    title: "SOCIAL",
    items: [
      {
        title: "Facebook",
        path: "https://facebook.com/",
      },
      {
        title: "Instagram",
        path: "https://instagram.com/",
      },
    ],
  },
  {
    id: 2,
    title: "DISCOVER",
    items: [
      {
        title: "Eat",
        path: "eat",
      },
      {
        title: "Drink",
        path: "drinks",
      },
      {
        title: "Functions",
        path: "book-functions",
      },
      {
        title: "Book a table",
        path: "contact",
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="w-full text-rsn-green-600 mt-12 md:mt-0">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-around max-w-[80%] mx-auto md:p-20">
        <div className="w-full">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/logo-footer.png"
              alt="rosana"
              width={210}
              height={72}
              className="pointer-events-none"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 mt-8 md:mt-0">
          <span className="text-lg">WHERE</span>
          <Link href="https://maps.app.goo.gl/bSK2ZFh92ec2WB3w9" target="_blank" className="text-lg mt-4">
            <p className="md:w-[60%]">Level 8,  Holiday Inn Werribee 22 Synnot St, Werribee VIC 3030</p>
          </Link>
        </div>

        <div className="w-full flex gap-20 md:justify-between mt-4 md:mt-0">
          {
            footerItems.map((item) => (
              <div key={item.id} className={`flex flex-col gap-4 ${item.id === 1 ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
                <span className="text-lg">{item.title}</span>
                <ul className="mt-4">
                  {
                    item.items.map((link) => (
                      <li key={link.title} >
                        {
                          item.title !== 'SOCIAL' ?
                            <Scroll to={link.path} smooth offset={-100}>
                              <button
                                type="button"
                                className="mb-4 md:mb-0 inline-block font-medium hover:opacity-90"
                              >
                                {link.title}
                              </button>
                            </Scroll> :
                            <Link href={link.path} target="_blank">
                              <button
                                type="button"
                                className="mb-4 md:mb-0 inline-block font-medium hover:opacity-90"
                              >
                                {link.title}
                              </button>
                            </Link>
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full text-center mb-8 mt-4 md:mt-0">
        <span className="p-8 md:p-0">All rights reserved © Rosana Bistro + Bar  |  Website by <Link href="https://www.talkagency.com.au/" target="_blank">TALK Agency</Link></span>
      </div>
    </footer>
  )
}

export { Footer }