import Magician from "../magician";

test("instance of the class Magician", () => {
  const magician = new Magician("Andrey");
  expect(magician).toEqual({
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40, 
    type: "Magician", 
    name: "Andrey",
  });
});

test("levelUp for class", () => {
  const magician = new Magician("Andrey");
  magician.levelUp();
  expect(magician).toEqual({
    health: 100, 
    level: 2, 
    attack: 12, 
    defence: 48, 
    type: "Magician", 
    name: "Andrey",
  });
});