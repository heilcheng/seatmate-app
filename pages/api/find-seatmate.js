import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

let model;

const initializeModel = async () => {
  if (!model) {
    try {
      // Try loading the lite version first
      model = await use.load();
      console.log('Lite model loaded successfully');
    } catch (error) {
      console.warn('Failed to load lite model, trying full model:', error);
      try {
        // If lite version fails, try the full version
        model = await use.load();
        console.log('Full model loaded successfully');
      } catch (fullModelError) {
        console.error('Failed to load both models:', fullModelError);
        // If both fail, use a simple fallback
        model = {
          embed: (text) => tf.tensor([Array(512).fill(Math.random())]) // Random 512-dim vector
        };
        console.log('Using fallback random embedding');
      }
    }
  }
};

// Simulated database of available seats with predefined preferences
const seats = {
  '1B': "I like to enjoy a quiet environment and sleep during the flight.",
  '2C': "I like to socialize and eat during the flight.",
  '3D': "I like to have extra legroom and work during the flight.",
  '4A': "I like to sit by the window for the view and read during the flight.",
  '5F': "I like to lay down comfortably and watch movies during the flight.",
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Received POST request');
    const { preferences } = req.body;
    console.log('Received preferences:', preferences);

    // Simple word matching similarity function
    const calculateSimilarity = (pref1, pref2) => {
      const words1 = pref1.toLowerCase().split(' ');
      const words2 = pref2.toLowerCase().split(' ');
      const commonWords = words1.filter(word => words2.includes(word));
      return commonWords.length / Math.max(words1.length, words2.length);
    };

    const seats = {
      '1B': "Aisle seat. You can have extra legroom. Your seatmate like to enjoy a quiet environment and would like to eat during the flight.",
      '2C': "Aisle seat. The passenger behind allow you to lay down. Your seatmate like to socialize.",
      '3D': "Window seat. You can have a extra legroom. Your seatmate like to sleep during the flight.",
    };

    const seatMap = Object.entries(seats).map(([seatNumber, seatDescription]) => ({
      seatNumber,
      compatibility: calculateSimilarity(preferences, seatDescription),
      available: true,
      description: seatDescription,
      price: Math.floor(Math.random() * 50) + 50,
    }));

    seatMap.sort((a, b) => b.compatibility - a.compatibility);

    console.log('Returning seat map:', seatMap);
    res.status(200).json({ seatMap });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}