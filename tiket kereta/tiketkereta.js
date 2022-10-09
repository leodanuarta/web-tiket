window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ){
      firstnav.style.display = "none";
    }else {
      firstnav.style.display = "block";
    }
  }
  
  var checkList1 = document.getElementById('list1');
  var items1 = document.getElementById('items1');
  checkList1.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items1.classList.contains('visible')){
      items1.classList.remove('visible');
      items1.style.display = "none";
    }
    else{
      items1.classList.add('visible');
      items1.style.display = "block";
    }
  }
  items1.onblur = function(evt) {
    items1.classList.remove('visible');
  }
  
  window.onscroll = function () {
    scrollFunction();
  };
  
  
  var checkList2 = document.getElementById('list2');
  var items2 = document.getElementById('items2');
  checkList2.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items2.classList.contains('visible')){
      items2.classList.remove('visible');
      items2.style.display = "none";
    }
    else{
      items2.classList.add('visible');
      items2.style.display = "block";
    }
  }
  items2.onblur = function(evt) {
    items2.classList.remove('visible');
  }
  
  var checkList3 = document.getElementById('list3');
  var items3 = document.getElementById('items3');
  checkList3.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (items3.classList.contains('visible')){
      items3.classList.remove('visible');
      items3.style.display = "none";
    }
    else{
      items3.classList.add('visible');
      items3.style.display = "block";
    }
  }
  items3.onblur = function(evt) {
    items3.classList.remove('visible');
  }