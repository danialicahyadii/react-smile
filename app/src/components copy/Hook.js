import React, { useState } from 'react'

const Hook = props => {
    const [fruitState, setFruitState] = useState({
            fruits:[
                {name: 'mango', weight:'20gm'},
                {name: 'orange', weight:'10gm'},
                {name: 'grape', weight:'30gm'},
                ]
    });
    const clickHandler = () => {
            // console.log('Hello Easy Learning');
            // alert('Welcome Udemy');
            // this.state.fruits[0] = 'samsung';
            setFruitState({
                fruits:[
                    {name: 'Samsung', weight:'20gm'},
                    {name: 'Apple', weight:'10gm'},
                    {name: 'Nokia', weight:'30gm'},
                ]
            })
    }

        return (
            <div>
                <button onClick={clickHandler}>Change Me</button>
                <h1>Fruit name is {fruitState.fruits[0].name }</h1>
                <h1>Fruit name is {fruitState.fruits[1].name }</h1>
                <h1>Fruit name is {fruitState.fruits[2].name }</h1>
            </div>
        )
}

export default Hook;