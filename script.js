// ١. کاتژمێرە زیندووەکە
function updateClock() {
    const now = new Date();
    // ڕێکخستنی کاتژمێر بە شێوازێکی جوانتر
    const datePart = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
    const timePart = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    const clockElement = document.getElementById('live-clock');
    if(clockElement) clockElement.innerText = `${datePart} - ${timePart}`;
}
setInterval(updateClock, 1000);
updateClock(); // بانگکردنی یەکەمجار بۆ ئەوەی یەکسەر دەربکەوێت

// ٢. فرمانی کردنەوەی کتێبەکان
function openBook(title, author, content) {
    // نوێکردنەوەی زانیارییەکانی لای چەپ (Info Card)
    document.getElementById('book-title').innerText = title;
    document.getElementById('book-author').innerText = author;
    
    // شاردنەوەی بەشی بەخێرهاتن
    const welcome = document.getElementById('welcome-section');
    if(welcome) welcome.style.display = 'none';

    // پیشاندانی ناوەڕۆک لە ناو خوێنەرەکەدا (Reader)
    const reader = document.getElementById('reader');
    reader.innerHTML = `
        <div style="animation: fadeIn 0.6s ease; text-align: justify;">
            <h2 style="color: #1a2a6c; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 15px;">${title}</h2>
            <p style="font-size: 19px; line-height: 2.2; color: #333;">${content}</p>
            <button onclick="showHome()" style="margin-top: 30px; padding: 10px 20px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">داخستنی کتێب</button>
        </div>
    `;
}

// ٣. گەڕانەوە بۆ سەرەتا
function showHome() {
    const welcome = document.getElementById('welcome-section');
    if(welcome) welcome.style.display = 'block';
    
    document.getElementById('reader').innerHTML = '';
    document.getElementById('book-title').innerText = '---';
    document.getElementById('book-author').innerText = '---';
}

// سیستەمی لێدانی دەنگ بۆ مۆبایل و کۆمپیوتەر
const handleFirstInteraction = () => {
    const audio = document.getElementById('welcome-sound');
    if (audio) {
        audio.play()
            .then(() => {
                console.log("دەنگەکە کار دەکات");
                // لادانی گوێگرەکان دوای یەکەم لێدان
                removeInteractionListeners();
            })
            .catch(err => console.log("هێشتا ڕێگری هەیە:", err));
    }
};// فەنکشن بۆ گۆڕینی دەنگ و پەخشکردن
function setTrack(fileName, title) {
    const audio = document.getElementById('audio-ctrl');
    const titleLabel = document.getElementById('track-display');
    
    if (audio && titleLabel) {
        // گۆڕینی ناونیشان بۆ ناوی ئەو بەشەی کلیکی لێکراوە
        titleLabel.innerText = title;
        
        audio.src = fileName;
        audio.load();
        audio.play().catch(e => console.log("لێدان پێویستی بە کلیکی بەکارهێنەرە"));

        // ئەم بەشە نوێیە: کاتێک دەنگەکە تەواو بوو (Ended)
        audio.onended = function() {
            titleLabel.innerText = "دەنگەکان"; // دووبارە دەبێتەوە بە "دەنگەکان"
        };
    }
}


// فەنکشن بۆ کردنەوەی ناوەڕۆکی کتێبەکان
function openBook(bookName) {
    const mainArea = document.getElementById('main-area');
    mainArea.innerHTML = `
        <div style="text-align: right; padding: 10px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #3498db; display: inline-block;">کتێبی ${bookName}</h2>
            <p style="margin-top: 20px; font-size: 16px; line-height: 1.8;">
                لێرەدا ناوەڕۆکی تایبەت بە ${bookName} دەرکەوێت... <br>
                ئەم بەشە ئێستا ئامادەیە بۆ خوێندنەوە.
            </p>
            <button onclick="location.reload()" style="margin-top: 20px; padding: 8px 15px; cursor: pointer;">گەڕانەوە</button>
        </div>
    `;
}

const removeInteractionListeners = () => {
    window.removeEventListener('click', handleFirstInteraction);
    window.removeEventListener('touchstart', handleFirstInteraction); // بۆ مۆبایل زۆر گرنگە
    window.removeEventListener('scroll', handleFirstInteraction);
};

// گوێگرتن بۆ یەکەم جوڵەی بەکارهێنەر
window.addEventListener('click', handleFirstInteraction);
window.addEventListener('touchstart', handleFirstInteraction); // گرنگترینە بۆ مۆبایل
window.addEventListener('scroll', handleFirstInteraction);
// ٥. زیادکردنی ئەنیمەیشنی fadeIn بۆ CSS لە ڕێگەی JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn { 
        from { opacity: 0; transform: translateY(10px); } 
        to { opacity: 1; transform: translateY(0); } 
    }
`;
document.head.appendChild(style);
// ئەمە زیاد بکە بۆ کۆتایی فایلەکە
function openPDF(fileName) {
    const mainArea = document.getElementById('main-area');
    if (!mainArea) return;

    mainArea.innerHTML = `
        <div style="animation: fadeIn 0.6s ease; height: 100%;">
            <div style="display: flex; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; margin-bottom: 10px;">
                <h3 style="color: #27ae60;">📖 قورئانی پیرۆز</h3>
                <button onclick="location.reload()" style="background: #e74c3c; color: white; border: none; padding: 5px 15px; cursor: pointer; border-radius: 4px;">داخستن</button>
            </div>
            <iframe src="${fileName}" width="100%" height="600px" style="border: none; border-radius: 8px;"></iframe>
        </div>
    `;
}