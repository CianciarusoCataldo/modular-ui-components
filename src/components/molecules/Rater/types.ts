import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Rater component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RaterProps = CommonProps &
  Omit<
    BoxComponent<
      number,
      { FULL: JSX.Element | Element; EMPTY: JSX.Element | Element }
    >,
    "icon"
  > &
  ComponentWithCallback<number> & {
    /** If true, vote icons will be showed vertically (instead of default setting, horizontal) */
    vertical?: boolean;

    /** max vote (max number of icons showed) */
    max?: number;

    /** vote icons type */
    type?: "star" | "circle";
  };

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Rater component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type RaterComponent = ModularComponent<RaterProps>;
