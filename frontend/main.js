window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localFunctionAPI = 'http://localhost:7071/api/MattGetResumeCounter';
const functionApiUrl = 'https://mattgetresumecounter.azurewebsites.net/api/MattGetResumeCounter?code=Lrt-rweoXCEub4qOfEMGBB3wbxy7EdZEuGgNfTxROL5gAzFuD2HJQA=='

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called fuction API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}