import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

function About() {
  const { t } = useTranslation("about");
  return <div>{t("content")}</div>;
}

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["layout", "about"])),
    },
  };
};
