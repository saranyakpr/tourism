
import React from "react";

export default function Footer() {

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About ", link: "/about" },
    { name: "Destination", link: "/destination" },
    { name: "TasteTrails", link: "/taste-trails" },
    { name: "Package", link: "/tour-packages" },
    { name: "PlanYourTrip", link: "/planyourtrip" },
     { name: "Contact", link: "/contact" },
     {name:"Reviews", link:"/reviews"}
  ];

  const topSpots = [
    "Courtallam Waterfalls",
    "Five Falls",
    "Old Courtallam",
    "Kasi Viswanathar Temple",
    "Gundar Dam",
    "Kutralam View Point"
  ];

  return (
    <footer className="bg-[#10291d] text-white px-6 md:px-16 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Navigation */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-[#e69b38]">
              Navigation
            </h2>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-300 text-sm hover:text-[#e69b38] transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Spots */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-[#e69b38]">
              Top Spots
            </h2>

            <ul className="space-y-4">
              {topSpots.map((spot) => (
                <li key={spot}>
                  <a
                    href="/destination"
                    className="text-gray-300 text-sm hover:text-[#e69b38] transition duration-300"
                  >
                    {spot}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-[#e69b38]">
              Contact Us
            </h2>

            <div className="space-y-5 text-gray-300 text-sm">

              <p>
                <span className="text-white font-semibold">Address:</span>
                <br />
                Tenkasi, Tamil Nadu, India
              </p>

              <p>
                <span className="text-white font-semibold">Phone:</span>
                <br />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-[#e69b38]">
                  +91 XXXXX XXXXX
                </a>
              </p>

              <p>
                <span className="text-white font-semibold">Email:</span>
                <br />
                <a href="mailto:info@tenkasitorism.com" className="hover:text-[#e69b38]">
                  info@tenkasitourism.com
                </a>
              </p>

            </div>


          
            

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tenkasi Trails. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
