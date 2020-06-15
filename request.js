function loadDoc(url, cFunction, obj) {
  var xhttp,dbParam;
  dbParam = JSON.stringify(obj);
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4) {
	  cFunction(this);
	}
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(dbParam);
}
