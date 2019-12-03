/**
 * Wizards Use Vim Code Samples.
 * 004. Exercises.
 */

const vermin = ["rat", "snake", "cockroach", "imp"];

// refactor
// TODO: Add nonsensical comment with instructions
export function isVermin(thing){
  // Refactor! Use array.prototype.includes instead!
  for (const creature of vermin) {
    if (thing.name === creature) return true;
  }
  return false;
}

export function destroyOnlyVermin(things){
  // Refactor! Use array.prototype.filter instead!
  for (const thing of things) {
    if (isVermin(thing)) {
      thing.hitPoints -= 9999;
      console.log(`You destroy ${thing} with furious anger.`);
    }
  }
}
