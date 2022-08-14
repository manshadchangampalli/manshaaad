import "../styles/globals.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loadings from "../Components/Loading/Loading" ;

function MyApp({ Component, pageProps }) { 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const Router = useRouter();
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setLoading(false);
    });
  }, []);
  return (
    <div>
     { loading ? <Loadings/> : 
      <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
