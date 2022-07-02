

const sounds = ["fairy", "fireworks", "magic"]



sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        pause()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function pause() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}





