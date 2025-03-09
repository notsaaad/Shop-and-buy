

$(document).ready(function(){ // Every Password input add icon to show password when clicked
  $('.password-with-icon input[type="password"]').after(`<span class="eye password_eye" > <i class="fa-solid fa-eye icon"></i></span>`);
});


    //Show Passowrd when Click on  Eye icon
    $(document).ready(function(){
      let passwords = $('.password_eye');
      passwords.each( function(i , ele) {
        $(ele).on('click', () =>{
          $(this).attr('type')
          let type =  $(this).siblings('input').attr('type');
          type == 'password' ? $(this).siblings('input').attr('type', 'text')             : $(this).siblings('input').attr('type', 'password');
          type == 'password' ? $(this).html(`<i class="fa-solid fa-eye-slash icon"></i>`) : $(this).html(`<i class="fa-solid fa-eye icon"></i>`);
        })
      } )
    });


    //Search table
function SearchTable(ele){
  SearchValue       = ele.value.toUpperCase()
  let TableRows     = document.querySelectorAll('tbody tr');

  for(let i=0; i<TableRows.length; i++){
    Tds = TableRows[i].querySelectorAll('td');
    let Found = false;
    Tds.forEach((value) => {
      let innerText = value.innerText.toUpperCase();
      if(innerText.indexOf(SearchValue) >= 0){
        Found = true;
      }
    })
    console.log(Found);
    
    if(Found){
      TableRows[i].style.display = "";
    }else{
      TableRows[i].style.display = "none";
    }
    
  }
} 


//toggle submenu

$(document).ready(function(){
  let DropDowns = $('.Aside .DropDown');
  DropDowns.each(function(i,ele){
    $(ele).on('click', function(){
      $(ele).toggleClass('Active')
    })
  })
}); 

//uploder
window.addEventListener("load",()=>{
  document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.fileInput'); 
  const filewrapper = document.querySelector('.filewrapper'); 
  if (input && filewrapper) {
      input.addEventListener('change', (e) => {
          console.log('File selected:', e.target.files);
      });
  } else {
      console.error('Input or filewrapper element not found!');
  }
});
  const fileshow=(filename,filetype)=>{
    const ShowfileboxElem=document.createElement("div");
    ShowfileboxElem.classList.add("showfilebox");
    const leftElem=document.createElement("div");
    leftElem.classList.add("left");
    const filetypeElem =document.createElement("span");
    filetypeElem.classList.add("filetype");
    filetypeElem.innerHTML=filetype;
    leftElem.append(filetypeElem);
    const filetitleElem=document.createElement("h3");
    filetitleElem.innerHTML=filename;
    leftelem.append(filetitleElem);
    Showfileboxelem.append (leftelem);
    const rightElem =document.createElement("div");
    rightElem.classList.add("right");
    ShowfileboxElem.append(rightElem);
    const crossElem =document.createElement("span")
    crossElem.innerHTML="&#215;";
    rightElem.append(crossElem);
    filewrapper.append(ShowfileboxElem);

    crossElem.addEventListener("click",()=>{
      filewrapper.removeChild(ShowfileboxElem);
    })
  }
})