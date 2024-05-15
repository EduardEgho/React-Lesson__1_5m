import React from 'react';

function MainPage() {
    return (
        <div>
            <input placeholder={"заголовок"}/>
            <p>
                <textarea placeholder={'введите текст...'}></textarea>
            </p>

            <button>Отправить</button>
        </div>
    );
}

export default MainPage;