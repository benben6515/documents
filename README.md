# Taking over

> ! This is a document for who taking over my projects or codes mostly.
> Maybe I just put in codes randomly and you saw it, no matter how, welcome as well.

Hi, there!

I follow most style guides beneath and I suggest overview these guides as well if you are taking over my project or stuff.

Some of them are interesting blog posts with use cases, no just boring rules line by line.

Again, these all my personal chosen, if you have better solution then good for you and go for it.
Don't tell me you just want dirty codes(Do you even hear brainf\*\*k before?).

Still, I study and research a lot so that I found these guides are useful for me.

Then, shall we began?

## Shortcut

- all
  - [Taking over](#taking-over)
  - [Shortcut](#shortcut)
  - [Style](#style)
  - [IDE](#ide)
  - [Comment](#comment)
  - [Naming](#naming)
  - [Preference](#preference)

## Style

- !(Highly recommend) **Technical Writing**: [Technical Writing for Developers | CSS-Tricks - CSS-Tricks](https://css-tricks.com/technical-writing-for-developers/#top-of-site)
- Writing
  - Markdown style: [Markdown Lint](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
  - Chinese Writing style: [中文排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)
- Coding
  - JavaScript style: [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://standardjs.com/) (check the rules section)

[⬆️ Go to Top](#shortcut)

## IDE

- Front-End IDE: VScode
- VScode plugin
  - `comment light`
  - `TODO tree`

[⬆️ Go to Top](#shortcut)

## Comment

- Describe
  - `TODO:` the part of code to do
  - `FIXME:` the part of code to fix
  - `REF:` reference document, resource

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
  - often use with: Nust, Vuex(Pinia), VeeValidate
  - often css with: Tailwind, UnoCSS, SCSS

- CSS

  - prefer **Atomic CSS** like: Tailwind, Windi, UnoCSS ...
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

---

If you have any question or suggestion, you can find contact information at **benben.me** website.

> Just feel free to contact me, I will reply as soon as possible!

Happy Coding,
Benben