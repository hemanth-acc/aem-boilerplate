export default function decorate(block) {
    const flightSearchDiv = [...block.querySelectorAll('div')].find(div => div.textContent && div.textContent.includes('flight-search'));
    if (!flightSearchDiv) return;
    const flightSearch = document.createElement('div');
    flightSearch.id = 'flight-search';
    flightSearch.setAttribute('data-widget-type', 'flight-search');
    flightSearch.textContent = 'Hi';
    flightSearchDiv.replaceWith(flightSearch);
}
