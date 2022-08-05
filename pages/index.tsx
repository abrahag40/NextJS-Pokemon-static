import { Grid } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListRespones, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokemón'>
      <Grid.Container gap={2} justify={'flex-start'}>
      {
        pokemons.map(item => <PokemonCard key={item.key} pokemon={item} />)
      }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListRespones>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((item, index) => {
    return {
      ...item,
      key: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    }
  })

  return {
    props: {
      pokemons
    },
  }
}


export default Home
