function addItem(){
    let list = document.getElementById('todolist');
    let todo = document.getElementById('item');
    let listitem = document.createElement('li');
    let xbtn = document.createElement('button');

    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

    xbtn.className='close'
    xbtn.innerHTML='&times'
    xbtn.oneclick=function(e){
        let pnode= e.target.parentNode;
        list.removeChild(pnode)
    }

    listitem.innerHTML=todo.ariaValueMax;
    listitem.appendChild(xbtn);
    list.appendChild(listitem);
}