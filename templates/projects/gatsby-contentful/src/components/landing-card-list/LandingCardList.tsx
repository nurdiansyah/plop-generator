import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LandingCard from 'components/landing-card'
import useStyles from 'components/landing-card-list/LandingCardList.styles'
import { LandingCardProps } from 'components/landing-card/LandingCard'
import React, { FunctionComponent } from 'react'

export interface LandingCardListProps {
  cards: Partial<LandingCardProps>[]
}

const LandingCardList: FunctionComponent<LandingCardListProps> = ({ cards = [] }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      {cards?.map((card: any, idx: number) => (
        <Grid key={idx.toString()} item className={classes.content} xs={12}>
          <LandingCard post={card} />
        </Grid>
      ))}
    </Container>
  )
}

export default LandingCardList
