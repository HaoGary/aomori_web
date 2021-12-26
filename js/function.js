window.onload = function () {

    // menu
    const navSlide = function () {
        const burger_btn = document.querySelector('.humburger');
        const menu = document.querySelector('.menu');
        const switchEffect = document.querySelector('.switchEffect');
        // 點擊 humburger 彈出menu內容
        burger_btn.addEventListener('click', function () {
            menu.classList.toggle('menu_active');
        });
    }
    navSlide();

    var navigationOpenFlag = false;
    var navButtonFlag = true;
    var focusFlag = false;

    $(function () {
        $(document).on('click', '.humburger', function () {
            if (navButtonFlag) {
                spNavInOut.switch();
                setTimeout(function () {
                    navButtonFlag = true;
                }, 200);
                navButtonFlag = false;
            }
        });
    });

    // 2. open
    function spNavIn() {
        $('.switchEffect').removeClass('js_humburgerClose');
        $('.switchEffect').addClass('js_humburgerOpen');
        setTimeout(function () {
            focusFlag = true;
        }, 200);
        setTimeout(function () {
            navigationOpenFlag = true;
        }, 200);
    }
    // 3. close
    function spNavOut() {
        $('.switchEffect').removeClass('js_humburgerOpen');
        $('.switchEffect').addClass('js_humburgerClose');
        setTimeout(function () {
            focusFlag = false;
        }, 200);
        navigationOpenFlag = false;
    }
    // 4. 開關轉換
    var spNavInOut = {
        switch: function () {
            if ($('.switchEffect').hasClass('js_humburgerOpen')) {
                // 如果有打開 就關閉 
                spNavOut();
            } else {
                // 如果有關閉 就打開 
                spNavIn();
            }
        }
    };

    // pagetop 
    $(function () {
        var topBtn = $('#pagetop');
        topBtn.hide();
        $(window).scroll(function () {
            if ($(this).stop().scrollTop() > 200) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        topBtn.click(function () {
            $('body,html').stop().animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

};


