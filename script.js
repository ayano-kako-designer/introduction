// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // メニューリンクの取得
    const menuLinks = document.querySelectorAll('.side-menu a');
    const sections = document.querySelectorAll('.content-section');

    // メニュークリック時の処理
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 全てのメニューリンクからactiveクラスを削除
            menuLinks.forEach(l => l.classList.remove('active'));
            
            // クリックされたリンクにactiveクラスを追加
            this.classList.add('active');

            // 全てのセクションを非表示
            sections.forEach(section => section.classList.remove('active'));

            // 対応するセクションを表示
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // スムーズスクロール
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初期表示：最初のメニュー項目をアクティブに
    if (menuLinks.length > 0) {
        menuLinks[0].classList.add('active');
    }

    // タイムラインアイテムのアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // タイムラインアイテムにオブザーバーを適用
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // スキルカテゴリーにもアニメーションを適用
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'all 0.6s ease';
        observer.observe(category);
    });
});

// スムーズスクロール機能
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}
