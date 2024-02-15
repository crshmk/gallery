import temple from '../assets/img/laos-temple.jpg'
import smokeHat from '../assets/img/smoke-hat.jpg'
import sailingDengue from '../assets/img/sailing-dengue.jpg'
import anaMandara from '../assets/img/ana-mandara.jpg'
import shackJam from '../assets/img/first-shack-jam.jpg'
import teachingHistory from '../assets/img/teaching-history.jpg'
import coach from '../assets/img/coach.jpg'
import gimmeShelter from '../assets/img/gimme-shelter.jpg'

import ntOffice from '../assets/img/nt-office.jpg'
import flyoverNt from '../assets/img/flyover-nt.jpg'
import tranPhu from '../assets/img/tran-phu.jpg'
import sailingWork from '../assets/img/sailing-work.jpg'

import _1 from '../assets/img/travel/1.jpg'
import _2 from '../assets/img/travel/2.jpg'
import _3 from '../assets/img/travel/3.jpg'
import _4 from '../assets/img/travel/4.jpg'

const imageSections = [
  {
    label: 'travel',
    blurb: `I used to travel a lot. I've been to about 40 countries.`,
    images: [temple, smokeHat, _1, _2, _3, _4]
  },
  {
    label: 'music',
    blurb: `I've spent a lot of my life playing music. I gigged a few nights a week in Saigon with a rock star Filipino band. When I was setting up my dev shop in Nha Trang, I played covers on the beach for tourists. Software engineering and guitar playing are the same thing.`,
    images: [shackJam, sailingDengue, anaMandara, gimmeShelter]
  },
  {
    label: 'teaching',
    blurb: `After a I traveled around the world for a while, I decided to teach History in international schools.`,
    images: [teachingHistory, coach]
  },
  {
    label: 'nha-trang',
    blurb: `I've spent about five years in this nice beach town in Vietnam.`,
    images: [ntOffice, tranPhu, flyoverNt, sailingWork]
  }
]

export default imageSections

export const imageSectionTitles = imageSections.map(section => section.label)