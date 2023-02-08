import React, { useState } from 'react'
import './ControllInput.css';

interface IControllInput {
  styles?: string[],
}

export const ControllInput: React.FC<IControllInput> = ({ styles }) => {
  // При использовании undefined как начальное значение, возникает ошибка контролируемого компонента.
  const [number, setNumber] = useState<string | undefined>('')
  const [error, setError] = useState<boolean>(false);
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    if(value.match(/^([0-9]{1,})?(,)?([0-9]{1,})?$/) || value.match(/^-([0-9]{1,})?(,)?([0-9]{1,})?$/)) {
      setError(false);
      setNumber(value)
    } else {
      setError(true);
    }
  }
   return (
    <div className="controll-input-wrapper">
      {error && <span>Целое число или дробное (через симовол запятой)</span>}
      <p>
        <input 
          className={['input', error && 'input_error' ,styles].join(' ')} 
          placeholder = 'Введите число' 
          value = {number} 
          onChange = {handleNumber} 
        />
      </p>
    </div>
   );
}