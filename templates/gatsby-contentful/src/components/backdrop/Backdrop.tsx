import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import Fade from "@material-ui/core/Fade"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import { TransitionContext } from "providers/TransitionProvider"
import React, { useContext } from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: theme.palette.text.primary,
    },
  })
)

export default () => {
  const classes = useStyles()
  const { state } = useContext(TransitionContext)
  const style = { transitionDelay: !!state.count ? "100ms" : "0ms" }

  return (
    <Fade
      in={!!state.count}
      style={style}
      unmountOnExit={true}
    >
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Fade>
  )
}
