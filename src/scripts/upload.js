import app, { storage } from "../../.firebase/config.js"

function uploadImage() {
  const ref = storage.ref();
  const file = document.querySelector("#photo").files[0];

  if (file.type.match('image.*')) {
    const name = new Date() + '-' + file.name;

    const metadata = {
      contentType: file.type
    }

    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
        alert("image upload successful");
        const image = document.querySelector('#image');
        image.src = url;
      });
  }
  else {
    file = null;
    alert("please choose an image nob");
  }
}

function displayImages() {
  const ref = storage.ref();
  ref.listAll()
    .then(function (res) {
      res.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
          var imgCard = document.createElement('img');
          imgCard.className = 'galleryCard';
          imgCard.src = url;
          document.getElementById('gallery').appendChild(imgCard);
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

window.onload = function () {
  displayImages();
  var btn = document.getElementById("uploadButton");
  btn.onclick = uploadImage;
}
