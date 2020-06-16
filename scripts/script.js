import {getTodayInfo} from './getTodayInfo.js'

window.addEventListener('load', () => {

        let intervals = []
        const btn_01d  = document.getElementById('_01d')
        const btn_01n  = document.getElementById('_01n')
        const btn_02d  = document.getElementById('_02d')
        const btn_02n  = document.getElementById('_02n')
        const btn_03d  = document.getElementById('_03d')
        const btn_03n  = document.getElementById('_03n')
        const btn_04d  = document.getElementById('_04d')
        const btn_04n  = document.getElementById('_04n')
        const btn_09d  = document.getElementById('_09d')
        const btn_09n  = document.getElementById('_09n')
        const btn_10d  = document.getElementById('_10d')
        const btn_10n  = document.getElementById('_10n')
        const btn_11d  = document.getElementById('_11d')
        const btn_11n  = document.getElementById('_11n')
        const btn_13d  = document.getElementById('_13d')
        const btn_13n  = document.getElementById('_13n')
        const btn_50d  = document.getElementById('_50d')
        const btn_50n  = document.getElementById('_50n')
        
        
        btn_01d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('01d')) })
        btn_01n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('01n')) })
        btn_02d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('02d')) })
        btn_02n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('02n')) })
        btn_03d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('03d')) })
        btn_03n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('03n')) })
        btn_04d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('04d')) })
        btn_04n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('04n')) })
        btn_09d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('09d')) })
        btn_09n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('09n')) })
        btn_10d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('10d')) })
        btn_10n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('10n')) })
        btn_11d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('11d')) })
        btn_11n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('11n')) })
        btn_13d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('13d')) })
        btn_13n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('13n')) })
        btn_50d.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('50d')) })
        btn_50n.addEventListener('click',()=>{ clearAllIntervals(); intervals.push(getTodayInfo('50n')) })
    
        function clearAllIntervals(){
                for(let i =0;i<intervals.length;i++){
                        for(let j=0;j<intervals[i].length;j++){
                                clearInterval(intervals[i][j])
                                // console.log('cleared',intervals[i][j])
                        }
                        // console.log('done',intervals[i])
                }
                intervals = []
                // console.log(intervals.length)
        }
})


