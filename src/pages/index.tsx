import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";

import logoImg from "../../public/logo.svg";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu email" type="text" />

            <Input placeholder="Sua senha" type="password" />

            <Button type="submit" Loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" target="_blank" passHref>
            <p className={styles.text}> Não possui uma conta? Cadastra-se</p>
          </Link>
        </div>
      </div>
    </>
  );
}
