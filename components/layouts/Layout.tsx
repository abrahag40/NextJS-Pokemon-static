import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Abraham Hdz" />
        <meta name="description" content="Informaciòn sobre el pokemon xxx" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>

      <NavBar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}