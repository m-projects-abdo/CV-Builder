let popup = document.getElementById('add-skill-popup');
let skillContainer = document.getElementById('skill-container');
let skillNameInput = document.getElementById('skill-name');
let skillName = '';

let skillTemplate = (skillName) => `
  <div class="col-md-4 px-4 d-flex align-items-center justify-content-between mb-4">
    <p class="font-weight-bold h4">${skillName}</p>
    <div class="d-flex justify-content-between position-relative">
      <span class="circle-component border border-warning"></span>
      <span class="circle-component border border-warning mx-1"></span>
      <span class="circle-component border border-warning"></span>
      <span class="circle-component border border-warning mx-1"></span>
      <span class="circle-component border border-warning"></span>
      <box-icon
        onclick="deleteSkill(this)" 
        class="message-x position-absolute"
        name='message-x' 
        type='solid' 
        color='rgba(249,22,22,0.88)'
      ></box-icon>
    </div>
  </div>
`

//Delete function
const deleteSkill = (event) => event.parentNode.parentNode.remove();
const openPopup = _ => popup.style.display = 'block';
const closePopup = _ => popup.style.display = 'none';
const addSkill = _ => {
  skillContainer.innerHTML += skillTemplate(skillName);
  skillNameInput.value = '';
  closePopup();
}

skillNameInput.addEventListener('input', (event)=> {
  skillName = event.target.value;
})