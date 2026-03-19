function login() {
  const id = document.getElementById("id").value;
  const pass = document.getElementById("pass").value;

  // 管理人が決めるIDとパスワード
  const correctId = "ayauta";
  const correctPass = "2023";

  if (id === correctId && pass === correctPass) {
    // ログイン成功した印を保存
    sessionStorage.setItem("loggedIn", "true");

    // ログイン後に移動するページ
    window.location.href = "home.html";
  } else {
    alert("IDかパスワードがちがうんじゃないんですかねぇ笑");
  }
}
