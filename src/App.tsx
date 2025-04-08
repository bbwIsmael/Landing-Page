import React from 'react';
import { Cloud, Sun, Smartphone, Download, CloudRain, Wind } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Weather Radar</span>
          </div>
          <div>
            <a
                href="https://expo.dev/artifacts/eas/guUsejRVi48Uh7DGWbDMWe.apk"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-sm transition flex items-center gap-2"
                download
            >
              <Download className="h-5 w-5"/>
              Download
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Personal Weather Companion
            </h1>
            <p className="text-xl text-white/90">
              Experience weather forecasting like never before. Get real-time updates, accurate predictions, and severe weather alerts all in one beautiful app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                  href="https://expo.dev/artifacts/eas/guUsejRVi48Uh7DGWbDMWe.apk"
                  className="group flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg hover:shadow-xl"
                  download
              >
                <Download className="h-5 w-5 group-hover:animate-bounce"/>
                Download App
              </a>

            </div>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User"
                     className="w-8 h-8 rounded-full border-2 border-white"/>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span>Trusted by 100k+ users worldwide</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?auto=format&fit=crop&w=800&q=80"
                alt="Weather App Interface"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <Sun className="h-8 w-8 text-yellow-300" />
                  <div>
                    <p className="text-white font-semibold">Sunny</p>
                    <p className="text-white/90">24°C</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <CloudRain className="h-8 w-8 text-blue-200" />
                  <div>
                    <p className="text-white font-semibold">Rain Expected</p>
                    <p className="text-white/90">Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Beautiful Design, Powerful Features</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience weather forecasting with our intuitive and elegant interface
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
          <div className="transform hover:-translate-y-2 transition duration-300">
            <div className="bg-gray-900 rounded-[2.5rem] p-4 border-[14px] border-gray-900 shadow-xl">
              <img 
                src="/1st-view.png"
                alt="Weather Home Screen" 
                className="w-[250px] rounded-[1.5rem]"
              />
            </div>
          </div>
          <div className="transform hover:-translate-y-2 transition duration-300 -mt-12 lg:mt-24">
            <div className="bg-gray-900 rounded-[2.5rem] p-4 border-[14px] border-gray-900 shadow-xl">
              <img 
                src="/2nd-view.png"
                alt="Weather Forecast Screen" 
                className="w-[250px] rounded-[1.5rem]"
              />
            </div>
          </div>
          <div className="transform hover:-translate-y-2 transition duration-300">
            <div className="bg-gray-900 rounded-[2.5rem] p-4 border-[14px] border-gray-900 shadow-xl">
              <img 
                src="/3rd-view.png"
                alt="Weather Settings Screen" 
                className="w-[250px] rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Weather Radar?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get all the weather information you need in one beautiful, easy-to-use app.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <Smartphone className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Updates</h3>
            <p className="text-white/80">Receive instant notifications about weather changes in your area.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <Sun className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Daily Forecast</h3>
            <p className="text-white/80">Plan ahead with accurate daily weather predictions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <Wind className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Detailed Analysis</h3>
            <p className="text-white/80">Get comprehensive weather data including wind, humidity, and more.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Weather Forecasting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Weather Radar for their daily weather updates.
          </p>
          <a
              href="https://expo.dev/artifacts/eas/guUsejRVi48Uh7DGWbDMWe.apk"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg hover:shadow-xl"
              download
          >
            <Download className="h-5 w-5"/>
            Download Now
          </a>

        </div>
      </section>
    </div>
  );
}

export default App;