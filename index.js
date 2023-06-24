var imgdatauri;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
    };
  }
  reader.readAsDataURL(input.files[0]);
}


function decode(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
          console.log(steg.decode(e.target.result));
        
        document.querySelector('#decoded').innerText = steg.decode(e.target.result);
        document.getElementById('decoded').classList.add('p-2');
      };
    }
    reader.readAsDataURL(input.files[0]);
  }


function hideText() {
  document.querySelector("#image2").src = steg.encode(document.querySelector('#text').value, imgdatauri);

  let a = document.getElementById('download-link');
  a.href = `${steg.encode(document.querySelector('#text').value, imgdatauri)}`;

  let b = document.getElementById('download-block');
  b.classList.remove("hidden");

  document.getElementById('source-final-img-block').classList.remove("hidden");

  document.getElementById('decoding-block').classList.remove("hidden");
}
