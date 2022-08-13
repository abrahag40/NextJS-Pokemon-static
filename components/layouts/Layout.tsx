import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Abraham Hdz" />
        <meta name="description" content="Informaciòn sobre el pokemon xxx" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      
        <meta name="og:title" content={`Información sobre ${ title }`} />
        <meta name="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta name="og:image" content={`${origin}/img/banner.png`} />
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