let tamp_arr = [
  `
  <img src="./img/usdc.webp" alt="" data-tkn />
  <span data-tkn>USDC</span>
  `,
  `
  <img src="./img/MANAd.webp" alt="" data-tkn />
  <span data-tkn>MANA</span>
  `,
  `
  <img src="./img/sand.png" alt="" data-tkn />
  <span data-tkn>SAND</span>
  `,
];

on(qs_a(".mouseOver")[0], "mouseover", () => {
  remove(qs_a(".showProducts")[0], "opcityAnim");
  remove(qs_a(".showProducts")[0], "dec-opcityAnim");

  add(qs_a(".showProducts")[0], "opcityAnim");
});

qs_a("*").forEach((itm, i) => {
  on(itm, "mouseleave", (e) => {
    let target = e.target.dataset.trg;

    if (target === undefined || target === null) {
      remove(qs_a(".showProducts")[0], "opcityAnim");
      remove(qs_a(".showProducts")[0], "dec-opcityAnim");

      add(qs_a(".showProducts")[0], "dec-opcityAnim");
    }
  });

  on(itm, "click", (e) => {
    let tkn = e.target.dataset.tkn;

    if (tkn === undefined || tkn === null) {
      hideTokens();
    }
  });
});

//-------------------------------

on(qs_a(".dropToken")[0], "click", () => {
  remove(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
  remove(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");

  add(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
});

qs_a(".token-item").forEach((itm, i) => {
  on(itm, "click", (e) => {
    qs_a(".dyn-DATA")[0].innerHTML = tamp_arr[i];
    hideTokens();
  });
});

//---------------------------------------

function hideTokens() {
  remove(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
  remove(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");

  add(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");
}

function inputChange() {
  // const inputvalue = document.getElementById("amountinput").value;
  const inputvalue = qt_el("amountinput").value;
  console.log(inputvalue);
  const year = qt_el("year");
  const weekly = qt_el("weekly");
  console.log(year.innerHTML);
  if (inputvalue <= 10) {
    year.innerHTML = "65";
    weekly.innerHTML = "6.5";
  }
  if ((inputvalue > 10) & (inputvalue <= 100)) {
    year.innerHTML = "650";
    weekly.innerHTML = "65";
  }
  if (inputvalue > 100) {
    year.innerHTML = "6500";
    weekly.innerHTML = "650";
  }
}
const prctgeShow = qs_a(".coincard h1");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("prctgeAnimate", entry.isIntersecting);
  });
});
prctgeShow.forEach((prctge) => {
  observer.observe(prctge);
});
