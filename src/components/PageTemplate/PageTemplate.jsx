import { Header } from "../Header/Header";

export function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
