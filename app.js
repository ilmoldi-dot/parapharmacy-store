// تسجيل Service Worker لتحويل الصفحة إلى تطبيق PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// دالة تثبيت التطبيق
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    if (installBtn) {
        installBtn.style.display = 'block';
        
        installBtn.addEventListener('click', () => {
            installBtn.style.display = 'none';
            deferredPrompt.prompt();
            
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
});

// اكتشاف ما إذا كان التطبيق مثبتًا
window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed successfully');
    if (installBtn) installBtn.style.display = 'none';
});

// التحقق مما إذا كان التطبيق يعمل في وضع التطبيق
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone === true;
}

if (isRunningAsPWA()) {
    console.log('Running as PWA');
    document.body.classList.add('pwa-mode');
}