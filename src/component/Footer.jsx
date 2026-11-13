
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Compass,
  Navigation
} from "lucide-react";

export default function Footer() {

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Destination", link: "/destination" },
    { name: "Taste Trails", link: "/taste-trails" },
    { name: "Package", link: "/tour-packages" },
    { name: "Plan Your Trip", link: "/planyourtrip" },
    { name: "Contact", link: "/contact" },
    { name: "Reviews", link: "/reviews" }
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
    <footer className="relative bg-[#10291d] text-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-14 pb-8">

        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Compass size={28} className="text-green-800" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  TourISM
                </h2>
                <p className="text-xs text-green-300 tracking-wider">
                  EXPLORE TENKASI
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-7">
              Discover the beauty of Tenkasi. Explore breathtaking
              waterfalls, peaceful landscapes and unforgettable
              travel experiences.
            </p>

            <div className="flex items-center gap-2 mt-5 text-orange-400 text-sm font-semibold">
             
              Tenkasi, Tamil Nadu
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-bold mb-6 text-[#e69b38]">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="group flex items-center justify-between text-gray-300 text-sm hover:text-orange-400 transition duration-300"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Spots */}
          <div>
            <h2 className="text-lg font-bold mb-6 text-[#e69b38]">
              Popular Destinations
            </h2>

            <ul className="space-y-4">
              {topSpots.map((spot) => (
                <li key={spot}>
                  <Link
                    to="/destination"
                    className="flex items-start gap-2 text-gray-300 text-sm hover:text-orange-400 transition duration-300"
                  >
                    <Navigation
                      size={15}
                      className="text-green-400 mt-0.5 shrink-0"
                    />
                    <span>{spot}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-bold mb-6 text-[#e69b38]">
              Contact Us
            </h2>

            <div className="space-y-5 text-gray-300 text-sm">

              <div className="flex items-start gap-3">
                <MapPin size={19} className="text-green-400 shrink-0 mt-1" />
                <p className="leading-6">
                  Tenkasi,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={19} className="text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="hover:text-orange-400 transition"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={19} className="text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a
                    href="mailto:info@tenkasitourism.com"
                    className="break-all hover:text-orange-400 transition"
                  >
                    info@tenkasitourism.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/15 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Tenkasi Trails. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
            Made with <span className="text-red-400">♥</span> for Tenkasi Tourism
          </p>

        </div>

      </div>
    </footer>
  );
}
