const CAR_ROSTER_URL = 'http://localhost:3000/carRoster'

$.get(CAR_ROSTER_URL).then((data) =>
  data.map((car) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${car.id}</td>
      <td>${car.carModel}</td>
      <td>${car.parkingNumber}</td>
      <td>
        <button onclick="deleteCar(${car.id})"}>🗑</button>
      </td>
    </tr>`)
    )
  })
)

$('#submitCar').click(function () {
    $.post(CAR_ROSTER_URL, {
      carModel: $('#newModel').val(),
      parkingNumber: $('#newParking').val(),
    })
  })

  function deleteCar(id) {
    $.ajax(`${CAR_ROSTER_URL}/${id}`, {
      type: 'DELETE',
    })
  }

  function updateCar() {
    id = $('#updateId').val()
  
    $.ajax(`${CAR_ROSTER_URL}/${id}`, {
      method: 'PUT',
      data: {
        carModel: $('#updateModel').val(),
        parkingNumber: $('#updateParking').val(),
      },
    })
  }
  
  $('#updateCar').click(updateCar)
