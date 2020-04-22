const form = document.forms[0]

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const inputContainer = document.querySelector('.form-input-container')
  function isValid(email) {
    return /@\w+\.\w+/ig.test(email)
  }

  if (isValid(email)) {
    inputContainer.classList.remove('input-error')
    setTimeout(() => alert("Thank you for subscribing!"), 500)
  } else {
    inputContainer.classList.add('input-error')
  }

})