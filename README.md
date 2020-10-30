<div align="center">
  <a href="https://bundlephobia.com/">
    <img src="logo.png" width="278" height="168" alt="similar-npm-packages" />
  </a>
</div>

<div align="center">
  Similar packages suggestions for the NPM ecosystem.<br />
  <a href="https://bundlephobia.com/">Bundlephobia</a> team project
</div>

## How to add a package or category

The best way to help us improve our registry is to create a Pull Request updating `src/similar-npm-packages.ts` file.

Qualitative over quantitative. Before contributing you should know that we keep suggestions limited to 5 packages in all categories. If you're going to add a package to a "crowded" category, be ready to explain your suggestion. Qualitative over quantitative.

Read the [contributing guide](https://github.com/pastelsky/similar-npm-packages/blob/main/CONTRIBUTING.md) for more details.

## Install

```
npm install similar-npm-packages --save
```

## Usage

```js
import { categories } from "similar-npm-packages";
console.log(categories.cookie);
```
