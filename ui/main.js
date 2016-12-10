console.log('Loaded!');
var ele=document.getElementById('id1');
ele.innerHTML='heyyy';
var ele1=document.getElementById('imgid');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+ 10; 
    ele1.style.marginLeft=marginLeft+'px';
}
ele1.onclick = function(){
    var i=setInterval(moveRight,100);
    
};