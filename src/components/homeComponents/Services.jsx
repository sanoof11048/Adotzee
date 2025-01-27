import React from 'react'

function Services() {

    function ServiceCard({ title, description }) {
        return (
          <div className="p-6 bg-blue-500 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-lg">{description}</p>
          </div>
        );
      }
  return (
    <>
        <section
    id="about"
    className="min-h-screen bg-dark-800 text-white flex items-center justify-center px-8 pt-20"
  >
    <div className="max-w-4xl text-center">
      <h2 className="text-4xl font-bold">Our Story</h2>
      <p className="mt-4 text-lg leading-8">
        ADOTZEE is more than just an admission agency; it's a dedicated
        partner in your academic journey. Our mission is to provide
        personalized guidance and support for students seeking degrees
        across various fields, including Science, Commerce, and Humanities.
      </p>
    </div>
  </section>

  <section
    id="services"
    className="bg-dark-900 text-white py-16 px-8 flex flex-col items-center"
  >
    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
    <p className="text-lg mb-8">
      Tailored services to enhance your admission experience.
    </p>
    <div className="flex space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Contact
      </button>
      <button className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800">
        Reviews
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <ServiceCard
        title="Personal Consultation"
        description="One-on-one guidance from experienced advisors."
      />
      <ServiceCard
        title="Application Assistance"
        description="Support throughout the application process."
      />
      <ServiceCard
        title="Program Selection"
        description="Expert advice to choose the right degree path."
      />
      <ServiceCard
        title="Workshops"
        description="Informative sessions on admission strategies."
      />
      <ServiceCard
        title="Scholarship Guidance"
        description="Help in identifying and applying for scholarships."
      />
      <ServiceCard
        title="Virtual Consultations"
        description="Remote support and advice for your admission needs."
      />
    </div>
  </section>
  <div className="wrapper">
  <div className="marquee-text">
    <div className='marquee-text-track'>

    <p> ✨ Your journey to academic success starts here</p>
    <p> ✨ Your journey to academic success starts here</p>
    <p> ✨ Your journey to academic success starts here</p>
    <p aria-hidden="true"> ✨ Your journey to academic success starts here</p>
    <p aria-hidden="true"> ✨ Your journey to academic success starts here</p>
    <p aria-hidden="true"> ✨ Your journey to academic success starts here</p>
    </div>
  </div>
</div>
  </>

  )
}

export default Services