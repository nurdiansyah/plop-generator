import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ContentBlock, { ContentBlockProps } from 'components/content-block/ContentBlock'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      // padding: '1.5em'
    }
  })
)

interface ContentBlockListProps {
  blocks: ContentBlockProps[]
}

const ContentBlockList: FunctionComponent<ContentBlockListProps> = (props) => {
  const classes = useStyles()
  return (
    <>
      {props.blocks.map((block, idx) => (
        <Grid key={`grid-cblock-${idx}`} item className={classes.content}>
          <ContentBlock
            key={`cblock-${idx}`}
            imgPosition={idx % 2 === 0 ? 'left' : 'right'}
            {...block}
          />
        </Grid>
      ))}
    </>
  )
}

export default ContentBlockList
