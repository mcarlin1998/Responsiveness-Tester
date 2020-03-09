function changeSrc(){
  //document.querySelector(".frame iframe").src = document.querySelector('#channel').value;
  new_source = document.querySelector('#channel').value
  document.querySelectorAll(".frame iframe").forEach(function(item){
    item.src = new_source;
  
  })
}
