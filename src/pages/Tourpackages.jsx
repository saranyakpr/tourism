import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

const commonTravelDetails = {
  pickupPoints: [
    "Tenkasi",
    "Sengottai",
    "Tirunelveli",
    "Madurai Airport",
    "Tuticorin Airport"
  ]
};

const pickupPointImages = [
  {
    id: "tenkasi",
    name: "Tenkasi Railway Station",
    location: "Tenkasi Junction, Tamil Nadu",
    image: "/station.jpg"
  },
  {
    id: "sengottai",
    name: "Sengottai Railway Station",
    location: "Sengottai, Tamil Nadu",
    image: "/sengottai.jpg"
  },
  {
    id: "tirunelveli",
    name: "Tirunelveli Railway Station",
    location: "Tirunelveli, Tamil Nadu",
    image: "/thiru.jpg"
  },{
    id: "tuticorin",
    name: "Tuticorin Airport",
    location: "Thoothukudi, Tamil Nadu",
    image: "/thuthukudi.jpg"
  },
  {
    id: "madurai",
    name: "Madurai Bus Stand",
    location: "Madurai, Tamil Nadu",
    image: "/bus2.jpg"
  },
   {
    id: "tenkasi-bus",
    name: "Tenkasi Bus Stand",
    location: "Tenkasi, Tamil Nadu",
    image: "/bus3.png"
  }, {
    id: "thirunelveli-bus",
    name: "Thirunelveli Bus Stand",
    location: "Thirunelveli, Tamil Nadu",
    image: "/bus1.jpg"
  },
 
];
const packages = [
  {
    id: 1,
    name: "Courtallam Waterfall Escape",
    ...commonTravelDetails,
    category: "Waterfalls",
    tag: "BEST SELLER",
    duration: "1 Day",
    price: 1299,
    location: "Courtallam",
    
    image: "/newfall.jpg",
    gallery: [
    "fall2.jpg",
    "fivefalls.jpg",
    "newfall.jpg"
  ],
    description:
      "Enjoy a refreshing Courtallam trip with pickup, hotel fresh-up, breakfast and visits to the region's famous waterfalls.",
    highlights: [
      "Main Falls",
      "Five Falls",
      "Old Courtallam",
      "Local Markets",
    ],
    itinerary: [
      ["06:30 AM", "Pickup from the selected pickup point"],
      ["07:15 AM", "Reach the hotel and fresh-up"],
      ["08:00 AM", "Breakfast provided at the hotel"],
      ["09:00 AM", "Proceed to Courtallam Main Falls"],
      ["11:00 AM", "Visit Five Falls and enjoy the surroundings"],
      ["01:00 PM", "Lunch break (traveller's own expense)"],
      ["02:30 PM", "Visit Old Courtallam Falls, subject to access"],
      ["04:30 PM", "Visit Local Markets And Shopping Areas"],
      ["7:00 PM", "Return journey and drop-off"]
    ]
  },

  {
    id: 2,
    name: "Western Ghats Adventure",
    ...commonTravelDetails,
    category: "Nature",
    tag: "NATURE LOVER",
    duration: "2 Days",
    price: 3499,
    location: "Shenkottai",
  
    image: "/ghats2.jpg",
   gallery: [
    "hid1.jpg",
    "ghats2.jpg",
    "ghats1.png"
  ],
    description:
      "Experience the beauty of the Western Ghats with hotel fresh-up, breakfast, scenic drives and peaceful nature destinations.",
    highlights: [
     
      "Mountain Views",
      "Gundar Dam",
      "Adavinainar Dam",
      "Thrill Park"
    ],
    itinerary: [
      ["DAY 1 · 06:30 AM", "Pickup from the selected pickup point"],
      ["DAY 1 · 07:15 AM", "Hotel arrival and fresh-up"],
      ["DAY 1 · 08:00 AM", "Breakfast provided at the hotel"],
      ["DAY 1 · 09:00 AM", "Start the Western Ghats sightseeing trip"],
      ["DAY 1 · 11:00 AM", "Explore Gundar Dam surroundings"],
      ["DAY 1 · 01:00 PM", "Lunch break (traveller's own expense)"],
      ["DAY 1 · 03:00 PM", "Enjoy mountain views and photography"],
      ["DAY 1 . 05:00 PM", "Shopping At South Massi Street"],
      ["DAY 1 . 08:00 PM", "Return To The Hotel"],
      ["DAY 2 · 08:00 AM", "Breakfast at the hotel"],
      ["DAY 2 · 09:00 AM", "Visit Adavinainar Dam surroundings"],
      ["DAY 2 · 12:30 PM", "Explore scenic viewpoints"],
      ["DAY 2 · 01:30 PM", "Lunch break (traveller's own expense)"],
      ["DAY2 . 03:00 PM", "Go To Thrill Park"],
      ["DAY 2 · 06:00 PM", "Return journey and drop-off"]
    ]
  },

  {
    id: 3,
    name: "Sacred Temple Trail",
    ...commonTravelDetails,
    category: "Temples",
    tag: "CULTURAL PICK",
    duration: "1 Day",
    price: 1599,
    location: "Tenkasi",
  
    image: "/newtemp1.jpg",
    gallery: [
    "newtemp.jpg",
    "newtemp1.jpg",
    "newtemp2.avif"
  ],
    description:
      "Discover Tenkasi's spiritual heritage with convenient pickup, hotel fresh-up, breakfast and visits to famous temples.",
    highlights: [
     
      "Kasi Viswanathar Temple",
      "Kuttralanathar Temple",
      "Temple Heritage",
      "Chitra Sabha Area"

    ],
    itinerary: [
      ["06:30 AM", "Pickup from the selected pickup point"],
      ["07:15 AM", "Reach the hotel and fresh-up"],
      ["08:00 AM", "Breakfast provided at the hotel"],
      ["09:00 AM", "Visit Kasi Viswanathar Temple"],
      ["11:00 AM", "Explore nearby heritage streets"],
      ["01:00 PM", "Lunch break (traveller's own expense)"],
      ["02:00 PM", "Visit Kuttralanathar Temple"],
      ["03:30 PM", "Explore Chitra Sabha area, subject to visiting hours"],
      ["07:00 PM", "Return journey and drop-off"]
    ]
  },

  {
    id: 4,
    name: "Hidden Gems Discovery",
    ...commonTravelDetails,
    category: "Hidden Gems",
    tag: "OFFBEAT ESCAPE",
    duration: "1 Day",
    price: 1899,
    location: "Gundar",
  
    image: "/photo4.avif",
    gallery: [
    "newdam.avif",
    "newdam1.avif",
    "newdam2.jpg"
  ],
    description:
      "Explore peaceful reservoirs and hidden natural surroundings with pickup, hotel fresh-up and breakfast.",
    highlights: [
     
      "Gundar Reservoir",
      "Adavinainar Dam",
      "Scenic Photography",
      "Scenic Photo Spot"
    ],
    itinerary: [
      ["06:30 AM", "Pickup from the selected pickup point"],
      ["07:15 AM", "Hotel arrival and fresh-up"],
      ["08:00 AM", "Breakfast provided at the hotel"],
      ["09:00 AM", "Start towards Gundar"],
      ["10:00 AM", "Explore Gundar Reservoir surroundings"],
      ["12:00 PM", "Enjoy scenic photo spots"],
      ["01:00 PM", "Lunch break (traveller's own expense)"],
      ["02:30 PM", "Visit Adavinainar Dam surroundings"],
      ["04:30 PM", "Relax and enjoy the natural scenery"],
      ["06:30 PM", "Return journey and drop-off"]
    ]
  },

  {
    id: 5,
    name: "Tenkasi Family Holiday",
    ...commonTravelDetails,
    category: "Family",
    tag: "FAMILY SPECIAL",
    duration: "2 Days",
    price: 4299,
    location: "Tenkasi District",
  
    image: "/fam2.jpg",
    gallery: [
    "thril.jpg",
    "fivefalls.jpg",
    "newdam2.jpg"
  ],
    description:
      "Enjoy a comfortable family getaway with hotel fresh-up, breakfast, temple visits and relaxing nature experiences.",
    highlights: [
     
      "Family Sightseeing",
      "Temple Visit",
      "Nature Experiences",
      "Thrill Park"
    ],
    itinerary: [
      ["DAY 1 · 06:30 AM", "Pickup from the selected pickup point"],
      ["DAY 1 · 07:15 AM", "Hotel arrival and fresh-up"],
      ["DAY 1 · 08:00 AM", "Breakfast provided at the hotel"],
      ["DAY 1 · 09:00 AM", "Visit Kasi Viswanathar Temple"],
      ["DAY 1 · 11:00 AM", "Explore Tenkasi town"],
      ["DAY 1 · 01:00 PM", "Lunch break (traveller's own expense)"],
      ["DAY 1 · 03:00 PM", "Enjoy a relaxing scenic drive"],
      ["DAY 1 . 05:00 PM", "Shopping At South Massi Street"],
      ["DAY 1 . 08:00 PM", "Return To The Hotel"],
      ["DAY 2 · 08:00 AM", "Breakfast at the hotel"],
      ["DAY 2 · 09:00 AM", "Family visit to Courtallam Main Falls"],
      ["DAY 2 · 12:00 PM", "Explore nearby attractions"],
      ["DAY 2 · 01:00 PM", "Lunch break (traveller's own expense)"],
       ["DAY2 . 03:00 PM", "Go To Thrill Park"],
       ["DAY2 . 05:30 PM", "Explore Near By Shopping Street"],
      ["DAY 2 · 06:30 PM", "Return journey and drop-off"]
    ]
  },

  {
    id: 6,
    name: "The Grand Tenkasi Circuit",
    ...commonTravelDetails,
    category: "All-in-One",
    tag: "ULTIMATE EXPERIENCE",
    duration: "3 Days",
    price: 6499,
    location: "Tenkasi District",
    
    image: "/grand1.jpg",
    gallery: [
    "fun1.jpg",
    "newtemp1.jpg",
    "newfall5.jpg"
  ],
    description:
      "Experience the best of Tenkasi in three days with hotel fresh-up, breakfast, temple heritage, waterfalls and beautiful nature destinations.",
    highlights: [
      
      "Courtallam Waterfalls",
      "Temple Heritage",
      "Dam Views",
      "Nature Experiences"
    ],
    itinerary: [
      ["DAY 1 · 06:30 AM", "Pickup from the selected pickup point"],
      ["DAY 1 · 07:15 AM", "Hotel arrival and fresh-up"],
      ["DAY 1 · 08:00 AM", "Breakfast provided at the hotel"],
      ["DAY 1 · 09:00 AM", "Visit Kasi Viswanathar Temple"],
      ["DAY 1 · 11:00 AM", "Explore Tenkasi town and heritage attractions"],
      ["DAY 1 · 01:00 PM", "Lunch break (traveller's own expense)"],
      ["DAY 1 · 03:00 PM", "Enjoy nearby scenic surroundings"],
      ["DAY 1 .05:00 PM","Explore Games In Hyber Market"],
      ["DAY 1 . 08:00 PM", "Return To The Hotel"],
      ["DAY 2 · 08:00 AM", "Breakfast at the hotel"],
      ["DAY 2 · 09:00 AM", "Visit Courtallam Main Falls"],
      ["DAY 2 · 11:00 AM", "Explore Five Falls"],
      ["DAY 2 · 01:00 PM", "Lunch break (traveller's own expense)"],
      ["DAY 2 · 03:00 PM", "Visit Old Courtallam, subject to access"],
      ["DAY 2 . 04:30 PM", "Explore Tiger Falls"],
      ["DAY 2 . 06:00 PM","Explore Shopping Area's Near By Main Falls"],
      ["DAY 2 . 08:00 PM", "Return To The Hotel"],
      ["DAY 3 · 08:00 AM", "Breakfast at the hotel"],
      ["DAY 3 · 09:00 AM", "Explore Gundar Dam surroundings"],
      ["DAY 3 · 12:00 PM", "Visit Adavinainar Dam surroundings"],
      ["DAY 3 · 01:30 PM", "Lunch break (traveller's own expense)"],
      ["DAY 3 . 03:00 PM ","Explore Mekkarai Surroundings "],
      ["DAY 3 · 06:00 PM", "Return journey and drop-off"]
    ]
  }
];

const categories = [
  "All Packages",
  "Waterfalls",
  "Nature",
  "Temples",
  "Hidden Gems",
  "Family",
  "All-in-One"
];

const money = (price) => "₹" + price.toLocaleString("en-IN");

export default function Tourpackages() {
  const [category, setCategory] = useState("All Packages");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState([]);

  // Prevent background scrolling when package modal is open
 
// Prevent background scrolling when package modal is open
useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [selected]);

  const filteredPackages = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return packages.filter((item) => {
      const categoryMatch =
        category === "All Packages" || item.category === category;

      const searchMatch =
        !keyword ||
        `${item.name} ${item.location} ${item.category} ${item.description}`
          .toLowerCase()
          .includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const toggleSaved = (id) => {
    setSaved((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main className="tp-page overflow-hidden bg-[#f7f8f1] text-[#1d3b2b]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');

        .tp-page {
          font-family: 'DM Sans', sans-serif;
        }

        .tp-heading {
          font-family: 'Playfair Display', serif;
        }

        .tp-hero {
  min-height: 500px;
  height: 400;
  padding-top: 40px;
}

        .tp-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tp-animate {
          animation: tpAppear .8s ease both;
        }

        .tp-delay-1 { animation-delay: .15s; }
        .tp-delay-2 { animation-delay: .3s; }
        .tp-delay-3 { animation-delay: .45s; }

        .tp-float {
          animation: tpFloat 5s ease-in-out infinite;
        }

        .tp-card-image {
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .tp-card:hover .tp-card-image {
          transform: scale(1.09);
        }

        .tp-card {
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .tp-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 25px 55px rgba(26,65,42,.14);
        }

        .tp-button {
          transition: all .3s ease;
        }

        .tp-button:hover {
          transform: translateY(-3px);
        }

        .tp-marquee {
          animation: tpMarquee 28s linear infinite;
        }

        .tp-modal {
          animation: tpModal .3s ease both;
        }

        @keyframes tpAppear {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes tpFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes tpMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes tpModal {
          from { opacity: 0; transform: translateY(20px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
/* DESTINATION GALLERY FLOATING ANIMATION */

.tp-gallery-image {
  cursor: pointer;
  animation: galleryFloat 3s ease-in-out infinite;
  transition: box-shadow 0.4s ease;
}

.tp-gallery-float-2 {
  animation-delay: 0.5s;
}

.tp-gallery-float-3 {
  animation-delay: 1s;
}

.tp-gallery-image:hover {
  box-shadow: 0 18px 30px rgba(33, 75, 52, 0.2);
}

@keyframes galleryFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
        @media (prefers-reduced-motion: reduce) {
          .tp-page *, .tp-page *::before, .tp-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="tp-hero relative isolate flex items-center bg-[#123b29] text-white">

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092619]/95 via-[#123b29]/75 to-[#123b29]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102c20]/60 to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:px-12">

          <div className="tp-animate">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[.2em] backdrop-blur-lg">
              <span className="h-2 w-2 rounded-full bg-[#cce8a7]" />
              Explore Tenkasi · Tamil Nadu
            </span>

            <h1 className="tp-heading mt-8 text-5xl font-bold leading-[1.12] sm:text-6xl lg:text-7xl">
              Your journey.
              <br />
              Your <span className="italic text-[#cce8a7]">kind of</span>
              <br />
              wonder.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              From magical waterfalls to peaceful mountain escapes,
              discover the beauty, culture and hidden stories of Tenkasi.
              Your next unforgettable journey starts here.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/tour-packages"
                className="tp-button rounded-full bg-[#d5edb7] px-8 py-4 text-sm font-extrabold text-[#183b29] shadow-xl"
              >
                Explore packages ↗
              </a>

              
            </div>

            <div className="mt-12 flex flex-wrap gap-9 border-t border-white/20 pt-7">
              <div>
                <p className="text-2xl font-extrabold">06+</p>
                <p className="mt-1 text-xs text-white/60">Curated trips</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">03</p>
                <p className="mt-1 text-xs text-white/60">Travel moods</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold">01</p>
                <p className="mt-1 text-xs text-white/60">Beautiful district</p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-[470px] lg:block">
            <div className="tp-float absolute right-8 top-3 h-[410px] w-[300px] overflow-hidden rounded-[160px] border-[7px] border-white/20 shadow-2xl">
              <img
                src="photo4.avif"
                alt="Green mountain landscape"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="tp-float absolute bottom-0 left-0 w-60 rounded-3xl border border-white/30 bg-white/15 p-3 shadow-2xl backdrop-blur-xl" style={{ animationDelay: "1s" }}>
              <img
                src="ottakal.jpg"
                alt="Waterfall"
                className="h-32 w-full rounded-2xl object-cover"
              />
              <p className="tp-heading px-2 py-3 text-2xl">
                Find your escape.
              </p>
            </div>

            <div className="absolute right-0 top-0 rounded-full bg-[#d5edb7] px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-[#183b29]">
              Take the scenic route
            </div>
          </div>

        </div>

        <a href="#tp-intro" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-[.3em] text-white/70">
          Scroll to discover
          <span className="mt-2 block text-xl">↓</span>
        </a>
      </section>

      {/* MOVING TEXT */}

      <div className="overflow-hidden border-b border-[#dce7d5] bg-[#eaf1e3] py-5">
        <div className="tp-marquee flex w-max gap-10 whitespace-nowrap text-xs font-extrabold uppercase tracking-[.25em] text-[#59765c]">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {["Waterfall Adventures", "Mountain Escapes", "Temple Stories", "Hidden Gems", "Beautiful Memories"].map((word) => (
                <span key={word + i}>
                  {word} <span className="mx-5 text-[#a0b98a]">✳</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* INTRODUCTION */}

      <section id="tp-intro" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-end lg:px-12">

        <div className="tp-animate">
          <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
            More than just a destination
          </p>

          <h2 className="tp-heading mt-5 text-4xl leading-tight text-[#1d422e] sm:text-5xl">
            Tenkasi is a place
            <span className="block italic text-[#829b70]">to feel alive.</span>
          </h2>
        </div>

        <div className="tp-animate tp-delay-2">
          <p className="text-base leading-8 text-[#718174]">
            Let the Western Ghats set your pace. Wake up to fresh mountain
            air, explore beautiful waterfalls and discover the timeless
            heritage of Tenkasi. Choose a journey that matches your mood.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["Thoughtful routes", "Nature experiences", "Flexible trips"].map((item) => (
              <span key={item} className="rounded-full border border-[#d8e4d1] bg-white px-4 py-3 text-xs font-bold text-[#567257]">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="tp-animate grid overflow-hidden rounded-[2rem] bg-[#173d2b] lg:grid-cols-2">

          <div className="min-h-[330px] overflow-hidden">
            <img
              src="lake.jpg"
              alt="Sunlight in a green forest"
              className="h-full min-h-[330px] w-full object-cover transition duration-1000 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#cce8a7]">
              The Tenkasi experience
            </p>

            <h2 className="tp-heading mt-5 text-4xl leading-tight sm:text-5xl">
              Slow down.
              <br />
              Look around.
              <br />
              <span className="italic text-[#cce8a7]">Feel everything.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/70">
              Every road has a story. Every destination has something
              special waiting for you.
            </p>

            <a href="#tp-packages" className="mt-8 w-fit border-b border-[#cce8a7] pb-2 text-sm font-bold text-[#d5edb7]">
              Discover your journey →
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGE COLLECTION */}

      <section id="tp-packages" className="scroll-mt-20 bg-[#edf3e8] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="tp-animate flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
                Made for your next adventure
              </p>

              <h2 className="tp-heading mt-4 text-4xl text-[#1d422e] sm:text-5xl">
                Choose your
                <span className="italic text-[#829b70]"> journey.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#718174]">
                Find your perfect escape from our handpicked travel experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8e4d1] bg-white px-6 py-4 text-sm text-[#718174]">
              <span className="text-xl font-extrabold text-[#214b34]">
                {filteredPackages.length}
              </span>{" "}
              experiences available
            </div>
          </div>

          {/* SEARCH */}

          <div className="tp-animate mt-10 flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-5 py-3 text-xs font-bold transition ${
                      category === item
                        ? "bg-[#214b34] text-white shadow-lg"
                        : "border border-[#d7e3d1] bg-white text-[#627765] hover:border-[#78946b] hover:text-[#214b34]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#d7e3d1] bg-white px-5 py-3.5 lg:w-72">
                <span className="text-xl text-[#829b70]">⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full bg-transparent text-sm text-[#214b34] outline-none placeholder:text-[#9aa99b]"
                />
                {search && (
                  <button onClick={() => setSearch("")} type="button" className="text-xs font-bold text-[#78946b]">
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PACKAGE CARDS */}

          {filteredPackages.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

              {filteredPackages.map((item, index) => (
                <article
                  key={item.id}
                  className="tp-card overflow-hidden rounded-[1.7rem] border border-[#dce6d7] bg-white shadow-[0_12px_40px_rgba(33,75,52,.06)]"
                  style={{ animation: `tpAppear .7s ease ${index * 100}ms both` }}
                >
                  <div className="group relative h-64 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="tp-card-image h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    <span className="absolute left-5 top-5 rounded-full bg-[#d5edb7] px-3 py-2 text-[10px] font-extrabold tracking-wider text-[#214b34]">
                      {item.tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleSaved(item.id)}
                      aria-label="Save package"
                      className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-xl text-white backdrop-blur"
                    >
                      {saved.includes(item.id) ? "♥" : "♡"}
                    </button>

                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-xs text-white/75">{item.location}</p>
                      <h3 className="tp-heading mt-1 text-2xl font-bold">{item.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#89958a]">
                      <span>◷ {item.duration}</span>
                      <span>♧ {item.people}</span>
            
                    </div>

                    <p className="mt-5 min-h-[66px] text-sm leading-6 text-[#758276]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.slice(0, 2).map((highlight) => (
                        <span key={highlight} className="rounded-full bg-[#f0f5eb] px-3 py-2 text-[10px] font-bold text-[#627965]">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-end justify-between border-t border-[#edf1e9] pt-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa79b]">
                          Starting price / person
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-[#214b34]">
                          {money(item.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelected(item)}
                        className="tp-button rounded-full bg-[#214b34] px-5 py-3 text-xs font-extrabold text-white"
                      >
                        Explore ↗
                      </button>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-[#bdceb8] bg-white px-6 py-16 text-center">
              <div className="text-4xl">⌕</div>
              <h3 className="tp-heading mt-4 text-2xl text-[#214b34]">
                No journeys found
              </h3>
              <p className="mt-2 text-sm text-[#829084]">
                Try a different search or category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Packages");
                }}
                className="mt-5 rounded-full bg-[#214b34] px-6 py-3 text-xs font-bold text-white"
              >
                Show all packages
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">

        <div className="tp-animate mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#829b70]">
            Why travel with us
          </p>

          <h2 className="tp-heading mt-4 text-4xl text-[#1d422e] sm:text-5xl">
            More than a trip.
            <span className="italic text-[#829b70]"> A memory.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#718174]">
            We believe the best journeys are the ones you remember long after
            the journey ends.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Thoughtful journeys", "Explore carefully planned routes with room for spontaneous discoveries."],
            ["02", "Local experiences", "Discover the natural beauty and cultural character of Tenkasi."],
            ["03", "Flexible plans", "Tell us your group size and preferred date to discuss a suitable trip."]
          ].map(([number, title, description], index) => (
            <div
              key={number}
              className="tp-animate rounded-[1.7rem] border border-[#e0e8db] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="tp-heading text-5xl italic text-[#a9c294]">{number}</p>
              <h3 className="tp-heading mt-7 text-2xl text-[#214b34]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#7b897d]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO / IMAGE BANNER */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="tp-animate relative mx-auto flex min-h-[400px] max-w-7xl items-center overflow-hidden rounded-[2rem] bg-[#153b29]">

          <img
            src="natureex1.jpg"
            alt="Beautiful forest landscape"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b291b]/95 via-[#0b291b]/65 to-transparent" />

          <div className="relative max-w-2xl px-8 py-16 sm:px-14">
            <p className="text-xs font-extrabold uppercase tracking-[.25em] text-[#d5edb7]">
              Your next adventure awaits
            </p>

            <h2 className="tp-heading mt-5 text-4xl leading-tight text-white sm:text-5xl">
              Take a break from ordinary.
              <span className="block italic text-[#d5edb7]">Find extraordinary.</span>
            </h2>

            <a
              href="#tp-enquiry"
              className="tp-button mt-9 inline-flex rounded-full bg-[#d5edb7] px-7 py-4 text-sm font-extrabold text-[#173b2a]"
            >
              Start planning ↗
            </a>
          </div>
        </div>
      </section>
      

     

      {/* FOOTER */}

      <footer className="bg-[#153b29] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="tp-heading text-3xl">Tenkasi, your way.</h2>
            <p className="mt-2 text-sm text-white/55">
              Nature · Heritage · Beautiful journeys
            </p>
          </div>

          <a
            href="#tp-packages"
            className="tp-button w-fit rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white hover:text-[#153b29]"
          >
            Back to packages ↑
          </a>
        </div>

        <div className="mx-auto mt-9 max-w-7xl border-t border-white/15 pt-5 text-xs text-white/40">
          © {new Date().getFullYear()} Tenkasi Tourism. All rights reserved.
        </div>
      </footer>

 

      
      {/* PACKAGE DETAILS MODAL */}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#071b12]/80 px-3 pb-6 pt-24 backdrop-blur-sm sm:px-6 sm:pb-6 sm:pt-28"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} package details`}
            className="tp-modal max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.7rem] bg-[#fbfcf9] shadow-2xl"
          >
            {/* MODAL HERO */}

            <div className="relative h-60 sm:h-80">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
<div className="absolute inset-0 z-0 bg-gradient-to-t from-[#071b12]/90 via-black/20 to-black/10" />

<button
  type="button"
  onClick={() => setSelected(null)}
  className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 bg-[#071b12] text-3xl font-bold leading-none text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#315b42]"
  aria-label="Close details"
>
  <span className="block -translate-y-[1px]">×</span>
</button>
              <div className="absolute bottom-7 left-6 right-6 text-white sm:left-9">
                <span className="inline-block rounded-full bg-[#d5edb7] px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#214b34]">
                  {selected.tag}
                </span>

                <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-white/75">
                  {selected.category} · {selected.duration}
                </p>

                <h3 className="tp-heading mt-2 text-3xl font-bold sm:text-5xl">
                  {selected.name}
                </h3>

                <p className="mt-3 text-sm text-white/80">
                  📍 {selected.location} 
                </p>
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="grid gap-9 p-5 sm:p-8 lg:grid-cols-[1fr_280px]">

              {/* LEFT CONTENT */}

              <div className="min-w-0">

                {/* OVERVIEW */}

{/* PACKAGE OVERVIEW + EXPERIENCE */}

<section className="mt-8 overflow-hidden rounded-3xl border border-[#e3eadc] bg-gradient-to-br from-[#f8faf3] via-white to-[#edf4e8] p-6 sm:p-8 shadow-sm">

  {/* HEADER */}
  <div className="text-center">
    <span className="inline-block rounded-full bg-[#e8f0e3] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#64835b]">
      Discover this journey
    </span>

    <h4 className="tp-heading mt-4 text-3xl font-bold text-[#214b34]">
      Your Journey, Beautifully Planned
    </h4>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#718174]">
      {selected.description}
    </p>
  </div>

  {/* TRIP DETAILS */}
  <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-4">

    <div className="group rounded-2xl border border-[#e1e9dc] bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#edf3e8] text-2xl text-[#64835b] transition-transform duration-500 group-hover:rotate-12">
        ◷
      </div>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#9aa79b]">
        Duration
      </p>

      <p className="mt-2 text-sm font-extrabold text-[#315d3e]">
        {selected.duration}
      </p>
    </div>

    <div className="group rounded-2xl border border-[#e1e9dc] bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#edf3e8] text-2xl text-[#64835b] transition-transform duration-500 group-hover:rotate-12">
        ⌖
      </div>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#9aa79b]">
        Destination
      </p>

      <p className="mt-2 text-sm font-extrabold text-[#315d3e]">
        {selected.location}
      </p>
    </div>

  </div>

  {/* DIVIDER */}
  <div className="my-9 flex items-center gap-4">
    <div className="h-px flex-1 bg-[#dce7d5]"></div>
    <span className="text-xl text-[#829b70]">✦</span>
    <div className="h-px flex-1 bg-[#dce7d5]"></div>
  </div>

  {/* EXPERIENCE HIGHLIGHTS */}
  <div>
    <div className="text-center">
      <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
        Little moments, lasting memories
      </p>

      <h4 className="tp-heading mt-2 text-2xl font-bold text-[#214b34]">
        Experience Highlights
      </h4>

      <p className="mt-2 text-xs text-[#829183]">
        Explore what makes this trip special
      </p>
    </div>

    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {(selected.highlights || []).map((item, index) => (
        <div
          key={`${item}-${index}`}
          style={{ animationDelay: `${index * 100}ms` }}
          className="group flex items-center gap-4 rounded-2xl border border-[#e1e9dc] bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9aaf8d] hover:shadow-md"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#edf3e8] text-xs font-extrabold text-[#64835b] transition-all duration-300 group-hover:bg-[#315d3e] group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-sm font-semibold leading-6 text-[#557354]">
            {item}
          </span>

          <span className="ml-auto text-[#91a47f] transition-transform duration-300 group-hover:translate-x-1">
            
          </span>
        </div>
      ))}
    </div>

    {(!selected.highlights || selected.highlights.length === 0) && (
      <p className="mt-5 text-center text-sm text-[#829183]">
        More exciting experiences coming soon!
      </p>
    )}
  </div>

</section>

                {/* PHOTO GALLERY */}
<section className="mt-10">
  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
    Explore the destination
  </p>

  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
    Destination Gallery
  </h4>

  <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
  {(selected.gallery || [selected.image]).map((photo, index) => (
    <img
      key={index}
      src={`/${photo}`}
      alt={`${selected.name} view ${index + 1}`}
      className={`tp-gallery-image tp-gallery-float-${index + 1} h-36 w-full rounded-xl object-cover`}
    />
  ))}
</div>
</section>

                {/* ITINERARY */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Your journey, step by step
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Your itinerary
                  </h4>

                  <div className="relative mt-6 space-y-6">
                    <div className="absolute bottom-3 left-[15px] top-3 w-px bg-[#dce8d4]" />

                    {selected.itinerary.map(([time, activity], index) => (
                      <div key={`${time}-${index}`} className="relative flex gap-4">
                        <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-4 border-[#fbfcf9] bg-[#dcebd0] text-[10px] font-extrabold text-[#315d3e]">
                          {index + 1}
                        </span>

                        <div className="flex-1 rounded-xl border border-[#e7ede2] bg-white p-4">
                          <p className="text-xs font-extrabold text-[#78946b]">
                            {time}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#637467]">
                            {activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              





{/* TRAVEL ARRANGEMENTS */}

<section className="mt-10">

  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
    Plan your travel
  </p>

  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
    Travel Arrangements
  </h4>

  <p className="mt-3 text-sm leading-7 text-[#718174]">
    Choose your convenient pickup location for a comfortable journey.
  </p>

  {/* HORIZONTAL IMAGE SCROLL */}

  <div
    id="pickup-image-slider"
    className="mt-5 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5"
    style={{ scrollbarWidth: "thin" }}
  >

    {pickupPointImages.map((point) => (

      <div
        key={point.id}
        id={`pickup-${point.id}`}
        className="w-[320px] min-w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#e1e9dc] bg-white shadow-md"
      >

        <img
          src={point.image}
          alt={point.name}
          className="h-48 w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "";
          }}
        />

        <div className="p-4">

          <h5 className="font-bold text-[#426449]">
            {point.name}
          </h5>

          <p className="mt-2 text-sm text-[#849184]">
            {point.location}
          </p>

        </div>

      </div>

    ))}

  </div>

  {/* PICKUP POINT BUTTONS */}

  <div className="mt-5 rounded-xl border border-[#e5ecdf] bg-white p-5">

    <h5 className="font-bold text-[#426449]">
      Available Pickup Points
    </h5>

    <div className="mt-4 flex flex-wrap gap-2">

      {pickupPointImages.map((point) => (

        <button
          key={point.id}
          type="button"
          onClick={() => {
            document
              .getElementById(`pickup-${point.id}`)
              ?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
              });
          }}
          className="rounded-full bg-[#edf3e8] px-4 py-3 text-xs font-semibold text-[#557354] transition duration-300 hover:bg-[#214b34] hover:text-white"
        >
          {point.name}

        </button>

      ))}

    </div>

  </div>

</section>

                {/* TRAVEL TIPS */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Prepare for your adventure
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Travel tips & essentials
                  </h4>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ["🎒", "Carry essentials", "Water bottle, personal medicines and a small backpack."],
                      ["👟", "Comfortable footwear", "Choose suitable footwear for walking and uneven paths."],
                      ["👕", "Extra clothing", "Carry an extra set of clothes for outdoor and waterfall visits."],
                      ["📷", "Capture memories", "Bring your camera or phone with enough battery."],
                      ["🌦️", "Check the weather", "Check local weather and destination access before travelling."],
                      ["🧴", "Personal care", "Carry sunscreen, towels and other personal essentials."]
                    ].map(([icon, title, description]) => (
                      <div
                        key={title}
                        className="flex gap-3 rounded-xl border border-[#e5ecdf] bg-white p-4"
                      >
                        <span className="text-2xl">{icon}</span>
                        <div>
                          <h5 className="text-sm font-bold text-[#426449]">{title}</h5>
                          <p className="mt-1 text-xs leading-6 text-[#849184]">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* IMPORTANT INFORMATION */}

                <section className="mt-10 rounded-2xl bg-[#214b34] p-6 text-white">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#cce8a7]">
                    Before you set off
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl">
                    Important travel information
                  </h4>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                    <li>✦ Follow local instructions and destination safety rules.</li>
                    <li>✦ Waterfall access and bathing permissions may change depending on weather and official restrictions.</li>
                    <li>✦ Respect temples, local customs and protected natural areas.</li>
                    <li>✦ Keep the surroundings clean and avoid littering.</li>
                    <li>✦ Confirm the final itinerary, transport and ticket details before payment.</li>
                  </ul>
                </section>

                {/* FAQ */}

                <section className="mt-10">
                  <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#91a47f]">
                    Need to know?
                  </p>

                  <h4 className="tp-heading mt-2 text-2xl text-[#214b34]">
                    Frequently asked questions
                  </h4>

                  <div className="mt-5 space-y-3">
                    {[
                      [
                        "Can I customise this package?",
                        "Yes. You can send an enquiry with your preferred date, group size and travel requirements to discuss a customised plan."
                      ],
                      [
                        "Are meals and transport included?",
                        "They are not automatically included. Please confirm the final package inclusions before booking."
                      ],
                      [
                        "Can children and families join?",
                        "Suitability depends on the selected destinations and local safety conditions. Please mention the ages of children in your enquiry."
                      ],
                      [
                        "What happens if a destination is closed?",
                        "Access may change due to weather or official restrictions. Confirm available alternatives with the trip organiser."
                      ],
                      [
                        "How can I confirm my trip?",
                        "Submit the enquiry form with your contact details and preferred date. Confirm the final price and booking terms before making payment."
                      ]
                    ].map(([question, answer]) => (
                      <details
                        key={question}
                        className="group rounded-xl border border-[#e3eadd] bg-white p-4"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-[#426449]">
                          {question}
                          <span className="text-lg text-[#829b70] transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <p className="mt-3 border-t border-[#edf1e9] pt-3 text-xs leading-7 text-[#7b897d]">
                          {answer}
                        </p>
                      </details>
                    ))} 
                  </div>
                </section>

              </div>

              {/* RIGHT PRICE & BOOKING CARD */}

              <aside className="h-fit rounded-2xl border border-[#e0e9d9] bg-[#edf3e8] p-5 md:sticky md:top-4 sm:p-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#81947f]">
                  Your journey awaits
                </p>

                <p className="mt-3 text-4xl font-extrabold text-[#214b34]">
                  {money(selected.price)}
                </p>

                <p className="mt-1 text-xs text-[#879487]">
                  Starting estimate · per person
                </p>

                <div className="my-6 border-t border-[#d8e3d2]" />

                <h4 className="text-sm font-extrabold text-[#47634b]">
                  At a glance
                </h4>

                <div className="mt-4 space-y-4 text-xs text-[#748574]">
                  <div className="flex justify-between gap-2">
                    <span>Destination</span>
                    <span className="text-right font-bold text-[#47634b]">{selected.location}</span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span>Duration</span>
                    <span className="font-bold text-[#47634b]">{selected.duration}</span>
                  </div>

                  

                  <div className="flex justify-between gap-2">
                    <span>Category</span>
                    <span className="text-right font-bold text-[#47634b]">{selected.category}</span>
                  </div>

                 
                </div>

                <div className="my-6 border-t border-[#d8e3d2]" />

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-bold text-[#47634b]">
                    Need a custom experience?
                  </p>
                  <p className="mt-2 text-[11px] leading-6 text-[#89978a]">
                    Tell us your preferred travel date and group size. We can discuss a suitable plan.
                  </p>
                </div>
             <Link
  to="/Planyourtrip"
  className="tp-button mt-5 flex w-full items-center justify-center rounded-full bg-[#214b34] px-4 py-4 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#315b42]"
>
  Trip Type ↗
</Link>

                <button
                  type="button"
                  onClick={() => toggleSaved(selected.id)}
                  className="mt-3 w-full rounded-full border border-[#cbdcc3] bg-white px-4 py-3 text-xs font-bold text-[#557354]"
                >
                  {saved.includes(selected.id) ? "♥ Saved to favourites" : "♡ Save this package"}
                </button>
                

                <p className="mt-4 text-center text-[10px] leading-5 text-[#8b9a8b]">
                  Prices are estimates. Final rates, availability, inclusions and booking conditions must be confirmed.
                </p>
              </aside>

            </div>

            {/* MODAL BOTTOM */}

            
{/* MODAL BOTTOM */}

<div className="flex flex-col items-center gap-5 border-t border-[#e5ecdf] bg-[#f0f5eb] px-6 py-6 text-center sm:flex-row sm:justify-between">

  <div>
    <p className="tp-heading text-xl text-[#315d3e]">
      Make your next journey a beautiful memory.
    </p>
    <p className="mt-2 text-xs text-[#849184]">
      Explore Tenkasi · Discover nature · Create memories
    </p>
  </div>

  <button
    type="button"
    onClick={() => setSelected(null)}
    className="flex items-center justify-center gap-2 rounded-full bg-[#214b34] px-8 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#315b42] hover:shadow-lg"
  >
    ← Back to Packages
  </button>

</div>


          </div>
        </div>
      )}

      

    </main>
    <Footer></Footer>
    </>
  );

}
