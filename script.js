function submitForm() {
    var adValue = document.getElementById('ad').value.trim();
    var mehsulValue = document.getElementById('mehsul').value.trim();
    var sayiValue = document.getElementById('sayi').value.trim();

    // Formun tamamen doldurulup doldurulmadığını kontrol et
    if (adValue === '' || mehsulValue === '' || sayiValue === '') {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';

        // Formun gönderildiğini simüle etmek için inputları sıfırla
        document.getElementById('ad').value = '';
        document.getElementById('mehsul').value = '';
        document.getElementById('sayi').value = '';
    }
}


// Animasyonu tetiklemek için bir fonksiyon oluştur
function triggerAnimation() {
    // Tüm section'ları al
    const sections = document.querySelectorAll('.main, .main2 , .main3, #Xidmetler , #Magazalar, #Elaqe ,#Haqqimizda');

    // Her bir section için kontrol et
    sections.forEach(section => {
        // Section'un üst ve alt sınırlarını al
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Ekranda tamamen görünüyorsa veya kısmen görünüyorsa animasyonu başlat
        if ((sectionTop < window.innerHeight && sectionBottom >= 0) || 
            (sectionTop >= 0 && sectionTop <= window.innerHeight)) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

// Scroll olayını dinle
window.addEventListener('scroll', triggerAnimation);

// Sayfa yüklendiğinde de animasyonları tetikle
window.addEventListener('DOMContentLoaded', triggerAnimation);
