import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

export interface PostCardProps {
  post: {
    heroImage: {
      fluid: string | any
    }
    publishDate: string | Date
    slug: string
    title: string
    description: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default ({ post }: PostCardProps) => {
  const classes = useStyles()
  const markdown = {
    __html: post.description.childMarkdownRemark.html,
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Img alt="" fluid={post.heroImage.fluid} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={markdown} />
          <small>{post.publishDate}</small>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(`/news/${post.slug}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
