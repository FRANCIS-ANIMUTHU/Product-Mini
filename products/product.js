var tools = [
  {
    id: 1,
    name: "phone",
    rate: 10000,
    available: "yes",
    qty: 0,
  },
  {
    id: 2,
    name: "tablet",
    rate: 15000,
    available: "yes",
    qty: 0,
  },
  {
    id: 3,
    name: "laptop",
    rate: 12000,
    available: "yes",
    qty: 0,
  },
  {
    id: 4,
    name: "computer",
    rate: 15000,
    available: "yes",
    qty: 0,
  },
];

var addcart = [];

//add button1
function addfirst(id) {
  x = tools.find(function fil(elements) {
    return elements.id == id;
  });
  //console.log(x);

  if (x == x) {
    addcart.push(x);
    x.qty++;
  }
  //console.log(addcart);
  console.log([...new Set(addcart)]);
}

//add button2
function addsecond(select) {
  y = tools.find(function (elements) {
    return elements.id == select;
  });
  //console.log(y);

  if (y == y) {
    addcart.push(y);
    y.qty += 1;
  }
  // console.log(addcart);
  console.log([...new Set(addcart)]);
}
//remove button1
function removecart1(remove) {
  a = addcart.find(function (elements) {
    return elements.id == remove;
  });
  //console.log(a);
  addcart.pop(find());
  console.log([...new Set(addcart)]);
  console.log([...new Set(addcart)]);
}

//remove button2
function removecart2(remove2) {
  b = addcart.find(function (elements) {
    return elements.id == remove2;
  });
  //console.log(b);
  addcart.pop(find());
  console.log([...new Set(addcart)]);
}

//store cart
function cart() {
  console.log([...new Set(addcart)]);
}





// totallength=tools.length;
// for(i=0;i<totallength;i++){
//     console.log(tools[i]);
// }

//  console.log(tools);
//  var addcart=[];
// function addfirst(){
// addcart.push(tools[0]);

// var i=addcart.splice(1,1);
// console.log(addcart);

//  if(tools==tools){
//      tools.qty+=1;
//  }
//  }
// function addfourth(){
//     addcart.push(tools[3]);
//     console.log(addcart);
//      var i=addcart.splice(0,1);
//      //console.log(addcart);
//console.log(value);
//tools[0].addcart;
//var i= addcart.pop(value1);

//console.log(i);
//}

// function cart(){

//   console.log(addcart);
//   addcart.push(tools[0]);
// }

// var btn=document.getElementById('add');
// var button=document.getElementById('add2');
// console.log(btn);
// totallength=tools.length;
// //console.log(totallength);
// for(i=0;i<totallength;i++){
//     console.log(tools[i]);
// }

// function addfirst(){
//     addcart.push(tools[0]);
//     // addcart.splice(0,1);
//       console.log(addcart);
// }
// function addfourth(){
//     addcart.push(tools[3]);
//     addcart.splice(0,1);
//     console.log(addcart);
// }
// function cart(){
//     addcart.push(tools[0]);
//     console.log(addcart);
// }
