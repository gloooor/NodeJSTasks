function send(button) {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  but = button.value.toLowerCase();
  switch (but) {
    case "sum":
      alert(+x + +y);
      break;
    case "sub":
      alert(+x - +y);
      break;
    case "conc":
      alert(x + y);
      break;
  }
}
