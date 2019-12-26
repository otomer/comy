<h1 align="center">
    <br><br>
	 <a href="https://github.com/otomer/comy"><img src="https://i.ibb.co/0VfJnzX/comy.png" alt="Comy - A sort of glorified dice-throwing" width=200"></a>
     <br><br>
</h1>
<h2 align="center">
Comy - a sort of glorified dice-throwing
</h2>

[![npm](https://img.shields.io/npm/v/comy.svg)](https://www.npmjs.com/package/comy) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/comy.svg)](https://www.npmjs.com/package/comy) [![npm dependents](https://badgen.net/npm/dependents/comy)](https://www.npmjs.com/package/comy?activeTab=dependents) [![Downloads](https://badgen.net/npm/dt/comy)](https://www.npmjs.com/package/comy)

---

## Introduction

Combinatorial algorithms are computational procedures which are designed to help solve combinatorial problems.

## Install

```
$ npm install comy
```

## Usage

```javascript
const comy = require("comy");

// Specific example:
const { priorityGroups } = require("comy");
const arr = [
  { name: "Michael", priority: 1 },
  { name: "Murphy", priority: 2 },
  { name: "Capone", priority: 3 },
  { name: "Donnie", priority: 1 },
  { name: "Koby", priority: 2 },
  { name: "Felis", priority: 3 }
];

//Split the arr into 2 balanced groups by priority
console.log(priorityGroups(arr, 2, "priority"));
/* Possible output:
[
  [ { name: 'Donnie', priority: 1 },
    { name: 'Koby', priority: 2 },
    { name: 'Felis', priority: 3 }
  ],
  [
    { name: 'Michael', priority: 1 },
    { name: 'Murphy', priority: 2 },
    { name: 'Capone', priority: 3 }
  ]
]
*/
```

---

## Methods

```typescript
pickNumbers: (from: any, to: any, size: any) => any[]
pickRandom: (arr: any, n?: number) => any
pickHexColor: () => string
priorityGroups: (arr: any, numOfGroups: any, attr?: string) => any[][]
groups: (arr: any, numOfGroups: any) => any
generateString: () => string
```

---

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/otomer/comy)
