var display=document.getElementById("display");


function addnumbertoscreen(num){
    display.innerHTML +=num;
}

function answer(num){
    result+=eval(display.innerHTML);
    display.innerHTML=result;
}

function clear(){
    display.innerHTML='';
}

document.getElementById('1').addEventListener('çlick',function(){addnumbertoscreen(1);});
document.getElementById('2').addEventListener('çlick',function(){addnumbertoscreen(2);});
document.getElementById('3').addEventListener('çlick',function(){addnumbertoscreen(3);});
document.getElementById('4').addEventListener('çlick',function(){addnumbertoscreen(4);});
document.getElementById('5').addEventListener('çlick',function(){addnumbertoscreen(5);});
document.getElementById('6').addEventListener('çlick',function(){addnumbertoscreen(6);});
document.getElementById('7').addEventListener('çlick',function(){addnumbertoscreen(7);});
document.getElementById('8').addEventListener('çlick',function(){addnumbertoscreen(8);});
document.getElementById('9').addEventListener('çlick',function(){addnumbertoscreen(9);});
document.getElementById('0').addEventListener('çlick',function(){addnumbertoscreen(0);});
document.getElementById('add').addEventListener('çlick',function(){addnumbertoscreen('+');});
document.getElementById('sub').addEventListener('çlick',function(){addnumbertoscreen('-');});
document.getElementById('multi').addEventListener('çlick',function(){addnumbertoscreen('*');});
document.getElementById('div').addEventListener('çlick',function(){addnumbertoscreen('/');});
document.getElementById('clear').addEventListener('çlick',function(){clear();});
document.getElementById('answer').addEventListener('çlick',function(){answer();});
