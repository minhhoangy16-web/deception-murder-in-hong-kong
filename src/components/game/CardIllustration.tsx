import React from "react";

interface CardIllustrationProps {
  cardId?: string;
  cardNameEn: string;
  cardNameVi?: string;
  type: "MEANS" | "CLUE";
  lang?: "vi" | "en";
}

export const CardIllustration: React.FC<CardIllustrationProps> = ({
  cardId = "",
  cardNameEn = "",
  cardNameVi = "",
  type,
}) => {
  const isMeans = type === "MEANS";
  const str = `${cardId} ${cardNameEn} ${cardNameVi}`.toLowerCase();

  // =========================================================================
  // --- MEANS CARDS (HUNG KHÍ) ---
  // =========================================================================
  if (isMeans) {
    // 1. Injection / Syringe (Tiêm Độc)
    if (str.includes("inject") || str.includes("tiêm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="18" y1="50" x2="35" y2="35" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="35" y="24" width="34" height="14" rx="2" transform="rotate(-40 52 31)" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="38" y="26" width="22" height="10" rx="1" transform="rotate(-40 52 31)" fill="#f59e0b" fillOpacity="0.9" />
          <line x1="48" y1="23" x2="48" y2="27" stroke="#ffffff" strokeWidth="1" transform="rotate(-40 52 31)" />
          <line x1="53" y1="23" x2="53" y2="27" stroke="#ffffff" strokeWidth="1" transform="rotate(-40 52 31)" />
          <line x1="62" y1="12" x2="78" y2="-1" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <rect x="74" y="-4" width="10" height="4" rx="1" transform="rotate(-40 79 -2)" fill="#94a3b8" />
        </svg>
      );
    }

    // 2. Plastic Wrap (Màng Bọc Thực Phẩm)
    if (str.includes("wrap") || str.includes("màng bọc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Cardboard Roll Core */}
          <ellipse cx="28" cy="32" rx="7" ry="15" fill="#ca8a04" stroke="#854d0e" strokeWidth="1.5" />
          <rect x="28" y="17" width="46" height="30" fill="#38bdf8" fillOpacity="0.45" stroke="#0284c7" strokeWidth="1.5" />
          <ellipse cx="74" cy="32" rx="7" ry="15" fill="#7dd3fc" fillOpacity="0.8" stroke="#0284c7" strokeWidth="1.5" />
          {/* Peeling Translucent Film */}
          <path d="M36 22 Q58 14 82 28 Q70 46 44 44" fill="#bae6fd" fillOpacity="0.5" stroke="#e0f2fe" strokeWidth="1.2" strokeDasharray="3 2" />
        </svg>
      );
    }

    // 3. Machete (Dao Rựa)
    if (str.includes("machete") || str.includes("rựa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Wooden Grip */}
          <line x1="18" y1="48" x2="32" y2="38" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
          <circle cx="23" cy="44" r="1.2" fill="#ca8a04" />
          <circle cx="28" cy="40" r="1.2" fill="#ca8a04" />
          {/* Long Heavy Machete Blade with angled tip */}
          <polygon points="32,40 76,14 84,20 80,32 36,44" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="34" y1="41" x2="77" y2="16" stroke="#38bdf8" strokeWidth="1.2" />
        </svg>
      );
    }

    // 4. Mold (Nấm Mốc Độc)
    if (str.includes("mold") || str.includes("nấm mốc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Petri Dish / Spores Cluster */}
          <ellipse cx="50" cy="34" rx="28" ry="18" fill="#064e3b" stroke="#047857" strokeWidth="2" />
          {/* Mold Colony Circles */}
          <circle cx="44" cy="30" r="9" fill="#10b981" fillOpacity="0.85" />
          <circle cx="58" cy="36" r="11" fill="#059669" fillOpacity="0.85" />
          <circle cx="38" cy="38" r="6" fill="#34d399" fillOpacity="0.8" />
          <circle cx="54" cy="26" r="5" fill="#6ee7b7" />
          {/* Fuzzy Spore Dots */}
          <circle cx="44" cy="30" r="1" fill="#ffffff" />
          <circle cx="58" cy="36" r="1" fill="#ffffff" />
          <circle cx="38" cy="38" r="1" fill="#ffffff" />
        </svg>
      );
    }

    // 5. Poisonous Gas / Gas Leak (Khí Độc / Rò Rỉ Gas)
    if (str.includes("gas") || str.includes("khí")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Gas Canister Tank */}
          <rect x="22" y="20" width="26" height="34" rx="4" fill="#ca8a04" stroke="#a16207" strokeWidth="1.5" />
          <rect x="28" y="14" width="14" height="6" rx="1" fill="#475569" />
          <circle cx="35" cy="34" r="5" fill="#0f172a" />
          <circle cx="33.5" cy="33" r="0.8" fill="#facc15" />
          <circle cx="36.5" cy="33" r="0.8" fill="#facc15" />
          {/* Toxic Smoke Cloud Dispersing */}
          <path d="M52 38 Q60 22 72 26 Q84 20 86 32 Q90 42 78 46 Q64 50 52 38 Z" fill="#22c55e" fillOpacity="0.75" stroke="#16a34a" strokeWidth="1.5" />
          <circle cx="68" cy="32" r="2.5" fill="#15803d" />
          <circle cx="76" cy="38" r="2" fill="#15803d" />
        </svg>
      );
    }

    // 6. Dumbbell / Sledgehammer (Tạ Tay / Búa Tạ)
    if (str.includes("dumbbell") || str.includes("tạ tay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Chrome Bar */}
          <rect x="32" y="30" width="36" height="5" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          {/* Left Weight Plates */}
          <rect x="22" y="18" width="10" height="29" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          <rect x="16" y="22" width="6" height="21" rx="1" fill="#0f172a" />
          {/* Right Weight Plates */}
          <rect x="68" y="18" width="10" height="29" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          <rect x="78" y="22" width="6" height="21" rx="1" fill="#0f172a" />
        </svg>
      );
    }

    // 7. Mercury (Thủy Ngân)
    if (str.includes("mercury") || str.includes("thủy ngân")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Laboratory Vial with Silver Liquid */}
          <rect x="38" y="18" width="24" height="38" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <rect x="43" y="12" width="14" height="6" rx="1" fill="#94a3b8" />
          {/* Shiny Silver Liquid */}
          <rect x="40" y="30" width="20" height="24" rx="2" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
          <ellipse cx="50" cy="30" rx="10" ry="2" fill="#f8fafc" />
          {/* Liquid Mercury Droplets */}
          <circle cx="70" cy="46" r="4.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="78" cy="48" r="2.5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      );
    }

    // 8. Poison Dart (Phi Tiêu Tẩm Độc)
    if (str.includes("dart") || str.includes("tiêu độc") || str.includes("phi tiêu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="22" y1="48" x2="74" y2="16" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          {/* Red/Yellow Feather Fletching */}
          <polygon points="22,48 14,40 24,42" fill="#ef4444" />
          <polygon points="22,48 18,56 26,50" fill="#facc15" />
          {/* Poison Coated Needle Tip */}
          <polygon points="74,16 82,11 78,21" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
          <circle cx="81" cy="13" r="1.5" fill="#4ade80" />
        </svg>
      );
    }

    // 9. Ice Pick (Dùi Đục Đá)
    if (str.includes("ice pick") || str.includes("đục đá") || str.includes("dùi")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Wooden Bulb Grip */}
          <circle cx="26" cy="46" r="8" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          <rect x="28" y="38" width="10" height="8" rx="1" transform="rotate(-35 33 42)" fill="#ca8a04" />
          {/* Sharp Steel Spike Needle */}
          <polygon points="36,36 82,14 38,40" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="37" y1="38" x2="81" y2="15" stroke="#38bdf8" strokeWidth="1.2" />
        </svg>
      );
    }

    // 10. Kerosene / Fire (Dầu Hỏa / Phóng Hỏa)
    if (str.includes("kerosene") || str.includes("fire") || str.includes("dầu hỏa") || str.includes("phóng hỏa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Red Jerry Can */}
          <rect x="22" y="24" width="34" height="32" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="28" y="16" width="16" height="8" rx="2" fill="#7f1d1d" />
          <path d="M22 30 L39 24 L56 30" fill="none" stroke="#991b1b" strokeWidth="1.5" />
          {/* Roaring Flame */}
          <path d="M68 48 C60 48 58 38 66 30 C66 22 76 14 78 26 C84 28 86 38 80 44 C76 48 72 48 68 48 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
          <path d="M69 46 C64 46 64 40 68 36 C70 32 75 28 76 34 C80 36 80 42 76 45 Z" fill="#fef08a" />
        </svg>
      );
    }

    // 11. Shiv (Dao Tự Chế)
    if (str.includes("shiv") || str.includes("tự chế")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Wrapped Handle with Duct Tape */}
          <rect x="18" y="40" width="26" height="9" rx="2" transform="rotate(-30 31 44.5)" fill="#ca8a04" stroke="#854d0e" strokeWidth="1.5" />
          <line x1="22" y1="47" x2="26" y2="40" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="28" y1="44" x2="32" y2="37" stroke="#0f172a" strokeWidth="1.5" />
          {/* Jagged Sharpened Metal Rod */}
          <polygon points="36,37 78,16 70,26 42,43" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          <line x1="38" y1="39" x2="76" y2="18" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );
    }

    // 12. Brick (Viên Gạch)
    if (str.includes("brick") || str.includes("gạch")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="26,30 58,16 80,24 48,38" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />
          <polygon points="26,30 48,38 48,52 26,44" fill="#c2410c" stroke="#9a3412" strokeWidth="1.5" />
          <polygon points="48,38 80,24 80,38 48,52" fill="#9a3412" stroke="#7c2d12" strokeWidth="1.5" />
        </svg>
      );
    }

    // 13. Radiation (Chất Phóng Xạ)
    if (str.includes("radiat") || str.includes("phóng xạ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="50,10 82,54 18,54" fill="#eab308" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="50" cy="38" r="4" fill="#0f172a" />
          <path d="M50 38 L43 23 A15 15 0 0 1 57 23 Z" fill="#0f172a" />
          <path d="M50 38 L63 46 A15 15 0 0 1 50 53 Z" fill="#0f172a" />
          <path d="M50 38 L37 46 A15 15 0 0 0 50 53 Z" fill="#0f172a" />
        </svg>
      );
    }

    // 14. Crutch (Gậy Chống)
    if (str.includes("crutch") || str.includes("gậy chống")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="28" y1="54" x2="72" y2="12" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="62" y="10" width="22" height="6" rx="2" transform="rotate(-45 73 13)" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          <rect x="46" y="28" width="14" height="5" rx="1.5" transform="rotate(-45 53 30.5)" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          <circle cx="28" cy="54" r="3" fill="#334155" />
        </svg>
      );
    }

    // 15. Axe (Rìu)
    if (str.includes("axe") || str.includes("rìu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="26" y1="54" x2="72" y2="14" stroke="#92400e" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M64 12 C78 6 86 16 82 28 C74 24 68 22 62 23 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M65 14 L80 20 L66 22 Z" fill="#cbd5e1" />
        </svg>
      );
    }

    // 16. Cleaver (Dao Phay)
    if (str.includes("cleaver") || str.includes("phay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M18 44 L38 32 L41 37 L21 49 Z" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <circle cx="26" cy="42" r="1.5" fill="#facc15" />
          <circle cx="34" cy="37" r="1.5" fill="#facc15" />
          <path d="M39 33 L82 16 C84 26 82 46 43 40 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="75" cy="22" r="2.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    }

    // 17. Kitchen Knife / Scalpel / Knife / Dao Bếp / Dao Mổ
    if (str.includes("knife") || str.includes("scalpel") || str.includes("dao")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="18" y="38" width="22" height="7" rx="2" transform="rotate(-25 29 41.5)" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <circle cx="24" cy="44" r="1.5" fill="#ca8a04" />
          <circle cx="32" cy="40" r="1.5" fill="#ca8a04" />
          <path d="M37 38 L84 18 C80 32 60 40 40 44 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="39" y1="39" x2="80" y2="20" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );
    }

    // 18. Sniper Rifle / Hunting Rifle / Shotgun / Gun / Súng
    if (str.includes("rifle") || str.includes("gun") || str.includes("shotgun") || str.includes("pistol") || str.includes("revolver") || str.includes("súng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="14" y="32" width="22" height="7" rx="1.5" fill="#334155" stroke="#1e293b" strokeWidth="1" />
          <rect x="36" y="31" width="52" height="4.5" fill="#475569" stroke="#1e293b" strokeWidth="1" />
          <rect x="88" y="31.5" width="4" height="3.5" fill="#0f172a" />
          <rect x="38" y="24" width="24" height="4.5" rx="1" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <line x1="42" y1="28.5" x2="42" y2="31" stroke="#0f172a" strokeWidth="2" />
          <line x1="58" y1="28.5" x2="58" y2="31" stroke="#0f172a" strokeWidth="2" />
          <line x1="72" y1="35.5" x2="68" y2="48" stroke="#1e293b" strokeWidth="2" />
          <line x1="74" y1="35.5" x2="80" y2="48" stroke="#1e293b" strokeWidth="2" />
        </svg>
      );
    }

    // 19. Cyanide / Arsenic / Pill / Poison / Độc
    if (str.includes("cyanide") || str.includes("arsenic") || str.includes("poison") || str.includes("pill") || str.includes("độc") || str.includes("xyanua") || str.includes("asen") || str.includes("pesticide") || str.includes("thuốc trừ sâu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="34" y="20" width="26" height="34" rx="4" fill="#065f46" stroke="#047857" strokeWidth="1.5" />
          <rect x="41" y="14" width="12" height="6" fill="#ca8a04" rx="1" />
          <rect x="38" y="28" width="18" height="18" fill="#f8fafc" rx="2" />
          <circle cx="47" cy="35" r="3.5" fill="#0f172a" />
          <circle cx="45.5" cy="34" r="0.8" fill="#ffffff" />
          <circle cx="48.5" cy="34" r="0.8" fill="#ffffff" />
          <rect x="66" y="38" width="16" height="7" rx="3.5" transform="rotate(30 74 41.5)" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
          <rect x="66" y="38" width="8" height="7" rx="3.5" transform="rotate(30 74 41.5)" fill="#f8fafc" />
        </svg>
      );
    }

    // 20. Explosives / TNT / Thuốc Nổ
    if (str.includes("explosive") || str.includes("tnt") || str.includes("thuốc nổ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="43" y="18" width="14" height="36" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="61" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="22" y="32" width="56" height="8" fill="#0f172a" />
          <text x="32" y="38" fill="#facc15" fontSize="6" fontWeight="bold" fontFamily="sans-serif">TNT</text>
          <path d="M50 18 Q45 10 50 6" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="50" cy="6" r="3" fill="#f59e0b" />
          <circle cx="50" cy="6" r="1.5" fill="#fef08a" />
        </svg>
      );
    }

    // 21. Snake / Rắn Độc
    if (str.includes("snake") || str.includes("rắn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 46 Q34 22 50 38 T76 22" fill="none" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" />
          <path d="M22 46 Q34 22 50 38 T76 22" fill="none" stroke="#86efac" strokeWidth="2" strokeDasharray="3 4" strokeLinecap="round" />
          <circle cx="78" cy="21" r="5" fill="#15803d" />
          <circle cx="79" cy="20" r="1.5" fill="#ef4444" />
          <path d="M83 20 L89 18 M83 20 L89 22" stroke="#dc2626" strokeWidth="1.2" />
        </svg>
      );
    }

    // 22. Spider / Nhện Độc
    if (str.includes("spider") || str.includes("nhện")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="36" rx="9" ry="11" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <polygon points="48,32 52,32 50,36" fill="#dc2626" />
          <polygon points="50,36 48,40 52,40" fill="#dc2626" />
          <circle cx="50" cy="22" r="5" fill="#0f172a" />
          <path d="M44 26 Q28 14 20 26 M44 32 Q24 28 18 36 M44 38 Q26 44 22 50 M44 42 Q30 52 28 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M56 26 Q72 14 80 26 M56 32 Q76 28 82 36 M56 38 Q74 44 78 50 M56 42 Q70 52 72 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // 23. Sharpened Fan / Quạt Sắc
    if (str.includes("fan") || str.includes("quạt")) {
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

    // 24. Katana / Sword / Crossbow / Kiếm / Nỏ
    if (str.includes("sword") || str.includes("katana") || str.includes("crossbow") || str.includes("kiếm") || str.includes("nỏ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="16" y1="52" x2="26" y2="42" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <circle cx="28" cy="40" r="5" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
          <path d="M28 40 Q54 28 84 14" fill="none" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 40 Q54 28 84 14" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    }

    // 25. Chainsaw / Steamroller / Malfunction / Máy Cưa / Xe Lu / Sự Cố
    if (str.includes("chainsaw") || str.includes("steamroller") || str.includes("malfunction") || str.includes("nanobot") || str.includes("máy")) {
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

    // 26. Baseball Bat / Golf Club / Steel Tube / Gậy / Ống Thép
    if (str.includes("bat") || str.includes("golf") || str.includes("tube") || str.includes("gậy") || str.includes("ống thép")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="20" y1="52" x2="30" y2="42" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <line x1="28" y1="44" x2="80" y2="14" stroke="#d97706" strokeWidth="9" strokeLinecap="round" />
          <line x1="30" y1="42" x2="78" y2="15" stroke="#fef3c7" strokeWidth="2" />
        </svg>
      );
    }

    // 27. Hammer / Crowbar / Wrench / Búa / Xà Bén / Cờ Lê
    if (str.includes("hammer") || str.includes("crowbar") || str.includes("wrench") || str.includes("búa") || str.includes("xà bén") || str.includes("cờ lê")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 52 L70 18 C78 12 84 20 80 26" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <line x1="20" y1="54" x2="26" y2="48" stroke="#94a3b8" strokeWidth="4" />
        </svg>
      );
    }

    // 28. Frying Pan / Microwave / Chảo / Lò Vi Sóng
    if (str.includes("pan") || str.includes("microwave") || str.includes("chảo") || str.includes("lò")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="44" cy="33" rx="24" ry="18" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <ellipse cx="44" cy="33" rx="18" ry="13" fill="#0f172a" />
          <line x1="66" y1="33" x2="88" y2="33" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    }

    // 29. Trophy / Candlestick / Cúp / Chân Nến
    if (str.includes("trophy") || str.includes("candlestick") || str.includes("cúp") || str.includes("nến")) {
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

    // 30. Pillow / Wet Towel / Plastic Bag / Gối / Khăn / Túi
    if (str.includes("pillow") || str.includes("towel") || str.includes("bag") || str.includes("gối") || str.includes("khăn") || str.includes("túi")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 22 C40 16 60 16 80 22 C84 32 84 42 80 50 C60 54 40 54 20 50 C16 42 16 32 20 22 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M30 28 Q50 38 70 28" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M30 44 Q50 36 70 44" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        </svg>
      );
    }

    // 31. Boiling Water / Drowning / Nước Sôi / Chết Đuối
    if (str.includes("water") || str.includes("drown") || str.includes("nước") || str.includes("đuối")) {
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

    // 32. Rope / Wire / Necktie / Belt / Thừng / Điện / Cà Vạt / Thắt Lưng
    if (str.includes("rope") || str.includes("wire") || str.includes("cable") || str.includes("necktie") || str.includes("belt") || str.includes("thừng") || str.includes("cáp") || str.includes("cà vạt") || str.includes("thắt lưng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M28 20 Q50 36 72 20 Q60 52 40 48 Q30 32 50 36" fill="none" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 2" />
        </svg>
      );
    }

    // 33. High Voltage / Fall / Điện Cao Thế / Đẩy Ngã
    if (str.includes("voltage") || str.includes("shock") || str.includes("push") || str.includes("height") || str.includes("điện") || str.includes("ngã")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="56,12 36,34 50,34 44,54 66,30 52,30" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
        </svg>
      );
    }

    // 34. Stone / Rock / Đá
    if (str.includes("stone") || str.includes("rock") || str.includes("đá")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="26,36 50,18 78,28 68,50 34,48" fill="#64748b" stroke="#334155" strokeWidth="2" />
          <line x1="50" y1="18" x2="52" y2="48" stroke="#475569" strokeWidth="1.5" />
        </svg>
      );
    }

    // Intelligent Means Fallback: Crossed Combat Blades ⚔️
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl select-none drop-shadow-md">
        ⚔️
      </div>
    );
  }

  // =========================================================================
  // --- CLUE CARDS (MANH MỐI / BẰNG CHỨNG) ---
  // =========================================================================
  if (!isMeans) {
    // 1. Take-out Food (Hộp Đồ Ăn Mua Về)
    if (str.includes("take-out") || str.includes("food") || str.includes("hộp đồ ăn") || str.includes("thức ăn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Chinese Take-out Paper Box */}
          <polygon points="32,24 68,24 62,54 38,54" fill="#f8fafc" stroke="#dc2626" strokeWidth="1.5" />
          {/* Wire Handle */}
          <path d="M34 26 Q50 12 66 26" fill="none" stroke="#94a3b8" strokeWidth="2" />
          {/* Open Top Flaps */}
          <polygon points="32,24 50,16 68,24" fill="#fee2e2" />
          {/* Red Pagoda / Stamp Motif */}
          <rect x="44" y="32" width="12" height="12" rx="1" fill="#dc2626" />
          {/* Chopsticks sticking out */}
          <line x1="42" y1="12" x2="56" y2="40" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="10" x2="60" y2="38" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // 2. Cigarette Butt / Ash Tray (Tàn Thuốc Lá / Gạt Tàn)
    if (str.includes("cigarette") || str.includes("ash") || str.includes("tàn thuốc") || str.includes("gạt tàn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Smoked Cigarette Butt */}
          <rect x="24" y="34" width="22" height="8" rx="1" transform="rotate(-15 35 38)" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
          <rect x="46" y="34" width="26" height="8" rx="1" transform="rotate(-15 59 38)" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          {/* Burnt Ash End with Glowing Ember */}
          <ellipse cx="72" cy="28" rx="3" ry="4" fill="#475569" />
          <circle cx="72" cy="28" r="1.5" fill="#ef4444" />
          {/* Smoke Ribbon */}
          <path d="M74 26 Q82 18 78 12 Q74 6 82 2" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
        </svg>
      );
    }

    // 3. Boxer Shorts / Briefs (Quần Cộc / Quần Lót)
    if (str.includes("boxer") || str.includes("briefs") || str.includes("quần cộc") || str.includes("quần lót")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Boxer Shorts Body */}
          <path d="M28 20 L72 20 L76 48 L56 48 L50 36 L44 48 L24 48 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
          {/* Elastic Waistband */}
          <rect x="27" y="20" width="46" height="5" fill="#f87171" stroke="#dc2626" strokeWidth="1" />
          {/* Plaid Pattern Stripes */}
          <line x1="38" y1="25" x2="36" y2="48" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="62" y1="25" x2="64" y2="48" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="28" y1="36" x2="72" y2="36" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      );
    }

    // 4. High Heel Shoe (Giày Cao Gót)
    if (str.includes("heel") || str.includes("cao gót")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Red Stiletto Pump Body */}
          <path d="M24 38 C32 38 42 46 62 46 C74 46 82 40 84 34 C80 34 72 38 60 38 C42 38 32 26 24 26 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          {/* Sharp High Stiletto Heel */}
          <polygon points="24,38 27,38 25,56 22,56" fill="#991b1b" />
          {/* Gold Insole Highlight */}
          <path d="M32 30 Q48 38 72 38" fill="none" stroke="#facc15" strokeWidth="1" />
        </svg>
      );
    }

    // 5. Dictionary (Cuốn Từ Điển)
    if (str.includes("dictionary") || str.includes("từ điển")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Thick Hardcover Book Body */}
          <polygon points="24,18 72,14 80,44 32,48" fill="#1e3a8a" stroke="#172554" strokeWidth="1.5" />
          {/* Page Edge Thickness */}
          <polygon points="32,48 80,44 76,52 28,56" fill="#fefce8" stroke="#ca8a04" strokeWidth="1" />
          {/* Book Spine */}
          <polygon points="24,18 32,48 28,56 20,26" fill="#172554" />
          {/* Gold Lettering [DICT] / [A-Z] */}
          <rect x="42" y="24" width="24" height="14" rx="2" fill="#ca8a04" stroke="#facc15" strokeWidth="1" />
          <text x="45" y="34" fill="#0f172a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">A - Z</text>
        </svg>
      );
    }

    // 6. Leather Shoe (Giày Da Nam)
    if (str.includes("leather shoe") || str.includes("giày da")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Polished Oxford Leather Shoe */}
          <path d="M22 46 L22 36 Q32 34 44 30 Q60 26 78 38 Q84 44 80 48 L22 48 Z" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          {/* Dark Heel & Sole */}
          <rect x="22" y="46" width="16" height="6" fill="#0f172a" />
          <rect x="38" y="48" width="42" height="4" rx="1" fill="#0f172a" />
          {/* Shoelaces */}
          <line x1="48" y1="30" x2="52" y2="34" stroke="#facc15" strokeWidth="1.2" />
          <line x1="52" y1="30" x2="56" y2="34" stroke="#facc15" strokeWidth="1.2" />
        </svg>
      );
    }

    // 7. Saliva / DNA Sample (Mẫu Nước Bọt / DNA)
    if (str.includes("saliva") || str.includes("dna") || str.includes("nước bọt")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Double Helix Strands */}
          <path d="M24 18 Q50 36 76 18 M24 48 Q50 30 76 48" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
          {/* Base Pair Connecting Bars */}
          <line x1="32" y1="24" x2="32" y2="42" stroke="#facc15" strokeWidth="2.5" />
          <line x1="44" y1="30" x2="44" y2="36" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="56" y1="30" x2="56" y2="36" stroke="#22c55e" strokeWidth="2.5" />
          <line x1="68" y1="24" x2="68" y2="42" stroke="#facc15" strokeWidth="2.5" />
        </svg>
      );
    }

    // 8. Bread (Bánh Mì)
    if (str.includes("bread") || str.includes("bánh mì")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="20,48 35,18 80,24 65,54" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <circle cx="34" cy="38" r="3.5" fill="#fef08a" />
          <circle cx="45" cy="35" r="3.5" fill="#fef08a" />
          <circle cx="56" cy="32" r="3.5" fill="#fef08a" />
          <circle cx="67" cy="29" r="3.5" fill="#fef08a" />
        </svg>
      );
    }

    // 9. Hair Strand (Sợi Tóc)
    if (str.includes("hair") || str.includes("tóc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 52 C30 24 70 24 66 52 Z" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />
          <line x1="38" y1="36" x2="38" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="44" y1="32" x2="44" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="56" y1="32" x2="56" y2="52" stroke="#fef3c7" strokeWidth="1" />
          <line x1="62" y1="36" x2="62" y2="52" stroke="#fef3c7" strokeWidth="1" />
        </svg>
      );
    }

    // 10. Violin (Đàn Violin)
    if (str.includes("violin") || str.includes("đàn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="27" r="10" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <circle cx="50" cy="44" r="14" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <rect x="48" y="10" width="4" height="18" fill="#78350f" />
          <line x1="49" y1="10" x2="49" y2="52" stroke="#ffffff" strokeWidth="0.8" />
          <line x1="51" y1="10" x2="51" y2="52" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      );
    }

    // 11. Flip-Flop (Dép Lê)
    if (str.includes("flip-flop") || str.includes("slipper") || str.includes("dép")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="33" rx="14" ry="24" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          <path d="M40 44 L50 26 L60 44" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="26" r="2" fill="#0284c7" />
        </svg>
      );
    }

    // 12. Wedding Ring (Nhẫn Cưới)
    if (str.includes("ring") || str.includes("nhẫn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="38" r="16" fill="none" stroke="#facc15" strokeWidth="5" />
          <polygon points="50,12 58,20 50,28 42,20" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <polygon points="46,20 50,14 54,20" fill="#e0f2fe" />
        </svg>
      );
    }

    // 13. Blood Stain / Blood Sample / Máu
    if (str.includes("blood") || str.includes("máu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M50 14 C50 14 34 32 34 42 A16 16 0 0 0 66 42 C66 32 50 14 50 14 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <circle cx="45" cy="42" r="3" fill="#f87171" opacity="0.6" />
        </svg>
      );
    }

    // 14. Fingerprint (Dấu Vân Tay)
    if (str.includes("fingerprint") || str.includes("vân tay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="33" rx="14" ry="18" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="9" ry="12" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="4" ry="6" fill="none" stroke="#f8fafc" strokeWidth="1.5" opacity="0.9" />
        </svg>
      );
    }

    // 15. Footprint (Dấu Chân)
    if (str.includes("footprint") || str.includes("dấu chân")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="40" rx="11" ry="15" fill="#78350f" />
          <ellipse cx="50" cy="20" rx="7" ry="5.5" fill="#78350f" />
        </svg>
      );
    }

    // 16. Hotel Keycard (Thẻ Phòng)
    if (str.includes("keycard") || str.includes("thẻ phòng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="26" y="16" width="48" height="32" rx="3" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <rect x="26" y="22" width="48" height="6" fill="#0f172a" />
          <rect x="32" y="34" width="8" height="8" rx="1" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
        </svg>
      );
    }

    // 17. Love Letter (Bức Thư Tình)
    if (str.includes("letter") || str.includes("thư")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="24" y="16" width="52" height="34" rx="2" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M24 16 L50 36 L76 16" fill="none" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="50" cy="36" r="4.5" fill="#dc2626" />
        </svg>
      );
    }

    // 18. Potted Plant (Chậu Cây Cảnh)
    if (str.includes("plant") || str.includes("cây")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="36,36 64,36 58,54 42,54" fill="#c2410c" stroke="#7c2d12" strokeWidth="2" />
          <ellipse cx="44" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(-30 44 26)" />
          <ellipse cx="56" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(30 56 26)" />
          <ellipse cx="50" cy="18" rx="6" ry="10" fill="#22c55e" />
        </svg>
      );
    }

    // 19. Flash Drive / USB (Thẻ Nhớ USB)
    if (str.includes("flash") || str.includes("usb") || str.includes("thẻ nhớ")) {
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

    // 20. Broken Glasses (Mắt Kính Vỡ)
    if (str.includes("glasses") || str.includes("kính")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="34" cy="34" r="12" fill="none" stroke="#334155" strokeWidth="2.5" />
          <circle cx="66" cy="34" r="12" fill="none" stroke="#334155" strokeWidth="2.5" />
          <line x1="46" y1="34" x2="54" y2="34" stroke="#334155" strokeWidth="2" />
          <line x1="30" y1="28" x2="38" y2="40" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );
    }

    // 21. Diamond Necklace (Dây Chuyền Kim Cương)
    if (str.includes("necklace") || str.includes("dây chuyền")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M28 18 Q50 50 72 18" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="3 2" />
          <polygon points="50,38 56,46 50,54 44,46" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
        </svg>
      );
    }

    // 22. Medical Mask / Glove / Apron / Khẩu Trang / Găng Tay / Tạp Dề
    if (str.includes("mask") || str.includes("glove") || str.includes("apron") || str.includes("khẩu trang") || str.includes("găng tay") || str.includes("tạp dề")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="28" y="22" width="44" height="24" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="28" y1="28" x2="72" y2="28" stroke="#bae6fd" strokeWidth="1.5" />
          <line x1="28" y1="34" x2="72" y2="34" stroke="#bae6fd" strokeWidth="1.5" />
          <path d="M28 26 Q16 34 28 42 M72 26 Q84 34 72 42" fill="none" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      );
    }

    // 23. Security Camera (Camera An Ninh)
    if (str.includes("camera") || str.includes("security") || str.includes("ghi hình")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="20" width="40" height="26" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="45" cy="33" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="30" cy="26" r="2" fill="#ef4444" />
          <polygon points="65,26 82,18 82,48 65,40" fill="#475569" />
        </svg>
      );
    }

    // 24. Phone / Computer / Smart Watch / Tape / Bàn Phím / Màn Hình
    if (str.includes("phone") || str.includes("watch") || str.includes("computer") || str.includes("keyboard") || str.includes("cassette") || str.includes("điện thoại") || str.includes("máy tính") || str.includes("đồng hồ") || str.includes("bàn phím")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="12" width="28" height="44" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="40" y="16" width="20" height="32" rx="1" fill="#0284c7" />
          <circle cx="50" cy="51" r="1.5" fill="#94a3b8" />
        </svg>
      );
    }

    // 25. Document / Will / Receipt / Statement / Banknote / Certificate / Diary / Ticket / Tiền / Sổ / Vé / Hóa Đơn / Di Chúc
    if (str.includes("document") || str.includes("statement") || str.includes("diary") || str.includes("certificate") || str.includes("receipt") || str.includes("will") || str.includes("ticket") || str.includes("banknote") || str.includes("nhật ký") || str.includes("hóa đơn") || str.includes("di chúc") || str.includes("tiền") || str.includes("vé") || str.includes("chứng chỉ") || str.includes("danh thiếp") || str.includes("chữ ký")) {
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

    // 26. Horseshoe (Móng Ngựa)
    if (str.includes("horseshoe") || str.includes("móng ngựa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 18 C24 30 24 50 50 50 C76 50 76 30 66 18 L58 24 C64 32 64 42 50 42 C36 42 36 32 42 24 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        </svg>
      );
    }

    // 27. Hourglass (Đồng Hồ Cát)
    if (str.includes("hourglass") || str.includes("đồng hồ cát")) {
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

    // 28. Gift Box (Hộp Quà)
    if (str.includes("gift") || str.includes("quà")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="30" y="24" width="40" height="30" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="28" y="20" width="44" height="8" rx="1" fill="#ea580c" />
          <rect x="46" y="20" width="8" height="34" fill="#facc15" />
          <path d="M44 20 C40 12 48 10 50 16 C52 10 60 12 56 20" fill="none" stroke="#facc15" strokeWidth="2.5" />
        </svg>
      );
    }

    // 29. Chalk / Push Pin / Fossil / Spring / Phấn / Ghim / Hóa Thạch / Lò Xo
    if (str.includes("chalk") || str.includes("pin") || str.includes("fossil") || str.includes("spring") || str.includes("iron") || str.includes("bàn là") || str.includes("phấn") || str.includes("ghim") || str.includes("hóa thạch") || str.includes("lò xo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="30" y="24" width="40" height="12" rx="2" transform="rotate(-30 50 30)" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="50" cy="46" r="3" fill="#facc15" />
        </svg>
      );
    }

    // 30. Key / Chìa Khóa / Keycard
    if (str.includes("key") || str.includes("chìa khóa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="36" cy="33" r="10" fill="none" stroke="#ca8a04" strokeWidth="3" />
          <line x1="46" y1="33" x2="74" y2="33" stroke="#ca8a04" strokeWidth="4" />
          <line x1="64" y1="33" x2="64" y2="40" stroke="#ca8a04" strokeWidth="3" />
          <line x1="72" y1="33" x2="72" y2="42" stroke="#ca8a04" strokeWidth="3" />
        </svg>
      );
    }

    // 31. Steamed Buns / Eggs / Preserved Plums / Lipstick / Perfume / Teeth / Tattoo / Bánh Bao / Trứng / Mận / Son / Nước Hoa / Răng / Xăm
    if (str.includes("bun") || str.includes("egg") || str.includes("plum") || str.includes("lipstick") || str.includes("perfume") || str.includes("teeth") || str.includes("tattoo") || str.includes("bánh bao") || str.includes("trứng") || str.includes("mận") || str.includes("son") || str.includes("nước hoa") || str.includes("răng") || str.includes("xăm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="40" cy="34" r="12" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="60" cy="34" r="12" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
          <path d="M40 28 Q40 22 42 28 M60 28 Q60 22 62 28" stroke="#c2410c" strokeWidth="1.5" />
        </svg>
      );
    }

    // Intelligent Clue Fallback: Evidence Tag 🏷️
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl select-none drop-shadow-md">
        🏷️
      </div>
    );
  }

  return null;
};
