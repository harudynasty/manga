$(function(){
    

const marginLis = document.getElementById('margin');
let n = 0;
marginChanger();



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

});