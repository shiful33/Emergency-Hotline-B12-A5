// Functionality Starts Here----
function getElement(id) {
    const element = document.getElementById(id);
    return element;
};

function getElementsByClassName(cls) {
    const element = document.getElementsByClassName(cls);
    return element;
};

// Heart Count Functionality -----
let heartCount = 0;

const heartCountA = getElement('heart-countA');
const heartBtns = getElementsByClassName('heart-btn');

for( i = 0; i < heartBtns.length; i++ ) {
   heartBtns[i].addEventListener('click', function() {
    heartCount = heartCount + 1;
    heartCountA.innerText = heartCount;
   });
}

// Call Button Alert Functionality -----

/* const alertNotification = document.getElementById('alert-notification');
const alertMessage = document.getElementById('alert-message');
const okBtn = document.getElementById('ok-btn');

const callButtons = document.querySelectorAll('.call-btn');

for( let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        const number = this.getAttribute('data-number');
        alertMessage.textContent = `Calling ${number}`;
        alertNotification.classList.remove('hidden');
    });
}

okBtn.addEventListener('click', function() {
    alertNotification.classList.add('hidden');
});  */

// Call Button Alert Functionality -----
// ---  Card-1 ---
const callBtn = getElement('call-btn');
const alertNotification = getElement('alert-notification');
const okBtn = getElement('ok-btn');
const callHistory = getElement('call-history');
const historyList = getElement('history-list');

callBtn.addEventListener('click', function() {
    alertNotification.classList.remove('hidden');
});

okBtn.addEventListener('click', function() {
    alertNotification.classList.add('hidden');
});

// ---  Card-2 ---
const callBtn2 = getElement('call-btn2');
const alertNotification2 = getElement('alert-notification2');
const okBtn2 = getElement('ok-btn2');

callBtn2.addEventListener('click', function() {
    alertNotification2.classList.remove('hidden');
});

okBtn2.addEventListener('click', function() {
    alertNotification2.classList.add('hidden');
});

// ---  Card-3 ---
const callBtn3 = getElement('call-btn3');
const alertNotification3 = getElement('alert-notification3');
const okBtn3 = getElement('ok-btn3');

callBtn3.addEventListener('click', function() {
    alertNotification3.classList.remove('hidden');
});

okBtn3.addEventListener('click', function() {
    alertNotification3.classList.add('hidden');
});

// ---  Card-4 ---
const callBtn4 = getElement('call-btn4');
const alertNotification4 = getElement('alert-notification4');
const okBtn4 = getElement('ok-btn4');

callBtn4.addEventListener('click', function() {
    alertNotification4.classList.remove('hidden');
});

okBtn4.addEventListener('click', function() {
    alertNotification4.classList.add('hidden');
});

// ---  Card-5 ---
const callBtn5 = getElement('call-btn5');
const alertNotification5 = getElement('alert-notification5');
const okBtn5 = getElement('ok-btn5');

callBtn5.addEventListener('click', function() {
    alertNotification5.classList.remove('hidden');
});

okBtn5.addEventListener('click', function() {
    alertNotification5.classList.add('hidden');
});

// ---  Card-6 ---
const callBtn6 = getElement('call-btn6');
const alertNotification6 = getElement('alert-notification6');
const okBtn6 = getElement('ok-btn6');

callBtn6.addEventListener('click', function() {
    alertNotification6.classList.remove('hidden');
});

okBtn6.addEventListener('click', function() {
    alertNotification6.classList.add('hidden');
});

// ---  Card-7 ---
const callBtn7 = getElement('call-btn7');
const alertNotification7 = getElement('alert-notification7');
const okBtn7 = getElement('ok-btn7');

callBtn7.addEventListener('click', function() {
    alertNotification7.classList.remove('hidden');
});

okBtn7.addEventListener('click', function() {
    alertNotification7.classList.add('hidden');
});

// ---  Card-8 ---
const callBtn8 = getElement('call-btn8');
const alertNotification8 = getElement('alert-notification8');
const okBtn8 = getElement('ok-btn8');

callBtn8.addEventListener('click', function() {
    alertNotification8.classList.remove('hidden');
});

okBtn8.addEventListener('click', function() {
    alertNotification8.classList.add('hidden');
});

// ---  Card-9 ---
const callBtn9 = getElement('call-btn9');
const alertNotification9 = getElement('alert-notification9');
const okBtn9 = getElement('ok-btn9');

callBtn9.addEventListener('click', function() {
    alertNotification9.classList.remove('hidden');
});

okBtn9.addEventListener('click', function() {
    alertNotification9.classList.add('hidden');
});

// Call Button History Functionality -----

const callBtns = document.getElementsByClassName('call-btn');

for (const callButton of callBtns) {
    callButton.addEventListener('click', function() {
        const notificationTitle = callButton.parentNode.parentNode.children[1].children[1].innerText;

        const notificationNumber = callButton.parentNode.parentNode.children[1].children[2].innerText;
        
        const callHistory = getElement('call-history');

        const newCallHistory = document.createElement('div');
        newCallHistory.innerHTML =
        `<div class="bg-[#F5FFF6] rounded-lg p-4 m-8"
        <div>
           <h2 class="text-[20px] font-medium">${notificationTitle}</h2>
           <h2 class="text-[20px] font-medium">${notificationNumber}</h2>
           </div>
        </div>`;

        callHistory.append(newCallHistory);
    });
}

  getElement('clear-Btn').addEventListener('click', function() {
    const callHistory = getElement('call-history');
    callHistory.innerHTML = '';
  })