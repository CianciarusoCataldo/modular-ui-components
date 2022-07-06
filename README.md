# modular-ui-components<img src="https://user-images.githubusercontent.com/47371276/153836684-89e0f709-afd8-46d5-b2b0-41cb38614809.png" align="left" alt="" width="40"/>

![NPM](https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui-components?label=License&style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@cianciarusocataldo/modular-ui?label=Package%20size&style=for-the-badge&logo=npm)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

S

## Summary<img align="left" alt="" src="https://user-images.githubusercontent.com/47371276/153879131-3e4416a4-b3fd-4208-beee-ccf672345bcc.png" width="30"/>

- [Modular-ui-components philosophy](#modular-ui-components-philosophy)
- [Components building process](#components-building-process)
  - [Shared components properties](#shared-components-properties)
  - [Customizable UI](#customizable-ui)
  - [Box components](#box-components)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Tests](#tests)
- [Authors](#authors)
- [License](#license)

<br>

---

## Modular-ui-components philosophy

This library is built upon few (but important) concepts:

- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

The same concepts are also the base of another project I maintain, [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) (check it out, it is also the base of [Modular-ui-components guide page](https://cianciarusocataldo.github.io/modular-ui-components/) !)

<br>

## Components building process

This library use a standardized process to build every component. As result, every component has a shared initial logic, shared CSS styles and shared properties.

<br>

### Shared components properties

Some properties are shared between all components, for a smoother dev experience. In addition, this makes every single component easily re-usable. Let's see them in details:

| Property    | Description                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `className` | custom className applied on main container                                                                                     |
| `dark`      | Enable/disable dark mode                                                                                                       |
| `hide`      | Hide/show component                                                                                                            |
| `id`        | `data-id` parameter (for testing purpose, to easily find the component into the DOM)                                           |
| `shadow`    | Enable/disable shadow behind component                                                                                         |
| `style`     | [Css inline properties](https://www.w3schools.com/html/html_css.asp) applied on main container                                 |
| `unstyled`  | If `true`, no standard modular-ui-components styles will be applied on the components (useful for example, with image buttons) |

With these shared properties is possible to drive every component behaviour and UI with an external state management system ([modular](https://github.com/CianciarusoCataldo/modular) library uses these components internally in conjunction with [redux](https://redux.js.org/))

<br>

### Customizable UI

Modular-ui-components components UI is globally configurable, with CSS variables. By defining some specific custom CSS variables into your app css, you'll change the UI of all components:

| CSS variable                              | Description                                                                                                 | Default value                                 | Related CSS attribute |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------- |
| `--modular-custom-background-dark`        | Components background, when in dark-mode ([dark](#shared-components-properties) is set to true).            | `linear-gradient(to right, #2d3748, #1d232e)` | `background-image`    |
| `--modular-custom-background-color-dark`  | Components background color, when in dark-mode ([dark](#shared-components-properties) is set to true).      | `#1d232e`                                     | `background-color`    |
| `--modular-custom-text-color-dark`        | Components text color, when in dark-mode ([dark](#shared-components-properties) is set to true).            | `white`                                       | `text-color`          |
| `--modular-custom-background-light`       | Components background, when not in dark-mode ([dark](#shared-components-properties) is set to false).       | `linear-gradient(to right, #fff, #eaebec)`    | `background-image`    |
| `--modular-custom-background-color-light` | Components background color, when not in dark-mode ([dark](#shared-components-properties) is set to false). | `#f5f5f5`                                     | `background-color`    |
| `--modular-custom-text-color-light`       | Components text color, when not in dark-mode ([dark](#shared-components-properties) is set to false).       | `#1b1b1b`                                     | `text-color`          |

If you don't set these variables, the default values will be used.

<br>

### Box components

Some components are designed with a specific structure, to better control and customize their look and feel. This type of components is called `Box Component`, for their particular structure. In addition to the [shared properties](#shared-components-properties), as they are part of modular-ui-components, they accept 3 additional (and optional) properties:

- `label`, a string or a component rendered above the final component
- `value`, a specific property that drive the component UI, its type vary depends on component itself (for example, for the CheckBox component, it is the check status, as a `boolean` )
- `defaultValue`, the default value to use when `value` is not given or is `undefined`

<div align="center">
<img width="380px" alt="" src="https://user-images.githubusercontent.com/47371276/153539556-be82468f-b7c1-4753-8fe6-c832c35b7027.png" />
</div>

<br>

---

## Getting started<img src="https://user-images.githubusercontent.com/47371276/154059478-c044b278-5ef4-4036-8113-a18531e35194.svg" align="left" width="30" />

### Installation

If you want to use this library inside your project, just install it:

```

npm i modular-ui-components

```

### Usage

After installation, you can use every `modular-ui-components` component in your app. Run this example to see them in action:

```tsx
import {
  Card,
  Container,
  Link,
} from "@cianciarusocataldo/modular-ui-components";
import { render } from "react-dom";

render(
  <Container animated>
    <Card
      dark={true}
      body={<p>This page is entirely made with modular-ui components !</p>}
      footer={
        <Link to="https://cianciarusocataldo.github.io/modular-ui-components">
          Modular-ui page
        </Link>
      }
    />
  </Container>,
  document.getElementById("root")
);
```

[![Edit modular-ui-components playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modular-ui-playground-gfpbb?fontsize=14&hidenavigation=1&theme=dark&view=preview)

<br>

If you want to customize the UI globally, initialize the dedicated [CSS variables](#customizable-ui):

```css
* {
  --modular-text-color: #f5f5f5;
  --modular-background-color: #1b1b1b;
}
```

---

## Tests<img align="left" alt="" src="https://user-images.githubusercontent.com/47371276/153876497-124aa299-63d9-46bf-a090-6d53a7417f4d.png" width="30"/>

Unit tests for every component are located inside `tests` folder. The test script is executed with pre-defined test command:

    npm run test

<br>

---

## Authors<img align="left" src="https://user-images.githubusercontent.com/47371276/154069439-eece1dc0-a82c-4322-95f4-cf2211226fcf.png" alt="" width="30" />

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License<img align="left" src="https://user-images.githubusercontent.com/47371276/154152300-69b2ebbd-2461-49a7-b1c9-3570f4b51156.png" alt="" width="30" />

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
