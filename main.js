function update() {
  //alert("클릭");
  const cities = ["Seoul", "London", "Barcelona", "Paris", "Madrid", "Tokyo"];
  const num = parseInt(Math.random() * cities.length);
  document.getElementById("location").innerHTML = cities[num];
  document.getElementById("degree").innerHTML = parseInt(Math.random() * 30);
  document.getElementById("wind-speed").innerHTML = parseInt(
    Math.random() * 12
  );
  document.getElementById("humidity-pct").innerHTML = parseInt(
    Math.random() * 80
  );
}

//update();
