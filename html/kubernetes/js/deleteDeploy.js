function deleteDeploy() {
    var a = document.getElementById('deleteDeployName').value;
    var url = `http://107.23.114.237/cgi-bin/deleteDeploy.py?deployname=${a}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op
        document.getElementById("op").innerHTML=output;
    }
  }