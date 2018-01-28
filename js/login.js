function validate(){
	
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if ( username == "yuliya" && pass == "1234"){
		window.location = "pages/home.html"; // Redirecting to other page.
		return false;
	}
	else{
		document.getElementById("loginForm").reset();
		alert("Wrong email or password");
		return false;
	}
}