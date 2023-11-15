const adviceNum = document.querySelector(".advice-num")
const adviceQuote = document.querySelector(".quote")
const adviceBtn = document.querySelector(".btn")
const url = "https://api.adviceslip.com/advice";


async function getAdvice() {    
    
    const cacheBuster = Date.now();
    const requestUrl = `${url}?_=${cacheBuster}`;

    const res = await fetch(requestUrl);
    const { slip: {id, advice}} = await res.json();
    adviceNum.innerHTML = id;
    adviceQuote.innerHTML = advice;      
}

adviceBtn.addEventListener("click", getAdvice)




