const logger = require('./logger'); // Ensure you have a logger utility

class RuleEngine {
  constructor() {
    this.rules = {};
  }

  addRule(name, condition) {
    this.rules[name] = condition;
  }

  evaluate(ruleName, character, virtueFlaw) {
    if (!this.rules[ruleName]) {
      logger.warn(`Rule '${ruleName}' not found`);
      return true; // Default to true if rule not found
    }
    try {
      return this.rules[ruleName](character, virtueFlaw);
    } catch (error) {
      logger.error(`Error evaluating rule '${ruleName}':`, error);
      return false; // Default to false on error
    }
  }

  isVirtueFlawEligible(character, virtueFlaw) {
    const applicableRules = [
      virtueFlaw.type,
      `${virtueFlaw.size}${virtueFlaw.type}`,
      ...(virtueFlaw.prerequisites || []),
      ...(virtueFlaw.incompatibilities || []).map(inc => `not${inc}`)
    ];

    return applicableRules.every(rule => this.evaluate(rule, character, virtueFlaw));
  }
}

// Export a singleton instance of the RuleEngine
module.exports = new RuleEngine();