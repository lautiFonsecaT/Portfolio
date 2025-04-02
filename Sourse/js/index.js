import { about_me } from "./components/about_me.js";
import { proyects } from "./components/proyects.js"
import { contact } from "./components/contact.js"
import { studies } from "./components/studies.js"
import { send_email } from "./components/functions.js";

const btn_about_me = document.getElementById("about_me")
const btn_proyects = document.getElementById("proyects")
const btn_studies = document.getElementById("studies")
const btn_contact = document.getElementById("contact")
const form = document.getElementById("form")

const ARTICLE_CONTAINER = "article_container";

function renderHTML (content, container){
    const containerBOX = document.getElementById(container);
    containerBOX.innerHTML = content;
}

//renderHTML(about_me, ARTICLE_CONTAINER)

btn_about_me.addEventListener( 'click' , (e) => {
    renderHTML(about_me, ARTICLE_CONTAINER)
})
btn_studies.addEventListener( 'click' , (e) => {
    renderHTML(studies, ARTICLE_CONTAINER)
})
btn_proyects.addEventListener( 'click' , (e) => {
    renderHTML(proyects, ARTICLE_CONTAINER)
})
btn_contact.addEventListener( 'click' , (e) => {
    renderHTML(contact, ARTICLE_CONTAINER)
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    send_email(form)
})