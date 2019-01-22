import test from "ava";
import { obliterateVermin } from "../samples/004-obliterate-that-vermin";

function Rat() {
  return { name: "rat", hitPoints: 10 };
}
function Human() {
  return { name: "human", hitPoints: 200 };
}

test("that Rat is obliterated", t => {
  const rat = Rat();
  obliterateVermin(rat);
  t.is(rat.hitPoints, 0);
});

test("that Human is not obliterated", t => {
  const human = Human();
  obliterateVermin(human);
  t.not(human.hitPoints, 0);
});
