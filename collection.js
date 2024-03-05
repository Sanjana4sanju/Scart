var productcontainer= document.getElementById("products")
var search= document.getElementById("search")
var productlist= productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
   var enteredValue= event.target.value

   for(count=0;count<productlist.length;count=count+1)
   {
    var productname= productlist[count].querySelector("p").textContent
    if(productname.indexOf(enteredValue)<0)
    {
        productlist[count].style.display="none"
    }
    
    
    else {
        productlist[count].style.display= "block"
    
    }
}
})