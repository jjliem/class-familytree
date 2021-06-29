const Relative = require('./familyTree')

let testRelative = new Relative('Jane Doe', ["Lin", "Lora"]);

test('has name', () => {
  expect(testRelative.name).toBe('Jane Doe')
})

test('has parents', () => {
  expect(testRelative.parents).toStrictEqual(["Lin", "Lora"]);
  expect(testRelative.parents.length).toBe(2);
})

test('childOf function', () => {
  expect(testRelative.childOf()).toBe('Lin & Lora')
})