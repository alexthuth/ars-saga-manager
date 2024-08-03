'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const flaws = [
      {
        type: "Flaw",
        size: "Major",
        category: "Story",
        realm: "None",
        name: "Mistaken Identity",
        description: "Someone, who looks exactly like you and whom you and your companions will most likely never meet, lives near you, and is responsible for an ongoing variety of violent, illegal, obscene, or embarrassing acts. You often have to explain who you are, and sometimes have to deal with the consequences of the other person's acts.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Major",
        category: "Story",
        realm: "None",
        name: "Monastic Vows",
        description: "You have taken vows of poverty, chastity, and obedience to a religious superior. This covers the vows taken by mendicant friars, as well as those taken by monks and nuns strictly speaking.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Personality",
        realm: "None",
        name: "Stubborn",
        description: "You are stubborn and inflexible. You are easily provoked into violence.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Personality",
        realm: "None",
        name: "Transvestite",
        description: "You dress and act as a member of the opposite gender, and expect to be treated as such. Note that this is not a delusion — you know what your physical gender is, but choose to live as the other gender. In Christian and Muslim lands you are regarded as a freak, and are often shunned, laughed at, or even chased out of town. However, these problems will only arise if others realize you are not a member of the gender you are living as. Because of your long experience living as a member of your chosen gender, attempting to live as a member of your physical gender will result in a –3 to all social skill rolls for as long as the character attempts to live as this gender.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Story",
        realm: "None",
        name: "True Love",
        description: "You have found the one person meant for you in all of creation, and the bond between the two of you cannot be sundered. Whenever you are suffering, in danger, or dejected, the thought of your love will give you strength to persevere. In dire need, he may even come to rescue you. More often, he will be in trouble and need rescuing. If any enchantment keeps you from your true love's side, the power of your devotion can probably break it. Your love is higher than mortal magic, and no magic can make you hate your love, or make you truly betray him. Your True Love must be a non-player character. This Story Hook may be renamed True Friend to cover characters with whom you are very closely linked, but not in a romantic way. If the True Love is significantly weaker than the player character, and not able to provide useful assistance in most cases, this is a Major Flaw. If the True Love is competent, equal to or better than the player character, then this is only a Minor Flaw.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor", "Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Twilight Prone",
        description: "You either enjoy or cannot help running excessive amounts of magic through you when you cast spells. You must roll to resist Twilight on a single magical botch, rather than on a double botch like most magi.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Unimaginative Learner",
        description: "You have trouble figuring things out for yourself. Subtract three from rolls when you study from raw vis.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Unpredictable Magic",
        description: "You always roll a stress die when using magic, even if completely relaxed. If you choose to cast a spontaneous spell without expending fatigue, you must still roll to check for a botch, although the roll does not add to your Casting Total. Even if you have mastered a spell, you must always roll at least one botch die.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Unstructured Caster",
        description: "You have never quite mastered the intricacies of spellcasting, and are unable to perform formulaic magic without extreme effort. You cast all formulaic spells as though they were ritual spells (including the need for vis), and you may not learn ritual spells at all. You cast spontaneous spells normally.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Story",
        realm: "None",
        name: "Visions",
        description: "You often see images related to emotionally or magically laden events. A vision might be of the past, a possible future, or a distant occurrence, and is often symbolic or confusing. Visions usually come to you at quiet times or in places connected with a powerful emotional or magical event, such as the site of a patricide or diabolic sacrifice. Your visions may warn you of dangers to come, or involve you in matters you would otherwise avoid. The visions come purely at the storyguide's discretion, and reveal only what he wants to reveal.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Personality",
        realm: "None",
        name: "Vow",
        description: "You have sworn to do something difficult, and breaking your vow is a serious matter. Example vows include never raising a weapon, never speaking, or living in poverty. If you do fail to uphold your vow, you must perform some kind of atonement, whether it be religious penance or coming to terms with your failure in some other way. Furthermore, your Confidence Score drops by one until you atone. Depending on your vow, some people may respect your dedication, giving you a good Reputation of level 1 among those people.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Warped Magic",
        description: "Your magic is accompanied by some unpleasant side effect that always manifests itself the same way, but with increasing intensity according to the level of the spell. Examples include nearby items become hot or nearby plant matter becomes shriveled and wilted. This effect may cause trouble from time to time, but is usually just annoying.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Waster of Vis",
        description: "When you use raw vis you waste one quarter (rounded up) of the pawns you apply. The lost raw vis does not apply to the magical effect being enacted but does count toward the total number of botch dice you must roll if you roll a zero. You must use a third again as many pawns as usual when casting a ritual spell, and if you want to improve an Art score by studying raw vis, you must use a third again as many pawns as usual. This Flaw applies to all occasions on which you use vis, including certamen, laboratory work, and boosting penetration. Wasted pawns count toward the maximum number you can use at one time.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "General",
        realm: "None",
        name: "Weak Characteristics",
        description: "You have three fewer points to spend buying Characteristics than most characters. You may take this Flaw twice, leaving you with only one point to spend.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: 2,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Minor",
        category: "Personality",
        realm: "None",
        name: "Wrathful",
        description: "You are prone to anger over the smallest issues, and your rage when you are thwarted in something major is terrible to behold.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor", "Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Flaw",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Weak Magic Resistance",
        description: "Any form of magic resistance you generate is much weaker under relatively common circumstances which are fairly easy for an opponent to utilize, such as when you are wet or facing away from the caster of the spell. If the conditions are met, do not subtract the level of the effect from the casting total before calculating Penetration. You would be well advised to keep your weakness from being discovered by too many potential enemies.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Major"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('reference_virtues_flaws', flaws, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reference_virtues_flaws', null, {});
  }
};