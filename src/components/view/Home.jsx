import React from 'react'
import Hero from '../home/Hero'
import CompaniesLogo from '../home/CompaniesLogo'
import SwitchingEnergy from '../home/SwitchingEnergy'
import SimpleSteps from '../home/SimpleSteps'
import ComprehensiveUtility from '../home/ComprehensiveUtility'
import ChooseUtilities from '../home/ChooseUtilities'
import Testimonials from '../home/Testimonials'
import FrequentlyAskQuestions from '../home/FrequentlyAskQuestions'

const Home = () => {
  return (
    <div>
      <Hero />
      <CompaniesLogo />
      <SwitchingEnergy />
      <SimpleSteps />
      <ComprehensiveUtility />
      <ChooseUtilities />
      <Testimonials />
      <FrequentlyAskQuestions/>
    </div>
  )
}

export default Home