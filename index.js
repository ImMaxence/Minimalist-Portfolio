const simple = document.getElementById('simple');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const blob = document.getElementById('blob');
const second = document.getElementById('second');
const text = document.querySelector('.sec_text');
const container = document.getElementById('container_parralax');
const container_image = document.getElementById('container_image_parralax');

const text_load = () => {
    setTimeout(() => {
        text.textContent = "Maxence";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Freelancer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "a Designer";
    }, 12000);
}

text_load();
setInterval(text_load, 16000);

document.body.onpointermove = event => {
    let { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: 'forwards' });

};

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    container.style.left = -value * 1.2 + "px";
    container_image.style.left = value * 1.2 + "px";

});

simple.onmouseover = event => {
    let iteration = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 50);

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));
