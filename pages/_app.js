import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Head from "next/head";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [hydrated, sethydrated] = useState(true);

  useEffect(() => {
    sethydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Samuel Rosero Portafolio</title>
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route}>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
