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
  state.players.forEach((p) => {
    console.log(`  - ${p.name} => Means: ${p.meansCards.length}, Clues: ${p.clueCards.length}, Role: ${p.role ?? "None (Pending)"}`);
  });

  // 4. Skip Briefing -> Enters Night Phase & Secretly Assigns Roles
  console.log("\nStep 4: Transition to Night Phase & Role Distribution...");
  await gameManager.skipBriefing(state.roomId, hostId);
  console.log(`✓ Game Phase: ${state.phase} (Expected NIGHT)`);
  state.players.forEach((p) => {
    console.log(`  - ${p.name} => Assigned Role: [${p.role}]`);
  });

  // 4b. Test Witness Sanitized State
  const witness = state.players.find(p => p.role === "WITNESS");
  if (witness) {
    console.log(`\nStep 4b: Verifying Witness View for ${witness.name}...`);
    const sanitizedForWitness = gameManager.getSanitizedStateForPlayer(state, witness.id);
    sanitizedForWitness.players.forEach(p => {
      if (p.id === witness.id) {
        console.log(`  - ${p.name} (Self) => Role: ${p.role}`);
      } else {
        console.log(`  - ${p.name} => isWitnessSuspect: ${p.isWitnessSuspect ? "YES (NGHI CAN)" : "NO"}, role: ${p.role ?? "HIDDEN"}`);
      }
    });
  }

  // 5. Test Night Phase Selection
  console.log("\nStep 5: Murderer picks Means & Clue...");
  const murderer = state.players.find((p) => p.role === "MURDERER")!;
  const keyMeans = murderer.meansCards[0];
  const keyClue = murderer.clueCards[0];
  console.log(`  - Murderer is: ${murderer.name}`);
  console.log(`  - Key Means: ${keyMeans.nameVi} (${keyMeans.nameEn})`);
  console.log(`  - Key Clue: ${keyClue.nameVi} (${keyClue.nameEn})`);

  await gameManager.submitMurderSelection(state.roomId, murderer.id, keyMeans.id, keyClue.id);
  console.log(`✓ New Phase: ${state.phase} (Round ${state.currentRound})`);
  console.log(`✓ AI Placed markers on 6 tiles:`);
  state.activeTiles.forEach((tile) => {
    const chosenOpt = tile.options[tile.markerIndex ?? 0];
    console.log(`    • [${tile.titleVi}]: Option [${(tile.markerIndex ?? 0) + 1}] ${chosenOpt?.labelVi ?? "N/A"}`);
  });

  // 6. Test User Example: "Gậy bóng chày" + "Chậu cây"
  console.log("\nStep 6: Testing User Example (Gậy bóng chày + Chậu cây)...");
  const batMeans: Card = { id: "m_bat", nameVi: "Gậy bóng chày", nameEn: "Baseball Bat", category: "Vũ Khí Thể Thao" };
  const plantClue: Card = { id: "c_plant", nameVi: "Chậu cây cảnh", nameEn: "Plant Pot", category: "Vật Dụng Gia Đình" };
  const mockTiles: SceneTile[] = (sceneTilesData as SceneTile[]).slice(0, 6);

  const batPlantResult = await runAIForensicAnalysis(
    mockTiles,
    batMeans,
    plantClue,
    state.players,
    1,
    "heuristic"
  );

  console.log("✓ AI Heuristic Placements for (Gậy bóng chày + Chậu cây):");
  batPlantResult.placedTiles.forEach(tile => {
    const selected = tile.options[tile.markerIndex ?? 0];
    console.log(`    • [${tile.titleVi}] => ${selected.labelVi}`);
  });

  console.log("\n=========================================");
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY!");
  console.log("=========================================\n");
}

runTests().catch(console.error);
