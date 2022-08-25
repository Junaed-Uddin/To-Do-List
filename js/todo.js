let count = 0;
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field').value;
    count++;
    const tableBody = document.getElementById('tableBody');

    const tableRows = document.createElement('tr');
    tableRows.innerHTML = `   
        <th scope="col">${count}</th>
        <th scope="col">${inputField}</th>
        <th scope="col">
        <button class="btn btn-success done-btn">Done</button>
        <button class="btn btn-danger mt-2 mt-md-0 delete-btn">Delete</button>
        </th> 
    `
    if (inputField === '') {
        alert('Please Enter Something.!');
    }
    else {
        tableBody.appendChild(tableRows);
        document.getElementById('clear-all').style.display = 'inline-block';
    }
    // add to delete addEventListener 
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for (const button of deleteBtns) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.remove(event.target.parentNode.parentNode);
        })
    }
    const doneBtns = document.getElementsByClassName('done-btn');
    // add to edit addEventListener
    for (let i = 0; i < doneBtns.length; i++) {
        const doneBtn = doneBtns[i];
        const th1 = event.target.parentNode.previousElementSibling.previousElementSibling;
        const th2 = event.target.parentNode.previousElementSibling;
        doneBtn.addEventListener('click', function (event) {
            th1.style.textDecoration = 'line-through';
            th2.style.textDecoration = 'line-through';
        })
    }
    document.getElementById('input-field').value = '';
});


document.getElementById('clear-all').addEventListener('click', function () {
    removeAll();
});

function removeAll() {
    document.getElementById("tableBody").innerHTML = "";
    document.getElementById('clear-all').style.display = 'none';
    window.location.reload();
}