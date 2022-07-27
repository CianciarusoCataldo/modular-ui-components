import { useSelector } from "react-redux";
import { isInDarkMode } from "modular-plugins";

import { Label, LabelProps } from "modular-ui-components-preview";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const dark = useSelector(isInDarkMode);
  return <Label {...props} dark={dark} />;
};

export default AppLabel;
