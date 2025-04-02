var count = 1;
function addfunction(){
  var btn = document.createElement("BUTTON");
  btn.innerHTML = `CLICK ME(${count})`;
  btn.setAttribute("id", "btn_" + count++);
  btn.setAttribute("class", "btn btn-outline-danger m-2");
  btn.onclick = function() { this.remove(); };
  document.getElementById("buttonContainer").appendChild(btn);
};

function delfunction(){
  if (count > 1) { 
    var btn = document.getElementById("btn_" + --count);
    if (btn) {
      btn.remove();
    }
  }
}
