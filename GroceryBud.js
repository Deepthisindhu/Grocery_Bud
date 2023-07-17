let list=document.getElementById('items')
let input=document.getElementById('newTask')
let add=document.getElementById('submit')

add.addEventListener('click',addItem)

let itemsList=[]
let cid=0

function addItem(){
    let newValue=input.value
    if(newValue.trim()=='')
        return 
    input.value=''
    itemsList.push({
        id:cid,
        item: newValue
    })
    let newItem=document.createElement('div')
    newItem.textContent=newValue
    newItem.setAttribute('class',cid)
    newItem.classList.add('item')

    let del=document.createElement('button')
    del.setAttribute('class',cid)
    del.innerHTML='<img src="delete-icon.png">'
    del.addEventListener('click',deleteItem)
    newItem.appendChild(del)
    cid++
    list.appendChild(newItem)
}

function deleteItem(){
    const id=this.getAttribute('class')
    itemsList.splice(itemsList.indexOf(id),1)
    const delItem=document.getElementsByClassName(id)
    for(let i=0;i<delItem.length;i++){
        delItem[i].remove()
    }
}
