import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer"

const hiddenPlaces = [
  
    {
    name: "North Maasi Street",
    location: "Tenkasi",
    category: "Local Market",
    description:
      "Popular temple-side shopping area.",
    image:
      "shop1.jpg",
    
  },
  {
    name: "Municipal Market",
    location: "Tenkasi Region",
    category: "Local Market",
    description:
      "Vegetables, fruits, groceries and local market shopping.",
    image:
      "shop3.jpg",
    
  },
  {
    name: "Amman Sannathi Bazaar",
    location: "Local Street",
    category: "Traditional Shopping",
    description:
      "Textiles, jewellery and traditional shops.",
    image:
      "shop2.jpg",
  
  },
  {
    name: "Swami Sannathi Bazaar",
    location: "Near Tenkasi",
    category: "Traditional Shopping",
    description:
      "Traditional shopping street near Kasi Viswanathar Temple. Clothes, flowers and everyday shopping.",
    image:
      "shop4.jpg",
  
  },
];

export default function Shopping() {
  return (
    <>
    <Homenavbar></Homenavbar>
    <div className="min-h-screen bg-[#f6f8ef] text-[#294333]">
      {/* Hero */}
      
<section className="relative flex h-[100vh] min-h-[100vh] w-full items-center overflow-hidden">

        
<img
  src="shop8.jpg"
  alt="Hidden mountain landscape"
  className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_18s_ease-in-out_infinite_alternate]"
/>

        <div className="absolute inset-0 bg-[#142b20]/55" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-bold uppercase tracking-[5px] text-[#d4e6bc]">
            Go beyond the usual
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Discover the Hidden Side of Tenkasi
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Take the road less travelled. Find peaceful corners, beautiful
            landscapes and lesser-known experiences around Tenkasi.
          </p>
          <a
            href="#hidden"
            className="mt-9 inline-block rounded-full bg-[#dce9c5] px-8 py-4 font-bold text-[#294333] transition hover:-translate-y-1 hover:bg-white"
          >
            Find Local Markets →
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[4px] text-[#78966b]">
          Not just another journey
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          The Unexplored Beauty
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#718071]">
          Some of the best travel memories come from places away from the
          usual crowds. Explore the quieter side of Tenkasi and enjoy its
          natural charm.
        </p>
      </section>

      {/* Hidden gems */}
      <section id="hidden" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-[3px] text-[#78966b]">
              Little-known treasures
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Explore Local Markets
            </h2>
          </div>
          <p className="text-sm text-[#829080]">
            Explore more • Discover more
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          {hiddenPlaces.map((place, index) => (
            <article
              key={place.name}
              className="group relative min-h-[420px] overflow-hidden rounded-[30px] shadow-lg"
            >
              <img
                src={place.image}
                alt={place.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#12271c]/90 via-[#12271c]/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold tracking-widest text-[#456448]">
                {place.category}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                <p className="text-sm font-semibold text-[#d4e6bc]">
                  {place.location}
                </p>
                <h3 className="mt-2 text-3xl font-bold">{place.name}</h3>
                <p className="mt-3 max-w-md leading-7 text-white/80">
                  {place.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  
                  <span className="text-2xl transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

{/* BEST TIME TO VISIT */}
<section className="relative overflow-hidden bg-[#f6f8ef] px-6 py-24">

  <style>{`
    @keyframes shoppingFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-12px);
      }
    }

    .shopping-season-card {
      animation: shoppingFloat 5s ease-in-out infinite;
    }

    .shopping-season-card:nth-child(2) {
      animation-delay: 0.8s;
    }

    .shopping-season-card:nth-child(3) {
      animation-delay: 1.6s;
    }

    @media (prefers-reduced-motion: reduce) {
      .shopping-season-card {
        animation: none;
      }
    }
  `}</style>

  {/* Background Decorations */}
  <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#dce9c5]/40 blur-3xl" />
  <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#dce9c5]/40 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-16 text-center">

      <p className="text-sm font-bold uppercase tracking-[4px] text-[#78966b]">
        Plan Your Shopping Trip
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#294333] md:text-5xl">
        Best Time for Shopping
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#718071]">
        Explore Tenkasi's traditional bazaars, local markets
        and shopping streets throughout the year. Choose
        a comfortable time to enjoy the local shopping experience.
      </p>

    </div>

    {/* Season Cards */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}
      <article className="shopping-season-card rounded-[28px] border border-[#dce6d2] bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6efdc] text-3xl">
          🌿
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[3px] text-[#78966b]">
          December – February
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#294333]">
          Pleasant Shopping
        </h3>

        <p className="mt-4 leading-8 text-[#788477]">
          Relatively comfortable weather makes this a good
          period to explore local shopping streets, browse
          traditional stores and enjoy market visits.
        </p>

        <div className="mt-7 rounded-xl bg-[#f0f4e9] p-4">
          <p className="text-sm font-bold text-[#45664a]">
            Best for
          </p>
          <p className="mt-1 text-sm text-[#788477]">
            Relaxed shopping and street exploration
          </p>
        </div>

      </article>

      {/* CARD 2 */}
      <article className="shopping-season-card rounded-[28px] border border-[#dce6d2] bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6efdc] text-3xl">
          ☀️
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[3px] text-[#78966b]">
          March – May
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#294333]">
          Early Morning Finds
        </h3>

        <p className="mt-4 leading-8 text-[#788477]">
          These months can be warmer in Tenkasi.
          Visit markets early in the morning or later
          in the evening to enjoy shopping more comfortably.
        </p>

        <div className="mt-7 rounded-xl bg-[#f0f4e9] p-4">
          <p className="text-sm font-bold text-[#45664a]">
            Best for
          </p>
          <p className="mt-1 text-sm text-[#788477]">
            Morning market visits and fresh produce shopping
          </p>
        </div>

      </article>

      {/* CARD 3 */}
      <article className="shopping-season-card rounded-[28px] border border-[#dce6d2] bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6efdc] text-3xl">
          🛍️
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[3px] text-[#78966b]">
          June – November
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#294333]">
          Seasonal Shopping
        </h3>

        <p className="mt-4 leading-8 text-[#788477]">
          This period can bring rainy days to Tenkasi.
          Plan your market visits around the weather.
          Festival shopping opportunities also depend
          on the annual festival calendar.
        </p>

        <div className="mt-7 rounded-xl bg-[#f0f4e9] p-4">
          <p className="text-sm font-bold text-[#45664a]">
            Best for
          </p>
          <p className="mt-1 text-sm text-[#788477]">
            Festival shopping and traditional purchases
          </p>
        </div>

      </article>

    </div>

    {/* Shopping Tip */}
    <div className="mt-12 rounded-2xl border border-[#dce6d2] bg-[#edf2e5] px-6 py-6 text-center">

      <p className="font-bold text-[#315b42]">
        ✦ Shopping Tip
      </p>

      <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-[#788477]">
        Tenkasi's local markets and shopping streets operate
        throughout the year. Morning and evening visits can
        be more comfortable. Check individual shop timings
        and weekly market days before travelling.
      </p>

    </div>

  </div>
</section>


      {/* CTA */}
      {/* CTA */}
<section className="relative mx-6 mb-16 overflow-hidden rounded-[35px] bg-[#315b42] px-6 py-20 text-center text-white md:mx-auto md:max-w-7xl md:px-16">

  {/* Background Decorations */}
  <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />

  <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/10" />

  <div className="relative z-10">

    <p className="text-sm font-bold uppercase tracking-[4px] text-[#d4e6bc]">
      Make your own adventure
    </p>

    <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
      The best discoveries are waiting beyond the ordinary.
    </h2>

    <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">
      Explore Tenkasi your way and create memories in its beautiful
      hidden corners.
    </p>

    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">

      {/* Existing Button */}
      <Link
        to="/tour-packages"
        className="inline-flex items-center justify-center rounded-full bg-[#e4edcf] px-8 py-4 font-bold text-[#315b42] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
      >
        Plan Your Adventure →
      </Link>

      {/* New Destination Button */}
      <Link
        to="/destination"
        className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#315b42]"
      >
        Explore Destinations ↗
      </Link>

    </div>
  </div>
</section>
    </div>
    <Footer></Footer>
</>
  );
}