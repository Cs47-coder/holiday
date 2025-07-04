import { useState, useEffect } from 'react';
import { Database, TrendingUp, Award, Heart, Star, Code } from 'lucide-react';

function App() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const messages = [
    "Congratulations on completing your exams! 🎉",
    "You've conquered algorithms and data! 💪",
    "Time to celebrate your achievements! 🌟",
    "Wishing you wonderful holidays! 🎄"
  ];

  useEffect(() => {
    if (isTyping && currentIndex < messages.length) {
      const currentMessage = messages[currentIndex];
      if (displayText.length < currentMessage.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          if (currentIndex < messages.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setDisplayText('');
          } else {
            setIsTyping(false);
            // Show content after typing animation completes
            setTimeout(() => setShowContent(true), 500);
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, currentIndex, isTyping, messages]);

  const achievements = [
    { icon: TrendingUp, title: "Data Analysis", desc: "Transformed raw data into insights" },
    { icon: Database, title: "Machine Learning", desc: "Built predictive models that work" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-slate-900/90"></div>
      </div>

      {/* Animated Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-10 w-32 h-32 md:w-72 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-32 h-32 md:w-72 md:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-3 sm:p-6">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-12 w-full max-w-4xl">
          <div className="flex items-center justify-center mb-4 sm:mb-6 flex-wrap">
            <Award className="w-8 h-8 sm:w-12 md:w-16 sm:h-12 md:h-16 text-yellow-400 mr-2 sm:mr-4 animate-bounce" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Congratulations!
            </h1>
            <Award className="w-8 h-8 sm:w-12 md:w-16 sm:h-12 md:h-16 text-yellow-400 ml-2 sm:ml-4 animate-bounce animation-delay-1000" />
          </div>
          
          {/* Typing Animation */}
          <div className="h-16 sm:h-20 flex items-center justify-center px-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium min-h-[2rem] sm:min-h-[3rem] flex items-center text-center leading-tight">
              <span className="break-words">{displayText}</span>
              <span className="ml-1 sm:ml-2 w-0.5 h-6 sm:h-8 bg-cyan-400 animate-pulse flex-shrink-0"></span>
            </p>
          </div>
        </div>

        {/* Content appears after typing animation */}
        {showContent && (
          <>
            {/* You Did It Box - First to appear */}
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 w-full max-w-4xl mx-2 mb-8 sm:mb-12 animate-fade-in">
              <Heart className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-pink-400 mx-auto mb-3 sm:mb-4 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                You Did It! 🎯
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                Your dedication to mastering Data Science and Machine Learning has paid off. 
                You've not just learned algorithms and models – you've developed the mindset to solve tomorrow's challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 px-2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base">
                  Exam Champions
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base">
                  Future Innovators
                </span>
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base">
                  Data Wizards
                </span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Enjoy your well-deserved holidays! 🌟✨
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 w-full max-w-4xl px-2 animate-slide-up">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <achievement.icon className="w-10 h-10 sm:w-12 md:w-16 sm:h-12 md:h-16 text-cyan-400 mb-3 sm:mb-4 md:mb-6 mx-auto" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">{achievement.title}</h3>
                  <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg leading-relaxed">{achievement.desc}</p>
                </div>
              ))}
            </div>

            {/* Motivational Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 w-full max-w-6xl px-2 animate-slide-up animation-delay-1000">
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="AI Technology" 
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-2 sm:p-3 md:p-4 font-semibold text-sm sm:text-base">Algorithm Masters</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Data Science" 
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-2 sm:p-3 md:p-4 font-semibold text-sm sm:text-base">Data Storytellers</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <img 
                  src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Machine Learning" 
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-2 sm:p-3 md:p-4 font-semibold text-sm sm:text-base">Future Predictors</p>
                </div>
              </div>
            </div>

            {/* Footer - From Castor */}
            <div className="mt-8 sm:mt-12 text-center w-full max-w-2xl px-2 animate-fade-in animation-delay-2000">
              <div className="flex items-center justify-center mb-3 sm:mb-4 flex-wrap">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center">
                  From your fellow Frontend & ML Engineer student,
                </p>
              </div>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                Castor ....💝 <br/>
                NeuroNest CEO
              </p>
              <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 md:w-6 sm:h-5 md:h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;