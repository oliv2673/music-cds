const form = document.querySelector('#formCD');
const cdsCon = document.querySelector('#cds');

// Load stored CDs on page load
document.addEventListener('DOMContentLoaded', () => {
    // Retrieves stored CDs from LocalStorage and adds them to the UI
    (JSON.parse(localStorage.getItem('cds')) || []).forEach(addCDToUI);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gets values from the form
    const cd = {
        author: form.author.value,
        title: form.title.value,
        year: form.year.value
    };

    // Gets existing CDs from LocalStorage or initializes an empty array
    let cds = JSON.parse(localStorage.getItem('cds')) || [];
    cds.push(cd); // Adds the new CD to the array
    localStorage.setItem('cds', JSON.stringify(cds)); // Saves to LocalStorage

    // Puts the CD into the UI
    addCDToUI(cd, cds.length - 1);

    // Resets the form after submitting
    form.reset();
});

// Function to add a CD to the UI
function addCDToUI(cd, index) {
    const card = document.querySelector('#cd-card').content.cloneNode(true);

    // Sets CD details
    card.querySelector('.subAuthor').textContent = cd.author;
    card.querySelector('.subTitle').textContent = cd.title;
    card.querySelector('.subYear').textContent = cd.year;

    // Removes a CD from the list and LocalStorage
    card.querySelector("button").addEventListener("click", function () {
        this.parentElement.remove();
        removeCD(index);
    });

    // Puts the template inside the #cds
    cdsCon.appendChild(card);
}

// Function to remove a CD from LocalStorage
function removeCD(index) {
    let cds = JSON.parse(localStorage.getItem('cds')) || [];
    cds.splice(index, 1); // Removes the selected CD
    localStorage.setItem('cds', JSON.stringify(cds)); // Updates LocalStorage
}