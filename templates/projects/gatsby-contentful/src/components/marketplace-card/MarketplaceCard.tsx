import { Box, ButtonBase, Grid, Paper, Typography } from "@material-ui/core"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import React, { FunctionComponent } from 'react'

export interface MarketplaceCardProps {
  logo: string
  title: string
  subtitle: string
  description: string
  type: string
  url: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 240,
    },
    image: {
      width: 80,
      height: 40,
    },
    titleText: {
      color: 'black'
    },
    text: {
      color: 'grey'
    },
    typeGrid: {
      margin: theme.spacing(2, 0, 0),
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    hover: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  }),
)

const text = {
  type: 'Type'
}

const MarketplaceCard: FunctionComponent<MarketplaceCardProps> = (props) => {
  const classes = useStyles()

  // this is a totally fake function at the moment
  const handleClick = (url: string) => {
    console.log(url)
  }

  return (
    <Box flex={1}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.hover}
          onClick={() => {
            handleClick(props.url)
          }}
        >
          <Grid item xs={12} id={'logo'}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="logo unavailable" src={props.logo} />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid item xs={12} id={'title'}>
            <Typography variant={'body1'} className={classes.titleText}>{props.title}</Typography>
            <Typography variant={'body2'} className={classes.text}>{props.subtitle}</Typography>
          </Grid>
          <Grid item xs={12} id={'description'}>
            <Typography variant={'body2'} className={classes.text}>{props.description}</Typography>
          </Grid>
          <Grid item xs={12} id={'type'} className={classes.typeGrid}>
            <Typography variant={'body2'} className={classes.text}>{text.type}: {props.type}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default MarketplaceCard
