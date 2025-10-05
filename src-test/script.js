const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signup');
const loginBtn = document.getElementById('login');
const uploadSection = document.getElementById('upload-section');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const status = document.getElementById('status');
const accessDenied = document.getElementById('access-denied');

let loggedIn = false;

// Fake auth (demo)
signupBtn.onclick = () => {
  alert(`Account created for ${emailInput.value}`);
};

loginBtn.onclick = () => {
  if (emailInput.value && passwordInput.value) {
    loggedIn = true;
    document.getElementById('auth').classList.add('hidden');
    uploadSection.classList.remove('hidden');
  } else {
    alert('Enter your credentials');
  }
};

// Simulated protection system
uploadBtn.onclick = async () => {
  if (!loggedIn) return accessDenied.classList.remove('hidden');

  const file = fileInput.files[0];
  if (!file) return alert('No file selected');

  const text = await file.text();

  // "Encrypt" (mock) file
  const encoded = btoa(unescape(encodeURIComponent(text)));
  status.textContent = `✅ Script protected!\n\nPreview:\n${encoded.slice(0, 80)}...`;
};
