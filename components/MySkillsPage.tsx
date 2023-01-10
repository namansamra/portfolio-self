import Link from 'next/link';
import React from 'react';
import ProgressBar from '../components/ProgressBar';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { motion } from 'framer-motion';
import ScrollDown from './ScrollDown';

function MySkillsPage({ showScrollDown = false }) {
  interface Props {
    position: string;
    organisation: string;
    timePeriod: string;
    workString: string;
  }

  const ExperienceCard = ({
    position,
    organisation,
    timePeriod,
    workString,
  }: Props) => {
    return (
      <motion.div
        className="flex flex-col gap-2 w-full rounded-md bg-[#2a2a2a] text-[#ababab] p-6 min-w-[250px] min-h-[270px] max-h-[270px]"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-[20px] lg:text-[20px] xl:text-[24px] font-bold text-white">
          {position}
        </h1>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-lg font-semibold break-words">{organisation}</h3>
          <span className="text-[12px]">{timePeriod}</span>
        </div>
        <span className="text-[12px] font-medium">{workString}</span>
      </motion.div>
    );
  };

  return (
    <div className="w-full flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] relative bg-background">
      <div className="flex flex-col min-w-[50%] lg:mr-10 mb-10">
        <Tag tagName="<html>" />
        <Tag tagName="<body>" stylesString="xl:ml-5" />
        <div className="mt-[10%] mb-[10px] sm:my-2">
          <Tag tagName="<h1>" stylesString="xl:ml-8" />
          <WobbleEffect
            text="Skills & \n Experience"
            styleString="text-cyan break-words ml-2 sm:ml-4 xl:ml-12"
          />
          <Tag tagName="</h1>" stylesString="xl:ml-6" />
        </div>
        <Tag tagName="<p>" stylesString="xl:ml-5" />
        <div className="flex text-[12px] sm:text-[14px] font-medium max-w-[600px] flex-col mt-1 ml-2 sm:ml-4 xl:ml-12 xl:text-[16px] gap-4">
          <p>
            Since beginning my journey as a developer nearly 1.5 years ago, I’ve
            done remote work for for startups, and collaborated with talented
            people to create web products for both business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps and coding interactive layouts.
          </p>
          <p>
            I also have full-stack developer experience with Nodejs, Express,
            MongoDB etc.
          </p>
          <p>
            Visit my
            <Link
              href={'https://www.linkedin.com'}
              className="text-cyan text-md cursor-pointer mx-2"
            >
              LinkedIn
            </Link>
            profile for more details or just{' '}
            <Link
              href={'/contact'}
              className="text-cyan text-md cursor-pointer mx-1"
            >
              contact
            </Link>{' '}
            me.
          </p>
        </div>
        <Tag tagName="</p>" stylesString="xl:ml-5" />
        <Tag tagName="</body>" stylesString="mt-5 xl:ml-5" />
        <Tag tagName="</html>" stylesString="mt-2" />
      </div>

      <div className="flex flex-col gap-[60px] w-full max-w-[600px] md:mt-20">
        <div className="flex flex-col gap-4 w-full">
          <ProgressBar titleText="Front End" progress={80} />
          <ProgressBar titleText="Back End" progress={70} barColor="#FF2253" />
          <ProgressBar titleText="React Js" progress={80} barColor="#D26CD5" />
          <ProgressBar titleText="Node Js" progress={60} />
        </div>
        <div className="flex flex-col gap-6 lg:gap-4 lg:flex-row lg:items-center">
          <ExperienceCard
            position="Frontend Engineer"
            organisation="TartanHq"
            timePeriod="2022-2023"
            workString="Working on Income verification product. Tech Stack includes React, Redux, Zustand, Typescript, Chakra Ui, Styled Components etc. Developing Mobile responsive designs."
          />
          <ExperienceCard
            position="Frontend Intern"
            organisation="Scalenut"
            timePeriod="2021-2022"
            workString="Working on SEO Assistance product and developed new UI from scratch in team of 2 persons. Writing reusable and clean code with custom CSS. Making responsive and screen adaptive designs."
          />
        </div>
      </div>
    </div>
  );
}

export default MySkillsPage;
