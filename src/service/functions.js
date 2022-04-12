const popup = document.getElementById('add-skill-popup');
const popupForm = document.getElementById('add-skill-form');
const skillContainer = document.getElementById('skill-container');
const skillNameInput = document.getElementById('skill-name');
let skillName = '';


const skillTemplate = (skillName) => `
  <div class="skill-rate col-sm-6 col-lg-4 px-4 d-flex align-items-center justify-content-between mb-4">
    <h4 class="font-weight-bold">${skillName}</h4>
    <div class="d-flex justify-content-between position-relative">
      <span class="circle-component bg-orange"></span>
      <span class="circle-component bg-orange mx-1"></span>
      <span class="circle-component bg-orange"></span>
      <span class="circle-component bg-orange mx-1"></span>
      <span class="circle-component bg-orange"></span>
      <i onclick="deleteSkill(this)"
        class='bx bxs-message-x message-x text text-danger h2 position-absolute'></i>
    </div>
  </div>
`

//Delete function
const deleteSkill = (event) => event.parentNode.parentNode.remove();
const closePopup = _ => popup.style.display = 'none';
const openPopup = _ => popup.style.display = 'flex';

const addSkill = _ => {
  skillContainer.innerHTML += skillTemplate(skillName);
  skillNameInput.value = '';
  closePopup();
}

skillNameInput.addEventListener('input', (event)=> {
  skillName = event.target.value;
})

popup.addEventListener('click', (event)=> {
  if (event.target.id != 'add-skill-form' && event.target.id != 'skill-name') {
    closePopup();
  }
})