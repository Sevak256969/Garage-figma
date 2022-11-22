let prod_quant =  window.innerWidth > 1440 ? 5 : window.innerWidth > 1024 ? 4 : 2;

let div1 = document.querySelector(".div7_grid_cont_product");
let div2 = document.querySelector(".div7_grid_cont_title");
let div3 = document.querySelector(".div7_grid_cont_buttons");
let div4 = document.querySelector(".grid-container");
let div5 = document.querySelector(".div7_grid_cont_h5");

let currentPage = 1;

function nextp() {
  if (currentPage < pageCount()) {
    currentPage++;
  }
  changePage(currentPage);
}
const btnnext = document.querySelector(".d7cppb_next");
btnnext.addEventListener("click", nextp);
function privp() {
  if (currentPage < pageCount()) {
    currentPage--;
  }
  changePage(currentPage);
}
const btnpriv = document.querySelector(".d7cppb_prev");
btnpriv.addEventListener("click", nextp);
let listitem;
async function todo() {
  const users = await fetch("https://retoolapi.dev/fHtZfi/data");
  listitem = await users.json();
}

async function changePage(page) {
  await todo();
  if (page <= 1) {
    page = 1;
  }
  if (page >= pageCount()) {
    page = pageCount();
  }
  if ((page == 1)) {
    btnpriv.style.display = "none";
  } else {
    btnpriv.style.display = "inline";
  }
  div4.innerHTML = '';

console.log(page,'page');
  listitem.forEach((item, index) => {
    if (index >= (page-1)*prod_quant && index <= page*prod_quant) {
      let div = document.createElement("div");
      div.dataset.id = item.id;
      div.classList.add("grid-item");
      div.innerHTML = `<div class="div7_grid_cont">
        <div class="div7_grid_cont_product"> <!-- div1 -->
            <img class="div7_grid_cont_product_img" src="${item.URL}">
        </div>
        <div class="div7_grid_cont_title" > <!-- div2 -->
            <h5 class="div7_grid_cont_h5">Michelin</h5>
            <p class="div7_grid_cont_p">${item.P_index}</p>
        </div>
        <div class="div7_grid_cont_buttons"> <!-- div3 -->
            <button class="div7_grid_cont_pbutton">${item.Price}</button>
            <div class="div7_grid_cont_pl_min">
                <a class="d7gcpm_min" href="#"><img src="./Icons/min.svg" alt="Min"></a>
                <p class="cd7gcpm_qount">1</p>
                <a class="d7gcpm_max" href="#"><img src="./Icons/max.svg" alt="Max"></a>
            </div>
            <div>
                <img class="div7_grid_cont_addtc" src="./Icons/icon_shop.svg" alt="Add to card">
            </div>
        </div>
    </div>`;
      div4.append(div);
    }
  });
}

const pageCount = () => Math.ceil(listitem.length / prod_quant);

window.onload = () => {
  changePage(1);
};

function pagination(c, m) {
  let current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}