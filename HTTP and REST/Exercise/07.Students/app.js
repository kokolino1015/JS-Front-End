function attachEvents() {
    window.addEventListener('load', listStudents)
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
    const firstName = document.getElementsByName('firstName')[0];
    const lastName = document.getElementsByName('lastName')[0];
    const facultyNumber = document.getElementsByName('facultyNumber')[0];
    const grade = document.getElementsByName('grade')[0];
    const tbody = document.querySelector('tbody');
    const button = document.getElementById('submit');
    button.addEventListener('click', addStudent);

    function listStudents() {
        fetch(BASE_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (const dataKey in data) {
                    const tr = document.createElement('tr');
                    const thFirstName = document.createElement('th');
                    thFirstName.textContent = data[dataKey].firstName;
                    const thLastName = document.createElement('th');
                    thLastName.textContent = data[dataKey].lastName;
                    const thFacultyNumber = document.createElement('th');
                    thFacultyNumber.textContent = data[dataKey].facultyNumber;
                    const thGrade = document.createElement('th');
                    thGrade.textContent = data[dataKey].grade;
                    tr.appendChild(thFirstName);
                    tr.appendChild(thLastName);
                    tr.appendChild(thFacultyNumber);
                    tr.appendChild(thGrade);
                    tbody.appendChild(tr);
                }
            })
    }

    function addStudent() {
        const httpHeader = {
            method: "POST",
            body: JSON.stringify({
                'firstName': firstName.value,
                'lastName': lastName.value,
                'facultyNumber': facultyNumber.value,
                'grade': grade.value
            })
        }
        fetch(BASE_URL, httpHeader);
    }
}

attachEvents();