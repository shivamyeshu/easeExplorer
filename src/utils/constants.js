export const HERO = {
  title: " Hi, I'm Ease Explorer, your personal travel agent",
  titleDescription:
    " Get custom travel plans that match your style, interests, and budget. Explore destinations and experiences just for you.",
  buttonLable: "Start Planning Your Trip for Free",
};

export const ABOUT_TEXT = {
  title: "Plan smarter, travel better with AI",
  buttonLable: "Plan a new trip",
  description:
    " Meet EaseExplorer, your personal AI travel companion. From must-see destinations to perfect stays, flights, and road trips, here to make vacation planning a breeze. With EaseExplorer, forget the chaos of managing multiple tabs and apps—this is the only travel tool you’ll need. Simply ask EaseExplorer for personalized destination ideas and let her craft the perfect itinerary tailored to your style and budget. Discover exclusive content from travel experts you’ll love, and watch as your customized travel plan takes shape, ensuring every moment of your trip is unforgettable.",
};

export const TESTIMONIALS = {
  title: "Sweet Words from Happy Travelers about EaseExplorer",
  review1:
    "This app made planning my trip so effortless! The AI-powered itinerary suggestions were spot on, and the hotel options were perfectly suited to my budget. A must-have for every traveler!",
  review2:
    "I love how intuitive and easy-to-use this app is. It took care of all the little details, from sightseeing spots to restaurant recommendations. The trip was smooth and enjoyable because of it.",
  review3:
    "'Simplify Your Adventure' isn't just a tagline; it's a reality. This app helped me discover hidden gems in the city that I wouldn't have found otherwise. Highly recommend it for personalized travel planning.",
  review4:
    "I was skeptical at first, but this app exceeded my expectations. The detailed itineraries and seamless hotel bookings made my trip stress-free. Kudos to the developers!",
  review5:
    "From the beautiful UI to the super helpful suggestions, this app is a traveler's best friend. It even recommended lesser-known places to visit that made my trip unforgettable!",
};

export const CREATE_TRIP = {
  title: "Ready for your next great escape? 🌅✈️",
  titleDescription:
    "Tell us your dream destination, and let us plan a perfect getaway for you.",
  destinantionLabel: "What is destination of choice?",
  timeLineLabel: "Set Your Travel Timeline",
  noOfPeopleLabel: "Who Are You Traveling With ?",
  budgetLabel: "What is Your Budget?",
  signInLabel: "Sign In with Google",
  signInDescription: "Sign in to the app with Google authentication securely",
  noOfDaysError: "Please plan a trip less than 10 days",
  fillAllTheDeatilsError: "Please fill the necessary details.",
  noOfDays: "{noOfDays}",
  noOfPeople: "{noOfPeople}",
  budget: "{budget}",
};
export const SELECT_TRAVEL_LIST = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "A sole traveles in exploration",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A Group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "👯‍♂️",
    people: "more than 5 People",
  },
];

export const SELECT_BUDGET_OPTIONS = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of cost",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the cost",
    icon: "💸",
  },
];

export const GENERATE_TRIP_PROMPT =
  "Generate Travel Plan for Location : {location}, for {noOfDays} Days for {noOfPeople} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel for each of the location for {noOfDays} with each day plan with best time to visit in JSON format and itinerary in Array format";
export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=2000&maxWidthPx=2000&key=AIzaSyCYJiw6Cf4JEQ_ybTzw9iXwBZOtKIKYl3s";

export const FOOTER_DESCRIPTION = "© 2024 All right reserved by Shivamyeshu";
