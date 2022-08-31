function createLabel(text, nameAttr) {
  const newLabel = document.createElement('label');
  const newContent = document.createTextNode(text);
  newLabel.appendChild(newContent);
  newLabel.setAttribute('for', nameAttr);
  return newLabel;
}

function injectLabelToDom(label, parent, input) {
  parent.insertBefore(label, input);
}

function handleBlur(e) {
  const parent = e.target.parentNode;
  const input = e.target;
  if (input.value == '' && parent.classList.contains('focused')) {
    parent.classList.remove('focused');
  }
}
function handleFocus(e) {
  const parent = e.target.parentNode;

  if (!parent.classList.contains('focused')) {
    parent.classList.add('focused');
  }
}

function handleInputFile(e) {
  const input = e.target;
  const parent = input.parentNode;
  const fileUploaded = input.files.length > 0;

  if (fileUploaded) {
    const spanFileName = document.querySelector('span.file-name');
    const newSpan = document.createElement('span');
    newSpan.classList.add('file-name');
    newSpan.textContent = input.files[0].name;
    if (spanFileName !== null) {
      spanFileName.parentElement.removeChild(spanFileName);
    }
    injectLabelToDom(newSpan, parent, input);
  }

  if (!fileUploaded) {
    const fileNameSpan = document.querySelector('span.file-name');
    fileNameSpan && fileNameSpan.delete();
  }

  if (fileUploaded && !parent.classList.contains('focused')) {
    parent.classList.add('focused');
  }

  else if (!fileUploaded && parent.classList.contains('focused')) {
    parent.classList.remove('focused');
  }
}

function handleSelectChange(e) {
  const courseIsSelected = e.target.value !== '';
  const parent = e.target.parentNode;
  const parentIsFocused = parent.classList.contains('focused');


  if (courseIsSelected && !parentIsFocused) {
    parent.classList.add('focused');
  }

  if (!courseIsSelected && parentIsFocused) {
    parent.classList.remove('focused');
  }
}

function listenForFocus(inputs) {
  inputs.forEach(input => input.addEventListener('focus', handleFocus));
}

function listenForBlur(inputs) {
  inputs.forEach(input => input.addEventListener('blur', handleBlur));
}

function handleRegistrationForm() {
  const allTextInputs = document.querySelectorAll('.activenow-required-field > input[type="text"]');

  const select = document.querySelector('#eventable_id');

  if (allTextInputs) {
    allTextInputs.forEach(input => {
      const newText = input.placeholder;
      const nameAttr = input.getAttribute('name');
      const parentNode = input.parentNode;

      const label = createLabel(newText, nameAttr);

      injectLabelToDom(label, parentNode, input);
    })
  }

  if (select) {
    const newText = select.firstChild.textContent;
    const nameAttr = select.getAttribute('name');
    const parentNode = select.parentNode;

    const label = createLabel(newText, nameAttr);
    injectLabelToDom(label, parentNode, select);

    select.addEventListener('change', handleSelectChange);
  }

  listenForFocus(allTextInputs);
  listenForBlur(allTextInputs);
}


function handleWorkWithUsForm() {
  const formInputs = document.querySelectorAll('.wpcf7-form-control-wrap input');
  const fileInput = document.querySelector(".wpcf7-form-control-wrap input[type='file']");

  if (formInputs) {
    formInputs.forEach(input => {
      if (input.type !== "checkbox" && input.type !== "file") {
        const newText = input.placeholder;
        const nameAttr = input.getAttribute('name');
        const parentNode = input.parentNode;

        const label = createLabel(newText, nameAttr);
        injectLabelToDom(label, parentNode, input);
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
      }
    })
  }

  if (fileInput) {
    const newText = "Dodaj CV"
    const nameAttr = fileInput.getAttribute('name');
    const parentNode = fileInput.parentNode;

    const label = createLabel(newText, nameAttr);
    injectLabelToDom(label, parentNode, fileInput);

    fileInput.addEventListener('change', handleInputFile);
  }

}

handleWorkWithUsForm();
window.setTimeout(handleRegistrationForm, 600);