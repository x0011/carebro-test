import React, { useEffect, useState } from 'react'

type funcType = typeof fillDouble;

// С дублирующимися значениями
function fillDouble (arrayA: number[], arrayB: number[]) {
  const result = [];
  for (let indexA = 0; indexA < arrayA.length; indexA += 1) {
    for(let indexB = 0; indexB < arrayB.length; indexB += 1) {
      if (arrayA[indexA] !== arrayB[indexB]) {
        if (result.indexOf(arrayB[indexB]) === -1) {
          result[indexB] = arrayB[indexB];
        };
      }
    }
  }
  return result;
}

// С дублирующимися значениями
function fillArray (arrayA: number[], arrayB: number[]) {
  const result = [];
  for (let indexA = 0; indexA < arrayA.length; indexA += 1) {
    for(let indexB = 0; indexB < arrayB.length; indexB += 1) {
      if (arrayA[indexA] !== arrayB[indexB]) {
        if (result.indexOf(arrayB[indexB]) === -1 && arrayA.indexOf(arrayB[indexB]) === -1) {
          result[indexB] = arrayB[indexB];
        };
      }
    }
  }
  return result;
}

// Сложение массивов и удаление дублей
function unionArrays (arrayA: number[], arrayB: number[]) {
  const result = [];
  const unionArrays = arrayA.concat(arrayB);
  const doubleless = unionArrays.filter((item, index) => {
    return unionArrays.indexOf(item) === index
  })
  return doubleless;
}


export const ArraySort = () => {
  const [arrayA, setArrayA] = useState<number[]>();
  const [arrayB, setArrayB] = useState<number[]>();
  const [result, setResult] = useState<number[]>();

  const inputHandler = 
  (
    e: React.ChangeEvent<HTMLInputElement>, 
    setState: React.Dispatch<React.SetStateAction<number[] | undefined>>
  ) => {
    const { value } = e.target;
    const arrayText = value.split(',');
    const strToNum = arrayText.map((item) => +item);
    setState(strToNum);
  }
  
  const btnHandler = (func: funcType) => {
    (arrayA && arrayB) && setResult(func(arrayA, arrayB));
  }

  return (
    <div className="arrays-wrapper">
      <input type="text" placeholder='Массив А, через запятую' onChange={(e) => inputHandler(e, setArrayA)} />
      <input type="text" placeholder='Массив B, через запятую' onChange={(e) => inputHandler(e, setArrayB)}/>
      <br />
      <button type='button' onClick={() => btnHandler(fillDouble)}>Сформировать новый массив C</button>
      <button type='button' onClick={() => btnHandler(fillArray)}>Сформировать новый массив C без дублей</button>
      <button type='button' onClick={() => btnHandler(unionArrays)}>Сформировать новый массив D (A+B) без дублей</button>
      <hr />
      {
        result 
        && (<h3>Результат: {result.map((item, index) => {
          return <> [ index: {index}, value: {item} ] </>
        })}</h3>)}
    </div>
  );
}