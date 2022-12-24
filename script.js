window.addEventListener("load",() => {
    const sounds=document.querySelectorAll(".sound")
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector(".visual");
    const colors=["#1abc9c","#e67e22","#e74c3c","#f1c40f","#8e44ad","#34495e"];
    
    pads.forEach((pad,index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles= (index) =>{
        const bubble=document.createElement("div");
        // const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
});
