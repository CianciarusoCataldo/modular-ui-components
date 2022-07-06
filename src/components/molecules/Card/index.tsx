import "./styles.css";

import React from "react";

import { CardComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

import Divider from "../../atoms/Divider";

/**
 * A Card component. Its UI depends on given parameters (header, body and footer)
 *
 * @since 0.3.0
 *
 * @param {JSX.Element | Element} icon A custom icon showed before the Card header
 * @param {JSX.Element | Element | string} header Card header content
 * @param {JSX.Element | Element | string} body Card body content
 * @param {JSX.Element | Element | string} footer Card footer content
 * @param {JSX.Element | Element | string} label Component label, showed at the top
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Card usage</caption>
 * import { render } from "react-dom";
 * import { Card } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Card header="Example header" body="Example body" footer="Example footer" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Card: CardComponent = ({
  icon,
  header,
  body,
  footer,
  children,
  className,
  label,
  ...commonProps
}) => {
  return buildBoxComponent({
    callBack: () => ({
      name: "modular-card",
      Component: [
        header && (
          <div key="modular_card_header">
            <div className="container-header">
              {icon}
              <div className="header">{header}</div>
            </div>
            <Divider />
          </div>
        ),
        <div className="body" key="modular_card_body">
          {body}
        </div>,
        children,
        footer && (
          <div key="modular_card_footer">
            <Divider />
            <div className="footer">{footer}</div>
          </div>
        ),
      ],
      commonProps: {
        ...commonProps,
      },
    }),
    defaultValue: "",
    label,
  });
};

export default Card;
