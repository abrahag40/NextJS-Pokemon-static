
import NextLink from "next/link";
import Image from "next/image";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const NavBar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: theme?.colors.gray700.value,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      padding: '0px 20px',
      width: '100%',
    }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okèmon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: 10 }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
