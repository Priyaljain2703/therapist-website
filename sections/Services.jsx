import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Anxiety & Stress Management ",
    description:
      "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in training or reflecting on a long healthcare career, we can address the stressors and challenges impacting your wellbeing.",
    image: "/services1.jpg",
  },
  {
    title: "Relationship Counseling ",
    description:
      "Life’s challenges — from childhood difficulties to major loss — can leave lasting emotional marks. This therapy offers a safe space to process grief, trauma, and pain, while helping you move toward grounding, self-compassion, and peace.",
    image: "/s2.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Navigating identity across cultures can be complex. This service supports second-generation individuals balancing heritage and belonging, offering space to process family dynamics, cultural tension, and self-acceptance.",
    image: "/s3.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f8f6f0] py-20  font-serif text-center text-[#000]">

        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-[#4e4e45] font-normal leading-snug mb-10">
          Therapy can be a space where you invest in yourself—<br />
          <span className="block mt-2">one of the highest forms of self-care.</span>
        </h2>

        <p className="text-[#7e7e6b] text-lg md:text-xl leading-relaxed font-freight-sans-pro max-w-5xl mx-auto mb-16">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues,
          or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don’t have to face it
          alone. Therapy offers you the time and space to work toward wellness and peace.
        </p>

        <hr className="border-t-2 border-[#6e6e6e] w-full max-w-[90%] mx-auto mt-25 mb-25" />
      </div>
      <h1 className="text-4xl  text-[#7e7e6b] mb-20">Area of focus</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index}>
            <div className="w-64 h-64 mx-auto mb-6">
              <Image
                src={service.image}
                alt={service.title}
                width={256}
                height={256}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-medium text-[#464646] mb-4">
              {service.title}
            </h3>
            <p className="text-[#555] text-base leading-relaxed max-w-sm mx-auto">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    
       <div className="mt-40 mx-auto bg-[#94b0b0] py-20 px-6 text-center text-[#1a1a1a]">
        <h2 className="text-3xl md:text-4xl font-serif  mb-10">
          Rates and Insurance
        </h2>

        <p className="text-lg font-sans mb-2">
          Individual session– $200
        </p>
        <p className="text-lg font-sans mb-6">
          Couples session – $240
        </p>

        <p className="text-xl font-sans mb-4">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>

        <p className="text-xl ">
          For out-of-network plans, I’ve partnered with Mentaya using{' '}
          <a
            href="https://www.mentaya.com/"
            className="underline hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            this tool
          </a>{' '}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
};

export default Services;
