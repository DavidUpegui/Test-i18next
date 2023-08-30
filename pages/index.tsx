import { useRouter } from "next/router";
import Link from "next/link";
import { lisService, Programmers } from "@/servicios/lisService";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const {t: indexT, ready} = useTranslation('index')
  const programmers = lisService(locale);


  return (
    <>
      <main>{indexT("title")}</main>
      <Link href={router.pathname} locale={locale === "es" ? "en" : "es"}>
        {indexT("btn")}
      </Link>
      <p>
        {indexT("p")}: <span>{locale}</span>
      </p>
      <section>
        <h1>{indexT("service")}</h1>

        {programmers.map((programmer, index) => (
          <div key={index}>
            <p>{programmer.name}</p>
            <p>{programmer.charge}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["index", "layout"])),
    },
  };
};
