import React from "react";

interface CardIllustrationProps {
  cardId?: string;
  cardNameEn: string;
  type: "MEANS" | "CLUE";
  lang?: "vi" | "en";
}

export const CardIllustration: React.FC<CardIllustrationProps> = ({
  cardNameEn,
  type,
}) => {
  const isMeans = type === "MEANS";
  const name = cardNameEn.toLowerCase().trim();

  // =========================================================================
  // --- MEANS CARDS (HUNG KHÍ) ---
  // =========================================================================
  if (isMeans) {
    // 1. Syringe / Injection
    if (name.includes("inject") || name.includes("tiêm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Angled Syringe Needle */}
          <line x1="20" y1="48" x2="35" y2="35" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          {/* Glass Barrel */}
          <rect x="35" y="24" width="34" height="14" rx="2" transform="rotate(-40 52 31)" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Amber Toxic Medicine Inside */}
          <rect x="38" y="26" width="22" height="10" rx="1" transform="rotate(-40 52 31)" fill="#f59e0b" fillOpacity="0.85" />
          {/* Measurement Ticks */}
          <line x1="48" y1="23" x2="48" y2="27" stroke="#ffffff" strokeWidth="1" transform="rotate(-40 52 31)" />
          <line x1="53" y1="23" x2="53" y2="27" stroke="#ffffff" strokeWidth="1" transform="rotate(-40 52 31)" />
          {/* Plunger */}
          <line x1="62" y1="12" x2="78" y2="-1" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <rect x="74" y="-4" width="10" height="4" rx="1" transform="rotate(-40 79 -2)" fill="#94a3b8" />
        </svg>
      );
    }

    // 2. Radiation / Radioactive
    if (name.includes("radiat") || name.includes("phóng xạ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Yellow Hazard Triangle */}
          <polygon points="50,10 82,54 18,54" fill="#eab308" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
          {/* Inner Trefoil Symbol */}
          <circle cx="50" cy="38" r="4" fill="#0f172a" />
          <path d="M50 38 L43 23 A15 15 0 0 1 57 23 Z" fill="#0f172a" />
          <path d="M50 38 L63 46 A15 15 0 0 1 50 53 Z" fill="#0f172a" />
          <path d="M50 38 L37 46 A15 15 0 0 0 50 53 Z" fill="#0f172a" />
        </svg>
      );
    }

    // 3. Crutch / Gậy chống
    if (name.includes("crutch") || name.includes("gậy chống")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Main Pole */}
          <line x1="28" y1="54" x2="72" y2="12" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" />
          {/* Padded Top Bar */}
          <rect x="62" y="10" width="22" height="6" rx="2" transform="rotate(-45 73 13)" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          {/* Arm Grip Handle */}
          <rect x="46" y="28" width="14" height="5" rx="1.5" transform="rotate(-45 53 30.5)" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          {/* Rubber Base Tip */}
          <circle cx="28" cy="54" r="3" fill="#334155" />
        </svg>
      );
    }

    // 4. Brick / Viên gạch 3D
    if (name.includes("brick") || name.includes("gạch")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Top Face */}
          <polygon points="26,30 58,16 80,24 48,38" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />
          {/* Left Front Face */}
          <polygon points="26,30 48,38 48,52 26,44" fill="#c2410c" stroke="#9a3412" strokeWidth="1.5" />
          {/* Right Front Face */}
          <polygon points="48,38 80,24 80,38 48,52" fill="#9a3412" stroke="#7c2d12" strokeWidth="1.5" />
        </svg>
      );
    }

    // 5. Axe / Rìu
    if (name.includes("axe") || name.includes("rìu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Wooden Handle */}
          <line x1="26" y1="54" x2="72" y2="14" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
          {/* Sharp Steel Axe Head */}
          <path d="M64 12 C78 6 86 16 82 28 C74 24 68 22 62 23 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M65 14 L80 20 L66 22 Z" fill="#cbd5e1" />
        </svg>
      );
    }

    // 6. Cleaver / Dao phay
    if (name.includes("cleaver") || name.includes("phay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Handle with rivets */}
          <path d="M18 44 L38 32 L41 37 L21 49 Z" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <circle cx="26" cy="42" r="1.5" fill="#facc15" />
          <circle cx="34" cy="37" r="1.5" fill="#facc15" />
          {/* Rectangular Heavy Blade */}
          <path d="M39 33 L82 16 C84 26 82 46 43 40 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Hanging Hole */}
          <circle cx="75" cy="22" r="2.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    }

    // 7. Kitchen Knife / Dao bếp
    if (name.includes("kitchen knife") || (name.includes("knife") && !name.includes("folding")) || name.includes("dao bếp")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Dark Handle */}
          <rect x="18" y="38" width="22" height="7" rx="2" transform="rotate(-25 29 41.5)" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <circle cx="24" cy="44" r="1.5" fill="#ca8a04" />
          <circle cx="32" cy="40" r="1.5" fill="#ca8a04" />
          {/* Broad Curved Blade */}
          <path d="M37 38 L84 18 C80 32 60 40 40 44 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="39" y1="39" x2="80" y2="20" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );
    }

    // 8. Dagger / Dao găm
    if (name.includes("dagger") || name.includes("găm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="22" y1="50" x2="38" y2="38" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <line x1="32" y1="46" x2="42" y2="34" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
          {/* Symmetrical Sharp Blade */}
          <polygon points="38,38 78,16 80,18 42,42" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="40" y1="40" x2="79" y2="17" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    }

    // 9. Sniper Rifle / Súng bắn tỉa
    if (name.includes("sniper") || name.includes("bắn tỉa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Stock & Body */}
          <rect x="14" y="32" width="22" height="7" rx="1.5" fill="#334155" stroke="#1e293b" strokeWidth="1" />
          <rect x="36" y="31" width="52" height="4.5" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          {/* Long Barrel Tip */}
          <rect x="88" y="31.5" width="4" height="3.5" fill="#0f172a" />
          {/* Optical Scope */}
          <rect x="38" y="24" width="24" height="4.5" rx="1" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <line x1="42" y1="28.5" x2="42" y2="31" stroke="#0f172a" strokeWidth="2" />
          <line x1="58" y1="28.5" x2="58" y2="31" stroke="#0f172a" strokeWidth="2" />
          {/* Bipod legs */}
          <line x1="72" y1="35.5" x2="68" y2="48" stroke="#1e293b" strokeWidth="2" />
          <line x1="74" y1="35.5" x2="80" y2="48" stroke="#1e293b" strokeWidth="2" />
        </svg>
      );
    }

    // 10. Cyanide / Poison Pill / Bottle
    if (name.includes("cyanide") || name.includes("xyanua") || name.includes("arsenic") || name.includes("asen") || name.includes("overdose") || name.includes("thuốc ngủ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Poison Bottle */}
          <rect x="34" y="20" width="26" height="34" rx="4" fill="#065f46" stroke="#047857" strokeWidth="1.5" />
          <rect x="41" y="14" width="12" height="6" fill="#ca8a04" rx="1" />
          {/* Skull on Label */}
          <rect x="38" y="28" width="18" height="18" fill="#f8fafc" rx="2" />
          <circle cx="47" cy="35" r="3.5" fill="#0f172a" />
          <circle cx="45.5" cy="34" r="0.8" fill="#ffffff" />
          <circle cx="48.5" cy="34" r="0.8" fill="#ffffff" />
          {/* Loose Capsule */}
          <rect x="66" y="38" width="16" height="7" rx="3.5" transform="rotate(30 74 41.5)" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="66" y="38" width="8" height="7" rx="3.5" transform="rotate(30 74 41.5)" fill="#f8fafc" />
        </svg>
      );
    }

    // 11. Explosives / TNT
    if (name.includes("explosive") || name.includes("tnt") || name.includes("thuốc nổ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Bundle of 3 TNT Sticks */}
          <rect x="25" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="43" y="18" width="14" height="36" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="61" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          {/* Black Strap */}
          <rect x="22" y="32" width="56" height="8" fill="#0f172a" />
          <text x="32" y="38" fill="#facc15" fontSize="6" fontWeight="bold" fontFamily="sans-serif">TNT</text>
          {/* Fuse & Spark */}
          <path d="M50 18 Q45 10 50 6" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="50" cy="6" r="3" fill="#f59e0b" />
          <circle cx="50" cy="6" r="1.5" fill="#fef08a" />
        </svg>
      );
    }

    // 12. Venomous Snake / Rắn độc
    if (name.includes("snake") || name.includes("rắn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* S-curve Snake Body */}
          <path d="M22 46 Q34 22 50 38 T76 22" fill="none" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" />
          <path d="M22 46 Q34 22 50 38 T76 22" fill="none" stroke="#86efac" strokeWidth="2" strokeDasharray="3 4" strokeLinecap="round" />
          {/* Head & Glowing Red Eye */}
          <circle cx="78" cy="21" r="5" fill="#15803d" />
          <circle cx="79" cy="20" r="1.5" fill="#ef4444" />
          {/* Forked Tongue */}
          <path d="M83 20 L89 18 M83 20 L89 22" stroke="#dc2626" strokeWidth="1.2" />
        </svg>
      );
    }

    // 13. Venomous Spider / Nhện độc
    if (name.includes("spider") || name.includes("nhện")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Abdomen with Hourglass Mark */}
          <ellipse cx="50" cy="36" rx="9" ry="11" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <polygon points="48,32 52,32 50,36" fill="#dc2626" />
          <polygon points="50,36 48,40 52,40" fill="#dc2626" />
          {/* Head */}
          <circle cx="50" cy="22" r="5" fill="#0f172a" />
          {/* 8 Curved Spidery Legs */}
          <path d="M44 26 Q28 14 20 26 M44 32 Q24 28 18 36 M44 38 Q26 44 22 50 M44 42 Q30 52 28 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M56 26 Q72 14 80 26 M56 32 Q76 28 82 36 M56 38 Q74 44 78 50 M56 42 Q70 52 72 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // 14. Sharpened Fan / Quạt sắc
    if (name.includes("fan") || name.includes("quạt")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M50 56 L16 26 L24 18 L50 56 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 56 L26 16 L36 11 L50 56 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 56 L42 10 L52 8 L50 56 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 56 L58 10 L68 15 L50 56 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 56 L74 16 L84 26 L50 56 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="50" cy="56" r="4" fill="#ca8a04" />
          <path d="M16 26 Q50 4 84 26" fill="none" stroke="#38bdf8" strokeWidth="2" />
        </svg>
      );
    }

    // 15. Katana / Sword / Kiếm
    if (name.includes("sword") || name.includes("katana") || name.includes("kiếm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="16" y1="52" x2="26" y2="42" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <circle cx="28" cy="40" r="5" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
          <path d="M28 40 Q54 28 84 14" fill="none" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 40 Q54 28 84 14" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    }

    // 16. Chainsaw / Máy cưa
    if (name.includes("chainsaw") || name.includes("máy cưa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="20" y="24" width="30" height="22" rx="3" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <rect x="50" y="28" width="36" height="12" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
          <line x1="50" y1="28" x2="86" y2="28" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="50" y1="40" x2="86" y2="40" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M22 24 L14 16 L32 16" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }

    // 17. Baseball Bat / Gậy bóng chày
    if (name.includes("bat") || name.includes("bóng chày")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="20" y1="52" x2="30" y2="42" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <line x1="28" y1="44" x2="80" y2="14" stroke="#d97706" strokeWidth="9" strokeLinecap="round" />
          <line x1="30" y1="42" x2="78" y2="15" stroke="#fef3c7" strokeWidth="2" />
        </svg>
      );
    }

    // 18. Hammer / Sledgehammer / Búa
    if (name.includes("hammer") || name.includes("búa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="25" y1="54" x2="65" y2="20" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <rect x="54" y="12" width="26" height="14" rx="2" transform="rotate(-40 67 19)" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
        </svg>
      );
    }

    // 19. Scissors / Kéo sắc
    if (name.includes("scissors") || name.includes("kéo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="28" cy="48" r="8" fill="none" stroke="#dc2626" strokeWidth="3" />
          <circle cx="72" cy="48" r="8" fill="none" stroke="#dc2626" strokeWidth="3" />
          <line x1="32" y1="42" x2="68" y2="16" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="42" x2="32" y2="16" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="29" r="2.5" fill="#ca8a04" />
        </svg>
      );
    }

    // 20. Crowbar / Xà bén
    if (name.includes("crowbar") || name.includes("xà bén")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 52 L70 18 C78 12 84 20 80 26" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <line x1="20" y1="54" x2="26" y2="48" stroke="#94a3b8" strokeWidth="4" />
        </svg>
      );
    }

    // 21. Frying Pan / Chảo rán
    if (name.includes("frying pan") || name.includes("chảo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="44" cy="33" rx="24" ry="18" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <ellipse cx="44" cy="33" rx="18" ry="13" fill="#0f172a" />
          <line x1="66" y1="33" x2="88" y2="33" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    }

    // 22. Trophy / Cúp lưu niệm
    if (name.includes("trophy") || name.includes("cúp")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 16 L66 16 L60 38 Q50 46 40 38 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <path d="M34 20 Q22 24 34 32" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <path d="M66 20 Q78 24 66 32" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <rect x="46" y="42" width="8" height="8" fill="#ca8a04" />
          <rect x="36" y="50" width="28" height="6" rx="1" fill="#78350f" />
        </svg>
      );
    }

    // 23. Pillow / Gối ngủ
    if (name.includes("pillow") || name.includes("gối")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 22 C40 16 60 16 80 22 C84 32 84 42 80 50 C60 54 40 54 20 50 C16 42 16 32 20 22 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M30 28 Q50 38 70 28" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M30 44 Q50 36 70 44" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        </svg>
      );
    }

    // 24. Wet Towel / Khăn ướt
    if (name.includes("towel") || name.includes("khăn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M24 24 Q50 18 76 24 L72 48 Q48 56 22 48 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <path d="M28 32 Q50 26 72 32" fill="none" stroke="#eab308" strokeWidth="2" />
          <circle cx="36" cy="40" r="2" fill="#38bdf8" />
          <circle cx="58" cy="38" r="2.5" fill="#38bdf8" />
        </svg>
      );
    }

    // 25. Boiling Water / Nước sôi
    if (name.includes("boiling") || name.includes("nước sôi") || name.includes("water")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 50 Q50 54 80 50 L75 36 Q50 40 25 36 Z" fill="#38bdf8" fillOpacity="0.7" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="38" cy="40" r="3" fill="#ffffff" />
          <circle cx="58" cy="38" r="3.5" fill="#ffffff" />
          <path d="M35 30 Q30 20 40 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 28 Q55 18 48 10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 30 Q60 20 70 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // 26. Rope / Dây thừng / Necktie / Belt
    if (name.includes("rope") || name.includes("thừng") || name.includes("necktie") || name.includes("belt") || name.includes("cà vạt") || name.includes("thắt lưng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M28 20 Q50 36 72 20 Q60 52 40 48 Q30 32 50 36" fill="none" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 2" />
        </svg>
      );
    }

    // 27. Gun / Pistol / Shotgun / Revolver
    if (name.includes("gun") || name.includes("pistol") || name.includes("shotgun") || name.includes("revolver") || name.includes("súng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="24" width="44" height="10" rx="1" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
          <rect x="36" y="34" width="14" height="18" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          <circle cx="56" cy="29" r="4" fill="#0f172a" />
        </svg>
      );
    }

    // 28. Microwave Oven / Lò vi sóng
    if (name.includes("microwave") || name.includes("lò vi sóng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="16" y="14" width="68" height="42" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
          <rect x="22" y="20" width="44" height="30" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <line x1="72" y1="22" x2="78" y2="22" stroke="#0f172a" strokeWidth="2" />
          <circle cx="75" cy="32" r="3" fill="#cbd5e1" />
          <circle cx="75" cy="42" r="3" fill="#cbd5e1" />
        </svg>
      );
    }

    // 29. Tool Box / Hộp dụng cụ
    if (name.includes("tool box") || name.includes("hộp dụng cụ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="22" y="22" width="56" height="34" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="42" y="16" width="16" height="6" rx="1" fill="#475569" />
          <rect x="22" y="30" width="56" height="3" fill="#0f172a" />
          <rect x="46" y="30" width="8" height="6" rx="1" fill="#ca8a04" />
        </svg>
      );
    }

    // 30. High Voltage / Electric Shock
    if (name.includes("voltage") || name.includes("electric") || name.includes("điện")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="56,12 36,34 50,34 44,54 66,30 52,30" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
        </svg>
      );
    }

    // Default Fallback for Any Other Means: Metallic Shuriken / Combat Weapon Blade
    return (
      <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
        <polygon points="50,14 62,28 78,33 62,38 50,52 38,38 22,33 38,28" fill="#e2e8f0" stroke="#0284c7" strokeWidth="2" />
        <circle cx="50" cy="33" r="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>
    );
  }

  // =========================================================================
  // --- CLUE CARDS (MANH MỐI / BẰNG CHỨNG) ---
  // =========================================================================
  if (!isMeans) {
    // 1. Bread / Bánh mì Baguette
    if (name.includes("bread") || name.includes("bánh mì")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Baguette Shape */}
          <polygon points="20,48 35,18 80,24 65,54" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          {/* Baked Score Marks */}
          <circle cx="34" cy="38" r="3.5" fill="#fef08a" />
          <circle cx="45" cy="35" r="3.5" fill="#fef08a" />
          <circle cx="56" cy="32" r="3.5" fill="#fef08a" />
          <circle cx="67" cy="29" r="3.5" fill="#fef08a" />
        </svg>
      );
    }

    // 2. Hair Strand / Sợi tóc
    if (name.includes("hair") || name.includes("tóc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Curved Hair Wig / Strand Dome */}
          <path d="M34 52 C30 24 70 24 66 52 Z" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
          <line x1="38" y1="36" x2="38" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="44" y1="32" x2="44" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="56" y1="32" x2="56" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="62" y1="36" x2="62" y2="52" stroke="#fef3c7" strokeWidth="1" />
        </svg>
      );
    }

    // 3. Violin / Đàn Violin
    if (name.includes("violin") || name.includes("đàn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Violin Body (Double circle hourglass) */}
          <circle cx="50" cy="27" r="10" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <circle cx="50" cy="44" r="14" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          {/* Neck & Pegbox */}
          <rect x="48" y="10" width="4" height="18" fill="#78350f" />
          {/* Strings */}
          <line x1="49" y1="10" x2="49" y2="52" stroke="#ffffff" strokeWidth="0.8" />
          <line x1="51" y1="10" x2="51" y2="52" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      );
    }

    // 4. Flip-Flop / Dép Lê
    if (name.includes("flip-flop") || name.includes("slipper") || name.includes("dép")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Oval Sole */}
          <ellipse cx="50" cy="33" rx="14" ry="24" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          {/* V-strap Thong */}
          <path d="M40 44 L50 26 L60 44" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="26" r="2" fill="#0284c7" />
        </svg>
      );
    }

    // 5. Wedding Ring / Nhẫn Cưới
    if (name.includes("ring") || name.includes("nhẫn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Gold Band */}
          <circle cx="50" cy="38" r="16" fill="none" stroke="#facc15" strokeWidth="5" />
          {/* Sparkling Faceted Diamond */}
          <polygon points="50,12 58,20 50,28 42,20" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <polygon points="46,20 50,14 54,20" fill="#e0f2fe" />
        </svg>
      );
    }

    // 6. Blood Stain / Blood Sample / Vết máu / Ống mẫu máu
    if (name.includes("blood") || name.includes("máu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M50 14 C50 14 34 32 34 42 A16 16 0 0 0 66 42 C66 32 50 14 50 14 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <circle cx="45" cy="42" r="3" fill="#f87171" opacity="0.6" />
        </svg>
      );
    }

    // 7. Fingerprint / Dấu vân tay
    if (name.includes("fingerprint") || name.includes("vân tay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="33" rx="14" ry="18" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="9" ry="12" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="4" ry="6" fill="none" stroke="#f8fafc" strokeWidth="1.5" opacity="0.9" />
        </svg>
      );
    }

    // 8. Footprint / Dấu chân
    if (name.includes("footprint") || name.includes("dấu chân")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="40" rx="11" ry="15" fill="#78350f" />
          <ellipse cx="50" cy="20" rx="7" ry="5.5" fill="#78350f" />
        </svg>
      );
    }

    // 9. Hotel Keycard / Thẻ phòng
    if (name.includes("keycard") || name.includes("thẻ phòng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="26" y="16" width="48" height="32" rx="3" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <rect x="26" y="22" width="48" height="6" fill="#0f172a" />
          <rect x="32" y="34" width="8" height="8" rx="1" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
        </svg>
      );
    }

    // 10. Love Letter / Bức thư tình
    if (name.includes("letter") || name.includes("thư")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="24" y="16" width="52" height="34" rx="2" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M24 16 L50 36 L76 16" fill="none" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="50" cy="36" r="4.5" fill="#dc2626" />
        </svg>
      );
    }

    // 11. Potted Plant / Chậu cây cảnh
    if (name.includes("plant") || name.includes("cây")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="36,36 64,36 58,54 42,54" fill="#c2410c" stroke="#7c2d12" strokeWidth="2" />
          <ellipse cx="44" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(-30 44 26)" />
          <ellipse cx="56" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(30 56 26)" />
          <ellipse cx="50" cy="18" rx="6" ry="10" fill="#22c55e" />
        </svg>
      );
    }

    // 12. Flash Drive / USB
    if (name.includes("flash") || name.includes("usb") || name.includes("thẻ nhớ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="24" width="28" height="26" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
          <rect x="42" y="14" width="16" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <rect x="46" y="17" width="3" height="3" fill="#0f172a" />
          <rect x="51" y="17" width="3" height="3" fill="#0f172a" />
          <circle cx="50" cy="37" r="2" fill="#38bdf8" />
        </svg>
      );
    }

    // 13. Broken Glasses / Mắt kính vỡ
    if (name.includes("glasses") || name.includes("kính")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="34" cy="34" r="12" fill="none" stroke="#334155" strokeWidth="2.5" />
          <circle cx="66" cy="34" r="12" fill="none" stroke="#334155" strokeWidth="2.5" />
          <line x1="46" y1="34" x2="54" y2="34" stroke="#334155" strokeWidth="2" />
          <line x1="30" y1="28" x2="38" y2="40" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );
    }

    // 14. Diamond Necklace / Dây chuyền kim cương
    if (name.includes("necklace") || name.includes("dây chuyền")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M28 18 Q50 50 72 18" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="3 2" />
          <polygon points="50,38 56,46 50,54 44,46" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
        </svg>
      );
    }

    // 15. Medical Mask / Khẩu trang
    if (name.includes("mask") || name.includes("khẩu trang")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="28" y="22" width="44" height="24" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="28" y1="28" x2="72" y2="28" stroke="#bae6fd" strokeWidth="1.5" />
          <line x1="28" y1="34" x2="72" y2="34" stroke="#bae6fd" strokeWidth="1.5" />
          <path d="M28 26 Q16 34 28 42 M72 26 Q84 34 72 42" fill="none" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      );
    }

    // 16. Security Camera / Đoạn ghi hình
    if (name.includes("camera") || name.includes("security") || name.includes("ghi hình")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="20" width="40" height="26" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="45" cy="33" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="30" cy="26" r="2" fill="#ef4444" />
          <polygon points="65,26 82,18 82,48 65,40" fill="#475569" />
        </svg>
      );
    }

    // 17. Mobile Phone / Smart Watch / Điện thoại
    if (name.includes("phone") || name.includes("watch") || name.includes("đồng hồ") || name.includes("điện thoại")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="12" width="28" height="44" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="40" y="16" width="20" height="32" rx="1" fill="#0284c7" />
          <circle cx="50" cy="51" r="1.5" fill="#94a3b8" />
        </svg>
      );
    }

    // 18. Document / Diary / Statement / Certificate / Di chúc / Hóa đơn
    if (name.includes("statement") || name.includes("diary") || name.includes("certificate") || name.includes("receipt") || name.includes("will") || name.includes("ticket") || name.includes("nhật ký") || name.includes("hóa đơn") || name.includes("di chúc") || name.includes("chứng chỉ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="26" y="14" width="48" height="38" rx="2" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="32" y1="22" x2="68" y2="22" stroke="#78350f" strokeWidth="1.5" />
          <line x1="32" y1="28" x2="62" y2="28" stroke="#78350f" strokeWidth="1.5" />
          <line x1="32" y1="34" x2="56" y2="34" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="62" cy="40" r="4" fill="#dc2626" />
        </svg>
      );
    }

    // 19. Horseshoe / Móng ngựa
    if (name.includes("horseshoe") || name.includes("móng ngựa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 18 C24 30 24 50 50 50 C76 50 76 30 66 18 L58 24 C64 32 64 42 50 42 C36 42 36 32 42 24 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        </svg>
      );
    }

    // 20. Hourglass / Đồng hồ cát
    if (name.includes("hourglass") || name.includes("đồng hồ cát")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="34" y="12" width="32" height="4" rx="1" fill="#78350f" />
          <rect x="34" y="50" width="32" height="4" rx="1" fill="#78350f" />
          <path d="M38 16 L62 16 L50 33 L38 16 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
          <path d="M38 50 L62 50 L50 33 L38 50 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
          <polygon points="44,48 56,48 50,40" fill="#f59e0b" />
        </svg>
      );
    }

    // 21. Gift Box / Hộp quà
    if (name.includes("gift") || name.includes("quà")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="30" y="24" width="40" height="30" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="28" y="20" width="44" height="8" rx="1" fill="#ea580c" />
          <rect x="46" y="20" width="8" height="34" fill="#facc15" />
          <path d="M44 20 C40 12 48 10 50 16 C52 10 60 12 56 20" fill="none" stroke="#facc15" strokeWidth="2.5" />
        </svg>
      );
    }

    // 22. Chalk / Push Pin / Fossil / Spring / Tools / Vỏ đạn
    if (name.includes("chalk") || name.includes("pin") || name.includes("fossil") || name.includes("spring") || name.includes("phấn") || name.includes("ghim") || name.includes("hóa thạch") || name.includes("lò xo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="30" y="24" width="40" height="12" rx="2" transform="rotate(-30 50 30)" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="50" cy="46" r="3" fill="#facc15" />
        </svg>
      );
    }

    // 23. Key / Chìa khóa
    if (name.includes("key") || name.includes("chìa khóa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="36" cy="33" r="10" fill="none" stroke="#ca8a04" strokeWidth="3" />
          <line x1="46" y1="33" x2="74" y2="33" stroke="#ca8a04" strokeWidth="4" />
          <line x1="64" y1="33" x2="64" y2="40" stroke="#ca8a04" strokeWidth="3" />
          <line x1="72" y1="33" x2="72" y2="42" stroke="#ca8a04" strokeWidth="3" />
        </svg>
      );
    }

    // Default Clue Card Graphic: Golden Magnifying Glass over Mystery Clue
    return (
      <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
        <circle cx="45" cy="30" r="14" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <line x1="55" y1="40" x2="72" y2="54" stroke="#d97706" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="45" cy="30" r="6" fill="#dc2626" opacity="0.8" />
      </svg>
    );
  }

  return null;
};
