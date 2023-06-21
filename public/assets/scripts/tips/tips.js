const chatContainer = document.getElementById('chat-container');

var QuestionAnswer = new Map([
    ["Consejo sobre como mejorar","Es recomendable evitar las compras impulsivas y comparar precios antes de hacer una compra importante."],
    ["Consejo sobre inversiones","Si deseas invertir de manera inteligente tu dinero, primero tienes que investigar el mercado en tu área y región."],
    ["Categorizar mis gastos","Prioriza tus gastos en necesidades básicas, ahorro y deseos, estableciendo un presupuesto mensual y asignando categorías claras para cada gasto."]
])

function CreateLlamaBotResponse(responseText){

    let llamaBotSpeech = document.createElement('div');
    llamaBotSpeech.className = 'llamaBot-speech-container';

    let imageLlamaBotSpeech = document.createElement('img');
    imageLlamaBotSpeech.src = './assets/images/LlamaBot.svg';
    imageLlamaBotSpeech.alt = 'LlamaBot';

    let llamaBotBubble = document.createElement('div');
    llamaBotBubble.className = 'bubble-text-bot'

    let llamaBotBubbleText = document.createElement('p');
    llamaBotBubbleText.innerText = QuestionAnswer.get(responseText);

    llamaBotBubble.appendChild(llamaBotBubbleText);

    llamaBotSpeech.appendChild(imageLlamaBotSpeech);
    llamaBotSpeech.appendChild(llamaBotBubble);

    return llamaBotSpeech;
}

function CreateUserResponse(text){

    const textResponse = text;

    let UserResponse = document.createElement('div');
    UserResponse.className = 'bubble-text-user';

    let UserResponseText = document.createElement('p');
    UserResponseText.innerText = textResponse;

    UserResponse.appendChild(UserResponseText);
    chatContainer.appendChild(UserResponse);
    chatContainer.appendChild(CreateLlamaBotResponse(text));
    window.scrollTo(0, document.body.scrollHeight);
}