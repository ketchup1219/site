function login() {
  const id = document.getElementById("id").value;
  const pass = document.getElementById("pass").value;

  const correctId = "ayauta";
  const correctPass = "2023";

  if (id === correctId && pass === correctPass) {
    window.location.href = "home.html";
  } else {
    alert("IDとパスワードが違うんじゃないんですかね笑");
  }
}
