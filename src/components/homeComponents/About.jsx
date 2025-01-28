import React from "react";

function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:flex md:text-left md:m-10 gap-7">
          <div className="">
            <div className="min-h-auto border-e-3 border-0 border-e-lightblue border-solid border-y-0 h-auto">
              <h1 className="text-5xl font-bold pe-8 md:text-right">
                <span className="text-primary">Our</span> story
              </h1>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-4">ADOTZEE</h3>
            <p className="text-gray-300">
              ADOTZEE is more than just an admission agency; it's a dedicated
              partner in your academic journey. Our mission is to provide
              personalized guidance and support for students seeking degrees
              across various fields, including Science, Commerce, and
              Humanities. With a commitment to excellence, we strive to help you
              navigate the complexities of the admission process and achieve
              your educational goals. Join us as we pave the way for your
              success in higher education.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
