# A first non-trivial node.js project

This demonstration project runs under node.js (not in the browser).

It includes the use of some third-party libraries (e.g. lodash, readline-sync).

## Installation

The following command should be typed at the terminal when in this repo's directory:

```bash
npm install
```

## running

The following command, typed at the terminal when in this repo's directory , will ask node.js to run the commands in the javascript file `src/one.js`

```bash
node src/one.js
```

There are various examples in the `src` directory.  
You can try running each one with node.js using a similarly structured command to the one above.

## making another program

1. Create another file in `src/` directory, e.g. `src/cardRandomiser.js`
2. Copy the import statement from `src/one.js` for any libraries you want to include
3. Run your new file with node.js from the terminal, e.g.: `node src/cardRandomiser.js`

## About the readline-sync library

The readline-sync library is not recommended for production work. However, it is used here because it is easier for beginners to reason about synchronous, linear code than to use Promises or callbacks.
