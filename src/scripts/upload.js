import app, { storage } from "../../.firebase/config.js"

// Initialize Firebase
function uploadImage() {
  const ref = storage.ref()
  const file = document.querySelector("#photo").files[0]
  const name = new Date() + '-' + file.name

  const metadata = {
    contentType: file.type
  }

  const task = ref.child(name).put(file, metadata)
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url)
      alert("image upload successful")
      const image = document.querySelector('#image')
      image.src = url
    })
}

window.onload = function () {
  var btn = document.getElementById("uploadButton");
  btn.onclick = uploadImage;
}
