function login() {
  const id = document.getElementById("id").value;
  const pw = document.getElementById("pw").value;

  if (id === "user" && pw === "pass123") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("IDまたはパスワードが違います");
  }
}

function checkLogin() {
  if (localStorage.getItem("login") !== "true") {
    alert("ログインしてください");
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}
