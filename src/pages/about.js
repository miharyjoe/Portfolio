import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Mihary Joel | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="It lovers" />
        </Layout>
      </main>
    </>
  );
};

export default about;
