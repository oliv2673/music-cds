
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

    card.querySelector("button").addEventListener("click", function () {
        this.parentElement.remove();
    });

    cdsCon.appendChild(card);

    form.reset();

});