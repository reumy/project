var doc = document;
var box = doc.getElementById('box');
var btn = doc.getElementById('btn');
var todoUl = doc.getElementById('todoUl');
var doneUl = doc.getElementById('doneUl');
var todoLi = todoUl.querySelectorAll('li');

box.focus();

btn.addEventListener('click', btnFunc);
box.addEventListener('keyup', enterFunc);

function btnFunc(){
  var newLi = doc.createElement('li');
  var inner = doc.createElement('span');
  var todoBtn = doc.createElement('input');
  var modiBtn = doc.createElement('input');
  var conBtn = doc.createElement('input');
  var modiBox = doc.createElement('input');
  var modiTxt = doc.createElement('span');

  inner.innerHTML = box.value;  
  todoBtn.type = 'checkbox';
  todoBtn.checked = false;
  todoBtn.className = 'todoBtn';
  modiBtn.type = 'button';
  modiBtn.className = 'modiBtn';
  modiBtn.value = 'MODIFY';
  modiBox.className = 'modiBox';  
  conBtn.type = 'button';
  conBtn.value = 'CONFIRM';
  conBtn.className = 'modiBtn';

  // Button Stlye
  var todoLabel = doc.createElement('label');
  var todoCss = doc.createElement('span');
  todoLabel.className = 'container';
  todoCss.className = 'checkmark';  
  
  newLi.appendChild(todoLabel); 
  todoLabel.appendChild(todoBtn);
  todoLabel.appendChild(todoCss);
  newLi.appendChild(inner); 
  newLi.appendChild(modiBtn);
  todoUl.appendChild(newLi);

  box.value = "";
  box.focus();

  todoBtn.addEventListener('click', todoFunc);
  modiBtn.addEventListener('click', modiFunc);
  conBtn.addEventListener('click', confirmFunc);

  function todoFunc(){
    if (todoBtn.checked == true) {
      newLi.removeChild(modiBtn);
      doneUl.appendChild(newLi);
    } else {
      newLi.appendChild(modiBtn);
      todoUl.appendChild(newLi);
    }
  }

  function modiFunc(){
    newLi.appendChild(conBtn);
    newLi.removeChild(modiBtn);

    newLi.appendChild(modiBox);
    modiBox.value = inner.textContent;
    modiBox.focus();
    newLi.removeChild(inner);
  }

  function confirmFunc(){
    newLi.appendChild(modiBtn);
    newLi.removeChild(conBtn);

    newLi.appendChild(modiTxt);
    modiTxt.innerHTML = modiBox.value;
    newLi.removeChild(modiBox);    
  }
}

function enterFunc(e){
  if (e.keyCode == 13){
    btnFunc();
  }
}


