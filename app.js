import {pg1} from "./pagina1.js"
import {pg2} from "./pagina2.js"
import {pg3} from "./pagina3.js"




const routes = {
    "/": `<h1>Pagina Inicial</h1>`,
    "/pagina1": pg1,
    "/pagina2": pg2,
    "/pagina3": pg3,
}

const pegarRoot = document.getElementById('root');

pegarRoot.innerHTML = routes[window.location.pathname] == undefined ? "<h1>Pagina não encontrada</h1>"
: routes[window.location.pathname];

const navegacao = (pathname)=>{
    window.history.pushState({},pathname,window.location.origin+pathname)
    pegarRoot.innerHTML = routes[pathname];
}
const pegarLi = document.querySelectorAll('li');

pegarLi[0].addEventListener('click',()=>{
    navegacao("/");
    return false;
});
pegarLi[1].addEventListener('click',()=>{
    navegacao("/pagina1");
    return false;
});
pegarLi[2].addEventListener('click',()=>{
    navegacao("/pagina2");
    return false;
});
pegarLi[3].addEventListener('click',()=>{
    navegacao("/pagina3");
    return false;
});

