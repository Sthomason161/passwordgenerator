
function pass(){

    var results= ""

    for (var i = 0; i < 15; i++){

        var sac = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*<>?/:~";
        var din = Math.floor(Math.random() * 40);
        results += sac.charAt(din);
    }
    document.getElementById("generate").value = results;
}

function copyToClipboard(){
    
    document.getElementById("generate").select();

    alert("Password copied to clipboard!");
}