import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import { pokemons } from '../../utils'
import NoFavorites from '../../components/ui/NoFavorites'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( pokemons() );
  }, [])
  

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
    </Layout>
  )
}

export default FavoritesPage