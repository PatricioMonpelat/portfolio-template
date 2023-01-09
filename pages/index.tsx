import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { GetStaticProps } from "next";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#14FFEC]/80'>
      <Head>
        <title>Portfolio Template</title>
        <meta name='description' content='nextjs portfolio template' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* HEADER */}
      <Header socials={socials} />

      {/* HERO */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* about */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      {/* experience  */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>
      {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      {/* contact me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpIcon className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 animate-bounce' />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
