import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useStyles from 'components/content-block/ContentBlock.styles'
import React, { FunctionComponent } from 'react'
import theme from 'themes/theme-light'

export interface ContentBlockProps {
  header?: string
  image?: any
  fluid?: any
  subHeader?: any
  link?: any
  imgPosition?: 'left' | 'right'
}

export const ContentBlock: FunctionComponent<ContentBlockProps> = (props) => {
  const {
    header,
    image,
    subHeader,
    imgPosition,
  } = props
  const classes = useStyles(props)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const Subheader = () => (
    <Grid item className={classes.paper} xs={12} md={imgPosition === 'left' ? 7 : 8}>
      <Typography variant={'h4'}>{subHeader}</Typography>
    </Grid>
  )
  const Image = () => (
    <Grid item className={classes.image} xs={12} md={4}>
      <img className={classes.img} height="290px" width="350px" src={image} />
    </Grid>
  )
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={1}>
        <Grid item className={classes.item} xs={12}>
          <Typography variant={'h3'}>{header}</Typography>
        </Grid>
        {(imgPosition === 'left' || isMobile)
          ? <><Image /><Subheader /></>
          : <><Subheader /> <Image /></>
        }
      </Grid>
    </div>
  )
}

export default ContentBlock
