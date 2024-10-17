import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const Thanks = () => {
  return (
    <>
      <Head>
        <title>Gracias por tu mensaje</title>
        <meta
          name="description"
          content="Gracias por ponerte en contacto conmigo. Te responderé pronto."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="¡Gracias por tu mensaje!"
            className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-4 text-xl font-medium">
              He recibido tu mensaje y te responderé lo antes posible.
            </p>
            <p className="mb-8 text-lg">
              Mientras tanto, puedes explorar más de mi trabajo o volver a la página principal.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base">
                Inicio
              </Link>
              <Link href="/projects" className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base">
                Proyectos
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Thanks;
