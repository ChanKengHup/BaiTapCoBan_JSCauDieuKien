

/**
 * Bài tập 1 
 * Khối 1: input
 * 3 số nguyên
 * 
 * Khối 2: 
 * B1: lấy giá trị từ 3 input 
 * B2: So sánh các giá trị vừa nhập
 * TH1: num1 > num2:
 *  +nếu num2 > num3 => num3 < num2 < num1
 * + nếu num2 < num3:
 *    -nếu num1 > num3 => num2 < num3 <num1
 *    -nếu num1 < num3 => num2 <num1 < num3  
 * TH2: num1 < num2 
 *   + nếu num2 > num3:
 *    - nếu num1 > num3 => num3 < num1 < num2
 *    - nếu num1 < num3 => num1 < num3 < num2
 *   + nếu num2 < num3: => num1 < num2 < num3   
 * 
 * Khối 3:
 * 3 số nguyên được sắp xếp
 */


function sortNumber() {
    var num1 = parseInt(document.getElementById("number1__input").value);
    var num2 = parseInt(document.getElementById("number2__input").value);
    var num3 = parseInt(document.getElementById("number3__input").value);
   
    if (num1 > num2) {
        if (num2 > num3) {
            document.getElementById("number__show").innerHTML = num3 + "<" + num2 + "<" + num1
            document.getElementById("number__show").style.display = "block"
        } 
        else {
           if (num1 > num3) {
            document.getElementById("number__show").innerHTML = num2 + "<" + num3 + "<" + num1
            document.getElementById("number__show").style.display = "block"

           }
           else {
            document.getElementById("number__show").innerHTML = num2 + "<" + num1 + "<" + num3
            document.getElementById("number__show").style.display = "block"

           }
            
        }
    }
   
    else {
      if (num2 > num3) {
          if(num1 > num3) {
            document.getElementById("number__show").innerHTML = num3 + "<" + num1 + "<" + num2
            document.getElementById("number__show").style.display = "block"

          }
          else {
            document.getElementById("number__show").innerHTML = num1 + "<" + num3 + "<" + num2
            document.getElementById("number__show").style.display = "block"

          }
      }
      else {
        document.getElementById("number__show").innerHTML = num1 + "<" + num2 + "<" + num3
        document.getElementById("number__show").style.display = "block"
          
      }
    }

}





/**
 * Bài tập 2 
 * Khối 1: input
 * lựa chọn của người dùng
 * 
 * Khối 2:
 * B1: lấy giá trị của lựa chọn
 * B2: dựa vào giá trị thì in ra giá trị thích hợp
 *     Bố: in ra Chào bố
 *     Mẹ: in Chào mẹ
 * 
 * Khối 3:
 * in ra lời chào thích hợp cho lựa chọn
 */

 function hello() {
   var greetingChoice = document.getElementById("hello").value;
   
   switch(greetingChoice) {
     case "B":
       document.getElementById("hello__show").innerHTML = "Con Chào Bố";
       document.getElementById("hello__show").style.display = "block";
       break;
     case "M":
      document.getElementById("hello__show").innerHTML = "Con Chào Mẹ";
      document.getElementById("hello__show").style.display = "block";
      break;
      case "A":
        document.getElementById("hello__show").innerHTML = "Em Chào Anh";
        document.getElementById("hello__show").style.display = "block";
        break;
      case "E":
        document.getElementById("hello__show").innerHTML = "Em Chào Chị";
        document.getElementById("hello__show").style.display = "block";
        break;
      default:
        alert("Vui lòng chọn bạn là ai trong gia đình")
   }
 }





 /**
 * Bài tập 3 
 * Khối 1: input
 * 3 số nguyên
 * 
 * Khối 2: 
 * B1: lấy giá trị từ 3 input 
 * B2: So sánh các giá trị vừa nhập
 *  nếu num1 và num2 chẵn. gán evenNumber = 2. oddNumber = evenNumber -1 => có 2 số chẵn, 1 số lẻ
 * tương tự cho num2 và num3 chẵn, num1 và num3 chẵn
 *  nếu num1 chẵn và num2, num3 lẽ => 1 chẵn, 2 lẻ
 * tương tự cho num2 và num3
 * nếu num1, num2 và num3 chẵn => 3 chẵn, 0 lẻ
 * nếu num1, num2 và num3 lẻ => 0 chẵn, 3 lẻ
 * 
 * Khối 3:
 * 3 số nguyên được sắp xếp chẵn và lẻ
 */


function sortInteger() {
  
  var num1 = parseInt(document.getElementById("integer1__input").value);
  var num2 = parseInt(document.getElementById("integer2__input").value);
  var num3 = parseInt(document.getElementById("integer3__input").value);
  var evenNumber = 0;
  var oddNumber = 0;
   if(num1 == NaN && num2  == NaN && num3  == NaN) {
     console.log("lồi");
   }
  
   if (num1 % 2 == 0 && num2 % 2 != 0 && num3 % 2 != 0) {
      evenNumber = 1; oddNumber = 2;
     document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
     document.getElementById("integer__show").style.display = "block"
  }  
  else if (num1 % 2 != 0 && num2 % 2 == 0 && num3 % 2 != 0) {
    evenNumber = 1; oddNumber = 2;
    document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
    document.getElementById("integer__show").style.display = "block"
  }
  else if(num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 == 0){
  evenNumber = 1; oddNumber = 2;
  document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
  document.getElementById("integer__show").style.display = "block"
  }
  else if (num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 != 0) {
    evenNumber = 2; oddNumber = 1;
  document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
  document.getElementById("integer__show").style.display = "block"
  }
  else if (num1 % 2 != 0 && num2 % 2 == 0 && num3 % 2 == 0) {
    evenNumber = 2; oddNumber = 1;
    document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
  document.getElementById("integer__show").style.display = "block"
  }
  else if (num1 % 2 == 0 && num2 % 2 != 0 && num3 % 2 == 0) {
    evenNumber = 2; oddNumber = 1;
    document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
     document.getElementById("integer__show").style.display = "block"
  }
  else if(num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0) {
    evenNumber = 3; oddNumber = 0;
    document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
     document.getElementById("integer__show").style.display = "block"
  }
  else if(num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0) {
    evenNumber = 0; oddNumber = 3;
    document.getElementById("integer__show").innerHTML = "Có " + evenNumber + " số chẵn, " + "Có " + oddNumber + " số lẻ";
     document.getElementById("integer__show").style.display = "block"
  } 

 
}





/**
 * Bài tập 4
 * 
 * Khối 1: input
 * giá trị của 3 cạnh
 * 
 * Khối 2:
 * B1: lấy giá trị từ input
 * B2: so sánh 3 giá trị:
 * a = b, c => tam giác đều
 * a = b = c => tam giác cân
 * a^2 = b^2  + c ^2 => tam giác vuông
 * 
 * Khối 3: 
 * Phân loại được tam giác sau khi nhập 3 cạnh
 */

function sortTriangle() {
  var a = document.getElementById("edge1__input").value;
  var b = document.getElementById("edge2__input").value;
  var c = document.getElementById("edge3__input").value;

  if(a == 0 && b == 0 && c == 0)  {
    
    document.getElementById("triangle__show").innerHTML = "Vui lòng nhập 3 cạnh tam giác"
    document.getElementById("triangle__show").style.display = "block"
  }
  else if (a == b && b == c) { 
    document.getElementById("triangle__show").innerHTML = "Là tam giác đều"
    document.getElementById("triangle__show").style.display = "block"
    
  }
  else if (a == b || a == c) {
    document.getElementById("triangle__show").innerHTML = "Là tam giác cân"
    document.getElementById("triangle__show").style.display = "block"
  }
  else if (b == c) {
    document.getElementById("triangle__show").innerHTML = "Là tam giác cân"
    document.getElementById("triangle__show").style.display = "block"
  }
  else if(c == Math.sqrt(a*a + b*b) || a == Math.sqrt(b*b + c*c) || b == Math.sqrt(a*a + c*c)) {
    document.getElementById("triangle__show").innerHTML = "Là tam giác vuông"
    document.getElementById("triangle__show").style.display = "block"
  }
}



