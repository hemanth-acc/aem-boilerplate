export default function decorate(block) {
    const flightSearch = document.createElement('div')
    flightSearch.id = 'flight-search';
    flightSearch.setAttribute('data-widget-type', 'flight-search');
    block.replaceChildren(flightSearch);
}
