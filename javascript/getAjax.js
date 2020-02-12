function getAjax(action, callback){
  var rs;
  if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        rs = JSON.parse(xmlhttp.responseText);
        callback(rs);
    }
  }

  //catch errors
  xmlhttp.onerror = function (e){
    console.error(xmlhttp.statusText);
  };

  xmlhttp.open("GET", action);

  xmlhttp.send();
};