import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import profilePics from "../../public/images/profile/developer-pic-3.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Hireme from "@/components/Hireme";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>ANDRIAMILANTO Mihary Joel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePics}
                alt="CodeBuck"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="You stop to LEAD when you stop to LEARN."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                En pleine reconversion professionnelle, Je suis actuellement
                étudiant en informatique après avoir fini mes études en sciences
                et ingénierie des matériaux à l'ESPA Vontovorona. Comme vous le
                constatez, j'aime apprendre et je n'ai pas peur des challenges.
              </p>
              <div className="flex items-center mt-2 self-start">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light
                  p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className="ml-1 w-full" />
                </Link>
                <Link
                  href="mailto:miharyjoel@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={LightBulb} alt="CodeBucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
