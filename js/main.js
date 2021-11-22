$(document).ready(function () {
  var currentFloor = 2;//переменная где хранится этаж
  var floorPath = $(".home-image path"); // каждый этаж в SVG
  var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");

  
  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function() {
    floorPath.removeClass("currentFloor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текуущего этажа
    $(".counter").text(currentFloor); // записываем значчение текущего этажа
  });

  // функция при наведении  на этаж вызвать модальное окно
  floorPath.on("click", toggleModal);
  // функция при наведении  на крестик убрать модальное окно
  modalCloseButton.on("click", toggleModal);
  

  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {//проверяем значение этажа, оно не должно быть меньше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,  
      useGrouping: false }); // форматируем переменную с этажом, чтобы вместо 2 было 02
      $(".counter").text(usCurrentFloor); // записываем значение этажа
      floorPath.removeClass("currentFloor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("currentFloor"); // подсвечиваем текщий класс
      
    }
  });

    counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,  
      useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("currentFloor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("currentFloor");
      
    }
  });
  // функция открыть и закрыть модальное окно
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});