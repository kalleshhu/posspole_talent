import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus';
import Whyus from './components/Whyus';
import WhatWeOffer from './components/WhatWeOffer/index';
import Vision from './components/Vision';
import Dedicated from './components/Dedicated/index';
import RegistrationForm from './components/RegistrationForm';
import Partners from './components/partners';
// import Digital from './components/Digital/index';
// import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import WhyPartner from './components/WhyPartner/index';
// import Ourteam from './components/Ourteam/index';
// import Featured from './components/Featured/index';
// import Manage from './components/Manage/index';
// import FAQ from './components/FAQ/index';
// import Testimonials from './components/Testimonials/index';
// import Articles from './components/Articles/index';
// import Joinus from './components/Joinus/index';
// import Insta from './components/Insta/index';




export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Whyus />
      <Vision />
      <WhatWeOffer />
      <Partners />
      <Wework />
      <WhyPartner />
      <Dedicated />
      <RegistrationForm />
      {/* <Digital />
      <Beliefs />
      <Ourteam />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta /> */}
    </main>
  )
}
