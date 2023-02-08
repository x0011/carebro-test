import React from 'react'
import { ArraySort } from '../../components/array';

export const ArraysPage = () => {
  return(
    <div className="wrapper">
      <h1>Массивы</h1>
      <h3>Укажите массивы чисел через запятую (без скобок)</h3>
      <span>
        Проверка корректности данных не учитывается:
        <p>
          Пример:<br />
          A = 8, 9, 2<br />
          B = 5, 1, 4, 3, 8, 9, 8, 7, 3, 6, 9, 2
        </p>
      </span>
      <span>Сформировать массивы можно &nbsp;
        <a href='https://onlineintegertools.com/create-integer-array' target="_blank" rel="noreferrer">тут</a>
      </span>
      <ArraySort />
    </div>
  );
}