function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 


function myFunction1() {
    const myButton1 = document.getElementById("myButton1");

myButton1.addEventListener("click", function() {
  const myImg = document.getElementById("myImg");
  const carname= document.getElementById("carname");


  myImg.src = "https://imgd.aeplcdn.com/370x208/n/9herrua_1559465.jpg?q=80";
  carname.innerHTML="Blue";

});

}

function myFunction2()
{
    const myButton2 = document.getElementById("myButton2");

    myButton2.addEventListener("click", function() {
      const myImg = document.getElementById("myImg");
      const carname= document.getElementById("carname");
      myImg.src = "https://imgd.aeplcdn.com/370x208/n/t4frrua_1559467.jpg?q=80";
      carname.innerHTML="Silver";
    });
    
}

function myFunction3()
{
    const myButton3 = document.getElementById("myButton3");
   
    myButton3.addEventListener("click", function() {
      const myImg = document.getElementById("myImg");
      const carname= document.getElementById("carname");
      myImg.src = "https://imgd.aeplcdn.com/370x208/n/gykrrua_1559473.jpg?q=80";
      carname.innerHTML="White";

    });
    
}



