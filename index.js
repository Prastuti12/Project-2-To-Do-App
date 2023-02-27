                                                                                                                                                                                                                                                                   
const body = document.body;
const MyInput = document.querySelector('#Myinput');
const MyBtn = document.querySelector('#Mybtn');
const Mylist = document.querySelector('ul');

function create(){
const temp = MyInput.value;
if(temp==""){
    alert('Please Enter Value');
}
    else{
        const item = document.createElement('li');
        Mylist.appendChild(item);
        item.textContent = temp;
        MyInput.value = "";

        const newbtn = document.createElement('Button');
        newbtn.textContent = 'Complete';
        newbtn.setAttribute('class','btn completebtn btn-primary')
        item.appendChild(newbtn);
        
       
        const dltBtn = document.createElement('Button');
        dltBtn.textContent = 'Delete';
        dltBtn.setAttribute('class','btn delete btn-primary')
        item.appendChild(dltBtn);
        dltBtn.addEventListener('click',() => item.parentNode.removeChild(item));

        newbtn.addEventListener('click',() =>{
                item.setAttribute('class','complete');
        })
    }
};


MyBtn.addEventListener('click',create);
// resetBtn.addEventListener('click',() => Mylist.parentNode.removeChild(Mylist));

