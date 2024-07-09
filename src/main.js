document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a[href^="#"]');
  var headerHeight = document.querySelector('header').offsetHeight; // Висота заголовка

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var hash = this.getAttribute('href');

      if (hash === '#header') {
        // Прокрутка до початку сторінки з урахуванням висоти заголовка
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        var targetId = hash.substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          var targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

          // Анімаційна прокрутка з урахуванням висоти заголовка
          smoothScrollTo(targetOffsetTop - headerHeight);
        }
      }
    });
  });

  function smoothScrollTo(targetPosition) {
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    var duration = 800; // Час анімації

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});


// CATALOG

document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.querySelector('.catalog-button');

  const hiddenItems = document.querySelectorAll('.catalog-item.hidden');
  const catalogSection = document.getElementById('catalog');

  showMoreBtn.addEventListener('click', function () {
    hiddenItems.forEach(item => (item.style.display = 'block'));
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'block';
  });
});
