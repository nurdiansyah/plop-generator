import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      margin: '1em 2em',
      width: '100%',
    }
  })
)

interface PageContentProps {
  pageText: string|JSX.Element|React.ReactNode
}

const PageContent: FunctionComponent<PageContentProps> = ({ pageText }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.content}>
      <Typography color={"primary"}>{pageText}</Typography>
    </Grid>
  )
}

export default PageContent
