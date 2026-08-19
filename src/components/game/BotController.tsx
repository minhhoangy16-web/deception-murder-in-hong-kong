import React from "react";
import { useGameStore } from "../../store/gameStore";
import { Bot, Sparkles, Wand2 } from "lucide-react";

export const BotController: React.FC = () => {
  const { gameState, solveCrime } = useGameStore();

  if (!gameState || !gameState.phase.startsWith("DAY_ROUND_")) return null;

  const botPlayers = gameState.players.filter((p) => p.isBot && p.hasBadge);
  if (botPlayers.length === 0) return null;

  const handleSimulateBotWrongAccusation = () => {
    const bot = botPlayers[0];
    // Pick an innocent player and random cards
    const otherPlayers = gameState.players.filter((p) => p.id !== bot.id);
    const randomSuspect = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
    if (randomSuspect) {
      const means = randomSuspect.meansCards[0];
      const clue = randomSuspect.clueCards[0];
      if (means && clue) {
        // Will be wrong unless by pure random coincidence
        solveCrime(randomSuspect.id, means.id, clue.id);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-2xl backdrop-blur-md text-xs">
      <div className="flex items-center gap-1.5 px-2 text-emerald-400 font-bold">
        <Bot className="w-4 h-4" />
        <span>Bot Helper:</span>
      </div>
      <button
        onClick={handleSimulateBotWrongAccusation}
        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-colors flex items-center gap-1"
      >
        <Wand2 className="w-3 h-3 text-amber-400" />
        Giả lập Bot phá án
      </button>
    </div>
  );
};
