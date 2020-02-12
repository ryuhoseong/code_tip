function getUrlParams() {
  var params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
  return params;
}

ex)
var oParams = getUrlParams();
var Cust_cd = val;
var cid = oParams.cid;
var Call_Gbn = oParams.gSpace;
var Call_Kind = oParams.call_kind;