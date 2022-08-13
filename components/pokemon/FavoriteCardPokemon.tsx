import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemonId: number[];
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  
  const router = useRouter();

  const onFavoriteClicked = () => router.push(`/pokemon/${pokemonId}`);
  
  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          height={140}
          width={'100%'}
        />
      </Card>
    </Grid>
  )
}
