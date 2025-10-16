function HomeAbout() {
  return (
    <div className="bg-[#f0f0f0] rounded-2xl p-3 sm:p-4 mb-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 transition-all duration-300">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
          <span className="text-amber-600 mr-3">About Us</span>
        </h3>
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
          At GDG on Campus ITER, we are more than just a community — we are a
          movement of dreamers, builders, and innovators. Powered by Google
          Developers, we stand at the intersection of ideas and impact, bringing
          together students, developers, and creators who dare to think beyond the
          ordinary.
        </p>
  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We believe in learning by doing, growing by sharing, and leading by
          inspiring. From classrooms to hackathons, from meetups to mega events —
          we transform curiosity into creation and passion into progress.
        </p>
      </div>
    </div>
  );
}

export default HomeAbout
