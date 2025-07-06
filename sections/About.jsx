import React from 'react';
import Image from 'next/image'; 


const About = () => {
  return (
    <section className="bg-[#fff] mt-50 px-6 md:px-12 text-[#000]">
      <div className="max-w-[70vw] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-semibold  mb-6 text-[#7e7e6b] font-serif">
            About Dr. Serena Blake
          </h2>
          <p className="text-[#7e7e6b] mb-6 text-lg leading-[2] font-freight-sans-pro font-light">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <p className='text-[#7e7e6b] text-lg leading-[2] font-freight-sans-pro font-extralight'>  She dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. She hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). Her experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.</p>
        </div>

         <div className="ml-20 relative w-[400px] h-[600px]">
          <Image
            src='/headshot.jpg'
            alt="Dr. Serena Blake"
             fill
            className="shadow-lg object-cover"
          />
        </div>
      </div>
      
     <hr className="border-t-2 border-[#7e7e6b] mt-40 mb-15" />


    </section>
  );
};

export default About;
