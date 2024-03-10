var second = `${`<div class="second-container">
\
<div id="gotolinkbtn">
\
	<button class="btn bt-wait"><span class="fa fa-check"></span> PLEASE WAIT...</button>
\
</div>
\
<div class="sapnaitgk second">Powered by <a href="https://www.sapnaitgk.com/2022/11/download-timer-script-for-blogger-with.html">SapnaITGK</a></div>
\
</div>`}`;
document.write(second);
var waiting = waitleft * 1000;
var time = timeleft * 1000;

function radial_animate() {
    $('svg.radial-progress').each(function (_0x349dx5, _0x349dx6) {
        $(this).find($('circle.bar--animated')).removeAttr('style');
        var _0x349dx7 = $(this).offset().top;
        var _0x349dx8 = _0x349dx7 + $(this).outerHeight();
        var _0x349dx9 = $(window).scrollTop();
        var _0x349dxa = _0x349dx9 + $(window).height();
        if (_0x349dx8 > _0x349dx9 && _0x349dx7 < _0x349dxa) {
            var _0x349dxb = $(_0x349dx6).data('countervalue');
            var _0x349dxc = $(this).find($('circle.bar--animated')).attr('r');
            var _0x349dxd = 2 * Math.PI * _0x349dxc;
            var _0x349dxe = _0x349dxd - ((_0x349dxb * _0x349dxd) / 100);
            $(this).find($('circle.bar--animated')).animate({
                'stroke-dashoffset': _0x349dxe
            }, time)
        }
    })
}
var $window = $(window);

function check_if_in_view() {
    $('.countervalue').each(function () {
        if ($(this).hasClass('start')) {
            var _0x349dx7 = $(this).offset().top;
            var _0x349dx8 = _0x349dx7 + $(this).outerHeight();
            var _0x349dx9 = $(window).scrollTop();
            var _0x349dxa = _0x349dx9 + $(window).height();
            if (_0x349dx8 > _0x349dx9 && _0x349dx7 < _0x349dxa) {
                $(this).removeClass('start');
                $('.countervalue').text();
                var _0x349dx11 = $(this).text();
                if (_0x349dx11 == Math.floor(_0x349dx11)) {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: time,
                        easing: 'swing',
                        step: function (_0x349dx12) {
                            $(this).text(Math.ceil(_0x349dx12) + '%')
                        }
                    })
                } else {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: time,
                        easing: 'swing',
                        step: function (_0x349dx12) {
                            $(this).text(_0x349dx12.toFixed(2) + '$')
                        }
                    })
                };
                radial_animate()
            }
        }
    })
}
$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);
setTimeout(function () {
    document.querySelector('.safedownload').innerHTML = `${`<button onclick="gotolink()" class='getlink'>GET LINK</button>`}`
}, time);

function gotolink() {
    document.querySelector('.btn.bt-wait').style.display = 'initial';
    window.open('#gotolinkbtn', '_self');
    setTimeout(function () {
        document.querySelector('#gotolinkbtn').innerHTML = `${'<button class="btn bt-success" id="gotolink" onclick="down()"><span class="fa fa-right"></span> GO TO LINK</button>'}`
    }, waiting)
}

function down() {
    var _0x349dx15 = window.location;
    var _0x349dx16 = new URL(_0x349dx15);
    var _0x349dx17 = _0x349dx16.searchParams.get('o');
    var _0x349dx18 = atob(_0x349dx17);
    window.open(_0x349dx18, '_self')
}
