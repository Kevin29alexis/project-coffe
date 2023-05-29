function fetchData() {
  fetch("coffee.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<table>";
      output += "<tbody>"; // output=output + <tbody>

      data.forEach((element) => {
        output += "<tr>";
        output += "<td>";
        output += element.tipo;
        output += "</td>";
        output += "<td>";
        output += element.precio;
        output += "</td>";
        output += "</tr>";
      });
      output += "</tbody>";
      output += "</table>";
      document.getElementById("wrapper").innerHTML = output;
    })
  fetch()
  .then()
  .catch(console.log("error"));
}
fetchData();