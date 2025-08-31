import React from 'react';

const StartYourJourney = () => {
  
  return (
    <section className="w-11/12 mx-auto my-10">
        <h2 className="text-4xl text-center font-extrabold mb-6 text-black/85 dark:text-gray-100">
          Unlock <span className='text-violet-dark dark:text-violet-light'>Your</span> Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 w-4/5 mx-auto">
          {/* Section for Students */}
          <div className="border bg-gray-50 border-gray-200 dark:border-gray-700 rounded-md dark:bg-gray-800 py-4 px-6">
            <h3 className="text-2xl font-bold mb-4">For Students</h3> 
            <p className="mb-6">
              Find the perfect tutor to help you achieve your academic goals. Our experts provide personalized, one-on-one sessions tailored to your needs.
            </p>
            <a href="/find-tutors" className="btn border-none shadow-none bg-violet-dark text-white hover:bg-violet-light btn-wide mx-auto">
              Find My Perfect Tutor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Section for Tutors */}
          <div className="border bg-gray-50 border-gray-200 dark:border-gray-700 rounded-md dark:bg-gray-800 py-4 px-6">
            <h3 className="text-2xl font-bold mb-4">For Tutors</h3>
            <p className="mb-6">
              Join our growing community of educators. Share your expertise, set your own rates, and connect with students from all over the globe.
            </p>
            <a href="/add-tutor" className="btn border-none shadow-none bg-violet-dark text-white hover:bg-violet-light btn-wide mx-auto">
              Become a Tutor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
    </section>
  );
};

export default StartYourJourney;