var
    funnyTextElement = document.querySelector('.headingSection .funnyText'),
    audioImYours = document.getElementById('ImYours'),
    Copyright = document.querySelector('.copyright'),
    isClickOddFunnyElement = true,
    isClickOddCopyright = true;



var listTextFun = function(numberRandom) {
    switch (numberRandom) {
        case 0:
            {
                return 'đừng chạm vào đây *.*'
            }

        case 1:
            {
                return 'á á á ><'
            }

        case 2:
            {
                return 'đố anh bắt được iem :3'
            }

        case 3:
            {
                return 'em đùa đấy đừng chạm vào em @@'
            }

        case 4:
            {
                return 'đã bảo đừng động vào tôi rồi ~~'
            }

        case 5:
            {
                return 'tránh ra nào $.$'
            }

        case 6:
            {
                return 'ơ hay 0.o'
            }

        case 7:
            {
                return 'né né né -.-'
            }

        case 8:
            {
                return 'click vào copyright để dừng lại :v'
            }


    }
}


setInterval(function() {
    let H1Element = document.querySelector('.headingTitle');
    H1Element.classList.toggle('colorChangeBlack');
}, 300);



funnyTextElement.onmousemove = function(e) {

    let randomLeft = `${Math.floor(Math.random()*95)}vw`,
        randomTop = `${Math.floor(Math.random()*95)}vh`,
        randomText = Math.floor(Math.random() * 9);

    Object.assign(e.target.style, {
        left: randomLeft,
        top: randomTop,
    });
    e.target.innerText = listTextFun(randomText);
}

funnyTextElement.onclick = function(e) {
    if (isClickOddFunnyElement) {
        audioImYours.style.display = 'block';
        isClickOddFunnyElement = false;
    } else {
        audioImYours.style.display = 'none';
        isClickOddFunnyElement = true;
    }

    funnyTextElement.textContent = 'ựa 0.o'
}

Copyright.onclick = function(e) {
    if (isClickOddCopyright) {
        funnyTextElement.onmousemove = function() {};
        isClickOddCopyright = false;
        Copyright.classList.add('buttonF');
    } else {
        funnyTextElement.onmousemove = function(e) {
            let randomLeft = `${Math.floor(Math.random()*95)}vw`,
                randomTop = `${Math.floor(Math.random()*95)}vh`,
                randomText = Math.floor(Math.random() * 9);

            Object.assign(e.target.style, {
                left: randomLeft,
                top: randomTop,
            });
            e.target.innerText = listTextFun(randomText);
        }
        isClickOddCopyright = true;
        Copyright.classList.remove('buttonF');
    }
}

function scrollLocalAddclass(elementActive, elementAddClass, scrollY) {


    window.addEventListener("scroll", function() {
        let elementStikyAdd = document.querySelector(elementActive);

        if (window.scrollY > scrollY) {
            elementStikyAdd.classList.add(elementAddClass);
        } else {
            elementStikyAdd.classList.remove(elementAddClass);
        }
    });
}

function ShowDivSelect(object) {
    if (object) {
        let elementNeedActive = document.querySelector(object.elementActive);
        let elementShow = object.elementShow;

        elementNeedActive.onchange = function() {
            let valueElementActive = elementNeedActive.value;
            let whichElementShow = document.querySelector(elementShow[valueElementActive]);

            elementShow.forEach(E => {
                ElementOff = document.querySelector(E);
                ElementOff.style.display = 'none';
            });
            whichElementShow.style.display = 'inline-block';

        }
    }

}

function ShowHideDiv(object) {
    let isHidden = true;
    let elementActive = document.querySelector(object.elementActive);
    let elementShowHide = document.querySelector(object.elementShowHide);
    elementActive.onclick = function() {
        if (isHidden) {
            elementShowHide.style.display = 'inline-block';
            isHidden = false;
        } else {
            elementShowHide.style.display = 'none';
            isHidden = true;
        }
    }
}

function onBlurHideDiv(elementActive, elementHide) {
    let elementActiveBlur = document.querySelector(elementActive),
        onBlurElement = elementHide ? (document.querySelector(elementHide)) : elementActiveBlur;

    elementActiveBlur.onblur = function() {
        onBlurElement.style.display = 'none';
    }
}