import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animation-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Minim qui sint enim Lorem nulla cillum consequat mollit ut
          exercitation commodo adipisicing irure. Ea est sunt dolor ad ex minim
          ullamco. Anim aliqua ullamco ad Lorem.
        </p>
        <p>
          Do labore fugiat enim voluptate in sunt culpa quis pariatur nisi in
          magna sit consequat. Voluptate et sint sint est eu. Incididunt ea
          reprehenderit anim sint exercitation mollit. Exercitation excepteur
          nulla exercitation proident deserunt elit Lorem pariatur occaecat sit.
          Ex laboris ipsum dolor ex incididunt aliquip. Fugiat exercitation
          consectetur occaecat minim laborum laborum culpa ad aliquip
          reprehenderit consectetur tempor cupidatat. Cillum ea elit labore
          pariatur nisi consectetur deserunt adipisicing elit aute excepteur
          culpa consectetur nostrud. Commodo in irure laboris aute laborum
          adipisicing officia ut do adipisicing esse sint ea. Irure fugiat nisi
          in dolore. Laborum incididunt cupidatat consequat ea labore dolore
          aliquip. Qui dolore excepteur do duis officia incididunt qui anim
          dolore laborum amet quis.
        </p>
        <p>Fugiat sunt occaecat nisi cillum incididunt.</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
