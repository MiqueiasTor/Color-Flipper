const body = document.querySelector('main');
const result_color = document.querySelector('main div');
window.onmousemove = (event) => {
    result_color.style.transform = `translate(${event.x/50}px, ${event.y/50}px)`;
}

const button = document.querySelector('button');
const items_menu1 = document.querySelectorAll('#first_menu ul div');
const items_menu2 = document.querySelectorAll('#second_menu ul div');
const notification = document.querySelector('#notification');
let check = 0;

items_menu1.forEach((item, ind) => {
    item.onclick = () => {
        check = ind+1;
    }
})

items_menu2.forEach((item, ind) => {
    item.onclick = () => {
        check = ind+1;
    }
})

let color_index = 0;
let aviso = 0;

const lista = [
    
    () => {
        notification.style.right = '20px';
        aviso++
        if (aviso > 1) {
            notification.innerHTML = 'O menu está acima da notificação';
        }
        setTimeout(() => {
            notification.style.right = '-80vw';
        }, 5000);
    },

    () =>{
        const list_color = ['#f0f', '#f00', '#0f0', '#00f'];
        body.style.backgroundColor = list_color[color_index];
        (color_index == list_color.length-1) ? (color_index = 0 ) : color_index++;
    },
    
    () =>{
        let color = '#' + Math.random().toString(16).slice(2, 8);
        body.style.backgroundColor = color;
        document.querySelector('#result').innerText = color;
    },
  
    () =>{

    }
]

button.onclick = () => {
    lista[check]();
}
