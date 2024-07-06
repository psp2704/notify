import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD4-WaognVsE4wJxJPMCXKO-6bOCiBSjGA",
    authDomain: "blog-app-fd3c1.firebaseapp.com",
    projectId: "blog-app-fd3c1",
    storageBucket: "blog-app-fd3c1.appspot.com",
    messagingSenderId: "599737667034",
    appId: "1:599737667034:web:edcbe25f686a864c9584e3",
    measurementId: "G-XG2NVF28XJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');


            //  const messaging = getMessaging(app);

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/firebase-messaging-sw.js') 
                    .then(async (registration) => {
                        const messaging = getMessaging(app);
                        messaging.useServiceWorker(registration);
                        return getToken(messaging, { vapidKey: "BJlJfiJ5SjsJohuwH5NmV6uEqAXE42FMVxkztS_L8l85JqoHfFE--hFMQhbRZJcUrhKP-lXDbjTd-k-z8CowKKA" }).then((currentToken) => {
                            if (currentToken) {
                                // Send the token to your server and update the UI if necessary
                                // ...
                                console.log("currentToken : ", currentToken)
                            } else {
                                // Show permission request UI
                                console.log('No registration token available. Request permission to generate one.');
                                // ...
                            }
                        }).catch((err) => {
                            console.log('An error occurred while retrieving token. ', err);
                            // ...
                        });

                    })
            }

        } else {
            console.log('Notification permission denied.');
        }
    })
}

requestPermission();



