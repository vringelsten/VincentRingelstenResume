

function changeSection() {
  var dropdown = document.getElementById("sectionDropdown");
  var selectedSection = dropdown.options[dropdown.selectedIndex].value;
  fetch(selectedSection + ".html")
    .then(response => response.text())
    .then(content => {
      document.getElementById("content").innerHTML = content;
    })
    .catch(error => console.error("Error fetching content:", error));
}
