// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

document.getElementById('visitDate').valueAsDate = new Date();

function visitModal(){
    document.getElementById('visitDate').valueAsDate = new Date();
}

if (window.matchMedia('screen and (max-width: 768px)').matches) {
    console.log("tesst");
    const myCollapsible = new bootstrap.Collapse("#collapseWidthExample");
    myCollapsible.hide();
}