import ServicesHero from '../../components/services/ServicesHero'
import WhatICanBuild from '../../components/services/WhatICanBuild'
import HowWeWorkTogether from '../../components/services/HowWeWorkTogether'
import WhyWorkWithMe from '../../components/services/WhyWorkWithMe'

const ServicesPage = () => {
  return (
    <main className="bg-background">
      <ServicesHero />
      <WhatICanBuild />
      <HowWeWorkTogether />
      <WhyWorkWithMe />
    </main>
  )
}

export default ServicesPage
