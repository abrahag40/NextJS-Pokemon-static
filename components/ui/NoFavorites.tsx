import { Container, Image, Text } from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <div>
      <Container css={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
      }}>
        <Text h1>No hay favoritos</Text>
        <Image
          alt={''}
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
          height={250}
          width={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
    </div>
  )
}

export default NoFavorites