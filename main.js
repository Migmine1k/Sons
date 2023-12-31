function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iHJvqVuAK/model.json', modelReady);
  }
  
  function modelReady() {
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'Posso ouvir - ' + results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + " %";
      document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
      document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
  
      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');
  
      if (results[0].label == "cachorro") {
        img.src = 'cachorro.gif';
        img1.src = 'galo.jpg';
        img2.src = 'passaro.jpg';
        img3.src = 'porco.jpg';
      } else if (results[0].label == "Galo") {
        img.src = 'cao.jpg';
        img1.src = 'galo.gif';
        img2.src = 'passaro.jpg';
        img3.src = 'porco.jpg';
      } else if (results[0].label == "passaros") {
        img.src = 'cao.jpg';
        img1.src = 'galo.jpg';
        img2.src = 'passaro.gif';
        img3.src = 'porco.jpg';
      } else if (results[0].label == "porco") {
        img.src = 'cao.jpg';
        img1.src = 'galo.jpg';
        img2.src = 'passaro.jpg';
        img3.src = 'porco.gif';
      }
      else{
        img.src = 'cao.jpg';
        img1.src = 'galo.jpg';
        img2.src = 'passaro.jpg';
        img3.src = 'porco.jpg';
      }
    }
  }
  