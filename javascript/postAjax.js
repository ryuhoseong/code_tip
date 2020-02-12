function postAjaxForm(formObj, action){
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      //alert("전송완료");
    }else{
      //alert("전송실패");
    }
  }

  //catch errors
  xmlhttp.onerror = function (e){
    console.error(xmlhttp.statusText);
  }

  xmlhttp.open("POST", action);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=euc-kr");
  xmlhttp.send(formObj);
};