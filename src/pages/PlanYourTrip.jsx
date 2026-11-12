import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

// ---------------- TRIP TYPE OPTIONS ----------------

const tripTypes = [
  {
    id: "couple",
    title: "Couple Trip",
    description: "A relaxed getaway for two.",
    image: "/images/couple trip.jpg",
  },
  {
    id: "family",
    title: "Family Trip",
    description: "A fun and comfortable family outing.",
    image: "/images/family trip.jpg",
  },
  {
    id: "friends",
    title: "Friends Trip",
    description: "Explore Tenkasi together with friends.",
    image: "public/images/friends trip.png",
  },
  {
    id: "office",
    title: "Office Trip",
    description: "Enjoy a refreshing trip with your colleagues.",
    image: "/images/office trip.jpg",
  },
  {
    id: "education",
    title: "Education Trip",
    description: "Plan a memorable educational tour.",
    image: "/images/education trip.jpg",
  },
  {
    id: "solo",
    title: "Solo Trip",
    description: "Explore Tenkasi at your own pace.",
    image: "/images/solo trip.jpg",
  },
];

// ---------------- BUDGET OPTIONS ----------------

const budgetOptions = [
  {
    id: "normal",
    title: "Normal Budget",
    range: "Normal Range",
    amount: "₹2,000–₹5,000",
    description: "A pocket-friendly trip with essential comforts.",
    image: "/images/Normal trip.jpg.png",
    stayImage: "/images/normal stay.png",
    foodImage: "/images/normal food.png",
    transportImage: "/images/normal transport.png",
    accent: "green",
    stay: "Budget hotel or simple homestay",
    food: "Local restaurants and regular meals",
    transport: "Shared transport or budget cab",
    included: [
      "Basic accommodation",
      "Local food options",
      "Shared or budget transport",
      "Visit to selected Tenkasi places",
    ],
    excluded: [
      "Luxury resort or premium room",
      "Private cab for the entire trip",
      "Premium dining and special activities",
    ],
    note: "Best for travellers who want to explore Tenkasi while keeping expenses low.",
  },
  {
    id: "medium",
    title: "Medium Budget",
    range: "Medium Range",
    amount: "₹5,000–₹10,000",
    description: "A comfortable trip with better stay and travel options.",
    image: "/images/Medium trip.jpg.png",
    stayImage: "/images/medium stay.png",
    foodImage: "/images/medium food.png",
    transportImage: "/images/medium transport.png",
    accent: "blue",
    stay: "Comfortable hotel or quality homestay",
    food: "A mix of local restaurants and better dining",
    transport: "Private cab for selected trips",
    included: [
      "Comfortable accommodation",
      "Better dining options",
      "Private cab for selected travel",
      "Visit to selected Tenkasi places",
    ],
    excluded: [
      "Luxury resort or premium suite",
      "High-end dining throughout the trip",
      "Extra activities not included in the plan",
    ],
    note: "A good balance of comfort, convenience and cost.",
  },
  {
    id: "luxury",
    title: "Luxury Budget",
    range: "Luxury Range",
    amount: "₹10,000+",
    description: "A premium trip with upgraded comfort and services.",
    image: "/images/Luxury trip.jpg.png",
    stayImage: "public/images/luxury-stay (1).jpg",
    foodImage: "public/images/luxury-food(1).jpg",
    transportImage: "public/images/luxury-transport (1).jpg",
    accent: "purple",
    stay: "Premium resort or luxury accommodation",
    food: "Premium dining and curated food experiences",
    transport: "Private cab for a more convenient trip",
    included: [
      "Premium accommodation",
      "Premium dining options",
      "Private transport",
      "Visit to selected Tenkasi places",
      "Extra comfort and personalized planning",
    ],
    excluded: [
      "Personal shopping expenses",
      "Activities or services not listed in the final plan",
    ],
    note: "Best for travellers who prefer premium stays, private travel and extra comfort.",
  },
];

// Add the tourism team WhatsApp number here (country code + number, digits only).
const WHATSAPP_NUMBER = "919342638861";

// ---------------- ANIMATION ----------------

const cardAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const budgetAccent = {
  green: {
    border: "border-green-500",
    background: "bg-green-50",
    badge: "bg-green-100 text-green-800",
    heading: "text-green-800",
  },
  blue: {
    border: "border-blue-500",
    background: "bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    heading: "text-blue-800",
  },
  purple: {
    border: "border-purple-500",
    background: "bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
    heading: "text-purple-800",
  },
};

// ---------------- MAIN COMPONENT ----------------

export default function PlanYourTrip() {
  const [step, setStep] = useState(0);

  const [tripType, setTripType] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetDetailsOpen, setBudgetDetailsOpen] = useState(false);
  const [finalStepOpen, setFinalStepOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelDate: "",
    persons: "2",
    message: "",
  });

  // Selected trip type details
  const selectedTripType = useMemo(
    () => tripTypes.find((option) => option.id === tripType),
    [tripType]
  );

  // Selected budget details
  const selectedBudget = useMemo(
    () => budgetOptions.find((option) => option.id === budget),
    [budget]
  );

  // Select trip type and move to budget
  const handleTripTypeSelect = (tripId) => {
    setTripType(tripId);
    setStep(1);
  };

  // Open WhatsApp with the selected trip type details
  const handleTripWhatsApp = (option) => {
    const message = [
      "Hello! I am interested in this Tenkasi trip.",
      "",
      `Trip Type: ${option.title}`,
      `Description: ${option.description}`,
      "",
      "Please share the package details and itinerary."
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Select budget and show its details
  const handleBudgetSelect = (budgetId) => {
    setBudget(budgetId);
    setBudgetDetailsOpen(true);
  };

  // Go back to trip type
  const handlePrevious = () => {
    if (enquiryOpen) {
      setEnquiryOpen(false);
      setEnquirySubmitted(false);
      return;
    }
    if (finalStepOpen) {
      setFinalStepOpen(false);
      return;
    }
    if (budgetDetailsOpen) {
      setBudgetDetailsOpen(false);
      return;
    }
    setStep(0);
    setBudget("");
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleWhatsAppSend = () => {
    if (!selectedTripType || !selectedBudget) return;
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Add the tourism team's WhatsApp number in WHATSAPP_NUMBER at the top of this file.");
      return;
    }
    const message = [
      "Hello! I am interested in a Tenkasi trip.",
      "",
      `Trip Type: ${selectedTripType.title}`,
      `Budget: ${selectedBudget.title}`,
      `Budget Range: ${selectedBudget.amount} per person`,
      "",
      "Please share more details about this package.",
    ].join("\\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    const enquiry = {
      ...formData,
      tripType: selectedTripType?.title || "",
      budget: selectedBudget?.title || "",
      budgetRange: selectedBudget?.amount || "",
      submittedAt: new Date().toISOString(),
    };
    // Front-end demo: saved in this browser only. Backend/email integration is needed
    // before the tourism team can receive enquiries.
    const saved = JSON.parse(
      window.localStorage.getItem("tenkasiTripEnquiries") || "[]"
    );
    window.localStorage.setItem(
      "tenkasiTripEnquiries",
      JSON.stringify([...saved, enquiry])
    );
    setEnquirySubmitted(true);
  };

  // Change selected budget
  const handleChangeBudget = () => {
    setBudgetDetailsOpen(false);
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#f7f8ef] bg-cover bg-center bg-fixed text-slate-900"
      style={{
        backgroundImage: "url('/images/tenkasi background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay animation */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-sky-100/10 via-white/10 to-emerald-100/20"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-5 md:py-12">

        {/* ---------------- HEADER ---------------- */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="font-bold uppercase tracking-[0.2em] text-green-700">
            Plan Your Trip • Tenkasi
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            Your trip,
            <span className="mt-2 block italic text-[#d5edbd]">
              Your way
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose your travel style and budget, then create your Tenkasi itinerary.
          </p>
        </motion.header>

        {/* ---------------- TWO STEP NAVIGATION ---------------- */}

        
        {/* ---------------- MAIN CONTENT ---------------- */}

        <div className="mt-6 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-md sm:p-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={step + (budgetDetailsOpen ? "-details" : "")}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.28 }}
            >

              {/* ==========================================
                  STEP 1 — TRIP TYPE
              ========================================== */}

              {step === 0 && (
                <>
                  <div>
                    <h2 className="text-2xl font-bold">
                      1. Who are you travelling with?
                    </h2>

                    <p className="mt-2 text-slate-600">
                      Choose your preferred trip type to continue.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

                    {tripTypes.map((option, index) => (
                      <motion.div
                        key={option.id}
                        whileHover={{ y: -5 }}
                        initial={cardAnimation.initial}
                        animate={cardAnimation.animate}
                        transition={{ delay: index * 0.07 }}
                        className={`overflow-hidden rounded-2xl border transition ${
                          tripType === option.id
                            ? "border-green-700 bg-green-50 ring-2 ring-green-200"
                            : "border-slate-200 bg-white hover:border-green-300 hover:shadow-lg"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handleTripTypeSelect(option.id)}
                          className="block w-full text-left"
                        >
                          <div className="h-48 w-full overflow-hidden bg-green-50 sm:h-52">
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              src={option.image}
                              alt={option.title}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="px-4 pt-4">
                            <h3 className="text-lg font-bold">{option.title}</h3>
                            <p className="mt-1 text-sm text-slate-600">
                              {option.description}
                            </p>
                          </div>
                        </button>

                        <div className="flex items-center justify-between gap-2 px-4 pb-4 pt-3">
                          <button
                            type="button"
                            onClick={() => handleTripTypeSelect(option.id)}
                            className="text-sm font-bold text-green-700 transition hover:text-green-900"
                          >
                            Select Trip →
                          </button>

                          <motion.button
                            type="button"
                            onClick={() => handleTripWhatsApp(option)}
                            aria-label={`Ask about ${option.title} on WhatsApp`}
                            title={`Ask about ${option.title} on WhatsApp`}
                            animate={{ y: [0, -4, 0], scale: [1, 1.04, 1] }}
                            transition={{
                              y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                              scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                            }}
                            whileHover={{ scale: 1.12, y: -2 }}
                            whileTap={{ scale: 0.92 }}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-green-200 transition-colors hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                          >
                            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                              <path d="M16.02 3.2A12.65 12.65 0 0 0 5.1 22.22L3.4 28.4l6.33-1.66A12.65 12.65 0 1 0 16.02 3.2Zm0 22.98c-1.94 0-3.84-.52-5.5-1.51l-.4-.24-3.76.99 1-3.66-.26-.42a10.27 10.27 0 1 1 8.92 4.84Zm5.64-7.7c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}

                  </div>
                </>
              )}

              {/* ==========================================
                  STEP 2 — BUDGET
              ========================================== */}

              {step === 1 && !finalStepOpen && (
                <>

                  {!budgetDetailsOpen ? (

                    /* BUDGET SELECTION */

                    <>
                      <div>
                        <h2 className="text-2xl font-bold">
                          2. Choose your budget
                        </h2>

                        <p className="mt-2 text-slate-600">
                          Select a budget to view the details of your Tenkasi trip.
                        </p>

                        {selectedTripType && (
                          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
                            Selected Trip: {selectedTripType.title}
                          </div>
                        )}
                      </div>

                      <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">

                        {budgetOptions.map((option, index) => (
                          <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => handleBudgetSelect(option.id)}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={cardAnimation.initial}
                            animate={cardAnimation.animate}
                            transition={{ delay: index * 0.08 }}
                            className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition hover:border-green-300 hover:shadow-lg ${
                              budget === option.id
                                ? "border-green-600 ring-2 ring-green-100"
                                : "border-slate-200"
                            }`}
                          >

                            <div className="h-[240px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[300px]">

                              <motion.img
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.3 }}
                                src={option.image}
                                alt={option.title}
                                className="h-full w-full object-cover"
                              />

                            </div>

                            <div className="flex flex-1 flex-col p-4">

                              <p className="font-semibold text-green-700">
                                {option.range}
                              </p>

                              <h3 className="mt-2 text-2xl font-extrabold">
                                {option.amount}
                              </h3>

                              <p className="mt-2 text-sm text-slate-600">
                                {option.description}
                              </p>

                              <p className="mt-auto pt-3 text-sm font-semibold text-green-700">
                                View budget details →
                              </p>

                            </div>

                          </motion.button>
                        ))}

                      </div>
                    </>

                  ) : (

                    /* SELECTED BUDGET DETAILS */

                    <AnimatePresence mode="wait">

                      {selectedBudget && (
                        <motion.section
                          key={selectedBudget.id}
                          initial={{ opacity: 0, x: 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -25 }}
                          transition={{ duration: 0.3 }}
                        >

                          <button
                            type="button"
                            onClick={handleChangeBudget}
                            className="mb-5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            ← Back to budgets
                          </button>

                          {/* Selected budget overview */}

                          <div
                            className={`rounded-3xl border ${
                              budgetAccent[selectedBudget.accent].border
                            } ${
                              budgetAccent[selectedBudget.accent].background
                            } p-5 sm:p-7`}
                          >

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                              <div>

                                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                  Your selected plan
                                </p>

                                <h3 className="mt-1 text-2xl font-extrabold">
                                  {selectedBudget.title}
                                </h3>

                                <p className="mt-1 text-slate-600">
                                  {selectedBudget.note}
                                </p>

                              </div>

                              <span
                                className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${
                                  budgetAccent[selectedBudget.accent].badge
                                }`}
                              >
                                {selectedBudget.amount} / person
                              </span>

                            </div>

                            {/* Accommodation, Food and Transport */}

                            <div className="mt-6 grid gap-4 md:grid-cols-3">

                              {[
                                {
                                  title: "Accommodation",
                                  image: selectedBudget.stayImage,
                                  description: selectedBudget.stay,
                                },
                                {
                                  title: "Food",
                                  image: selectedBudget.foodImage,
                                  description: selectedBudget.food,
                                },
                                {
                                  title: "Transport",
                                  image: selectedBudget.transportImage,
                                  description: selectedBudget.transport,
                                },
                              ].map((item) => (

                                <div
                                  key={item.title}
                                  className="rounded-2xl bg-white p-4 shadow-sm"
                                >

                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-36 w-full rounded-xl object-cover"
                                  />

                                  <h4 className="mt-3 font-bold">
                                    {item.title}
                                  </h4>

                                  <p className="mt-1 text-sm text-slate-600">
                                    {item.description}
                                  </p>

                                </div>

                              ))}

                            </div>

                            {/* Included and Excluded */}

                            <div className="mt-6 grid gap-5 md:grid-cols-2">

                              <div className="rounded-2xl bg-white p-5">

                                <h4
                                  className={`text-lg font-bold ${
                                    budgetAccent[selectedBudget.accent].heading
                                  }`}
                                >
                                  Included in this budget
                                </h4>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                  {selectedBudget.included.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-green-600">
                                        ✓
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}

                                </ul>

                              </div>

                              <div className="rounded-2xl bg-white p-5">

                                <h4 className="text-lg font-bold text-slate-800">
                                  Not included
                                </h4>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                  {selectedBudget.excluded.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-rose-500">
                                        ×
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}

                                </ul>

                              </div>

                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                              Budget ranges are indicative per-person estimates.
                              Final cost may change based on travel date, number
                              of travellers, availability and selected services.
                            </p>

                          </div>

                        </motion.section>
                      )}

                    </AnimatePresence>

                  )}

                </>
              )}

            </motion.div>

          </AnimatePresence>


          {finalStepOpen && (
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2"
            >
              <div className="text-center">
                <p className="font-bold uppercase tracking-[0.18em] text-green-700">Final Step</p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Your Trip Plan is Ready!</h2>
                <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                  Review your selected trip and send your plan through WhatsApp or an enquiry form.
                </p>
              </div>

              <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-green-100 bg-green-50/80 p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Trip Type</p>
                    <p className="mt-1 text-xl font-bold text-green-800">{selectedTripType?.title}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Selected Budget</p>
                    <p className="mt-1 text-xl font-bold text-green-800">{selectedBudget?.title}</p>
                    <p className="text-sm text-slate-600">{selectedBudget?.amount} / person</p>
                  </div>
                </div>

                {!enquiryOpen ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <button type="button" onClick={handleWhatsAppSend}
                      className="rounded-xl bg-green-700 px-5 py-4 font-bold text-white shadow-md transition hover:bg-green-800">
                      Send to WhatsApp
                    </button>
                    <button type="button" onClick={() => { setEnquiryOpen(true); setEnquirySubmitted(false); }}
                      className="rounded-xl border-2 border-green-700 bg-white px-5 py-4 font-bold text-green-800 transition hover:bg-green-50">
                      Enquiry Form
                    </button>
                  </div>
                ) : enquirySubmitted ? (
                  <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow-sm">
                    <div className="text-3xl text-green-700">✓</div>
                    <h3 className="mt-2 text-xl font-bold text-green-800">Enquiry saved in this browser!</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      This is a front-end demo. Connect a backend or email service for the tourism team to receive enquiries.
                    </p>
                    <button type="button" onClick={() => { setEnquiryOpen(false); setEnquirySubmitted(false); }}
                      className="mt-4 rounded-full bg-green-700 px-5 py-2.5 font-semibold text-white hover:bg-green-800">
                      Back to send options
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="mt-6 space-y-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Trip Enquiry Form</h3>
                      <p className="mt-1 text-sm text-slate-600">Share your details so the tourism team can follow up.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Full Name *
                        <input name="name" value={formData.name} onChange={handleFormChange} required
                          placeholder="Enter your name"
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Mobile Number *
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange}
                          required pattern="[0-9+\\- ]{10,15}" title="Enter a valid phone number"
                          placeholder="Enter mobile number"
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Travel Date *
                        <input type="date" name="travelDate" value={formData.travelDate} onChange={handleFormChange}
                          min={new Date().toISOString().split("T")[0]} required
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Number of Persons *
                        <input type="number" name="persons" value={formData.persons} onChange={handleFormChange}
                          min="1" max="100" required
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                      </label>
                    </div>
                    <label className="block text-sm font-semibold text-slate-700">
                      Additional Message
                      <textarea name="message" value={formData.message} onChange={handleFormChange} rows="3"
                        placeholder="Any special requirements?"
                        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <button type="button" onClick={() => setEnquiryOpen(false)}
                        className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                        Cancel
                      </button>
                      <button type="submit"
                        className="rounded-full bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800">
                        Submit Enquiry
                      </button>
                    </div>
                    <p className="text-xs leading-5 text-slate-500">
                      Demo: this form saves data in this browser only; it does not send it to the tourism team yet.
                    </p>
                  </form>
                )}
              </div>
            </motion.section>
          )}

          {/* ---------------- BOTTOM NAVIGATION ---------------- */}

          <div className="mt-8 flex justify-between gap-3 border-t border-slate-100 pt-5">

            <button
              type="button"
              onClick={handlePrevious}
              disabled={step === 0 && !budgetDetailsOpen}
              className="rounded-full bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Back
            </button>

            {step === 1 && budgetDetailsOpen && !finalStepOpen && (
              <div className="flex flex-wrap justify-end gap-3">
                <button type="button" onClick={handleChangeBudget}
                  className="rounded-full border border-green-700 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-50">
                  Change Budget
                </button>
                <button type="button" onClick={() => setFinalStepOpen(true)}
                  className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
                  Continue to Send Plan →
                </button>
              </div>
            )}
            {step === 1 && finalStepOpen && !enquiryOpen && (
              <button type="button" onClick={() => setFinalStepOpen(false)}
                className="rounded-full border border-green-700 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-50">
                Back to Budget Details
              </button>
            )}

          </div>

        </div>

      </section>

    </main>
    <Footer></Footer>
    </>
  );
}