import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Tag from '../components/Tag';
import WobbleEffect from '../components/WobbleEffect';
import { useMainContext } from '../utils/context';

function About() {
  const ref = useRef<any>(null);
  useEffect(() => {
    //@ts-ignore
    TagCanvas.Start('myCanvas', 'tags', {
      textColour: '#08FDD8',
      outlineColour: 'transparent',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
      activeCursor: 'pointer',
      pinchZoom: false,
      zoomEnabled: false,
      clickToFront: true,
      initial: [0.05, -0.1],
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const canvas: any = document.getElementById('myCanvas');
      canvas.width = width - 10;
      canvas.height = height - 10;
    }
  }, [ref.current]);
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col lg:flex-row text-white px-[20px] md:px-[50px] py-[30px] relative bg-background overflow-y-auto">
        <div className="w-full h-full lg:w-[50%] flex-col gap-4">
          <Tag tagName="<html>" />
          <Tag tagName="<body>" stylesString="xl:ml-5" />
          <div className="mt-[10%] mb-[20px] sm:my-8">
            <Tag tagName="<h1>" stylesString="xl:ml-8" />
            <WobbleEffect
              text="I, Me & Myself"
              styleString="text-cyan break-words ml-2 sm:ml-4 xl:ml-12"
            />
            <Tag tagName="</h1>" stylesString="xl:ml-6" />
          </div>
          <Tag tagName="<p>" stylesString="xl:ml-5" />
          <div className="flex text-[12px] sm:text-[14px] font-medium max-w-[600px] flex-col mt-2 ml-2 sm:ml-4 xl:ml-12 xl:text-[16px] gap-4">
            <p>
              I’m a Front-End Developer located in New Delhi. I have a serious
              passion for UI and creating intuitive, dynamic user experiences.
            </p>
            <p>
              Well-organised person, problem solver. Fan of Scifi Movies,
              outdoor activities, Web series and Anime.
            </p>
            <p>
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
            <Link
              href={'/contact'}
              className="text-cyan text-md cursor-pointer"
            >
              Let us make something special
            </Link>
          </div>
          <Tag tagName="</p>" stylesString="xl:ml-5" />
          <Tag tagName="</body>" stylesString="mt-5 xl:ml-5" />
          <Tag tagName="</html>" stylesString="mt-2" />
        </div>
        <div className="w-full h-full lg:w-[50%]  bg-background flex items-center justify-center">
          <div
            id="myCanvasContainer"
            ref={ref}
            className="text-white flex w-full items-center justify-center h-[400px] sm:h-[500px]"
          >
            <canvas
              id="myCanvas"
              onWheel={(e) => e.preventDefault()}
              className=""
              width={500}
              height={500}
            >
              <ul id="tags">
                <li>
                  <a href="https://www.w3schools.com/html/" target="_blank">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_es5.asp"
                    target="_blank"
                  >
                    ES5
                  </a>
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    TypeScript
                  </a>
                </li>
                <li>
                  <a href="https://restfulapi.net/" target="_blank">
                    REST
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/js/js_json_intro.asp"
                    target="_blank"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a href="https://reactjs.org/" target="_blank">
                    React Js
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/" target="_blank">
                    Next Js
                  </a>
                </li>
                <li>
                  <a href="https://graphql.org/" target="_blank">
                    GraphQL
                  </a>
                </li>
                <li>
                  <a href="https://chakra-ui.com/" target="_blank">
                    Chakra UI
                  </a>
                </li>
                <li>
                  <a
                    href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
                    target="_blank"
                  >
                    React Query
                  </a>
                </li>
                <li>
                  <a href="https://v5.reactrouter.com/" target="_blank">
                    React Router
                  </a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/" target="_blank">
                    Node JS
                  </a>
                </li>
                <li>
                  <a href="https://git-scm.com/" target="_blank">
                    Git
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://redux.js.org/introduction/getting-started"
                    target="_blank"
                  >
                    Redux
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/" target="_blank">
                    npm
                  </a>
                </li>
                <li>
                  <a href="https://yarnpkg.com/" target="_blank">
                    yarn
                  </a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
