import React from 'react';

const Steps = () => {
  return (
    <>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item list-group-item-action">
          Inicializar dos listas. Una para hacer operaciones en direccion
          izquierda a derecha y una para hacer operaciones en sentido derecha a
          izquierda. Pueden llamarse: left_sum y right_sum
        </li>
        <li className="list-group-item list-group-item-action">
          Asignar el valor de la primera posicion de la lista con el primer
          elemento que se encuentra de izquierda a derecha.{' '}
          <strong>Ejemplo... left_sum.insert(0, array_given[0])</strong>
        </li>
        <li className="list-group-item list-group-item-action">
          Mediante el uso de una estructura repetitiva, comenzar a recorrer la
          lista desde el indice 1 e ir sumando con el anterior hasta recorrer
          toda la lista, todo esto esta siendo guardado en la lista left_sum.{' '}
          <strong>
            Ejemplo estructura... for left_to_right in range(1, array_length, 1)
          </strong>
        </li>
        <li className="list-group-item list-group-item-action">
          Luego de culminar este ciclo, la lista left_sum contiene todos las
          posibles sumas que se pueden ejecutar en la lista de izquierda a
          derecha.
        </li>
        <li className="list-group-item list-group-item-action">
          Mediante el uso del metodo .reverse(), se le invierte el orden a la
          lista recibida.
        </li>
        <li className="list-group-item list-group-item-action">
          Asignar el valor de la primera posicion de la lista con el primer
          elemento que se encuentra de izquierda a derecha. Como fue invertido,
          en este punto, es el ultimo elemento de la lista original...{' '}
          <strong>Ejemplo... right_sum.insert(0, array_given[0])</strong>
        </li>
        <li className="list-group-item list-group-item-action">
          Mediante el uso de una estructura repetitiva, comenzar a recorrer la
          lista desde el indice 1 e ir sumando con el anterior hasta recorrer
          toda la lista, todo esto esta siendo guardado en la lista right_sum.{' '}
          <strong>
            Ejemplo estructura... for right_to_left in range(1, array_length, 1)
          </strong>
        </li>
        <li className="list-group-item list-group-item-action">
          Luego de culminar este ciclo, la lista right_sum contiene todos las
          posibles sumas que se pueden ejecutar en la lista de derecha a
          izquierda.
        </li>
        <li className="list-group-item list-group-item-action">
          Mediante el uso del metodo .reverse(), se le invierte el orden a la
          lista right_sum, ya que fue armada en el sentido contrario. Este
          cambio existe, puesto que python posee restricciones al asignar un
          valor a una posicion inexistente de un array. Es decir, index out of
          range.
        </li>
        <li className="list-group-item list-group-item-action">
          Finalmente, se realiza un ciclo que permita conseguir el punto donde
          las sumatorias de cada lado del array sean iguales. Esto quiere decir
          que va a iterar tantas veces como logintud de la lista dada tenga. Y
          el punto donde coinciden ambas listas (left_sum y right_sum), sera el
          indice del numero, que es la mitad del array.
        </li>
        <li className="list-group-item list-group-item-action">
          De esta forma, esta "balanceado" el array, puesto que se conoce el
          indice el numero que es la mitad donde la suma de sus lados son
          iguales
        </li>
      </ol>
    </>
  );
};

export default Steps;
