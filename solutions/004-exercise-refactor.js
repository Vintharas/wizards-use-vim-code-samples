/**
 * Wizards Use Vim Code Samples.
 * 004. Exercises. Solution
 */

const vermin = ["rat", "snake", "cockroach", "imp"];

// refactor
// TODO: nonsensical comment
export function isVermin(thing){
  return vermin.includes(thing.name);
}

export function destroyOnlyVermin(things){
  // Refactor! Use array.prototype.filter instead!
  things.filter(isVermin)
    .forEach(thing => {
      thing.hitPoints -= 9999;
      console.log(`You destroy ${thing} with furious anger.`);
    })
}
