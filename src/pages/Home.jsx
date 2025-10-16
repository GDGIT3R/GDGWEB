import HomeAbout from "../features/home/homeAbout";
import HomeFirstPage from "../features/home/HomeFirstPage";
import HomeInfoPage from "../features/home/HomeInfoPage";
import HomeLbc from "../features/home/HomeLbc";
import HomeOurWork from "../features/home/HomeOurWork";
import HomeSessions from "../features/home/HomeSessions";

const HomeSection = () => {
  return (
  <section className="min-h-screen bg-gradient-to-br from-indigo-400 to-indigo-200  via-indigo-600 text-white">
      <div className="relative">
        <HomeFirstPage />
        <HomeLbc />
      </div>
      <HomeInfoPage />
      {/* About Us Section */}
      <div className="py-12 container mx-auto px-8 md:px-16 lg:px-28 xl:px-36 bg-[#f0f0f0] rounded-2xl">
        <div>
          <HomeAbout />
          <HomeOurWork />
        </div>
      </div>
      {/* Stats Section */}
      <HomeSessions />
    </section>
  );
};

export default HomeSection;
