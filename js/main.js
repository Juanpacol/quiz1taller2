function filterPets(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

document.querySelectorAll('.filter-container button').forEach(btn => {
    btn.addEventListener('click', () => filterPets(btn.dataset.category));
});
