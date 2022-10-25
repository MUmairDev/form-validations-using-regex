const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/gi,
  username: /^[a-z/d]{5, 12}$/gi,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    console.log("valid");
    field.className = "valid";
  } else {
    field.className = "invalid";
    console.log("invalid");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
