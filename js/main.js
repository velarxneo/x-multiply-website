document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value);
      var email = encodeURIComponent(form.email.value);
      var message = encodeURIComponent(form.message.value);
      var subject = encodeURIComponent("Enquiry from " + form.name.value);
      var body = "Name: " + form.name.value + "%0D%0AEmail: " + form.email.value + "%0D%0A%0D%0A" + message;
      window.location.href = "mailto:hello@xmultiply.sg?subject=" + subject + "&body=" + body;
    });
  }
});
