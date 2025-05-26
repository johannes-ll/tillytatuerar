const text = "tatuerare i uppsala, här är mitt portfolio."
const textarray = text.split('')
const maintext = document.querySelector('#maintext')

textarray.forEach((c, i) => {
    setTimeout(() => {
        maintext.innerHTML += c
    }, 50 * i)
});