
# Easing

---

[![Build Status](https://secure.travis-ci.org/aralejs/easing.png)](https://travis-ci.org/aralejs/easing)

Easing 是动画的平滑函数扩展包。由于 jQuery 自带的比较少，通过这个包可以增加更多平滑函数。

---

## 使用说明

直接 require 就行，默认会把平滑函数混入到 jQuery 中。

```js
require('easing');

$('#demo').animate({
        width: 'toggle',
        height: 'toggle'
    }, {
    duration: 5000,
    specialEasing: {
        width: 'linear',
        height: 'elasticBoth' // 直接使用扩展的平滑函数名就好
    },
    complete: function() {
        $(this).after('<div>Animation complete.</div>');
    }
});
```



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/aralejs/easing/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

