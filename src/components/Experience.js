import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {/* Experience */}
        Experiencia
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="5050 Capital"
            time="2022 - 2024"
            address="Costa Rica"
            work="Desarrollé una plataforma unificada de componentes y herramientas para los diferentes productos de la empresa para converger técnicamente y acelerar la entrega de producto.
Implementar prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de entrega bajando los tiempos de despliegue más de un 80%.
Aporté soluciones pioneras como usar Ship/Show/Ask como estrategia de trabajo en GitHub, el uso de Rust para acelerar las compilaciones, paralelizar trabajos en CI para el ahorro de tiempo y costes además de explorar soluciones en AWS para una mejorar escalabilidad."
          />

          <Details
            position="Frontend Developer"
            company="Brackets IT"
            time="2020 - 2024"
            address="Costa Rica"
            // companyLink="https://github.com/lilxyzz/holo-theme"   
            work="Optimicé el rendimiento de aplicaciones web implementando técnicas de carga diferida y minimización de archivos JavaScript y CSS. Mejoré la experiencia del usuario al crear interfaces responsivas y accesibles utilizando HTML5 y CSS3, además de desarrollar componentes reutilizables en React para facilitar el mantenimiento y la escalabilidad del código. También implementé soluciones de gestión del estado con Redux o Context API para manejar datos en aplicaciones React, integrando bibliotecas de terceros como Axios para mejorar la interacción con el servidor. Colaboré en un entorno ágil, participando en reuniones diarias y revisiones de código para asegurar la calidad del software."
          />
          <Details
            position="Full Stack Developer"
            company="Freelancer"
            // time=""
            address="Global"
            // companyLink="https://github.com/lilxyzz/holo-theme"   
            work="Desarrollé sitios web escalables y de alto rendimiento utilizando Next.js, aprovechando su capacidad para renderizar en el lado del servidor (SSR) y generar sitios estáticos (SSG), lo que mejora significativamente la velocidad de carga y el SEO. Implementé aplicaciones móviles con React Native, creando interfaces de usuario nativas optimizadas para iOS y Android, lo que permitió un desarrollo multiplataforma eficiente. Para enriquecer las aplicaciones móviles, integré funcionalidades avanzadas mediante el uso de Kotlin, garantizando una experiencia de usuario fluida y adaptada a las necesidades del dispositivo. Además, optimicé la experiencia del usuario implementando técnicas de pre-renderizado y carga diferida en proyectos de Next.js, facilitando tiempos de carga más rápidos y una mejor interacción con el contenido. También facilité la comunicación entre el front-end y el back-end mediante la creación de APIs RESTful en Next.js, permitiendo una integración sencilla con bases de datos y servicios externos. Finalmente, diseñé interfaces atractivas y responsivas utilizando CSS y frameworks como Tailwind CSS o Styled Components, asegurando una presentación visual coherente en diferentes dispositivos, y mejoré la mantenibilidad del código al utilizar una estructura modular en Next.js, organizando componentes, páginas y estilos de manera clara y eficiente."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          {/* View Projects */}
          Ver Proyectos
        </Link>
        {/* <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          Ver Artículos
        </Link> */}
      </div>
    </div>
  );
};

export default Experience;
