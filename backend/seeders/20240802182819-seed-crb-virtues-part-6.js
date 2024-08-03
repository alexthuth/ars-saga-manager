'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const virtues = [
      {
        type: "Virtue",
        size: "Minor",
        category: "General",
        realm: "None",
        name: "Long-Winded",
        description: "You can last longer when exerting yourself than most, and gain +3 on all your Fatigue rolls. This bonus does not apply to casting spells.",
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
        type: "Virtue",
        size: "Minor",
        category: "General",
        realm: "None",
        name: "Luck",
        description: "You perform well in situations where luck is more of a factor than skill or talent. You get +1 to +3 (storyguide's discretion) on rolls in such situations, depending upon how much luck is involved. You do well at games of chance, but may be labeled a cheater if you play them too often.",
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
        type: "Virtue",
        size: "Minor",
        category: "Supernatural",
        realm: "None",
        name: "Magic Sensitivity",
        description: "You are often able to identify a place or object as magical. However, your sensitivity makes you more susceptible to magical effects: subtract your Magic Sensitivity score from all magic resistance rolls you make. Choosing this Virtue confers the Ability Magic Sensitivity 1 (page 66).",
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
        type: "Virtue",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Magical Memory",
        description: "Your memory has been developed to remember magical rather than mundane things. You need not keep laboratory texts (see page 101) of your creations to get the benefit of a Lab Text when reproducing them. If you have created an effect by following another magus's lab text once, you may get the same benefit in future without needing to have the text available.",
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
        type: "Virtue",
        size: "Major",
        category: "Social Status",
        realm: "None",
        name: "Magister in Artibus",
        description: "You have incepted Master of Arts in one of the universities of Europe (Paris, Bologna, Oxford, Cambridge, Montpellier, Arezzo or Salamanca) and completed your two years' regency of compulsory teaching. You are entitled to be addressed as Magister, are subject only to canon law, and may teach anywhere in Europe. You are at least (25 – Int) years old, and must have scores of at least 5 in Latin and Artes Liberales. You have, however, spent eight years in a university, and gain an additional 30 experience points in each of those years, for a total of 240 additional experience points over and above your allowance based on age. You may buy Academic Abilities during character generation, and must spend your additional experience points on Academic Abilities or Teaching. You must spend two seasons teaching to maintain yourself and your reputation as a dependable instructor. These two seasons are spread between September and June, so you are genuinely free in the summer. If you take the Poor flaw, you are still genuinely free in the summer. If you take the Wealthy virtue, you can maintain your reputation with a single season's teaching. This Virtue is only available to male characters, and is compatible with the Hermetic Magus, Mendicant Friar, and Priest Virtues.",
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
        type: "Virtue",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Major Magical Focus",
        description: "Your magic is much more potent in a fairly limited area, such as weather, necromancy, birds, or emotions. This area should be smaller than a single Art, but may be spread over several Arts — necromancy, for example, covers both Corpus and Mentem effects. You cannot be focused on laboratory activities, although a focus does apply to laboratory activities. When you cast a spell or generate a Lab Total within your focus, add the lowest applicable Art score twice. If a spell has requisites, the lowest applicable score may be one of the requisites, rather than one of the primary Arts. Thus, if a magus with a focus on birds was casting a spell to turn a bird into pure flame, MuAn (Ig), with Muto 14, An 18, and Ig 10, his final total would be 34 + other modifiers: 14 from Muto, and 20 from adding Ignem twice. If he was casting a spell to turn a bird into another sort of bird, MuAn with no requisites, his total would be 46 + other modifiers, 18 from Animal and 28 from adding Muto twice. A character can have only one Magical Focus, either major or minor, regardless of the source of the focus.",
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
        type: "Virtue",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Mastered Spells",
        description: "You have fifty experience points to spend on mastering spells that you know. (See page 86 for rules on mastering spells.) You may take this Virtue if you also have Flawless Magic, to give you more experience points to spend on mastering your spells. You may take this Virtue multiple times.",
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
        type: "Virtue",
        size: "Minor",
        category: "Social Status",
        realm: "None",
        name: "Mendicant Friar",
        description: "You are a follower of St. Francis or St. Dominic, going among the rich and poor, spreading the word of God and giving comfort to the sick, homeless, hungry, or dying. You are sworn to serve the Church for the rest of your life, but your wandering habits are considered suspect by the local bishop and parish clergy, and you lack political influence within the organization. Like all clerics, however, you are only subject to canon law. Due to your training, you may take Academic Abilities during character generation. If you wish, you may be an ordained priest and may officiate at marriages, baptisms, funerals, and the Mass, though the parish clergy may resent your interfering on their \"turf.\" You do not need to take the Priest Virtue in addition to this one if you do want to be ordained. You have sworn vows of poverty, chastity, and obedience, which together constitute a Major Story Flaw (Monastic Vows, see page 56) which you must take if you take this Virtue (this Flaw balances other Virtues as normal). You may not take the Wealthy Virtue or Poor Flaw. This Virtue is only available to male characters, and is compatible with the Magister in Artibus Major Virtue.",
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
        type: "Virtue",
        size: "Minor",
        category: "Social Status",
        realm: "None",
        name: "Mercenary Captain",
        description: "You lead a small company of mercenaries (5 to 10), for hire to the highest bidder. You are much like a knight-errant, only without the prestige. During your travels you have gained great wealth — and squandered it — several times over. You may take Martial Abilities during character generation. If you are Poor, you lead only a couple of other mercenaries, but you and they may have armor and weapons available to normal characters. If you are Wealthy you lead about twenty mercenaries, and can delegate some of the work to sergeants. This Virtue is available to male and female characters.",
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
        type: "Virtue",
        size: "Free",
        category: "Social Status",
        realm: "None",
        name: "Merchant",
        description: "You live from the buying and selling of goods. You may be a peddler, if you are relatively poor, a shopkeeper, or a traveling merchant. The Wealthy Major Virtue and Poor Major Flaw affect you normally.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Free"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "Virtue",
        size: "Major",
        category: "Hermetic",
        realm: "None",
        name: "Mercurian Magic",
        description: "Your magical lineage and traditions are from the Roman priests of Mercury, which predate the Order of Hermes, making you especially skilled with Ritual Magic and magic used in conjunction with others. In addition to your standard spell allocation, you also know Wizard's Communion (page 160) at a level equal to the highest level of Ritual spell that you know, and should you invent or learn a Ritual spell of higher level, you automatically invent a Wizard's Communion spell of the same level, without needing to spend extra time. When casting a spell using Wizard's Communion, you may add your Mastery score (page 86) in the spell being cast and your Mastery score in Wizard's Communion to the effective level of the Wizard's Communion. Finally, any Ritual spells which you cast have only half the usual vis requirement. If cast as part of a Wizard's Communion, all the participants need to have this Virtue to gain this benefit. Your concentration in Ritual magic has a downside, however — you may only cast Spontaneous magic using the rules for Ceremonial Casting (page 83).",
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
        type: "Virtue",
        size: "Minor",
        category: "Hermetic",
        realm: "None",
        name: "Method Caster",
        description: "You are excellent at formulaic spells, as you have perfected a consistent and precise method for casting them. You gain a +3 bonus to any formulaic spell you cast. However, if you vary at all from your precise method (by altering your gestures or voicing), you do not get this bonus.",
        source: "Core Rulebook",
        allowed_sizes: JSON.stringify(["Minor"]),
        max_selections: null,
        prerequisites: null,
        incompatibilities: null,
        effects: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('reference_virtues_flaws', virtues, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reference_virtues_flaws', null, {});
  }
};