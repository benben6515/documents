# Documents

> ! This is a document for who taking over my projects and write some principles for myself. !
> Maybe I just put in codes randomly and you saw it, no matter how, welcome as well.

Hi, there!

I follow most style guides beneath and I suggest overview these guides as well if you are taking over my project or stuff.

Some of them are interesting blog posts with use cases, no just boring rules line by line.

Again, these all my personal chosen, if you have better solution then good for you and go for it.
Don't tell me you just want dirty codes(Do you even hear brainf\*\*k before?).

Still, I study and research a lot so that I found these guides are useful for me.

Then, shall we began?

## Shortcut

- All Items
  - [Style](#style)
  - [IDE](#ide)
  - [Comment](#comment)
  - [Naming](#naming)
  - [Preference](#preference)
  - [Courses](#courses)
  - [License](./LICENSE)

## Style

- !(Highly recommend) **Technical Writing**: [Technical Writing for Developers | CSS-Tricks - CSS-Tricks](https://css-tricks.com/technical-writing-for-developers/#top-of-site)
- Writing
  - Markdown style: [Markdown Lint](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
  - Chinese Writing style: [中文排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)
- Coding
  - JavaScript style: [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://standardjs.com/) (check the rules section)

[⬆️ Go to Top](#shortcut)

## IDE

- Here are my recommendation, you can use your preference as well.
- Front-End IDE: [**VScode**](https://code.visualstudio.com/download)
- VScode plugin:
  - `TODO tree`
  - `comment light`
  - `GitLens`
  - `Git Graph`
  - `Git History`
  - `Gremlins tracker for Visual Studio Code`
  - `DotENV`
  - `EditorConfig for Visual Studio Code`
  - `Vim` (Options)

[⬆️ Go to Top](#shortcut)

## Comment

- Describe
  - `TODO:` the part of code to do
  - `FIXME:` the part of code to fix
  - `REF:` reference document, resource

<details>
  <summary>
  example
  </summary>

  ```typescript
  // REF: https://www.typescriptlang.org/
  class item {
    constructor (private name: string) {}
    getItemName: () => this.name
    // FIXME: fix type
    setItemName: (newName: any) => this.name = newName
    // TODO: add new feature
  }
  ```

</details>

[⬆️ Go to Top](#shortcut)

## Naming

- JavaScript
  - Conventions: <https://www.robinwieruch.de/javascript-naming-conventions/>
  - Google docs: <https://google.github.io/styleguide/jsguide.html#naming>
- CSS
  - BEM(`block__element--modify`)
- Component
  - Vue Official: <https://vuejs.org/style-guide/> (check section B)

[⬆️ Go to Top](#shortcut)

## Preference

> Just preference, depend on projects' needs as well.

- React

  - prefer **React hook** + function component over than class component + function component.
  - often use with: Next, Redux, Formik
  - often css with: Tailwind, Styled-component, Emotions

- Vue

  - prefer **Composition Api** rather than Options Api
  - often use with: Nuxt, Vuex(Pinia), VeeValidate
  - often css with: Tailwind, UnoCSS, SCSS

- CSS

  - prefer **Atomic CSS** like: Tailwind, Windi CSS, UnoCSS ...
  - SCSS/SASS is good as well, but you know naming CSS is a big mess problem.

- Utils
  - often use: axios, lodash
  - package manage: prefer **pnpm > yarn > npm**
  - bundle tools: prefer **vite > parcel > webpack**
  - TypeScript maybe, depend on development timing.
  - Testing maybe, depend on development timing but prefer Vitest.
  - A component is about 300 ~ 500 lines, rely on CSS or some things like that.
  - Service(call BackEnd Api) separate to files in a same folder to manage them.

[⬆️ Go to Top](#shortcut)

## Courses

For some people curiously what I learning from:

- [Front-End resources(in Chinese)](https://hackmd.io/@benben6515/fe-resource)

[⬆️ Go to Top](#shortcut)

---

If you have any question or suggestion, you can find contact information at **[benben.me](https://benben.me)** website.

> Just feel free to contact me, I will reply as soon as possible!

Happy Coding,

## License

Copyright (c) 2022 - present @Benben

[MIT License](./LICENSE)
