import Character from "../character";
import Zombie from "../zombie";

test("instance of the class Character", () => {
  const zombie = new Zombie("Arkadiy", "Zombie");
  expect(zombie).toEqual({
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10,
    type: "Zombie", 
    name: "Arkadiy",
  });
});

test("error health", () => {
  const zombie = new Character("Arkadiy", "Zombie");
  zombie.health = 0;
  expect(() => zombie.levelUp()).toThrow("Нельзя повысить левел умершего!");
});

test("throws on name", () => {
  expect(() => new Character("A", "Zombie")).toThrow("Имя должно содержать от 2 до 10 символов!");
  expect(() => new Character("Appolinariy", "Zombie")).toThrow("Имя должно содержать от 2 до 10 символов!");
});

test("throws on type", () => {
  expect(() => new Character("Arkadiy", "Ork")).toThrow("Неверный тип!");
});

test("damage in case health = 100", () => {
  const zombie = new Zombie("Arkadiy", "Zombie");
  zombie.health = 100;
  zombie.damage(25);
  const expectedHealth = 77.5;
  expect(zombie.health).toEqual(expectedHealth);
});

test("damage in case health = 0", () => {
  expect(() => {
  const zombie = new Character("Arkadiy", "Zombie");
  zombie.health = -1;
  zombie.damage(25);
  }).toThrow("Нельзя понизить здоровье умершего");
});