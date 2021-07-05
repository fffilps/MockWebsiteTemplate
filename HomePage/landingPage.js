const navTabs = document.getElementById("tabs")
const select = navTabs.getElementsByTagName('li')
const h2 = document.querySelector('h2')

navTabs.addEventListener('click', () => {
    h2.innerText = "Tappp In";
})