const loading = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let percentage=0

let int = setInterval(blureffect, 30)

function blureffect(){
    percentage++

    if (percentage>99) {
        clearInterval(int)
    }

    loading.innerText = `${percentage}`
    loading.style.opacity =  scale(percentage,0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }