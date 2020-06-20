const userUrl = require('valid-url');

const handleSubmit = function (event) {
    event.preventDefault();
let formText = document.getElementById('name').value;
    // check for valid url
    if (userUrl.isWebUri(formText)) {
        apiData('http://localhost:8080/post', formText);
    } else {
        alert('Please Enter a Valid URL - including http(s)://');
        }
};

const apiData = async (url, input) => {
    const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: input})
    });
    try {
        const data = await res.json();
        if(res.status >= 200 && res.status < 400) {
            document.getElementById('polarity').innerHTML = `${data.polarity}`;
            document.getElementById('polarity_confidence').innerHTML = `${data.polarity_confidence}`;
            document.getElementById('subjectivity').innerHTML = `${data.subjectivity}`;
            document.getElementById('subjectivity_confidence').innerHTML = `${data.subjectivity_confidence}`;
        }
        } catch(error) {
            alert('error');
        }
    }

export { handleSubmit, userUrl }
