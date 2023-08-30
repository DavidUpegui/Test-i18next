import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout/Layout";
import TranslationProvider from "@/context/TranslationProvider";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
      <TranslationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TranslationProvider>
  );
}

export default appWithTranslation(App);
