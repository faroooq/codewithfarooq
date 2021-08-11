const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAOSxxl6neaMWK7k1JjpF4J6LPHgKZrvLc",
  authDomain: "codewithfarooq.firebaseapp.com",
  databaseURL: "https://codewithfarooq-default-rtdb.firebaseio.com",
  projectId: "codewithfarooq",
  storageBucket: "codewithfarooq.appspot.com",
  messagingSenderId: "278757395319",
  appId: "1:278757395319:web:2fdba06d1aab0e60fdef72",
  measurementId: "G-2T4JCYM9GZ",
});

var db = firebase.firestore();

var menu = [
    {
      course_id: 1001,
      course_name: "Master HTML & CSS Series",
      topics: [
        {
          topic_id: 1,
          topic_name: "Getting Started",
          lesson: [
            {
              lesson_id: 1,
              lesson_name: "Introduction",
              lesson_duration: "1:40",
              youtube_url: "fLr-oigWK3Y"
            }
          ]
        },
        {
          topic_id: 2,
          topic_name: "Web Development Fundementals",
          lesson: [
            {
              lesson_id: 1,
              lesson_name: "Web Technologies",
              lesson_duration: "2:48",
              youtube_url: "RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Install VSCode Editor",
              lesson_duration: "2:33",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "How the web works",
              lesson_duration: "2:30",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "How the web works - In Action",
              lesson_duration: "3:50",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Chrome Dev Tools",
              lesson_duration: "3:49",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "First Html Page",
              lesson_duration: "5:28",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "CSS Basics in Action",
              lesson_duration: "7:39",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Dom & Inspecting Pages",
              lesson_duration: "4:54",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            }
          ]
        }
      ]
    }
  ]
  ;

menu.forEach(function (obj) {
  db.collection("courses-details")
    .add({
        course_id: 1001,
      course_name: "Master HTML & CSS Series",
      topics: [
        {
          topic_id: 1,
          topic_name: "Getting Started",
          lesson: [
            {
              lesson_id: 1,
              lesson_name: "Introduction",
              lesson_duration: "1:40",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            }
          ]
        },
        {
          topic_id: 2,
          topic_name: "Web Development Fundementals",
          lesson: [
            {
              lesson_id: 1,
              lesson_name: "Web Technologies",
              lesson_duration: "2:48",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Install VSCode Editor",
              lesson_duration: "2:33",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "How the web works",
              lesson_duration: "2:30",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "How the web works - In Action",
              lesson_duration: "3:50",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Chrome Dev Tools",
              lesson_duration: "3:49",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "First Html Page",
              lesson_duration: "5:28",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "CSS Basics in Action",
              lesson_duration: "7:39",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            },
            {
              lesson_id: 1,
              lesson_name: "Dom & Inspecting Pages",
              lesson_duration: "4:54",
              youtube_url: "https://www.youtube.com/embed/RXLwATGwQ-M"
            }
          ]
        }
      ]
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
