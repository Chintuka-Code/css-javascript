function abc(imgName)
{
   image = document.getElementById('change');
   image.src = imgName;

/*
1:- image.style.backgroundColor = "red";    
2:-   image.setAttribute(
      "style", "color: red; background-color: blue; padding-bottom: 2px; margin: 3px;");
3:- image.style.cssL = "widht: 100px; height: 55px; border: 1px solid black; padding:10px; background-color:red;"
*/
 /*  according to me Best way is class list*/
   image.classList.add("newclass");
}
function out(imgName)
{
   image = document.getElementById('change');
   image.src = imgName;

/*To remove simple property
 image.style.removeProperty("background-color");
*/
  image.classList.remove("newclass");

}
