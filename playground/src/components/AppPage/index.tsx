import classNames from "classnames";
import { AllowedComponent, Container } from "modular-ui-components";

const AppPage = ({
  className,
  children,
}: {
  className?: string;
  children: AllowedComponent | AllowedComponent[];
}) => {
  return (
    <Container animated unstyled className={classNames("m-2", className)}>
      {children}
    </Container>
  );
};

export default AppPage;
