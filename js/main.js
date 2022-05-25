function Clock(clockNode) {
    this.clockNode = clockNode;

    this.clockNode.addEventListener('click', (event) => {
        event.target.classList.toggle('short-format');  
    });
}

Clock.prototype.startClock = function() {
    let date = new Date().toTimeString().split(' ')[0];

    if (this.clockNode.classList.contains('short-format')) {
        date = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = date;
}

Clock.prototype.render = function() {
    setInterval(()=> this.startClock(), 1000);
}

function ChildrenClock1(clockNode) {
    Clock.call(this, clockNode)
}

function ChildrenClock2(clockNode) {
    Clock.call(this, clockNode)
}

ChildrenClock1.prototype = Object.create(Clock.prototype);
ChildrenClock2.prototype = Object.create(Clock.prototype);

ChildrenClock1.prototype.startClock = function() {
    let date = new Date().toTimeString().split(' ')[0].substring(0,5);

    if (this.clockNode.classList.contains('short-format')) {
        date = new Date().toTimeString().split(' ')[0];
    }

    this.clockNode.innerHTML = date;
}

ChildrenClock2.prototype.startClock = function() {
    let date = new Date().toTimeString().split(' ')[0];

    if (this.clockNode.classList.contains('short-format')) {
        date = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = date;
}


// let clock = new Clock(document.querySelector('.clock1'));
let clockChildren1 = new ChildrenClock1(document.querySelector('.clock2'));
let clockChildren2 = new ChildrenClock2(document.querySelector('.clock3'));

// clock.render();
clockChildren1.render();
clockChildren2.render();