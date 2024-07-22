$(document).ready(function () {
  // インターセクションオブザーバーの設定
  let options = {
    threshold: [0.8] // 要素が10%表示されたらアニメーションを開始
  }

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      // 要素が画面に（10%）入ったら
      if (entry.isIntersecting) {
        $(entry.target).addClass('active')
        // 一度アニメーションを実行したら監視をやめる
        observer.unobserve(entry.target)
      }
    })
  }, options)

  // アニメートさせる要素を監視
  $('.animate').each(function () {
    observer.observe(this)
  })
})
