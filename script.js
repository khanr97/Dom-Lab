
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
//task 1.1
const mainEl = document.querySelector("main")
mainEl.style.background = ("var(--main-bg)")
//task 1.2 and 1.3
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")
//task 2.0
const topMenuEl = document.querySelector("#top-menu")
//task 2.1
document.querySelector("#top-menu").style.height = "100%"
//task 2.2
topMenuEl.style.background = ("var(--top-menu-bg)")
//task 2.3
topMenuEl.classList.add("flex-around")

//Task 3.1
menuLinks.forEach(function (str) {
  const aEl = document.createElement("a")
  aEl.setAttribute("href", str.href)
  aEl.textContent = str.text
  topMenuEl.append(aEl)
  console.log(str.text)
})

// menuLinks.forEach((link) => {
//    const a = document.createElement("a")
//    a.setAttribute('href',link.href)
//    a.textContent= link.text
//    topMenuEl.append(a)
// })

// for(let i=0;i<menuLinks.length;i++) {
//    aEl = document.createElement('a')
//    aEl.setAttribute("href",menuLinks[i].href)
//    aEl.textContent = menuLinks[i].text
//    topMenuEl.append(aEl)
// }

//task 4.0 
const subMenuEl = document.querySelector("#sub-menu")
//task 4.1
subMenuEl.style.height = "100%"
//task 4.2
subMenuEl.style.background = ("var(--sub-menu-bg)")
//task 4.3
subMenuEl.classList.add("flex-around")
//task 4.4
subMenuEl.style.position = "absolute"
//task 4.5
subMenuEl.style.top = "0"

//=============PART 2=================
//task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu > a")
//const topMenuLinks = topMenuEl.querySelectorAll("a")
console.log(topMenuLinks)
let showingSubMenu = false

//task 5.2
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault()
  if (evt.target.nodeName.toUpperCase() !== "A") {
    return
  }
  console.log(evt.target.textContent)
  //task 5.3
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active")
    showingSubMenu = false
    subMenuEl.style.top = "0"
    return
  }
  //task 5.4
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');
    console.log(arg);
  });

  //task 5.5
  evt.target.classList.add("active")
  //task 5.6
  let text = evt.target.textContent
  let currentLink = {}
  for (let i = 0; i < menuLinks.length; i++) {
    if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty("subLinks")
      currentLink = menuLinks[i]
    }
  }
  //console.log(showingSubMenu)
  //console.log(currentLink)
  //task 5.7=========
  if (showingSubMenu === true) {
    subMenuEl.style.top = "100%"
    buildSubMenu(currentLink)
  } else {
    subMenuEl.style.top = "0"
  }
  //task 5.8======================================
  function buildSubMenu() {
    subMenuEl.textContent = ""
    currentLink.subLinks.forEach((link) => {
      let aLink = document.createElement("a")
      aLink.setAttribute('href', link.href)
      aLink.textContent = link.text
      subMenuEl.append(aLink)
    })

  }
  //6.4
  if (evt.target.text === "about") {
    mainEl.innerHTML = `<h1 style = "text-transform:uppercase;">${evt.target.text}</h1>`;
  }
})
//TASK 6.0

subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault()
  if (evt.target.nodeName.toUpperCase() !== "A") {
    return
  }
  //console.log(evt.target.nodeName)//works

  //task6.1
  showingSubMenu = false
  subMenuEl.style.top = "0"
  //6.2
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');
    console.log(arg);
  });
  //6.3
  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`;
  //6.4 after 5.8
})




//task 5.6
// showingSubMenu = evt.target.hasOwnProperty("subLinks") 
//let text = evt.target.textContent
//console.log(text)
// if(showingSubMenu===true) {
//   buildSubMenu(currentLink)
//   subMenuEl.style.top = "100%"
// }
// if (menuLinks[i].hasOwnProperty("subLinks")) {
//   console.log(menuLinks[i].subLinks)
// }else {
//   showingSubMenu= false;
// }
//=========task 5.7==========================



// if(showingSubMenu == true) {
//   buildSubMenu(menuLinks.subLinks)
//   subMenuEl.style.top = "100%"
// }else {
//   subMenuEl.style.top = "0"
// }
// buildSubMenu () 