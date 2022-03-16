function writeCards(names){
    const messages = [...names];
    for (let i=0; i<messages.length; i++){
        messages[i] = `Thank you, ${messages[i]}, for the wonderful surprise gift!`;
    }

    return messages;
}

function countDown(number){
    for (let i=number; i>-1; i--){
        console.log(i);
    }
}
