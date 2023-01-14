function imgloader(fileInput){
    let div = document.getElementById('div1');
    let files = fileInput.files;
    let i=0;
    let interval = setInterval(function(){
        if(i < files.length){
            let image = document.createElement('img');
            image.src = String(files[i].name);
            div.appendChild(image);
            i++;
        }else{
            clearInterval(interval);
        }
    },100)
}


function marginChanger(){
    let marginVal = document.getElementById("marginSelect").value;
    if(marginVal == "none"){
        $("#div1 img").css("margin-bottom", "0px");
        console.log("none");
    }else if(marginVal == "small"){
        $("#div1 img").css("margin-bottom", "5px");
        console.log("small");
    }else if(marginVal == "normal"){
        $("#div1 img").css("margin-bottom", "10px");
        console.log("normal");
    }else if(marginVal == "big"){
        $("#div1 img").css("margin-bottom", "40px");
        console.log("big");
    }
    
}
