function login() {
  const id = document.getElementById("id").value;
  const pass = document.getElementById("pass").value;

  const correctId = "ayauta";
  const correctPass = "2023";

  if (id === correctId && pass === correctPass) {
    alert("ログイン成功！");
  } else {
    alert("IDとパスワードが違うんじゃないんですかね笑");
  }
}
