document.addEventListener('DOMContentLoaded', function () {

    /* ===== CTA LINK REWRITE =====
       All CTAs across the site redirect to haircheck page (new tab).
    */
    (function () {
        const ctaUrl = 'https://lp.elithair.com.tr/haircheck/';
        const selectors = [
            '.aw-header__cta',
            '.aw-hero__cta',
            '.aw-results__cta',
            '.aw-tech__cta',
            '.aw-cta',
            '.ek-faq__answer-cta'
        ].join(',');

        document.querySelectorAll(selectors).forEach(function (el) {
            if (el.tagName === 'A') {
                el.setAttribute('href', ctaUrl);
                el.setAttribute('target', '_blank');
                el.setAttribute('rel', 'noopener');
            } else {
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.open(ctaUrl, '_blank', 'noopener');
                });
            }
        });
    })();

    /* ===== HEADER SCROLL ===== */
    const header = document.querySelector('.aw-header');
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    if (window.pageYOffset > 60) {
                        header.classList.add('is-scrolled');
                    } else {
                        header.classList.remove('is-scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

});
