// Hand-authored SVG illustrations for every MEANS card (Hung Khí).
// One unique drawing per card id. ViewBox: 0 0 100 65.
// Content is static markup (no user input) rendered via innerHTML.

export const MEANS_ART: Record<string, string> = {
  // Kitchen Knife — chef's knife, black riveted handle
  m_01: `
    <rect x="8" y="30" width="28" height="9" rx="3" fill="#1f2937" stroke="#0f172a"/>
    <circle cx="15" cy="34.5" r="1.4" fill="#cbd5e1"/><circle cx="22" cy="34.5" r="1.4" fill="#cbd5e1"/><circle cx="29" cy="34.5" r="1.4" fill="#cbd5e1"/>
    <rect x="36" y="28" width="3" height="13" rx="1" fill="#94a3b8"/>
    <path d="M39 27 L80 27 Q90 28 95 36 L39 41 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.2"/>
    <path d="M41 39.4 L92 35.8" stroke="#ffffff" stroke-width="0.8"/>
    <text x="50" y="35" font-size="5" font-family="sans-serif" fill="#94a3b8">CHEF</text>`,

  // Cleaver — wide rectangular blade with hanging hole
  m_02: `
    <rect x="6" y="37" width="28" height="9" rx="3" fill="#92400e" stroke="#451a03"/>
    <circle cx="14" cy="41.5" r="1.3" fill="#fde68a"/><circle cx="24" cy="41.5" r="1.3" fill="#fde68a"/>
    <path d="M34 14 H88 Q93 14 93 19 V47 H34 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="84" cy="22" r="3.2" fill="#10171c" stroke="#64748b"/>
    <path d="M35 45 H92" stroke="#ffffff" stroke-width="1.2"/>
    <path d="M60 47 q2 4 0 6 q-2 -2 0 -6z" fill="#dc2626"/>`,

  // Dagger — double-edged blade, cross guard, gold pommel
  m_03: `
    <circle cx="9" cy="33" r="4" fill="#facc15" stroke="#a16207"/>
    <rect x="12" y="29.5" width="17" height="7" rx="2" fill="#7c2d12" stroke="#451a03"/>
    <path d="M17 29.5v7M22 29.5v7" stroke="#b45309"/>
    <rect x="29" y="21" width="5" height="24" rx="2" fill="#facc15" stroke="#a16207"/>
    <path d="M34 27.5 L92 33 L34 38.5 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.2"/>
    <path d="M34 33 H90" stroke="#94a3b8"/>`,

  // Machete — long blade widening to the tip, green rubber grip
  m_04: `
    <rect x="4" y="38" width="24" height="8" rx="3" fill="#166534" stroke="#052e16"/>
    <path d="M8 38v8M13 38v8M18 38v8M23 38v8" stroke="#052e16" stroke-width="0.8"/>
    <path d="M28 37 L80 25 Q95 22 95 32 Q91 43 70 44 L28 47 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
    <path d="M30 45.5 L72 42.5 Q88 41 92 33" stroke="#ffffff" fill="none" stroke-width="0.9"/>`,

  // Sword — European longsword, diagonal
  m_05: `
    <g transform="rotate(-24 50 33)">
      <circle cx="7" cy="33" r="3.6" fill="#94a3b8" stroke="#475569"/>
      <rect x="10" y="30" width="13" height="6" rx="1.5" fill="#7c2d12"/>
      <path d="M13 30v6M17 30v6M21 30v6" stroke="#451a03" stroke-width="0.8"/>
      <rect x="23" y="21" width="4" height="24" rx="1.5" fill="#94a3b8" stroke="#475569"/>
      <path d="M27 30.3 H89 L96 33 L89 35.7 H27 Z" fill="#e2e8f0" stroke="#64748b"/>
      <path d="M27 33 H89" stroke="#94a3b8"/>
    </g>`,

  // Scissors — open, orange handles
  m_06: `
    <path d="M30 22 L52 33 L94 50" stroke="#cbd5e1" stroke-width="4.5" fill="none"/>
    <path d="M30 44 L52 33 L94 16" stroke="#e2e8f0" stroke-width="4.5" fill="none"/>
    <path d="M52 33 L94 50 M52 33 L94 16" stroke="#64748b" stroke-width="0.8"/>
    <circle cx="20" cy="18" r="8" fill="none" stroke="#f97316" stroke-width="4"/>
    <circle cx="20" cy="48" r="8" fill="none" stroke="#f97316" stroke-width="4"/>
    <circle cx="52" cy="33" r="2.4" fill="#475569" stroke="#1e293b"/>`,

  // Razor Blade — double-edge safety blade
  m_07: `
    <g transform="rotate(-12 50 33)">
      <rect x="20" y="17" width="60" height="32" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
      <path d="M21 19.5 H79 M21 46.5 H79" stroke="#ffffff" stroke-width="1.2"/>
      <path d="M38 33 H62" stroke="#10171c" stroke-width="5"/>
      <circle cx="33" cy="33" r="4.5" fill="#10171c"/><circle cx="67" cy="33" r="4.5" fill="#10171c"/>
      <path d="M50 22 V29 M50 37 V44" stroke="#10171c" stroke-width="2"/>
    </g>
    <path d="M78 52 q3 5 0 8 q-3 -3 0 -8z" fill="#dc2626"/>`,

  // Scalpel — slim steel handle, small curved surgical blade
  m_08: `
    <rect x="6" y="31" width="58" height="5" rx="2.5" fill="#94a3b8" stroke="#475569"/>
    <path d="M12 31v5M16 31v5M20 31v5M24 31v5M28 31v5" stroke="#64748b"/>
    <path d="M64 31.6 L74 31.6 Q90 30 95 36.5 Q82 38.5 64 35.6 Z" fill="#f8fafc" stroke="#64748b"/>
    <rect x="40" y="46" width="14" height="14" rx="2" fill="#f8fafc"/>
    <path d="M47 49 V57 M43 53 H51" stroke="#dc2626" stroke-width="2.5"/>`,

  // Box Cutter — yellow retractable knife, segmented blade
  m_09: `
    <path d="M8 30 L66 26 Q70 26 70 30 L70 40 L12 44 Q8 44 8 40 Z" fill="#facc15" stroke="#a16207" stroke-width="1.5"/>
    <rect x="28" y="31.5" width="22" height="4" rx="2" fill="#1f2937"/>
    <rect x="36" y="29" width="6" height="9" rx="1.5" fill="#475569" stroke="#1f2937"/>
    <path d="M70 27.5 L94 25.5 L85 37 L70 38 Z" fill="#e2e8f0" stroke="#64748b"/>
    <path d="M76 27 L73.5 37.7 M82 26.5 L79.5 37.3 M88 26 L84 34" stroke="#94a3b8"/>`,

  // Shiv — glass shard with tape-wrapped grip
  m_10: `
    <rect x="6" y="29" width="32" height="10" rx="2" fill="#a8a29e" stroke="#57534e"/>
    <path d="M10 29 L14 39 M16 29 L20 39 M22 29 L26 39 M28 29 L32 39 M34 29 L37 36" stroke="#57534e"/>
    <path d="M38 28 L58 21 L64 27 L73 22 L94 34 L71 39 L62 36 L52 42 L38 40 Z" fill="#bae6fd" fill-opacity="0.85" stroke="#0369a1" stroke-width="1.2"/>
    <path d="M44 31 L66 28 M60 34 L84 33" stroke="#f0f9ff" stroke-width="0.9"/>`,

  // Sharpened Fan — steel war fan with honed edge
  m_11: `
    <path d="M50 58 L14 30 A46 46 0 0 1 86 30 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.2"/>
    <path d="M50 58 L14 30 M50 58 L24 18 M50 58 L37 13 M50 58 L50 12 M50 58 L63 13 M50 58 L76 18 M50 58 L86 30" stroke="#fca5a5" stroke-width="0.9"/>
    <path d="M14 30 A46 46 0 0 1 86 30" fill="none" stroke="#e2e8f0" stroke-width="3.5"/>
    <path d="M30 34 Q50 26 70 34" fill="none" stroke="#facc15" stroke-width="1" stroke-dasharray="2 2"/>
    <circle cx="50" cy="58" r="3.2" fill="#facc15" stroke="#a16207"/>
    <path d="M50 61 Q46 63 44 65" stroke="#dc2626" stroke-width="2" fill="none"/>`,

  // Axe — wooden handle, steel head
  m_12: `
    <path d="M20 61 L62 12" stroke="#b45309" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M24 56.5 L60 14.5" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
    <path d="M52 14 L64 6 L72 13 Q84 4 92 12 Q96 26 86 38 Q78 28 68 28 L58 24 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
    <path d="M92 12 Q96 26 86 38" stroke="#ffffff" fill="none" stroke-width="1.5"/>`,

  // Chainsaw — orange motor, toothed bar
  m_13: `
    <path d="M14 26 Q14 11 28 11 Q40 11 40 26" fill="none" stroke="#1f2937" stroke-width="4"/>
    <path d="M6 26 H40 Q46 26 46 32 V48 H6 Z" fill="#ea580c" stroke="#7c2d12" stroke-width="1.5"/>
    <path d="M12 33 H34 M12 37 H34 M12 41 H34" stroke="#7c2d12" stroke-width="1.2"/>
    <rect x="46" y="31" width="48" height="12" rx="6" fill="#94a3b8" stroke="#475569"/>
    <rect x="44.5" y="29.5" width="51" height="15" rx="7.5" fill="none" stroke="#1f2937" stroke-width="2" stroke-dasharray="2 1.5"/>
    <circle cx="52" cy="37" r="2" fill="#475569"/>`,

  // Katana — curved blade, round tsuba, wrapped hilt
  m_14: `
    <path d="M6 58 L28 41" stroke="#1f2937" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M6 58 L28 41" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="2 3"/>
    <circle cx="30.5" cy="39" r="5.2" fill="#facc15" stroke="#a16207"/>
    <path d="M34 36.5 Q62 23 96 6 Q68 29 36 41 Z" fill="#e2e8f0" stroke="#64748b"/>
    <path d="M36 39.3 Q64 26 94 8.5" stroke="#94a3b8" fill="none" stroke-width="0.8" stroke-dasharray="1.5 1.5"/>`,

  // Ice Pick — bulb wooden handle, long spike, ice cube
  m_15: `
    <rect x="68" y="42" width="16" height="14" rx="2" fill="#bae6fd" fill-opacity="0.55" stroke="#7dd3fc"/>
    <path d="M71 45 L76 45" stroke="#f0f9ff"/>
    <path d="M6 33 Q6 23 19 24 L34 29 V37 L19 42 Q6 43 6 33 Z" fill="#b45309" stroke="#451a03"/>
    <rect x="34" y="29.5" width="5" height="7" fill="#94a3b8" stroke="#475569"/>
    <path d="M39 31.5 L95 33 L39 34.5 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="0.8"/>`,

  // Folding Knife — half-open pocket knife
  m_16: `
    <path d="M8 40 L50 34 Q57 34 57 40 Q57 46 50 46 L10 48 Q6 48 6 44 Z" fill="#334155" stroke="#0f172a" stroke-width="1.2"/>
    <path d="M12 43 L48 39" stroke="#64748b" stroke-dasharray="3 2"/>
    <path d="M50 38 L86 11 Q92 9 90 15 L54 44 Z" fill="#e2e8f0" stroke="#64748b"/>
    <circle cx="50.5" cy="40.5" r="2.6" fill="#cbd5e1" stroke="#475569"/>
    <circle cx="58" cy="36" r="1.5" fill="#94a3b8"/>`,

  // Baseball Bat — wooden bat and ball
  m_17: `
    <circle cx="11" cy="57" r="3.6" fill="#92400e"/>
    <path d="M13 55 L52 30 Q76 13 88 11 Q95 12 91 19 Q79 30 56 37 L16 59 Z" fill="#f59e0b" stroke="#92400e"/>
    <path d="M14 56 L28 47" stroke="#1f2937" stroke-width="4.5"/>
    <circle cx="76" cy="48" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    <path d="M70.5 43 Q74.5 48 70.5 53 M81.5 43 Q77.5 48 81.5 53" stroke="#dc2626" fill="none"/>`,

  // Hammer — claw hammer
  m_18: `
    <rect x="46" y="22" width="8" height="40" rx="3" fill="#b45309" stroke="#78350f"/>
    <rect x="46" y="45" width="8" height="17" rx="3" fill="#1f2937"/>
    <rect x="40" y="11" width="30" height="12" rx="1.5" fill="#64748b" stroke="#1e293b" stroke-width="1.2"/>
    <rect x="70" y="9" width="9" height="16" rx="1.5" fill="#94a3b8" stroke="#1e293b" stroke-width="1.2"/>
    <path d="M40 11 Q27 11 20 25 Q31 18 40 23 Z" fill="#64748b" stroke="#1e293b" stroke-width="1.2"/>`,

  // Heavy Sledgehammer — long handle, massive block head
  m_19: `
    <path d="M12 62 L58 24" stroke="#b45309" stroke-width="5" stroke-linecap="round"/>
    <path d="M12 62 L22 54" stroke="#1f2937" stroke-width="5" stroke-linecap="round"/>
    <g transform="rotate(48 63 21)">
      <rect x="46" y="12" width="34" height="18" rx="2" fill="#475569" stroke="#0f172a" stroke-width="1.5"/>
      <rect x="46" y="12" width="6" height="18" fill="#334155"/><rect x="74" y="12" width="6" height="18" fill="#334155"/>
    </g>`,

  // Brick — red clay brick with holes
  m_20: `
    <polygon points="20,30 56,15 84,24 48,39" fill="#ea580c" stroke="#7c2d12" stroke-width="1.5"/>
    <polygon points="20,30 48,39 48,54 20,45" fill="#c2410c" stroke="#7c2d12" stroke-width="1.5"/>
    <polygon points="48,39 84,24 84,39 48,54" fill="#9a3412" stroke="#7c2d12" stroke-width="1.5"/>
    <ellipse cx="42" cy="26" rx="4" ry="2" fill="#7c2d12"/><ellipse cx="54" cy="22" rx="4" ry="2" fill="#7c2d12"/><ellipse cx="66" cy="27" rx="4" ry="2" fill="#7c2d12"/>
    <path d="M60 44 L66 38 L64 33" stroke="#451a03" fill="none"/>`,

  // Dumbbell
  m_21: `
    <rect x="30" y="30" width="40" height="5" rx="1" fill="#cbd5e1" stroke="#94a3b8"/>
    <path d="M38 30v5M42 30v5M46 30v5M50 30v5M54 30v5M58 30v5M62 30v5" stroke="#94a3b8" stroke-width="0.6"/>
    <rect x="20" y="16" width="10" height="33" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <rect x="13" y="21" width="7" height="23" rx="1.5" fill="#0f172a" stroke="#475569"/>
    <rect x="70" y="16" width="10" height="33" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <rect x="80" y="21" width="7" height="23" rx="1.5" fill="#0f172a" stroke="#475569"/>
    <text x="25" y="35" font-size="5" font-weight="bold" fill="#94a3b8" text-anchor="middle" font-family="sans-serif">10</text>`,

  // Steel Tube — galvanized pipe
  m_22: `
    <g transform="rotate(-20 50 33)">
      <rect x="12" y="26" width="72" height="14" fill="#94a3b8" stroke="#334155" stroke-width="1.2"/>
      <path d="M12 29.5 H84" stroke="#e2e8f0" stroke-width="2"/>
      <path d="M12 37 H84" stroke="#64748b" stroke-width="1.5"/>
      <ellipse cx="12" cy="33" rx="3.5" ry="7" fill="#64748b" stroke="#334155"/>
      <ellipse cx="84" cy="33" rx="3.5" ry="7" fill="#cbd5e1" stroke="#334155"/>
      <ellipse cx="84" cy="33" rx="2" ry="4.5" fill="#0f172a"/>
    </g>`,

  // Trophy — gold cup on wooden base
  m_23: `
    <path d="M32 12 L68 12 L62 36 Q50 46 38 36 Z" fill="#facc15" stroke="#a16207" stroke-width="1.8"/>
    <path d="M32 16 Q18 20 32 30 M68 16 Q82 20 68 30" fill="none" stroke="#a16207" stroke-width="2.5"/>
    <path d="M42 16 L44 30" stroke="#fef9c3" stroke-width="2"/>
    <rect x="46" y="41" width="8" height="8" fill="#ca8a04"/>
    <rect x="36" y="49" width="28" height="9" rx="1" fill="#78350f" stroke="#451a03"/>
    <rect x="43" y="51.5" width="14" height="4" fill="#fde68a"/>
    <path d="M50 18 l1.5 3 3.3 .5 -2.4 2.3 .6 3.3 -3 -1.6 -3 1.6 .6 -3.3 -2.4 -2.3 3.3 -.5z" fill="#fef08a"/>`,

  // Tool Box — red toolbox with tools
  m_24: `
    <path d="M24 28 L28 12" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <path d="M27 16 L29 9" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
    <path d="M74 28 L78 14" stroke="#64748b" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M75 15 L82 13 L80 19" fill="#64748b"/>
    <path d="M36 28 V17 H64 V28" fill="none" stroke="#475569" stroke-width="3.5"/>
    <rect x="16" y="27" width="68" height="30" rx="3" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/>
    <path d="M16 36 H84" stroke="#7f1d1d" stroke-width="1.5"/>
    <rect x="45" y="32" width="10" height="7" rx="1" fill="#facc15" stroke="#a16207"/>`,

  // Crowbar — red/black pry bar
  m_25: `
    <path d="M14 58 L70 16 Q78 10 84 14 Q89 19 84 25" fill="none" stroke="#1f2937" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 58 L70 16 Q78 10 84 14 Q89 19 84 25" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 58 L6 60 M14 58 L10 64" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M84 25 L80 23 M84 25 L86 21" stroke="#94a3b8" stroke-width="2"/>`,

  // Frying Pan
  m_26: `
    <ellipse cx="42" cy="34" rx="28" ry="20" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <ellipse cx="42" cy="34" rx="21" ry="14" fill="#0f172a"/>
    <path d="M28 26 Q36 21 46 22" stroke="#475569" stroke-width="2" fill="none"/>
    <rect x="68" y="30.5" width="27" height="7" rx="3.5" fill="#1f2937" stroke="#475569"/>
    <circle cx="91" cy="34" r="1.5" fill="#94a3b8"/>`,

  // Golf Club — iron with ball
  m_27: `
    <path d="M80 5 L35 52" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M80 5 L69 16.5" stroke="#1f2937" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M36 50 L31 56 Q31 61 40 60 L54 57 Q56 53 50 51 Z" fill="#94a3b8" stroke="#334155"/>
    <path d="M38 57 L52 55" stroke="#475569" stroke-width="0.8"/>
    <circle cx="68" cy="56" r="5" fill="#f8fafc" stroke="#94a3b8"/>
    <circle cx="66.5" cy="55" r="0.6" fill="#94a3b8"/><circle cx="69" cy="57" r="0.6" fill="#94a3b8"/><circle cx="68.5" cy="54" r="0.6" fill="#94a3b8"/>`,

  // Candlestick — brass holder with lit candle
  m_28: `
    <path d="M32 59 H68 L62 52 H38 Z" fill="#ca8a04" stroke="#713f12"/>
    <path d="M46 52 Q41 41 48 34 H52 Q59 41 54 52 Z" fill="#eab308" stroke="#713f12"/>
    <rect x="39" y="30" width="22" height="4" rx="1.5" fill="#ca8a04" stroke="#713f12"/>
    <rect x="45" y="13" width="10" height="17" fill="#fef3c7" stroke="#d6d3d1"/>
    <path d="M50 2 Q56 9 50 13 Q44 9 50 2Z" fill="#f59e0b"/>
    <path d="M50 6 Q52.5 9.5 50 12 Q47.5 9.5 50 6Z" fill="#fef08a"/>`,

  // Wrench — combination spanner
  m_29: `
    <g transform="rotate(-22 50 33)">
      <rect x="26" y="29" width="50" height="8" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
      <path fill-rule="evenodd" d="M8 33 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0 Z M13.5 33 a5.5 5.5 0 1 0 11 0 a5.5 5.5 0 1 0 -11 0 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
      <path d="M74 24 Q88 20 94 27 L85 30.5 L85 35.5 L94 39 Q88 46 74 42 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.2"/>
      <path d="M34 31 H68" stroke="#ffffff" stroke-width="1"/>
    </g>`,

  // Stone / Rock
  m_30: `
    <path d="M18 46 Q14 30 30 22 Q44 12 62 18 Q82 22 84 38 Q86 52 66 55 Q40 60 24 54 Q19 52 18 46 Z" fill="#78716c" stroke="#292524" stroke-width="2"/>
    <path d="M30 26 Q42 18 56 21" stroke="#a8a29e" stroke-width="2.5" fill="none"/>
    <path d="M48 30 L54 40 L50 48 M54 40 L64 42" stroke="#44403c" stroke-width="1.5" fill="none"/>
    <circle cx="70" cy="30" r="1.5" fill="#57534e"/><circle cx="34" cy="44" r="2" fill="#57534e"/>`,

  // Plastic Bag
  m_31: `
    <path d="M34 22 Q34 6 44 8 Q49 10 46 22 M66 22 Q66 6 56 8 Q51 10 54 22" fill="none" stroke="#bae6fd" stroke-width="2.5"/>
    <path d="M26 22 L74 22 L80 59 L20 59 Z" fill="#e0f2fe" fill-opacity="0.5" stroke="#bae6fd" stroke-width="1.5"/>
    <path d="M30 30 Q40 40 32 53 M62 28 Q72 40 66 55 M48 32 Q46 44 52 54" stroke="#f8fafc" fill="none" opacity="0.8"/>
    <path d="M20 59 L24 55 L28 59 L32 55 L36 59 L40 55 L44 59 L48 55 L52 59 L56 55 L60 59 L64 55 L68 59 L72 55 L76 59 L80 59" stroke="#bae6fd" fill="none"/>`,

  // Rope — coil with noose
  m_32: `
    <ellipse cx="36" cy="46" rx="24" ry="10" fill="none" stroke="#d97706" stroke-width="4.5"/>
    <ellipse cx="36" cy="41" rx="19" ry="8" fill="none" stroke="#b45309" stroke-width="4.5"/>
    <ellipse cx="36" cy="36" rx="14" ry="6" fill="none" stroke="#d97706" stroke-width="4.5"/>
    <path d="M50 36 Q68 32 72 22" fill="none" stroke="#d97706" stroke-width="4.5"/>
    <ellipse cx="80" cy="22" rx="10" ry="14" fill="none" stroke="#d97706" stroke-width="4.5"/>
    <rect x="68" y="14" width="9" height="14" rx="2" fill="#b45309" stroke="#78350f"/>
    <path d="M68 17 H77 M68 21 H77 M68 25 H77" stroke="#78350f"/>`,

  // Wire / Cable — power cord with plug and stripped copper end
  m_33: `
    <path d="M10 50 Q30 18 50 40 T82 26" fill="none" stroke="#1f2937" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M10 50 Q30 18 50 40 T82 26" fill="none" stroke="#475569" stroke-width="1.5"/>
    <rect x="80" y="19" width="11" height="13" rx="2" fill="#f8fafc" stroke="#475569"/>
    <path d="M91 22.5 h5 M91 28.5 h5" stroke="#facc15" stroke-width="2.2"/>
    <path d="M10 50 l-5 -4 M10 50 l-6 1 M10 50 l-3 6" stroke="#f59e0b" stroke-width="1.6"/>
    <path d="M4 44 l1 -2 M3 52 l-1 1" stroke="#fde047" stroke-width="1"/>`,

  // Pillow
  m_34: `
    <path d="M18 20 C40 13 60 13 82 20 C87 32 87 42 82 51 C60 57 40 57 18 51 C13 42 13 32 18 20 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M22 23 C40 18 60 18 78 23" stroke="#e2e8f0" stroke-width="1" fill="none" stroke-dasharray="2 2"/>
    <path d="M38 30 Q50 40 62 30 Q58 42 50 44 Q42 42 38 30 Z" fill="#e2e8f0"/>
    <path d="M18 20 l-4 -3 M82 20 l4 -3 M18 51 l-4 3 M82 51 l4 3" stroke="#cbd5e1" stroke-width="2"/>`,

  // Wet Towel — dripping striped towel
  m_35: `
    <path d="M18 12 H70 Q76 12 76 18 V46 Q76 52 70 52 H18 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="1.5"/>
    <path d="M18 19 H76 M18 45 H76" stroke="#e0f2fe" stroke-width="2.2"/>
    <path d="M76 18 Q86 26 82 46 Q80 52 76 46" fill="#0284c7" stroke="#0369a1"/>
    <path d="M30 56 q3 4.5 0 6.5 q-3 -2 0 -6.5z M46 54 q3 4.5 0 6.5 q-3 -2 0 -6.5z M62 57 q2.5 4 0 5.5 q-2.5 -1.5 0 -5.5z" fill="#7dd3fc"/>
    <path d="M26 28 Q40 32 30 38 M50 26 Q62 30 54 38" stroke="#38bdf8" fill="none"/>`,

  // Plastic Wrap — cling film roll in serrated box
  m_36: `
    <rect x="12" y="26" width="76" height="20" rx="2" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="14" y="30" width="30" height="12" fill="#22c55e"/>
    <text x="29" y="38.5" font-size="5.5" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="sans-serif">WRAP</text>
    <path d="M12 26 L16 23 L20 26 L24 23 L28 26 L32 23 L36 26 L40 23 L44 26 L48 23 L52 26 L56 23 L60 26 L64 23 L68 26 L72 23 L76 26 L80 23 L84 26 L88 23" stroke="#64748b" fill="none"/>
    <path d="M30 24 Q50 4 84 12 Q80 22 60 23" fill="#bae6fd" fill-opacity="0.5" stroke="#e0f2fe" stroke-width="1.2"/>`,

  // Drowning — hand reaching up from water
  m_37: `
    <path d="M46 42 V22 Q46 19 48 19 Q50 19 50 22 V15 Q50 12 52 12 Q54 12 54 15 V17 Q54 14 56 14 Q58 14 58 17 V24 Q60 20 62 21 Q64 23 61 30 Q58 37 56 42 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="1"/>
    <path d="M0 40 Q10 34 20 40 T40 40 T60 40 T80 40 T100 40 V65 H0 Z" fill="#0284c7" fill-opacity="0.85"/>
    <path d="M0 40 Q10 34 20 40 T40 40 T60 40 T80 40 T100 40" fill="none" stroke="#7dd3fc" stroke-width="2"/>
    <circle cx="28" cy="52" r="2.5" fill="none" stroke="#e0f2fe"/><circle cx="72" cy="50" r="3" fill="none" stroke="#e0f2fe"/><circle cx="66" cy="58" r="1.8" fill="none" stroke="#e0f2fe"/><circle cx="36" cy="58" r="1.5" fill="none" stroke="#e0f2fe"/>`,

  // Gas Leak — yellow gas pipe, red valve, escaping fumes
  m_38: `
    <path d="M4 50 H48 V24 H70" fill="none" stroke="#facc15" stroke-width="6" stroke-linejoin="round"/>
    <path d="M4 50 H48 V24 H70" fill="none" stroke="#a16207" stroke-width="1" stroke-dasharray="1 5"/>
    <circle cx="48" cy="38" r="7.5" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <path d="M40.5 38 H55.5 M48 30.5 V45.5" stroke="#dc2626" stroke-width="2"/>
    <path d="M70 20 L72 24 L69 28" stroke="#0f172a" stroke-width="1.5" fill="none"/>
    <path d="M74 22 Q80 14 76 7 M78 26 Q88 20 86 11 M77 30 Q92 31 95 22" fill="none" stroke="#a3e635" stroke-width="2.2" stroke-linecap="round" opacity="0.9"/>
    <path d="M82 46 L90 60 H74 Z" fill="#facc15" stroke="#a16207"/><path d="M82 51 V55 M82 57.5 V58" stroke="#0f172a" stroke-width="1.6"/>`,

  // Necktie — striped tie
  m_39: `
    <path d="M44 5 H56 L58 13 H42 Z" fill="#991b1b" stroke="#450a0a"/>
    <path d="M42 13 H58 L64 50 L50 62 L36 50 Z" fill="#dc2626" stroke="#450a0a" stroke-width="1.2"/>
    <path d="M44 23 L57 18.5 M41.5 33 L59.5 27 M39.5 43 L61.5 36 M40 50.5 L62.5 43.5" stroke="#fde68a" stroke-width="2"/>
    <path d="M30 6 Q36 10 44 8 M70 6 Q64 10 56 8" stroke="#f8fafc" stroke-width="2" fill="none"/>`,

  // Belt — leather belt with buckle
  m_40: `
    <path d="M24 52 Q8 42 20 30 Q40 16 70 24 Q90 30 86 46" fill="none" stroke="#78350f" stroke-width="9" stroke-linecap="round"/>
    <path d="M24 52 Q8 42 20 30 Q40 16 70 24 Q90 30 86 46" fill="none" stroke="#a16207" stroke-width="1" stroke-dasharray="2 2"/>
    <circle cx="62" cy="22.5" r="1.3" fill="#1c1917"/><circle cx="68" cy="23.5" r="1.3" fill="#1c1917"/><circle cx="74" cy="25.5" r="1.3" fill="#1c1917"/>
    <rect x="18" y="45" width="18" height="15" rx="2" fill="none" stroke="#facc15" stroke-width="3"/>
    <path d="M27 45 V60" stroke="#facc15" stroke-width="2"/>`,

  // Arsenic — amber apothecary bottle "As" and powder
  m_41: `
    <rect x="24" y="18" width="28" height="40" rx="4" fill="#92400e" fill-opacity="0.9" stroke="#451a03"/>
    <rect x="31" y="10" width="14" height="8" rx="1.5" fill="#1f2937"/>
    <rect x="27" y="27" width="22" height="18" rx="1" fill="#fef3c7"/>
    <text x="38" y="40" text-anchor="middle" font-size="10" font-weight="bold" font-family="serif" fill="#7f1d1d">As</text>
    <text x="38" y="44" text-anchor="middle" font-size="3" font-family="sans-serif" fill="#7f1d1d">ARSENIC</text>
    <path d="M56 59 Q69 42 84 59 Z" fill="#f8fafc" stroke="#cbd5e1"/>
    <path d="M62 52 l2 -1 M70 47 l1 1 M76 52 l1.5 -1" stroke="#ffffff"/>`,

  // Cyanide Pill — capsule + bitter almond
  m_42: `
    <g transform="rotate(-30 38 36)">
      <rect x="16" y="28" width="44" height="16" rx="8" fill="#7c3aed" stroke="#4c1d95"/>
      <rect x="16" y="28" width="22" height="16" rx="8" fill="#f8fafc"/>
      <rect x="28" y="28" width="10" height="16" fill="#f8fafc"/>
      <rect x="16" y="28" width="44" height="16" rx="8" fill="none" stroke="#4c1d95"/>
      <path d="M22 32 H34" stroke="#ffffff" stroke-width="1.5"/>
    </g>
    <path d="M74 32 Q90 36 82 54 Q66 48 74 32 Z" fill="#b45309" stroke="#78350f"/>
    <path d="M75 36 Q78 44 80 50" stroke="#78350f" fill="none"/>
    <text x="72" y="22" font-size="8" font-weight="bold" font-family="sans-serif" fill="#c4b5fd">KCN</text>`,

  // Poison Dart — fletched dart with green toxin tip
  m_43: `
    <path d="M20 50 L74 17" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <polygon points="20,50 10,42 23,44" fill="#ef4444"/>
    <polygon points="20,50 15,60 26,52" fill="#facc15"/>
    <polygon points="74,17 84,11 79,22" fill="#22c55e" stroke="#15803d"/>
    <circle cx="84" cy="11" r="1.6" fill="#4ade80"/>
    <path d="M80 23 q2 4 0 6 q-2 -2 0 -6z" fill="#4ade80"/>`,

  // Overdose Pill — tipped pill bottle spilling pills
  m_44: `
    <g transform="rotate(70 32 36)">
      <rect x="18" y="22" width="28" height="30" rx="3" fill="#f97316" fill-opacity="0.9" stroke="#9a3412"/>
      <rect x="16" y="15" width="32" height="8" rx="2" fill="#f8fafc" stroke="#94a3b8"/>
      <rect x="22" y="30" width="20" height="13" fill="#f8fafc"/>
      <text x="32" y="39" text-anchor="middle" font-size="6" font-weight="bold" fill="#9a3412" font-family="sans-serif">Rx</text>
    </g>
    <ellipse cx="62" cy="40" rx="4" ry="2.5" fill="#f8fafc" stroke="#94a3b8"/>
    <ellipse cx="72" cy="48" rx="4" ry="2.5" fill="#60a5fa" stroke="#1d4ed8" transform="rotate(25 72 48)"/>
    <ellipse cx="84" cy="44" rx="4" ry="2.5" fill="#f8fafc" stroke="#94a3b8" transform="rotate(-20 84 44)"/>
    <ellipse cx="66" cy="56" rx="4" ry="2.5" fill="#f8fafc" stroke="#94a3b8" transform="rotate(10 66 56)"/>
    <ellipse cx="80" cy="57" rx="4" ry="2.5" fill="#60a5fa" stroke="#1d4ed8"/>
    <ellipse cx="91" cy="52" rx="4" ry="2.5" fill="#f8fafc" stroke="#94a3b8" transform="rotate(40 91 52)"/>`,

  // Poisonous Gas — gas mask amid toxic cloud
  m_45: `
    <path d="M4 60 Q8 46 20 50 Q22 38 34 42 L34 60 Z M96 60 Q92 46 80 50 Q78 38 66 42 L66 60 Z" fill="#22c55e" opacity="0.55"/>
    <path d="M30 20 Q50 4 70 20 Q77 40 62 53 H38 Q23 40 30 20 Z" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="41" cy="27" r="6.5" fill="#86efac" fill-opacity="0.55" stroke="#0f172a" stroke-width="2.2"/>
    <circle cx="59" cy="27" r="6.5" fill="#86efac" fill-opacity="0.55" stroke="#0f172a" stroke-width="2.2"/>
    <circle cx="50" cy="46" r="8" fill="#475569" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="50" cy="46" r="4" fill="none" stroke="#1e293b"/>
    <path d="M47 46 H53 M50 43 V49" stroke="#1e293b"/>`,

  // Venomous Snake — coiled serpent with fangs
  m_46: `
    <path d="M14 50 Q28 22 46 38 T74 24" fill="none" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
    <path d="M14 50 Q28 22 46 38 T74 24" fill="none" stroke="#facc15" stroke-width="2" stroke-dasharray="3 5" stroke-linecap="round"/>
    <path d="M70 18 Q80 12 88 18 Q90 26 80 28 Q72 28 70 18 Z" fill="#15803d" stroke="#14532d"/>
    <circle cx="82" cy="19" r="1.6" fill="#ef4444"/>
    <path d="M88 23 L95 22 M88 23 L95 26" stroke="#dc2626" stroke-width="1.3"/>
    <path d="M84 27 L84 31 M80 27.5 L80 31" stroke="#f8fafc" stroke-width="1.2"/>`,

  // Venomous Spider — black widow
  m_47: `
    <path d="M44 26 Q28 12 18 24 M44 32 Q24 26 14 36 M44 38 Q26 44 18 52 M45 42 Q32 54 28 61" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M56 26 Q72 12 82 24 M56 32 Q76 26 86 36 M56 38 Q74 44 82 52 M55 42 Q68 54 72 61" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="50" cy="38" rx="10" ry="12" fill="#0f172a" stroke="#475569"/>
    <circle cx="50" cy="22" r="5.5" fill="#0f172a" stroke="#475569"/>
    <polygon points="47,34 53,34 50,38" fill="#dc2626"/><polygon points="50,38 47,42 53,42" fill="#dc2626"/>
    <path d="M50 2 V16" stroke="#cbd5e1" stroke-width="0.7"/>`,

  // Mercury — broken thermometer with silver beads
  m_48: `
    <g transform="rotate(-28 46 33)">
      <rect x="18" y="29" width="54" height="8" rx="4" fill="#e0f2fe" fill-opacity="0.45" stroke="#94a3b8"/>
      <circle cx="16" cy="33" r="7" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="18" y="31.5" width="40" height="3" fill="#e2e8f0"/>
      <path d="M28 29v3M34 29v3M40 29v3M46 29v3M52 29v3" stroke="#64748b"/>
      <path d="M72 29 L75 31 L73 33 L76 35 L72 37" stroke="#94a3b8" fill="none"/>
    </g>
    <circle cx="78" cy="44" r="4.5" fill="#e2e8f0" stroke="#94a3b8"/><circle cx="76.5" cy="42.5" r="1.2" fill="#ffffff"/>
    <circle cx="87" cy="50" r="3" fill="#e2e8f0" stroke="#94a3b8"/>
    <circle cx="72" cy="54" r="2.2" fill="#e2e8f0" stroke="#94a3b8"/>
    <text x="10" y="60" font-size="7" font-weight="bold" fill="#cbd5e1" font-family="serif">Hg</text>`,

  // Biological Infection — virus particles + biohazard badge
  m_49: `
    <g stroke="#15803d" stroke-width="2">
      <path d="M40 14 V8 M40 52 V58 M21 33 H15 M59 33 H65 M27 20 L23 16 M53 46 L57 50 M53 20 L57 16 M27 46 L23 50"/>
    </g>
    <g fill="#4ade80"><circle cx="40" cy="7" r="2.2"/><circle cx="40" cy="59" r="2.2"/><circle cx="14" cy="33" r="2.2"/><circle cx="66" cy="33" r="2.2"/><circle cx="22" cy="15" r="2.2"/><circle cx="58" cy="51" r="2.2"/><circle cx="58" cy="15" r="2.2"/><circle cx="22" cy="51" r="2.2"/></g>
    <circle cx="40" cy="33" r="17" fill="#16a34a" stroke="#14532d" stroke-width="1.5"/>
    <circle cx="34" cy="28" r="3" fill="#86efac"/><circle cx="45" cy="38" r="4" fill="#86efac"/><circle cx="44" cy="25" r="2" fill="#86efac"/>
    <circle cx="80" cy="44" r="12" fill="#facc15" stroke="#a16207"/>
    <g fill="none" stroke="#0f172a" stroke-width="1.8"><circle cx="80" cy="39.5" r="4"/><circle cx="76" cy="46.5" r="4"/><circle cx="84" cy="46.5" r="4"/></g>
    <circle cx="80" cy="44" r="1.6" fill="#0f172a"/>`,

  // Poison Injection — syringe with green toxin
  m_50: `
    <rect x="6" y="29" width="5" height="12" rx="1" fill="#94a3b8"/>
    <rect x="11" y="33" width="16" height="4" fill="#cbd5e1"/>
    <rect x="27" y="25" width="40" height="20" rx="3" fill="#e0f2fe" fill-opacity="0.5" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="40" y="27" width="26" height="16" rx="1" fill="#22c55e" fill-opacity="0.9"/>
    <rect x="27" y="25" width="4" height="20" fill="#475569"/>
    <path d="M44 25 v5 M50 25 v5 M56 25 v5 M62 25 v5" stroke="#475569"/>
    <rect x="67" y="31" width="6" height="8" fill="#94a3b8"/>
    <path d="M73 35 L94 35" stroke="#cbd5e1" stroke-width="1.6"/>
    <path d="M94 37 q2.5 4 0 6 q-2.5 -2 0 -6z" fill="#4ade80"/>`,

  // Pesticide — garden sprayer with bug-and-skull label
  m_51: `
    <path d="M30 22 H62 V58 Q62 61 59 61 H33 Q30 61 30 58 Z" fill="#65a30d" stroke="#365314" stroke-width="1.5"/>
    <rect x="38" y="12" width="16" height="10" fill="#1f2937"/>
    <path d="M54 14 H72 L76 18 L72 20 H62" fill="#1f2937"/>
    <path d="M60 22 Q66 28 64 34" stroke="#1f2937" stroke-width="3" fill="none"/>
    <path d="M78 15 L90 10 M78 18 L92 18 M78 21 L90 26" stroke="#d9f99d" stroke-width="1.2" stroke-dasharray="1.5 2"/>
    <rect x="34" y="32" width="24" height="20" rx="1.5" fill="#fefce8"/>
    <ellipse cx="46" cy="42" rx="4" ry="6" fill="#0f172a"/>
    <path d="M42 38 L37 35 M42 42 L36 42 M42 46 L37 49 M50 38 L55 35 M50 42 L56 42 M50 46 L55 49" stroke="#0f172a" stroke-width="1"/>
    <path d="M36 34 L56 50" stroke="#dc2626" stroke-width="2"/>`,

  // Mold — petri dish with toxic fungal colonies
  m_52: `
    <ellipse cx="50" cy="38" rx="34" ry="20" fill="#e2e8f0" fill-opacity="0.25" stroke="#cbd5e1" stroke-width="2"/>
    <ellipse cx="50" cy="38" rx="30" ry="17" fill="#064e3b"/>
    <circle cx="40" cy="34" r="9" fill="#10b981" fill-opacity="0.9"/>
    <circle cx="60" cy="40" r="10" fill="#4d7c0f" fill-opacity="0.9"/>
    <circle cx="34" cy="44" r="5" fill="#a3e635" fill-opacity="0.8"/>
    <circle cx="56" cy="29" r="4.5" fill="#6ee7b7"/>
    <g fill="#ffffff"><circle cx="38" cy="32" r="0.9"/><circle cx="42" cy="36" r="0.9"/><circle cx="58" cy="38" r="0.9"/><circle cx="63" cy="42" r="0.9"/><circle cx="34" cy="45" r="0.9"/></g>
    <path d="M20 12 Q24 6 30 10 Q36 4 40 10" stroke="#6ee7b7" fill="none" stroke-dasharray="1 2"/>`,

  // Radioactive Material — trefoil warning sign + glowing barrel
  m_53: `
    <rect x="62" y="22" width="26" height="36" rx="3" fill="#facc15" stroke="#a16207" stroke-width="1.5"/>
    <path d="M62 30 H88 M62 50 H88" stroke="#a16207" stroke-width="1.5"/>
    <path d="M66 22 Q72 16 74 22 Q78 14 84 22" fill="#a3e635" stroke="#65a30d"/>
    <polygon points="34,6 62,56 6,56" fill="#eab308" stroke="#0f172a" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="34" cy="40" r="3.2" fill="#0f172a"/>
    <path d="M34 40 L28 29 A13 13 0 0 1 40 29 Z" fill="#0f172a"/>
    <path d="M34 40 L46 46 A13 13 0 0 1 40 52 Z" fill="#0f172a"/>
    <path d="M34 40 L22 46 A13 13 0 0 0 28 52 Z" fill="#0f172a"/>`,

  // Pistol / Revolver .38
  m_54: `
    <rect x="44" y="20" width="46" height="7" rx="1" fill="#64748b" stroke="#0f172a"/>
    <rect x="86" y="17" width="2.5" height="3" fill="#0f172a"/>
    <path d="M28 17 H46 V35 H40 L36 39 H28 Z" fill="#475569" stroke="#0f172a"/>
    <rect x="33" y="21" width="15" height="12" rx="2" fill="#334155" stroke="#0f172a"/>
    <path d="M36 21 V33 M40 21 V33 M44 21 V33" stroke="#1e293b"/>
    <path d="M28 17 L21 12 L23 19 Z" fill="#334155" stroke="#0f172a"/>
    <path d="M28 35 L19 55 Q19 60 25 60 H32 L38 39 Z" fill="#78350f" stroke="#451a03"/>
    <path d="M24 50 L30 50 M26 45 L31 45" stroke="#451a03"/>
    <path d="M36 39 Q38 48 47 44 L47 35" fill="none" stroke="#0f172a" stroke-width="2"/>
    <path d="M40 37 L42 43" stroke="#0f172a" stroke-width="1.6"/>
    <text x="68" y="25.5" font-size="4.5" font-weight="bold" fill="#e2e8f0" font-family="sans-serif">.38</text>`,

  // Sniper Rifle — scope + bipod
  m_55: `
    <path d="M4 34 L24 30 L30 36 L26 42 L8 44 Q4 42 4 38 Z" fill="#334155" stroke="#0f172a"/>
    <rect x="24" y="30" width="30" height="8" rx="1" fill="#1f2937" stroke="#0f172a"/>
    <path d="M36 38 L32 48 H38 L42 38" fill="#1f2937" stroke="#0f172a"/>
    <rect x="54" y="32" width="40" height="3.5" fill="#475569" stroke="#0f172a"/>
    <rect x="93" y="31" width="4" height="5.5" fill="#0f172a"/>
    <rect x="30" y="20" width="26" height="6" rx="3" fill="#0f172a" stroke="#38bdf8"/>
    <rect x="26" y="19" width="6" height="8" rx="1" fill="#1e293b"/><rect x="54" y="18.5" width="6" height="9" rx="1" fill="#1e293b"/>
    <path d="M36 26 V30 M50 26 V30" stroke="#0f172a" stroke-width="2"/>
    <path d="M74 35.5 L68 50 M76 35.5 L82 50" stroke="#1e293b" stroke-width="2"/>`,

  // Hunting Rifle — wooden stock, bolt action, sling
  m_56: `
    <path d="M4 36 L30 30 L46 31 L46 38 L32 38 L10 46 Q4 46 4 42 Z" fill="#92400e" stroke="#451a03" stroke-width="1.2"/>
    <path d="M46 31 H70 V37 H46 Z" fill="#b45309" stroke="#451a03"/>
    <rect x="40" y="27" width="56" height="4" fill="#475569" stroke="#0f172a"/>
    <rect x="34" y="26" width="14" height="5" rx="1" fill="#64748b" stroke="#0f172a"/>
    <path d="M42 31 L44 36" stroke="#0f172a" stroke-width="1.5"/><circle cx="44.5" cy="37" r="1.6" fill="#64748b"/>
    <path d="M36 38 Q38 44 44 41" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M14 44 Q40 58 66 37" fill="none" stroke="#a16207" stroke-width="1.8"/>
    <path d="M10 42 L12 37 M8 43 L10 38" stroke="#451a03" stroke-width="0.8"/>`,

  // Shotgun — double barrel + red shells
  m_57: `
    <path d="M4 38 L30 32 L30 40 L10 48 Q4 48 4 44 Z" fill="#92400e" stroke="#451a03" stroke-width="1.2"/>
    <rect x="30" y="31" width="14" height="10" rx="1" fill="#64748b" stroke="#0f172a"/>
    <rect x="44" y="30" width="48" height="4" rx="1" fill="#475569" stroke="#0f172a"/>
    <rect x="44" y="34.5" width="48" height="4" rx="1" fill="#475569" stroke="#0f172a"/>
    <rect x="48" y="38.5" width="20" height="4" rx="1" fill="#b45309" stroke="#451a03"/>
    <path d="M32 41 Q34 47 40 44" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <g transform="rotate(-10 70 54)">
      <rect x="60" y="49" width="14" height="7" rx="1" fill="#dc2626" stroke="#7f1d1d"/><rect x="56" y="49" width="4" height="7" fill="#facc15" stroke="#a16207"/>
      <rect x="80" y="49" width="14" height="7" rx="1" fill="#dc2626" stroke="#7f1d1d"/><rect x="76" y="49" width="4" height="7" fill="#facc15" stroke="#a16207"/>
    </g>`,

  // Crossbow — top-down view with loaded bolt
  m_58: `
    <path d="M10 22 Q50 40 90 22" fill="none" stroke="#475569" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M10 22 L50 44 L90 22" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="45.5" y="22" width="9" height="40" rx="2" fill="#92400e" stroke="#451a03"/>
    <path d="M47 50 Q42 56 46 60" stroke="#451a03" fill="none" stroke-width="1.5"/>
    <path d="M50 6 V44" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M50 2 L46.5 9 H53.5 Z" fill="#94a3b8" stroke="#475569"/>
    <path d="M47 41 l3 4 l3 -4" fill="#dc2626"/>`,

  // Flare Gun — orange signal pistol firing flare
  m_59: `
    <path d="M18 22 H64 V36 H40 L34 57 H20 L25 36 H18 Z" fill="#f97316" stroke="#9a3412" stroke-width="1.5"/>
    <rect x="58" y="19" width="13" height="20" rx="2.5" fill="#ea580c" stroke="#9a3412"/>
    <path d="M35 36 Q37 45 44 42" fill="none" stroke="#9a3412" stroke-width="2"/>
    <path d="M72 29 Q80 24 86 18" fill="none" stroke="#fca5a5" stroke-width="1.8" stroke-dasharray="2 2"/>
    <circle cx="88" cy="15" r="5.5" fill="#ef4444"/><circle cx="88" cy="15" r="2.6" fill="#fef08a"/>
    <path d="M88 5 V8 M96 15 H93 M94 8 L92 10 M94 22 L92 20 M82 8 L84 10" stroke="#fde047" stroke-width="1.3"/>`,

  // High Voltage / Electric Shock — warning sign with bolt and sparks
  m_60: `
    <polygon points="50,4 92,60 8,60" fill="#facc15" stroke="#0f172a" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="56,20 38,42 50,42 44,56 64,34 52,34" fill="#0f172a"/>
    <path d="M14 18 L20 24 M86 18 L80 24 M10 34 L16 34 M90 34 L84 34" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>`,

  // Boiling Water — pot on blue flame with steam
  m_61: `
    <path d="M38 19 Q34 13 40 7 M50 19 Q46 11 52 3 M62 19 Q58 13 64 7" stroke="#e2e8f0" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M24 26 H76 V48 Q76 54 70 54 H30 Q24 54 24 48 Z" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="23" width="60" height="5" rx="2" fill="#64748b" stroke="#334155"/>
    <ellipse cx="50" cy="24.5" rx="27" ry="2.5" fill="#38bdf8"/>
    <circle cx="40" cy="23" r="1.6" fill="#e0f2fe"/><circle cx="56" cy="22.5" r="2" fill="#e0f2fe"/><circle cx="66" cy="23.5" r="1.2" fill="#e0f2fe"/>
    <path d="M24 33 H14 M76 33 H86" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M32 62 Q34 55 36 62 Z M44 62 Q46 54 48 62 Z M56 62 Q58 54 60 62 Z M68 62 Q70 55 72 62 Z" fill="#3b82f6"/>
    <text x="50" y="44" text-anchor="middle" font-size="7" font-weight="bold" fill="#dc2626" font-family="sans-serif">100°</text>`,

  // Microwave Oven
  m_62: `
    <rect x="10" y="12" width="80" height="44" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
    <rect x="16" y="18" width="50" height="32" rx="2" fill="#0f172a" stroke="#475569"/>
    <rect x="20" y="22" width="42" height="24" rx="1" fill="#f59e0b" fill-opacity="0.35"/>
    <ellipse cx="41" cy="42" rx="12" ry="2.5" fill="#94a3b8" fill-opacity="0.6"/>
    <path d="M30 30 Q34 26 38 30 T46 30 T54 30" stroke="#fde68a" fill="none" stroke-width="1.2"/>
    <rect x="70" y="18" width="15" height="8" rx="1" fill="#0f172a"/>
    <text x="77.5" y="24.3" text-anchor="middle" font-size="5" fill="#22c55e" font-family="monospace">0:00</text>
    <g fill="#64748b"><circle cx="73" cy="31" r="1.6"/><circle cx="78" cy="31" r="1.6"/><circle cx="83" cy="31" r="1.6"/><circle cx="73" cy="36" r="1.6"/><circle cx="78" cy="36" r="1.6"/><circle cx="83" cy="36" r="1.6"/></g>
    <rect x="72" y="41" width="12" height="5" rx="1" fill="#dc2626"/>
    <path d="M14 56 V60 M86 56 V60" stroke="#334155" stroke-width="2.5"/>`,

  // Explosives / TNT — dynamite bundle with fuse
  m_63: `
    <rect x="24" y="20" width="15" height="36" rx="2" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <rect x="42" y="18" width="15" height="38" rx="2" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <rect x="60" y="20" width="15" height="36" rx="2" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <rect x="21" y="32" width="57" height="9" fill="#0f172a"/>
    <text x="49.5" y="39" text-anchor="middle" fill="#facc15" font-size="7" font-weight="bold" font-family="sans-serif">TNT</text>
    <path d="M49.5 18 Q44 10 50 6 Q56 3 60 6" fill="none" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="61" cy="6" r="3.2" fill="#f59e0b"/><circle cx="61" cy="6" r="1.5" fill="#fef08a"/>
    <path d="M66 3 L69 1 M66 9 L69 11 M65 6 H69" stroke="#fde047"/>`,

  // Kerosene / Fire — red jerry can and flames
  m_64: `
    <rect x="16" y="22" width="36" height="34" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
    <rect x="22" y="14" width="16" height="8" rx="2" fill="#7f1d1d"/>
    <path d="M42 22 L48 14 L52 16 L48 22" fill="#475569" stroke="#1e293b"/>
    <path d="M16 28 L34 40 L52 28 M16 50 L34 40 L52 50" fill="none" stroke="#991b1b" stroke-width="1.5"/>
    <path d="M70 58 C58 58 56 46 64 37 C64 27 76 16 78 30 C80 22 90 28 88 40 C92 46 86 58 76 58 Z" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
    <path d="M71 56 C65 56 65 48 69 43 C71 38 76 34 77 41 C82 44 81 52 77 55 Z" fill="#fde047"/>`,

  // Steamroller — road roller side view
  m_65: `
    <path d="M4 61 H96" stroke="#475569" stroke-width="1.5"/>
    <path d="M50 22 V8 H74 V22" fill="none" stroke="#1f2937" stroke-width="2.5"/>
    <rect x="46" y="8" width="32" height="3" fill="#1f2937"/>
    <rect x="44" y="22" width="36" height="20" rx="2" fill="#facc15" stroke="#a16207" stroke-width="1.5"/>
    <rect x="16" y="30" width="30" height="10" fill="#facc15" stroke="#a16207"/>
    <rect x="80" y="16" width="4" height="10" fill="#1f2937"/>
    <circle cx="26" cy="48" r="13" fill="#64748b" stroke="#1f2937" stroke-width="2"/>
    <circle cx="26" cy="48" r="4" fill="#1f2937"/>
    <circle cx="72" cy="51" r="10" fill="#1f2937" stroke="#0f172a"/>
    <circle cx="72" cy="51" r="4" fill="#94a3b8"/>`,

  // Push from Height — building edge with falling figure
  m_66: `
    <rect x="4" y="10" width="30" height="55" fill="#334155" stroke="#0f172a"/>
    <g fill="#facc15" fill-opacity="0.8"><rect x="9" y="18" width="6" height="6"/><rect x="22" y="18" width="6" height="6"/><rect x="9" y="32" width="6" height="6"/><rect x="22" y="46" width="6" height="6"/></g>
    <path d="M34 10 H44" stroke="#94a3b8" stroke-width="2.5"/>
    <path d="M38 6 L44 10" stroke="#f8fafc" stroke-width="2"/>
    <circle cx="64" cy="22" r="4.5" fill="#f8fafc"/>
    <path d="M64 27 L60 40 M63 30 L54 24 M63 30 L73 25 M60 40 L52 48 M60 40 L69 47" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M74 10 V20 M80 14 V26" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2"/>
    <path d="M88 32 V56 M82 50 L88 57 L94 50" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>`,

  // Nanobots — micro robot with circuit traces and swarm
  m_67: `
    <path d="M6 54 H24 L30 48 H44 M70 14 H82 L88 8 H96 M6 12 H18 L24 18" stroke="#0ea5e9" stroke-width="1.2" fill="none"/>
    <g fill="#38bdf8"><circle cx="44" cy="48" r="1.5"/><circle cx="24" cy="18" r="1.5"/><circle cx="96" cy="8" r="1.5"/></g>
    <path d="M38 26 L32 18 M38 33 L28 33 M38 40 L32 48 M62 26 L68 18 M62 33 L72 33 M62 40 L68 48" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <polygon points="50,18 63,25.5 63,40.5 50,48 37,40.5 37,25.5" fill="#0f172a" stroke="#22d3ee" stroke-width="2"/>
    <circle cx="50" cy="33" r="6" fill="#22d3ee"/><circle cx="50" cy="33" r="2.5" fill="#0f172a"/>
    <g fill="#22d3ee"><polygon points="82,40 86,42.5 86,47.5 82,50 78,47.5 78,42.5"/><polygon points="90,54 93,56 93,59.5 90,61.5 87,59.5 87,56"/><polygon points="14,30 17,32 17,35.5 14,37.5 11,35.5 11,32"/></g>`,

  // Machine Malfunction — broken gears with sparks
  m_68: `
    <circle cx="36" cy="36" r="16" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
    <g fill="#64748b" stroke="#1e293b" stroke-width="1.5">
      <rect x="32" y="14" width="8" height="7"/><rect x="32" y="51" width="8" height="7"/><rect x="14" y="32" width="7" height="8"/><rect x="51" y="32" width="7" height="8"/>
      <rect x="18" y="18" width="7" height="7" transform="rotate(45 21.5 21.5)"/><rect x="47" y="47" width="7" height="7" transform="rotate(45 50.5 50.5)"/><rect x="18" y="47" width="7" height="7" transform="rotate(45 21.5 50.5)"/>
    </g>
    <circle cx="36" cy="36" r="6" fill="#1e293b"/>
    <path d="M44 22 L40 30 L46 34 L42 42" stroke="#0f172a" stroke-width="2" fill="none"/>
    <circle cx="72" cy="20" r="10" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
    <circle cx="72" cy="20" r="3.5" fill="#1e293b"/>
    <g fill="#94a3b8" stroke="#1e293b"><rect x="69.5" y="6" width="5" height="5"/><rect x="69.5" y="29" width="5" height="5"/><rect x="81" y="17.5" width="5" height="5"/></g>
    <path d="M58 46 L64 40 M62 50 L70 48 M58 52 L60 60 M56 44 L54 38" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
    <circle cx="58" cy="47" r="2" fill="#f97316"/>
    <polygon points="84,44 94,60 74,60" fill="#facc15" stroke="#a16207"/><path d="M84 49 V55 M84 57.5 V58" stroke="#0f172a" stroke-width="1.6"/>`,
};
