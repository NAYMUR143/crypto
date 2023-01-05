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
      remove(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
      remove(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");

      add(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");
    }
  });
});

//-------------------------------

on(qs_a(".dropToken")[0], "click", () => {
  remove(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
  remove(qs_a(".TokenDropDownContainer")[0], "dec-opcityAnim");

  add(qs_a(".TokenDropDownContainer")[0], "opcityAnim");
});
