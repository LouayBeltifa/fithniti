// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import {getFirestore, doc,  setDoc, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOswfUGaIJ99bDlZMZQnKTipwXAxG-Xug",
  authDomain: "fithniti-ea675.firebaseapp.com",
  databaseURL: "https://fithniti-ea675-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fithniti-ea675",
  storageBucket: "fithniti-ea675.appspot.com",
  messagingSenderId: "610227307219",
  appId: "1:610227307219:web:3e04f05a8fb247dede8a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;

      document.getElementById("username").innerHTML = `<h1>${user.displayName}</h1>`
      document.getElementById("userimg").innerHTML = `<img src="${user.photoURL}" alt="user photo" width="120px" style="border-radius: 50%; border:5px solid #006dd2;">`

        document.getElementById("addTrip").addEventListener("click", (e) =>{
            addDoc(collection(db, "Trip"), {
                UserUid : uid,
                UserPhotoUrl : user.photoURL,
                UserFullname : user.displayName,
                From: document.getElementById("from").value,
                To: document.getElementById("to").value,
                Date: document.getElementById("date").value,
                NumP: document.getElementById("numP").value,    
                Price: document.getElementById("price").value,    
                Messsage: document.getElementById("message").value,    
                BagSize: document.getElementById("bagsize").value,    
                TimeFlex: document.getElementById("TimeFlex").value
            });
            Swal.fire('Saved!', '', 'success').then(() => {
              location.reload();
            });
        });



      // ...
    } else {
      // User is signed out
      window.location = "./signup.html"
      // ...
    }
    
});

const tripcartes = document.querySelector('.tripcartes');

const rendercart = carta  => {
  const div = `<a href="#">
                <div class="cart">
                    <div class="left">
                        <div class="direct">
                            <strong><p>${carta.data().From}</p></strong>
                            <p>to</p>
                            <strong><p>${carta.data().To}</p></strong>
                        </div>
                        <div class="userinfo">
                            <img src="${carta.data().UserPhotoUrl}" alt="userimg">
                            <p>${carta.data().UserFullname}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="pr">
                            <strong><p>${carta.data().Price} TND</p></strong>
                        </div>
                        <div class="date">
                            <p>${carta.data().Date}</p>
                        </div>

                        <div class="nbpass">
                            <strong><p>${carta.data().NumP}</p></strong> 
                            <p>passagers</p>
                        </div>
                    </div>
                </div>
            </a>`;
            tripcartes.insertAdjacentHTML('beforeend',div);
}


const querySnapshot = await getDocs(collection(db, "Trip"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          rendercart(doc);
        });


document.getElementById("signoutbtn").addEventListener("click", (e) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location = "./signup.html"
      }).catch((error) => {
        // An error happened.
        alert("error : " + error);
      });
});


document.getElementById("searchbtn").addEventListener("click", (e) => {
    e.preventDefault();

    const fromvalue = document.getElementById("frombox").value;
    const tovalue = document.getElementById("tobox").value;
    const datevalue = document.getElementById("datebox").value;

    const myUrl = new URL(window.location.href);

    myUrl.searchParams.set("from", fromvalue);
    myUrl.searchParams.set("to", tovalue);
    myUrl.searchParams.set("date", datevalue);
    window.location = myUrl;
});



