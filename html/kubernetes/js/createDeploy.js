function createDeploy() {
    var a = document.getElementById('createDeployName').value;
    var b = document.getElementById('createDeployImgName').value;
    var url = `http://107.23.114.237/cgi-bin/createDeploy.py?deployname=${a}&imgname=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Status : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }