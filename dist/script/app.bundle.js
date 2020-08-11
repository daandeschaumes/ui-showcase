
const carUI = (function() {
	(nameHolderClass = null),
		(pageHolderClass = null),
		(carImageHolderClass = null),
		(specsHolderClass = null),
		(dealHolderClass = null),
		(goBackHolderClass = null),
		(powerHolderClass = null),
		(accelerationHolderClass = null),
		(engines = []),
		(speedHolderClass = null);

	const setupCarApp = function({
		pageHolderClass,
		carImageHolderClass,
		specsHolderClass,
		dealHolderClass,
		goBackHolderClass,
		nameHolderClass,
		powerHolderClass,
		accelerationHolderClass,
		speedHolderClass
	}) {
		pageHolder = document.querySelector(pageHolderClass);
		carImageHolder = document.querySelector(carImageHolderClass);
		specsHolder = document.querySelector(specsHolderClass);
		dealHolder = document.querySelector(dealHolderClass);
		goBackHolder = document.querySelector(goBackHolderClass);
		nameHolder = document.querySelector(nameHolderClass);
		powerHolder = document.querySelector(powerHolderClass);
		accelerationHolder = document.querySelector(accelerationHolderClass);
		speedHolder = document.querySelector(speedHolderClass);
	};

	const showEngines = data => {
		console.log(data);
		engines.push(data);
		nameHolder.innerHTML = data[0].name;
		powerHolder.innerHTML = data[0].power;
		accelerationHolder.innerHTML = data[0].acceleration;
		speedHolder.innerHTML = data[0].speed;
	};

	function fadeOut() {
		dealHolder.classList.add('hide');
		specsHolder.classList.add('hide');
		carImageHolder.classList.add('hide');
		setTimeout(() => {
			fadeIn();
		}, 1000);
	}

	function scaleButton() {
		console.log('You called me');
		var priceButton = document.querySelector('.js-button');
		priceButton.classList.remove('c-button__default');
		priceButton.classList.add('c-button__custom');
		priceButton.innerHTML = 'Next';
	}

	function fadeIn() {
		dealHolder.innerHTML =
			'<nav class="c-nav">\
            <ul class="c-nav__list">\
                <li class="c-nav__options c-nav__option--exterior">\
                    <a class="js-nav-exterior">Exterior</a>\
                </li>\
                <li\
                    class="c-nav__options c-nav__option--interior"\
                >\
                    <a class="js-nav-interior">Interior</a>\
                </li>\
                <li\
                    class="c-nav__options c-nav__option--engines"\
                >\
                    <a class="js-nav-engines">Engines</a>\
                </li>\
                <div class="c-nav__line js-line"></div>\
            </ul>\
        </nav>';

		dealHolder.classList.remove('c-deal');
		dealHolder.classList.remove('hide');
		dealHolder.classList.add('show');

		specsHolder.classList.remove('c-specifications');
		specsHolder.classList.add('c-color-options');
		specsHolder.classList.remove('hide');
		specsHolder.innerHTML =
			'<button\
        class="c-color__option c-color__option--white js-white"\
    ></button>\
    <button\
        class="c-color__option c-color__option--grey js-grey"\
    ></button>\
    <button\
        class="c-color__option c-color__option--yellow js-yellow"\
    ></button>\
    <button\
        class="c-color__option c-color__option--red js-red"\
    ></button>\
    <button\
        class="c-color__option c-color__option--blue js-blue"\
    ></button>';
		specsHolder.classList.add('show');

		carImageHolder.src = './images/q2-yellow.png';
		carImageHolder.classList.remove('hide');
		carImageHolder.classList.add('show');

		setTimeout(() => {
			scaleButton();
		}, 700);
		newEventListeners();
	}

	function newEventListeners() {
		var exterior = document.querySelector('.js-nav-exterior');
		var interior = document.querySelector('.js-nav-interior');
		var engines = document.querySelector('.js-nav-engines');
		var navLine = document.querySelector('.js-line');

		var optionWhite = document.querySelector('.js-white');
		var optionGrey = document.querySelector('.js-grey');
		var optionYellow = document.querySelector('.js-yellow');
		var optionRed = document.querySelector('.js-red');
		var optionBlue = document.querySelector('.js-blue');

		goBackHolder.addEventListener('click', fadeInMainPage);
		exterior.addEventListener('click', function() {
			var colorAccent = getComputedStyle(
				document.documentElement
			).getPropertyValue('--color-accent');
			exterior.style.color = colorAccent;
			interior.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			engines.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			//console.log(colorAccent);
			navLine.classList.remove('selectedOptionEngines');
			navLine.classList.remove('selectedOption');
		});
		interior.addEventListener('click', function() {
			var colorAccent = getComputedStyle(
				document.documentElement
			).getPropertyValue('--color-accent');
			interior.style.color = colorAccent;
			exterior.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			engines.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			//console.log(colorAccent);
			navLine.classList.remove('selectedOptionEngines');
			navLine.classList.add('selectedOption');
		});

		engines.addEventListener('click', function() {
			var colorAccent = getComputedStyle(
				document.documentElement
			).getPropertyValue('--color-accent');
			engines.style.color = colorAccent;
			interior.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			exterior.style.color = 'rgba(' + [37, 35, 37, 0.2].join(',') + ')';
			//console.log(colorAccent);
			navLine.classList.add('selectedOptionEngines');
		});

		optionWhite.addEventListener('click', function() {
			carImageHolder.src = './images/q2-white.png';
		});
		optionGrey.addEventListener('click', function() {
			carImageHolder.src = './images/q2-grey.png';
		});
		optionYellow.addEventListener('click', function() {
			carImageHolder.src = './images/q2-yellow.png';
		});
		optionRed.addEventListener('click', function() {
			carImageHolder.src = './images/q2-red.png';
		});
		optionBlue.addEventListener('click', function() {
			carImageHolder.src = './images/q2-blue.png';
		});
	}

	function fadeInMainPage() {
		pageHolder.style.visibility = 'hidden';
		var colorAccent = getComputedStyle(
			document.documentElement
		).getPropertyValue('--color-accent');
		var content = document.querySelector('.c-content');
		content.style.background = colorAccent;
		content.classList.remove('c-content__default');
		content.innerHTML =
			'<div class="c-header">\
            <h1 class="c-header__title js-title" style="color:#fff; margin: 0 25px; height:80px;">\
                Join us on an #untaggable journey\
            </h1>\
        </div>\
        </div>\
        <div style="display:flex; justify-content: center;">\
							<button\
								class="c-button c-button__default js-explore" style="background:#fff; color:#fcb800; width:50%; margin-top:50px;"\
							>\
								Explore\
							</button>\
						</div>\
        <img\
        class="c-stretchedimg js-stretchedimg"\
        src="./images/audi.png"\
        alt="audi"<div class="js-page"/>';

		var exploreBtn = document.querySelector('.js-explore');
		exploreBtn.addEventListener('click', fadeIn);
	}

	const enableListeners = function() {
		goBackHolder.addEventListener('click', fadeOut);
	};

	return {
		setupCarApp: setupCarApp,
		enableListeners: enableListeners,
		showEngines: showEngines
	};
})();

const dataAccess = (function() {
	const fetchEngines = () => {
		fetch('./data/engines.json')
			.then(response => response.json())
			.then(data => carUI.showEngines(data))
			.catch(err => console.error(`An error occured, ${err}`));
	};
	return {
		fetchEngines: fetchEngines
	};
})();

(function() {
	document.addEventListener('DOMContentLoaded', function() {
		carUI.setupCarApp({
			pageHolderClass: '.js-page',
			carImageHolderClass: '.js-image',
			specsHolderClass: '.js-specs',
			dealHolderClass: '.js-deal',
			goBackHolderClass: '.js-back',
			nameHolderClass: '.js-title',
			powerHolderClass: '.js-power',
			accelerationHolderClass: '.js-acceleration',
			speedHolderClass: '.js-speed'
		});
		carUI.enableListeners();
		dataAccess.fetchEngines();
		carUI.showEngines();
	});
})();
