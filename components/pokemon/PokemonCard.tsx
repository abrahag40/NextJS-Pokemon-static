import { FC } from "react"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { SmallPokemon } from "../../interfaces"

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  
  const { key, image, name } = pokemon;

  const router = useRouter();

  const onClick = () => router.push(`/pokemon/${pokemon.key}`);

  return (
    <Grid key={key} xs={6} sm={3} md={4} xl={1}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image alt="" src={image} height={90} width={'100%'} />
        </Card.Body>
        <Card.Footer>
          <Row justify={'space-between'}>
            <Text transform={'capitalize'}>{name}</Text>
            <Text># {key}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
