/**
 * #キャクモクルー LP - Main JavaScript
 * TikTok Style Design
 */

document.addEventListener('DOMContentLoaded', function() {
    initFloatingCTA();
    initSmoothScroll();
    initFAQAccordion();
    initScrollAnimations();
    initAOSAnimations();
    initStaggerAnimation();
    initSolutionTextAnimation();
    initFeatureCardsAnimation();
});

/**
 * Floating CTA Button - Show/Hide on scroll
 */
function initFloatingCTA() {
    const floatingCTA = document.querySelector('.floating-cta');
    const fvSection = document.querySelector('.fv-section');

    if (!floatingCTA || !fvSection) return;

    const heroHeight = fvSection.offsetHeight;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > heroHeight * 0.6) {
            floatingCTA.classList.add('visible');
        } else {
            floatingCTA.classList.remove('visible');
        }
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Scroll Animations - Fade in elements on scroll
 */
function initScrollAnimations() {
    const animatableSelectors = [
        '.achievement-card',
        '.problem-bubble',
        '.support-item',
        '.voice-card',
        '.reason-card',
        '.strength-item',
        '.pricing-card',
        '.flow-step',
        '.faq-item',
        '.section-header',
        '.solution-content',
        '.guarantee-content',
        '.stats-content',
        '.comparison-table-wrapper'
    ];

    const animatables = document.querySelectorAll(animatableSelectors.join(', '));

    animatables.forEach((el, index) => {
        el.classList.add('fade-in');
        // Stagger animation for grid items
        const gridItems = [
            'achievement-card', 'problem-bubble', 'support-item',
            'voice-card', 'reason-card', 'pricing-card', 'flow-step'
        ];

        gridItems.forEach(className => {
            if (el.classList.contains(className)) {
                el.style.transitionDelay = `${(index % 4) * 0.1}s`;
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Counter Animation for stats
 */
function animateCounter(element, targetNum, duration = 2000) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        const currentNum = Math.floor(targetNum * easeOutQuart);
        element.textContent = currentNum.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = targetNum.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}

/**
 * AOS Style Animations
 * シンプルなスクロールトリガーアニメーション
 */
function initAOSAnimations() {
    const aosElements = document.querySelectorAll('[data-aos]');

    if (aosElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    aosElements.forEach(el => {
        aosObserver.observe(el);
    });
}

/**
 * Stagger Animation (スクロール連動スタガーアニメーション)
 * - Intersection Observer API with 25% threshold
 * - One-time trigger only
 * - Stagger delay: 250ms between items
 */
function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('.stagger-container');

    if (staggerContainers.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const staggerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const items = container.querySelectorAll('.stagger-item');

                items.forEach(item => {
                    item.classList.add('stagger-visible');
                });

                // One-time trigger: unobserve after animation
                observer.unobserve(container);
            }
        });
    }, observerOptions);

    staggerContainers.forEach(container => {
        staggerObserver.observe(container);
    });
}

/**
 * Solution Text Animation (2段階テキストアニメーション)
 * Step 1: テキストスライドイン（下から上へ）
 * Step 2: カラー変化（黒→グラデーション、左から右へ）
 */
function initSolutionTextAnimation() {
    const solutionBadge = document.getElementById('solution-text-animation');

    if (!solutionBadge) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        solutionBadge.classList.add('animate-step1', 'animate-step2');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const solutionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Step 1: Text slide-in animation
                solutionBadge.classList.add('animate-step1');

                // Step 2: Color reveal after Step 1 completes
                // Wait for first word animation to complete, then start color change
                const step2Delay = 600; // Start color change quickly after slide-in begins

                setTimeout(() => {
                    solutionBadge.classList.add('animate-step2');
                }, step2Delay);

                // One-time trigger: unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    solutionObserver.observe(solutionBadge);
}

/**
 * Feature Blocks Animation (UNITEスタイル)
 * スクロールで特徴ブロックがフェードイン
 */
function initFeatureCardsAnimation() {
    const featureBlocks = document.querySelectorAll('.feature-block');

    if (featureBlocks.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        featureBlocks.forEach(block => block.classList.add('visible'));
        return;
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const blockObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    featureBlocks.forEach(block => {
        blockObserver.observe(block);
    });
}


