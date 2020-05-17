
 // WOW ANIMATION
 new WOW({ mobile: false }).init();


 var data , imgInfo = []
let imgPro = document.getElementsByClassName("imgPro")

let namePro = document.getElementsByClassName("namePro")
let pricePro = document.getElementsByClassName("pricePro")
let disPro = document.getElementsByClassName("disPro")
let str = " EGP"
  var  currauncy = str.fontcolor("chocolate")
      var xhr =new XMLHttpRequest() ;


  


      xhr.open("GET","  http://localhost:3000/products",true)

       xhr.onreadystatechange = function () { 
          if (xhr.readyState === 4 && xhr.status === 200) { 

       // Print received data from server 
      
           data =JSON.parse(xhr.responseText)
        

           for(i =0 ; i<data.length;i++){
            if($("#women")){
           var   resultDataWomen =    data.filter(arg => arg.category ==="women")
           var   resultDataMan =    data.filter(arg => arg.category ==="man")
           var   resultDataAcc =    data.filter(arg => arg.category ==="acc")

            }
            for(var p =0 ; p<imgPro.length ; p++){


              imgPro[p].setAttribute("src",data[p].img)
              namePro[p].innerHTML = data[p].productTitle
              pricePro[p].innerHTML = data[p].totalPrice + currauncy
              disPro[p].innerHTML = data[p].totalPrice *.7 + currauncy
         }
            $("#all").click(function(){

            for(var p =0 ; p<imgPro.length ; p++){


              imgPro[p].setAttribute("src",data[p].img)
              namePro[p].innerHTML = data[p].productTitle
              pricePro[p].innerHTML = data[p].totalPrice + currauncy
              disPro[p].innerHTML = data[p].totalPrice *.7 + currauncy
         }
        })

         $("#women").click(function(){
          // console.log(resultData)
          for( var w =0 ; w<imgPro.length ; w++){


            imgPro[w].setAttribute("src",resultDataWomen[w].img)
            namePro[w].innerHTML = resultDataWomen[w].productTitle
            pricePro[w].innerHTML = resultDataWomen[w].totalPrice + currauncy
            disPro[w].innerHTML = resultDataWomen[w].totalPrice *.7 + currauncy
       }
        
        })
        $("#man").click(function(){
          // console.log(resultData)
          for( var m =0 ; m<imgPro.length ; m++){


            imgPro[m].setAttribute("src",resultDataMan[m].img)
            namePro[m].innerHTML = resultDataMan[m].productTitle
            pricePro[m].innerHTML = resultDataMan[m].totalPrice + currauncy
            disPro[m].innerHTML = resultDataMan[m].totalPrice *.7 + currauncy
       }
        
        })
        $("#acc").click(function(){
          // console.log(resultData)
          for( var a =0 ; a<imgPro.length ; a++){


            imgPro[a].setAttribute("src",resultDataAcc[a].img)
            namePro[a].innerHTML = resultDataAcc[a].productTitle
            pricePro[a].innerHTML = resultDataAcc[a].totalPrice + currauncy
            disPro[a].innerHTML = resultDataAcc[a].totalPrice *.7 + currauncy
       }
        
        })
       
        
      }
     


       } 
      }; 
    xhr.send()
   
 
 




    $(document).ready(function(){
      $("td").click(function(){
          $("td").removeClass("activeLi")
  
          $(this).addClass("activeLi")
      })
  
  
  
  })






