const uri = 'wss://echo-ws-service.herokuapp.com';

const btnSendMessage = document.querySelector('.btn-message');
const btnGetLocation = document.querySelector('.btn-location');
const output = document.querySelector('.output');
let websocket;

websocket = new WebSocket(uri);
websocket.onmessage = function(evt) {
    showMessage(evt.data);
};

function showMessage(message) {
    const text = document.createElement('div');
    text.innerHTML = message;
    output.appendChild(text);
}

const successGeo = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const message = `
        <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Гео-локация</a>
    `;
    showMessage(message);
}

const errorGeo = () => {
    const message = 'Невозможно получить ваше местоположение';
    showMessage(message);
}

btnSendMessage.addEventListener('click', () => {
    const message = document.querySelector('input').value;
    showMessage(message);
    websocket.send(message);
})

btnGetLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
})

