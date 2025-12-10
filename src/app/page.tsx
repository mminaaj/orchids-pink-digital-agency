"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

function FallingPetals() {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }>>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 12 + Math.random() * 14,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 h-[60vh] overflow-hidden pointer-events-none z-20">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: petal.size,
              height: petal.size,
              transform: `rotate(${petal.rotation}deg)`,
            }}
            className="animate-sway"
          >
            <path
              d="M12 2C8 2 4 6 4 10c0 4 4 8 8 12 4-4 8-8 8-12 0-4-4-8-8-8z"
              fill="#FFB6C1"
              opacity="0.7"
            />
            <path
              d="M12 4C9 4 6 7 6 10c0 3 3 6 6 9"
              fill="#FFC0CB"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: "Graphic Design",
    description: "Brand identities, logos, and visual assets that captivate your audience and elevate your brand presence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Website Design & Making",
    description: "Stunning, responsive websites that convert visitors into customers with seamless user experiences.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v2H4z" />
        <rect x="4" y="6" width="16" height="14" rx="1" />
        <path d="M10 11l5 3-5 3v-6z" />
      </svg>
    ),
    title: "Video Editing",
    description: "Eye-catching hoops and video materials that make your content impossible to ignore.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
        <path d="M12 12h.01" />
      </svg>
    ),
    title: "2D, 3D Animations & Ads",
    description: "Dynamic motion graphics and animated advertisements that bring your brand story to life.",
  },
];

const team = [
  {
    name: "Mina Jovanović",
    role: "Creative Director",
    image: "https://res.cloudinary.com/darwvvyct/image/upload/v1765404296/mina_jxvqcw.jpg",
    description: "With 2 years of design experience, Mina leads our creative vision. Her work has won multiple industrys and she's passionate about creating designs and ads that tell compelling stories.",
  },
  {
    name: "Una Jovanović",
    role: "Lead Designer",
    image: "https://res.cloudinary.com/darwvvyct/image/upload/v1765404458/IMG_1199_cqke2e.jpg",
    description: "Una brings brands to life through stunning visuals. Specializing in digital design and 2D and 3D animation, she transforms concepts into captivating visual experiences.",
  },
];

export default function Home() {
  const whatsappNumber = "+381 60 031 9696";
  const email = "bloom.digitalstudi0.@gmail.com";
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <FallingPetals />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-pink-100/40 to-transparent rounded-full blur-3xl translate-y-1/2" />
      </div>

      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E91E8C] to-[#FF6FB5] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Bloom Studio
            </span>
          </motion.div>
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#E91E8C] to-[#FF6FB5] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-pink-300/40 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-[#E91E8C] text-sm font-medium mb-6 border border-pink-200">
                Digital Creation Agency
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D2D2D] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              We Create
              <span className="block bg-gradient-to-r from-[#E91E8C] via-[#FF6FB5] to-[#E91E8C] bg-clip-text text-transparent">
                Digital Magic
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10"
            >
              Transforming ideas into stunning visual experiences. From brand identity to motion graphics, we bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/portfolio"
                className="px-8 py-3.5 bg-gradient-to-r from-[#E91E8C] to-[#FF6FB5] text-white rounded-full font-medium hover:shadow-xl hover:shadow-pink-300/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
              <button className="px-8 py-3.5 bg-white text-[#E91E8C] rounded-full font-medium border-2 border-pink-200 hover:border-[#E91E8C] transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-[#FFE4EE] rounded-full text-[#E91E8C] text-sm font-medium mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Our Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 border border-pink-100 hover:border-pink-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFE4EE] to-[#FFF5F7] flex items-center justify-center text-[#E91E8C] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-[#FFE4EE] rounded-full text-[#E91E8C] text-sm font-medium mb-4">
                The Creatives
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Meet Our Team
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 border border-pink-100 group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E91E8C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-[#E91E8C] to-[#FF6FB5] rounded-full" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                          {member.name}
                        </h3>
                        <span className="text-sm text-[#E91E8C] font-medium">{member.role}</span>
                      </div>
                    </div>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#E91E8C] to-[#FF6FB5] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border-[30px] border-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Ready to Create Something Beautiful?
                </h2>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                  Let&apos;s collaborate and bring your vision to life with stunning designs that make an impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => { setShowWhatsapp(!showWhatsapp); setShowEmail(false); }}
                    className="px-8 py-3.5 bg-white text-[#E91E8C] rounded-full font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {showWhatsapp ? whatsappNumber : "WhatsApp"}
                  </button>
                  <button
                    onClick={() => { setShowEmail(!showEmail); setShowWhatsapp(false); }}
                    className="px-8 py-3.5 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 border border-white/30"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {showEmail ? email : "Email Us"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-10 border-t border-pink-200 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E91E8C] to-[#FF6FB5] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#2D2D2D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Bloom Studio
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-pink-300" />
            <span className="text-sm text-[#6B6B6B]">
              bloom.digitalstudi0.@gmail.com
            </span>
          </div>
          <p className="text-sm text-[#6B6B6B]">
            © 2024 Bloom Studio. Crafted with love.
          </p>
        </div>
      </footer>
    </div>
  );
}