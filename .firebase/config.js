const config = {
  apiKey: "AIzaSyCQUUiHyHbGEZVqu1HgSqs1mx_zs0gOU6o",
  authDomain: "test-website-79bbf.firebaseapp.com",
  projectId: "test-website-79bbf",
  storageBucket: "test-website-79bbf.appspot.com",
  messagingSenderId: "1001403562937",
  appId: "1:1001403562937:web:bea8fd52961188a7c7d468"
};

if (!firebase.apps.length) {
  var app = firebase.initializeApp(config);
}

export const storage = firebase.storage();

export default app;
