
const form = document.querySelector('#formCD');
const cdsCon = document.querySelector('#cds');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const year = document.querySelector('#year').value;

    const card = document.querySelector('#cd-card').content.cloneNode(true);

    card.querySelector('.subAuthor').textContent = author;
    card.querySelector('.subTitle').textContent = title;
    card.querySelector('.subYear').textContent = year;

    //Removes a CD on the list
    card.querySelector("button").addEventListener("click", function () {
        this.parentElement.remove();
    });

    //Puts the template inside the #cds
    cdsCon.appendChild(card);

    //resets the form after submitting
    form.reset();

});