'use-strict'

window.addEventListener("DOMContentLoaded", () => {

    function getBirthDate(mounth, day) {
        const
            date = new Date();

        console.log(date);

        let
            nextBirthYear;

        if ((date.getMonth() > (mounth - 1)) || (date.getMonth() >= (mounth - 1) && date.getDate() >=  day)) {
            nextBirthYear = date.getFullYear() + 1;
        } else {
            nextBirthYear = date.getFullYear();
        }

        return `${nextBirthYear}-${mounth}-${day}`;

    }

        const birdthDate = getBirthDate(7,12);

    console.log(birdthDate);

    function getTimeRemaining(endtime) {
        const
            t = new Date(endtime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(((t / (1000 * 60 * 60)) % 24)),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }


    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const
            timer = document.querySelector(selector),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 10);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
    }

    setClock('.timer-blocks', birdthDate);

})
//почему то если берется время от текущего года то прибавляется 3 часа
