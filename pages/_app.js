import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", function () {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", function () {
    nProgress.done();
  });
  Router.events.on("routeChangeError", function () {
    nProgress.done();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
