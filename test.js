let counter = 0;
const myFunction = () => {
    var input,filter,body,row,a;
    input = document.getElementById('search-field');
    filter = input.value.toUpperCase();
    body = document.getElementsByClassName('group-body');
    row = document.getElementsByClassName('table-row');
    column = document.getElementsByClassName('t-name');
    for(let i=0; i<row.length; i++){
        a = column[i].getElementsByTagName('p')[0]
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            row[i].style.display = "";
        } else {
            row[i].style.display = "none";
        }
    }
    console.log("Fetching Data...", counter++);
}

 function debounce(fn, d) {
    let timer;
    return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
            fn.apply(context, args);
        }, d)
    }
}

const debounceForData = debounce(myFunction, 300);








function slide(direction){
    var container = document.getElementById('Groups-container');
    let scrollCompleted = 0;
    var pix = container.scrollWidth + 10;
    var no_card=document.querySelectorAll('.Groups').length;
    var inc = pix/no_card ;
    var slideVar = setInterval(function(){
        if(direction == 'left'){
            // container.scrollLeft -= 21;
            container.scrollLeft -= inc;
        } else {
            container.scrollLeft += inc;
        }
        scrollCompleted += inc;
        if(scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);
}

function openNav(data) {
    let current = document.getElementById("nav-container").style.display
    console.log(data)
    if (data==='open'){
        // var element = document.getElementById("nav-container");
        // element.classList.add("nav-style");
        // document.getElementById("nav-container").style.display = "block";
        document.getElementById("nav-container").style.width = "70%";
        document.getElementById("nav-container").style.height = "100%";
        
        document.getElementById("nav-container").style.position = "fixed";
       
        // document.getElementById("nav-container").style.zIndex = "3";
        document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.5)";
        
        document.getElementById("nav-container").style.transition = "all 500ms ease";



        document.getElementById("nav-container").style.top = "0";
        document.getElementById("nav-container").style.left = "0";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("cls-icn").style.display = "block";

    }
    else {
        document.getElementById("nav-container").style.width = "0";
        // document.getElementById("nav-container").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById('cls-icn').style.display = "none";
    }
  }


var check = 0;
function group_name_sort(){
    let list1 = document.querySelectorAll(".group-name");
    let g_name = [];
    for(let i=0; i<list1.length; i++){
        g_name[i] = list1[i].innerHTML;
    }
    let list2 = document.querySelectorAll(".group-own");
    let g_wn = [];
    for (let i = 0; i < list2.length; i++) {
       g_wn[i] = list2[i].innerHTML; 
    }
    let list3 = document.querySelectorAll('.Name');
    let dates = [];
    for(let i=0; i<list3.length; i++){
        dates[i] = list3[i].innerHTML;
    }
   
    let final = [];
    for (let i=0; i<list1.length; i++){
        final[i] = [g_name[i],g_wn[i],dates[i]]
    }

    if (check==0 || check==2){
        final.sort();
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][0];
            document.getElementById(i+11).innerHTML = final[i][1];
            document.getElementById(i+21).innerHTML = final[i][2]
        }
        check = 1;
    }
    else {
        final.reverse();
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][0];
            document.getElementById(i+11).innerHTML = final[i][1];
            document.getElementById(i+21).innerHTML = final[i][2]
        }
        check = 2;
    } 
    
 }

 var own_check = 0;
 function group_owner_sort(){
    let list1 = document.querySelectorAll(".group-name")
    let g_name = [];
    for(let i=0; i<list1.length; i++){
        g_name[i] = list1[i].innerHTML;
    }
    let list2 = document.querySelectorAll(".group-own")
    let g_wn = [];
    for (let i = 0; i < list2.length; i++) {
       g_wn[i] = list2[i].innerHTML; 
    }
    let list3 = document.querySelectorAll('.Name');
    let dates = [];
    for(let i=0; i<list3.length; i++){
        dates[i] = list3[i].innerHTML;
    }
   
    let final = [];
    for (let i=0; i<list1.length; i++){
        final[i] = [g_wn[i],g_name[i],dates[i]]
    }

    if (own_check==0 || own_check==2){
        final.sort();
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][1];
            document.getElementById(i+11).innerHTML = final[i][0];
            document.getElementById(i+21).innerHTML = final[i][2];
        }
        own_check = 1;
    }
    else {
        final.reverse();
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][1];
            document.getElementById(i+11).innerHTML = final[i][0];
            document.getElementById(i+21).innerHTML = final[i][2]
        }
        own_check = 2;
    } 
 }

 var date_check = 0;
 function group_date_sort(){
    let list1 = document.querySelectorAll(".group-name")
    let g_name = [];
    for(let i=0; i<list1.length; i++){
        g_name[i] = list1[i].innerHTML;
    }
    let list2 = document.querySelectorAll(".group-own")
    let g_wn = [];
    for (let i = 0; i < list2.length; i++) {
       g_wn[i] = list2[i].innerHTML; 
    }
    let list3 = document.querySelectorAll('.Name');
    let dates = [];
    for(let i=0; i<list3.length; i++){
        dates[i] = list3[i].innerHTML;
    }
    console.log(dates)
   
    let final = [];
    for (let i=0; i<list1.length; i++){
        final[i] = [dates[i],g_name[i],g_wn[i]]
    }

    if (date_check==0 || date_check==2){
        final.sort();
        console.log(final)
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][1];
            document.getElementById(i+11).innerHTML = final[i][2];
            document.getElementById(i+21).innerHTML = final[i][0];
        }
        date_check = 1;
    }
    else {
        final.reverse();
        for(let i=0; i<list1.length; i++){
            document.getElementById(i+1).innerHTML = final[i][1];
            document.getElementById(i+11).innerHTML = final[i][2];
            document.getElementById(i+21).innerHTML = final[i][0]
        }
        date_check = 2;
    } 
 }
  


