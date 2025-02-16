import React from 'react'

function ViewCollage({selectedAddon}) {

  return (
    <>
     {/* College Cards */}
     {selectedAddon && (
            <div className="mt-8 w-full">
              <h2 className="text-3xl font-bold text-white text-center mb-6">
                Colleges Offering Your Course
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {commerceCourses
                  .find((course) => course.category === selectedCategory)
                  ?.addons.find((addon) => addon.name === selectedAddon)
                  ?.colleges.map((college, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl shadow-lg bg-white/20 backdrop-blur-md text-white transition-transform hover:scale-101 hover:shadow-2xl flex flex-col md:flex-row items-center justify-between border border-white/30"
                    >
                      <h2 className="text-2xl font-semibold w-full text-center md:text-left">
                        {college}
                      </h2>
                      <a
                        href={`https://wa.me/918281060462?text=${encodeURIComponent(
                          `I need to Know about ${selectedAddon} in ${college}`
                        )}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="md:mt-0 text-sm text-white bg-blue-600 px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                      >
                        Fees Details & More Info
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          )}
    </>
  )
}

export default ViewCollage