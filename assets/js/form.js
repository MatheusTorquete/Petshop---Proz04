const formContainer = document.getElementById('form-container');
const form = document.getElementById('form');
const closeBtn = document.getElementById('close');
const msg = document.querySelector('main .message p');

const openForm = () => {
  formContainer.style.display = 'flex';

  setTimeout(() => {
    formContainer.classList.remove('hidden');
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }, 10);
};

const closeForm = () => {
  formContainer.classList.add('hidden');

  setTimeout(() => {
    formContainer.style.display = 'none';
    msg.style.display = 'none';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
  }, 500);
};

const submit = (event) => {
  event.preventDefault();

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const animal = document.getElementById('animal').value;
  const species = document.getElementById('species')?.value;

  if (!isValidEmail(email)) {
    alert('Email invalido');
    return;
  }

  if (phone != '' && !/^[0-9]+$/.test(phone)) {
    alert('Telefone invalido');
    return;
  }

 
  const formData = {
    name: name,
    email: email,
    phone: phone,
    animal: animal,
    species: species
  };

  
  localStorage.setItem('formData', JSON.stringify(formData));

  console.log('--- FORM DATA');
  console.log('name', name);
  console.log('email', email);
  console.log('phone', phone);
  console.log('animal', animal);
  console.log('species', species);

  msg.style.display = 'block';
};

form.addEventListener('submit', submit);