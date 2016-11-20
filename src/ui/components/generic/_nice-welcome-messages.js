import React from 'react';

const NiceWelcomeMessage = () => {
    const messages = [
        'Hello, nice to see you :)',
        'You look awesome today!',
        'We like you',
        'You\'re a awesome human beeing... deep inside',
        'We should drink a fuselmate together ;)',
        'Happy to have you as a friend sir/mam',
        'Things you should remember: *dancing*, *singing*, *laughting*'
    ];
    const nr = Math.floor((Math.random() * messages.length));
     return (
         <span>
             {messages[nr]}
         </span>
     );
}

export default NiceWelcomeMessage;