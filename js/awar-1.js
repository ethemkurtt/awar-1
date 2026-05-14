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
            '.aw-solution__cta-btn',
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

    /* ===== HERO BADGE MOBILE/DESKTOP MOVE =====
       On mobile, move .aw-hero__badge inside .aw-hero__media so it can be
       absolutely positioned at top-left of the image. Restore on desktop.
    */
    (function () {
        const badge = document.querySelector('.aw-hero__badge');
        const media = document.querySelector('.aw-hero__media');
        const left  = document.querySelector('.aw-hero__left');
        if (!badge || !media || !left) return;

        const titleInLeft = left.querySelector('.aw-hero__title');
        const originalParent = left;
        const originalNextSibling = titleInLeft;

        function apply() {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
                if (badge.parentElement !== media) {
                    media.insertBefore(badge, media.firstChild);
                }
            } else {
                if (badge.parentElement !== originalParent) {
                    originalParent.insertBefore(badge, originalNextSibling);
                }
            }
        }

        apply();
        window.addEventListener('resize', apply);
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
