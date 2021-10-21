const pad = (n) => n < 10 ? '0'+n : n;

const getTimeOfday = (time) => {
    let date;
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    if (time) {
        const timeParts = time.split(":");
        date = new Date(currentYear, currentMonth + 1, currentDayOfMonth, timeParts[0], timeParts[1]);
    } else {
        date = currentDate;
    }

    return date.getHours() < 12 ? `${pad(date.getHours())}:${pad(date.getMinutes())} am` : `${pad(date.getHours())}:${pad(date.getMinutes())} pm`;

}

export default getTimeOfday