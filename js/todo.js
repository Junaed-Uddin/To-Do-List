let count = 0;
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field').value;
    count++;
    const tableBody = document.getElementById('tableBody');

    const tableRows = document.createElement('tr');
    tableRows.innerHTML = `   
        <td scope="col">${count}</td>
        <td scope="col">${inputField}</td>
        <td scope="col">
        <button class="btn btn-success done-btn">Done</button>
        <button class="btn btn-danger mt-2 mt-md-0 delete-btn">Delete</button>
        </td> 
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
            const tbodyChildCount = document.getElementById('tableBody').childElementCount;
            if (tbodyChildCount == 0) {
                removeAll();
            }
        })
    }
    // add done button implement 
    const doneBtns = document.getElementsByClassName('done-btn');
    for (const doneBtn of doneBtns) {
        doneBtn.addEventListener('click', function (event) {
            const td1 = event.target.parentNode.previousElementSibling.previousElementSibling;
            const td2 = event.target.parentNode.previousElementSibling;
            td1.style.textDecoration = 'line-through';
            td1.style.color = '#b3b1b1';
            td2.style.textDecoration = 'line-through';
            td2.style.color = '#b3b1b1';
        })
        document.getElementById('input-field').value = '';
    }
});




document.getElementById('clear-all').addEventListener('click', function () {
    removeAll();
});

function removeAll() {
    document.getElementById("tableBody").innerHTML = "";
    document.getElementById('clear-all').style.display = 'none';
    window.location.reload();
}