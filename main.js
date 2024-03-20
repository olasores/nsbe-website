// change nav on scroll

window.addEventListener('scroll', () =>  {
     document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY > 0)
})


// Nav onclick show menu 

const menu = document.querySelector(".nav__menu"); 
const menuBtn = document.querySelector("#open-menu-btn"); 
const closeBtn = document.querySelector("#close-menu-btn"); 


menuBtn.addEventListener('click', () => {
     menu.style.display = "flex"; 
     closeBtn.style.display = "inline-block"; 
     menuBtn.style.display ="none"; 
})

// close menu btn 

const closeNav = () => {
     menu.style.display = "none"; 
     closeBtn.style.display = "none"; 
     menuBtn.style.display = "inline-block"; 
}

closeBtn.addEventListener('click', closeNav)


const form = document.querySelector("form"); 
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("form")


function sendEmail() {
     const bodyMessage = `Fullname`
     Email.send({
          Host : "smtp.elasticemail.com",
          Username : "presidentcsufnsbe@gmail.com",
          Password : "3B3228C0C39602643B668A78FAFF2917D3FD",
          To : 'presidentcsufnsbe@gmail.com',
          From : "presidentcsufnsbe@gmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}

form.addEventListener("submit", (e) => {
     e.preventDefault(); 

     sendEmail(); 
})