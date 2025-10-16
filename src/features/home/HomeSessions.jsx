function HomeSessions() {
  return (
    <div className="py-8 md:py-12 bg-[#f0f0f0]">
      <div className="container mx-auto px-6 md:px-16 lg:px-28 xl:px-36">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="text-gray-900 bg-white rounded-xl p-3 sm:p-5 shadow">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-gray-700">Active Members</div>
            </div>
            <div className="text-gray-900 bg-white rounded-xl p-3 sm:p-5 shadow">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1">50+</div>
              <div className="text-gray-700">Events Hosted</div>
            </div>
            <div className="text-gray-900 bg-white rounded-xl p-3 sm:p-5 shadow">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">20+</div>
              <div className="text-gray-700">Workshops</div>
            </div>
            <div className="text-gray-900 bg-white rounded-xl p-3 sm:p-5 shadow">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-gray-700">Years Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSessions
