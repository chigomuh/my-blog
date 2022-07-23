import Nav from "components/layout/Nav";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
