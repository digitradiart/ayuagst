var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 400; //100

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 300; //delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid red}';
  document.body.appendChild(css);
};

// Adding smooth filling skill capsules behaviour on skills-display visibility
var skillProgress = document.querySelectorAll('.skill-progress');
var skillLevel = document.querySelectorAll('.skill-progress>div');
var skillProgressArr = new Array(skillProgress.length);

for (let i = 0; i < skillProgressArr.length; i++) {
  skillProgressArr[i] = false;
}
// setting initial skill level to 0
for (let i = 0; i < skillLevel.length; i++) {
  skillLevel[i].style.width = '0%';
}

window.addEventListener('scroll', function () {
  for (let i = 0; i < skillProgress.length; i++) {
    let skillProgressCoordinates = skillProgress[i].getBoundingClientRect();
    if (skillProgressCoordinates.y < window.innerHeight && !skillProgressArr[i]) {
      skillProgressArr[i] = true;
      let currLevel = 0;
      let maxLevel = skillLevel[i].getAttribute('data-skill-level');
      let interval = setInterval(function () {
        if (currLevel == maxLevel) {
          clearInterval(interval);
          return;
        } else {
          currLevel++;
          skillLevel[i].style.width = currLevel + '%';
        }
      }, 10);
    }

    if (skillProgressCoordinates.y >= window.innerHeight) {
      skillLevel[i].style.width = 0 + '%';
      skillProgressArr[i] = false;
    }
  }
});
