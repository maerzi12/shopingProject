;
(function(win) {
    var doc = win.document //返回doocument对象
    var docEl = doc.documentElement //返回是整个网页
    var _t;
    // console.log(doc)
    // console.log(docEl)

    function refreshRemFn() {
        //获得指定对象宽度
        var _width = docEl.getBoundingClientRect().width

        // console.log(_width)
        // console.log(height)

        if (_width > 640) {
            _width = 640
        }

        //我们设定1rem等于100px
        var _rem = _width / 6.4
        docEl.style.fontSize = _rem + 'px'
            // console.log('xxx')
    }

    //事件临时，当页面缩放的时候
    win.addEventListener('resize', function() {
        clearTimeout(_t)
        _t = setTimeout(refreshRemFn, 3000)

    }, false)

    //页面一打开就运行
    refreshRemFn()
})(window)