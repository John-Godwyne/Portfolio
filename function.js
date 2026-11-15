function toggle(card, event) {
    
    const e = event || window.event;
    
   
    if (e && e.target.closest("a[href]")) {
        return;
    }

    card.classList.toggle('expanded');
    const symbol = card.querySelector(':scope > .acard-header > .acard-toggle');
    if (symbol) {
        symbol.textContent = card.classList.contains('expanded') ? '[-]' : '[+]';
    }
}

function newTab() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link) return;

        
        const hrefAttr = link.getAttribute("href").trim();
        if (!hrefAttr || hrefAttr === "#") return;

        const isWebLink = link.protocol === "http:" || link.protocol === "https:";
        const isExternal = link.hostname !== window.location.hostname;

        if (isWebLink && isExternal) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
}

newTab();
