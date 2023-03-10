function styleFilterByAttr() {
    const sidebar = document.querySelector('main.shop-main .sidebar');
    if (!sidebar) { return }
    // console.log(sidebar);
    const wrapper = sidebar.querySelector('.sidebar-wrapper');
    const children = Array.from(wrapper.children);
    if (!children || !wrapper) { return }
    // console.log(wrapper, children);
    const newWrapper = document.createElement('div');
    newWrapper.classList.add('sidebar-wrapper');
    children.forEach(child => {
        newWrapper.appendChild(child)
        // console.log(child);
    })
    // console.log(newWrapper);
    wrapper.remove();
    sidebar.appendChild(newWrapper);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    // console.log('Shop');
    styleFilterByAttr() ;


    const selectOrder = document.querySelector('select.orderby');
    if (selectOrder) {
      // console.log(selectOrder);
      var opt = document.createElement('option');
      opt.innerText = 'Sort by';
      opt.setAttribute('disabled', 'disabled');
      // check if this is first page 
      const currentSelected = selectOrder.options[selectOrder.selectedIndex].text;
      if (currentSelected) {
        if (currentSelected === 'Default sorting') {
          // console.log('main page')
          opt.setAttribute('selected', 'selected');
        } else {
          // console.log('not main page')
        }
      } else {
        // console.log('nothing selected');
        opt.setAttribute('selected', 'selected');
      }
      //
      selectOrder.insertBefore(opt, selectOrder.firstChild);
    }

});



// var x, i, j, l, ll, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("woocommerce-ordering");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
// //   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// a.innerHTML = 'Sort By';
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         // console.log(s - select menu, h - current displayed itme);
//         let clickedIndex;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             // s.options[i].setAttribute('selected', 'selected');
//             // console.log(s, s.selectedIndex);
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             clickedIndex = i;
//             break;
//           } else {
//             if (s.options[i].hasAttribute('selected')) {
//               s.options[i].removeAttribute('selected');
//             }
//           }
//         }
//         s[clickedIndex].click();
//         console.log(s[clickedIndex]);
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }

// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);