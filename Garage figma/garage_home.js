
// const parent=document.querySelector('.parent');
// let pageCount=document.querySelector('.page');

// let currentPage=1;
// let count_items_per_page=window.innerWidth > 1440 ? 6 : window.innerWidth > 1024 ? 4 : 2;
// let response;
// let data=[];
// async function f2() {
//   const users = await fetch(`https://retoolapi.dev/fHtZfi/data`);
//    data=await users.json();
 
// };


// async function f1() {
//   const users = await fetch(`https://retoolapi.dev/fHtZfi/data?_page=${currentPage}&_limit=${count_items_per_page}`);
//    response = await users.json();
//   document.querySelector('.loader').style.display='none'
// };

// async function changePage(page){
//   await f1();

// if(page<=1){
//   page=1
// }
// if(page>pageNum()){
//   page=pageNum()
// }
//     parent.innerHTML="";

//   response.forEach((item,index)=>{

//       let div=document.createElement('div')
//         div.innerHTML=`<div class="items_grid ">
//             <img class="grid_img"src="${item.Img}" alt="">
//              <h3 class="grid_h3">${item.Name}</h3>
//              <p class="grid_p">${item.Dis}</p>
//              <div class="item_info">
//                  <p class="price">${item.Price}</p> <img src="./img/jrachap.png" alt="">
//                  <a href=""><img class="buy" src="./img/kaylaska.png" alt=""></a> 
//              </div>`
//       parent.append(div)
//     }
//   )


//   let move=2;
//   let count=[];
//   let pageDots=[];
//   let elem;
//   let left=page;
//   let right=page+move+1;

//   for(let i=1; i<=pageNum();  i++ ){
//     if(i==1 || i===pageNum() || (i>= left && i<right)){

//           count.push(i)
//     }
//   }
//   for(let i of count){
//      if(elem){
//         if(i-elem==2){ 
//            pageDots.push(elem+1)
//         }else if(i-elem!=1){
//             pageDots.push('...')
//         }
//      }
//      pageDots.push(i)
//      elem=i
//   }
//   pageCount.innerHTML=''
//   for(let j of pageDots){
//    let span=document.createElement('span');
//    span.innerText=j;
//    span.addEventListener('click',()=>changePage(j+1))
//    pageCount.append(span)
//   }

// }

// window.onload=()=>{
//   f2() 
//   changePage(1)
  
// }

//  const  pageNum=()=>data.length ?  Math.ceil(data.length/count_items_per_page) : 1 ;


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







