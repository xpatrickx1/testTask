import "./main.scss";
import "./img/bg.jpg";
import "./img/witcher.png";
import "./img/logo.png";
import "./img/sparks.png";
import "./img/sparks2.png";


function copyCode(el, btn) {
  const copy = document.querySelector(`.${el}`);
  const clickBtn = document.querySelector(`.${btn}`);
  clickBtn.addEventListener('click', () => {
    copy.select();
    copy.setSelectionRange(0, 10);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  })
}

copyCode('game_name', 'copy__btn')
