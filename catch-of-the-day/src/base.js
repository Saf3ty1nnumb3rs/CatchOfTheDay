import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkD9MDveP3-hv5BSU6mMHVWgo8iIOUrhI",
    authDomain: "catch-of-the-day-josh-sample.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-josh-sample.firebaseio.com",
    
})

const base = Rebase.createClass(firebaseApp.database())


//This is a named export
export { firebaseApp }

//this is a defsult export

export default base