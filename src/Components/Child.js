import React from 'react';

export default function Child(props) {
    return (
        <div>
            {props.basicInfo.listNames.map(item => (
                <p className="info">Hi, my name is {item.name}. My phone number is {item.phoneNumber}. I was born on {item.birthDate}</p>
            ))}
        </div>
    )
}