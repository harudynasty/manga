$(function(){
    
//document.cookie = "margin="+  +";expires=Wed, 22 Nov 2037 11:37:37 GMT;path=/";

/*document.addEventListener("visibilitychange", function(){
    this.location.reload();
});*/

const div = document.getElementById('div1');
const marginLis = document.getElementById('margin');
let n = 0;
let image;
imageLoad();
marginChanger();

/*myImage.addEventListener('load', function() {
	console.log('My width is: ', this.naturalWidth);
	console.log('My height is: ', this.naturalHeight);
});*/


function imageLoad(){
    let boo1 = true;
    let interval = setInterval(function(){
        image = document.createElement('img');
        image.addEventListener("error", function(e){
            boo1 = false;
            e.target.remove();
            clearInterval(interval);
            n--;
            console.log(n);
            marginLis.addEventListener('change', marginChanger);
        });
        image.src = "1_" + String(n) +".jpg";
        if(boo1){
            div.appendChild(image);
            n++;
        }
        
    },100);
}

function marginChanger(){
    let marginVal = marginLis.value;
    console.log(marginVal);
    let img = div1.getElementsByTagName('img');
    if(marginVal == 0){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin0");
        }
    }else if(marginVal == 1){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin1");
        }
    }else if(marginVal == 2){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin2");
        }
    }else if(marginVal == 3){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin3");
        }
    }else if(marginVal == 4){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin4");
        }
    }else if(marginVal == 5){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin5");
        }
    }else if(marginVal == 6){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin6");
        }
    }else if(marginVal == 7){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin7");
        }
    }else if(marginVal == 8){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin8");
        }
    }else if(marginVal == 9){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin9");
        }
    }else if(marginVal == 10){
        for(let i=0; i<n; i++){
            img[i].setAttribute("class", "margin10");
        }
    }
}

});