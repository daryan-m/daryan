function showAbout() {
    const mainArea = document.getElementById('main-area');
    if (!mainArea) return;

    mainArea.innerHTML = `
        <div style="animation: fadeIn 0.6s ease; text-align: right; padding: 20px; background: white; border-radius: 10px; border: 1px solid #3498db;">
            <h2 style="color: #3498db; border-bottom: 2px solid #3498db; display: inline-block; margin-bottom: 20px;">دەربارەی کتێبخانەی داریان</h2>
            
            <p style="font-size: 18px; line-height: 2; color: #333; margin-bottom: 15px;">
                بەخێربێیت بۆ کتێبخانەی داریان. ئەم پڕۆژەیە هەوڵێکی تاکەکەسییە بۆ کۆکردنەوە و ئاسانکاری دەستڕاگەیشتن بە کتێبە کوردییەکان و سەرچاوە ئایینی و زانستییەکان.
            </p>

            <ul style="list-style: none; padding-right: 0; font-size: 16px; color: #555;">
                <li style="margin-bottom: 10px;">✅ خوێندنەوەی ڕاستەوخۆی PDF</li>
                <li style="margin-bottom: 10px;">✅ گوێگرتن لە تلاوەت و دەنگەکان</li>
                <li style="margin-bottom: 10px;">✅ داونلۆدکردنی کتێبەکان بەخۆڕایی</li>
            </ul>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
            
            <p style="font-size: 14px; color: #777;">
                دیزاین و گەشەپێدان: <strong>مەزهەر ڕەئوف</strong><br>
                بەرواری دروستکردن: ٢٠٢٦/١/٦
            </p>

            <button onclick="location.reload()" style="margin-top: 25px; padding: 10px 25px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">گەڕانەوە بۆ سەرەتا</button>
        </div>
    `;
    
    // سکرۆڵ بکات بۆ لای نووسینەکە
    window.scrollTo({top: 0, behavior: 'smooth'});
}
