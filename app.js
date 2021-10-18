let g = document.getElementsByClassName("g");

let b = document.getElementById("bsub");

let m1g = document.querySelectorAll(".matrix1 .g"), i;
let m2g = document.querySelectorAll(".matrix2 .g"), j;

let arr = [];


b.addEventListener('click', (e) => {
  for(let i=0;i<m1g.length;i++) {
      
    if (g[i].value == '') {
      alert("Matrix is Empty");
      window.location.reload();
      break;
    }
    else {
      let x = parseInt(m1g[i].value);   
      let y = parseInt(m2g[i].value); 
      
      arr[i] = x+y;
      console.log(`m1g[${i}] + m2g[${i}] = m3g[${x+y}]`);
    }

    
    
  }
  let sec = document.getElementsByClassName("sec")[0];

  var clone = sec.cloneNode(true);

  document.getElementsByClassName("sec")[4].remove();

  clone.className = "clone";
  document.getElementsByClassName("container")[0].appendChild(clone);

  let m3g = document.querySelectorAll(".clone .matrix1 .g"), i;

  for(i=0;i<m3g.length; i++) {
    m3g[i].value = arr[i];
  }
  
  
})
// g1 = parseInt(g[i].value);

// else if (g1 == parseInt(m2g[i].value)) {
//     console.log(`m2g[${j}] = ${g1}`);
//   }

