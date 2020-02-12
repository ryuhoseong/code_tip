for (i = 0; i < smsForm.length; i++) {
  //urlEncodedDataPairs.push(encodeURIComponent(smsForm.elements[i].name) + '=' + encodeURIComponent(smsForm.elements[i].value));
  urlEncodedDataPairs.push(smsForm.elements[i].name + '=' + smsForm.elements[i].value);
}
// We combine the pairs into a single string and replace all encoded spaces to
// the plus character to match the behaviour of the web browser form submit.
urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
postAjaxForm(urlEncodedData, action);

function compFormPost(frmObj) {
  var str = '';
  var elm;
  var endName = '';
  for (i = 0, k = frmObj.length; i < k; i++) {
    elm = frmObj[i];
    switch (elm.type) {
      case 'text':
      case 'hidden':
      case 'password':
      case 'textarea':
      case 'select-one':
        str += elm.name + '=' + elm.value + '&';
        break;
      case 'select-multiple':
        sElm = elm.options;
        str += elm.name + '='
        for (x = 0, z = sElm.length; x < z; x++) {
          if (sElm[x].selected) {
            str += sElm[x].value + ',';
          }
        }
        str = str.substr(0, str.length - 1) + '&';
        break;
      case 'radio':
        if (elm.checked) {
          str += elm.name + '=' + elm.value + '&';
        }
        break;
      case 'checkbox':
        if (elm.checked) {
          if (elm.name == endName) {
            if (str.lastIndexOf('&') == str.length - 1) {
              str = str.substr(0, str.length - 1);
            }
            str += ',' + elm.value;
          } else {
            str += elm.name + '=' + elm.value;
          }
          str += '&';
          endName = elm.name;
        }
        break;
    }
  }
  return str.substr(0, str.length - 1);
}

var formInfo = compFormPost(frmObj);

formInfo = encodeURI(formInfo);