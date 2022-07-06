import "./styles.css";

import { LinkComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A re-defined `<a>` component, designed to be better used with links
 *
 * @since 0.2.0
 *
 * @param {string} to Link url
 * @param {boolean} newTab if true, the link will be opened in a new tab
 * @param {string} children Link text to click
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Link usage</caption>
 * import { render } from "react-dom";
 * import { Link } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Link to="https://github.com/CianciarusoCataldo/modular-ui" newTab />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Link: LinkComponent = ({ to, children, newTab, ...commonProps }) =>
  buildComponent({
    name: "modular-link",
    Component: children,
    commonProps,
    additionalProps: {
      href: to,
      target: newTab ? "_blank" : undefined,
    },
    wrapper: "a",
  });

export default Link;
