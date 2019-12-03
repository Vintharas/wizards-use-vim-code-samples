import test from "ava";
import { isVermin, destroyOnlyVermin } from "../samples/004-exercise-refactor";

function toString() { return this.name; }
function Rat() {
  return { name: "rat", hitPoints: 10, toString };
}
function Human() {
  return { name: "human", hitPoints: 200, toString};
}
function Imp() {
  return { name: "imp", hitPoints: 50, toString };
}

test("that Rat is vermin", t => {
  const rat = Rat();

  t.true(isVermin(rat));
});

test("that Human is not vermin", t => {
  const human = Human();

  t.false(isVermin(human));
});

test("that destroyOnlyVermin damages vermin", t => {
  const rat = Rat();

  destroyOnlyVermin([rat]);

  t.true(rat.hitPoints < 0);
});

test("that destroyOnlyVermin doesn't damage humans", t => {
  const human = Human();

  destroyOnlyVermin([human]);

  t.true(human.hitPoints === 200);
});

test("that in a group of humans and vermin destroyOnlyVermin only damages vermin", t => {
  const human = Human();
  const rat = Rat();
  const imp = Imp();

  destroyOnlyVermin([human, rat, imp]);

  t.true(rat.hitPoints < 0);
  t.true(human.hitPoints === 200);
  t.true(imp.hitPoints < 0);
});
