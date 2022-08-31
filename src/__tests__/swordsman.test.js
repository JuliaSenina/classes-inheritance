import Swordsman from "../swordsman";

test("instance of the class Swordsman", () => {
  const swordsman = new Swordsman("Anton");
  expect(swordsman).toEqual({
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10, 
    type: "Swordsman", 
    name: "Anton",
  });
});

test("levelUp for class", () => {
  const swordsman = new Swordsman("Anton");
  swordsman.levelUp();
  expect(swordsman).toEqual({
    health: 100, 
    level: 2, 
    attack: 48, 
    defence: 12, 
    type: "Swordsman", 
    name: "Anton",
  });
});