class Fetching {
    FetchSignin(email, password) {
        fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signin', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                signinEmail: `${email}`,
                signinPassword: `${password}`,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                alert('오류가 발생하였습니다.');
            })
            .then((data) => {
                return data;
            });
    }
}

export default Fetching;