// I have to create an up counter from 0 to 10,000
const counter = document.querySelector('#counter');
const speed = 200;

const updateCount = () => {
    let currentVal = +counter.innerText;
    
    if(currentVal < 10000){
        counter.innerText = Math.ceil(currentVal+speed); //to avoid any decimal places
        setTimeout(updateCount, 50);        
    }else{
        counter.innerText = 10000;
    }
};

updateCount();
