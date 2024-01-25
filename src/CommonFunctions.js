require('dotenv').config();

export function Fetch(url, array) {
    const response = fetch(`${process.env.REACT_APP_SERVER_HOST}`+url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            datas: array,
        }),
    })
    .then((data) => {return data.json()})
    .catch((error) => {
        let errorLog = {ok: false, msg: error.toString()};
        return errorLog;
    });
    
    return response.then((info) => info);
}

export function UTCChangeLocal(date){
    let localDate = new Date(date);
    
    let nowMonth = (localDate.getMonth()+1).toString();
    if(nowMonth.length === 1){
        nowMonth = '0'+nowMonth;
    }
    
    let nowDate = (localDate.getDate()).toString();
    if(nowDate.length === 1){
        nowDate = '0'+nowDate;
    }
    
    let nowHours = (localDate.getHours()).toString();
    if(nowHours.length === 1){
        nowHours = '0'+nowHours;
    }
    
    let nowMinutes = (localDate.getMinutes()).toString();
    if(nowMinutes.length === 1){
        nowMinutes = '0'+nowMinutes;
    }
    
    let changedDate = localDate.getFullYear()+'-'+nowMonth+'-'+nowDate+' '+nowHours+':'+nowMinutes;
    
    return changedDate;
}