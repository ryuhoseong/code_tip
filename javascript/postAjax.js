function postAjaxForm(formObj, action){
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  var fd = new FormData(formObj);

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      //rs 영향받은 행 수
      var rs = xmlhttp.responseText;
      if (rs == 1){
        alert("수정 되었습니다.");
      }else if(rs == "insert"){
        location.reload(true);
      }else{

      }
    }
  }

  //catch errors
  xmlhttp.onerror = function (e){
    console.error(xmlhttp.statusText);
  };

  xmlhttp.open("POST", action);

  xmlhttp.send(fd);
};