import logo from "./../../assets/logo.png";
function HomeFirstPage() {
  return (
  <div className="h-64 sm:h-72 md:h-[420px] lg:h-[480px] relative overflow-hidden">
      <img
        src="/src/assets/Picture1.png"
        alt="GDG Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-40 xl:px-56">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 mb-8 justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg p-1">
                  <img
                    src={logo}
                    alt="Google Developers Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-wider uppercase">
                  Google Developers Group
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-3 md:mb-5 text-white leading-tight">
                GDG <span className="font-bold text-yellow-300">ITER</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-3 font-light">
                Institute of Technical Education and Research
              </p>
              <div className="flex items-center gap-2 text-lg text-blue-200 justify-center">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFirstPage;
