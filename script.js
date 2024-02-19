const al = document.getElementById("al");
const im = document.getElementById("kd");
const y = document.getElementById("y");
const n = document.getElementById("n");

$(al).click(function (e) { 
    e.preventDefault();
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    al.style.color = randomColor;
    let alc = getComputedStyle(al).color; 
    al.style.textShadow = `
    0 0 7px ${alc},
    0 0 10px ${alc},
    0 0 21px ${alc},
    0 0 42px ${alc},
    0 0 82px ${alc},
    0 0 92px ${alc},
    0 0 102px ${alc},
    0 0 151px ${alc}
  `;
});

$(y).click(function (e) { 
  e.preventDefault();
  $(n).hide();
  im.style.display = "block";
  y.innerHTML = "<3";
});

$(n).hover(function () {
    $(n).hide();
  }, function () {
    $(n).show();
  }
);
