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

$("#rowAdder").click(function () {
    newRowAdd =
    '<div id="row" class="row d-flex justify-content-between"><div class="col-12 col-md-8 col-lg-9 pe-3"><div class="input-group mb-2">' +
    '<button class="btn btn-danger" id="DeleteRow" type="button">' +
    '<i class="bi bi-trash"></i>&nbsp;&nbsp;Delete</button>' +
    '<select class="form-select">'+
    '<option selected>Allerta</option>'+
    '<option value="1">Bioflu</option>'+
    '<option value="2">Biogesic</option>'+
    '</select></div></div>'+
    '<div class="col-6 col-md-4 col-lg-3"><div class="input-group mb-2">'+
    '<span class="input-group-text" id="basic-addon1">Qty.</span>'+
    '<input type="number" value="1" class="form-control">'+
    '</div></div>'+
    '</div>';

    $('#newinput').append(newRowAdd);
});

$("body").on("click", "#DeleteRow", function () {
    $(this).parents("#row").remove();
})