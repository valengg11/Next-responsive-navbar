import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import toggler from "../../public/images/menu.png";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
        ></link>
      </Head>

      <div
        className={!isActive ? `${styles.topnav}` : `${styles.responsive}`}
        id="myTopnav"
      >
        <Link href="/">
          <a className={styles.navbar_item} onClick={handleToggle}>
            INICIO
          </a>
        </Link>
        <Link href="/que_hacemos">
          <a className={styles.navbar_item} onClick={handleToggle}>
            QUÉ HACEMOS
          </a>
        </Link>
        <Link href="/quienes_somos">
          <a className={styles.navbar_item} onClick={handleToggle}>
            QUIÉNES SOMOS
          </a>
        </Link>
        <Link href="/historia">
          <a className={styles.navbar_item} onClick={handleToggle}>
            HISTORIA
          </a>
        </Link>
        <Link href="/actividades">
          <a className={styles.navbar_item} onClick={handleToggle}>
            ACTIVIDADES
          </a>
        </Link>
        <Link href="/contacto">
          <a className={styles.navbar_item} onClick={handleToggle}>
            CONTACTO
          </a>
        </Link>
        <div className={styles.search_container}>
          <i className="fas fa-search" />
        </div>
        <hr className={styles.hr_navbar} />
        <Link href="/politicas">
          <a className={styles.navbar_footer_item} onClick={handleToggle}>
            POLÍTICAS DE PRIVACIDAD
          </a>
        </Link>
        <Link href="/terminos">
          <a className={styles.navbar_footer_item} onClick={handleToggle}>
            TÉRMINOS Y CONDICIONES
          </a>
        </Link>
        <Link href="/contacto">
          <a className={styles.navbar_footer_item} onClick={handleToggle}>
            CONTACTO
          </a>
        </Link>
        <Link href="/pqr">
          <a className={styles.navbar_footer_item} onClick={handleToggle}>
            PREGUNTAS FRECUENTES
          </a>
        </Link>
        <a
          href="https://www.instagram.com/"
          className={styles.instagram_link_logo}
        >
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={handleToggle}
        >
          <div className={styles.toggler}>
            <Image src={toggler} alt="toggler" />
          </div>
        </a>
      </div>
      <a href="https://www.instagram.com/" className={styles.instagram_link}>
        Instagram
      </a>
    </div>
  );
};

export default Navbar;
