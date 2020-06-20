function submitButton(event) {
    event.preventDefault()
    var hostPort = 'http://localhost:8080/get-latest';
    fetch(hostPort).then(function (response) {
        return response.json()
    }).then(function (response) {
        document.getElementsById(submitButtonResults).innerHtML = JSON.stringify(response);
    });
}
export {
    submitButton
}
