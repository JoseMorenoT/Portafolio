// activa tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// alert

$(document).ready(function () {
  $("#liveAlertBtn").click(function () {
    alert("Información enviada!");
  });
});
