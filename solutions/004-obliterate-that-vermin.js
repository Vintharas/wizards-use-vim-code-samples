export function obliterateVermin(target) {
  const vermin = ["rat", "snake", "cockroach", "imp"];
  if (vermin.includes(target.name)) {
    target.hitPoints = 0;
    console.log(`${target} is obliterated into dust.`);
  } else {
    console.log("Pop! Nothing happens.");
  }
}
