export default function decorate(block) {
    const flightSearch = document.createElement('div')
    flightSearch.id = 'flight-search';
    flightSearch.setAttribute('data-widget-type', 'flight-search');
    flightSearch.innerHTML = 'Hi'
    block.replaceChildren(flightSearch);

}
