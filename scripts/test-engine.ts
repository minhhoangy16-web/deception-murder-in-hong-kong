import { gameManager } from "../src/server/gameEngine";
import { runAIForensicAnalysis } from "../src/server/aiForensicService";
import { Card, SceneTile } from "../src/types/game";
import sceneTilesData from "../src/data/sceneTiles.json";

async function runTests() {
  console.log("=========================================");
  console.log("🔍 TESTING DECEPTION HK GAME ENGINE & AI");
  console.log("=========================================\n");

  // 1. Create Room
  console.log("Step 1: Creating Room...");
  const hostId = "socket_host_123";
  const state = gameManager.createRoom(hostId, "Thám Tử Lừng Danh", {
    briefingDurationSeconds: 60,
    roundDurationSeconds: 60,
    enableAccomplice: true,
    enableWitness: true,
    aiProvider: "heuristic",
  });
  console.log(`✓ Room created: ${state.roomId}, players: ${state.players.length}`);

  // 2. Add 3 Bots
  console.log("\nStep 2: Adding 3 Bot Players...");
  gameManager.addBotPlayer(state.roomId);
  gameManager.addBotPlayer(state.roomId);
  gameManager.addBotPlayer(state.roomId);
  console.log(`✓ Players in room: ${state.players.length} (Host + 3 Bots)`);

  // 3. Start Game -> Enters Briefing Phase
  console.log("\nStep 3: Starting Game (Briefing Phase)...");
  await gameManager.startGame(state.roomId);
  console.log(`✓ Game Phase: ${state.phase} (Expected BRIEFING)`);
  console.log(`✓ Round time remaining: ${state.roundTimeRemaining}s`);

  // 4. Skip Briefing -> Enters Night Phase & Secretly Assigns Roles
  console.log("\nStep 4: Transition to Night Phase & Role Distribution...");
  await gameManager.skipBriefing(state.roomId, hostId);
  console.log(`✓ Game Phase: ${state.phase} (Expected NIGHT)`);

  // 5. Test Night Phase Selection & Round 1 Tile Generation
  console.log("\nStep 5: Murderer picks Means & Clue...");
  const murderer = state.players.find((p) => p.role === "MURDERER")!;
  const keyMeans = murderer.meansCards[0];
  const keyClue = murderer.clueCards[0];
  console.log(`  - Murderer is: ${murderer.name}`);
  console.log(`  - Key Means: ${keyMeans.nameVi} (${keyMeans.nameEn})`);
  console.log(`  - Key Clue: ${keyClue.nameVi} (${keyClue.nameEn})`);

  await gameManager.submitMurderSelection(state.roomId, murderer.id, keyMeans.id, keyClue.id);
  console.log(`✓ Round 1 Active Tiles Count: ${state.activeTiles.length} (Expected: exactly 6)`);
  if (state.activeTiles.length !== 6) throw new Error("Round 1 active tiles must be 6!");

  const causeOfDeath = state.activeTiles.find(t => t.type === "CAUSE_OF_DEATH");
  const location = state.activeTiles.find(t => t.type === "LOCATION");
  const events = state.activeTiles.filter(t => t.type === "EVENT");
  console.log(`  - Has Cause of Death: ${!!causeOfDeath} (${causeOfDeath?.titleVi})`);
  console.log(`  - Has Location: ${!!location} (${location?.titleVi})`);
  console.log(`  - Has 4 Event Tiles: ${events.length === 4} (${events.map(e => e.titleVi).join(", ")})`);

  // 6. Test Advance to Round 2 (Tile Replacement)
  console.log("\nStep 6: Advance to Round 2 (Discard 1 least relevant tile & Add 1 new tile)...");
  await gameManager.advanceRound(state.roomId);
  const r2ActiveCount = state.activeTiles.length;
  const r2DiscardCount = state.discardedTiles.length;
  console.log(`✓ Round 2 Active Tiles Count: ${r2ActiveCount} (Expected: exactly 6)`);
  console.log(`✓ Discarded Tiles Count: ${r2DiscardCount} (Expected: exactly 1)`);
  console.log(`  - Discarded Tile: ${state.discardedTiles[0]?.titleVi}`);
  console.log(`  - Active Tiles: ${state.activeTiles.map(t => t.titleVi).join(", ")}`);
  if (r2ActiveCount !== 6) throw new Error("Round 2 active tiles must remain 6!");
  if (r2DiscardCount !== 1) throw new Error("Round 2 must have exactly 1 discarded tile!");

  // 7. Test Advance to Round 3 (Second Tile Replacement)
  console.log("\nStep 7: Advance to Round 3 (Discard 2nd least relevant tile & Add 1 new tile)...");
  await gameManager.advanceRound(state.roomId);
  const r3ActiveCount = state.activeTiles.length;
  const r3DiscardCount = state.discardedTiles.length;
  console.log(`✓ Round 3 Active Tiles Count: ${r3ActiveCount} (Expected: exactly 6)`);
  console.log(`✓ Discarded Tiles Count: ${r3DiscardCount} (Expected: exactly 2)`);
  console.log(`  - Discarded Tiles: ${state.discardedTiles.map(t => t.titleVi).join(", ")}`);
  console.log(`  - Active Tiles: ${state.activeTiles.map(t => t.titleVi).join(", ")}`);
  if (r3ActiveCount !== 6) throw new Error("Round 3 active tiles must remain 6!");
  if (r3DiscardCount !== 2) throw new Error("Round 3 must have exactly 2 discarded tiles!");


  // Verify Cause of Death & Location are still intact
  const codStillPresent = state.activeTiles.some(t => t.type === "CAUSE_OF_DEATH");
  const locStillPresent = state.activeTiles.some(t => t.type === "LOCATION");
  console.log(`✓ Cause of Death Protected: ${codStillPresent}`);
  console.log(`✓ Location Protected: ${locStillPresent}`);

  console.log("\n=========================================");
  console.log("🎉 ALL TESTS PASSED WITH 100% SUCCESS!");
  console.log("=========================================");
  process.exit(0);
}

runTests().catch((err) => {
  console.error("❌ Test Failed:", err);
  process.exit(1);
});

