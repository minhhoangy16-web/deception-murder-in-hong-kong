// Hand-authored SVG illustrations for every CLUE card (Bằng Chứng / Manh Mối).
// One unique drawing per card id. ViewBox: 0 0 100 65.
// Content is static markup (no user input) rendered via innerHTML.

export const CLUE_ART: Record<string, string> = {
  // Blood Stain — dried splatter on floor
  c_01: `
    <path d="M30 30 Q26 18 40 18 Q46 10 56 16 Q70 12 72 26 Q84 30 76 42 Q78 54 62 52 Q54 60 44 52 Q28 56 28 44 Q18 38 30 30 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.2"/>
    <path d="M40 26 Q50 22 58 28" stroke="#b91c1c" stroke-width="3" fill="none"/>
    <circle cx="16" cy="22" r="3" fill="#7f1d1d"/><circle cx="86" cy="18" r="2.2" fill="#7f1d1d"/><circle cx="88" cy="52" r="3.2" fill="#7f1d1d"/><circle cx="14" cy="50" r="1.8" fill="#7f1d1d"/><circle cx="24" cy="12" r="1.4" fill="#7f1d1d"/>
    <path d="M76 42 L92 46" stroke="#7f1d1d" stroke-width="2"/>`,

  // Blood Sample — labelled test tube with blood in a rack
  c_02: `
    <rect x="18" y="44" width="64" height="8" rx="1" fill="#475569" stroke="#1e293b"/>
    <rect x="22" y="52" width="4" height="9" fill="#475569"/><rect x="74" y="52" width="4" height="9" fill="#475569"/>
    <rect x="30" y="6" width="12" height="7" rx="1.5" fill="#7c3aed"/>
    <path d="M31 13 H41 V50 Q41 56 36 56 Q31 56 31 50 Z" fill="#e0f2fe" fill-opacity="0.35" stroke="#cbd5e1" stroke-width="1.2"/>
    <path d="M31.6 26 H40.4 V50 Q40.4 55.4 36 55.4 Q31.6 55.4 31.6 50 Z" fill="#b91c1c"/>
    <rect x="31" y="18" width="10" height="7" fill="#f8fafc"/>
    <path d="M33 21.5 H39" stroke="#64748b"/>
    <rect x="54" y="6" width="12" height="7" rx="1.5" fill="#dc2626"/>
    <path d="M55 13 H65 V50 Q65 56 60 56 Q55 56 55 50 Z" fill="#e0f2fe" fill-opacity="0.35" stroke="#cbd5e1" stroke-width="1.2"/>
    <path d="M55.6 36 H64.4 V50 Q64.4 55.4 60 55.4 Q55.6 55.4 55.6 50 Z" fill="#dc2626"/>`,

  // Fingerprint — whorl ridges under magnifier
  c_03: `
    <g fill="none" stroke="#f8fafc" stroke-width="1.4" opacity="0.92">
      <path d="M40 12 Q24 14 22 34 Q22 50 34 56"/>
      <path d="M40 16 Q28 18 26 34 Q26 48 36 53"/>
      <path d="M41 20 Q31 22 30 34 Q30 46 38 50"/>
      <path d="M42 24 Q34 26 34 34 Q34 43 41 46"/>
      <path d="M43 28 Q38 30 38 34 Q38 40 43 42"/>
      <path d="M40 12 Q56 12 60 30 Q62 44 54 56"/>
      <path d="M40 16 Q53 16 56 30 Q58 42 51 52"/>
      <path d="M41 20 Q50 21 52 31 Q54 41 48 48"/>
      <path d="M42 24 Q47 25 48 32 Q49 39 45 44"/>
    </g>
    <circle cx="72" cy="30" r="13" fill="#38bdf8" fill-opacity="0.18" stroke="#facc15" stroke-width="3"/>
    <path d="M81 40 L92 54" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>`,

  // Footprint — muddy boot prints walking
  c_04: `
    <g fill="#78350f" stroke="#451a03">
      <path d="M22 50 Q16 40 22 30 Q30 22 36 32 Q38 42 34 50 Q30 56 22 50 Z"/>
      <path d="M24 58 Q22 52 28 52 Q34 52 32 58 Q30 62 24 58 Z"/>
      <path d="M62 34 Q56 24 62 14 Q70 6 76 16 Q78 26 74 34 Q70 40 62 34 Z"/>
      <path d="M64 42 Q62 36 68 36 Q74 36 72 42 Q70 46 64 42 Z"/>
    </g>
    <g stroke="#a16207" stroke-width="1.2"><path d="M23 36 H33 M22 41 H34 M23 46 H33"/><path d="M63 20 H73 M62 25 H74 M63 30 H73"/></g>
    <path d="M8 60 Q12 58 16 60 M84 50 Q88 48 92 50" stroke="#92400e" stroke-width="2" fill="none"/>`,

  // Cigarette Butt — smoked filter with ember
  c_05: `
    <rect x="22" y="34" width="22" height="8" rx="1" transform="rotate(-15 33 38)" fill="#d97706" stroke="#854d0e"/>
    <path d="M26 38 L40 34" stroke="#b45309" stroke-dasharray="1 2" transform="rotate(0)"/>
    <rect x="44" y="30" width="28" height="8" rx="1" transform="rotate(-15 58 34)" fill="#f8fafc" stroke="#cbd5e1"/>
    <ellipse cx="72" cy="28" rx="3" ry="4.2" fill="#475569" transform="rotate(-15 72 28)"/>
    <circle cx="72.5" cy="28" r="1.6" fill="#ef4444"/>
    <path d="M74 25 Q82 18 78 12 Q74 6 82 2" fill="none" stroke="#94a3b8" stroke-width="1.6" opacity="0.8"/>
    <path d="M30 52 Q40 50 48 54 Q40 58 30 52 Z" fill="#64748b" opacity="0.7"/>`,

  // Ash Tray — glass ashtray with resting cigarette and ash
  c_06: `
    <ellipse cx="50" cy="42" rx="36" ry="15" fill="#94a3b8" fill-opacity="0.55" stroke="#e2e8f0" stroke-width="1.5"/>
    <ellipse cx="50" cy="39" rx="26" ry="9" fill="#1e293b"/>
    <g fill="#9ca3af"><circle cx="42" cy="40" r="2.5"/><circle cx="48" cy="42" r="2"/><circle cx="56" cy="39" r="3"/><circle cx="60" cy="42" r="1.6"/></g>
    <rect x="30" y="38" width="12" height="4" fill="#d97706"/>
    <path d="M14 34 Q18 38 22 40" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="68" y="28" width="22" height="4" rx="1" fill="#f8fafc" stroke="#cbd5e1" transform="rotate(-12 79 30)"/>
    <rect x="86" y="25" width="6" height="4" rx="1" fill="#d97706" transform="rotate(-12 89 27)"/>
    <path d="M68 28 Q62 20 66 12 Q70 6 64 2" stroke="#94a3b8" fill="none" stroke-width="1.4" opacity="0.8"/>`,

  // Hair Strand — tweezers holding hairs
  c_07: `
    <path d="M14 20 Q34 34 50 26 Q66 18 90 34" fill="none" stroke="#a16207" stroke-width="1.6"/>
    <path d="M12 26 Q34 40 52 32 Q70 24 88 42" fill="none" stroke="#78350f" stroke-width="1.4"/>
    <path d="M16 32 Q36 44 54 38 Q72 32 86 50" fill="none" stroke="#b45309" stroke-width="1.2"/>
    <path d="M60 60 L44 30 M64 58 L50 29" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 60 Q62 63 64 58" stroke="#cbd5e1" stroke-width="3" fill="none"/>
    <rect x="70" y="4" width="24" height="14" rx="1.5" fill="#f8fafc" fill-opacity="0.15" stroke="#e2e8f0" stroke-dasharray="2 1.5"/>
    <text x="82" y="13.5" text-anchor="middle" font-size="5" fill="#e2e8f0" font-family="sans-serif">DNA</text>`,

  // Saliva / DNA Sample — double helix with swab
  c_08: `
    <path d="M14 14 Q34 34 54 14 M14 52 Q34 32 54 52" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M20 20 V46 M27 26 V40 M34 30 V36 M41 26 V40 M48 20 V46" stroke-width="2.3"/>
    <path d="M20 20 V46" stroke="#facc15" stroke-width="2.3"/><path d="M27 26 V40" stroke="#ef4444" stroke-width="2.3"/><path d="M41 26 V40" stroke="#22c55e" stroke-width="2.3"/><path d="M48 20 V46" stroke="#a78bfa" stroke-width="2.3"/>
    <path d="M62 54 L88 14" stroke="#f8fafc" stroke-width="2.2"/>
    <ellipse cx="89" cy="12" rx="4" ry="6" transform="rotate(33 89 12)" fill="#f8fafc" stroke="#cbd5e1"/>
    <path d="M90 22 q2 3.5 0 5 q-2 -1.5 0 -5z" fill="#bae6fd"/>`,

  // Broken Teeth — cracked molar and fragment
  c_09: `
    <path d="M28 14 Q38 8 48 14 Q58 8 68 14 Q75 25 69 36 L65 54 Q62 59 59 54 L55 41 Q48 36 41 41 L37 54 Q34 59 31 54 L27 36 Q21 25 28 14 Z" fill="#fefce8" stroke="#a8a29e" stroke-width="1.5"/>
    <path d="M48 14 L44 23 L51 29 L46 38" stroke="#7f1d1d" fill="none" stroke-width="1.6"/>
    <path d="M32 18 Q36 15 40 17" stroke="#ffffff" stroke-width="1.6" fill="none"/>
    <path d="M78 44 L88 41 L86 51 Z" fill="#fefce8" stroke="#a8a29e"/>
    <path d="M82 54 L86 55 L84 59 Z" fill="#fefce8" stroke="#a8a29e"/>
    <path d="M60 59 q2.5 3.5 0 5 q-2.5 -1.5 0 -5z" fill="#dc2626"/>`,

  // Wedding Ring — two interlocked gold bands
  c_10: `
    <ellipse cx="40" cy="36" rx="18" ry="14" fill="none" stroke="#a16207" stroke-width="7"/>
    <ellipse cx="40" cy="36" rx="18" ry="14" fill="none" stroke="#facc15" stroke-width="4.5"/>
    <ellipse cx="62" cy="34" rx="18" ry="14" fill="none" stroke="#a16207" stroke-width="7"/>
    <ellipse cx="62" cy="34" rx="18" ry="14" fill="none" stroke="#fde047" stroke-width="4.5"/>
    <path d="M52 24 Q56 22 58 26" stroke="#facc15" stroke-width="4.5" fill="none"/>
    <path d="M30 26 Q34 23 38 23" stroke="#fef9c3" stroke-width="1.5" fill="none"/>
    <path d="M84 12 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#ffffff"/>`,

  // Diamond Necklace — chain with cut diamond pendant
  c_11: `
    <path d="M18 8 Q50 50 82 8" fill="none" stroke="#e2e8f0" stroke-width="2.4" stroke-dasharray="3 1.5"/>
    <path d="M50 36 L50 39" stroke="#e2e8f0" stroke-width="1.5"/>
    <polygon points="42,40 58,40 62,45 50,60 38,45" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.2"/>
    <path d="M38 45 H62 M42 40 L46 45 L50 60 L54 45 L58 40 M46 45 L50 40 L54 45" stroke="#0284c7" stroke-width="0.8" fill="none"/>
    <path d="M70 46 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2z M28 50 l1 2.4 2.4 1 -2.4 1 -1 2.4 -1 -2.4 -2.4 -1 2.4 -1z" fill="#ffffff"/>`,

  // Red Lipstick — open tube + kiss mark
  c_12: `
    <rect x="18" y="38" width="18" height="22" rx="2" fill="#facc15" stroke="#a16207"/>
    <rect x="20" y="28" width="14" height="10" fill="#e5e7eb" stroke="#9ca3af"/>
    <path d="M21 28 V16 L33 10 V28 Z" fill="#dc2626" stroke="#7f1d1d"/>
    <path d="M24 26 V17" stroke="#fca5a5" stroke-width="1.2"/>
    <path d="M52 32 Q58 22 66 28 Q74 22 80 32 Q74 36 66 34 Q58 36 52 32 Z" fill="#dc2626"/>
    <path d="M52 34 Q66 52 80 34 Q72 40 66 39 Q58 40 52 34 Z" fill="#b91c1c"/>
    <path d="M56 32 Q66 35 76 32" stroke="#7f1d1d" stroke-width="0.8" fill="none"/>`,

  // Broken Glasses — spectacles with shattered lens
  c_13: `
    <circle cx="32" cy="34" r="14" fill="#bae6fd" fill-opacity="0.2" stroke="#1f2937" stroke-width="3"/>
    <circle cx="68" cy="34" r="14" fill="#bae6fd" fill-opacity="0.2" stroke="#1f2937" stroke-width="3"/>
    <path d="M46 32 Q50 28 54 32" stroke="#1f2937" stroke-width="2.5" fill="none"/>
    <path d="M18 30 L6 24 M82 30 L94 24" stroke="#1f2937" stroke-width="2.5"/>
    <path d="M32 34 L22 26 M32 34 L40 22 M32 34 L44 38 M32 34 L26 46 M32 34 L36 47" stroke="#f8fafc" stroke-width="1"/>
    <path d="M26 30 L30 26 L36 28 L38 36 L32 40 L26 38 Z" fill="none" stroke="#f8fafc" stroke-width="0.8"/>
    <path d="M38 54 L42 52 L41 56 Z M24 56 L27 55 L26 58 Z" fill="#bae6fd" fill-opacity="0.6"/>`,

  // High Heel Shoe — red stiletto
  c_14: `
    <path d="M22 38 C30 38 42 46 62 46 C76 46 84 40 86 33 C82 33 72 37 60 37 C42 37 32 24 22 24 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <polygon points="22,38 26,38 24,58 20,58" fill="#991b1b"/>
    <path d="M30 29 Q48 39 74 37" fill="none" stroke="#facc15" stroke-width="1.2"/>
    <path d="M60 46 H86 Q88 46 86 44" stroke="#7f1d1d" stroke-width="2" fill="none"/>`,

  // Leather Shoe — polished oxford
  c_15: `
    <path d="M20 46 L20 35 Q32 33 44 29 Q60 24 80 37 Q87 43 82 48 L20 48 Z" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
    <path d="M44 29 Q50 36 46 46" stroke="#451a03" fill="none"/>
    <rect x="20" y="46" width="16" height="6" fill="#0f172a"/>
    <rect x="36" y="48" width="46" height="4" rx="1" fill="#0f172a"/>
    <path d="M50 30 L54 34 M54 29 L58 33 M58 29 L61 32" stroke="#fde68a" stroke-width="1.3"/>
    <path d="M64 32 Q72 34 78 39" stroke="#b45309" stroke-width="1.5" fill="none"/>`,

  // Leather Glove
  c_16: `
    <path d="M34 60 L34 42 L25 32 Q23 27 28 26 L38 34 L38 13 Q41 9 44 13 L44 28 L44 9 Q47 5 50 9 L50 28 L50 11 Q53 7 56 11 L56 30 L56 17 Q59 13 62 17 L62 46 Q62 54 60 60 Z" fill="#92400e" stroke="#451a03" stroke-width="1.5"/>
    <rect x="32" y="52" width="30" height="10" rx="1.5" fill="#78350f" stroke="#451a03"/>
    <path d="M42 40 Q48 36 56 40" stroke="#fbbf24" stroke-width="0.9" stroke-dasharray="1.5 1.5" fill="none"/>
    <path d="M40 30 V40 M47 30 V40 M53 30 V40" stroke="#b45309" stroke-width="0.8"/>
    <path d="M70 30 q3 5 0 7 q-3 -2 0 -7z" fill="#dc2626"/>`,

  // Apron — kitchen apron with blood spots
  c_17: `
    <path d="M40 8 Q50 0 60 8" fill="none" stroke="#f8fafc" stroke-width="2"/>
    <path d="M40 8 H60 L62 24 Q74 24 76 30 L72 61 H28 L24 30 Q26 24 38 24 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="38" y="38" width="24" height="12" rx="1" fill="none" stroke="#94a3b8"/>
    <path d="M50 38 V50" stroke="#94a3b8"/>
    <path d="M24 30 Q14 32 10 40 M76 30 Q86 32 90 40" stroke="#f8fafc" stroke-width="2" fill="none"/>
    <g fill="#dc2626"><circle cx="44" cy="20" r="2"/><circle cx="56" cy="30" r="1.4"/><circle cx="34" cy="52" r="2.4"/><circle cx="64" cy="56" r="1.6"/></g>`,

  // Boxer Shorts — plaid
  c_18: `
    <path d="M26 18 L74 18 L78 50 L56 50 L50 37 L44 50 L22 50 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="25" y="18" width="50" height="6" fill="#f87171" stroke="#dc2626"/>
    <path d="M36 24 L33 50 M64 24 L67 50 M50 24 V37" stroke="#dc2626" stroke-dasharray="3 2"/>
    <path d="M24 34 H76 M23 42 H46 M54 42 H77" stroke="#2563eb" stroke-dasharray="3 2"/>`,

  // Briefs — white briefs with blue waistband
  c_19: `
    <path d="M20 18 H80 L78 30 Q62 36 57 54 H43 Q38 36 22 30 Z" fill="#f8fafc" stroke="#1d4ed8" stroke-width="1.5"/>
    <rect x="20" y="18" width="60" height="7" fill="#1d4ed8"/>
    <text x="50" y="23.6" text-anchor="middle" font-size="4.5" fill="#ffffff" font-weight="bold" font-family="sans-serif">MEN</text>
    <path d="M44 27 Q50 33 46 46 M56 27 Q50 33 54 46" stroke="#93c5fd" fill="none"/>
    <path d="M22 30 Q38 36 43 54 M78 30 Q62 36 57 54" stroke="#1d4ed8" stroke-width="2" fill="none"/>`,

  // Perfume Scent — bottle with atomizer and scent swirls
  c_20: `
    <path d="M26 30 H58 Q62 30 62 34 V56 Q62 60 58 60 H26 Q22 60 22 56 V34 Q22 30 26 30 Z" fill="#f9a8d4" fill-opacity="0.75" stroke="#be185d" stroke-width="1.5"/>
    <rect x="34" y="22" width="16" height="8" fill="#facc15" stroke="#a16207"/>
    <path d="M42 22 V16 H28" stroke="#a16207" stroke-width="2" fill="none"/>
    <ellipse cx="22" cy="16" rx="6" ry="5" fill="#be185d"/>
    <rect x="30" y="40" width="24" height="10" rx="1" fill="#fdf2f8"/>
    <text x="42" y="47.5" text-anchor="middle" font-size="5" font-style="italic" fill="#be185d" font-family="serif">Parfum</text>
    <path d="M66 26 Q74 18 70 10 M74 34 Q86 28 82 18 M76 44 Q92 42 92 30" stroke="#f9a8d4" stroke-width="1.6" fill="none" stroke-dasharray="3 2"/>`,

  // Wristwatch — stopped analog watch with cracked glass
  c_21: `
    <rect x="40" y="2" width="20" height="16" rx="2" fill="#78350f" stroke="#451a03"/>
    <rect x="40" y="47" width="20" height="16" rx="2" fill="#78350f" stroke="#451a03"/>
    <circle cx="50" cy="33" r="17" fill="#e2e8f0" stroke="#facc15" stroke-width="3.5"/>
    <circle cx="50" cy="33" r="13" fill="#fefce8"/>
    <path d="M50 21 V23 M50 43 V45 M38 33 H40 M60 33 H62" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M50 33 L50 24 M50 33 L57 37" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="50" cy="33" r="1.4" fill="#dc2626"/>
    <rect x="67" y="31" width="4" height="4" fill="#facc15"/>
    <path d="M40 24 L46 30 L44 36 L50 40" stroke="#94a3b8" stroke-width="0.8" fill="none"/>
    <text x="82" y="20" font-size="6" font-weight="bold" fill="#fca5a5" font-family="monospace">2:21</text>`,

  // Tattoo — forearm with anchor tattoo
  c_22: `
    <path d="M6 44 Q30 28 70 22 Q90 20 94 30 Q94 40 76 42 Q40 48 12 60 Q2 56 6 44 Z" fill="#f2c79c" stroke="#9a3412" stroke-width="1.2"/>
    <g stroke="#1e3a8a" stroke-width="2.2" fill="none" stroke-linecap="round">
      <circle cx="46" cy="25" r="2.6"/>
      <path d="M46 28 L48 44"/>
      <path d="M41 32 H52"/>
      <path d="M38 38 Q40 46 48 44 Q56 44 58 36"/>
    </g>
    <path d="M58 30 Q62 26 66 30 Q70 26 74 30 Q74 34 66 39 Q58 34 58 30 Z" fill="#dc2626"/>
    <path d="M28 46 Q34 38 42 40" stroke="#1e3a8a" stroke-width="1.5" fill="none"/>`,

  // Medical Mask — surgical mask with ear loops
  c_23: `
    <path d="M28 22 Q50 16 72 22 L72 44 Q50 52 28 44 Z" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.5"/>
    <path d="M28 28 Q50 23 72 28 M28 34 Q50 30 72 34 M28 40 Q50 37 72 40" stroke="#e0f2fe" stroke-width="1.3" fill="none"/>
    <path d="M28 24 Q12 32 28 42 M72 24 Q88 32 72 42" fill="none" stroke="#f8fafc" stroke-width="2"/>
    <path d="M40 19.5 Q50 17 60 19.5" stroke="#94a3b8" stroke-width="2"/>`,

  // Love Letter — envelope sealed with heart
  c_24: `
    <rect x="18" y="16" width="64" height="40" rx="2" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
    <path d="M18 16 L50 40 L82 16" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
    <path d="M18 56 L42 36 M82 56 L58 36" stroke="#f9a8d4" stroke-width="1"/>
    <path d="M50 46 Q42 40 42 35 Q42 30 47 30 Q50 30 50 34 Q50 30 53 30 Q58 30 58 35 Q58 40 50 46 Z" fill="#dc2626" stroke="#7f1d1d"/>
    <path d="M84 12 Q80 8 80 6 Q80 3 83 3 Q84 3 84 5 Q84 3 85.5 3 Q88 3 88 6 Q88 8 84 12 Z" fill="#f472b6"/>`,

  // Hotel Keycard — card with magstripe and room number
  c_25: `
    <rect x="18" y="12" width="64" height="42" rx="4" fill="#1e3a8a" stroke="#93c5fd" stroke-width="1.5"/>
    <rect x="18" y="18" width="64" height="7" fill="#0f172a"/>
    <rect x="24" y="31" width="10" height="8" rx="1.2" fill="#facc15" stroke="#a16207"/>
    <path d="M26 35 H32 M29 31 V39" stroke="#a16207" stroke-width="0.6"/>
    <text x="78" y="38" text-anchor="end" font-size="6" font-weight="bold" fill="#e0e7ff" font-family="sans-serif">GRAND HOTEL</text>
    <text x="78" y="49" text-anchor="end" font-size="8" font-weight="bold" fill="#facc15" font-family="monospace">#1208</text>`,

  // Bank Statement — bank letterhead with transaction table
  c_26: `
    <rect x="22" y="6" width="56" height="56" rx="2" fill="#f8fafc" stroke="#94a3b8"/>
    <rect x="22" y="6" width="56" height="10" fill="#1e40af"/>
    <path d="M28 14 L32 9 L36 14 Z" fill="#facc15"/>
    <text x="40" y="13.5" font-size="5" font-weight="bold" fill="#ffffff" font-family="sans-serif">HK BANK</text>
    <path d="M28 22 H72 M28 28 H72 M28 34 H72 M28 40 H72 M28 46 H72" stroke="#cbd5e1"/>
    <path d="M28 25 H44 M28 31 H40 M28 37 H46 M28 43 H38" stroke="#64748b" stroke-width="1.2"/>
    <text x="72" y="26" text-anchor="end" font-size="4" fill="#15803d" font-family="monospace">+2,000</text>
    <text x="72" y="32" text-anchor="end" font-size="4" fill="#b91c1c" font-family="monospace">-50,000</text>
    <text x="72" y="38" text-anchor="end" font-size="4" fill="#b91c1c" font-family="monospace">-80,000</text>
    <rect x="50" y="50" width="22" height="8" fill="none" stroke="#b91c1c" stroke-width="1.2"/>
    <text x="61" y="56" text-anchor="middle" font-size="4.5" font-weight="bold" fill="#b91c1c" font-family="sans-serif">OVERDUE</text>`,

  // Banknote — stack of cash bills
  c_27: `
    <rect x="14" y="22" width="68" height="34" rx="2" fill="#15803d" stroke="#14532d" transform="rotate(-8 48 39)"/>
    <rect x="18" y="16" width="68" height="34" rx="2" fill="#22c55e" stroke="#14532d" stroke-width="1.2"/>
    <rect x="22" y="20" width="60" height="26" rx="1" fill="none" stroke="#bbf7d0" stroke-width="1"/>
    <circle cx="52" cy="33" r="9" fill="#bbf7d0" stroke="#14532d"/>
    <text x="52" y="36.5" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d" font-family="serif">$</text>
    <text x="27" y="28" font-size="6" font-weight="bold" fill="#14532d" font-family="sans-serif">100</text>
    <text x="78" y="44" text-anchor="end" font-size="6" font-weight="bold" fill="#14532d" font-family="sans-serif">100</text>`,

  // Lottery Ticket — winning numbers circled
  c_28: `
    <rect x="12" y="12" width="76" height="42" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <rect x="12" y="12" width="76" height="10" fill="#d97706"/>
    <text x="50" y="19.6" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#ffffff" font-family="sans-serif">★ LOTTO 6/45 ★</text>
    <g font-size="6" font-family="monospace" fill="#78350f" text-anchor="middle">
      <text x="22" y="34">07</text><text x="34" y="34">13</text><text x="46" y="34">21</text><text x="58" y="34">28</text><text x="70" y="34">36</text><text x="82" y="34">44</text>
    </g>
    <g fill="none" stroke="#dc2626" stroke-width="1.3"><circle cx="22" cy="32" r="4.5"/><circle cx="46" cy="32" r="4.5"/><circle cx="58" cy="32" r="4.5"/><circle cx="82" cy="32" r="4.5"/></g>
    <path d="M18 42 v6 M21 42 v6 M23 42 v6 M26 42 v6 M30 42 v6 M32 42 v6 M35 42 v6 M39 42 v6 M41 42 v6" stroke="#0f172a" stroke-width="1"/>
    <text x="84" y="49" text-anchor="end" font-size="5" font-weight="bold" fill="#15803d" font-family="sans-serif">WINNER</text>`,

  // Torn Ticket Stub — train ticket with ripped edge
  c_29: `
    <path d="M10 16 H62 L58 22 L64 28 L58 34 L64 40 L58 46 L62 52 H10 Z" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
    <rect x="10" y="16" width="10" height="36" fill="#dc2626"/>
    <text x="15" y="36" text-anchor="middle" font-size="5" font-weight="bold" fill="#ffffff" font-family="sans-serif" transform="rotate(-90 15 34)">MTR</text>
    <text x="24" y="27" font-size="5" font-weight="bold" fill="#78350f" font-family="sans-serif">ADMIT ONE</text>
    <text x="24" y="36" font-size="4.5" fill="#78350f" font-family="monospace">KOWLOON →</text>
    <text x="24" y="44" font-size="4.5" fill="#78350f" font-family="monospace">23:40 No.0427</text>
    <path d="M72 18 L80 16 L76 24 L82 30 L76 36 L82 42 L78 48 L86 50 L90 22 Z" fill="#fde68a" stroke="#b45309" stroke-width="1.2" transform="rotate(14 80 34)"/>`,

  // Certificate — diploma with ribbon rosette
  c_30: `
    <rect x="12" y="10" width="70" height="46" rx="1.5" fill="#fefce8" stroke="#a16207" stroke-width="1.5"/>
    <rect x="16" y="14" width="62" height="38" fill="none" stroke="#ca8a04" stroke-width="0.8" stroke-dasharray="2 1"/>
    <text x="47" y="24" text-anchor="middle" font-size="6.5" font-weight="bold" fill="#78350f" font-family="serif">CERTIFICATE</text>
    <path d="M26 31 H68 M30 37 H64 M34 43 H52" stroke="#a8a29e" stroke-width="1.2"/>
    <path d="M70 46 L66 62 L72 58 L76 62 L76 48 Z" fill="#dc2626" stroke="#7f1d1d"/>
    <circle cx="72" cy="44" r="8" fill="#facc15" stroke="#a16207" stroke-width="1.5"/>
    <circle cx="72" cy="44" r="4.5" fill="none" stroke="#a16207"/>`,

  // Half-burnt Diary — book with charred edge
  c_31: `
    <path d="M14 14 L58 10 L62 56 L18 60 Z" fill="#7c2d12" stroke="#451a03" stroke-width="1.5"/>
    <path d="M14 14 L18 60 L22 59 L18 14 Z" fill="#451a03"/>
    <path d="M30 22 L50 20 L51 30 L31 32 Z" fill="#fde68a"/>
    <text x="40.5" y="28.5" text-anchor="middle" font-size="5" font-style="italic" fill="#451a03" font-family="serif" transform="rotate(-5 40 27)">Diary</text>
    <path d="M58 10 L66 12 L62 18 L70 22 L64 28 L72 34 L64 40 L70 46 L62 50 L62 56 Z" fill="#1c1917" stroke="#0c0a09"/>
    <path d="M60 16 L64 22 L60 30 L66 36 L60 44 L64 50" stroke="#f97316" stroke-width="1.5" fill="none"/>
    <path d="M74 14 Q78 8 76 2 M80 22 Q86 16 84 8" stroke="#78716c" stroke-width="1.6" fill="none" opacity="0.8"/>
    <circle cx="70" cy="40" r="1.2" fill="#fb923c"/><circle cx="74" cy="30" r="0.9" fill="#fb923c"/>`,

  // Signature — forged signature with fountain pen
  c_32: `
    <rect x="8" y="12" width="64" height="44" rx="1.5" fill="#f8fafc" stroke="#94a3b8"/>
    <path d="M14 20 H60 M14 26 H56 M14 32 H50" stroke="#cbd5e1" stroke-width="1.2"/>
    <path d="M14 46 H64" stroke="#94a3b8" stroke-dasharray="2 1.5"/>
    <path d="M16 44 Q20 32 24 42 Q26 48 30 38 Q33 30 34 42 Q36 46 40 40 Q44 34 46 42 Q50 46 56 38 Q60 34 62 40" fill="none" stroke="#1e3a8a" stroke-width="1.6"/>
    <path d="M70 52 L92 14 L96 17 L74 55 Z" fill="#1f2937" stroke="#0f172a"/>
    <path d="M70 52 L68 60 L74 55 Z" fill="#facc15" stroke="#a16207"/>
    <path d="M88 20 L92 22" stroke="#facc15" stroke-width="1.5"/>`,

  // Business Card — two stacked cards with logo
  c_33: `
    <rect x="22" y="22" width="62" height="34" rx="2" fill="#cbd5e1" stroke="#64748b" transform="rotate(8 53 39)"/>
    <rect x="14" y="14" width="62" height="34" rx="2" fill="#f8fafc" stroke="#64748b" stroke-width="1.2"/>
    <rect x="20" y="20" width="12" height="12" rx="2" fill="#0f766e"/>
    <path d="M23 29 L26 23 L29 29" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <text x="36" y="26" font-size="5.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">MR. CHAN</text>
    <text x="36" y="31.5" font-size="3.6" fill="#475569" font-family="sans-serif">Managing Director</text>
    <path d="M20 39 H48 M20 43 H40" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="70" y="44" text-anchor="end" font-size="3.6" fill="#475569" font-family="monospace">+852</text>`,

  // Receipt — long till receipt with zigzag edge
  c_34: `
    <path d="M30 4 H70 V58 L66 62 L62 58 L58 62 L54 58 L50 62 L46 58 L42 62 L38 58 L34 62 L30 58 Z" fill="#f8fafc" stroke="#94a3b8"/>
    <text x="50" y="12" text-anchor="middle" font-size="5" font-weight="bold" fill="#0f172a" font-family="monospace">RECEIPT</text>
    <path d="M34 15 H66" stroke="#94a3b8" stroke-dasharray="1.5 1"/>
    <g font-size="3.8" font-family="monospace" fill="#334155">
      <text x="34" y="21">ROPE</text><text x="66" y="21" text-anchor="end">39.0</text>
      <text x="34" y="27">GLOVES</text><text x="66" y="27" text-anchor="end">55.0</text>
      <text x="34" y="33">BLEACH</text><text x="66" y="33" text-anchor="end">18.5</text>
    </g>
    <path d="M34 37 H66" stroke="#94a3b8" stroke-dasharray="1.5 1"/>
    <text x="34" y="44" font-size="4.5" font-weight="bold" fill="#0f172a" font-family="monospace">TOTAL</text>
    <text x="66" y="44" text-anchor="end" font-size="4.5" font-weight="bold" fill="#0f172a" font-family="monospace">112.5</text>
    <path d="M36 49 v5 M38 49 v5 M41 49 v5 M43 49 v5 M46 49 v5 M49 49 v5 M51 49 v5 M54 49 v5 M57 49 v5 M60 49 v5 M63 49 v5" stroke="#0f172a" stroke-width="0.9"/>`,

  // Will / Testament — parchment scroll with wax seal
  c_35: `
    <rect x="22" y="12" width="56" height="42" fill="#fef3c7" stroke="#a16207" stroke-width="1.2"/>
    <rect x="16" y="8" width="68" height="7" rx="3.5" fill="#d97706" stroke="#78350f"/>
    <rect x="16" y="51" width="68" height="7" rx="3.5" fill="#d97706" stroke="#78350f"/>
    <text x="50" y="24" text-anchor="middle" font-size="6" font-weight="bold" font-style="italic" fill="#78350f" font-family="serif">Last Will</text>
    <path d="M28 30 H72 M28 35 H72 M28 40 H60" stroke="#b45309" stroke-width="0.9"/>
    <circle cx="64" cy="45" r="5.5" fill="#b91c1c" stroke="#7f1d1d"/>
    <path d="M62 45 L64 42 L66 45 L64 48 Z" fill="#fca5a5"/>
    <path d="M28 46 Q32 42 36 46 T44 46" stroke="#1e3a8a" fill="none"/>`,

  // Flash Drive / USB
  c_36: `
    <g transform="rotate(-18 50 34)">
      <rect x="18" y="22" width="48" height="24" rx="4" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
      <rect x="18" y="22" width="12" height="24" rx="4" fill="#334155"/>
      <rect x="66" y="26" width="18" height="16" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="72" y="30" width="4" height="3" fill="#0f172a"/><rect x="72" y="35" width="4" height="3" fill="#0f172a"/>
      <rect x="36" y="28" width="24" height="12" rx="1.5" fill="#f8fafc"/>
      <text x="48" y="36.3" text-anchor="middle" font-size="5" font-weight="bold" fill="#1e293b" font-family="sans-serif">32GB</text>
      <circle cx="24" cy="34" r="2" fill="#22c55e"/>
    </g>
    <g stroke="#38bdf8" stroke-width="1.6" fill="none"><path d="M18 60 V48 M18 54 L12 50 V47 M18 52 L24 49"/></g>
    <path d="M18 44 L15 49 H21 Z" fill="#38bdf8"/><circle cx="12" cy="46" r="1.6" fill="#38bdf8"/><rect x="22.5" y="46.5" width="3" height="3" fill="#38bdf8"/>`,

  // Computer Monitor — screen on stand showing chat
  c_37: `
    <rect x="12" y="6" width="76" height="44" rx="3" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="16" y="10" width="68" height="36" rx="1" fill="#0c4a6e"/>
    <rect x="20" y="14" width="34" height="8" rx="2" fill="#1e3a8a"/>
    <rect x="46" y="26" width="34" height="8" rx="2" fill="#0369a1"/>
    <path d="M23 18 H48 M49 30 H76" stroke="#e0f2fe" stroke-width="1"/>
    <rect x="20" y="38" width="22" height="4" rx="1" fill="#dc2626"/>
    <rect x="44" y="50" width="12" height="6" fill="#334155"/>
    <rect x="32" y="56" width="36" height="4" rx="1.5" fill="#475569"/>`,

  // Keyboard — perspective keyboard
  c_38: `
    <path d="M10 26 L84 20 L94 46 L14 56 Z" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
    <g fill="#cbd5e1" stroke="#64748b" stroke-width="0.5">
      <path d="M15 29 L22 28.5 L23 33 L16 33.6 Z M24 28.3 L31 27.8 L32 32.3 L25 32.8 Z M33 27.6 L40 27 L41 31.6 L34 32.1 Z M42 26.9 L49 26.3 L50 30.9 L43 31.4 Z M51 26.2 L58 25.6 L59 30.2 L52 30.7 Z M60 25.5 L67 24.9 L68 29.5 L61 30 Z M69 24.8 L76 24.2 L77 28.8 L70 29.3 Z M78 24 L84 23.5 L85.5 28 L79 28.6 Z"/>
      <path d="M17 36 L24 35.4 L25 40 L18 40.6 Z M26 35.2 L33 34.6 L34 39.2 L27 39.8 Z M35 34.4 L42 33.8 L43 38.4 L36 39 Z M44 33.6 L51 33 L52 37.6 L45 38.2 Z M53 32.8 L60 32.2 L61 36.8 L54 37.4 Z M62 32 L69 31.4 L70 36 L63 36.6 Z M71 31.2 L78 30.6 L79.5 35.2 L72 35.8 Z M80 30.4 L87 29.8 L88.5 34.4 L81.5 35 Z"/>
      <path d="M19 43 L26 42.4 L27 47 L20 47.6 Z M28 42.2 L66 39 L67.5 43.6 L29 46.8 Z M68 38.8 L75 38.2 L76.5 42.8 L69.5 43.4 Z M77 38 L89 37 L90.5 41.6 L78.5 42.6 Z"/>
    </g>
    <path d="M60 26 L62 24" stroke="#dc2626" stroke-width="2"/>`,

  // Cassette Tape
  c_39: `
    <rect x="12" y="12" width="76" height="44" rx="3" fill="#1f2937" stroke="#0f172a" stroke-width="1.5"/>
    <rect x="18" y="16" width="64" height="12" rx="1" fill="#fde68a"/>
    <text x="50" y="24.5" text-anchor="middle" font-size="5.5" font-weight="bold" fill="#78350f" font-family="sans-serif">EVIDENCE — SIDE A</text>
    <rect x="28" y="31" width="44" height="14" rx="7" fill="#e2e8f0" fill-opacity="0.25" stroke="#94a3b8"/>
    <circle cx="36" cy="38" r="6" fill="#78350f"/><circle cx="64" cy="38" r="6" fill="#78350f"/>
    <circle cx="36" cy="38" r="2.5" fill="#f8fafc"/><circle cx="64" cy="38" r="2.5" fill="#f8fafc"/>
    <path d="M30 56 L34 48 H66 L70 56" fill="#334155" stroke="#0f172a"/>
    <circle cx="40" cy="52" r="1.3" fill="#0f172a"/><circle cx="60" cy="52" r="1.3" fill="#0f172a"/>`,

  // Mobile Phone — smartphone with cracked screen and missed calls
  c_40: `
    <rect x="32" y="4" width="36" height="58" rx="5" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="35" y="10" width="30" height="44" rx="1" fill="#1e40af"/>
    <rect x="38" y="14" width="24" height="9" rx="2" fill="#f8fafc" fill-opacity="0.9"/>
    <text x="50" y="20" text-anchor="middle" font-size="3.8" font-weight="bold" fill="#b91c1c" font-family="sans-serif">3 Missed Calls</text>
    <rect x="38" y="26" width="24" height="7" rx="2" fill="#f8fafc" fill-opacity="0.7"/>
    <path d="M40 29.5 H58" stroke="#475569"/>
    <path d="M58 40 L50 46 L54 52 M50 46 L42 44 M58 40 L64 36" stroke="#e2e8f0" stroke-width="0.9" fill="none"/>
    <rect x="45" y="6" width="10" height="2" rx="1" fill="#334155"/>
    <circle cx="50" cy="58" r="1.8" fill="#334155"/>`,

  // Security Footage — CCTV camera with REC monitor
  c_41: `
    <path d="M10 8 H22 V14 H16 V20" stroke="#475569" stroke-width="3" fill="none"/>
    <g transform="rotate(14 34 24)">
      <rect x="16" y="16" width="38" height="16" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <rect x="54" y="18" width="6" height="12" fill="#1f2937"/>
      <circle cx="57" cy="24" r="3.5" fill="#0ea5e9" stroke="#0f172a"/>
      <path d="M16 14 H54" stroke="#475569" stroke-width="2"/>
    </g>
    <rect x="52" y="36" width="42" height="26" rx="2" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
    <rect x="55" y="39" width="36" height="20" fill="#14532d" fill-opacity="0.6"/>
    <circle cx="80" cy="50" r="3" fill="#94a3b8"/><path d="M80 53 V58 M77 55 L83 55" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="59" cy="43" r="1.8" fill="#ef4444"/>
    <text x="62.5" y="44.6" font-size="4.5" font-weight="bold" fill="#ef4444" font-family="monospace">REC</text>
    <text x="89" y="57" text-anchor="end" font-size="3.5" fill="#a7f3d0" font-family="monospace">02:13:07</text>`,

  // Smart Watch — square digital face with heart rate
  c_42: `
    <rect x="38" y="2" width="24" height="14" rx="3" fill="#334155" stroke="#0f172a"/>
    <rect x="38" y="49" width="24" height="14" rx="3" fill="#334155" stroke="#0f172a"/>
    <rect x="30" y="14" width="40" height="38" rx="9" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <rect x="70" y="24" width="3" height="8" rx="1" fill="#94a3b8"/>
    <text x="50" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#f8fafc" font-family="sans-serif">03:14</text>
    <path d="M36 40 H42 L44 35 L47 45 L50 33 L53 42 L55 40 H64" stroke="#ef4444" stroke-width="1.5" fill="none"/>
    <text x="50" y="48.5" text-anchor="middle" font-size="4" fill="#fca5a5" font-family="sans-serif">♥ 0 bpm</text>`,

  // Take-out Food — Chinese takeaway box with chopsticks
  c_43: `
    <line x1="42" y1="6" x2="56" y2="38" stroke="#ca8a04" stroke-width="2" stroke-linecap="round"/>
    <line x1="47" y1="5" x2="60" y2="36" stroke="#ca8a04" stroke-width="2" stroke-linecap="round"/>
    <path d="M34 25 Q50 10 66 25" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="30,24 70,24 63,57 37,57" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
    <polygon points="30,24 38,16 62,16 70,24" fill="#fee2e2" stroke="#dc2626"/>
    <rect x="43" y="33" width="14" height="14" rx="1" fill="#dc2626"/>
    <text x="50" y="43.5" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff" font-family="serif">福</text>`,

  // Steamed Buns — bamboo steamer with buns
  c_44: `
    <ellipse cx="50" cy="48" rx="38" ry="10" fill="#d6a35c" stroke="#78350f" stroke-width="1.5"/>
    <path d="M12 48 V54 Q50 70 88 54 V48" fill="#b7843d" stroke="#78350f" stroke-width="1.5"/>
    <path d="M20 56 V60 M34 59 V63 M50 60 V64 M66 59 V63 M80 56 V60" stroke="#78350f"/>
    <g fill="#fefce8" stroke="#d6d3d1" stroke-width="1.2">
      <path d="M22 46 Q22 30 34 30 Q46 30 46 46 Z"/>
      <path d="M40 44 Q40 26 52 26 Q64 26 64 44 Z"/>
      <path d="M58 46 Q58 30 70 30 Q82 30 82 46 Z"/>
    </g>
    <path d="M34 30 L32 36 M34 30 L36 36 M52 26 L50 32 M52 26 L54 32 M70 30 L68 36 M70 30 L72 36" stroke="#d6d3d1"/>
    <path d="M30 22 Q28 16 32 10 M52 20 Q50 12 54 6 M72 22 Q70 16 74 10" stroke="#e2e8f0" stroke-width="1.6" fill="none"/>`,

  // Eggs — two eggs and one cracked with yolk
  c_45: `
    <ellipse cx="26" cy="38" rx="11" ry="15" fill="#fef3c7" stroke="#d6a35c" stroke-width="1.5"/>
    <ellipse cx="46" cy="36" rx="11" ry="15" fill="#fde7c8" stroke="#d6a35c" stroke-width="1.5"/>
    <ellipse cx="74" cy="50" rx="18" ry="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <circle cx="74" cy="49" r="6" fill="#f59e0b" stroke="#d97706"/>
    <circle cx="72" cy="47" r="1.6" fill="#fde68a"/>
    <path d="M60 30 L64 26 L66 30 L70 26 L72 30 L76 26 L80 30 Q82 20 72 16 Q60 18 60 30 Z" fill="#fef3c7" stroke="#d6a35c" stroke-width="1.2"/>
    <path d="M22 30 Q24 26 28 27" stroke="#ffffff" stroke-width="1.5" fill="none"/>`,

  // Preserved Plums — glass jar of dark plums
  c_46: `
    <rect x="30" y="8" width="40" height="8" rx="2" fill="#b91c1c" stroke="#7f1d1d"/>
    <path d="M28 16 H72 Q76 16 76 22 V56 Q76 62 70 62 H30 Q24 62 24 56 V22 Q24 16 28 16 Z" fill="#e0f2fe" fill-opacity="0.25" stroke="#cbd5e1" stroke-width="1.5"/>
    <g fill="#7f1d1d" stroke="#450a0a">
      <circle cx="36" cy="54" r="6"/><circle cx="50" cy="55" r="6"/><circle cx="64" cy="54" r="6"/>
      <circle cx="42" cy="44" r="6"/><circle cx="57" cy="44" r="6"/><circle cx="49" cy="34" r="5.5"/>
    </g>
    <g fill="#f87171"><circle cx="34" cy="52" r="1.3"/><circle cx="48" cy="53" r="1.3"/><circle cx="62" cy="52" r="1.3"/><circle cx="40" cy="42" r="1.3"/><circle cx="55" cy="42" r="1.3"/></g>
    <rect x="30" y="22" width="40" height="8" fill="#fef3c7" stroke="#a16207"/>
    <text x="50" y="28.3" text-anchor="middle" font-size="5" font-weight="bold" fill="#7f1d1d" font-family="serif">話梅 PLUM</text>`,

  // Potted Plant
  c_47: `
    <path d="M50 38 Q48 26 40 18 M50 38 Q52 24 62 16 M50 38 V12" stroke="#15803d" stroke-width="1.5" fill="none"/>
    <ellipse cx="40" cy="20" rx="7" ry="11" fill="#16a34a" transform="rotate(-40 40 20)"/>
    <ellipse cx="62" cy="18" rx="7" ry="11" fill="#16a34a" transform="rotate(40 62 18)"/>
    <ellipse cx="50" cy="12" rx="5.5" ry="9" fill="#22c55e"/>
    <ellipse cx="34" cy="32" rx="5" ry="8" fill="#15803d" transform="rotate(-70 34 32)"/>
    <ellipse cx="66" cy="31" rx="5" ry="8" fill="#15803d" transform="rotate(70 66 31)"/>
    <rect x="32" y="36" width="36" height="6" rx="1" fill="#9a3412" stroke="#7c2d12"/>
    <polygon points="35,42 65,42 59,60 41,60" fill="#c2410c" stroke="#7c2d12" stroke-width="1.5"/>
    <path d="M74 56 Q80 52 86 56 Q80 60 74 56 Z" fill="#78350f"/>`,

  // Hourglass
  c_48: `
    <rect x="32" y="6" width="36" height="5" rx="1.5" fill="#78350f" stroke="#451a03"/>
    <rect x="32" y="54" width="36" height="5" rx="1.5" fill="#78350f" stroke="#451a03"/>
    <path d="M34 11 V54 M66 11 V54" stroke="#92400e" stroke-width="2.5"/>
    <path d="M38 11 H62 Q62 24 51 32.5 Q62 41 62 54 H38 Q38 41 49 32.5 Q38 24 38 11 Z" fill="#e0f2fe" fill-opacity="0.35" stroke="#7dd3fc" stroke-width="1.2"/>
    <path d="M42 20 H58 Q56 26 50 31 Q44 26 42 20 Z" fill="#f59e0b"/>
    <path d="M50 32 V48" stroke="#f59e0b" stroke-width="1"/>
    <path d="M40 54 Q50 42 60 54 Z" fill="#f59e0b"/>`,

  // Iron — clothes iron with steam
  c_49: `
    <path d="M14 50 Q16 30 46 28 H78 Q86 28 86 36 V50 Z" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
    <path d="M10 50 H88 Q90 54 86 55 H12 Q8 54 10 50 Z" fill="#94a3b8" stroke="#475569"/>
    <path d="M40 28 Q44 12 60 12 H80 Q84 12 84 18 V28" fill="none" stroke="#0ea5e9" stroke-width="5"/>
    <circle cx="66" cy="40" r="4" fill="#0ea5e9" stroke="#0369a1"/>
    <path d="M64 40 H68" stroke="#ffffff"/>
    <path d="M20 46 Q16 40 20 34 M28 44 Q24 38 28 32" stroke="#f8fafc" stroke-width="1.4" fill="none" opacity="0.7"/>
    <path d="M30 58 L36 62 M44 58 L50 62" stroke="#f97316" stroke-width="1.2"/>`,

  // Chalk — chalkboard slate with chalk sticks and outline
  c_50: `
    <rect x="8" y="8" width="58" height="40" rx="2" fill="#14532d" stroke="#78350f" stroke-width="3"/>
    <path d="M22 40 Q20 30 26 26 Q24 20 30 18 Q36 18 34 26 L44 22 L46 26 L36 32 L42 40 M30 32 L28 40" stroke="#f8fafc" stroke-width="1.3" fill="none" stroke-dasharray="2.5 1.5"/>
    <text x="54" y="22" text-anchor="middle" font-size="6" fill="#f8fafc" font-family="cursive">X</text>
    <g transform="rotate(-18 76 50)"><rect x="62" y="46" width="26" height="6" rx="2" fill="#f8fafc" stroke="#cbd5e1"/></g>
    <g transform="rotate(10 78 58)"><rect x="66" y="55" width="22" height="6" rx="2" fill="#fde68a" stroke="#d6d3d1"/></g>
    <circle cx="58" cy="58" r="1" fill="#e2e8f0"/><circle cx="54" cy="60" r="0.8" fill="#e2e8f0"/><circle cx="61" cy="61" r="0.8" fill="#e2e8f0"/>`,

  // Push Pin — red thumbtack pinning a note
  c_51: `
    <rect x="16" y="22" width="44" height="36" fill="#fef08a" stroke="#ca8a04" transform="rotate(-6 38 40)"/>
    <path d="M22 38 H52 M23 44 H50 M24 50 H44" stroke="#a16207" stroke-width="1" transform="rotate(-6 38 40)"/>
    <path d="M38 24 L42 32" stroke="#94a3b8" stroke-width="1.6"/>
    <ellipse cx="38" cy="22" rx="10" ry="4" fill="#b91c1c" stroke="#7f1d1d"/>
    <rect x="33" y="10" width="10" height="12" rx="2" fill="#dc2626" stroke="#7f1d1d"/>
    <ellipse cx="38" cy="10" rx="7" ry="3" fill="#ef4444" stroke="#7f1d1d"/>
    <ellipse cx="74" cy="44" rx="8" ry="3.2" fill="#2563eb" stroke="#1e3a8a"/>
    <rect x="70" y="34" width="8" height="10" rx="1.5" fill="#3b82f6" stroke="#1e3a8a"/>
    <ellipse cx="74" cy="34" rx="5.5" ry="2.4" fill="#60a5fa" stroke="#1e3a8a"/>
    <path d="M74 47 V58" stroke="#94a3b8" stroke-width="1.6"/>`,

  // Fossil — ammonite spiral in stone
  c_52: `
    <path d="M14 40 Q10 20 30 12 Q56 4 78 14 Q94 26 88 44 Q80 60 50 60 Q20 60 14 40 Z" fill="#a8a29e" stroke="#57534e" stroke-width="1.5"/>
    <path d="M50 34 m0 -2 a2 2 0 1 1 -2 2 a4.5 4.5 0 1 1 4.5 4.5 a7.5 7.5 0 1 1 -7.5 -7.5 a11 11 0 1 1 11 11 a15 15 0 1 1 -15 -15 a19 19 0 1 1 19 19" fill="none" stroke="#44403c" stroke-width="2"/>
    <path d="M50 15 L50 19 M66 22 L63 25 M70 36 L66 36 M62 50 L59 47 M38 50 L41 47 M32 34 L36 34" stroke="#57534e" stroke-width="1.3"/>`,

  // Horseshoe — with nail holes
  c_53: `
    <path d="M30 14 C16 30 18 56 50 56 C82 56 84 30 70 14 L60 20 C68 32 66 46 50 46 C34 46 32 32 40 20 Z" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
    <g fill="#1e293b"><circle cx="27" cy="30" r="1.4"/><circle cx="27" cy="40" r="1.4"/><circle cx="34" cy="49" r="1.4"/><circle cx="73" cy="30" r="1.4"/><circle cx="73" cy="40" r="1.4"/><circle cx="66" cy="49" r="1.4"/></g>
    <path d="M28 20 Q22 32 26 44" stroke="#e2e8f0" stroke-width="1.2" fill="none"/>
    <path d="M30 14 L40 20 M70 14 L60 20" stroke="#334155" stroke-width="1.5"/>`,

  // Spring — metal coil spring
  c_54: `
    <rect x="34" y="4" width="32" height="5" rx="1.5" fill="#64748b" stroke="#1e293b"/>
    <rect x="34" y="56" width="32" height="5" rx="1.5" fill="#64748b" stroke="#1e293b"/>
    <path d="M36 9 Q64 11 64 14 Q64 17 36 19 Q36 22 64 24 Q64 27 36 29 Q36 32 64 34 Q64 37 36 39 Q36 42 64 44 Q64 47 36 49 Q36 52 64 54 L64 56" fill="none" stroke="#cbd5e1" stroke-width="2.6"/>
    <path d="M36 9 Q64 11 64 14 Q64 17 36 19 Q36 22 64 24 Q64 27 36 29 Q36 32 64 34 Q64 37 36 39 Q36 42 64 44 Q64 47 36 49 Q36 52 64 54" fill="none" stroke="#475569" stroke-width="0.8"/>`,

  // Gift Box
  c_55: `
    <rect x="28" y="26" width="44" height="32" rx="2" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <rect x="25" y="20" width="50" height="9" rx="1" fill="#ef4444" stroke="#991b1b"/>
    <rect x="46" y="20" width="8" height="38" fill="#facc15"/>
    <path d="M50 20 C42 8 32 12 38 18 C42 21 48 20 50 20 C52 20 58 21 62 18 C68 12 58 8 50 20 Z" fill="#facc15" stroke="#a16207"/>
    <rect x="62" y="38" width="16" height="10" rx="1" fill="#f8fafc" stroke="#94a3b8" transform="rotate(15 70 43)"/>
    <path d="M64 42 L74 45" stroke="#94a3b8" transform="rotate(15 70 43)"/>`,

  // Dictionary — thick hardcover book
  c_56: `
    <polygon points="22,18 70,14 78,44 30,48" fill="#1e3a8a" stroke="#172554" stroke-width="1.5"/>
    <polygon points="30,48 78,44 74,53 26,57" fill="#fefce8" stroke="#ca8a04"/>
    <path d="M32 51 L74 47.5 M30 54 L74 50.5" stroke="#d6d3d1" stroke-width="0.6"/>
    <polygon points="22,18 30,48 26,57 18,26" fill="#172554"/>
    <rect x="40" y="23" width="26" height="14" rx="2" fill="#ca8a04" stroke="#facc15" transform="rotate(-5 53 30)"/>
    <text x="53" y="33" text-anchor="middle" fill="#0f172a" font-size="7" font-weight="bold" font-family="serif" transform="rotate(-5 53 30)">A–Z</text>
    <rect x="62" y="12" width="4" height="10" fill="#dc2626" transform="rotate(-5 64 17)"/>`,

  // Bank Vault Key — ornate key in front of vault dial
  c_57: `
    <circle cx="70" cy="32" r="22" fill="#475569" stroke="#1e293b" stroke-width="2"/>
    <circle cx="70" cy="32" r="15" fill="#64748b" stroke="#1e293b"/>
    <path d="M70 13 V17 M70 47 V51 M51 32 H55 M85 32 H89 M57 19 L60 22 M83 45 L80 42 M83 19 L80 22 M57 45 L60 42" stroke="#cbd5e1" stroke-width="1.2"/>
    <circle cx="70" cy="32" r="5" fill="#334155"/>
    <path fill-rule="evenodd" d="M6 40 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 Z M11 40 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#facc15" stroke="#a16207"/>
    <rect x="26" y="37.5" width="34" height="5" fill="#facc15" stroke="#a16207"/>
    <path d="M48 42.5 V50 H52 V46 H55 V52 H59 V42.5" fill="#facc15" stroke="#a16207"/>
    <circle cx="16" cy="40" r="2" fill="#a16207"/>`,
};
