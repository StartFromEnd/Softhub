require('dotenv').config();

export function Fetch(url, array) {
    const response = fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/'+url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            sessionID: `${array[0]}`,
            email: `${array[1]}`,
            password: `${array[2]}`,
            nickname: `${array[3]}`,

            variable1: `${array[4]}`,
            variable2: `${array[5]}`,
            variable3: `${array[6]}`,
        }),
    })
    .then((data) => {return data.json()})
    .catch((error) => {
        let errorLog = {ok: false, msg: error.toString()};
        return errorLog;
    });
    
    return response.then((info) => info);
}