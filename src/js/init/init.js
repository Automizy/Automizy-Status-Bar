define([], function () {
    function hasFont(className, fontFamily){
        var span = document.createElement('span');
        span.className = className;
        span.style.display = 'none';
        document.body.insertBefore(span, document.body.firstChild);
        if (window.getComputedStyle(span, null).getPropertyValue('font-family') === fontFamily) {
            document.body.removeChild(span);
            return true;
        }
        document.body.removeChild(span);
        return false;
    }
    window.AutomizyStatusBar = window.$ASB = new AutomizyProject({
        variables:{
            groups:{},
            processes:{}
        },
        plugins:[
            {
                name:'fontAwesome',
                skipCondition:hasFont('fa', 'FontAwesome'),
                css:"vendor/fontawesome/css/font-awesome.min.css"
            },
            {
                name:'automizyJs',
                skipCondition:typeof AutomizyJs !== 'undefined',
                css:"vendor/automizy-js/automizy.css",
                js:[
                    "vendor/automizy-js/languages/en_US.js",
                    "vendor/automizy-js/automizy.js"
                ],
                complete:function(){
                    $A.setTranslate(window.I18N || {});
                }
            }
        ]
    });
    return $ASB;
});