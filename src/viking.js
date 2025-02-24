// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}



// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomVikingNum = Math.random() * this.vikingArmy.length;
    let roundedVikingNum = Math.floor(randomVikingNum);
    let randomViking = this.vikingArmy[roundedVikingNum];

    let randomSaxonNum = Math.random() * this.saxonArmy.length;
    let roundedSaxonNum = Math.floor(randomSaxonNum);
    let randomSaxon = this.saxonArmy[roundedSaxonNum];

    let vikingStrength = randomViking.strength;
    let damageStatus = randomSaxon.receiveDamage(vikingStrength);

    let livingSaxons = [];
    for (let saxon of this.saxonArmy) {
      if (saxon.health > 0) {
        livingSaxons.push(saxon);
      }
    }
    
    this.saxonArmy = livingSaxons;

    return damageStatus;
  }
  saxonAttack() {
    let randomVikingNum = Math.random() * this.vikingArmy.length;
    let roundedVikingNum = Math.floor(randomVikingNum);
    let randomViking = this.vikingArmy[roundedVikingNum];

    let randomSaxonNum = Math.random() * this.saxonArmy.length;
    let roundedSaxonNum = Math.floor(randomSaxonNum);
    let randomSaxon = this.saxonArmy[roundedSaxonNum];

    let saxonStrength = randomSaxon.strength;
    let damageStatus = randomViking.receiveDamage(saxonStrength);

    let livingVikings = [];
    for (let viking of this.vikingArmy) {
      if (viking.health > 0) {
        livingVikings.push(viking);
      }
    }
    
    this.vikingArmy = livingVikings;

    return damageStatus;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
