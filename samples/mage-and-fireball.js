const Damage = {
  d4,
  d6,
  d12,
  d20
};

const SpellType = {
  Fire: "Fire",
  Water: "Water",
  Earth: "Earth",
  Wind: "Wind"
};

export const fireballSpell = {
  manaCost: 10,
  name: "Fireball",
  type: SpellType.Fire,
  description:
    "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.",
  damage: Damage.d20,
  modifier: 8
};

export class Mage {
  constructor(name, mana) {
    this.name = name;
    this.mana = mana;
  }
  cast(spell) {
    if (this.mana >= spell.mana) {
    } else {
      console.log(
        `${this.name} doesn't have enough mana to perform ${
          spell.name
        }. Life sucks some times`
      );
    }
  }
}
