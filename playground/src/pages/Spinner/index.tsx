import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import ReactImage from "./react.svg";
import ReduxImage from "./redux.svg";

import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { Spinner } from "modular-ui-components-preview";
import { ComponentPage } from "app/components/ComponentPage";

const SpinnerPage = () => (
  <ComponentPage
    name="Spinner"
    translations
    render={(t, componentLabel) => {
      const notSetLabel = t("props_value_notSet");
      const customValueLabel = t("props_value_custom");
      const customStatesLabel = t("props_statuses_custom");

      return (
        <Demo
          label={componentLabel}
          props={{
            value: SelectProp({
              [notSetLabel]: undefined,
              success: "success",
              error: "error",
              loading: "loading",
            }),
            [customStatesLabel]: BooleanProp(false),
            [customValueLabel]: SelectProp({
              [notSetLabel]: undefined,
              react: "react",
              redux: "redux",
            }),
            ...DEMO_COMMON_PROPS,
            shadow: BooleanProp(false),
          }}
        >
          {(props: any) => {
            let componentProps = { ...props };

            delete componentProps[customStatesLabel];
            delete componentProps[customValueLabel];

            if (props[customStatesLabel]) {
              componentProps.statuses = {
                react: (
                  <div style={{ width: "8rem", height: "8rem" }}>
                    <img src={ReactImage} width="125px" height="125px" alt="" />
                  </div>
                ),
                redux: (
                  <div style={{ width: "8rem", height: "8rem" }}>
                    <img src={ReduxImage} alt="" width="125px" height="125px" />
                  </div>
                ),
              };
              componentProps.value = props[customValueLabel];
            } else {
              componentProps.statuses = undefined;
              componentProps.value = props.value;
            }

            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Spinner
                  {...componentProps}
                  className={
                    props.className.length > 0 ? props.className : "w-32"
                  }
                />
              </div>
            );
          }}
        </Demo>
      );
    }}
  />
);

export default SpinnerPage;
