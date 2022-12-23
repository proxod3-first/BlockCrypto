document.querySelector("form").addEventListener(
  "click",
  () =>
    function (e) {
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      if (fname === "") return false;
      else if (lname === "") return false;
    }
);