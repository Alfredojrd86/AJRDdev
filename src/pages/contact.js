import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      const updatedServices = e.target.checked
        ? [...formData.services, e.target.value]
        : formData.services.filter(service => service !== e.target.value);
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          services: formData.services.join(", "),
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        // Handle success, e.g., redirect to a thank you page
        router.push("/thanks");
      } else {
        // Handle error
        console.error("Form submission failed!", result);
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred during form submission:", error);
    }
  };

  const services = [
    "Diseño Web",
    "Desarrollo Web",
    "Dominio y Hosting",
    "Diseño de Logo",
    "SEO",
    "Desarrollo de Aplicaciones"
  ];

  console.log(formData)

  return (
    <>
      <Head>
        <title>Contacto AJRDdev</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            //             text="Begin Today,
            // I'm One Message Away 👋"
            text="¡Comienza hoy,
Estoy a solo un mensaje de distancia! 👋"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                ¿Qué sigue?
              </h2>

              <div className="w-full"></div>
              <p className="">
                Mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta, una idea o simplemente quieras saludar,
                estaré encantado de responderte. No dudes en contactarme si tienes alguna actualización o necesitas avanzar en tu proyecto, estoy aquí para ayudarte.
              </p>
            </div>
            <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border  border-solid  border-dark bg-light p-6   dark:border-light dark:bg-dark xs:p-4">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form
                    name="contact-form"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />
                    <p className="hidden">
                      <label>
                        Nombre
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark dark:text-light">
                        Tu Nombre:
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                        Tu Email:
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light/75">
                        Mis servicios:
                        <div className="mt-1 grid grid-cols-2 gap-2">
                          {services.map((service, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`service-${index}`}
                                name="services"
                                value={service}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              <label htmlFor={`service-${index}`} className="text-sm">
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark/75 dark:text-light/75"
                      >
                        Mensaje:
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows="4"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <button
                        type="submit"
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:text-dark dark:hover:text-light"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
