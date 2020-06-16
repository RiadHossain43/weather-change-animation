import { cloudset } from './clouds.js'
import { generateRain } from './generateRain.js'
import { rainspeed } from './rainspeed.js'
import { generateSnow } from './generateSnow.js'
import {generateThunder} from './generateThunder.js'

let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
function israining(icon) {
    if (icon === '09d' || icon === '09n' ||
        icon === '10d' || icon === '10n' ||
        icon === '11d' || icon === '11n') return true
    return false
}
function issnowing(icon) {
    if (icon === '13d' || icon === '13n') return true
    return false
}
function isstorming(icon){
    if(icon === '11d' || icon === '11n') return true
    return false
}


let getTodayInfo = (icon) => {
    
            
            // weather test.....
            let weather = icon

            const clouds = document.getElementsByClassName('bg-cloud-icon')
            const conatiner = document.querySelector('.container')
            const forrest = document.querySelector('.bg-forest')
            const place = document.querySelector('.place')
            const weather_icon = document.querySelector('.weather-icon')
            const sun_moon = document.querySelector('.sun-moon')


            const temp = document.querySelector('.temparature')
            const w_des = document.querySelector('.w-des')
            const feels_like = document.querySelector('.feels-like')
            const hum = document.querySelector('.hum')
            const pres = document.querySelector('.pres')
            const sun_detail = document.querySelector('.sun_detail')
            const wsp = document.querySelector('.wsp')
            const pos_lat = document.querySelector('.pos_lat')
            const pos_lng = document.querySelector('.pos_lng')

            let sun_moon_src = {
                n: 'moon.svg',
                d: 'sun.svg'
            }
            let forest = {
                n: 'forrest_night.svg',
                d: 'forrest_day.svg'
            }

            set_style(conatiner, { background: `var(--bg-${weather})` })
            for (let i = 0; i < clouds.length; i++) {
                clouds[i].src = cloudset[`imgset_${weather[0]}${weather[1]}`][i]
            }
            
            sun_moon.src = `./weather_icons/others/${sun_moon_src[`${weather[2]}`]}`
            forrest.src = `./weather_icons/others/${forest[`${weather[2]}`]}`
            weather_icon.src = `./weather_icons/animated/${weather}.svg`

            let intervals = []

            if (israining(weather)) {
                let i = setInterval(() => {
                    generateRain()
                }, rainspeed[`_${weather}`])
                intervals.push(i)
            }
            if (issnowing(weather)) {
                let i = setInterval(() => {
                    generateSnow()
                }, rainspeed[`_${weather}`])
                intervals.push(i)
            }
            if(isstorming(weather)){
                generateThunder()
                let i = setInterval(() => {
                    generateThunder()
                }, 5000)
                intervals.push(i)
            }
            return intervals

}

export { getTodayInfo }