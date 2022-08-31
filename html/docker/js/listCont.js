function listCont() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://107.23.114.237/cgi-bin/listContainer.py", true);
    xhr.send();

    xhr.onload = function(){
        var output = xhr.responseText;
        document.getElementById("op").innerHTML=output;
    }
   
}