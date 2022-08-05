import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


  return (
    <Layout title='titulo test'>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                alt='no-image'
                src={ pokemon.sprites.other?.dream_world.front_default || 'no-image' }
                width='100%'
                height={100}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'> { pokemon.name } </Text>
              <Button
                color={'gradient'}
                ghost
              >
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={0}>
                <Image
                  alt={ pokemon.name }
                  src={ pokemon.sprites.front_default }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  alt={ pokemon.name }
                  src={ pokemon.sprites.back_default }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  alt={ pokemon.name }
                  src={ pokemon.sprites.front_shiny }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  alt={ pokemon.name }
                  src={ pokemon.sprites.back_shiny }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemon151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    },
  }
}

export default PokemonPage;
