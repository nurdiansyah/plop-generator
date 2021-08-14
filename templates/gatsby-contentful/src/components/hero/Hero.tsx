import 'components/hero/Hero.css'

import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const bgHeight = { height: '380px' }
const cursor = { cursor: 'pointer' }

export default (props: any) => {
  const { data: { additionalProperties: d, heroImage, headerCtAs } } = props

  return (
    <BackgroundImage
      className="hero-container"
      fluid={heroImage?.fluid}
      style={bgHeight}
    >
      <Container>
        {d.headerLabel && <h1>{d.headerLabel}</h1>}
        {d.headerLine2Label && <h1>{d.headerLine2Label}</h1>}
        {d.subHeaderLabel && <h3>{d.subHeaderLabel}</h3>}
        {d.heroCopy && <p>{d.heroCopy}</p>}
        {headerCtAs.map((cta: any, idx: number) => (
          <a href={cta.url} key={`hcta-${idx.toString()}`} style={cursor}>{cta.label}</a>
        ))}
      </Container>
    </BackgroundImage>
  )
}
