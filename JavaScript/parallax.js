/* FUNCIONES COOKIES ----------------------------------------------------------------------------------------------------------*/


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

function leerCookie() {
  if (getCookie('aceptar_cookie') != '1') {
    document.body.style.overflow = 'hidden';
    document.getElementById('barraaceptacion').style.display = 'block';
  }
  else {
    document.body.style.overflow = 'visible';
    document.getElementById('barraaceptacion').style.display = 'none';
  }
}

function ponerCookie() {
  setCookie('aceptar_cookie', '1', 365);
  document.getElementById('barraaceptacion').style.display = 'none';
  document.body.style.overflow = 'visible';
}

$(document).ready(function () {
  leerCookie();
});

$(document).ready(function () {
  $("#contenedor-menu").find("a").click(function () {
    ponerCookie();
  });
});
/* FUNCIONES FORMULARIO -------------------------------------------------------------------------------------------------------*/


function validar(e) {
  let email = document.getElementById("inputEmail4");
  let nombre = document.getElementById("inputName");
  let telefono = document.getElementById("inputTelephone");
  let apellido1 = document.getElementById("inputApellido1");
  let apellido2 = document.getElementById("inputApellido2");
  let direccion = document.getElementById("inputCity");
  let datalist = document.getElementById("DataList");
  let terminos = document.getElementById("gridCheck");

  if (miform.inputEmail4.value != "") {
    email.classList.remove("is-invalid");
  }

  if (miform.inputName.value != "") {
    nombre.classList.remove("is-invalid");
  }

  if (miform.inputTelephone.value < 1000000000 || miform.inputTelephone.value > 100000000) {
    telefono.classList.remove("is-invalid");
  }

  if (miform.inputApellido1.value != "") {
    apellido1.classList.remove("is-invalid");
  }

  if (miform.inputApellido2.value != "") {
    apellido2.classList.remove("is-invalid");
  }

  if (miform.inputCity.value != "") {
    direccion.classList.remove("is-invalid");
  }

  if (miform.DataList.value != "") {
    datalist.classList.remove("is-invalid");
  }

  if(miform.gridCheck.checked){
    terminos.classList.remove("is-invalid");
  }

  if (!miform.gridCheck.checked){
    e.preventDefault(); //Comprueba que esté marcado el checkbox

    terminos.classList.add("is-invalid");
    terminos.focus();
  }

  if (miform.DataList.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    datalist.classList.add("is-invalid");
    datalist.focus();
  }

  if (miform.inputCity.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    direccion.classList.add("is-invalid");
    direccion.focus();
  }

  if (miform.inputApellido2.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    apellido2.classList.add("is-invalid");
    apellido2.focus();
  }

  if (miform.inputApellido1.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    apellido1.classList.add("is-invalid");
    apellido1.focus();
  }

  if (miform.inputTelephone.value < 100000000 || miform.inputTelephone.value > 999999999 || miform.inputTelephone.value.isNaN == 1) {
    e.preventDefault(); //Solo se valida que no esté vacío

    telefono.classList.add("is-invalid");
    telefono.focus();
  }

  if (miform.inputName.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    nombre.classList.add("is-invalid");
    nombre.focus();
  }

  if (miform.inputEmail4.value == "") {
    e.preventDefault(); //Solo se valida que no esté vacío

    email.classList.add("is-invalid");
    email.focus();
  }

  return true;
}

function load() {
  miform.addEventListener("submit", validar);
}
document.addEventListener("DOMContentLoaded", load, false);

/* FUNCIONES VIDEO -------------------------------------------------------------------------------------------------------*/

let visible = 0;

$(window).scroll(function () {
  let top_of_element = $("#videoTrack").offset().top;
  let bottom_of_element = $("#videoTrack").offset().top + $("#videoTrack").outerHeight();

  let top_of_element2 = $("#videoTrack2").offset().top;
  let bottom_of_element2 = $("#videoTrack2").offset().top + $("#videoTrack2").outerHeight();

  let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  let top_of_screen = $(window).scrollTop();


  if (((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) || ((bottom_of_screen > top_of_element2) && (top_of_screen < bottom_of_element2))) {
    $("#videoTimeline").css({"position": "relative", "width": "92vmin", "height": "51.75vmin"});
    visible=1;
  } else if (visible==1) {
    $("#videoTrack").css({"position": "absolute"});
    $("#videoTimeline").css({ "position": "fixed", "bottom": "2em", "right": "2em", "z-index": "1000", "width": "44vmin", "height": "24.75vmin" });
  }
});


/* FUNCIONES GALERÍA -------------------------------------------------------------------------------------------------------*/


$(window).scroll(function () {
  let top_of_element = $("#galeria1").offset().top;
  let bottom_of_element = $("#galeria1").offset().top + $("#galeria1").outerHeight();

  let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  let top_of_screen = $(window).scrollTop();

  let x = bottom_of_screen;
  let y = top_of_screen;

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) ) {
    $("#galeria1").animate({opacity: '1'}, 2000, "linear");
  } 

  top_of_element = $("#galeria2").offset().top;
  bottom_of_element = $("#galeria2").offset().top + $("#galeria2").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria2").animate({opacity: '1'}, 2000, "linear");
  }
  
  top_of_element = $("#galeria3").offset().top;
  bottom_of_element = $("#galeria3").offset().top + $("#galeria3").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria3").animate({opacity: '1'}, 2000, "linear");
  } 

  top_of_element = $("#galeria4").offset().top;
  bottom_of_element = $("#galeria4").offset().top + $("#galeria4").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria4").animate({opacity: '1'}, 2000, "linear");
  } 

  top_of_element = $("#galeria5").offset().top;
  bottom_of_element = $("#galeria5").offset().top + $("#galeria5").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria5").animate({opacity: '1'}, 2000, "linear");
  } 
  top_of_element = $("#galeria6").offset().top;
  bottom_of_element = $("#galeria6").offset().top + $("#galeria6").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria6").animate({opacity: '1'}, 2000, "linear");
  } 
  top_of_element = $("#galeria7").offset().top;
  bottom_of_element = $("#galeria7").offset().top + $("#galeria7").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria7").animate({opacity: '1'}, 2000, "linear");
  } 
  top_of_element = $("#galeria8").offset().top;
  bottom_of_element = $("#galeria8").offset().top + $("#galeria8").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria8").animate({opacity: '1'}, 2000, "linear");
  } 
  top_of_element = $("#galeria9").offset().top;
  bottom_of_element = $("#galeria9").offset().top + $("#galeria9").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria9").animate({opacity: '1'}, 2000, "linear");
  } 
  top_of_element = $("#galeria10").offset().top;
  bottom_of_element = $("#galeria10").offset().top + $("#galeria10").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria10").animate({opacity: '1'}, 2000, "linear");
  } 

  top_of_element = $("#galeria11").offset().top;
  bottom_of_element = $("#galeria11").offset().top + $("#galeria11").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria11").animate({opacity: '1'}, 2000, "linear");
  }

  top_of_element = $("#galeria12").offset().top;
  bottom_of_element = $("#galeria12").offset().top + $("#galeria12").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria12").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria13").offset().top;
  bottom_of_element = $("#galeria13").offset().top + $("#galeria13").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria13").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria14").offset().top;
  bottom_of_element = $("#galeria14").offset().top + $("#galeria14").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria14").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria15").offset().top;
  bottom_of_element = $("#galeria15").offset().top + $("#galeria15").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria15").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria16").offset().top;
  bottom_of_element = $("#galeria16").offset().top + $("#galeria16").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria16").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria17").offset().top;
  bottom_of_element = $("#galeria17").offset().top + $("#galeria17").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria17").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria18").offset().top;
  bottom_of_element = $("#galeria18").offset().top + $("#galeria18").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria18").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria19").offset().top;
  bottom_of_element = $("#galeria19").offset().top + $("#galeria19").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria19").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria20").offset().top;
  bottom_of_element = $("#galeria20").offset().top + $("#galeria20").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria20").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria21").offset().top;
  bottom_of_element = $("#galeria21").offset().top + $("#galeria21").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria21").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria22").offset().top;
  bottom_of_element = $("#galeria22").offset().top + $("#galeria22").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria22").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria23").offset().top;
  bottom_of_element = $("#galeria23").offset().top + $("#galeria23").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria23").animate({opacity: '1'}, 2000, "linear");
  }
  top_of_element = $("#galeria24").offset().top;
  bottom_of_element = $("#galeria24").offset().top + $("#galeria24").outerHeight();

  if ((x > top_of_element) && (y < bottom_of_element) ) {
    $("#galeria24").animate({opacity: '1'}, 2000, "linear");
  }
});


let blockwhiteVisible = false;

		window.addEventListener('load', (event) => {
			let images = document.querySelectorAll(".galeria");
			if(images !== null && images !== undefined && images.length > 0) {
				images.forEach(function(img) {
					img.addEventListener('click', (evt) => {
						showblockwhite(img.src);
					});
				});
			}
		});

		function showblockwhite(url) {
			if(!blockwhiteVisible) {

				let div = document.createElement("div");
				div.id = "blockwhite";
				div.innerHTML = '<img class="blockwhiteimg" src="'+url+'" />';
				document.body.appendChild(div);

				let blanco = document.getElementById("blockwhite");
        blanco.style.display = 'flex';
        blanco.style.justifyContent = 'center';
        document.body.style.overflow = 'hidden';

				blanco.addEventListener('click', (event) => {

					let element = document.getElementById("blockwhite");
					element.parentNode.removeChild(element);
          document.body.style.overflow = 'visible';

					blockwhiteVisible = false;
				})


				blockwhiteVisible = true;

			} else {

				let element = document.getElementById("blockwhite");
				element.parentNode.removeChild(element);
        document.body.style.overflow = 'visible';

				blockwhiteVisible = false;
			}

		}





/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 */

; (function ($, window, document, undefined) {


  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY) ? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo(this.mirrorContainer);

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0)
      this.$slider = $('<img />').prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror)
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function () {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth = this.naturalWidth || this.width || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted)
      this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }

  }


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed: 0.2,
    bleed: 0,
    zIndex: -100,
    iosFix: true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,
    mirrorContainer: 'body',

    refresh: function () {
      this.boxWidth = this.$element.outerWidth();
      this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
      var margin;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth = this.boxWidth;
        this.imageHeight = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft = 0;

        margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function () {
      var scrollTop = Parallax.scrollTop;
      var scrollLeft = Parallax.scrollLeft;
      var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d(' + this.mirrorLeft + 'px, ' + (this.mirrorTop - overScroll) + 'px, 0px)',
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d(' + this.offsetLeft + 'px, ' + this.offsetTop + 'px, 0px)',
        position: 'absolute',
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: false,
    isFresh: false,
    isBusy: false,

    setup: function () {
      if (this.isReady) return;

      var self = this;

      var $doc = $(document), $win = $(window);

      var loadDimensions = function () {
        Parallax.winHeight = $win.height();
        Parallax.winWidth = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth = $doc.width();
      };

      var loadScrollPosition = function () {
        var winScrollTop = $win.scrollTop();
        var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
        Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function () {
        loadDimensions();
        self.refresh();
        Parallax.isFresh = false;
        Parallax.requestRender();
      })
        .on('scroll.px.parallax load.px.parallax', function () {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;

      var lastPosition = -1;

      function frameLoop() {
        if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
          window.requestAnimationFrame(frameLoop);
          return false;
        } else lastPosition = window.pageYOffset;

        self.render();
        window.requestAnimationFrame(frameLoop);
      }

      frameLoop();
    },

    configure: function (options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function () {
      $.each(this.sliders, function () { this.refresh(); });
      this.isFresh = true;
    },

    render: function () {
      this.isFresh || this.refresh();
      $.each(this.sliders, function () { this.render(); });
    },

    requestRender: function () {
      var self = this;
      self.render();
      self.isBusy = false;
    },
    destroy: function (el) {
      var i,
        parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for (i = 0; i < this.sliders.length; i += 1) {
        if (this.sliders[i] == parallaxElement) {
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if (this.sliders.length === 0) {
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      else if (typeof option == 'object') {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if (option == 'destroy') {
          Parallax.destroy(this);
        } else {
          Parallax[option]();
        }
      }
    });
  }

  var old = $.fn.parallax;

  $.fn.parallax = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

  $(function () {
    $('[data-parallax="scroll"]').parallax();
  });

}(jQuery, window, document));



