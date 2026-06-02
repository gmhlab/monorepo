"use client";

import { motion } from "motion/react";
import { Globe2, Languages, Sparkles, Users } from "lucide-react";

interface Country {
  name: string;
  lat: number;
  lon: number;
}

const COUNTRIES: Country[] = [
  { name: "Nepal", lat: 28, lon: 84 },
  { name: "Jordan", lat: 31, lon: 36 },
  { name: "Lebanon", lat: 34, lon: 36 },
  { name: "Liberia", lat: 6, lon: -9 },
  { name: "Uganda", lat: 1, lon: 32 },
  { name: "Ethiopia", lat: 9, lon: 40 },
  { name: "Kenya", lat: -1, lon: 38 },
  { name: "Zambia", lat: -13, lon: 28 },
  { name: "Peru", lat: -10, lon: -76 },
];

function project(lat: number, lon: number, cx = 200, cy = 200, r = 130) {
  const x = cx + (lon / 180) * r;
  const y = cy - (lat / 90) * (r * 0.78);
  return { x, y };
}

const STATS = [
  { value: "36", label: "Countries", icon: Globe2 },
  { value: "14", label: "Languages", icon: Languages },
  { value: "10K+", label: "Assessments", icon: Sparkles },
];

// Stock photos depicting mental health support and global cultural contexts.
// IDs reused from existing GMH homepage usage so we know they resolve.
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    alt: "Mental health worker in training",
    caption: "Training",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop",
    alt: "Cross-cultural collaboration",
    caption: "Field work",
  },
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop",
    alt: "Community mental health support session",
    caption: "Community care",
  },
];

export function EquipVisual() {
  return (
    <div className="flex flex-col gap-4">
      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-3">
        {PHOTOS.map((photo, i) => (
          <FloatingPhoto
            key={photo.caption}
            photo={photo}
            delay={0.2 + i * 0.12}
            bobAmplitude={i % 2 === 0 ? -6 : 6}
            bobDuration={5 + i}
          />
        ))}
      </div>

      {/* Animated globe */}
      <div className="relative aspect-video overflow-hidden rounded-xl isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-[#011f31] via-[#033C5A] to-[#0a4d6e]" />

        <motion.div
          aria-hidden
          className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-[#AA9868]/35 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#5A6C7D]/35 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#AA9868]/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(170, 152, 104, 0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-[88%] h-[88%] max-w-[520px]">
            <defs>
              <radialGradient id="equip-globe-fill" cx="50%" cy="38%" r="58%">
                <stop offset="0%" stopColor="rgba(170,152,104,0.22)" />
                <stop offset="55%" stopColor="rgba(3,60,90,0.0)" />
                <stop offset="100%" stopColor="rgba(3,60,90,0.55)" />
              </radialGradient>
              <linearGradient id="equip-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(170,152,104,0)" />
                <stop offset="50%" stopColor="rgba(170,152,104,0.95)" />
                <stop offset="100%" stopColor="rgba(170,152,104,0)" />
              </linearGradient>
              <radialGradient id="equip-hub" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5E6BE" />
                <stop offset="100%" stopColor="#AA9868" />
              </radialGradient>
            </defs>

            <motion.g
              style={{ transformOrigin: "200px 200px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="200"
                cy="200"
                r="178"
                fill="none"
                stroke="rgba(170,152,104,0.3)"
                strokeWidth="1"
                strokeDasharray="2 9"
              />
            </motion.g>

            <motion.g
              style={{ transformOrigin: "200px 200px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="200"
                cy="200"
                r="158"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="1 7"
              />
            </motion.g>

            <circle
              cx="200"
              cy="200"
              r="130"
              fill="url(#equip-globe-fill)"
              stroke="rgba(170,152,104,0.5)"
              strokeWidth="1.25"
            />

            {[25, 55, 85, 115].map((ry, i) => (
              <ellipse
                key={`lat-${i}`}
                cx="200"
                cy="200"
                rx="130"
                ry={ry}
                fill="none"
                stroke="rgba(170,152,104,0.18)"
                strokeWidth="0.75"
              />
            ))}

            {[20, 50, 80, 110].map((rx, i) => (
              <ellipse
                key={`lon-${i}`}
                cx="200"
                cy="200"
                rx={rx}
                ry="130"
                fill="none"
                stroke="rgba(170,152,104,0.16)"
                strokeWidth="0.75"
              />
            ))}

            {COUNTRIES.map((c, i) => {
              const p = project(c.lat, c.lon);
              const mx = (200 + p.x) / 2;
              const my = (200 + p.y) / 2 - 32;
              return (
                <motion.path
                  key={`arc-${c.name}`}
                  d={`M 200 200 Q ${mx} ${my} ${p.x} ${p.y}`}
                  fill="none"
                  stroke="url(#equip-arc)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {COUNTRIES.map((c, i) => {
              const p = project(c.lat, c.lon);
              return (
                <g key={`pin-${c.name}`}>
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r="3"
                    fill="rgba(170,152,104,0.55)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 5, 5], opacity: [0, 0.55, 0] }}
                    transition={{
                      delay: 1 + i * 0.18,
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  />
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r="4.5"
                    fill="#AA9868"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="0.6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 220,
                    }}
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  />
                </g>
              );
            })}

            <g>
              <motion.circle
                cx="200"
                cy="200"
                r="26"
                fill="rgba(170,152,104,0.25)"
                animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0, 0.55] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              <circle
                cx="200"
                cy="200"
                r="17"
                fill="url(#equip-hub)"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.5"
              />
              <text
                x="200"
                y="204"
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
                fontSize="9.5"
                fontWeight="800"
                fill="#033C5A"
                letterSpacing="0.7"
              >
                EQUIP
              </text>
            </g>
          </svg>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#033C5A]/40 ring-1 ring-[#AA9868]/40 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Users className="w-3.5 h-3.5 text-[#AA9868]" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/85 font-medium">
            WHO / UNICEF · 794 programs
          </span>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="backdrop-blur-md bg-white/10 ring-1 ring-white/25 rounded-2xl px-3 py-8 shadow-xl flex items-center gap-3 group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15, duration: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -2 }}
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#AA9868]/20 ring-1 ring-[#AA9868]/40 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-[#F5E6BE]" />
            </div>
            <div className="leading-tight">
              <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-[12px] uppercase tracking-[0.12em] text-white/70">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface FloatingPhotoProps {
  photo: { src: string; alt: string; caption: string };
  delay: number;
  bobAmplitude: number;
  bobDuration: number;
}

function FloatingPhoto({
  photo,
  delay,
  bobAmplitude,
  bobDuration,
}: FloatingPhotoProps) {
  return (
    <motion.div
      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/25"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.06, zIndex: 10 }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, bobAmplitude, 0] }}
        transition={{ duration: bobDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#011f31]/85 via-[#011f31]/40 to-transparent px-2.5 py-1.5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/85 font-medium">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
}
