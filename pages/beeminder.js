import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

const JASON_SLUGS = [
  'tockmore',
  'protein1',
  'calm2',
  'pushups',
  'iprep',
  'supine-torso-hold',
  'calories',
  'rfl',
  'anki_zero',
  'rescuetime',
]

const DAISY_SLUGS = [
  'sixpacks',
  'job2017',
  'rescuetime',
  'richbearpoorcat',
  'write',
  'slim',
]

const makeGoalIframeUrl = ({slug, username}) => {
  const url = `https://www.beeminder.com/widget?slug=${slug}&username=${username}`

  return (
    <iframe
      src={url}
      height="185px"
      width="230px"
      frameborder="0px"
    >
    </iframe>
  )
}

export default class Beeminder extends React.Component {
  getJasonGoals() {
    JASON_SLUGS.map((slug) => {
      return makeGoalIframeUrl({slug, username: 'zinbiel'})
    })
  }

  getDaisyGoals() {
    DAISY_SLUGS.map((slug) => {
      return makeGoalIframeUrl({slug, username: 'daisycat'})
    })
  }

  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Beeminder`}
        />

        <h1>Jason</h1>
        {this.getJasonGoals()}

        <h1>Daisy</h1>
        {this.getDaisyGoals()}
      </div>
    )
  }
}
