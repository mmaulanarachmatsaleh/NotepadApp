//THIS IS FOR CHANGE BACKGROUND. DOESNT WORK

var backgroundPopup = document.getElementById('backgroundPopup');
var colorPopup = document.getElementById('colorPopup');
var colorInput = document.getElementById('color');
var imagePopup = document.getElementById('imagePopup');
var customBgInput = document.getElementById('customBg');
var sidebar = document.getElementById('notes__sidebar');

function openBackgroundPopup() {
  backgroundPopup.style.display = 'flex';
}

function closeBackgroundPopup() {
  backgroundPopup.style.display = 'none';
}

function openColorPopup() {
  closeBackgroundPopup();
  colorPopup.style.display = 'flex';
}

function closeColorPopup() {
  colorPopup.style.display = 'none';
}

function openImagePopup() {
  closeBackgroundPopup();
  imagePopup.style.display = 'flex';
}

function closeImagePopup() {
  imagePopup.style.display = 'none';
}

function changeBackgroundColor() {
  if (colorInput.value) {
    sidebar.style.backgroundImage = 'none';
    sidebar.style.backgroundColor = colorInput.value;
  }
  closeColorPopup();
}

function changeBackgroundImage() {
  if (customBgInput.files.length > 0) {
    var file = customBgInput.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      sidebar.style.backgroundImage = `url('${event.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
  closeImagePopup();
}

