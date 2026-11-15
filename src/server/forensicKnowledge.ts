/**
 * Forensic knowledge base used by the AI Forensic Scientist.
 *
 * Every card (means + clue) has a profile of "traits" (tags with weight 1-3),
 * and every option on every scene tile is described by the traits it evokes.
 * fit(card, option) = Σ cardWeight(tag) × optionWeight(tag) over shared tags.
 *
 * This replaces the old keyword matching on Vietnamese card names, which
 * missed most cards and fell back to option 0 on most tiles.
 */

export type TraitMap = Record<string, number>;

// Short syntax: "tag" = weight 2, "tag:3" = weight 3, "tag:1" = weight 1.
function t(spec: string): TraitMap {
  const out: TraitMap = {};
  for (const raw of spec.split(/\s+/).filter(Boolean)) {
    const [tag, w] = raw.split(":");
    out[tag] = w ? Number(w) : 2;
  }
  return out;
}

// Vietnamese labels used when explaining the AI's reasoning.
export const TRAIT_LABEL_VI: Record<string, string> = {
  sharp: "vết cắt sắc", stab: "vết đâm xuyên", blunt: "lực đánh mạnh", gunshot: "vết đạn",
  strangle: "siết cổ", smother: "bịt đường thở", drown: "dìm nước", poison: "chất độc",
  ingest: "qua đường ăn uống", inject: "tiêm chích", gas: "khí độc/khí gas", chemical: "hóa chất",
  bio: "vi sinh/bệnh lý", animal: "sinh vật độc", radiation: "phóng xạ", electric: "điện giật",
  fire: "lửa", burn: "bỏng/cháy xém", heat: "nhiệt độ cao", explosion: "vụ nổ", fall: "rơi từ trên cao",
  crush: "bị đè nghiền", machine: "máy móc", loud: "tiếng động lớn", silent: "im lặng",
  quick: "tử vong tức thì", slow: "tử vong từ từ", planned: "có chuẩn bị kỹ", impulsive: "bột phát, vớ vật tiện tay",
  cruel: "tàn bạo", messy: "hiện trường hỗn loạn", clean: "gọn gàng, ít dấu vết", bloody: "nhiều máu",
  tech: "công nghệ", weird: "khác thường", household: "đồ gia dụng", kitchen: "nhà bếp",
  food: "đồ ăn", bathroom: "phòng tắm", bedroom: "phòng ngủ", sleep: "lúc ngủ", office: "văn phòng",
  construction: "công trường", tools: "dụng cụ sửa chữa", worker: "lao động chân tay", sport: "thể thao",
  leisure: "giải trí", medical: "y tế", garden: "cây cối/vườn", nature: "thiên nhiên", hunting: "săn bắn",
  sea: "biển", water: "nước", liquid: "chất lỏng", street: "đường phố", school: "trường học",
  student: "học sinh", transport: "tàu xe", travel: "đi lại", vehicle: "phương tiện", hotel: "khách sạn",
  alcohol: "rượu bia", nightlife: "về đêm", reading: "sách vở", paper: "giấy tờ", document: "văn bản",
  money: "tiền bạc", theft: "trộm cắp", luxury: "xa xỉ", business: "kinh doanh", power: "quyền lực",
  romance: "tình cảm", family: "gia đình", inheritance: "thừa kế", secret: "bí mật", blackmail: "tống tiền",
  hatred: "thù hận", rage: "nóng giận", fight: "giằng co, ẩu đả", threat: "đe dọa", stealth: "lén lút",
  dark: "bóng tối", night: "ban đêm", cold: "lạnh", storage: "kho/tầng hầm", formal: "trang phục lịch sự",
  clothing: "quần áo", underwear: "đồ lót", fabric: "sợi vải", cosmetics: "mỹ phẩm", perfume: "nước hoa",
  cigarette: "thuốc lá", smoke: "khói", rot: "ẩm mốc, ôi thiu", mud: "bùn đất", glass: "thủy tinh/kính",
  shoe: "giày dép", hair: "tóc", saliva: "nước bọt", teeth: "răng/vết cắn", blood: "máu", print: "dấu vân tay/dấu chân",
  gloves: "găng tay", tape: "băng keo", bag: "túi đựng", wrap: "bọc kín", tied: "trói buộc", key: "chìa khóa",
  "break-in": "đột nhập", artist: "nghệ thuật", music: "âm nhạc", old: "cũ kỹ/người già", colleague: "đồng nghiệp",
  rival: "đối thủ", stranger: "người lạ", dramatic: "kịch tính",
};

// ---------------------------------------------------------------------------
// MEANS CARDS
// ---------------------------------------------------------------------------
export const MEANS_TRAITS: Record<string, TraitMap> = {
  m_01: t("sharp:3 stab bloody kitchen:3 food:1 household:1 impulsive"), // Kitchen Knife
  m_02: t("sharp:3 bloody:3 kitchen:3 food cruel messy"), // Cleaver
  m_03: t("stab:3 sharp bloody planned:1 secret:1 quick:1"), // Dagger
  m_04: t("sharp:3 bloody:3 nature garden cruel messy:1"), // Machete
  m_05: t("sharp:3 bloody old:1 luxury:1 dramatic weird:1"), // Sword
  m_06: t("sharp stab bloody:1 household office:1 school:1 fabric artist:1 impulsive:1"), // Scissors
  m_07: t("sharp:3 bloody bathroom:3 cosmetics:1"), // Razor Blade
  m_08: t("sharp:3 bloody medical:3 planned clean:1"), // Scalpel
  m_09: t("sharp:3 bloody office storage worker:1 construction:1"), // Box Cutter
  m_10: t("stab:3 bloody glass impulsive:1 weird:1 street:1 secret:1"), // Shiv
  m_11: t("sharp bloody:1 artist weird:3 luxury:1 dramatic"), // Sharpened Fan
  m_12: t("sharp blunt:1 bloody:3 nature cruel messy rage:1"), // Axe
  m_13: t("sharp machine:3 bloody:3 loud:3 nature construction:1 cruel:3 messy:3"), // Chainsaw
  m_14: t("sharp:3 bloody quick:1 artist:1 dramatic weird:1"), // Katana
  m_15: t("stab:3 cold alcohol nightlife:1 kitchen:1 quick:1"), // Ice Pick
  m_16: t("sharp stab bloody street outdoor:1 secret:1"), // Folding Knife
  m_17: t("blunt:3 sport:3 rage fight leisure:1"), // Baseball Bat
  m_18: t("blunt:3 tools:3 construction worker impulsive:1 household:1"), // Hammer
  m_19: t("blunt:3 crush construction:3 worker loud:1 cruel:1"), // Sledgehammer
  m_20: t("blunt:3 construction:3 street impulsive rage:1"), // Brick
  m_21: t("blunt:3 sport:3 leisure:1 household:1 impulsive:1"), // Dumbbell
  m_22: t("blunt:3 construction worker:1 storage:1 street:1"), // Steel Tube
  m_23: t("blunt:3 sport:1 luxury business:1 impulsive rage:1 household:1"), // Trophy
  m_24: t("blunt:3 tools:3 worker storage household:1"), // Tool Box
  m_25: t("blunt:3 tools break-in:3 theft construction:1 storage:1"), // Crowbar
  m_26: t("blunt:3 kitchen:3 food household:1 impulsive rage:1"), // Frying Pan
  m_27: t("blunt:3 sport:3 luxury business outdoor:1 leisure"), // Golf Club
  m_28: t("blunt:3 household old luxury:1 dark:1 fire:1"), // Candlestick
  m_29: t("blunt:3 tools:3 worker machine:1 storage:1"), // Wrench
  m_30: t("blunt:3 nature outdoor sea:1 impulsive rage:1 street:1"), // Stone
  m_31: t("smother:3 bag:3 kitchen:1 household:1 silent:1"), // Plastic Bag
  m_32: t("strangle:3 tied:3 fabric:1 storage:1 sea:1 planned:1"), // Rope
  m_33: t("strangle:3 electric:1 tech office:1 storage:1"), // Wire / Cable
  m_34: t("smother:3 bedroom:3 sleep:3 silent household:1 clean:1 fabric:1"), // Pillow
  m_35: t("smother:3 water bathroom:3 liquid:1 fabric:1 silent:1"), // Wet Towel
  m_36: t("smother:3 wrap:3 kitchen food:1 planned weird:1"), // Plastic Wrap
  m_37: t("drown:3 water:3 bathroom sea liquid"), // Drowning
  m_38: t("gas:3 kitchen household:1 explosion:1 sleep silent chemical:1 planned"), // Gas Leak
  m_39: t("strangle:3 formal:3 business office fabric"), // Necktie
  m_40: t("strangle:3 fabric:1 clothing household:1 impulsive:1 bedroom:1"), // Belt
  m_41: t("poison:3 ingest:3 slow old planned food:1 inheritance:1 silent:1 family:1"), // Arsenic
  m_42: t("poison:3 ingest quick planned secret chemical:1 silent:1"), // Cyanide
  m_43: t("poison:3 stab:1 nature:1 weird hunting:1 stealth"), // Poison Dart
  m_44: t("poison ingest:3 sleep:3 medical bedroom silent clean:1"), // Overdose Pill
  m_45: t("gas:3 chemical:3 planned silent:1"), // Poisonous Gas
  m_46: t("animal:3 poison nature:3 threat teeth weird:1"), // Venomous Snake
  m_47: t("animal:3 poison nature:1 threat storage:1 dark:1 teeth:1"), // Venomous Spider
  m_48: t("poison:3 chemical:3 slow liquid:1 medical:1 old:1"), // Mercury
  m_49: t("bio:3 slow:3 medical:3 planned:1 rot:1"), // Biological Infection
  m_50: t("poison:3 inject:3 medical:3 quick:1 sleep:1 planned clean:1"), // Poison Injection
  m_51: t("poison:3 chemical:3 garden:3 ingest:1 nature:1 storage:1 worker:1"), // Pesticide
  m_52: t("bio:3 rot:3 slow:3 storage dark:1 poison:1"), // Mold
  m_53: t("radiation:3 slow:3 chemical planned tech:1 weird:1"), // Radioactive Material
  m_54: t("gunshot:3 loud:3 quick:3 bloody street:1 planned:1"), // Pistol
  m_55: t("gunshot:3 quick:3 planned:3 stealth outdoor:1 loud:1"), // Sniper Rifle
  m_56: t("gunshot:3 hunting:3 nature:3 loud quick"), // Hunting Rifle
  m_57: t("gunshot:3 loud:3 bloody:3 messy hunting:1 cruel:1"), // Shotgun
  m_58: t("stab:3 hunting nature silent stealth weird:1 sport:1"), // Crossbow
  m_59: t("fire burn sea:3 explosion:1 smoke loud:1 weird transport:1"), // Flare Gun
  m_60: t("electric:3 quick burn tech:1 construction:1"), // High Voltage
  m_61: t("burn:3 heat:3 kitchen:3 liquid water"), // Boiling Water
  m_62: t("heat burn:1 electric:1 kitchen:3 tech:1 weird:3 food:1"), // Microwave
  m_63: t("explosion:3 loud:3 fire construction messy:3 planned dramatic"), // TNT
  m_64: t("fire:3 burn:3 smoke:3 chemical:1 liquid:1 planned:1 cruel:1"), // Kerosene / Fire
  m_65: t("crush:3 vehicle:3 construction:3 machine street worker:1 weird"), // Steamroller
  m_66: t("fall:3 quick impulsive dramatic construction:1"), // Push from Height
  m_67: t("tech:3 weird:3 planned:3 clean:3 bio:1 slow:1"), // Nanobots
  m_68: t("machine:3 crush construction worker loud tech:1 electric:1"), // Machine Malfunction
};

// ---------------------------------------------------------------------------
// CLUE CARDS
// ---------------------------------------------------------------------------
export const CLUE_TRAITS: Record<string, TraitMap> = {
  c_01: t("blood:3 bloody print:1 messy:1"), // Blood Stain
  c_02: t("blood:3 medical:3 bio:1 planned:1"), // Blood Sample
  c_03: t("print:3 glass:1"), // Fingerprint
  c_04: t("print:3 mud:3 shoe outdoor:1 stealth:1"), // Footprint
  c_05: t("cigarette:3 smoke saliva street nightlife:1 fire:1"), // Cigarette Butt
  c_06: t("cigarette:3 smoke alcohol nightlife:1 household:1 glass:1 burn:1"), // Ash Tray
  c_07: t("hair:3 bio:1 cosmetics:1 bathroom:1 bedroom:1 romance:1"), // Hair Strand
  c_08: t("saliva:3 bio medical:1"), // Saliva / DNA
  c_09: t("teeth:3 fight:3 rage:1 bloody:1"), // Broken Teeth
  c_10: t("romance:3 family luxury:1 money:1"), // Wedding Ring
  c_11: t("luxury:3 money theft romance:1 formal:1"), // Diamond Necklace
  c_12: t("cosmetics:3 romance:3 bathroom:1 bedroom:1 artist:1 nightlife:1"), // Red Lipstick
  c_13: t("glass:3 fight reading old:1 office:1"), // Broken Glasses
  c_14: t("shoe formal nightlife romance:1 luxury:1"), // High Heel Shoe
  c_15: t("shoe:3 formal business office:1 print:1"), // Leather Shoe
  c_16: t("gloves:3 clean planned cold fabric:1"), // Leather Glove
  c_17: t("kitchen:3 food fabric worker:1 bloody:1"), // Apron
  c_18: t("underwear:3 bedroom fabric romance:1 household:1"), // Boxer Shorts
  c_19: t("underwear:3 bedroom fabric romance bathroom:1"), // Briefs
  c_20: t("perfume:3 cosmetics romance luxury:1 nightlife:1"), // Perfume Scent
  c_21: t("quick planned:1 business:1 formal:1 luxury:1 glass:1 fight:1 night:1"), // Wristwatch (stopped)
  c_22: t("artist street nightlife:1 weird:1 stranger:1"), // Tattoo
  c_23: t("medical:3 bio clean:1"), // Medical Mask
  c_24: t("romance:3 paper secret document:1 blackmail:1"), // Love Letter
  c_25: t("hotel:3 key travel romance:1 secret:1"), // Hotel Keycard
  c_26: t("money:3 paper document business:1 office:1"), // Bank Statement
  c_27: t("money:3 theft paper:1 blackmail:1"), // Banknote
  c_28: t("money:3 paper street:1 theft:1 leisure:1"), // Lottery Ticket
  c_29: t("transport:3 travel:3 paper street:1 stranger:1"), // Torn Ticket Stub
  c_30: t("paper document school office:1 power:1"), // Certificate
  c_31: t("secret:3 fire burn paper document:1 blackmail romance:1"), // Half-burnt Diary
  c_32: t("document:3 paper money inheritance:1 business secret:1"), // Signature
  c_33: t("business:3 office paper:1 power:1 colleague:1 stranger:1"), // Business Card
  c_34: t("paper money:1 planned food:1"), // Receipt
  c_35: t("inheritance:3 family:3 money:3 document paper:1 old"), // Will / Testament
  c_36: t("tech:3 secret:3 blackmail office document:1"), // Flash Drive / USB
  c_37: t("tech:3 office:3 colleague:1"), // Computer Monitor
  c_38: t("tech:3 office:3 print:1"), // Keyboard
  c_39: t("music secret blackmail old tech:1 artist:1"), // Cassette Tape
  c_40: t("tech secret:1 romance:1 blackmail:1"), // Mobile Phone
  c_41: t("tech secret:1 street:1 office:1 hotel:1 theft break-in:1"), // Security Footage
  c_42: t("tech:3 sport quick:1 leisure:1"), // Smart Watch
  c_43: t("food:3 kitchen:1 household:1 rot:1 office:1 ingest:1"), // Take-out Food
  c_44: t("food:3 kitchen ingest:1 household:1 old:1"), // Steamed Buns
  c_45: t("food kitchen:3 household:1 rot:1"), // Eggs
  c_46: t("food ingest:1 old household:1 school:1"), // Preserved Plums
  c_47: t("garden:3 nature:1 household:1 old:1"), // Potted Plant
  c_48: t("planned slow old weird:1 reading:1"), // Hourglass
  c_49: t("heat burn household fabric clothing:1 electric:1"), // Iron
  c_50: t("school:3 student"), // Chalk
  c_51: t("office school paper stab:1"), // Push Pin
  c_52: t("old:3 nature reading:1 school:1 luxury:1 weird:1"), // Fossil
  c_53: t("animal:1 nature:1 old:1 sport:1 money:1 leisure:1"), // Horseshoe
  c_54: t("machine tools tech:1 worker:1 storage:1"), // Spring
  c_55: t("romance family:1 secret:1 luxury:1 planned:1"), // Gift Box
  c_56: t("reading:3 paper school old:1 office:1"), // Dictionary
  c_57: t("key:3 money:3 theft:3 break-in business:1 secret"), // Bank Vault Key
};

// ---------------------------------------------------------------------------
// SCENE TILE OPTIONS  (tileId -> one TraitMap per option index)
// "neutral" marks the option to fall back on when a tile says nothing
// useful about the case, so the marker does not mislead investigators.
// ---------------------------------------------------------------------------
export const TILE_OPTION_TRAITS: Record<string, TraitMap[]> = {
  tile_cause_of_death: [
    t("smother:3 strangle:3 drown:3 gas"), // Suffocation
    t("blunt:3 gunshot fall:3 crush:3 explosion machine stab:1"), // Severe Injury
    t("sharp:3 stab:3 gunshot bloody"), // Loss of Blood
    t("bio:3 radiation:3 slow:1 animal:1"), // Illness / Disease
    t("poison:3 chemical animal inject ingest gas:1"), // Poisoning
    t("electric:3 fire:3 fall machine:3 heat explosion drown:1 crush:1"), // Accident
  ],
  tile_location_indoor: [
    t("alcohol:3 nightlife fight:1 rage:1 cigarette:1 music:1"), // Pub
    t("reading:3 paper:3 document:1"), // Bookstore
    t("food:3 kitchen"), // Restaurant
    t("hotel:3 romance:1 luxury:1 travel:1"), // Hotel
    t("medical:3 bio:1 inject:1"), // Hospital
    t("construction:3 tools worker machine:1"), // Building Site
  ],
  tile_location_home: [
    t("household tech:1 leisure:1 family:1"), // Living Room
    t("bedroom:3 sleep romance underwear:1"), // Bedroom
    t("kitchen:3 food"), // Kitchen
    t("bathroom:3 water cosmetics drown:1"), // Bathroom
    t("fall:3 garden outdoor:1 cigarette:1"), // Balcony
    t("storage:3 tools dark machine:1 chemical:1 rot:1"), // Basement
  ],
  tile_location_outdoor: [
    t("garden sport nature:1 leisure:1"), // Park
    t("street:3 vehicle transport:1 stranger:1"), // Street
    t("nature:3 hunting:3 animal"), // Forest
    t("sea:3 water drown:1"), // Seashore
    t("school:3 student reading:1"), // School
    t("transport:3 travel stranger:1"), // Train Station
  ],
  tile_victim_expression: [
    t("sleep:3 gas ingest:1 smother:1 quick:1 neutral:1"), // Peaceful
    t("strangle:3 drown:3 smother tied:1 fight:1"), // Struggling
    t("animal threat gunshot explosion fire machine:1"), // Frightened
    t("sharp burn chemical slow blunt poison:1"), // Pain
    t("quick:3 electric radiation:1 gunshot:1"), // Blank
    t("rage:3 impulsive fight blunt:1"), // Furious
  ],
  tile_victim_state: [
    t("poison gas smother electric:1 ingest:1"), // Intact
    t("machine:3 explosion:3 sharp animal:1"), // Torn
    t("strangle fight impulsive blunt:1"), // Struggled
    t("wrap:3 bag smother fabric:1"), // Covered
    t("tied:3 tape"), // Bound
    t("sleep:3 bedroom"), // Sleeping
  ],
  tile_victim_clothes: [
    t("clean business formal:1"), // Neat
    t("mud:3 construction worker nature:1"), // Dirty
    t("explosion machine fight sharp:1"), // Tattered
    t("weird:3 artist"), // Bizarre
    t("underwear:3 bathroom bedroom:1 romance:1"), // Naked
    t("formal:3 business luxury"), // Formal
  ],
  tile_general_impression: [
    t("household impulsive:1 neutral:1"), // Common
    t("weird:3 tech"), // Creative
    t("secret:3 planned blackmail:1"), // Suspicious
    t("cruel:3 messy crush animal:1"), // Cruel
    t("explosion bloody crush machine"), // Horrible
    t("dramatic:3 fall explosion romance gunshot:1"), // Dramatic
  ],
  tile_sudden_incident: [
    t("electric:3 dark tech:1"), // Power Outage
    t("fire:3 smoke heat explosion"), // Fire
    t("fight:3 rage impulsive"), // Conflict
    t("theft:3 money break-in luxury"), // Theft
    t("threat animal loud:1"), // Scream!
    t("silent clean:1 neutral:2"), // Nothing
  ],
  tile_day_of_crime: [
    t("office school business:1"), // Weekday
    t("leisure:3 sport nightlife:1 alcohol:1"), // Weekend
    t("garden romance:1"), // Spring
    t("sea heat outdoor:1"), // Summer
    t("nature:1 hunting:1 neutral:1"), // Autumn
    t("cold:3 fire:1 gloves:1"), // Winter
  ],
  tile_duration_of_crime: [
    t("quick:3 gunshot:3 explosion:3 electric fall"), // Instantaneous
    t("sharp stab blunt strangle"), // Brief
    t("poison gas smother:1"), // A few hours
    t("slow:3 radiation bio"), // Days
    t("planned:3"), // Planned
    t("neutral:2"), // Indefinite
  ],
  tile_weather_environment: [
    t("water mud outdoor:1"), // Heavy Rain
    t("heat sea:1 outdoor:1"), // Scorching Sun
    t("stealth secret:1 sea:1"), // Dense Fog
    t("construction storage rot:1"), // Humid / Dusty
    t("cold:3 office:1 tech:1"), // Freezing / Air Conditioned
    t("dark:3 night nightlife:1"), // Pitch Black
  ],
  tile_trace_left_behind: [
    t("liquid:3 water chemical alcohol:1 poison:1"), // Spilled Liquid
    t("smoke:3 gas:3 perfume chemical cigarette fire:1"), // Peculiar Scent / Smoke
    t("print:3 mud shoe"), // Footprint / Fingerprint
    t("fabric:3 clothing tied:1 underwear:1"), // Fabric / Shreds
    t("fire:3 burn:3 smoke electric explosion"), // Burn / Ash
    t("clean:3 gloves planned:1"), // No Trace
  ],
  tile_motive_of_crime: [
    t("money:3 luxury theft inheritance"), // Money / Debt
    t("romance:3 cosmetics:1 perfume:1"), // Jealousy / Romance
    t("hatred:3 cruel neutral:1"), // Deep Hatred
    t("blackmail:3 secret:3 document:1"), // Silencing / Blackmail
    t("rage:3 impulsive:3 fight"), // Sudden Rage
    t("power:3 business office:1"), // Power Struggle
  ],
  tile_social_relationship: [
    t("romance:3 bedroom:1"), // Lover / Spouse
    t("colleague:3 office"), // Friend / Colleague
    t("rival:3 business sport:1"), // Partner / Rival
    t("family:3 inheritance:3 household"), // Family Relative
    t("stranger:3 street transport:1"), // Stranger
    t("power business office"), // Superior / Subordinate
  ],
  tile_scene_smell: [
    t("perfume:3 cosmetics romance:1"), // Perfume
    t("chemical:3 gas poison:1"), // Chemical
    t("rot:3 bio food:1"), // Moldy / Rotten
    t("alcohol:3 nightlife:1"), // Alcohol
    t("cigarette:3 smoke"), // Cigarette Smoke
    t("clean neutral:1 electric:1"), // Odorless
  ],
  tile_sound_heard: [
    t("loud:3 gunshot:3 explosion:3 fall:1 blunt:1"), // Loud Bang
    t("slow pain:1 poison:1"), // Groaning
    t("shoe:3 stealth print:1"), // Footsteps
    t("glass:3 fight:1"), // Breaking Glass
    t("music:3 nightlife tech:1"), // Music
    t("silent:3 clean:1"), // Dead Silence
  ],
  tile_victim_occupation: [
    t("school:3 student:3"), // Student
    t("luxury:3 business money:1"), // High Society / Business
    t("office:3 paper:1 tech:1"), // Office Worker
    t("worker:3 construction tools"), // Blue Collar
    t("artist:3 music cosmetics:1"), // Artist / Entertainment
    t("old:3 garden:1 leisure:1"), // Retired / Unemployed
  ],
  tile_state_of_scene: [
    t("messy:3 fight explosion"), // Utter Chaos
    t("clean:3 planned:1"), // Neat & Clean
    t("fire:3 burn explosion:1"), // Burned
    t("water:3 drown liquid"), // Soaked
    t("break-in:3 theft key tools:1"), // Broken Lock
    t("nature outdoor:1 neutral:1"), // Natural
  ],
  tile_supporting_tool: [
    t("gloves:3 clean:1 print:1"), // Gloves
    t("tape:3 tied wrap:1"), // Duct Tape
    t("bag:3 liquid:1 food:1"), // Container / Bag
    t("vehicle:3 transport travel:1"), // Vehicle
    t("key:3 break-in:3"), // Lockpick
    t("impulsive neutral:1"), // None
  ],
  tile_biological_traces: [
    t("blood:3 bloody:3 sharp:1"), // Blood Stain
    t("hair:3 cosmetics:1"), // Hair Strand
    t("saliva:3 cigarette food:1"), // Saliva
    t("fight strangle"), // Fingernail
    t("teeth:3 animal:3"), // Bite Mark
    t("clean:3 gloves poison:1 gas:1"), // No Traces
  ],
  tile_condition_of_property: [
    t("theft messy money:1"), // Ransacked
    t("clean neutral:1"), // Intact
    t("glass:3 explosion blunt:1"), // Shattered
    t("fall:1 planned:1 secret:1"), // Moved
    t("secret:3 document:1 key:1"), // Hidden
    t("paper messy money:1"), // Scattered
  ],
};

export function getCardTraits(cardId: string): TraitMap {
  return MEANS_TRAITS[cardId] || CLUE_TRAITS[cardId] || {};
}

/** fit(card, option) and the shared traits that produced it. */
export function traitFit(card: TraitMap, option: TraitMap): { score: number; shared: string[] } {
  let score = 0;
  const shared: { tag: string; v: number }[] = [];
  for (const tag of Object.keys(option)) {
    if (tag === "neutral") continue;
    const cw = card[tag];
    if (cw) {
      const v = cw * option[tag];
      score += v;
      shared.push({ tag, v });
    }
  }
  shared.sort((a, b) => b.v - a.v);
  return { score, shared: shared.map((s) => s.tag) };
}
