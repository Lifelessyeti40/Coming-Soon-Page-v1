const dateUntilLaunch = new Date("Oct 30, 2024 00:00:00").getTime()
setInterval(() => {
    const now = new Date().getTime()
    const distance = dateUntilLaunch - now

    const time = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }

    Object.keys(time).forEach(unit => {
        document.getElementById(unit).innerHTML = time[unit]
    })
}, 1000)