const countdown = document.querySelector(".countdown");

const UTC_WEDDING_TIME = '2022-12-17:19:00:00Z';

const INTERVAL_TIME = 1000;
const DAY_PER_SECONDS = 86400;
const HOUR_PER_SECONDS = 3600;
const MINUTE_PER_SECONDS = 60;

const interval = setInterval(() => {
    const current = Math.floor(new Date().getTime() / INTERVAL_TIME);
    const the_day = Math.floor(new Date(UTC_WEDDING_TIME).getTime() / INTERVAL_TIME);
    const time_left = the_day - current;
    const days = Math.floor(time_left / DAY_PER_SECONDS) + "";
    const hours = Math.floor((time_left % DAY_PER_SECONDS) / HOUR_PER_SECONDS) + "";
    const minutes = Math.floor(((time_left % DAY_PER_SECONDS) % HOUR_PER_SECONDS) / MINUTE_PER_SECONDS) + "";
    const seconds = Math.floor(((time_left % DAY_PER_SECONDS) % HOUR_PER_SECONDS) % MINUTE_PER_SECONDS) + "";

    countdown.innerHTML = `
        <div data-content="Hari">${days.length === 1 ? `0${days}` : days}</div>
        <div data-content="Jam">${hours.length === 1 ? `0${hours}` : hours}</div>
        <div data-content="Menit">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
        <div data-content="Detik">${seconds.length === 1 ? `0${seconds}` : seconds}</div>
    `;

    if (time_left < 0) {
        clearInterval(interval);
        countdown.innerHTML = `
            <div data-content="Hari">00</div>
            <div data-content="Jam">00</div>
            <div data-content="Menit">00</div>
            <div data-content="Detik">00</div>
        `;
    }
}, 1000);