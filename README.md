SeatMate is a React-based web application designed to help passengers choose a seatmate based on specific preferences and previous travel history.

# Features
Preferences-Based Seat Selection: Users can toggle preferences like quiet environments, extra legroom, or eating during flights to find the most compatible seatmate.

Seat Map Display: Visual representation of available seats and their respective characteristics based on user preferences.

Real-Time Chat: Once matched with a seatmate, users can chat with them directly within the app.

# Similarity Calculation
The seatmate matching algorithm uses a basic word-based similarity calculation to compare user preferences. 
## How it Works:
Input: It takes two strings (user preferences) as input.

Lowercase Conversion: Both preference strings are converted to lowercase to ensure case-insensitive matching.
Tokenization: The strings are split into arrays of words (tokens), breaking them apart at spaces. For example, "quiet environment socializing" becomes ["quiet", "environment", "socializing"].

Common Words Matching: It finds common words between the two arrays by comparing each word in the first array to see if it appears in the second array. The shared words are collected.

Similarity Score Calculation: The similarity score is calculated by dividing the number of common words by the length of the longer array. This score ranges from 0 (no common words) to 1 (all words are common).
