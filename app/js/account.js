document.addEventListener("DOMContentLoaded", function () {


  // loader
  setTimeout(function () {
    document.querySelector('body').classList.remove('loaded');
  }, 400);

  /* components */
  //prevent drag img and a
  const imagesAndLinks = document.querySelectorAll('img, a');
  if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
      item.addEventListener('dragstart', function (e) {
        e.preventDefault();
      })
    });
  }

  const handlerResize = function () {
    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 1200) {
      var sidebar = document.querySelector('.sidebar');
      if(sidebar) {
        sidebar.classList.add('sidebar__close');
        $(document).mouseup(function (e) {
          if(sidebar.classList.contains('sidebar__close') == false){
            var container = $('.sidebar');
            console.log('work')
          if (container.has(e.target).length === 0){
            $(sidebar).addClass('sidebar__close')
          }
          }
        });
      }
    }
  }

  $('.sidebar').on('touchmove', function() {
    $('.sidebar').removeClass('sidebar__close')
  })

  window.addEventListener('load', handlerResize);
  window.addEventListener('resize', handlerResize);

});

/* viewport width */
function viewport() {
  var e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
// Account

document.addEventListener("DOMContentLoaded", function () {

  if($('.ui.checkbox').length){
    $('.ui.checkbox').checkbox();
  }

  if($('.ui.radio.checkbox').length) {
    $('.ui.radio.checkbox').checkbox();
  }

  if(	$('.ui.search').length){
    $('.ui.search').search();
  }

  if($('.menu .item').length){
    $('.menu .item').tab();
  }
  if($('.ui.dropdown').length){
    $('.ui.dropdown').dropdown();
  }


  if($('.ui.accordion').length){
    $('.ui.accordion').accordion();

  }
  if($('#date-of-birth').length) {
    $('#date-of-birth').calendar({
      type: 'date',
      popupOptions: {
        position: 'bottom left',
        lastResort: 'bottom left',
        prefer: 'opposite',
        hideOnScroll: false
      },
    });
  }

  if($('#rangestart').length) {
    $('#rangestart').calendar({
      type: 'date',
      endCalendar: $('#rangeend'),
      monthFirst: false,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      popupOptions: {
        position: 'bottom left',
        lastResort: 'bottom left',
        prefer: 'opposite',
        hideOnScroll: false
      },
    });
    $('#rangeend').calendar({
      type: 'date',
      startCalendar: $('#rangestart'),
      monthFirst: false,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      popupOptions: {
        position: 'bottom right',
        lastResort: 'bottom right',
        prefer: 'opposite',
        hideOnScroll: false
      },
    });
  }
  if($('#rangestart-2').length) {
    $('#rangestart-2').calendar({
      type: 'date',
      endCalendar: $('#rangeend-2'),
      monthFirst: false,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      popupOptions: {
        position: 'bottom left',
        lastResort: 'bottom left',
        prefer: 'opposite',
        hideOnScroll: false
      },
    });
    $('#rangeend-2').calendar({
      type: 'date',
      startCalendar: $('#rangestart-2'),
      monthFirst: false,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      popupOptions: {
        position: 'bottom right',
        lastResort: 'bottom right',
        prefer: 'opposite',
        hideOnScroll: false
      },
    });
  }

  if ($('.js-card-mask').length) {
    $('.js-card-mask').inputmask("9999 9999 9999 9999");
  }
  if ($('.js-exp-mask').length) {
    $('.js-exp-mask').inputmask("99/99");
  }

  const inputNumber = document.querySelectorAll('.input-number');

    if(inputNumber) {
      for(var i = 0; i < inputNumber.length; i++) {
        inputNumber[i].addEventListener('keydown', function(event) {
          if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
          } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
              event.preventDefault();
            }
          }
          if(event.shiftKey) {
            event.preventDefault();
          }
        });
      }
    }


  var fundingFiatBlock = document.querySelector('.funding-fiat__block');

  if(fundingFiatBlock) {
    var fundingFiatFormBtn = fundingFiatBlock.querySelector('.ui.button');
    fundingFiatFormBtn.addEventListener('click', function() {
      var fiatDetails = document.querySelectorAll('.fiat__details');
      fiatDetails[0].classList.remove('active');
      fiatDetails[1].classList.add('active');
      fundingFiatFormBtn.remove();
    })
  }

  function getBarValueNumber(element) {
    return +element.innerHTML;
  }

  function setBarWidth(element, value) {
    return element.style.width = `calc(${value}% + 2px)`;
  }

  var limit = document.querySelector('.limit');
  if(limit){
    var limitProgress = limit.querySelector('.limit-status'),
      limitMaxValue = getBarValueNumber(limit.querySelector('.limit-max')),
      limitCurrValue = getBarValueNumber(limit.querySelector('.limit-current'));

    var result = Math.round(limitCurrValue * 100 / limitMaxValue);
    result < 100 ? setBarWidth(limitProgress, result) : setBarWidth(limitProgress, 100);
  }


  var inputs = document.querySelectorAll('.code__input');
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', goToNextInput);
    inputs[i].addEventListener('input', onFocus);
  }

  $('.code__input').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9'"]/)){
      return false;
    };
  })

  function goToNextInput(e) {
    var key = e.which,
      t = $(e.target),
      sib = t.next('input');

    if (key != 9 && (key < 48 || key > 57)) {
      e.preventDefault();
      return false;
    }

    if (key === 9) {
      return true;
    }

    if (!sib || !sib.length) {
      sib = $('.code__input').eq(0);
    }

    sib.select().focus();
  }

  function onFocus(e) {
    $(e.target).select();
  }


  var sidebarBtn = document.querySelector('.sidebar__btn');
  if(sidebarBtn) {
    sidebarBtn.addEventListener('click', function() {
      var sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('sidebar__close')
    })
  }

  // account header drop
  var accountDrop = document.querySelector('.account__block');
  if(accountDrop) {
    accountDrop.addEventListener('click', function() {
      accountDrop.classList.toggle('open')
    })
    $(document).mouseup(function (e) {
      if(accountDrop.classList.contains('open')){
      var container = $('.account__drop');
      if (container.has(e.target).length === 0){
        $(accountDrop).removeClass('open')
      }
      }
    });
  }

  // modals init

    $('.popup__authentication.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-authentication')
    ;

    $('.popup__add-account.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-add-account')
    ;

    $('.popup__change-password.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-change-password')
    ;

    $('.popup__pin-code.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-pin-code')
    ;

    $('.popup__remove.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-remove')
    ;

    $('.popup__submit-ticket.modal')
      .modal({
        autofocus: false,
        observeChanges:true,
      })
      .modal('attach events', '.modal-submit-ticket')
    ;




    $('.operations__top-funding .item').click(function() {
      if($('.operations__top-funding .active').data('tab') === 'Funding-fiat'){
        $('.operations__top-funding h2').text("Funding in fiat")
      }
      else {
        $('.operations__top-funding h2').text("Funding in cryptocurrency")
      }

    });

    $('.operations__top-withdrawals .item').click(function() {
      if($('.operations__top-withdrawals .active').data('tab') === 'Withdrawal-fiat') {
        $('.operations__top-withdrawals h2').text("Withdrawal in fiat")
      }
      else {
        $('.operations__top-withdrawals h2').text("Withdrawal in cryptocurrency")
      }

    });



  if( $('.popup__invoice.modal').length) {
    $('.popup__invoice.modal')
    .modal('attach events', '.modal-popup__invoice')
    ;
  }
  if($('.popup__details.modal').length) {
    $('.popup__details.modal')
    .modal('attach events', '.modal-popup__details')
    ;
  }

  $(document).ready(function () {
    const pageTools = document.querySelector('.tools');

    if ($('.tools__select').length) {
      $('.tools__select').select2({
        dropdownCssClass: "tools__drop"
      });
    }

    if(pageTools) {
      // Button steps
      const buttons = document.querySelectorAll('.btn__next-step');

      for (let button of buttons) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const buttonData = button.dataset.tools;
          const steps = document.querySelectorAll('.tools__step');
          for (let step of steps) {
            let stepData = step.dataset.tools;
            step.classList.remove('tools__step-active');
            if (stepData == buttonData) {
              step.classList.add('tools__step-active');
            }
          }
          // start timer
          if (buttonData == "third") {
            // Timer
            if ($('.js-timer').length) {
              $('.js-timer').each(function (indx, el) {
                var dataTime = $(el).data('time'),
                  time = new Date().getTime() + parseInt(dataTime),
                  minutes = $(el).find('.js-minutes'),
                  seconds = $(el).find('.js-seconds');
                $(el).countdown(time, function (event) {
                  minutes.html(event.strftime('%M'));
                  seconds.html(event.strftime('%S'));
                });
              });
            }
          }
        })
      }
    }
  });


  $(document).ready(function () {
    const newInvoice = document.querySelector('.new-invoice');
    if(newInvoice) {
      if ($('.js-timer').length) {
        $('.js-timer').each(function (indx, el) {
          var dataTime = $(el).data('time'),
            time = new Date().getTime() + parseInt(dataTime),
            minutes = $(el).find('.js-minutes'),
            seconds = $(el).find('.js-seconds');
          $(el).countdown(time, function (event) {
            minutes.html(event.strftime('%M'));
            seconds.html(event.strftime('%S'));
          });
        });
      }
    }
  });



    




})








