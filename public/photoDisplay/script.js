let count = 1;
let photo = document.getElementById('artPhoto');
let nextButton = document.getElementById('nextButton');
let previousButton = document.getElementById('previousButton');
let homeButton = document.getElementById('homeButton');

nextButton.onclick = function() {
    if (count >= 13) {
        nextButton.classList.add('hide');
        nextButton.classList.remove('show');
    } else if (count < 13) {
        count += 1;
        photo.setAttribute('src', './images/' + count + '.JPG');
        if (count > 1) {
            previousButton.classList.add('show');
        }
    }
}

previousButton.onclick = function () {
    if (count == 1) {
        previousButton.classList.add('hide');
        previousButton.classList.remove('show');
    } else if (count > 1) {
        count -=1;
        photo.setAttribute('src', './images/' + count + '.JPG' );
        if (count < 13) {
            nextButton.classList.add('show');
        }
    }
}
