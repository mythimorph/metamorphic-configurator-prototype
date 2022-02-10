# Project Paths

- **`Prototype/`** - the directory containing the prototype
- `Prototype/`**`.github/workflows/main.yml`** - defines github automation workflow
- `Prototype/`**`media_src/`** - source files for media, eg PSDs for generating images
- `Prototype/`**`public/`** - contains assets that don't need to be compiled
- `Prototype/`**`src/`** - contains assets that need to be compiled or modified, such as typescript code
- `Prototype/`**`.gitignore`** - defines what files we ignore in version control
- `Prototype/`**`package.json`** - configures our dependencies and general project info
- `Prototype/`**`snowpack.config.js`** - configures snowpack, which we use to compile the site
- `Prototype/`**`tsconfig.json`** - configures typescript compilation rules

_NOTE: these directories and files are local only and should not be added to the repo_
- `Prototype/`**`node_modules/`** - is created locally after installing dependencies, contains dependencies for our tools
- `Prototype/`**`_BUILD/`** - is created locally after running `yarn build` (see below).
- `Prototype/`**`yarn.lock`** - is created locally by yarn for managing dependencies installed in node_modules.

# Tools and Dependencies

## Build tools
* **Node.js** - For npm to install Yarn
* **Yarn** - Build and Dependency Manager
    * Installed via `npm install yarn`
    * Docs: https://yarn.build/ 
    * Configured via `package.json`

<br />

## Build Dependencies

These are defined in `/package.json`'s `devDependencies`
* **typescript** - Manages our javascript source code
* **snowpack** - Handles static page building and local testing

## Web Dependencies

Stored in `/public/assets/vendor`

* **UIkit** - basic css/javascript UI framework
    * Docs: https://getuikit.com/docs/introduction


# Command Quick Reference

* `yarn install` - install the dependencies
<br />

* `yarn start` - locally hosts
<br />

* `yarn clean` - cleans up `_BUILD` directory if it exists
<br />

* `yarn build` - outputs to `_BUILD` directory
