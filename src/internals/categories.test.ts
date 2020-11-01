import { categories } from "..";
const keys = Object.keys(categories);

it("is properly sorted", () => {
  const sortedKeys = Object.keys(categories).sort();

  expect(keys).toStrictEqual(sortedKeys);
});

it("has valid category keys", () => {
  for (const key in categories) {
    expect(key).toMatch(/^[a-z0-9-]+$/); // lowercase letters, numbers and dashed only
  }
});

it("has valid number of suggestions", () => {
  const MAX_SIZE = 7;

  for (const key in categories) {
    expect(categories[key].similar.length).toBeLessThanOrEqual(MAX_SIZE);
  }
});
