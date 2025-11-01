var DEMO_SKILLS = [
  // Active Skills
  {
    id: "bolt",
    type: "active",
    name: "Arcane Bolt",
    maxLevel: 5,
    levels: [
      { level: 1, desc: "Deal 120 magic damage." },
      { level: 2, desc: "Deal 150 magic damage." },
      { level: 3, desc: "Deal 180 magic damage." },
      { level: 4, desc: "Deal 210 magic damage + 5% crit." },
      { level: 5, desc: "Deal 250 magic damage + 10% crit." },
    ],
  },
  {
    id: "blink",
    type: "active",
    name: "Blink",
    maxLevel: 3,
    levels: [
      { level: 1, desc: "Teleport 6m." },
      { level: 2, desc: "Teleport 8m, cleanse slow." },
      { level: 3, desc: "Teleport 10m, grant 1s invuln." },
    ],
  },
  {
    id: "frostnova",
    type: "active",
    name: "Frost Nova",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Deal 100 ice damage and freeze nearby enemies for 2s.",
      },
      {
        level: 2,
        desc: "Deal 140 ice damage and freeze nearby enemies for 2.5s.",
      },
      {
        level: 3,
        desc: "Deal 190 ice damage and freeze nearby enemies for 3s. Reduces target's movement speed by 30% after freeze ends.",
      },
    ],
  },
  {
    id: "healingwave",
    type: "active",
    name: "Healing Wave",
    maxLevel: 4,
    levels: [
      { level: 1, desc: "Heal target ally for 200 HP." },
      { level: 2, desc: "Heal target ally for 280 HP." },
      {
        level: 3,
        desc: "Heal target ally for 380 HP and remove 1 debuff.",
      },
      {
        level: 4,
        desc: "Heal target ally for 500 HP, remove 1 debuff, and grant 10% damage reduction for 5s.",
      },
    ],
  },
  {
    id: "bladestorm",
    type: "active",
    name: "Blade Storm",
    maxLevel: 2,
    levels: [
      {
        level: 1,
        desc: "Spin attack dealing 150% weapon damage to nearby enemies.",
      },
      {
        level: 2,
        desc: "Spin attack dealing 200% weapon damage to nearby enemies and gain 20% movement speed for 3s.",
      },
    ],
  },
  {
    id: "soulburn",
    type: "active",
    name: "Soul Burn",
    maxLevel: 3,
    levels: [
      { level: 1, desc: "Burn enemy's soul for 5% max HP over 6s." },
      {
        level: 2,
        desc: "Burn enemy's soul for 7% max HP over 6s and reduce healing received by 30%.",
      },
      {
        level: 3,
        desc: "Burn enemy's soul for 10% max HP over 6s, reduce healing received by 50%, and deal 50% of the damage as AoE to nearby enemies.",
      },
    ],
  },
  {
    id: "shadowstep",
    type: "active",
    name: "Shadow Step",
    maxLevel: 2,
    levels: [
      {
        level: 1,
        desc: "Instantly teleport behind target enemy. Next attack within 3s deals 30% bonus damage.",
      },
      {
        level: 2,
        desc: "Instantly teleport behind target enemy. Next attack within 5s deals 50% bonus damage and stuns for 1.5s.",
      },
    ],
  },
  {
    id: "rend",
    type: "active",
    name: "Rending Slash",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Slash the enemy for 130% weapon damage and cause them to bleed for 50 damage over 5s.",
      },
      {
        level: 2,
        desc: "Slash the enemy for 160% weapon damage and cause them to bleed for 75 damage over 5s.",
      },
      {
        level: 3,
        desc: "Slash the enemy for 200% weapon damage and cause them to bleed for 100 damage over 5s. The target takes 10% more damage from your attacks while bleeding.",
      },
    ],
  },
  {
    id: "thunderstrike",
    type: "active",
    name: "Thunder Strike",
    maxLevel: 4,
    levels: [
      {
        level: 1,
        desc: "Call down a bolt of lightning dealing 140 magic damage to the target.",
      },
      {
        level: 2,
        desc: "Call down a bolt of lightning dealing 180 magic damage and stun for 1s.",
      },
      {
        level: 3,
        desc: "Call down a bolt of lightning dealing 230 magic damage and stun for 1.5s.",
      },
      {
        level: 4,
        desc: "Call down a bolt of lightning dealing 290 magic damage, stun for 2s, and chain to 2 additional nearby targets.",
      },
    ],
  },
  {
    id: "barrier",
    type: "active",
    name: "Arcane Barrier",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Create a barrier that absorbs 200 damage for 8s.",
      },
      {
        level: 2,
        desc: "Create a barrier that absorbs 300 damage for 10s.",
      },
      {
        level: 3,
        desc: "Create a barrier that absorbs 450 damage for 12s and reflects 20% of damage taken.",
      },
    ],
  },
  {
    id: "fireball",
    type: "active",
    name: "Fireball",
    maxLevel: 5,
    levels: [
      {
        level: 1,
        desc: "Hurl a fiery projectile dealing 150 fire damage.",
      },
      {
        level: 2,
        desc: "Hurl a fiery projectile dealing 190 fire damage.",
      },
      {
        level: 3,
        desc: "Hurl a fiery projectile dealing 240 fire damage with a 15% chance to burn for 30 damage over 3s.",
      },
      {
        level: 4,
        desc: "Hurl a fiery projectile dealing 300 fire damage with a 25% chance to burn for 50 damage over 3s.",
      },
      {
        level: 5,
        desc: "Hurl a fiery projectile dealing 370 fire damage with a 35% chance to burn for 80 damage over 3s and explode on impact, dealing 50% damage to nearby enemies.",
      },
    ],
  },
  {
    id: "taunt",
    type: "active",
    name: "Challenging Shout",
    maxLevel: 2,
    levels: [
      {
        level: 1,
        desc: "Taunt all enemies within 8m to attack you for 3s.",
      },
      {
        level: 2,
        desc: "Taunt all enemies within 10m to attack you for 5s and reduce their damage by 15% for the duration.",
      },
    ],
  },
  {
    id: "smite",
    type: "active",
    name: "Divine Smite",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Smite the enemy for 180% weapon damage as holy damage.",
      },
      {
        level: 2,
        desc: "Smite the enemy for 220% weapon damage as holy damage and heal for 50% of damage dealt.",
      },
      {
        level: 3,
        desc: "Smite the enemy for 270% weapon damage as holy damage, heal for 50% of damage dealt, and reduce target's damage by 20% for 4s.",
      },
    ],
  },
  {
    id: "stealth",
    type: "active",
    name: "Shadow Veil",
    maxLevel: 2,
    levels: [
      {
        level: 1,
        desc: "Enter stealth for 15s or until you attack. Breaking stealth grants 30% increased damage on your next attack.",
      },
      {
        level: 2,
        desc: "Enter stealth for 20s or until you attack. Breaking stealth grants 50% increased damage on your next attack and increases critical strike chance by 25% for that attack.",
      },
    ],
  },
  {
    id: "rejuvenate",
    type: "active",
    name: "Rejuvenation",
    maxLevel: 4,
    levels: [
      { level: 1, desc: "Heals the target for 80 health over 8s." },
      { level: 2, desc: "Heals the target for 120 health over 8s." },
      {
        level: 3,
        desc: "Heals the target for 170 health over 8s and removes 1 poison or disease effect.",
      },
      {
        level: 4,
        desc: "Heals the target for 230 health over 8s, removes 1 poison or disease effect, and increases all healing received by 15% for the duration.",
      },
    ],
  },
  {
    id: "whirlwind",
    type: "active",
    name: "Whirlwind Strike",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Spin rapidly, dealing 110% weapon damage to all enemies within 5m over 3s. You are immune to knockback while spinning.",
      },
      {
        level: 2,
        desc: "Spin rapidly, dealing 140% weapon damage to all enemies within 5m over 3s. You are immune to knockback and gain 15% damage reduction while spinning.",
      },
      {
        level: 3,
        desc: "Spin rapidly, dealing 180% weapon damage to all enemies within 5m over 3s. You are immune to knockback, gain 25% damage reduction, and have a 20% chance to stun enemies for 1s on each hit while spinning.",
      },
    ],
  },
  // Passive Skills
  {
    id: "aegis",
    type: "passive",
    name: "Aegis Training",
    maxLevel: 4,
    levels: [
      { level: 1, desc: "+2% damage reduction." },
      { level: 2, desc: "+4% damage reduction." },
      { level: 3, desc: "+6% damage reduction." },
      { level: 4, desc: "+8% damage reduction." },
    ],
  },
  {
    id: "focus",
    type: "passive",
    name: "Focused Mind",
    maxLevel: 3,
    levels: [
      { level: 1, desc: "+3% crit chance." },
      { level: 2, desc: "+6% crit chance." },
      { level: 3, desc: "+10% crit chance." },
    ],
  },
  {
    id: "ironwill",
    type: "passive",
    name: "Iron Will",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "+5% maximum HP and +2% crowd control resistance.",
      },
      {
        level: 2,
        desc: "+10% maximum HP and +4% crowd control resistance.",
      },
      {
        level: 3,
        desc: "+15% maximum HP, +6% crowd control resistance, and immune to knockback effects.",
      },
    ],
  },
  {
    id: "elementalaffinity",
    type: "passive",
    name: "Elemental Affinity",
    maxLevel: 4,
    levels: [
      { level: 1, desc: "+5% fire and ice damage." },
      { level: 2, desc: "+10% fire and ice damage." },
      {
        level: 3,
        desc: "+15% fire and ice damage, 5% chance to freeze on fire damage.",
      },
      {
        level: 4,
        desc: "+20% fire and ice damage, 10% chance to freeze on fire damage or burn on ice damage.",
      },
    ],
  },
  {
    id: "vitality",
    type: "passive",
    name: "Vitality Surge",
    maxLevel: 2,
    levels: [
      {
        level: 1,
        desc: "Regenerate 1% max HP every 3 seconds when out of combat.",
      },
      {
        level: 2,
        desc: "Regenerate 2% max HP every 3 seconds when out of combat and increase all healing received by 15%.",
      },
    ],
  },
  {
    id: "precisionshots",
    type: "passive",
    name: "Precision Shots",
    maxLevel: 3,
    levels: [
      {
        level: 1,
        desc: "Ranged attacks have +5% critical strike chance.",
      },
      {
        level: 2,
        desc: "Ranged attacks have +10% critical strike chance and +5% critical damage.",
      },
      {
        level: 3,
        desc: "Ranged attacks have +15% critical strike chance and +10% critical damage. Critical hits reduce cooldowns by 1s.",
      },
    ],
  },
  {
    id: "combatexpertise",
    type: "passive",
    name: "Combat Expertise",
    maxLevel: 3,
    levels: [
      { level: 1, desc: "+3% attack speed and +2% movement speed." },
      { level: 2, desc: "+6% attack speed and +4% movement speed." },
      {
        level: 3,
        desc: "+10% attack speed, +6% movement speed, and 5% chance to dodge attacks.",
      },
    ],
  },
  // Stigma Skills
  {
    id: "shadowstrike",
    type: "stigma",
    name: "Shadow Strike",
    max: 1,
    icon: "⚔️",
  },
  {
    id: "phoenixrebirth",
    type: "stigma",
    name: "Phoenix Rebirth",
    max: 1,
    icon: "🔥",
    desc: "Upon death, revive with 30% HP and deal 200% magic damage to nearby enemies. 10 minute cooldown.",
  },
  {
    id: "timelock",
    type: "stigma",
    name: "Time Lock",
    max: 1,
    icon: "⏱️",
    desc: "Freeze time for all enemies in a 10m radius for 3 seconds. 3 minute cooldown.",
  },
  {
    id: "mirrorimage",
    type: "stigma",
    name: "Mirror Image",
    max: 1,
    icon: "👥",
    desc: "Create 2 mirror images that deal 30% of your damage and have 50% of your HP. Lasts 15 seconds. 2 minute cooldown.",
  },
  {
    id: "divineshield",
    type: "stigma",
    name: "Divine Shield",
    max: 1,
    icon: "🛡️",
    desc: "Become immune to all damage for 5 seconds. 8 minute cooldown.",
  },
  {
    id: "apocalypse",
    type: "stigma",
    name: "Apocalypse",
    max: 1,
    icon: "☄️",
    desc: "Call down a meteor shower dealing 500% magic damage to all enemies in target area over 5 seconds. 10 minute cooldown.",
  },
];

var RANGER_SKILLS = [
  // Active Skills
  {
    id: "boltarrow",
    type: "active",
    name: "Bolt Arrow",
    maxLevel: 5,
    levels: [
      { level: 1, desc: "Deal 120 magic damage." },
      { level: 2, desc: "Deal 150 magic damage." },
      { level: 3, desc: "Deal 180 magic damage." },
      { level: 4, desc: "Deal 210 magic damage + 5% crit." },
      { level: 5, desc: "Deal 250 magic damage + 10% crit." },
    ],
  },
];

var CLASS_SKILLS = {
  gladiator: DEMO_SKILLS,
  templar: DEMO_SKILLS,
  assassin: DEMO_SKILLS,
  ranger: RANGER_SKILLS,
  chanter: DEMO_SKILLS,
  cleric: DEMO_SKILLS,
  sorcerer: DEMO_SKILLS,
  spiritmaster: DEMO_SKILLS,
};
