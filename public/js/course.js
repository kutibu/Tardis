function test(id) {
    document.getElementById("tp_1").style.backgroundColor = "lightblue" ;
    document.getElementById("tp_2").style.backgroundColor = "lightblue" ;
    document.getElementById("tp_3").style.backgroundColor = "lightblue" ;
    document.getElementById(id).style.backgroundColor = "cyan" ;

    switch (id) {
        case "tp_1":
            document.getElementById("plan").innerHTML = "tp_1";
            break;
        case "tp_2":
            document.getElementById("plan").innerHTML = "tp_2";
            break;
        case "tp_3":
            document.getElementById("plan").innerHTML = "tp_3";
            break;
        default:

    }

  }