import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

import { Label, LabelProps } from "modular-ui-components-preview";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const Component = driveWithDarkMode(Label);
  return <Component {...props} />;
};

export default AppLabel;
