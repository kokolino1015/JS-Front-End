window.addEventListener("load", solve);

function solve() {
    const formData = {
        fName: '',
        lName: '',
        age: '',
        title: '',
        genre: '',
        story: '',
    }
    const inputValues =
        {
            fName: document.getElementById('first-name'),
            lName: document.getElementById('last-name'),
            age: document.getElementById('age'),
            title: document.getElementById('story-title'),
            genre: document.getElementById('genre'),
            story: document.getElementById('story'),

        }
    const createStory = document.getElementById('form-btn');
    const otherData ={
        preview: document.getElementById('preview-list'),
        main:document.getElementById('main'),
    }
    createStory.addEventListener('click', createHandler);

    function createHandler() {
        console.log(inputValues.title.value);
        for (const argumentsKey in inputValues) {
            if(inputValues[argumentsKey].value.trim().length === 0){
                return
            }
        }
        const li = document.createElement('li');
        li.classList.add('story-info');
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = `Name: ${inputValues.fName.value} ${inputValues.lName.value}`
        const pAge = document.createElement('p');
        pAge.textContent = `Age: ${inputValues.age.value}`;
        const pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${inputValues.title.value}`;
        const pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${inputValues.genre.value}`;
        const p = document.createElement('p');
        p.textContent = inputValues.story.value;
        article.appendChild(h4);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(p);
        li.appendChild(article);
        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save Story';
        saveButton.addEventListener('click', saveButtonHandler);
        li.appendChild(saveButton);
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Story';
        editButton.addEventListener('click', editButtonHandler);
        li.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete Story';
        deleteButton.addEventListener('click', deleteButtonHandler);
        li.appendChild(deleteButton);
        otherData.preview.appendChild(li);
        for (const variable in inputValues) {
            formData[variable] = inputValues[variable].value;
            inputValues[variable].value = ''
        }
        createStory.disabled = true;

    }
    function saveButtonHandler(){
        otherData.main.innerHTML = '';
        const h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        otherData.main.appendChild(h1);
    }
    function editButtonHandler(){
        createStory.disabled = false;
        otherData.preview.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.textContent = 'Preview';
        otherData.preview.appendChild(h3);
        for (const variable in inputValues) {
            inputValues[variable].value = formData[variable];
        }
    }
    function deleteButtonHandler(){
        createStory.disabled = false;
        otherData.preview.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.textContent = 'Preview'
        otherData.preview.appendChild(h3);
    }

}
