import React from "react";
import { MEANS_ART } from "./art/meansArt";
import { CLUE_ART } from "./art/clueArt";

interface CardIllustrationProps {
  cardId?: string;
  cardNameEn: string;
  cardNameVi?: string;
  type: "MEANS" | "CLUE";
  lang?: "vi" | "en";
}

/**
 * Renders the illustration of a card.
 *
 * Every card id in means.json / clues.json has its own hand-drawn SVG in
 * ./art/meansArt.ts and ./art/clueArt.ts, so no two cards share a picture.
 * (The old version guessed the picture from keywords in the card name,
 * which made e.g. every "Dao ..." card show the same knife.)
 */
export const CardIllustration: React.FC<CardIllustrationProps> = ({
  cardId = "",
  cardNameEn = "",
  type,
}) => {
  const art = type === "MEANS" ? MEANS_ART[cardId] : CLUE_ART[cardId];

  if (!art) {
    // Fallback for a card that has no artwork yet: neutral evidence tag
    // with the card's initial so it is still distinguishable.
    const initial = (cardNameEn.trim()[0] || "?").toUpperCase();
    return (
      <svg viewBox="0 0 100 65" className="w-full h-full p-1 drop-shadow-md" aria-label={cardNameEn}>
        <path d="M30 14 H70 L80 32 L70 50 H30 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="72" cy="32" r="3" fill="#10171c" />
        <text x="48" y="39" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#334155" fontFamily="sans-serif">
          {initial}
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 65"
      className="w-full h-full p-1 drop-shadow-md"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={cardNameEn}
      // Static, developer-authored markup (see ./art/*.ts) — never user input.
      dangerouslySetInnerHTML={{ __html: art }}
    />
  );
};
