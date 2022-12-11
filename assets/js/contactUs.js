$(".form").on("click", function (e) {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  if (fname === "")
    return false;
  else if (lname === "")
    return false;
  else if (email === "") 
    return false;
});
