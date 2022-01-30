//li'ye eleman ekleme/çıkarma fonksiyonu
//eklenecek elemanın uzunluğunu boşlukları çıkararak saydır
//üstüne tıklandığında rengini değiştir üstünü çiz
//çarpıya basıldığında listeden çıkar
const LIST_DOM = document.querySelector("#task_list");
function Element_Add() {
  var task_desc = document.querySelector("#task").value;
  if (task_desc.trim() == "") {
    $(".error").toast("show");
  } else {
    var item = document.createElement("li");
    item.innerHTML += `<span onclick="Element_Done(this)" class="align-middle">${task_desc}</span>
    		  <button onclick="Element_Del(this)" class="btn btn-light float-right rm-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>`;
    LIST_DOM.appendChild(item);
    $(".success").toast("show");
    document.getElementById("task").value = "";
  }
}

function Element_Del(id) {
  $(".deleted").toast("show");
  var element = id;
  element.parentElement.remove();
}

function Element_Done(id) {
  var element = id;
  if (element.parentElement.classList.contains("check") == true) {
    element.style.textDecoration = "none";
    element.parentElement.classList.remove("check");
  } else {
    element.style.textDecoration = "line-through";
    $(".done").toast("show");
    element.parentElement.classList.add("check");
  }
}
