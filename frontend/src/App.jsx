function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-700 text-lg font-bold text-white shadow-sm">
              R
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                RedDrop
              </h1>

              <p className="text-xs text-slate-500">
                Blood Donation Network
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-rose-700"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-rose-700"
            >
              How it Works
            </a>

            <a
              href="#emergency"
              className="text-sm font-medium text-slate-600 transition hover:text-rose-700"
            >
              Emergency Requests
            </a>

            <button className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rose-700 hover:text-rose-700">
              Sign In
            </button>

            <button className="rounded-xl bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800">
              Register
            </button>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <main>

        <section className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-white">

          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-800">
                <span className="h-2 w-2 rounded-full bg-rose-600"></span>
                Connecting donors when every second matters
              </div>

              <h2 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
                A smarter way to
                <span className="text-rose-700"> connect blood donors </span>
                with those in need.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                RedDrop connects blood donors, hospitals, blood banks and
                donation centers through secure digital records, emergency
                donor matching and targeted notifications.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="rounded-xl bg-rose-700 px-7 py-4 font-semibold text-white shadow-lg shadow-rose-700/20 transition hover:-translate-y-0.5 hover:bg-rose-800">
                  Become a Donor
                </button>

                <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50">
                  Hospital / Center Access
                </button>

              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8">

                <div>
                  <p className="text-2xl font-bold text-slate-900">Secure</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Donor information
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">Targeted</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Emergency alerts
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">Digital</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Donation records
                  </p>
                </div>

              </div>

            </div>

            {/* Right card */}
            <div className="relative">

              <div className="absolute -left-14 -top-14 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl"></div>

              <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-900/10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Emergency Blood Request
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      Urgent donor requirement
                    </h3>
                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                    Critical
                  </span>

                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6">

                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                    <div>
                      <p className="text-sm text-slate-500">
                        Blood group
                      </p>

                      <p className="mt-1 text-4xl font-bold text-rose-700">
                        O+
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Units required
                      </p>

                      <p className="mt-1 text-2xl font-bold text-slate-900">
                        3
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 space-y-4 text-sm">

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Location</span>
                      <span className="font-semibold text-slate-800">
                        Nearby verified hospital
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Request type</span>
                      <span className="font-semibold text-slate-800">
                        Emergency
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Donor matching
                      </span>

                      <span className="font-semibold text-emerald-700">
                        Automatic
                      </span>
                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                  <p className="text-sm font-semibold text-emerald-900">
                    Privacy protected
                  </p>

                  <p className="mt-1 text-sm leading-6 text-emerald-700">
                    Matching donors receive targeted alerts without publicly
                    exposing the donor registry.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section
          id="about"
          className="bg-white py-24"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-2xl">

              <p className="font-semibold text-rose-700">
                One connected platform
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                Designed around real blood donation workflows
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Manage donation history, locate opportunities, coordinate
                emergency requests and connect verified organizations with
                suitable donors.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <FeatureCard
                title="Digital Donation Records"
                description="Donors can securely access their verified donation history without depending only on physical records."
              />

              <FeatureCard
                title="Emergency Matching"
                description="Verified organizations can create blood requests while the backend identifies appropriate donors."
              />

              <FeatureCard
                title="Targeted Notifications"
                description="Alerts are sent according to blood group, location, eligibility and notification preferences."
              />

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


function FeatureCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 h-11 w-11 rounded-xl bg-rose-100"></div>

      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

    </article>
  );
}


export default App;