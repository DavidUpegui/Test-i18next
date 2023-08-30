import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

type Props = {
  layoutT: Function;
};
function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const { t:layoutT, ready } = useTranslation('layout')
  if(!ready) return

  return (
    <>
    <h1>{layoutT('helloWorld')}</h1>
      <Link href="/">{layoutT("navbar.home")}</Link>
      <Link href="/about">{layoutT("navbar.about")}</Link>
      <Link href={router.asPath} locale={locale === "es" ? "en" : "es"}>
        {layoutT("navbar.btnChange")}
      </Link>
    </>
  );
}

export default Navbar;