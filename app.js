const text = "tatuerare i uppsala, här är mitt portfolio."
const textarray = text.split('')
const maintext = document.querySelector('#maintext')
const stars = document.querySelector('#stars')

textarray.forEach((c, i) => {
    setTimeout(() => {
        maintext.innerHTML += c
    }, 50 * i)
})

const star = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★', '★★★★★', '★★★★★', '☆☆☆☆☆', '★★★★★', '☆☆☆☆☆', '★★★★★', '★★★★★', '★★★★★', '']

let index = 0

setInterval(() => {
stars.innerHTML = star[index]
index = (index + 1) % star.length
}, 500)