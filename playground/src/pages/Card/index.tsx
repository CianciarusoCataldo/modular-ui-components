import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { Card } from "modular-ui-components-preview";
import { ComponentPage } from "app/components/ComponentPage";

const CardPage = () => (
  <ComponentPage
    name="Card"
    render={(_, componentLabel) => (
      <Demo
        className="m-0 p-0"
        label={componentLabel}
        props={{
          label: StringProp("label"),
          header: StringProp("header"),
          body: StringProp("body"),
          footer: StringProp("footer"),
          ...DEMO_COMMON_PROPS,
        }}
        rows={[
          ["label", "header"],
          ["body", "footer"],
          ["className", "shadow", "dark", "hide", "unstyled"],
        ]}
        startColor="#999"
      >
        {(props: any) => (
          <div className="flex flex-col items-center">
            <Card {...props} />
          </div>
        )}
      </Demo>
    )}
  />
);

export default CardPage;
