const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value != '') {
        let li = document.createElement('li');
        li.innerText = input.value;
        list.append(li);
        let deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        li.append(deleteButton);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
    else {
        input.focus();
    }
    input.value = '';
    
})