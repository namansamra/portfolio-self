import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';
import MySkillsPage from '../components/MySkillsPage';
import WorkPage from '../components/WorkPage';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full gap-[100px]">
        <MainPage showScrollDown={true} />
        <AboutPage />
        <MySkillsPage />
        <WorkPage />
        <ContactPage />
      </div>
    </Layout>
  );
}
