import { test } from "uvu";
import * as assert from "uvu/assert";
import { categories } from "../src";

test("are properly sorted", () => {
  const keys = Object.keys(categories);
  const sortedKeys = Object.keys(categories).sort();

  assert.is(keys.join("\n"), sortedKeys.join("\n"));
});

test("have valid category keys", () => {
  const keys = Object.keys(categories);

  assert.ok(keys.join("").match(/^[a-z0-9-]+$/)); // lowercase letters, numbers and dashed only
});

test("have valid number of suggestions", () => {
  const MAX_SIZE = 7;

  for (const key in categories) {
    if (categories[key].similar.length > MAX_SIZE) throw new Error(key);
  }
});

test.run();
