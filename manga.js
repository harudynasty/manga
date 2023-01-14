const marginLis = document.getElementById('margin');
let n = 0;

function imgloader(fileInput){
    let div = document.getElementById('div1');
    let files = fileInput.files;
    console.log(files);
    let i=0;
    let interval = setInterval(function(){
        if(i < files.length){
            let image = document.createElement('img');
            image.src = String(files[i].name);
            div.appendChild(image);
            console.log(files[i].name);
            i++;
        }else{
            clearInterval(interval);
        }
    },100)
}

function marginChanger(){
    let marginVal = marginLis.value;
    console.log(marginVal);
    let img = div1.getElementsByTagName('img');
    if(marginVal == "none"){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "marginNone");
        }
    }else if(marginVal == "small"){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "marginSmall");
        }
    }else if(marginVal == "normal"){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "marginNormal");
        }
    }else if(marginVal == "big"){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "marginBig");
        }
    }
}
