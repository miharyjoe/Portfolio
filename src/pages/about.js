import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilpic from "../../public/images/profile/developer-pic-3.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [useEffect, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Mihary Joel | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="It lovers" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biographie
              </h2>
              <p className="font-medium">
                En pleine reconversion professionnelle, Je suis actuellement
                étudiant en informatique après avoir fini mes études en sciences
                et ingénierie des matériaux à l'ESPA Vontovorona. Comme vous le
                constatez, j'aime apprendre et je n'ai pas peur des challenges.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-{102%} h-{103%} rounded-{2rem} bg-dark " />
              <Image
                src={profilpic}
                alt="Mihary pic"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col item-end justify-between">
              {/* <div className="flex flex-col item-end justify-center">
                <span className="inline-block text-7-xl font-bold"> 50+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied client
                </h2>
              </div> */}
              <div className="flex flex-col item-end justify-center">
                <span className="inline-block text-7-xl font-bold">
                  <AnimatedNumbers value={26} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Age
                </h2>
              </div>
              {/* <div className="flex flex-col item-end justify-center">
                <span className="inline-block text-7-xl font-bold">50+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied client
                </h2>
              </div> */}
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
