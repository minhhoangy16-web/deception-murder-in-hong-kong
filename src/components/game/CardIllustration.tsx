import React from "react";

interface CardIllustrationProps {
  cardId: string;
  cardNameEn: string;
  type: "MEANS" | "CLUE";
  lang?: "vi" | "en";
}

export const CardIllustration: React.FC<CardIllustrationProps> = ({
  cardNameEn,
  type,
}) => {
  const isMeans = type === "MEANS";
  const name = cardNameEn.toLowerCase();

  const renderGraphic = () => {
    // ==========================================
    // --- MEANS CARDS (HUNG KHÍ) ---
    // ==========================================
    if (name.includes("fan") || name.includes("quạt")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Sharpened Combat War Fan */}
          <path d="M50 58 L15 28 L22 20 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L25 18 L34 13 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L40 12 L50 10 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L60 12 L50 10 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L75 18 L66 13 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L85 28 L78 20 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="50" cy="58" r="4" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
          {/* Steel edge blades */}
          <path d="M15 28 Q50 6 85 28" fill="none" stroke="#f8fafc" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("microwave") || name.includes("lò vi sóng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="16" y="14" width="68" height="42" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
          <rect x="22" y="20" width="44" height="30" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <line x1="72" y1="22" x2="78" y2="22" stroke="#0f172a" strokeWidth="2" />
          <circle cx="75" cy="32" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
          <circle cx="75" cy="42" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("wrap") || name.includes("bọc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="25" cy="32" rx="8" ry="16" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="25" y="16" width="50" height="32" fill="#64748b" fillOpacity="0.4" stroke="#94a3b8" strokeWidth="1.5" />
          <ellipse cx="75" cy="32" rx="8" ry="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M30 24 Q60 20 80 40" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      );
    }

    if (name.includes("dart") || name.includes("tiêu độc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 50 L75 16" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          {/* Feathers */}
          <path d="M20 50 L14 44 L24 44 Z" fill="#ef4444" />
          <path d="M20 50 L16 56 L24 52 Z" fill="#ef4444" />
          {/* Poison tip */}
          <path d="M75 16 L82 12 L78 20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("sword") || name.includes("kiếm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M18 52 L26 44" stroke="#854d0e" strokeWidth="4" strokeLinecap="round" />
          <path d="M22 48 L30 40" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
          <path d="M28 42 L82 12 L84 14 L30 44 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="30" y1="42" x2="80" y2="14" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("shiv") || name.includes("tự chế")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 48 L42 34" stroke="#ca8a04" strokeWidth="6" strokeDasharray="2 2" strokeLinecap="round" />
          <path d="M42 34 L80 16 L65 32 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("gas") || name.includes("khí ga")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="14" width="50" height="40" rx="3" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <text x="32" y="26" fill="#000" fontSize="7" fontWeight="black" fontFamily="sans-serif">POISON</text>
          <text x="38" y="34" fill="#000" fontSize="7" fontWeight="black" fontFamily="sans-serif">GAS</text>
          {/* Skull */}
          <circle cx="50" cy="44" r="5" fill="#000" />
          <circle cx="48" cy="43" r="1" fill="#facc15" />
          <circle cx="52" cy="43" r="1" fill="#facc15" />
        </svg>
      );
    }

    if (name.includes("boiling") || name.includes("nước sôi")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 50 Q50 54 80 50 L75 36 Q50 40 25 36 Z" fill="#38bdf8" fillOpacity="0.6" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="3" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="58" cy="38" r="4" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="50" cy="44" r="2.5" fill="#ffffff" fillOpacity="0.8" />
          {/* Steam wisps */}
          <path d="M35 30 Q30 20 40 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M50 28 Q55 18 48 10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M65 30 Q60 20 70 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    }

    if (name.includes("drown") || name.includes("đuối")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          {/* Water surface */}
          <path d="M10 46 Q25 42 40 46 T70 46 T100 46 L100 65 L0 65 Z" fill="#0369a1" />
          {/* Desperate Hand reaching */}
          <path d="M45 52 L45 32 L48 24 L52 24 L52 32 L56 26 L60 26 L58 34 L62 30 L65 31 L61 38 L55 52 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
          <circle cx="68" cy="40" r="2" fill="#bae6fd" />
          <circle cx="36" cy="42" r="3" fill="#bae6fd" />
        </svg>
      );
    }

    if (name.includes("pillow") || name.includes("gối")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 22 C40 16 60 16 80 22 C84 32 84 42 80 50 C60 54 40 54 20 50 C16 42 16 32 20 22 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M30 28 Q50 38 70 28" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M30 44 Q50 36 70 44" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("cleaver") || name.includes("knife") || name.includes("phay") || name.includes("bếp")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M18 42 L38 30 L42 36 L22 48 Z" fill="#854d0e" stroke="#582f0e" strokeWidth="1.5" />
          <circle cx="26" cy="41" r="1.5" fill="#facc15" />
          <circle cx="34" cy="36" r="1.5" fill="#facc15" />
          <path d="M40 31 L82 14 C84 28 80 46 44 38 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("tube") || name.includes("ống thép")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 52 L78 16 L84 22 L28 58 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="81" cy="19" rx="4" ry="4" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="30" y1="52" x2="76" y2="22" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="10 4" />
        </svg>
      );
    }

    if (name.includes("towel") || name.includes("khăn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M26 24 Q50 18 74 24 L70 48 Q48 56 24 48 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <path d="M30 32 Q50 26 70 32" fill="none" stroke="#eab308" strokeWidth="2" />
          <path d="M28 40 Q50 34 68 40" fill="none" stroke="#eab308" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("bat") || name.includes("bóng chày")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 54 L32 46" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
          <path d="M30 48 L80 14" stroke="#f8fafc" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("dagger") || name.includes("găm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 50 L34 38" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <path d="M30 42 L38 34" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />
          <path d="M34 38 L80 14 L68 34 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("brick") || name.includes("gạch")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="25,36 55,20 80,30 50,46" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <polygon points="25,36 50,46 50,56 25,46" fill="#9a3412" stroke="#78350f" strokeWidth="1.5" />
          <polygon points="50,46 80,30 80,40 50,56" fill="#7c2d12" stroke="#78350f" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("explosive") || name.includes("thuốc nổ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="43" y="18" width="14" height="36" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="61" y="20" width="14" height="34" rx="2" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <rect x="22" y="32" width="56" height="8" fill="#1e293b" />
          <line x1="50" y1="18" x2="50" y2="10" stroke="#facc15" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("sniper") || name.includes("bắn tỉa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="32" r="22" fill="#090d16" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="50" cy="32" r="14" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="28" y1="32" x2="72" y2="32" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="50" y2="54" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("slit") || name.includes("cứa cổ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M40 20 C40 10 60 10 60 20 L60 38 L40 38 Z" fill="#334155" />
          <path d="M30 40 Q50 36 70 40 L76 56 L24 56 Z" fill="#1e293b" />
          <path d="M28 36 L72 38" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("machete") || name.includes("rựa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 52 L32 42" stroke="#854d0e" strokeWidth="5" strokeLinecap="round" />
          <path d="M30 44 L78 14 C82 22 75 32 36 46 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("dismember") || name.includes("chặt")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M30 15 L46 38 L68 46 L76 46 L76 52 L44 54 L26 22 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="42" y1="34" x2="52" y2="44" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    }

    if (name.includes("steamroller") || name.includes("xe lu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="24" width="34" height="20" rx="3" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
          <circle cx="30" cy="42" r="14" fill="#64748b" stroke="#334155" strokeWidth="3" />
          <circle cx="68" cy="44" r="10" fill="#334155" />
        </svg>
      );
    }

    if (name.includes("trophy") || name.includes("cúp")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M35 16 L65 16 L60 38 Q50 46 40 38 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <path d="M35 20 Q24 24 35 32" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <path d="M65 20 Q76 24 65 32" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <rect x="46" y="42" width="8" height="8" fill="#ca8a04" />
          <rect x="38" y="50" width="24" height="6" rx="1" fill="#854d0e" />
        </svg>
      );
    }

    if (name.includes("kerosene") || name.includes("dầu hỏa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="34" y="20" width="32" height="36" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="42" y="14" width="16" height="6" rx="1" fill="#dc2626" />
          <path d="M34 26 L50 20 L66 26" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="40" y="34" width="20" height="12" fill="#ea580c" />
        </svg>
      );
    }

    if (name.includes("infection") || name.includes("nhiễm khuẩn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 40 Q50 35 80 44" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
          <circle cx="50" cy="38" r="5" fill="#16a34a" />
          <circle cx="42" cy="36" r="3" fill="#22c55e" />
          <circle cx="58" cy="40" r="3.5" fill="#15803d" />
        </svg>
      );
    }

    if (name.includes("drill") || name.includes("khoan")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="44" y="22" width="28" height="18" rx="3" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
          <rect x="52" y="40" width="10" height="16" rx="2" fill="#1e293b" />
          <path d="M44 28 L18 31 L44 34 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("injection") || name.includes("tiêm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="24" width="30" height="12" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="36" y1="30" x2="16" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
          <rect x="66" y="27" width="18" height="6" fill="#ca8a04" />
          <rect x="42" y="26" width="18" height="8" fill="#38bdf8" fillOpacity="0.7" />
        </svg>
      );
    }

    if (name.includes("nanobot") || name.includes("robot")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="28" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="47" cy="26" r="2" fill="#ef4444" />
          <circle cx="53" cy="26" r="2" fill="#ef4444" />
          <path d="M42 36 L34 50 M58 36 L66 50 M50 38 L50 54" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    // ==========================================
    // --- CLUE CARDS (MANH MỐI) ---
    // ==========================================
    if (name.includes("engraving") || name.includes("điêu khắc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="14" width="50" height="38" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="2" />
          <path d="M35 44 C35 30 65 30 65 44" fill="#334155" />
          <circle cx="50" cy="26" r="6" fill="#334155" />
        </svg>
      );
    }

    if (name.includes("boxer") || name.includes("cộc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M30 18 L70 18 L76 48 L56 48 L50 32 L44 48 L24 48 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="30" y1="23" x2="70" y2="23" stroke="#eab308" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("take out") || name.includes("mua về")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="26,24 74,24 68,52 32,52" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />
          <circle cx="44" cy="36" r="4" fill="#facc15" />
          <circle cx="56" cy="38" r="3.5" fill="#22c55e" />
          <circle cx="50" cy="44" r="3" fill="#dc2626" />
          <line x1="22" y1="18" x2="78" y2="30" stroke="#ca8a04" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("cassette") || name.includes("băng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="20" y="16" width="60" height="36" rx="3" fill="#d97706" stroke="#78350f" strokeWidth="2" />
          <rect x="28" y="24" width="44" height="20" rx="2" fill="#fef3c7" />
          <circle cx="38" cy="34" r="5" fill="#1e293b" />
          <circle cx="62" cy="34" r="5" fill="#1e293b" />
        </svg>
      );
    }

    if (name.includes("apron") || name.includes("tạp dề")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M42 14 L58 14 L66 32 L70 54 L30 54 L34 32 Z" fill="#d4d4d8" stroke="#71717a" strokeWidth="1.5" />
          <rect x="42" y="38" width="16" height="10" rx="1" fill="#a1a1aa" />
        </svg>
      );
    }

    if (name.includes("chalk") || name.includes("phấn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="25,40 70,18 76,26 31,48" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="28" cy="44" rx="4" ry="5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("briefs") || name.includes("quần lót")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M30 18 L70 18 C70 32 60 48 50 48 C40 48 30 32 30 18 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="30" y1="22" x2="70" y2="22" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("fossil") || name.includes("hóa thạch")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="14" width="50" height="38" rx="4" fill="#a16207" stroke="#713f12" strokeWidth="2" />
          <ellipse cx="50" cy="33" rx="10" ry="14" fill="#451a03" />
          <line x1="35" y1="28" x2="65" y2="28" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="35" y1="34" x2="65" y2="34" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="37" y1="40" x2="63" y2="40" stroke="#ca8a04" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("hourglass") || name.includes("đồng hồ cát")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="35" y="12" width="30" height="4" fill="#854d0e" />
          <rect x="35" y="50" width="30" height="4" fill="#854d0e" />
          <path d="M38 16 C38 30 48 33 48 33 C48 33 38 36 38 50 L62 50 C62 36 52 33 52 33 C52 33 62 30 62 16 Z" fill="#e0f2fe" fillOpacity="0.5" stroke="#94a3b8" strokeWidth="1.5" />
          <polygon points="44,22 56,22 50,30" fill="#facc15" />
          <polygon points="42,48 58,48 50,40" fill="#facc15" />
        </svg>
      );
    }

    if (name.includes("iron") || name.includes("là")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 48 L76 48 C82 48 84 40 76 34 L56 34 L56 22 L34 22 L34 34 L22 48 Z" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <path d="M38 26 L52 26" stroke="#94a3b8" strokeWidth="3" />
        </svg>
      );
    }

    if (name.includes("computer") || name.includes("máy tính")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="24" y="14" width="52" height="32" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <rect x="28" y="18" width="44" height="24" fill="#0284c7" />
          <polygon points="46,46 54,46 56,52 44,52" fill="#94a3b8" />
          <rect x="40" y="52" width="20" height="3" fill="#cbd5e1" />
        </svg>
      );
    }

    if (name.includes("leather shoe") || name.includes("giày da")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M22 42 L26 28 L40 28 L56 36 L78 38 C82 42 78 48 70 48 L22 48 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <line x1="22" y1="48" x2="72" y2="48" stroke="#ca8a04" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("signature") || name.includes("chữ kí")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="14" width="50" height="38" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M34 34 Q42 20 48 36 T62 26 T68 38" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("plant") || name.includes("cây")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="36,36 64,36 58,54 42,54" fill="#c2410c" stroke="#7c2d12" strokeWidth="2" />
          {/* Green leaves */}
          <ellipse cx="44" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(-30 44 26)" />
          <ellipse cx="56" cy="26" rx="8" ry="12" fill="#16a34a" transform="rotate(30 56 26)" />
          <ellipse cx="50" cy="18" rx="6" ry="10" fill="#22c55e" />
        </svg>
      );
    }

    if (name.includes("tattoo") || name.includes("hình xăm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M25 54 L75 14" stroke="#fed7aa" strokeWidth="18" strokeLinecap="round" />
          <path d="M34 46 Q50 30 62 24" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="2 2" />
        </svg>
      );
    }

    if (name.includes("certificate") || name.includes("chứng chỉ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="22" y="14" width="56" height="38" rx="2" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="30" y1="24" x2="70" y2="24" stroke="#713f12" strokeWidth="1.5" />
          <line x1="30" y1="30" x2="60" y2="30" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="66" cy="40" r="5" fill="#dc2626" />
        </svg>
      );
    }

    if (name.includes("mold") || name.includes("mốc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="34" r="18" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <circle cx="44" cy="30" r="5" fill="#65a30d" opacity="0.8" />
          <circle cx="54" cy="36" r="6" fill="#4d7c0f" opacity="0.8" />
          <circle cx="48" cy="42" r="4" fill="#3f6212" opacity="0.8" />
        </svg>
      );
    }

    if (name.includes("blood sample") || name.includes("mẫu máu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="42" y="14" width="16" height="38" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(25 50 33)" />
          <rect x="44" y="24" width="12" height="24" rx="6" fill="#dc2626" transform="rotate(25 50 33)" />
        </svg>
      );
    }

    if (name.includes("bee") || name.includes("ong")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="36" rx="14" ry="10" fill="#facc15" stroke="#000" strokeWidth="2" />
          <line x1="44" y1="26" x2="44" y2="46" stroke="#000" strokeWidth="3" />
          <line x1="52" y1="26" x2="52" y2="46" stroke="#000" strokeWidth="3" />
          {/* Wings */}
          <ellipse cx="44" cy="20" rx="8" ry="5" fill="#bae6fd" opacity="0.7" />
          <ellipse cx="56" cy="20" rx="8" ry="5" fill="#bae6fd" opacity="0.7" />
        </svg>
      );
    }

    if (name.includes("vault") || name.includes("ngân hàng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="33" r="20" fill="#475569" stroke="#1e293b" strokeWidth="3" />
          <circle cx="50" cy="33" r="8" fill="#94a3b8" stroke="#0f172a" strokeWidth="2" />
          <line x1="50" y1="18" x2="50" y2="48" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="35" y1="33" x2="65" y2="33" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("high heel") || name.includes("cao gót")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M24 38 L36 34 L56 46 L78 46 L74 42 L52 38 L42 22 L34 22 L34 46 L24 46 Z" fill="#0f172a" stroke="#dc2626" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("pin") || name.includes("ghim")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 22 L66 22 L56 34 L56 42 L50 54 L44 42 L44 34 Z" fill="#ca8a04" stroke="#713f12" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("dictionary") || name.includes("từ điển")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="28" y="14" width="44" height="38" rx="3" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2" />
          <rect x="32" y="16" width="36" height="34" fill="#1d4ed8" />
          <text x="36" y="32" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="serif">DICTIONARY</text>
        </svg>
      );
    }

    if (name.includes("lottery") || name.includes("vé số")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="16" width="50" height="34" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="40" cy="33" r="5" fill="#eab308" />
          <circle cx="55" cy="33" r="5" fill="#eab308" />
        </svg>
      );
    }

    if (name.includes("egg") || name.includes("trứng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="42" cy="36" rx="10" ry="14" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" transform="rotate(-15 42 36)" />
          <ellipse cx="58" cy="36" rx="10" ry="14" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" transform="rotate(15 58 36)" />
        </svg>
      );
    }

    if (name.includes("fishing") || name.includes("cần câu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="22" y1="52" x2="80" y2="14" stroke="#854d0e" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 14 Q85 30 65 42" fill="none" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="34" cy="44" r="4" fill="#ca8a04" />
        </svg>
      );
    }

    if (name.includes("keyboard") || name.includes("bàn phím")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="20,44 80,44 74,22 26,22" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <line x1="28" y1="28" x2="72" y2="28" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="26" y1="34" x2="74" y2="34" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="24" y1="40" x2="76" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
        </svg>
      );
    }

    if (name.includes("ash") || name.includes("gạt tàn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="36" rx="22" ry="14" fill="#334155" stroke="#0f172a" strokeWidth="3" />
          <ellipse cx="50" cy="35" rx="14" ry="8" fill="#1e293b" />
          <line x1="42" y1="34" x2="56" y2="36" stroke="#ea580c" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("bun") || name.includes("bánh bao")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="42" cy="38" rx="12" ry="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="58" cy="38" rx="12" ry="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M42 32 Q42 26 44 32" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M58 32 Q58 26 60 32" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("spring") || name.includes("lò xo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M28 44 C34 44 34 22 40 22 C46 22 46 44 52 44 C58 44 58 22 64 22 C70 22 70 44 76 44" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("gift") || name.includes("quà")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="30" y="24" width="40" height="28" rx="2" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
          <rect x="28" y="20" width="44" height="6" rx="1" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
          <rect x="46" y="20" width="8" height="32" fill="#f8fafc" />
          <ellipse cx="44" cy="16" rx="5" ry="3" fill="#f8fafc" />
          <ellipse cx="56" cy="16" rx="5" ry="3" fill="#f8fafc" />
        </svg>
      );
    }

    if (name.includes("tool box") || name.includes("hộp dụng cụ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="24" width="50" height="26" rx="3" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
          <rect x="40" y="16" width="20" height="8" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <rect x="46" y="30" width="8" height="4" fill="#cbd5e1" />
        </svg>
      );
    }

    if (name.includes("fingerprint") || name.includes("vân tay")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="33" rx="14" ry="18" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="9" ry="12" fill="none" stroke="#f8fafc" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
          <ellipse cx="50" cy="33" rx="4" ry="6" fill="none" stroke="#f8fafc" strokeWidth="1.5" opacity="0.9" />
        </svg>
      );
    }

    if (name.includes("plum") || name.includes("mận")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="42" cy="36" r="10" fill="#4c0519" stroke="#1c050c" strokeWidth="1.5" />
          <circle cx="58" cy="38" r="9" fill="#4c0519" stroke="#1c050c" strokeWidth="1.5" />
          <circle cx="50" cy="28" r="8" fill="#4c0519" stroke="#1c050c" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("horseshoe") || name.includes("móng ngựa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M34 16 L34 36 C34 46 66 46 66 36 L66 16 L56 16 L56 34 C56 38 44 38 44 34 L44 16 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("banknote") || name.includes("tiền")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="22" y="18" width="56" height="30" rx="2" fill="#15803d" stroke="#14532d" strokeWidth="1.5" />
          <circle cx="50" cy="33" r="8" fill="#22c55e" stroke="#14532d" strokeWidth="1.5" />
        </svg>
      );
    }

    // Default Fallback
    return isMeans ? (
      <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
        <circle cx="50" cy="33" r="16" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M50 17 L50 49 M34 33 L66 33" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ) : (
      <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
        <circle cx="50" cy="33" r="14" fill="#881337" fillOpacity="0.4" stroke="#e11d48" strokeWidth="2" />
        <circle cx="50" cy="33" r="6" fill="#f43f5e" />
      </svg>
    );
  };

  return (
    <div className="w-full h-20 sm:h-24 flex items-center justify-center relative overflow-hidden">
      {/* Center Vector Graphic Frame */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {renderGraphic()}
      </div>
    </div>
  );
};
