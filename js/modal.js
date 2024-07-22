$(document).ready(function () {
  // モーダルを対応させたいボタン/要素と関連付ける
  function showModal(modalId) {
    $(`#${modalId}`).show()
  }

  function hideModal(modalId) {
    $(`#${modalId}`).hide()
  }

  // 各円がクリックされたときに対応するモーダルを表示
  $('#circle1').on('click', function () {
    showModal('modal1')
  })

  $('#circle2').on('click', function () {
    showModal('modal2')
  })

  $('#circle3').on('click', function () {
    showModal('modal3')
  })

  // クローズボタンがクリックされたときにモーダルを閉じる
  $('.close').on('click', function () {
    var modalId = $(this).data('modal')
    hideModal(modalId)
  })

  // モーダル外がクリックされたときにモーダルを閉じる
  $(window).on('click', function (event) {
    if ($(event.target).hasClass('modal')) {
      hideModal($(event.target).attr('id'))
    }
  })
})
