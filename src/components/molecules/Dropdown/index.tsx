import "./styles.css";

import React from "react";
import classnames from "classnames";

import { DropdownComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

import Button from "../../atoms/Button";
import Container from "../Container";

/**
 * Show a list of elements in a dropdown menu (by default, with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @since 0.7.0
 * 
 * @param {number} value actual selected element (as index). If not set, default value (0) will be used.
 * @param {{ name: string; icon?: JSX.Element }[]} content Dropdown content elements
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Dropdown usage</caption>
 *import { render } from "react-dom";
 *import { Dropdown } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Dropdown content={[{ name:"Element 0" }]} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Dropdown: DropdownComponent = ({
  content = [],
  onChange,
  value,
  label,
  ...commonProps
}) => {
  const [isVisible, setVisible] = React.useState(false);

  return buildBoxComponent<number>({
    defaultValue: 0,
    value,
    label,
    callBack: (value, setValue) => {
      const selectedItem = content[value] || {
        name: "",
        icon: <div />,
      };

      return {
        name: "modular-dropdown",
        Component: [
          <Button
            unstyled
            onClick={() => {
              setVisible(!isVisible);
            }}
            dark={commonProps.dark}
            className="button"
            id="options-menu"
            key="options-menu"
          >
            <div key="label" className="label">
              <div className="label">{selectedItem.icon}</div>
              <div className="label">{selectedItem.name}</div>
            </div>
            <div
              key="icon"
              className={classnames("icon", {
                rotate: isVisible,
                "rotate-back": !isVisible,
              })}
            >
              <p>
                <i className="arrow-icon"></i>
              </p>
            </div>
          </Button>,
          <Container
            key="options"
            animated
            shadow={commonProps.shadow}
            dark={commonProps.dark}
            hide={!isVisible}
            className="options"
          >
            {content.map((item, index) => (
              <div key={`dropdown_option_${index}`} className="option">
                <Button
                  unstyled
                  id={`dropdown_option_${index}`}
                  onClick={() => {
                    onChange && onChange(index);
                    setValue(index);
                    setVisible(false);
                  }}
                  key={`item_${index}`}
                  className={classnames("regular", {
                    first: index === 0,
                    last: index === content.length - 1,
                  })}
                >
                  <div className="content">
                    {item.icon}
                    <div className="label">{item.name}</div>
                  </div>
                </Button>
              </div>
            ))}
          </Container>,
        ],
        commonProps,
      };
    },
  });
};

export default Dropdown;
