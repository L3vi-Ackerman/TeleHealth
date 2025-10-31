import CommonFooter from '@/components/common/common-footer'
import { CommonNav } from '@/components/common/common-nav'
import AboutUs from '@/components/modules/landing/about-us'
import Faq from '@/components/modules/landing/faq'
import HeroSection from '@/components/modules/landing/hero-section'
import JoinUs from '@/components/modules/landing/join-us'
import TrustedBy from '@/components/modules/landing/trusted-by'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <CommonNav />
      <HeroSection />
      <AboutUs />
      <TrustedBy />
      <JoinUs />
      <Faq />
      <CommonFooter />
    </div>
  )
}
