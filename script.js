function FV(PV,i,n){
    var x=(1+i/100)
    var FV=PV*(Math.pow(x,n))
    return FV;
}

function Cal_FV(){
    var pvalue=parseFloat(document.getElementById("presentValue").value);
    var interest=parseFloat(document.getElementById("interest").value);
    var num=parseInt(document.getElementById("years").value);
    var fvalue=FV(pvalue, interest, num);
    var fv=fvalue.toFixed(2);
    document.getElementById('ans').textContent="The future value is= "+fv;
    var svgImage = document.getElementsByClassName('svg4')[0];
    svgImage.classList.add('svgView');
}

function onKeyUpHandler (e) {
    console.log(e);
    var firstBubble = document.getElementById('firstBubble');
    var secondBubble = document.getElementById('secondBubble');
    var thirdBubble = document.getElementById('thirdBubble');
    var fourthBubble = document.getElementById('fourthBubble');
    var fifthBubble = document.getElementById('fifthBubble');
    var rightHand = document.getElementById('rightHand');
    var leftHand = document.getElementById('leftHand');
    
    if(e.key == 1) {
        firstBubble.classList.add('firstBubbleAni');
        rightHand.classList.add('rightHandAni')
    }
    if(e.key == 2) {
        secondBubble.classList.add('secondBubbleAni');
        leftHand.classList.add('leftHandAni');
    }
    if(e.key == 3) {
        thirdBubble.classList.add('thirdBubbleAni');
        rightHand.classList.remove('rightHandAni')
    }
    if(e.key == 4) {
        fourthBubble.classList.add('fourthBubbleAni');
        leftHand.classList.remove('leftHandAni');
    }
    if(e.key == 5)
    fifthBubble.classList.add('fifthBubbleAni');

}

function onKeyUpHandler2 (ev) {
    var line = document.getElementById('line');
    if(ev.key == 1) {
        line.classList.add("lineAni");
    }
    if(ev.key == 2) {
        line.classList.remove("lineAni");
    }
 }


var presentValue = document.getElementById('presentValue');
presentValue.addEventListener("keyup",onKeyUpHandler);

var interestRate = document.getElementById('interest');
interestRate.addEventListener("keyup",onKeyUpHandler2);

var btn = document.getElementById('btn');
btn.addEventListener("click",Cal_FV);