function convertTemp() {
  const degree = parseFloat(document.getElementById("degreeInput").value);
  const type = document.getElementById("tempType").value;
  const video = document.getElementById("bgVideo");
  const imageResult = document.getElementById("imageResult");
  let celsius, result;

  if (isNaN(degree)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }
  if (type === "fahrenheit") {
    celsius = (degree - 32) * 5 / 9;
    result = `${celsius.toFixed(2)} °C`;
  } else {
    celsius = degree;
    result = `${(celsius * 9 / 5 + 32).toFixed(2)} °F`;
  }

  document.getElementById("result").innerText = `Result: ${result}`;
  imageResult.innerHTML = ""; 

  video.pause();
  video.innerHTML = ""; 

  let source = document.createElement("source");

  if (celsius < 0) {
    source.src = "snow.mp4"; 
    // imageResult.innerHTML = '<img src="cold.jpg" alt="Cold" />';
  } else if (celsius >= 0 && celsius<=15) {
    source.src = "1.mp4"; 
  } else if (celsius>10 && celsius <= 25) {
    source.src = "2.mp4"; //
  } else if (celsius>25 && celsius <= 35){
    // imageResult.innerHTML = '<img src="hot.jpeg" alt="Hot" />';
    source.src="sun-cloudy.mp4";
    
  }
  else {
  document.body.style.background = 'url("hot.jpeg") no-repeat center center fixed';
  document.body.style.backgroundSize = 'cover';
}



  source.type = "video/mp4";
  video.appendChild(source);
  video.load();
  video.play();
}
