import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Info } from 'lucide-react';

const AppleTimeline = () => {
  // Timeline data
  const timelineData = [
    {
      year: 1984,
      title: "Macintosh with GUI",
      description: "Introduced the graphical user interface to the mass market, making computers more intuitive and accessible.",
      category: "User Experience",
      icon: "💻"
    },
    {
      year: 1987,
      title: "HyperCard",
      description: "Early multimedia authoring tool that allowed non-programmers to create interactive applications.",
      category: "User Experience",
      icon: "🃏"
    },
    {
      year: 1991,
      title: "System 7",
      description: "Improved multitasking capabilities and introduced virtual memory management.",
      category: "User Experience",
      icon: "📊"
    },
    {
      year: 1997,
      title: "Mac OS 8",
      description: "Redesigned interface with platinum appearance, contextual menus, and spring-loaded folders.",
      category: "User Experience",
      icon: "🖥️"
    },
    {
      year: 1998,
      title: "iMac",
      description: "All-in-one design with USB ports that simplified setup and eliminated complexity.",
      category: "User Experience",
      icon: "🖥️"
    },
    {
      year: 2001,
      title: "Mac OS X",
      description: "Unix-based architecture with protected memory and improved security model.",
      category: "Security",
      icon: "🔒"
    },
    {
      year: 2001,
      title: "iPod with Click Wheel",
      description: "Revolutionary interface that simplified music navigation and playback.",
      category: "User Experience",
      icon: "🎵"
    },
    {
      year: 2003,
      title: "iTunes Store",
      description: "Made digital music purchases simple and legal, with a user-friendly interface.",
      category: "User Experience",
      icon: "🛒"
    },
    {
      year: 2007,
      title: "iPhone Multi-touch Interface",
      description: "Natural gesture-based interface that transformed mobile interaction.",
      category: "User Experience",
      icon: "📱"
    },
    {
      year: 2007,
      title: "iPhone App Sandboxing",
      description: "Security architecture that isolated apps from each other and system resources.",
      category: "Security",
      icon: "🔐"
    },
    {
      year: 2008,
      title: "App Store",
      description: "Centralized marketplace that made discovering and installing software safe and easy.",
      category: "User Experience",
      icon: "📲"
    },
    {
      year: 2010,
      title: "iPad",
      description: "Expanded the touch interface paradigm to a larger screen format.",
      category: "User Experience",
      icon: "📱"
    },
    {
      year: 2011,
      title: "iCloud",
      description: "Seamless sync across all Apple devices, making data accessible everywhere.",
      category: "User Experience",
      icon: "☁️"
    },
    {
      year: 2013,
      title: "Touch ID",
      description: "Fingerprint authentication that made device security convenient.",
      category: "Security",
      icon: "👆"
    },
    {
      year: 2013,
      title: "iOS 7 Redesign",
      description: "Major visual overhaul with flat design principles and improved usability.",
      category: "User Experience",
      icon: "🎨"
    },
    {
      year: 2014,
      title: "Continuity Features",
      description: "Handoff, Universal Clipboard, and other features for seamless workflow across devices.",
      category: "User Experience",
      icon: "🔄"
    },
    {
      year: 2015,
      title: "Apple Watch",
      description: "Extended the Apple ecosystem to wearables with health and convenience features.",
      category: "User Experience",
      icon: "⌚"
    },
    {
      year: 2016,
      title: "Apple Pay",
      description: "Secure, private payment system with tokenization and biometric verification.",
      category: "Security",
      icon: "💳"
    },
    {
      year: 2017,
      title: "Face ID",
      description: "Advanced facial recognition for secure authentication with attention awareness.",
      category: "Security",
      icon: "👤"
    },
    {
      year: 2018,
      title: "Screen Time",
      description: "Tools for digital wellbeing and parental controls to monitor and limit device usage.",
      category: "User Experience",
      icon: "⏱️"
    },
    {
      year: 2019,
      title: "Sign in with Apple",
      description: "Privacy-preserving authentication system that prevents tracking across apps and websites.",
      category: "Security",
      icon: "🔑"
    },
    {
      year: 2020,
      title: "Apple Silicon",
      description: "Custom processors delivering enhanced performance, efficiency, and security features.",
      category: "User Experience",
      icon: "⚡"
    },
    {
      year: 2021,
      title: "App Tracking Transparency",
      description: "Required user permission for apps to track activity across other apps and websites.",
      category: "Security",
      icon: "🛑"
    },
    {
      year: 2022,
      title: "Lockdown Mode",
      description: "Extreme protection for users who may be targeted by sophisticated digital threats.",
      category: "Security",
      icon: "🛡️"
    },
    {
      year: 2023,
      title: "Enhanced Privacy Features",
      description: "Communication safety features, Private Relay improvements, and password protection.",
      category: "Security",
      icon: "🔒"
    },
    {
      year: 2024,
      title: "Apple Intelligence",
      description: "On-device AI features with privacy-first approach to personal data processing.",
      category: "Security",
      icon: "🧠"
    }
  ];

  // State for filtering and navigation
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [detailView, setDetailView] = useState(null);
  
  // Filter timeline data
  const filteredData = filter === "All" 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);
    
  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );
  
  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Detail view handler
  const showDetail = (item) => {
    setDetailView(item);
  };
  
  const closeDetail = () => {
    setDetailView(null);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-center mb-6">Apple's Innovation Timeline</h1>
      
      {/* Filter controls */}
      <div className="flex justify-center mb-6 gap-2">
        <button 
          onClick={() => {setFilter("All"); setCurrentPage(0);}} 
          className={`px-4 py-2 rounded-full ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        <button 
          onClick={() => {setFilter("User Experience"); setCurrentPage(0);}} 
          className={`px-4 py-2 rounded-full ${filter === "User Experience" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          User Experience
        </button>
        <button 
          onClick={() => {setFilter("Security"); setCurrentPage(0);}} 
          className={`px-4 py-2 rounded-full ${filter === "Security" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Security
        </button>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        
        {/* Timeline items */}
        <div className="flex flex-col space-y-8">
          {currentItems.map((item, index) => (
            <div key={`${item.year}-${item.title}`} className="relative flex items-center">
              {/* Year marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 ${item.category === "User Experience" ? "bg-green-500" : "bg-red-500"}`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8 text-right" : "ml-auto pl-8"}`}>
                <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => showDetail(item)}>
                  <div className="font-bold text-lg">{item.year}: {item.title}</div>
                  <div className="text-sm text-gray-600">{item.description.substring(0, 75)}...</div>
                  <div className={`mt-2 inline-block px-2 py-1 rounded-full text-xs text-white ${item.category === "User Experience" ? "bg-green-500" : "bg-red-500"}`}>
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          className={`flex items-center px-4 py-2 rounded ${currentPage === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        >
          <ChevronLeft size={16} className="mr-1" /> Previous
        </button>
        <div className="text-center">
          Page {currentPage + 1} of {totalPages}
          <div className="text-sm text-gray-500">
            Showing {currentItems.length} of {filteredData.length} innovations
          </div>
        </div>
        <button 
          onClick={nextPage} 
          disabled={currentPage >= totalPages - 1}
          className={`flex items-center px-4 py-2 rounded ${currentPage >= totalPages - 1 ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        >
          Next <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      
      {/* Detail modal */}
      {detailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {detailView.year}: {detailView.title}
              </h2>
              <button onClick={closeDetail} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm text-white mb-4 ${detailView.category === "User Experience" ? "bg-green-500" : "bg-red-500"}`}>
              {detailView.category}
            </div>
            <p className="text-gray-700 mb-4">{detailView.description}</p>
            <div className="text-6xl text-center my-4">{detailView.icon}</div>
            <button 
              onClick={closeDetail}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppleTimeline;
