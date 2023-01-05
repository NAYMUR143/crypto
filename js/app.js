let tamp_arr = [
  `
  <img src="./img/CRO.webp" alt="" data-tkn />
  <span data-tkn>CRO</span>
  `,
  `
  <img src="./img/btc.webp" alt="" data-tkn />
  <span data-tkn>BTC</span>
  `,
  `
  <img src="./img/eth.webp" alt="" data-tkn />
  <span data-tkn>ETH</span>
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
