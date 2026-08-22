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
          <path d="M50 58 L15 28 L22 20 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L25 18 L34 13 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L40 12 L50 10 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L60 12 L50 10 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L75 18 L66 13 L50 58 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <path d="M50 58 L85 28 L78 20 L50 58 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="50" cy="58" r="4" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
          <path d="M15 28 Q50 6 85 28" fill="none" stroke="#f8fafc" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("scissors") || name.includes("kéo")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="30" cy="48" r="8" fill="none" stroke="#dc2626" strokeWidth="3" />
          <circle cx="70" cy="48" r="8" fill="none" stroke="#dc2626" strokeWidth="3" />
          <line x1="34" y1="42" x2="68" y2="16" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <line x1="66" y1="42" x2="32" y2="16" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="30" r="2.5" fill="#facc15" />
        </svg>
      );
    }

    if (name.includes("razor") || name.includes("dao lam")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="24" y="20" width="52" height="26" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          <rect x="36" y="30" width="28" height="6" rx="3" fill="#0f172a" />
          <circle cx="32" cy="33" r="2.5" fill="#0f172a" />
          <circle cx="68" cy="33" r="2.5" fill="#0f172a" />
        </svg>
      );
    }

    if (name.includes("axe") || name.includes("rìu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M25 55 L75 15" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <path d="M62 14 C75 8 85 18 78 30 C72 26 65 24 60 25 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("chainsaw") || name.includes("máy cưa")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="20" y="26" width="30" height="20" rx="3" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <rect x="50" y="30" width="35" height="10" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
          <line x1="50" y1="30" x2="85" y2="30" stroke="#f8fafc" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M22 26 L16 18 L32 18" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("crowbar") || name.includes("xà bén")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M24 50 L70 18 C78 12 84 20 80 26" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <line x1="22" y1="52" x2="28" y2="46" stroke="#94a3b8" strokeWidth="4" />
        </svg>
      );
    }

    if (name.includes("golf") || name.includes("gậy golf")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="30" y1="52" x2="74" y2="16" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 50 L34 54 L30 58 L20 54 Z" fill="#64748b" stroke="#334155" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("dumbbell") || name.includes("tạ tay") || name.includes("sledgehammer") || name.includes("búa tạ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="35" y="30" width="30" height="6" fill="#64748b" />
          <rect x="25" y="20" width="12" height="26" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="63" y="20" width="12" height="26" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("rope") || name.includes("thừng") || name.includes("necktie") || name.includes("cà vạt") || name.includes("belt") || name.includes("thắt lưng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M30 18 Q50 36 70 18 Q60 52 40 48 Q30 32 50 36" fill="none" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 2" />
        </svg>
      );
    }

    if (name.includes("snake") || name.includes("rắn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M25 45 Q35 25 50 40 T75 25" fill="none" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" />
          <circle cx="78" cy="24" r="4" fill="#15803d" />
          <circle cx="79" cy="23" r="1" fill="#ef4444" />
        </svg>
      );
    }

    if (name.includes("spider") || name.includes("nhện")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="33" r="7" fill="#0f172a" />
          <circle cx="50" cy="23" r="4" fill="#0f172a" />
          <path d="M44 30 Q30 20 22 28 M44 34 Q28 34 20 40 M56 30 Q70 20 78 28 M56 34 Q72 34 80 40" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes("radioactive") || name.includes("phóng xạ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="33" r="22" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="50" cy="33" r="4" fill="#000" />
          <path d="M50 33 L40 16 A 18 18 0 0 1 60 16 Z" fill="#000" />
          <path d="M50 33 L67 43 A 18 18 0 0 1 54 51 Z" fill="#000" />
          <path d="M50 33 L33 43 A 18 18 0 0 0 46 51 Z" fill="#000" />
        </svg>
      );
    }

    if (name.includes("crossbow") || name.includes("nỏ")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <line x1="50" y1="14" x2="50" y2="52" stroke="#78350f" strokeWidth="4" />
          <path d="M22 22 Q50 10 78 22" fill="none" stroke="#475569" strokeWidth="3" />
          <line x1="22" y1="22" x2="50" y2="34" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="78" y1="22" x2="50" y2="34" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("rifle") || name.includes("shotgun") || name.includes("súng săn") || name.includes("hoa cải")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="20" y="32" width="22" height="8" rx="2" fill="#78350f" />
          <rect x="40" y="30" width="46" height="5" fill="#334155" />
          <rect x="42" y="35" width="6" height="6" fill="#0f172a" />
        </svg>
      );
    }

    if (name.includes("gun") || name.includes("revolver") || name.includes("pistol") || name.includes("súng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="24" width="44" height="10" rx="1" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
          <rect x="36" y="34" width="14" height="18" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
          <circle cx="56" cy="29" r="4" fill="#0f172a" />
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
          <path d="M20 50 L14 44 L24 44 Z" fill="#ef4444" />
          <path d="M20 50 L16 56 L24 52 Z" fill="#ef4444" />
          <path d="M75 16 L82 12 L78 20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("sword") || name.includes("katana") || name.includes("kiếm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M18 52 L26 44" stroke="#854d0e" strokeWidth="4" strokeLinecap="round" />
          <path d="M22 48 L30 40" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
          <path d="M28 42 L82 12 L84 14 L30 44 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="30" y1="42" x2="80" y2="14" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    }

    if (name.includes("shiv") || name.includes("tự chế") || name.includes("ice pick") || name.includes("đục")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 48 L42 34" stroke="#ca8a04" strokeWidth="6" strokeDasharray="2 2" strokeLinecap="round" />
          <path d="M42 34 L80 16 L65 32 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("gas") || name.includes("khí")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="14" width="50" height="40" rx="3" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <text x="32" y="26" fill="#000" fontSize="7" fontWeight="black" fontFamily="sans-serif">POISON</text>
          <text x="38" y="34" fill="#000" fontSize="7" fontWeight="black" fontFamily="sans-serif">GAS</text>
          <circle cx="50" cy="44" r="5" fill="#000" />
          <circle cx="48" cy="43" r="1" fill="#facc15" />
          <circle cx="52" cy="43" r="1" fill="#facc15" />
        </svg>
      );
    }

    if (name.includes("boiling") || name.includes("nước sôi") || name.includes("water")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M20 50 Q50 54 80 50 L75 36 Q50 40 25 36 Z" fill="#38bdf8" fillOpacity="0.6" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="3" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="58" cy="38" r="4" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="50" cy="44" r="2.5" fill="#ffffff" fillOpacity="0.8" />
          <path d="M35 30 Q30 20 40 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M50 28 Q55 18 48 10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M65 30 Q60 20 70 12" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    }

    if (name.includes("drown") || name.includes("đuối") || name.includes("dìm")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M10 46 Q25 42 40 46 T70 46 T100 46 L100 65 L0 65 Z" fill="#0369a1" />
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

    if (name.includes("cleaver") || name.includes("knife") || name.includes("scalpel") || name.includes("dao") || name.includes("phay") || name.includes("bếp") || name.includes("mổ")) {
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

    if (name.includes("brick") || name.includes("gạch") || name.includes("stone") || name.includes("đá")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <polygon points="25,36 55,20 80,30 50,46" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <polygon points="25,36 50,46 50,56 25,46" fill="#9a3412" stroke="#78350f" strokeWidth="1.5" />
          <polygon points="50,46 80,30 80,40 50,56" fill="#7c2d12" stroke="#78350f" strokeWidth="1.5" />
        </svg>
      );
    }

    if (name.includes("explosive") || name.includes("thuốc nổ") || name.includes("tnt")) {
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

    if (name.includes("kerosene") || name.includes("dầu hỏa") || name.includes("fire")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="34" y="20" width="32" height="36" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="42" y="14" width="16" height="6" rx="1" fill="#dc2626" />
          <path d="M34 26 L50 20 L66 26" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="40" y="34" width="20" height="12" fill="#ea580c" />
        </svg>
      );
    }

    if (name.includes("poison") || name.includes("arsenic") || name.includes("cyanide") || name.includes("pesticide") || name.includes("pill") || name.includes("độc")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="38" y="20" width="24" height="36" rx="4" fill="#15803d" stroke="#166534" strokeWidth="2" />
          <rect x="44" y="14" width="12" height="6" fill="#ca8a04" />
          <circle cx="50" cy="38" r="4" fill="#facc15" />
          <circle cx="48" cy="37" r="0.8" fill="#000" />
          <circle cx="52" cy="37" r="0.8" fill="#000" />
        </svg>
      );
    }

    // ==========================================
    // --- CLUE CARDS (MANH MỐI) ---
    // ==========================================
    if (name.includes("footprint") || name.includes("dấu chân")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="50" cy="40" rx="12" ry="16" fill="#78350f" />
          <ellipse cx="50" cy="20" rx="8" ry="6" fill="#78350f" />
        </svg>
      );
    }

    if (name.includes("dna") || name.includes("saliva") || name.includes("nước bọt")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M30 15 Q50 32 70 15 M30 50 Q50 32 70 50" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <line x1="38" y1="24" x2="62" y2="24" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="50" y1="32" x2="50" y2="32" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="38" y1="41" x2="62" y2="41" stroke="#e2e8f0" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("teeth") || name.includes("răng")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M40 20 C36 36 38 52 44 54 C48 54 48 40 50 40 C52 40 52 54 56 54 C62 52 64 36 60 20 Z" fill="#f8fafc" stroke="#dc2626" strokeWidth="2" />
        </svg>
      );
    }

    if (name.includes("necklace") || name.includes("dây chuyền") || name.includes("ring") || name.includes("nhẫn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="50" cy="33" r="16" fill="none" stroke="#facc15" strokeWidth="3" />
          <polygon points="50,14 56,20 50,26 44,20" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
        </svg>
      );
    }

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

    if (name.includes("letter") || name.includes("statement") || name.includes("diary") || name.includes("card") || name.includes("receipt") || name.includes("will") || name.includes("ticket") || name.includes("bằng") || name.includes("thư") || name.includes("nhật ký") || name.includes("hóa đơn") || name.includes("di chúc")) {
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

    if (name.includes("camera") || name.includes("security") || name.includes("footage")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="25" y="20" width="40" height="26" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <circle cx="45" cy="33" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="30" cy="26" r="2" fill="#ef4444" />
          <polygon points="65,26 82,18 82,48 65,40" fill="#475569" />
        </svg>
      );
    }

    if (name.includes("blood") || name.includes("máu")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <path d="M50 14 C50 14 34 32 34 42 A16 16 0 0 0 66 42 C66 32 50 14 50 14 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
          <circle cx="45" cy="42" r="3" fill="#f87171" opacity="0.6" />
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

    if (name.includes("phone") || name.includes("mobile") || name.includes("điện thoại")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <rect x="36" y="12" width="28" height="44" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="40" y="16" width="20" height="32" rx="1" fill="#0284c7" />
          <circle cx="50" cy="51" r="1.5" fill="#94a3b8" />
        </svg>
      );
    }

    if (name.includes("key") || name.includes("chìa khóa") || name.includes("keycard")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <circle cx="36" cy="33" r="10" fill="none" stroke="#ca8a04" strokeWidth="3" />
          <line x1="46" y1="33" x2="74" y2="33" stroke="#ca8a04" strokeWidth="4" />
          <line x1="64" y1="33" x2="64" y2="40" stroke="#ca8a04" strokeWidth="3" />
          <line x1="72" y1="33" x2="72" y2="42" stroke="#ca8a04" strokeWidth="3" />
        </svg>
      );
    }

    if (name.includes("food") || name.includes("bánh bao") || name.includes("trứng") || name.includes("mận") || name.includes("ăn")) {
      return (
        <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md">
          <ellipse cx="42" cy="38" rx="12" ry="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="58" cy="38" rx="12" ry="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M42 32 Q42 26 44 32" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M58 32 Q58 26 60 32" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
      );
    }

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

    // Default High-Contrast Fallback Graphic
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
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {renderGraphic()}
      </div>
    </div>
  );
};
