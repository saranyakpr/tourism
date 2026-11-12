import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, ArrowLeft, Utensils, Leaf, Drumstick, ChevronRight,
  ChevronLeft, ChefHat, Coffee, Sun, Moon, Clock3
} from "lucide-react";

import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

// Prices are indicative estimates in INR. Online menu prices can vary by outlet,
// portion size, delivery platform and date. Confirm with the restaurant before publishing.

const areas = [
  {
    name: "Courtallam Road",
    restaurants: [
      {
        id: 1,
        name: "Sri Madhuram",
        foodType: "veg",
        image: "/maduram.jpg",
        location: "Courtallam Road, Tenkasi",
        timings: "8:00 AM – 10:00 PM (listed daily hours)",
        menu: {
          breakfast: { veg: ["Idli", "Pongal", "Ghee Roast Dosa", "Poori Masala"], nonveg: [] },
          lunch: { veg: ["Veg Meals", "Sambar Rice", "Curd Rice"], nonveg: [] },
          dinner: { veg: ["Dosa", "Parotta", "Chapati"], nonveg: [] }
        }
      },
      {
        id: 2,
        name: "Aasife Biriyani",
        foodType: "both",
        image: "/aasife.jpg",
        location: "Courtallam Road, Tenkasi",
        timings: "11:00 AM – 10:30 PM (official outlet hours)",
        menu: {
          // Official outlet timing starts at 11:00 AM, so breakfast is not listed.
          breakfast: { veg: [], nonveg: [] },
          lunch: { veg: ["Veg Biryani", "Paneer Butter Masala", "Gobi 65"], nonveg: ["Chicken Biryani", "Mutton Biryani", "Chicken 65"] },
          dinner: { veg: ["Veg Fried Rice", "Paneer Masala", "Veg Noodles"], nonveg: ["Grill Chicken", "Tandoori Chicken", "Egg Biryani"] }
        }
      }
    ]
  },
  {
    name: "Old Bus Stand",
    restaurants: [
      {
        id: 3,
        name: "Raj Mess",
        foodType: "veg",
        image: "/raj mess.jpg.jpeg",
        location: "Meela Maasi Veethi, Near Old Bus Stand, Tenkasi",
        timings: "Breakfast: 7:00 AM – 11:00 AM | Lunch: 12:00 PM – 3:00 PM | Dinner: 6:00 PM – 10:00 PM (listed hours)",
        menu: {
          breakfast: { veg: ["Idli", "Dosa", "Pongal"], nonveg: [] },
          lunch: { veg: ["Veg Meals", "Sambar Rice", "Curd Rice"], nonveg: [] },
          dinner: { veg: ["Parotta", "Chapati", "Dosa"], nonveg: [] }
        }
      }
    ]
  },
  {
    name: "Kuthukal Valasai",
    restaurants: [
      {
        id: 4,
        name: "Althaf Food Court",
        foodType: "both",
        image: "/althaf.jpg.jpeg",
        location: "Kuthukal Valasai, Tenkasi",
        timings: "12:00 PM – 11:30 PM (listed daily hours)",
        menu: {
          breakfast: { veg: [], nonveg: [] },
          lunch: { veg: ["Veg Fried Rice", "Paneer Fried Rice", "Chilli Paneer"], nonveg: ["Chicken Curry", "Chicken Biryani", "Chicken Lollipop"] },
          dinner: { veg: ["Ghee Roast", "Gobi Manchurian", "Butter Naan"], nonveg: ["Classic Shawarma", "Grill Chicken", "Honey Garlic Chicken"] }
        }
      },
      {
        id: 5,
        name: "Maurya",
        foodType: "both",
        image: "/maurya.jpg",
        location: "East Car Street, Tenkasi",
        timings: "8:00 AM – 10:00 PM",
        menu: {
          breakfast: { veg: ["Idli", "Dosa", "Poori"], nonveg: ["Egg Omelette", "Egg Dosa"] },
          lunch: { veg: ["Veg Meals", "Paneer Butter Masala", "Gobi Manchurian"], nonveg: ["Chicken 65", "Chicken Gravy", "Egg Fried Rice"] },
          dinner: { veg: ["Veg Fried Rice", "Veg Noodles", "Mushroom Masala"], nonveg: ["Chicken Fried Rice", "Chicken Noodles", "Chicken 65"] }
        }
      }
    ]
  },
  {
    name: "New Bus Stand",
    restaurants: [
      {
        id: 6,
        name: "Kalari Kari Virundhu",
        foodType: "both",
        image: "/kari.avif",
        location: "Tenkasi–Madurai Road, Near New Bus Stand, Tenkasi",
        timings: "12:30 PM – 11:00 PM (official restaurant website hours)",
        menu: {
          breakfast: { veg: [], nonveg: [] },
          lunch: { veg: ["Veg Meals", "Sambar Rice", "Rasam Rice"], nonveg: ["Chicken Curry", "Mutton Chukka", "Fish Curry"] },
          dinner: { veg: ["Parotta", "Chapati", "Curd Rice"], nonveg: ["Chicken 65", "Mutton Curry", "Parotta with Chicken Gravy"] }
        }
      }
    ]
  },
  {
    name: "Kuthukalvalasai",
    restaurants: [
      {
        id: 7,
        name: "Topi Vappa",
        foodType: "both",
        image: "/Topi1.jpeg",
        location: "123/10, Kuthukalvalasai, Madurai Main Road, Tenkasi",
        timings: "11:30 AM – 11:00 PM (listed daily hours)",
        menu: {
          breakfast: { veg: ["Idli", "Dosa", "Poori"], nonveg: ["Egg Dosa", "Egg Omelette"] },
          lunch: { veg: ["Veg Biryani", "Paneer Fried Rice", "Gobi 65"], nonveg: ["Chicken Biryani", "Mutton Biryani", "Chicken 65"] },
          dinner: { veg: ["Veg Noodles", "Veg Fried Rice", "Paneer Masala"], nonveg: ["Shawarma", "Grill Chicken", "Chicken Fried Rice"] }
        }
      }
    ]
  },
  {
    name: "Piranoor Border",
    restaurants: [
      {
        id: 8,
        name: "Border Rahmath",
        foodType: "both",
        image: "/border.jpg",
        location: "Shencottai Road, Piranoor Border, Tenkasi",
        timings: "11:45 AM – 10:00 PM",
        menu: {
          // Border Rahmath: breakfast is not included; menu reflects the food availability shared.
          breakfast: { veg: [], nonveg: [] },
          lunch: {
            veg: ["Paneer Tikka", "Butter Naan"],
            nonveg: ["Chicken Biryani", "Mutton Biryani", "Mutton Chukka", "Chicken Curry", "Parotta"]
          },
          dinner: {
            veg: [],
            nonveg: [
              
              "Salna Parotta",
              "Kothu Parotta ",
              "Chicken 65",
              "Pepper Chicken Gravy",
              "Chicken Manchurian",
              "Chicken Tikka"
            ]
          }
        }
      }
    ]
  },
  {
    name: "Sengottai",
    restaurants: [
      {
        id: 9,
        name: "Salem RR Biriyani",
        foodType: "both",
        image: "/RR.webp",
        location: "Sengottai, Tenkasi",
        timings: "11:00 AM – 11:00 PM",
        menu: {
          // Breakfast is not listed because its service timing has not been confirmed.
          breakfast: { veg: [], nonveg: [] },
          lunch: { veg: ["Veg Fried Rice", "Veg Noodles"], nonveg: ["Chicken Biriyani", "Mutton Biriyani", "Chicken 65", "Egg Biriyani"] },
          dinner: { veg: ["Chapati", "Paneer Butter Masala"], nonveg: ["Parotta", "Chicken Tikka", "Chicken Roll", "Chicken Noodles"] }
        }
      }
    ]
  }
];

const heroSlides = [
  { id: 1, name: "Chilli Parotta & Kothu Parotta", image: "/images/chilli-parotta.jpg", fit: "cover" },
  { id: 2, name: "Chicken Curry", image: "/chicken.jpeg", fit: "cover" },
  { id: 3, name: "Kadayanallur Biryani", image: "/biriyani.jpeg", fit: "cover" },
  { id: 4, name: "Puliyankudi Lemon Pickle", image: "/pickle.jpeg", fit: "cover" }
];

const mealDetails = [
  { key: "breakfast", title: "Breakfast", subtitle: "Start your day with delicious food", timing: "8:00 AM – 10:00 AM", image: "public/meal-breakfast.jpg", Icon: Coffee },
  { key: "lunch", title: "Lunch", subtitle: "Enjoy a satisfying afternoon meal", timing: "12:00 PM – 3:00 PM", image: "public/meal-lunch.jpg", Icon: Sun },
  { key: "dinner", title: "Dinner", subtitle: "End your day with tasty food", timing: "6:00 PM – 10:00 PM", image: "public/meal-dinner.jpg", Icon: Moon }
];

// Common approximate menu prices (INR). Outlet-specific prices may differ.
const foodDetails = {
  "Idli": { price: 10 },
  "Dosa": { price: 40 },
  "Ghee Roast Dosa": { price: 70 },
  "Pongal": { price: 40 },
  "Poori": { price: 40 },
  "Poori Masala": { price: 50 },
  "Chapati": { price: 20 },
  "Parotta": { price: 25 },
  "Egg Dosa": { price: 70 },
  "Egg Omelette": { price: 40 },
  "Chicken Dosa": { price: 120 },
  "Veg Meals": { price: 100 },
  "Sambar Rice": { price: 70 },
  "Curd Rice": { price: 60 },
  "Rasam Rice": { price: 70 },
  "Veg Biryani": { price: 180 },
  "Chicken Biryani": { price: 260 },
  "Chicken Biriyani": { price: 350 },
  "Mutton Biryani": { price: 340 },
  "Mutton Biriyani": { price: 360 },
  "Egg Biryani": { price: 210 },
  "Egg Biriyani": { price: 294 },
  "Veg Fried Rice": { price: 160 },
  "Egg Fried Rice": { price: 180 },
  "Chicken Fried Rice": { price: 220 },
  "Paneer Fried Rice": { price: 200 },
  "Veg Noodles": { price: 160 },
  "Chicken Noodles": { price: 220 },
  "Paneer Butter Masala": { price: 220 },
  "Paneer Masala": { price: 200 },
  "Paneer Tikka": { price: 220 },
  "Mushroom Masala": { price: 220 },
  "Gobi 65": { price: 156 },
  "Gobi Manchurian": { price: 180 },
  "Chilli Paneer": { price: 200 },
  "Butter Naan": { price: 70 },
  "Chicken Curry": { price: 220 },
  "Mutton Curry": { price: 300 },
  "Fish Curry": { price: 240 },
  "Fish Fry": { price: 220 },
  "Chicken 65": { price: 200 },
  "Chicken Lollipop": { price: 240 },
  "Mutton Chukka": { price: 300 },
  "Grill Chicken": { price: 290 },
  "Grill": { price: 290 },
  "Tandoori Chicken": { price: 320 },
  "Classic Shawarma": { price: 120 },
  "Shawarma": { price: 120 },
  "Chicken Tikka": { price: 300 },
  "Chicken Roll": { price: 120 },
  "Honey Garlic Chicken": { price: 280 },
  "Parotta with Chicken Gravy": { price: 120 }
};

const getFoodDetails = (food) => foodDetails[food.trim()] || {
  price: 150
};

const getRestaurantPriceRange = (restaurant) => {
  const prices = Object.values(restaurant.menu)
    .flatMap((meal) => [...meal.veg, ...meal.nonveg])
    .map((food) => getFoodDetails(food).price);
  if (!prices.length) return "Menu prices not listed";
  return `Approx. ₹${Math.min(...prices)} – ₹${Math.max(...prices)} per item`;
};

function RestaurantCard({ restaurant, areaName, onClick, index }) {
  const foodLabel = restaurant.foodType === "veg" ? "Pure Veg" : restaurant.foodType === "nonveg" ? "Non-Veg" : "Veg & Non-Veg";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="relative h-60 shrink-0 overflow-hidden bg-green-100">
        <img src={restaurant.image} alt={restaurant.name} loading="lazy"
          onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.style.display = "none"; }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-green-800 shadow">
          <MapPin size={13} /> {areaName}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-green-800">{foodLabel}</span>
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 p-5">
        <div>
          <h4 className="text-xl font-extrabold text-slate-900 transition-colors group-hover:text-green-700">{restaurant.name}</h4>
          <p className="mt-2 text-sm text-slate-500">
            {restaurant.name === "Salem RR Biriyani" ? "Explore lunch & dinner menu" : "Explore breakfast, lunch & dinner"}
          </p>
        </div>
        <div className="shrink-0 rounded-full bg-green-100 p-3 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
          <ChevronRight size={22} />
        </div>
      </div>
    </motion.article>
  );
}

function FoodList({ foods, type }) {
  const isVeg = type === "veg";
  if (!foods?.length) return null;
  return (
    <ul className="grid grid-cols-1 gap-3">
      {foods.map((food, index) => {
        const details = getFoodDetails(food);
        return (
          <motion.li key={`${food}-${index}`} initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }} whileHover={{ y: -3, scale: 1.01 }}
            className={`flex min-h-[62px] items-center justify-between gap-4 rounded-xl border px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${isVeg ? "border-green-100 bg-gradient-to-r from-green-50 to-emerald-50" : "border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50"}`}>
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 ${isVeg ? "border-green-600" : "border-orange-600"}`} />
              <span className="font-semibold text-slate-800">{food}</span>
            </div>
            <span className={`shrink-0 rounded-lg px-3 py-2 text-sm font-extrabold tabular-nums ${isVeg ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>
              ₹{details.price}
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}

function MealSection({ meal, restaurant }) {
  const { key, title, subtitle, Icon, image } = meal;
  const items = restaurant.menu[key];
  const showVeg = restaurant.foodType !== "nonveg" && items.veg.length > 0;
  const showNonVeg = restaurant.foodType !== "veg" && items.nonveg.length > 0;
  if (!showVeg && !showNonVeg) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <div
        className="relative flex min-h-[205px] flex-col justify-end overflow-hidden bg-cover bg-center p-5 text-white sm:p-6"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-white/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/35 bg-white/20 shadow-lg backdrop-blur-md"
          >
            <Icon size={26} />
          </motion.div>
          <h3 className="text-2xl font-extrabold tracking-tight drop-shadow-md">{title}</h3>
          <p className="mt-1 text-sm font-medium text-white/90 drop-shadow">{subtitle}</p>
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-md">
            <Clock3 size={14} /> {meal.timing}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 bg-white p-4 sm:p-5">
        {showVeg && (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Leaf className="text-green-700" size={20} />
              <h4 className="text-base font-extrabold text-green-800">Vegetarian</h4>
            </div>
            <FoodList foods={items.veg} type="veg" />
          </div>
        )}
        {showNonVeg && (
          <div className={showVeg ? "border-t border-orange-100 pt-4" : ""}>
            <div className="mb-3 flex items-center gap-2">
              <Drumstick className="text-orange-600" size={20} />
              <h4 className="text-base font-extrabold text-orange-700">Non-Vegetarian</h4>
            </div>
            <FoodList foods={items.nonveg} type="nonveg" />
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default function TasteTrails() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const allRestaurants = areas.flatMap((area) =>
    area.restaurants.map((restaurant) => ({ ...restaurant, areaName: area.name }))
  );

  useEffect(() => {
    const slider = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 3500);
    return () => clearInterval(slider);
  }, []);

  const openRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowMap(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setSelectedRestaurant(null);
    setShowMap(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showVeg = selectedRestaurant?.foodType !== "nonveg";
  const showNonVeg = selectedRestaurant?.foodType !== "veg";

  // Show only meals that have menu items for the selected restaurant.
  const availableMeals = selectedRestaurant
    ? mealDetails.filter((meal) => {
        const items = selectedRestaurant.menu[meal.key];
        return items.veg.length > 0 || items.nonveg.length > 0;
      })
    : [];

  return (
    <>
      <Homenavbar />
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50 text-slate-900">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.img key={heroSlides[currentSlide].id} src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].name} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}
              onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.style.display = "none"; }}
              className="absolute inset-0 h-full w-full object-cover object-center" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          <motion.div key={`content-${currentSlide}`} initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 text-center md:px-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200/30 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <Utensils size={16} /> Taste Trails • Tenkasi
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Explore the Taste of <span className="mt-2 block text-lime-300">Tenkasi</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
              Discover popular food shops and restaurants in Tenkasi. Explore delicious dishes and enjoy the local food journey.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-white backdrop-blur-md">
              <ChefHat size={20} className="text-lime-300" /><span className="font-bold">{heroSlides[currentSlide].name}</span>
            </div>
          </motion.div>
          <button type="button" onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            aria-label="Previous food image" className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-green-700 sm:left-8">
            <ChevronLeft size={28} />
          </button>
          <button type="button" onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            aria-label="Next food image" className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-green-700 sm:right-8">
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {heroSlides.map((food, index) => <button key={food.id} type="button" onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "w-10 bg-lime-400" : "w-3 bg-white/70 hover:bg-white"}`}
              aria-label={`Show ${food.name}`} />)}
          </div>
        </section>

        <AnimatePresence mode="wait">
          {!selectedRestaurant ? (
            <motion.section key="restaurant-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              className="mx-auto min-h-screen max-w-7xl px-5 py-16 md:px-8">
              <div className="mb-14 text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-green-700">Discover Local Restaurants</p>
                <h2 className="mt-3 text-3xl font-extrabold text-green-950 sm:text-4xl">Explore Restaurants by Areas</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">Choose a restaurant and explore its breakfast, lunch and dinner menus.</p>
                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-lime-500" />
              </div>
              <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {allRestaurants.map((restaurant, index) => <motion.div key={restaurant.id}
                  variants={{ hidden: { opacity: 0, y: 45, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } } }}>
                  <RestaurantCard restaurant={restaurant} areaName={restaurant.areaName} index={index} onClick={() => openRestaurant(restaurant)} />
                </motion.div>)}
              </motion.div>
            </motion.section>
          ) : (
            <motion.section key="restaurant-details" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }} transition={{ duration: 0.45 }} className="mx-auto max-w-7xl px-5 py-12 md:px-8">
              <motion.button whileHover={{ x: -4 }} whileTap={{ scale: 0.96 }} onClick={goBack}
                className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-bold text-green-800 transition hover:bg-green-700 hover:text-white">
                <ArrowLeft size={19} /> Back to Restaurants
              </motion.button>
              <div className="grid items-stretch overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl md:grid-cols-2">
                <div className="h-72 overflow-hidden bg-green-100 md:h-[400px]">
                  <img src={selectedRestaurant.image} alt={selectedRestaurant.name}
                    onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.style.display = "none"; }}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-12">
                  <div className="flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                    <ChefHat size={17} /> Taste Trails • Tenkasi
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold text-green-950 sm:text-4xl">{selectedRestaurant.name}</h2>
                  <p className="mt-5 flex items-center gap-2 text-slate-600"><MapPin size={20} className="shrink-0 text-green-700" />{selectedRestaurant.location}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-green-800">Area</p>
                      <p className="mt-1 font-semibold text-slate-800">{selectedRestaurant.areaName}</p>
                    </div>
                    <div className="rounded-2xl bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-green-800">Opening hours</p>
                      <p className="mt-1 text-sm text-slate-700">{selectedRestaurant.timings}</p>
                    </div>
                    <div className="rounded-2xl bg-green-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-green-800">Price range</p>
                      <p className="mt-1 text-sm text-slate-700">{getRestaurantPriceRange(selectedRestaurant)}</p>
                      <p className="mt-1 text-xs text-slate-500">Approximate per-item prices</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">Food Availability</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {showVeg && <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-800"><Leaf size={14} /> Vegetarian</span>}
                        {showNonVeg && <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-800"><Drumstick size={14} /> Non-Vegetarian</span>}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 leading-8 text-slate-600">Explore the food options at {selectedRestaurant.name}. Discover the available meals and enjoy the taste of Tenkasi.</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {showVeg && <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800"><Leaf size={15} className="mr-1 inline" />Veg Menu</span>}
                    {showNonVeg && <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-800"><Drumstick size={15} className="mr-1 inline" />Non-Veg Menu</span>}
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full">
                <button type="button" onClick={() => setShowMap(true)} aria-expanded={showMap}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800">
                  <MapPin size={18} /> View Map
                </button>
                {showMap && <div className="mt-4 w-full overflow-hidden rounded-2xl border border-green-200 bg-white shadow-md">
                  <iframe title={`${selectedRestaurant.name} location map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(`${selectedRestaurant.name}, ${selectedRestaurant.location}`)}&output=embed`}
                    width="100%" height="520" style={{ border: 0, display: "block" }} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                  <p className="px-4 py-3 text-xs text-slate-500">Map location: {selectedRestaurant.name}, {selectedRestaurant.location}</p>
                </div>}
              </div>

              <div className="mb-10 mt-16 text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-green-700">Discover the Specialities</p>
                <h2 className="mt-3 text-3xl font-extrabold text-green-950 sm:text-4xl">Food Menu</h2>
                <p className="mt-3 text-slate-600">
                  {selectedRestaurant.name === "Salem RR Biriyani"
                    ? "Explore the available lunch and dinner menu"
                    : "Breakfast, lunch and dinner menus"}
                </p>
                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-lime-500" />
              </div>
              <div
                className={
                  availableMeals.length === 2
                    ? "mx-auto grid w-full max-w-5xl grid-cols-1 items-stretch justify-center gap-6 md:grid-cols-2"
                    : availableMeals.length === 1
                      ? "mx-auto grid w-full max-w-xl grid-cols-1 items-stretch justify-center gap-6"
                      : "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
                }
              >
                {availableMeals.map((meal) => (
                  <MealSection key={meal.key} meal={meal} restaurant={selectedRestaurant} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-800">
                  <ArrowLeft size={19} /> Explore Other Restaurants
                </motion.button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
