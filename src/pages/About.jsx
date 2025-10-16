import React from 'react';

export default function About() {
  return (
    <main className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            About <span className="font-bold text-yellow-300">GDG ITER</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">
            GDG ITER is the local Google Developers Group chapter at the Institute of Technical Education and
            Research. We are a student-run community that brings together developers, designers and tech
            enthusiasts to learn, build and collaborate on practical projects.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">What is GDG?</h2>
          <p className="text-blue-100 leading-relaxed">
            Google Developer Groups (GDGs) are community groups for developers who are interested in Google's
            developer technology — everything from the Android, Firebase, Google Cloud Platform, and beyond.
            GDGs organize events, study groups, and workshops to help developers learn, network, and collaborate
            on real-world projects. They are open to everyone — students, professionals and hobbyists.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">What is GDG ITER?</h2>
          <p className="text-blue-100 leading-relaxed">
            GDG ITER is the campus chapter representing the GDG mission on our campus. We focus on hands-on,
            project-oriented learning tailored to students and early-career developers. Our events are run by
            students and supported by alumni and industry volunteers so members gain both academic and
            practical exposure.
          </p>
          <ul className="mt-4 list-disc list-inside text-blue-100 space-y-2">
            <li><strong>Community-driven:</strong> Events and workshops are organized by student volunteers.</li>
            <li><strong>Project-first:</strong> Every program centers on a deliverable you can add to your portfolio.</li>
            <li><strong>Inclusive:</strong> Beginners and advanced learners are both supported through tracks and mentorship.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Mission & Vision</h2>
          <p className="text-blue-100 leading-relaxed">
            Our mission is to empower the next generation of developers through practical education, peer
            mentorship, and industry collaboration. We envision a community where students gain the skills,
            confidence and connections to build impactful software and hardware projects.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">Core Programs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Workshops & Bootcamps</h3>
              <p className="text-blue-100 text-sm">Structured multi-week courses covering web, mobile, cloud, ML and DevOps, with real project outcomes.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Study Jams & Labs</h3>
              <p className="text-blue-100 text-sm">Small group sessions and lab hours for hands-on practice and debugging support.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Hackathons & Sprints</h3>
              <p className="text-blue-100 text-sm">Intensive events to design and ship prototypes, with mentorship and prizes.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Mentorship & Career Support</h3>
              <p className="text-blue-100 text-sm">1:1 mentoring, code reviews, mock interviews and internship pathways.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Project Incubation</h3>
              <p className="text-blue-100 text-sm">Support for promising student projects: prototyping, testing, and launch guidance.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Speaker Series</h3>
              <p className="text-blue-100 text-sm">Talks and panels from industry engineers, researchers and alumni.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">Facilities & Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Maker Space & Labs</h3>
              <p className="text-blue-100 text-sm">Bookable rooms with high-speed Wi‑Fi, projection, and spaces for hands-on workshops.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Hardware & Loaners</h3>
              <p className="text-blue-100 text-sm">Microcontrollers (Arduino/RPi), mobile devices, and VR kits available for prototyping and testing.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Credits & Tooling</h3>
              <p className="text-blue-100 text-sm">Guidance and sponsored student credits for Google Cloud and other providers to deploy real projects.</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Learning Library</h3>
              <p className="text-blue-100 text-sm">Recorded sessions, slide decks, starter repos and curated reading lists for every program.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Membership & How to Join</h2>
          <p className="text-blue-100 leading-relaxed">
            Membership is open to all students and developers on campus. To join: attend an onboarding session, join our Discord,
            and sign up for upcoming workshops. Volunteers and mentors are always welcome.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Outcomes & Benefits</h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2">
            <li>Portfolio-ready projects and open-source contributions.</li>
            <li>Mentorship, interview prep and internship opportunities.</li>
            <li>Practical experience with cloud, CI/CD, testing and deployment.</li>
            <li>Networking with local industry, alumni and other GDG chapters.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Partners & Industry Collaboration</h2>
          <p className="text-blue-100 leading-relaxed">
            We collaborate with local companies, startups and alumni to bring guest speakers, internship opportunities, and
            real-world problem statements to our workshops and hackathons.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Code of Conduct & Inclusion</h2>
          <p className="text-blue-100 leading-relaxed">
            GDG ITER is committed to an inclusive and respectful community. All events follow a code of conduct designed to
            ensure psychological safety and equal opportunity for all participants. Accessibility accommodations are available
            on request.
          </p>
        </section>

        <footer className="mt-12 text-center">
          <p className="text-blue-100 mb-4">Ready to get involved or have questions?</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/contact" className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition">Contact Us</a>
            <a href="/" className="inline-block border border-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/5 transition">Explore Events</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
