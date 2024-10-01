import React, { useState, useEffect, useCallback } from 'react';
import { Plane, Users, Star, ChevronRight, User, Bell, Check, ArrowLeft, MapPin, DollarSign, MessageCircle } from 'lucide-react';

const SeatMateSelection = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [preferences, setPreferences] = useState({});
  const [previousDestinations, setPreviousDestinations] = useState([]);
  const [shareDestinations, setShareDestinations] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [additionalPreferences, setAdditionalPreferences] = useState('');
  const [seatMap, setSeatMap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);

  const preferenceOptions = ['enjoy a quiet environment.', 'socialize.', 'sleep during the flight.', 'eat during the flight.', 'lay down comfortably.', 'have extra legroom.', 'sit by the window for the view.'];

  const handlePreferenceToggle = (pref) => {
    setPreferences(prev => ({ ...prev, [pref]: !prev[pref] }));
  };

  const handleAddDestination = (event) => {
    event.preventDefault();
    const newDestination = event.target.destination.value;
    if (newDestination) {
      setPreviousDestinations([...previousDestinations, newDestination]);
      event.target.destination.value = '';
    }
  };

  const handleFindSeatmate = useCallback(async () => {
    setIsLoading(true);
    const userPreferences = Object.entries(preferences)
      .filter(([_, value]) => value)
      .map(([key, _]) => `I like to ${key}`)
      .join('. ');

    const fullPreferences = `${userPreferences}. ${additionalPreferences}`.trim();

    try {
      const response = await fetch('/api/find-seatmate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          preferences: fullPreferences,
          previousDestinations: previousDestinations,
          shareDestinations: shareDestinations
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch seat map');
      }

      const data = await response.json();
      setSeatMap(data.seatMap);
      setCurrentScreen('seatSelection');
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false);
    }
  }, [preferences, additionalPreferences, previousDestinations, shareDestinations]);

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
    setSelectedSeatInfo(seatMap.find(s => s.seatNumber === seat));
  };

  const handleConfirmSeat = () => {
    if (selectedSeat) {
      setCurrentScreen('chat');
    }
  };

  const getCompatibilityColor = (compatibility, allCompatibilities) => {
    const sortedCompatibilities = [...allCompatibilities].sort((a, b) => b - a);
    if (compatibility === sortedCompatibilities[0]) return 'bg-green-500';
    if (compatibility === sortedCompatibilities[1]) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const renderHome = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-400">SeatMate.ai</h1>
        <button className="bg-green-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
          Sign In
        </button>
      </div>

      <div className="text-center mb-10">
        <Plane className="text-green-400 w-20 h-20 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Find Your Perfect Seatmate</h2>
        <p className="text-gray-400">Enhance your flight experience with a compatible travel companion</p>
      </div>

      <div className="space-y-4 mb-8">
        <FeatureCard 
          icon={<Users className="text-green-400" />}
          title="Smart Matching"
          description="Get paired with like-minded travelers based on your preferences"
        />
        <FeatureCard 
          icon={<Star className="text-green-400" />}
          title="Personalized Seating"
          description="Choose your ideal seat with our interactive seat map"
        />
      </div>

      <div className="space-y-3">
        <button 
          onClick={() => setCurrentScreen('matching')}
          className="w-full bg-green-400 text-gray-900 py-3 rounded-full font-bold hover:bg-green-500 transition duration-300 flex items-center justify-center"
        >
          Start Your Journey
          <ChevronRight className="ml-2" size={20} />
        </button>
        <button className="w-full bg-gray-800 text-green-400 py-3 rounded-full font-bold hover:bg-gray-700 transition duration-300">
          Learn More
        </button>
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © 2024 SeatMate.ai. All rights reserved.
      </p>
    </div>
  );

  const renderMatching = () => (
    <div className="p-6">
      <button onClick={() => setCurrentScreen('home')} className="text-green-400 mb-4">
        <ArrowLeft size={24} />
      </button>
      
      <h2 className="text-xl text-green-400 mb-6">Alex, set your preferences</h2>
      <div className="mb-6 space-y-3">
        {preferenceOptions.map((pref) => (
          <button
            key={pref}
            className={`w-full py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-between transition duration-300 ${
              preferences[pref] ? 'bg-green-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => handlePreferenceToggle(pref)}
          >
            I like to {pref}
            {preferences[pref] && <Check size={18} />}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-2">Additional Preferences</h3>
        <textarea
          value={additionalPreferences}
          onChange={(e) => setAdditionalPreferences(e.target.value)}
          placeholder="Any other preferences or requests? (e.g., dietary restrictions, languages spoken)"
          className="w-full bg-gray-700 text-white rounded-lg p-3 h-24 resize-none"
        />
      </div>
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-2">Previous Flight Destinations</h3>
        <form onSubmit={handleAddDestination} className="flex mb-2">
          <input
            type="text"
            name="destination"
            placeholder="Add a destination"
            className="flex-grow bg-gray-700 text-white rounded-l-lg p-2"
          />
          <button type="submit" className="bg-green-400 text-gray-900 rounded-r-lg px-4 py-2">Add</button>
        </form>
        <div className="flex flex-wrap gap-2">
          {previousDestinations.map((dest, index) => (
            <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
              {dest}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          id="shareDestinations"
          checked={shareDestinations}
          onChange={() => setShareDestinations(!shareDestinations)}
          className="mr-2"
        />
        <label htmlFor="shareDestinations" className="text-white">Share my previous destinations for better matching</label>
      </div>
      <button 
        onClick={handleFindSeatmate}
        disabled={isLoading}
        className="w-full bg-green-400 text-gray-900 py-3 rounded-full font-bold hover:bg-green-500 transition duration-300"
      >
       {isLoading ? 'Finding...' : 'Find My Ideal Seat'}
      </button>
    </div>
  );

  const renderSeatSelection = () => {
    if (!seatMap) return null;
  
    const compatibilities = seatMap.map(seat => seat.compatibility);
    const bestSeat = seatMap.reduce((prev, current) => (prev.compatibility > current.compatibility) ? prev : current);
  
    return (
      <div className="p-6">
        <button onClick={() => setCurrentScreen('matching')} className="text-green-400 mb-4">
          <ArrowLeft size={24} />
        </button>
        
        <h2 className="text-xl font-bold text-green-400 mb-6">Select Your Seat</h2>
  
        {/* Best Seat Recommendation */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <h3 className="text-white font-semibold mb-2">Recommended Seat</h3>
          <p className="text-green-400 text-2xl font-bold mb-2">The best match for you is... {bestSeat.seatNumber}!</p>
          <p className="text-gray-400 mb-2">{bestSeat.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-400">Original price: ${bestSeat.price}</p>
            <p className="text-green-400 font-bold">Your price: ${(bestSeat.price * 0.9).toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-500 mt-1">10% discount applied for using SeatMate.ai!</p>
        </div>
  
        {/* Seat Map */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['A', 'B', 'C', 'D'].map(col => (
              <div key={col} className="text-center text-gray-400">{col}</div>
            ))}
            {[1, 2, 3].map(row => (
              <React.Fragment key={row}>
                {['A', 'B', 'C', 'D'].map(col => {
                  const seatKey = `${row}${col}`;
                  const seatInfo = seatMap.find(s => s.seatNumber === seatKey);
                  const isAvailable = seatInfo !== undefined;
                  return (
                    <button 
                      key={seatKey}
                      className={`w-full h-10 rounded-lg flex items-center justify-center text-white text-sm font-semibold transition duration-300 ${
                        isAvailable
                          ? `${getCompatibilityColor(seatInfo.compatibility, compatibilities)} hover:opacity-80 ${selectedSeat === seatKey ? 'ring-2 ring-white' : ''}` 
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                      disabled={!isAvailable}
                      onClick={() => isAvailable && setSelectedSeat(seatKey)}
                    >
                      {seatKey}
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          {selectedSeat && (
            <div className="mt-4 space-y-2">
              <p className="text-white font-semibold">Selected Seat Information:</p>
              <p className="text-gray-400">{seatMap.find(s => s.seatNumber === selectedSeat).description}</p>
              <button 
                onClick={() => setCurrentScreen('chat')}
                className="w-full bg-green-400 text-gray-900 py-2 rounded-full font-bold hover:bg-green-500 transition duration-300 mt-4"
              >
                Confirm Seat Selection
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const seatmateResponses = [
    "Nice to meet you! I'm looking forward to our flight together.",
    "Have you flown with this airline before? I find their service quite good.",
    "Do you have any exciting plans at our destination?",
    "I hope we have a smooth flight today. The weather looks good from what I've checked.",
    "Feel free to let me know if you need to get up during the flight. I'm happy to accommodate.",
    "Do you prefer to chat during flights or keep to yourself? I'm fine either way!",
    "I always enjoy meeting new people on flights. It makes the journey more interesting!",
  ];

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'You', text: currentMessage }]);
      setCurrentMessage('');
      
      // Simulate seatmate response after a short delay
      setTimeout(() => {
        if (responseIndex < seatmateResponses.length) {
          setChatMessages(prevMessages => [...prevMessages, { sender: 'Seatmate', text: seatmateResponses[responseIndex] }]);
          setResponseIndex(responseIndex + 1);
        } else {
          setChatMessages(prevMessages => [...prevMessages, { sender: 'Seatmate', text: "It's been great chatting with you! Let's relax and enjoy the rest of our flight." }]);
        }
      }, 1000);
    }
  };

  const renderChat = () => (
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setCurrentScreen('seatSelection')} className="text-green-400">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-green-400">Chat with Your Seatmate! {selectedSeat}</h2>
        <div className="w-6"></div>
      </div>

      <div className="flex-grow overflow-y-auto mb-4 space-y-4 bg-gray-800 rounded-xl p-4">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 p-3 rounded-lg ${msg.sender === 'You' ? 'bg-green-400 text-gray-900' : 'bg-gray-700 text-white'}`}>
              <p className="font-semibold">{msg.sender}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input 
          type="text" 
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow bg-gray-700 text-white rounded-l-lg p-2"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage}
          className="bg-green-400 text-gray-900 rounded-r-lg px-4 py-2 font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        {currentScreen === 'home' && renderHome()}
        {currentScreen === 'matching' && renderMatching()}
        {currentScreen === 'seatSelection' && renderSeatSelection()}
        {currentScreen === 'chat' && renderChat()}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 rounded-xl p-4 flex items-start">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

export default SeatMateSelection;