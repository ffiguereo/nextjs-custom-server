'use strict'

import Link from 'next/link'

const About = ({ req }) => (
  <div>
    <h1>Page About</h1>
    <Link href='/demo'><a>Demo!</a></Link>
  </div>
)

export default About
