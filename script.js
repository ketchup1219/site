function login() {
  const id = document.getElementById("id").value;
  const pass = document.getElementById("pass").value;

  // 管理人が設定したIDとパスワード
  const correctId = "ayauta";
  const correctPass = "2023";

  if (id === correctId && pass === correctPass) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "home.html"; // ログイン後のページ
  } else {
    alert("IDとパスワードが違うんじゃないんですかね笑");
  }
}
