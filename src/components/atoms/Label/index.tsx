import "./styles.css";

import { LabelComponent } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A text wrapper, with many options to customize its content
 *
 * @since 3.0.0
 *
 * @param {string | string[]} value text content to show (string arrays are accepted)
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Label usage</caption>
 * import { render } from "react-dom";
 * import { Label } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Label value="example text" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Label: LabelComponent = ({ value, ...commonProps }) => {
  return buildComponent({
    name: "modular-label",
    Component: value,
    wrapper: "p",
    commonProps,
  });
};

export default Label;
