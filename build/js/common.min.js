document.addEventListener("DOMContentLoaded", function () {


	

	// loader
	setTimeout(function () {
		document.querySelector('body').classList.remove('loaded');
	}, 1800);

	
		
	// lazy load
	// setTimeout(function () {
	// 	$(".js-bg").each(function () {
	// 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
	// 	});
	// 	$(".js-img").each(function () {
	// 		$(this).attr('src', $(this).data("src"));
	// 	});
	// }, 200);


	//langing.html entire code incapsulated

	if($('body').hasClass('landing-page')) {
		$(document).ready(function () {
			$('.tablet__item-left').hover(function () {
				let index = $(this).parents('.tablet__left').find(this).index();
				$('.tablet__block-hidden').eq(index).toggleClass('active');
				$('.tablet__block-num').eq(index).toggleClass('active-stop');
			})
			$('.tablet__item-right').hover(function () {
				let index = $(this).parents('.tablet__right').find(this).index();
				$('.tablet__block-hidden-right').eq(index).toggleClass('active');
				$('.tablet__block-num-right').eq(index).toggleClass('active-stop');
			})
			$('.tablet__block-num-left').hover(function () {
				let index = $(this).parent('.tablet__block').index() - 2;
				console.log(index)
				$('.tablet__item-left').eq(index).toggleClass('active-title');
			})
			$('.tablet__block-num-right').hover(function () {
				let index = $(this).parent('.tablet__block').index();
				console.log(index)
				$('.tablet__item-right').eq(index - 8).toggleClass('active-title');
			})
			//
			$('.landing-page .header__menu').click(function () {
				$('body.landing-page').toggleClass('show')
			});
			new WOW().init();
		});
	}
	
	//langing.html code end

	$('.refer-faq .accordeon dt').click(function(){
		$('.refer-faq .accordeon dt').not(this).parents().removeClass('active');
		$(this).parents().toggleClass('active');
	})

	$('.exchange-faq .accordeon dt').click(function(){
		$('.exchange-faq .accordeon dt').not(this).parents().removeClass('active');
		$(this).parents().toggleClass('active');
	})

	$('.exchange-calc__item').click(function(){
		$('.exchange-calc__item').not(this).removeClass('active');
		$(this).addClass('active');
	})


	

	

	let $header__langs_top = document.querySelector('.header__langs-top');
	if ($header__langs_top) {
		let $header__langs_top_parent = $header__langs_top.parentElement;
		$header__langs_top.addEventListener('click', function () {
			if (!$header__langs_top_parent.classList.contains('active')) {
				$header__langs_top_parent.classList.add('active');
			} else {
				$header__langs_top_parent.classList.remove('active');
			}
		});
		document.addEventListener('mouseup', function (e) {
			if (!$($header__langs_top).is(e.target) && $($header__langs_top).has(e.target).length === 0) {
				$header__langs_top_parent.classList.remove('active');
			}
		});
	}




	let $header_menu = document.querySelector('.header__menu');
	let $body = document.querySelector('body');
	let $html = document.querySelector('html');

	let $header_hamb = document.querySelector('.header__hamb');
	if ($header_hamb) {
		$header_hamb.addEventListener('click', function () {
			$header_menu.classList.add('active');
			$body.classList.add('scroll-block');
			$html.classList.add('scroll-block');
		});
	}
	

	let $header_close = document.querySelector('.header__menu-close');
	if ($header_close) {
		$header_close.addEventListener('click', function () {
			$header_menu.classList.remove('active');
			$body.classList.remove('scroll-block');
			$html.classList.remove('scroll-block');
		});
	}
	


	// CHARTJS
	const chart_x_label = document.querySelector('.chart-x-label');
	if(chart_x_label){
		let chart = document.getElementById("myChart");
		let ctx_2d = chart.getContext('2d');

		let gradientFill = ctx_2d.createLinearGradient(0, 600, 0, 0);
		gradientFill.addColorStop(0, "rgba(209, 210, 249, 0)");
		gradientFill.addColorStop(1, "rgba(209, 210, 249, 0.2)");

		let gradientStroke = ctx_2d.createLinearGradient(100, 0, 500, 0);
		gradientStroke.addColorStop(0, '#3f89e8');
		gradientStroke.addColorStop(1, '#5ebafe');

		let x_data_1 = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,153,154,155,156,157,158,159,160,161,162,163,164,165];
		let x_data_2 = [140,141,142,143,144,145,146,147,148,149,150,151,152,153,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN];
		let y_data_1 = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,4,7,16,20,19,27,26,32,32,34,37,34,41,47];
		let y_data_2 = [27, 24, 24, 20, 15, 16, 16.5, 10, 7, 8, 2, 1, 5, 4, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
		

		// responsive chart
		function handlerChart() {
			if (window.innerWidth < 768 && window.innerWidth >= 480) {
				chart.height = 600;
			} else if (window.innerWidth < 480) {
				chart.height = 450;
			} else {
				chart.height = 800;
			}
		}
		handlerChart();
		window.addEventListener('resize', handlerChart());


		function generateDataset(xData, yData) {
			let data = [];
			let i = 0;
			while (i < xData.length) {
				data.push({
					x: xData[i],
					y: yData[i]
				});
				i++;
			}
			return data;
		}

		var myChart = new Chart(ctx_2d, {
			type: 'line',
			// type: 'multicolorLine',
			data: {
				datasets: [
					{
						data: generateDataset(x_data_2, y_data_2),
						label: 'AAA',
						borderColor: '#FF5359',
						// pointBorderColor: '#fff',
						// pointBackgroundColor: '#06D49C',
						// pointBorderWidth: 5,
						// pointHoverRadius: 7,
						// pointHoverBorderWidth: 5,
						// pointRadius: 7,
						pointRadius: 0,
						fill: true,
						backgroundColor: gradientFill,
						borderWidth: 6,
						lineTension: 0,
						interpolate: true,
						xAxisID: 'x-axis-0'
					},
					{
						data: generateDataset(x_data_1, y_data_1),
						label: 'AAA',
						borderColor: '#06D49C',
						// pointBorderColor: '#fff',
						// pointBackgroundColor: '#06D49C',
						// pointBorderWidth: 5,
						// pointHoverRadius: 7,
						// pointHoverBorderWidth: 5,
						// pointRadius: 7,
						pointRadius: 0,
						fill: true,
						backgroundColor: gradientFill,
						borderWidth: 6,
						lineTension: 0,
						interpolate: true,
						xAxisID: 'x-axis-0'
					}
				]
			},
			options: {
				animation: {
					duration: 2000,
					easing: 'easeOutQuart'
				},
				responsive: true,
				elements: {
					point:{
							radius: 0
					}
				},
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						display: true,
						type: 'linear',
						position: 'bottom',
						id: 'x-axis-0',
						ticks: {
							// source: 'labels'
							fontColor: "rgba(255,255,255,.3)",
							fontFamily: "Geometria",
							fontSize: 15,
							beginAtZero: false,
							suggestedMin: 140,
							minTicksLimit: 7,
							padding: 5,
							callback: function(value, index, values) {
								return '$' + value;
							}
						},
						gridLines: {
							drawBorder: false,
							color: 'rgba(255,255,255,.1)',
							zeroLineColor: 'rgba(255,255,255,0)',
						},
					}],
					yAxes: [{
						position: 'right',
						ticks: {
							fontColor: "rgba(255,255,255,.3)",
							fontFamily: "Geometria",
							fontSize: 15,
						},
						gridLines: {
							drawBorder: false,
							color: 'rgba(255,255,255,0)',
							zeroLineColor: 'rgba(255,255,255,0)'
						}
					}]
				},
				tooltips: {
					mode: "interpolate",
					intersect: false,
					callbacks: {
						title: function (a, d) {
							// console.log(a[0]);
							return a[0].xLabel.toFixed(2);
							// return a[0].xLabel;
						},
						label: function (i, d) {
							// return (
							// 	d.datasets[i.datasetIndex].label + ": " + i.yLabel.toFixed(2)
							// );
							return {
								'label': d.datasets[i.datasetIndex].label,
								'x' : i.xLabel,
								'y' : i.yLabel
							};
						}
					},
					
					enabled: false,
					custom: function (tooltipModel) {
						// console.log('x: ' + tooltipModel.x);
						// console.log('y: ' + tooltipModel.y);

						// Tooltip Element
						let tooltipEl = document.getElementById('chartjs-tooltip');
						
						// tooltip variables
						let tooltipTitle = 'BTC / USDT';
						let currencyImageUrl1 = 'img/icons/bitcoin-icon.svg';
						let currencyImageUrl2 = 'img/icons/tether-icon.svg';
						let priceCurrency = 'USDT';
						let amountCurrency = 'BTC';
						let totalCurrency = 'USDT';

						// tooltip x y data
						let chartLabelsData;
						if (tooltipModel.body) {
							chartLabelsData = tooltipModel.body[0].lines[0];
						}

						// Hide if no tooltip
						if (tooltipModel.opacity === 0) {
							tooltipEl.style.opacity = 0;
							return;
						}

						// Create element on first render
						if (!tooltipEl) {
								tooltipEl = document.createElement('div');
								tooltipEl.id = 'chartjs-tooltip';
								tooltipEl.classList.add('chartjs-tooltip');
								tooltipEl.innerHTML = `
									<div class="chartjs-tooltip__head">
										<h2>${tooltipTitle}</h2>
										<div class="chartjs-tooltip__head-currency">
											<img src="${currencyImageUrl1}" alt="currency1"/>
											<img src="${currencyImageUrl2}" alt="currency2"/>
										</div>
									</div>
									<div class="chartjs-tooltip__body">
										<div class="chartjs-tooltip__line">
											<span>Price (${priceCurrency}):</span>
											<b id="chartjs-tooltip__price">$0</b>
										</div>
										<div class="chartjs-tooltip__line">
											<span>Amount (${amountCurrency}):</span>
											<b id="chartjs-tooltip__amount">0</b>
										</div>
										<div class="chartjs-tooltip__line">
											<span>Total (${totalCurrency}):</span>
											<b id="chartjs-tooltip__total">0</b>
										</div>
									</div>
									<div class="chartjs-tooltip__arr"></div>
								`;
								document.body.appendChild(tooltipEl);
						}


						// change prices inside tooltip
						const tooltipPrice = document.getElementById('chartjs-tooltip__price');
						const tooltipAmount = document.getElementById('chartjs-tooltip__amount');
						const tooltipTotal = document.getElementById('chartjs-tooltip__total');

						if (chartLabelsData) {
							tooltipPrice.innerHTML = '$' + (chartLabelsData.y * 1000).toFixed(2).toLocaleString();
							tooltipAmount.innerHTML = chartLabelsData.y.toFixed(2).toLocaleString();
							tooltipTotal.innerHTML = chartLabelsData.x.toFixed(2).toLocaleString();
						}

						if (chart_x_label) {
							chart_x_label.innerHTML = '$' + chartLabelsData.x.toFixed(0).toLocaleString();
						}


						// Set caret Position
						tooltipEl.classList.remove('above', 'below', 'no-transform');
						if (tooltipModel.yAlign) {
							tooltipEl.classList.add(tooltipModel.yAlign);
						} else {
							tooltipEl.classList.add('no-transform');
						}

						// `this` will be the overall tooltip
						let position = this._chart.canvas.getBoundingClientRect();

						// Display, position, and set styles for font
						tooltipEl.style.opacity = 1;
						tooltipEl.style.position = 'absolute';

						

						if (tooltipModel.caretX < 110) {
							tooltipEl.style.left = '110px';
						} else if((tooltipModel.caretX + 110) > window.innerWidth) {
							tooltipEl.style.left = (window.innerWidth - 110) + 'px';
						}
						else {
							tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
						}

						tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';

						if (tooltipModel.caretY < 300) {
							document.getElementById('chartjs-tooltip').classList.add('bottom');
						} else {
							document.getElementById('chartjs-tooltip').classList.remove('bottom');
						}
						
						
						// console.log(position);
						tooltipEl.style.pointerEvents = 'none';

						// add bottom green label for price on chart
						if (chart_x_label) {
							chart_x_label.style.left = tooltipModel.caretX + 'px';
						}

					}

				},
				plugins: {
					crosshair: {
						sync: {
							enabled: true
						},
						zoom: {
							enabled: false
						},
						line: {
							color: '#06D49C',
							width: 1,
							dashPattern: [6, 6]
						}
					}
				}
			}
		});
	}

	
	


	// add bottom green label for price on chart
	// if (chart_x_label) {
	// 	window.onmousemove = function (e) {
	// 		let x = e.clientX;
	// 		chart_x_label.style.left = x + 'px';
	// 	};
	// }

	
	// position of small angle inside tooltip
	window.onmousemove = function (e) {
		let tooltipArr = document.querySelector('.chartjs-tooltip__arr');
		let x = e.clientX;
		if (tooltipArr) {
			if (x < 110) {
				tooltipArr.style.left = x - 7 + 'px';
			} else if ((x + 110) > window.innerWidth) {
				tooltipArr.style.left = 'auto';
				tooltipArr.style.right = window.innerWidth - x - 7 + 'px';
			}
			else {
				tooltipArr.style.left = 'calc(50% - 7px)';
			}
		}
	};

	// remove disabling of cursor for chart
	if(document.getElementById('myChart')){
		setTimeout(function () {
			document.getElementById('myChart').classList.remove('cursor-block');
		}, 2000);
	}
	


	// WOW.js
	new WOW().init();

	



	// animate Markets block
	const $home2tr = document.querySelectorAll('.home2__table-tr');
	const $home2tableWrap = document.querySelector('.home2__table-body-wrap');

	if($home2tr.length > 0){
		let lastActiveElement = 0;
		while (lastActiveElement < 6) {
			$home2tr[lastActiveElement].classList.add('visible');
			lastActiveElement++;
		}
		$home2tr[lastActiveElement].classList.add('last-visible');
		$home2tableWrap.classList.add('trans');


		let offsetTable = 60;
		let offsetCounter = 1;
		let intervalMarkets = setInterval(() => {

			if ($home2tr[lastActiveElement]) {

				$home2tableWrap.style = 'transform: translateY(-'+offsetTable*offsetCounter+'px)';
				if ($home2tr[lastActiveElement + 1]) {
					$home2tr[lastActiveElement + 1].classList.add('last-visible');
				}
				$home2tr[lastActiveElement].classList.add('visible');
				$home2tr[lastActiveElement - 6].classList.remove('visible');
				$home2tr[lastActiveElement - 6].classList.add('hidden');
				$home2tableWrap.classList.add('trans');
				lastActiveElement++;
				offsetCounter++;

			} else {
				$('.home2__table-tr').removeClass('hidden visible last-visible');
				$home2tableWrap.classList.remove('trans');
				$home2tableWrap.style = 'transform: translateY(0px)';
				lastActiveElement = 0;
				offsetCounter = 1;
				while (lastActiveElement < 6) {
					$home2tr[lastActiveElement].classList.add('visible');
					lastActiveElement++;
				}
			}

		}, 3000);
	}





	/* components */

	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 600,
					settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

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
		let viewport_wid = viewport().width;
		let viewport_height = viewport().height;

		// if (viewport_wid <= 991) {

		// }
	}

	window.addEventListener('load', handlerResize);
	window.addEventListener('resize', handlerResize);


	$(".accordeon dd").hide()
	$('.accordeon dl:first-child dd').slideDown().prev().addClass("active");
	
	$(".accordeon dd").prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

	$('.home5__pic').eq(0).stop().fadeIn();
	$('.accordeon dl dt').on('click', function(){
		let num = $(this).parents().index();
		$('.home5__pic').stop().fadeOut();
		$('.home5__pic').eq(num).stop().fadeIn();

	});


	



});

/* viewport width */
function viewport() {
	let e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */

document.addEventListener("DOMContentLoaded", function () {

	if($('.ui.accordion').length){
		$('.ui.accordion').accordion();
	}

	if($('.menu .item').length){
		$('.menu .item').tab();
	}
	if($('.ui.dropdown').length){
		$('.ui.dropdown').dropdown();
	}
	if($('.ui.checkbox').length){
		$('.ui.checkbox').checkbox();


		
	}


})


// modals header 
document.addEventListener("DOMContentLoaded", function () {

	const popupNewAccount = document.querySelector('.popup__newAccount');
	const popupSignIn = document.querySelector('.popup__signIn');
	if (popupNewAccount) {
		$('.popup__newAccount.modal')
			.modal({
				autofocus: false, 
				observeChanges: true,
				
				onShow : function() {
					const body = document.querySelector('body');
					body.classList.remove('menu-active')
				}
			})
			.modal('attach events', '.modal-popup__newAccount')
		;
		const popupTabs = popupNewAccount.querySelectorAll('.popup__tab');
		for(let i = 0; i < popupTabs.length; i++) {
			popupTabs[i].addEventListener('click', () => {
				for(let tab of popupTabs) {
					tab.classList.remove('active')
				}
				const blocks = popupNewAccount.querySelectorAll('.popup__form')
				for(let o = 0; o < blocks.length; o++) {
					blocks[o].classList.remove('active');
					if(o == i) {
						blocks[o].classList.add('active');
						popupTabs[i].classList.add('active');
					}
				}
			})
		}
	}

	if (popupSignIn) {
		$('.popup__signIn.modal')
			.modal({
				autofocus: false, 
				observeChanges: true,
				onShow : function() {
					const body = document.querySelector('body');
					body.classList.remove('menu-active')
				}
			})
			.modal('attach events', '.modal-popup__signIn')
		;
	}

	
			  

	$('.index-slider__wrapper').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 3,
		variableWidth: true,
		speed: 1000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true
			  }
			},
		  ]
	  });
	
})




