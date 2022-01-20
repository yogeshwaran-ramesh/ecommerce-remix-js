import { Links, LinksFunction, LiveReload, Outlet } from "remix";
import LayoutWrapper from "./components/LayoutWrapper";
import globalStylesUrl from "./styles/global.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix Js!</title>
        <Links />
      </head>
      <body>
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
