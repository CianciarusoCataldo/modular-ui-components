import {
  BuilderComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) List component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ListProps = CommonProps & {
  /** List elements (if unstyled == `false`, every element will include a dot at its start) */
  elements?: BuilderComponent[];
};

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) List component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/List
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ListComponent = ModularComponent<ListProps>;
