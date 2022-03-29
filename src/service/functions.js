let popup = document.getElementById('add-skill-popup');

//Delete function
const deleteSkill = (event) => event.parentNode.parentNode.remove();
const closePopup = _ => popup.style.display = none;