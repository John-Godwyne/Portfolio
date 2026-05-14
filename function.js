function toggle(card) {
    card.classList.toggle('expanded');
    const symbol = card.querySelector('.acard-toggle');
    symbol.textContent = card.classList.contains('expanded') ? '[-]' : '[+]';
}