import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { CodeBox } from "modular-ui-components-preview";
import { ComponentPage } from "components/ComponentPage";

const CodeBoxPage = () => (
  <ComponentPage
    name="CodeBox"
    translations
    render={(t, componentLabel) => {
      const terminalText = t("props_environment", { context: "default" });

      return (
        <Demo
          label={componentLabel}
          props={{
            value: StringProp("npm i @cianciarusocataldo/modular-ui"),
            label: StringProp("label"),
            enhanced: BooleanProp(true),
            environment: SelectProp({
              [terminalText]: "terminal",
              Javascript: "javascript",
              Python: "python",
            }),
            ...DEMO_COMMON_PROPS,
          }}
          rows={[
            ["value", "enhanced", "environment"],
            ["className", "dark", "shadow"],
            ["hide", "unstyled", "label"],
          ]}
        >
          {(props: any) => {
            return <CodeBox {...props} />;
          }}
        </Demo>
      );
    }}
  />
);

export default CodeBoxPage;
