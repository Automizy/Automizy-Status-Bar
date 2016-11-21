(function($){
var jQuery = $
var $A = {};
(function(){
    $A = new function () {
        var t = this;
        t.d = {
            version: '0.5.3',
            settings: {
                logTranslateMissings:true
            },
            uniques:[],
            defines: {},
            dialogs: {},
            buttons: {},
            inputs: {},
            forms:{},
            validators:{},
            feedbacks: {},
            hashes:[],
            elements:{
                $tmp:$('<div></div>'),
                $loading:$('<div class="automizy-loading" style="margin-top: 8px;"><div class="automizy-loading-in automizy-loading-in-1"></div><div class="automizy-loading-in automizy-loading-in-2"></div><div class="automizy-loading-in automizy-loading-in-3"></div></div>')
            }
        };
        t.m = {};
        t.mt = {};
        t.default = {};
        t.events = {};
        t.customEvents = {
            functions:{},
            on:{},
            off:{},
            one:{}
        };
    }();
    
    return $A;
})();

(function(){
    var u = function(t){
        return 'data:image/png;base64,'+t;
    };
    $A.images = {
        pageStepFirst:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJDSURBVHjadNMxT9tAFAfw/53PLuasCiEkVLaCRGQImZBYGHHgG7QfgClbWTpW6kQXmGBh6tilHwCHMiRCIAWJCDsnMnWhC6pVybGRc4lfh2IaUvqkG+7u/U7vTu9ARHhu3N3dvW40Grf9fp+N711cXLQvLy+/EREYEWE84jh2fN+Ph8MhTNOE53lSSpkCQBAER0qpbQBYWFg45c/her0eDwYDMMYAAIyxfBw/rGsxinu9nnNychJrrcE5h+M4+dbWlgEAYRgejOJyubzvuu7OYwVJkkzW6/VYaw3G2BPc6XQOOp1ObRwDAC+w7/uJ1hoA4DgObWxsCABQSu2FYVgDACLC8vLyYYEBQERRNNdsNm8LPDMz01tfX38phKCHsmsAYBgGXNfdH8UAwFut1vcsy8AYA2MMq6urr0zTpCiK5pRStTzPAQBTU1PpOAYAvra2NmvbNorE8/Pzn1mWGdPT0z/K5fIu53+eKYqiyevr68/jBzAiwv39veX7fpZlGYgIUkp4nmdYlpV3u9337XZ7twClUulLpVJ5+1gBANi23a9Wq5ZlWeCcI0kS+L4/HAwGbHFx8VOlUvlQgJubmzdBEBw9OQAAJiYmtOd5tmma4JwjTVMcHx/nWmtWKpU+rqys7BIRGGNQSm2HYXjweIXReOiHRGuNPM8hhMDm5qaUUqZKqb0gCN4VufPz881/WllKmVar1RdCCDDGIMTfZnVdd2dpaemwmBuG8Qv/+41RFM2enZ11n9trtVqNq6urr0SE3wMAAuVa1KqERzkAAAAASUVORK5CYII='),
        pageStepBack:u('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAE6SURBVHjafNIxSwMxFAfw/0tuVIS2dBCnTheuwWs7OTjc5ORncHFys4vrjU7tZJdufgXnKwg6FQuFXAOduiiUI+CgLkKfiym1XM32f/zyeOGFmBm7zng8fhFCfHU6ndNgFzLGDBeLRZuIQEQjUYbyPL+z1l4CwGq1AhF9izI0m82uiAgAoLXut1qtM9qc0SOfm81mXynVBYB1R2ttzyNmRhRFA48AINjuJKWEUqq/iQCAnHOHWZa9+kKtVvtIkmR/e3ZRqVTetNa3vuCc2zPGDLfh+jHz+fxmOp2uL4RheK+1vvBZpmkKAKhWq89BEPByuUyYGc65Y2Y+qtfrD3/g73yPQoiDoihOAKAoirbHVLZra23PGHPtc6PReCpdoVKqG0XRAACICFLKd/rv90wmk5EQ4jOO4/OfAQBCLov0TPxm+gAAAABJRU5ErkJggg=='),
        pageStepNext:u('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFQSURBVHjadNE7awJBEAfw/9xdINgIcl4TSSu3CxaG61JKqoBlunwA7fIFcuQDJJUWYpMuVZpAwCIHIa0c4mPFR21xPrBJuTep7tCoA1vM8NsZmAEzo9frvXe73R9mxqlnVqvVzmw2u91sNpdE5OTz+U8cCUNrnQUAIsJoNKoppRrHoNlqtdrMXFitVmUiQhRFnmma57Ztf+1B3/fhOM4HMxeWy2UZAKIourYsi23b/k4gMXP6q9/vv00mk7skL5VKj8Vi8ekAAsBgMHidTqf3WmsYhgEp5Yvrug8HEACCIPhdr9cZAGBmVCqVC+s/Go/Hz9vtNpNsQgjRzOVyiz2olGoMh8MaEQEAhBBNIUQdAIzdTkqpFEkpUwQAVtJJKVWL4zgdt4sAgMIw7Mzn85ukIIRoSinrBydk5rMkcV23fQylewzDMNBaZz3Pu8KJ+BsAZWypwkMxZMwAAAAASUVORK5CYII='),
        pageStepLast:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJBSURBVHjadJOxThtBEIb/Xe7wnQ8rlsukShHp7AMaHgAJ7KvyDKmSBpqkSngDKjpoQpMufRqMbZqTKMAIrMOsdKYFyUhYSGefs177JkW0ljHJSFuMZr9/fmlmQERotVo/m81mQESYf6enp9Hj4+Prf9WICMbV1dWvTqfzHgBs294vlUrbADAYDLKNRmMgpUS3273zfd/OZrO/MRd8MpnkddJut7eEEHs6H4/HICIopVCv14f9fn9pXoAREa6vr78LIT4SEQBgdXV113XdHaUUq9VqaZIkSNMUlmWhXC4/c8IBYHl5+VOxWDxkjIFzjjAMv0VR9NU0TfJ9n9u2Dc45pJSo1+vD4XC4+ExgVkS7aLVau51O57NhGFSpVBYsywIASClRq9WkFmEa0BGG4Y8oij6kaQoAWFlZ2XVdd0dKuRAEQdLr9RY558hkMlhfX3/1QgAATk5OBr1eL5umKTjn2NjYeFMoFO7jOF6qVquxZvL5/IjPw+12e//p6SlLRGCMwXXdw0KhcK+UYufn510NZzIZrK2tvTXm4Zubmy0Na/tKKdZoNMZxHHMAME0Tm5ubjuM4ydSBEGJPCLEFAIwxeJ534LruDgBomIhgmiYqlYrjOE4ynYIQYi8Mwy/aXqlUOtAbeXR0NJntPAsDgHF5eVm9vb31GWNT2PO87SRJrOPj46FS6u9Hw0C5XM7Nws/2AACKxeKh53nbAEBE05qGc7lc/8XIiAjNZjM4Ozu7mL+00WjEgiC4e3h4ePe/a/wzACBzbtGgtaC5AAAAAElFTkSuQmCC'),
        settingsIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFmSURBVHjajNNNS5VREAfw3328GBqBbYR2LQOLMFxIQUn0gqCBECVFme36AHE/g21cGNgicOOFQNxIKEWLQBSjKIpA+gBCiwpCoYsv2WYOHB7uAw0Mz/xn5j9nnjlnao1GQ4VcQTPsd7jRLqnI7DruZ74+9IaeiThcxIWcBEcxg0mMYxMPs+In8RJf8Qj7GMFqKjARZBgOLcv10CRzOJfabWLV/8s+HmM7FfiNz6WkddzBVTxBK4vtxoGHdVzCKdzNEtbiFhLpDT5hHh3oxlPMFjGcZzieFZgqnQgv8CXDt7FcVPzj9wr/jxKuFfiArVLgWhtyD05neA/vC1zG2RhakgZGM9yL5zgR+CBmNlTHIX7iI85HwjEsYQO/0J+R0y28TbcgurjXpu3Bill0xct9kIZ4BJ1ZQquC2CrtTi0VWMEYvuFmLM/rUsu3wr+ExdiZP/Us6RUGsBN4OrCYz0LYY/H9C/8GALRlSDMw0h2ZAAAAAElFTkSuQmCC'),
        searchIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATRJREFUeNqU0j8oRWEYx/GDO1yL5M/AQGQ0ECKjweBfJisZDNY7HDJcZgu7RSJlUK7BLGVAMigZbwaFRZKB+D71O3V68t7DU59O5/Y+v/Pe932q4jiOAtWGRYyhE++4xjb2kkXVgeYJXMLS23GHF4xiF4eoDwUM4gANKKAL/ejGAE4wrZ3U5FyzvW8gjxkFJfWlXU3iGFO2xu+gD0MoueZ0fWpnFrjgA3r0PIoq1y3ubb0PyOv5GmXXG2p9QFnP3ozmOl1t2Qec4RGzaK4QMI9GOysf8IQLtGAfrb802+2say42/TUWNXlWI5q8HVxpcMblA3P2F3KueTX1XtKVFtxHTrGE82RwIjUWU4vW9FsThtGhU7/Rbr7Tk7ccaLZ6zpoJO8SVQPOfygK28KCgfzVb/QgwAM3kP0m2MqMIAAAAAElFTkSuQmCC'),
        exportIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqM080rRFEYx/EzzKBYyILhP6C8pyg2s7CZZuUlSqRsxe4u8QfYWsjCRkrZTanZTVZWhqRkR8yGlJG88z31nDpOD92nPp37cs7vnnvPuYkoiuqNMU1Gr0+8ooA7jKPid0jKzR7UKQG3mECX9N3BGN79gF5U4UwJuMEjXtCAHLYw5wfYwSUMKgGtGEaNd20WD1g2MlirWqzjFHtBgK0lrLgZhJXANqbM/7WKZ20GuRiDXXVqAYsxB+9jIQxow5Ac26XKY8NfNqkDTOMtDGiH3VjHGJHXWcOH16cos2zWVqED5xjFkVxr9D72CeaxiW4t4B4zsm1dVWQjXSOLSWTw5C/jt7S73rGrMgZkR5blO/36F9xMUvj6Y3NdSJsKbyTliX3y7nGqRdpqF3CIfqRjBtgVucSVPfkRYACsvD1a/WEjxQAAAABJRU5ErkJggg=='),
        helpIcon:u('iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHySURBVHjahJRNSFRRFMd/b3gLF8UEUVT0ta6IqUUmWItsnEqGh0VfIElFCYHlB0RimUzQRJg1RQuLDGkhESLj9PKjdGFBuQh1U5ts08qCAjGIFue0uU+G63v2h7O45/z4v3fvOfc6qoqtB6N1CaAK2AHEgTlgGvDrK7o+2rxTbHJ/9PwmoAM4AjiEKw80X6x4NLPIJPfmXAIoAOv5v2YB79L+xxMLJvden90AfADWFYGTQDfwzRjXALuL6j+AsobkkxkXQFVylsE0sLex8ul8kLg7croL8IFKk1oFPAQOOHeGTm0HpqwzONaU6nnROVzbAtQBvU2pnpbO4dpy4K21tVKnY6jmGpCxCmeAL+aMgu6sADYDXy02GxOVnaKCFd2iMi4qcbPONKeeqagkQ9htrqrEl+iCAo2XD/bmbg+eTAA3Q5hlrojMLWEydqXqee6Wf3wtMAisDGF+u6oyBXgRJn+zL48eNtO7JoL55IpKHrgeASSBEjP+UcrHWtN9k4r4ihAS2dZ03z5FTkTUxxR5HzPDVq8q31UFK7bcGPA2qsqukNovVblwNd2vC3cnk0+XAgPAaut3/5gtFesnUN3mFcYBYkG2zStMqEq5qvjWF0us9Yiq7AkMFj0Fgdr7D5WZjmwFlgPzwGfAb69+9c7m/w0A36Atg3n1+QkAAAAASUVORK5CYII='),
        helpArrow:u('iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAC3SURBVHjanNRNCoMwEIbht5KFAbt00UN4CumpxVN4CIWsY10lXVVIY37GWQYeBiYz38N7T6nMOv0/+QZ5DUoppHAA5rbVIjgAc9c9e63rYYCAMjTrFKEiTKEszKEkLKFLWIMiWIsCKEEnlCKA5g76ddyAzTknWtqmf70NMO67Xay1oo7cwedUpTj4RwmONqcWX+5qDU5eRwln7zGHiwmQwrWZE2FJygVYmqsGGI/jw50kN845vgMAISKSwdQyAJUAAAAASUVORK5CYII=')
    };
})();

(function(){
    $.fn.removeAttributes = function () {
        return this.each(function () {
            var attributes = $.map(this.attributes, function (item) {
                return item.name;
            });
            var img = $(this);
            $.each(attributes, function (i, item) {
                img.removeAttr(item);
            });
        });
    };
    $.fn.getAttributes = function () {
        var obj = {};
        $.each(this[0].attributes, function () {
            if (this.specified) {
                obj[this.name] = this.value;
            }
        });
        return obj;
    };
    $.fn.removeClassPrefix = function (prefix) {
        this.each(function (i, el) {
            var classes = el.className.split(" ").filter(function (c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };
    $.fn.ashow = function () {
        this.removeClass('automizy-hide');
        return this;
    };
    $.fn.ahide = function () {
        this.addClass('automizy-hide');
        return this;
    };
    $.fn.serializeObject = function(addUnchecked){
        var result = {};
        var addUnchecked = addUnchecked || false;
        var extend = function (i, e) {
            var n = result[e.name];
            if (typeof n !== 'undefined' && n !== null) {
                if ($.isArray(n)) {
                    n.push(e.value);
                } else {
                    result[e.name] = [n, e.value];
                }
            } else {
                result[e.name] = e.value;
            }
        };

        values = this.serializeArray();
        if(addUnchecked){
            values = values.concat(
                this.find('input[type=checkbox]:not(:checked)').map(
                    function() {
                        return {name:this.name, value:"off"}
                    }).get()
            );
        }

        $.each(values, extend);
        return result;
    };
    var restrict = function(t){
        var v = false;
        var min = Number.NEGATIVE_INFINITY;
        var max = Number.POSITIVE_INFINITY;
        if(typeof t.value !== 'undefined'){
            v = parseFloat(t.value);
        }else{
            return false;
        }
        if(typeof t.min !== 'undefined' && t.min.toString().length > 0){
            min = parseFloat(t.min);
        }
        if(typeof t.max !== 'undefined' && t.max.toString().length > 0){
            max = parseFloat(t.max);
        }
        if (v >= min && v <= max){
            t.value = v;
        }else{
            t.value = v < min ? min : max;
        }
    };
    var restricted = false;
    $.fn.pbmInput = function () {
        return this.each(function(){
            if (this.type && 'number' === this.type.toLowerCase()) {
                $(this).on('change', function(){
                    if(!restricted){
                        restricted = true;
                        restrict(this);
                        $(this).trigger('change');
                        return false;
                    }else{
                        setTimeout(function(){restricted = false}, 10);
                    }
                }).bind('mousewheel DOMMouseScroll', function(event){
                    event.preventDefault();
                    event.stopPropagation();
                    var t = this,
                        v = parseFloat(t.value);
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                        t.value = v + 1;
                    }else{
                        t.value = v - 1;
                    }
                    $(this).trigger('change');
                    return false;
                });
            }
        });
    };
    $.fn.disableScroll = function () {
        return this.each(function(){
            if (window.addEventListener) // older FF
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            this.onwheel = preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
            window.ontouchmove  = preventDefault; // mobile
            document.onkeydown  = preventDefaultForScrollKeys;
        });
    };
})();

(function(){
    $A.registerLocalEvents = function(obj, eventNames){
        if (typeof obj.functions === 'undefined') {
            obj.functions = {};
        }
        if (typeof obj.on === 'undefined') {
            obj.on = {};
        }
        if (typeof obj.off === 'undefined') {
            obj.off = {};
        }
        if (typeof obj.one === 'undefined') {
            obj.one = {};
        }
        var eventNames = eventNames || [];
        for(var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            (function(eventName) {
                if ($.inArray(eventName, ["function", "on", "off", "one"]) >= 0) {
                    console.error('Invalid event name! Do not use "function", "on", "off", "one"');
                    return false;
                }
                if (typeof obj.functions[eventName] === 'undefined') {
                    obj.functions[eventName] = {};
                }
                obj[eventName] = obj.on[eventName] = function (func, name) {
                    if (typeof func === 'function') {
                        obj.functions[eventName][name || $A.getUniqueString()] = {
                            func: func,
                            life: -1
                        };
                    }
                };
                obj.off[eventName] = function (name) {
                    delete obj.functions[eventName][name];
                };
                obj.one[eventName] = function (func) {
                    obj.functions[eventName][$A.getUniqueString()] = {
                        func: func,
                        life: 1
                    };
                };
            })(eventName);
        }
    };
})();

(function(){
    $A.initBasicFunctions = function (module, moduleName, moduleEvents) {
        var module = module || false;
        if (module === false) {
            return false;
        }
        var moduleName = moduleName || false;
        if (moduleName === false) {
            return false;
        }
        var moduleEvents = moduleEvents || [];

        var moduleNameLower = moduleName.toLowerCase();
        var moduleNameLowerFirst = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);

        var p = module.prototype;
        p.init = p.init || function () {
                var t = this;
                if (typeof t.d.permission === 'undefined') {
                    t.d.permission = true;
                }
                if (typeof t.d.create === 'undefined') {
                    t.d.create = function () {};
                }
                if (typeof t.d.createFunctions === 'undefined') {
                    t.d.createFunctions = [];
                }
                if (typeof t.d.remove === 'undefined') {
                    t.d.remove = function () {};
                }
                if (typeof t.d.showFunction === 'undefined') {
                    t.d.showFunction = function () {};
                }
                if (typeof t.d.hideFunction === 'undefined') {
                    t.d.hideFunction = function () {};
                }
                if (typeof t.d.returnValue === 'undefined') {
                    t.d.returnValue = true;
                }

                for (var i in t.d) {
                    if (typeof $A.default[moduleNameLowerFirst][i] !== 'undefined') {
                        if ($A.default[moduleNameLowerFirst][i] instanceof jQuery) {
                            $A.default[moduleNameLowerFirst][i] = $A.default[moduleNameLowerFirst][i].clone();
                        }
                        t.d[i] = $A.default[moduleNameLowerFirst][i];
                    }
                }
            };
        p.initParameter = p.initParameter || function (obj) {
                var t = this;
                if (typeof obj.id === 'string' || typeof obj.id === 'number') {
                    t.id(obj.id);
                }
                if (typeof obj.create === 'function') {
                    t.create(obj.create);
                }
                if (typeof obj.remove === 'function') {
                    t.remove(obj.remove);
                }
                if (typeof obj.buttons === 'array' || typeof obj.buttons === 'object') {
                    t.buttons(obj.buttons);
                }
                if (typeof obj.target !== 'undefined') {
                    t.drawTo(obj.target);
                }
                if (typeof obj.data !== 'undefined') {
                    t.data(obj.data);
                }
                if (typeof obj.skin !== 'undefined') {
                    t.skin(obj.skin);
                }
                if (typeof obj.permission !== 'undefined') {
                    t.permission(obj.permission);
                }
            };
        p.create = p.create || function (func) {
                var t = this;
                if (typeof func === 'function') {
                    t.d.create = func;
                } else {
                    if(!t.permission()){
                        return t;
                    }
                    return t.d.create.apply(t, [t, t.d.$widget]);
                }
                return t;
            };
        p.widget = p.widget || function () {
                return this.d.$widget;
            };
        p.skin = p.skin || function (skin) {
                if (typeof skin !== 'undefined') {
                    this.d.skin = skin;
                    this.d.$widget.removeClassPrefix('automizy-skin-');
                    this.d.$widget.addClass('automizy-skin-' + skin);
                    return this;
                }
                return this.d.skin;
            };


        p.drawAfter = p.insertAfter = p.drawAfter || function($target){
                var t = this;
                var $target = $target || $('body');
                return p.drawTo($target, 'after');
            };

        p.drawBefore = p.insertBefore = p.drawBefore || function($target){
                var t = this;
                var $target = $target || $('body');
                return p.drawTo($target, 'before');
            };

        p.drawTo = p.appendTo = p.drawTo || function ($target, where) {
                var t = this;
                var $target = $target || $('body');
                var where = where || 'in';
                var $elem = t.d.$widget;
                if(where === 'after'){
                    $elem.insertAfter($target);
                }else if(where === 'before'){
                    $elem.insertBefore($target);
                }else{
                    $elem.appendTo($target);
                }
                t.d.hasObject = true;
                if(!t.permission()){
                    return t;
                }
                setTimeout(function () {
                    for (var i = 0; i < t.d.createFunctions.length; i++) {
                        t.d.createFunctions[i]();
                    }
                    t.create();
                    $A.runFunctions($A.events[moduleNameLower].functions.complete, t, [t]);
                }, 50);
                return t;
            };
        p.draw = p.drawTo || p.appendTo;

        p.show = p.show || function (func) {
                var t = this;
                if (typeof func === 'function') {
                    t.d.showFunction = func;
                    return t;
                }
                if (!t.d.hasObject) {
                    t.draw();
                }
                t.d.$widget.ashow();
                t.d.showFunction.apply(t, [t, t.d.$widget]);
                return t;
            };
        p.hide = p.hide || function (func) {
                var t = this;
                if (typeof func === 'function') {
                    t.d.hideFunction = func;
                    return t;
                }
                $A.setWindowScroll(true, t.id());
                if (typeof t.d.close === 'function') {
                    t.d.close(t, t.d.$widget);
                }
                if (typeof t.hash === 'function' && t.hash() !== false) {
                    $A.hashChange(t.hash(), false);
                }
                t.d.$widget.ahide();
                t.d.hideFunction.apply(t, [t, t.d.$widget]);
                return t;
            };
        p.remove = p.remove || function (func) {
                var t = this;
                if (typeof func === 'function') {
                    t.d.remove = func;
                    return t;
                }
                if (!t.d.hasObject) {
                    t.d.$widget.appendTo($('body:first'));
                }
                if (typeof t.d.removeAnimation === 'function') {
                    t.d.removeAnimation.apply(t, [t, t.d.$widget]);
                } else {
                    var parent = t.d.$widget[0].parentElement;
                    if (typeof parent !== 'undefined' && parent !== null && typeof parent.removeChild === 'function') {
                        parent.removeChild(t.d.$widget[0]);
                    }
                }
                $A.setWindowScroll(true, t.id());
                delete $A.d[moduleNameLower + "s"][t.id()];
                t.d.remove.apply(t, [t, t.d.$widget]);
                return true;
            };
        p.id = p.id || function (id) {
                var t = this;
                if (typeof id === 'number' || typeof id === 'string') {
                    if ($A.setWindowScroll(true, t.d.id)) {
                        $A.setWindowScroll(false, id);
                    }
                    $A.d[moduleNameLower + "s"].renameProperty(t.d.id, id);
                    t.d.$widget.attr('id', id);
                    t.d.id = id;
                    return t;
                }
                if (typeof t.d.id === 'undefined') {
                    t.d.id = t.widget().attr('id') || 'automizy-' + moduleNameLower + '-' + $A.getUniqueString();
                    t.id(t.d.id);
                }
                return t.d.id;
            };
        p.data = p.data || function (data, value) {
                var t = this;
                if (typeof t.d.data === 'undefined') {
                    t.d.data = {};
                }
                t.d.$widget[0].automizyData = {};
                if (typeof data === 'undefined') {
                    return t.d.data;
                }
                if (typeof data === 'array' || typeof data === 'object') {
                    for (var i in data) {
                        t.d.data[i] = data[i];
                        t.d.$widget[0].automizyData[i] = data[i];
                    }
                    return t;
                }
                if (typeof value === 'undefined') {
                    return t.d.data[data];
                }

                t.d.data[data] = value;
                t.d.$widget[0].automizyData[data] = value;
                return t;
            };

        p.addButton = p.addButton || function (obj) {
                var t = this;
                if (typeof t.d.buttons === 'undefined') {
                    return t;
                }
                if (typeof obj !== 'undefined') {
                    if (obj instanceof $A.m.Button || obj instanceof $A.m.Input) {
                        obj.drawTo(t.d.$buttons || t.d.$widget);
                    } else {
                        obj.target = obj.target || t.d.$buttons || t.d.$widget;
                        var button = $A.newButton(obj);
                        t.d.buttons.push(button);
                    }
                    t.d.$widget.addClass('has-button');
                    return t;
                }
                var button = $A.newButton();
                t.d.buttons.push(button);
                button.drawTo(t.d.$buttons || t.d.$widget);
                return button;
            };
        p.removeButton = p.removeButton || function (button) {
                var t = this;
                if (typeof t.d.buttons === 'undefined') {
                    return t;
                }
                if (typeof button === 'string') {
                    for (var i = 0; i < t.d.buttons.length; i++) {
                        if (t.d.buttons[i].id === button) {
                            t.d.buttons[i].remove();
                        }
                    }
                } else if (typeof button === 'object') {
                    button.remove();
                }
                return t;
            };
        p.buttons = p.buttons || function (buttons) {
                var t = this;
                if (typeof t.d.buttons === 'undefined') {
                    t.d.buttons = [];
                }
                if (typeof buttons !== 'undefined') {
                    for (var i = 0; i < t.d.buttons.length; i++) {
                        t.d.buttons[i].remove();
                    }
                    for (var i in buttons) {
                        t.addButton(buttons[i]);
                    }
                    return t;
                }
                return t.d.buttons;
            };
        p.returnValue = function (value) {
            var t = this;
            if (typeof value !== 'undefined') {
                t.d.returnValue = value;
                return t;
            }
            return t.d.returnValue;
        };


        p.addFunction = function (functionName, func, name, life) {
            var t = this;
            if (typeof t.f[functionName] === 'undefined') {
                t.f[functionName] = {};
            }
            t.f[functionName][name || $A.getUniqueString()] = {
                func: func,
                life: (typeof life !== 'undefined') ? life : -1
            };
        };
        p.runFunctions = function (functionName, thisParameter, parameters) {
            var t = this;
            return [
                $A.runFunctions(t.f[functionName], thisParameter || t, parameters || [t, t.d.$widget]),
                $A.runFunctions($A.events[moduleNameLower].functions[functionName], thisParameter || t, parameters || [t, t.d.$widget])
            ];
        };
        p.on = function (events, func, name) {
            var t = this;
            var events = events || [];
            if (typeof events === 'string') {
                events = events.split(' ');
            }
            for (var i = 0; i < events.length; i++) {
                t[events[i]].apply(t, [func, name || $A.getUniqueString(), -1]);
            }
            return t;
        };
        p.one = function (events, func) {
            var t = this;
            var events = events || [];
            if (typeof events === 'string') {
                events = events.split(' ');
            }
            for (var i = 0; i < events.length; i++) {
                t[events[i]].apply(t, [func, $A.getUniqueString(), 1]);
            }
            return t;
        };
        p.off = function (events, name) {
            var t = this;
            var events = events || [];
            if (typeof events === 'string') {
                events = events.split(' ');
            }
            if (events.length <= 0) {
                for (var i in t.f) {
                    for (var j in t.f[i]) {
                        delete t.f[i][j];
                    }
                }
            } else {
                for (var i = 0; i < events.length; i++) {
                    if(typeof t.f !== 'undefined' && typeof t.f[events[i]] !== 'undefined' && typeof t.f[events[i]][name] !== 'undefined') {
                        delete t.f[events[i]][name];
                    }
                }
            }
            return t;
        };
        p.permission = function(value){
            var t = this;
            if (typeof value !== 'undefined') {
                var currentPermission = t.permission();
                t.d.permission = $A.parseBoolean(value);
                if(!t.d.permission && currentPermission){
                    t.widget().addClass('automizy-permission-trap');
                }else if(t.d.permission && !currentPermission){
                    t.widget().removeClass('automizy-permission-trap');
                }
                return t;
            }
            return t.d.permission;
        };


        $A.events[moduleNameLower] = {};
        //if ($.inArray('complete', moduleEvents) < 0) {
        if(moduleEvents.indexOf('complete') < 0){
            moduleEvents.push('complete');
        }
        $A.registerLocalEvents($A.events[moduleNameLower], moduleEvents);

        $A.m[moduleName] = module;
        $A.d[moduleNameLower + "s"] = {};
        $A.default[moduleNameLowerFirst] = $A.default[moduleNameLowerFirst] || {};
        $A["new" + moduleName] = function (obj) {
            var t = new module(obj);
            $A.d[moduleNameLower + "s"][t.id()] = t;
            return t;
        };
        $A["get" + moduleName] = function (id) {
            return $A.d[moduleNameLower + "s"][id];
        };
        $A["getAll" + moduleName] = function () {
            return $A.d[moduleNameLower + "s"];
        };
        $A["remove" + moduleName] = function (id) {
            var elem = $A["get" + moduleName](id) || {};
            if (typeof elem.remove !== 'undefined') {
                return elem.remove();
            }
            return true;
        };
        $A["removeAll" + moduleName] = function () {
            for (var i in $A["getAll" + moduleName]()) {
                $A["remove" + moduleName](i);
            }
            return true;
        };
        $A[moduleNameLowerFirst] = function (obj) {
            if (typeof obj === 'undefined') {
                return $A["new" + moduleName]();
            } else if (typeof obj === 'string' || typeof obj === 'number') {
                return $A["get" + moduleName](obj) || $A["new" + moduleName]().id(obj);
            } else {
                if (obj instanceof HTMLElement) {
                    obj = $(obj);
                }
                if (obj instanceof jQuery) {
                    return $A["get" + moduleName](obj.attr('id')) || $A["new" + moduleName](obj);
                }
            }
            return $A["new" + moduleName](obj);
        };
        /*
         if(typeof $A.events[moduleNameLower] === 'undefined'){
         $A.events[moduleNameLower] = {
         functions:[]
         };
         }

         $A.events[moduleNameLower] = $A.events[moduleNameLower] || {};
         $A.registerLocalEvents($A.events[moduleNameLower], ['complete']);
         */
    };
})();

(function(){
    var Button = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<span class="automizy-button"></span>'),
            $widgetButton: $('<a href="javascript:;"></a>'),
            text: 'My Button',
            skin: 'simple-white',
            float: 'none',
            width: '',
            hasObject: false,
            newRow: false,
            disabled: false,
            triggers:{
                click:0
            },
            create: function () {
            },
            id: 'automizy-button-' + $A.getUniqueString()
        };
        t.f = {};
        t.init();

        t.d.$widgetButton.appendTo(t.d.$widget);
        t.d.$widgetButton.text(t.d.text);
        t.d.$widget.addClass('automizy-skin-' + t.d.skin).attr('id', t.id());
        t.d.$widgetButton.click(function () {
            if (t.click().returnValue() === false) {
                return false;
            }
        });
        if (typeof obj !== 'undefined') {
            if (typeof obj.disabled !== 'undefined') {
                t.disabled(obj.disabled);
            }
            if (typeof obj.text !== 'undefined') {
                t.text(obj.text);
            }
            if (typeof obj.html !== 'undefined') {
                t.html(obj.html);
            }
            if (typeof obj.float !== 'undefined') {
                t.float(obj.float);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.click !== 'undefined') {
                t.click(obj.click);
            }
            if (typeof obj.newRow !== 'undefined') {
                t.newRow(obj.newRow);
            }
            if (typeof obj.thin !== 'undefined') {
                t.thin(obj.thin);
            }
            t.initParameter(obj);
        }
    };

    var p = Button.prototype;
    p.text = p.val = p.value = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widgetButton.text(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widgetButton.html(html);
            return t;
        }
        return t.d.html;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$widget.width(width);
            t.d.$widgetButton.width('100%');
            t.d.$widgetButton.css('width', '100%');
            return t;
        }
        return t.d.width;
    };
    p.disabled = function (disabled) {
        var t = this;
        if (typeof disabled !== 'undefined') {
            t.d.disabled = $A.parseBoolean(disabled);
            t.d.$widgetButton.prop('disabled', t.d.disabled);
            t.d.$widget.toggleClass('disabled', t.d.disabled);
            return t;
        }
        return t.d.disabled;
    };
    p.disable = function () {
        return this.disabled(true);
    };
    p.enable = function () {
        return this.disabled(false);
    };
    p.float = function (float) {
        var t = this;
        if (typeof float !== 'undefined') {
            t.d.float = float;
            t.d.$widget.css('float', float);
            return t;
        }
        return t.d.float;
    };
    p.newRow = function (newRow) {
        var t = this;
        if (typeof newRow !== 'undefined') {
            newRow = $A.parseBoolean(newRow);
            t.d.newRow = newRow;
            if (newRow) {
                t.d.$widget.addClass('new-row');
            } else {
                t.d.$widget.removeClass('new-row');
            }
            return t;
        }
        return t.d.newRow;
    };
    p.button = function () {
        var t = this;
        return t.d.$widgetButton;
    };

    p.click = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('click', func, name, life);
        } else {
            if(t.disabled()){
                return t;
            }
            var a = t.runFunctions('click');
            t.returnValue(!(a[0] === false || a[1] === false));
        }
        return t;
    };
    p.thin = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            value = $A.parseBoolean(value);
            if(!value){
                t.widget().removeClass('automizy-button-thin');
                return t;
            }
        }
        t.widget().addClass('automizy-button-thin');
        return t;
    };


    $A.initBasicFunctions(Button, "Button", ['click']);


})();

(function(){
    var i18n = function (obj) {
        var t = this;
        t.d = {
            language: 'en_US',
            file: '',
            hasFile: true,
            missingTranslates:[],
            translate: {
                'Upload': 'UpLoad'
            }
        };

        if (typeof obj !== 'undefined') {
            if (typeof obj.language !== 'undefined')
                t.language(obj.language);
            if (typeof obj.file !== 'undefined')
                t.file(obj.file);
            if (typeof obj.setTranslate !== 'undefined')
                t.setTranslate(obj.setTranslate);
        }
    };

    p = i18n.prototype;
    p.language = function (lang) {
        var t = this;
        if (typeof lang === 'string') {
            t.d.language = lang;
            return t;
        }
        return t.d.language;
    };
    p.file = function (file) {
        var t = this;
        if (typeof file === 'string') {
            t.d.file = file;
            $.getScript(file).done(function (script, textStatus) {
                console.log('Automizy.i18n database rebuilt');
            }).fail(function (jqxhr, settings, exception) {
                console.warn('Automizy.i18n database rebuilding failed: ', exception);
            });
            return t;
        }
        return t.d.file;
    };
    p.setTranslate = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            t.d.translate = obj;
        }
        return t;
    };
    p.getTranslate = function () {
        return this.d.translate;
    };
    p.translate = function (text) {
        var t = this;
        if (typeof t.d.translate[text] === 'undefined') {
            if (1 === 2 && $A.d.settings.logTranslateMissings === true) {
                if($.inArray(text, t.d.missingTranslates) <= -1){
                    t.d.missingTranslates.push(text);
                    
                    function getErrorObject(){
                        try { throw Error('') } catch(err) { return err; }
                    }

                    var err = getErrorObject();
                    var callerLines = err.stack.split("\n");
                    var mainLine = callerLines[4];
                    for(var i = 0; i < callerLines.length; i++){
                        if(callerLines[i].substring(7, 19) === '$A.translate' || callerLines[i].substring(7, 16) === 'translate'){
                            mainLine = callerLines[i+1];
                        }
                    }
                    if(mainLine.slice(-1) === ')'){
                        var mainInfo = mainLine.substring(mainLine.indexOf('http'), mainLine.length-1);
                    }else{
                        var mainInfo = mainLine.substring(mainLine.indexOf('http'));
                    }
                    
                    console.warn('Missing translate: "' + text + '" - ' + mainInfo);
                }
            }
        } else {
            var text = t.d.translate[text];
        }
        for (var i = 1; i < arguments.length; i++) {
            text = text.replace("%s", arguments[i]);
        }
        return text;
    };
    p.noTranslate = function (text) {
        for (var i = 1; i < arguments.length; i++) {
            text = text.replace("%s", arguments[i]);
        }
        return text;
    };

    $A.m.i18n = i18n;
    $A.d.i18n = new $A.m.i18n();
    $A.translate = function(){
        return $A.d.i18n.translate.apply($A.d.i18n, arguments);
    };
    $A.noTranslate = function(){
        return $A.d.i18n.noTranslate.apply($A.d.i18n, arguments);
    };
    $A.setTranslate = function(){
        return $A.d.i18n.setTranslate.apply($A.d.i18n, arguments);
    };
    $A.getTranslate = function(){
        return $A.d.i18n.getTranslate.apply($A.d.i18n, []);
    };
})();

(function(){
    if(typeof Object.prototype.renameProperty === 'undefined') {
        Object.defineProperty(Object.prototype, "renameProperty", {
            value: function (oldName, newName) {
                if (this.hasOwnProperty(oldName)) {
                    this[newName] = this[oldName];
                    delete this[oldName];
                }
                return this;
            },
            enumerable: false
        });
    }
    if(typeof Array.prototype.remove === 'undefined') {
        Object.defineProperty(Array.prototype, "remove", {
            value: function (item) {
                var removeCounter = 0;

                for (var index = 0; index < this.length; index++) {
                    if (this[index] === item) {
                        this.splice(index, 1);
                        removeCounter++;
                        index--;
                    }
                }
                return removeCounter;
            },
            enumerable: false
        });
    }
})();

(function(){
    $A.d.lastWindowScroll = {top: 0, left: 0};
    $A.d.windowScrollIds = [];
    $A.d.hasScroll = [];
    $A.setWindowScroll = function (a, id) {
        if (typeof a === "undefined") {
            return $A.d.hasScroll;
        }
        var id = id || false;
        var ret = false;
        if (id !== false) {
            var index = $A.d.windowScrollIds.indexOf(id);
            var inArray = (index > -1);
            if (a === true) {
                if (inArray) {
                    $A.d.windowScrollIds.splice(index, 1);
                    ret = true;
                }
            } else {
                if (!inArray) {
                    $A.d.windowScrollIds.push(id);
                    ret = true;
                }
            }
        }else{
            if(a === true){
                $A.d.windowScrollIds = [];
                ret = true;
            }
        }
        if ($A.d.windowScrollIds.length > 0) {
            $A.d.hasScroll = false;
            $A.d.lastWindowScroll.top = $(window).scrollTop();
            $A.d.lastWindowScroll.left = $(window).scrollLeft();
                    return true;
        } else {
            $A.d.hasScroll = a;
            if (!a) {
                $A.d.lastWindowScroll.top = $(window).scrollTop();
                $A.d.lastWindowScroll.left = $(window).scrollLeft();
            }
        }
        return ret;
    };
    $(window).scroll(function () {
        if (!$A.d.hasScroll) {
            $(window).scrollTop($A.d.lastWindowScroll.top);
            $(window).scrollLeft($A.d.lastWindowScroll.left);
        }
    });
})();

(function(){
    function pad (str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
    var index = 0;
    $A.getUniqueString = function(){
        var str = pad(index, 8) + '-' + (Math.random() + 1).toString(36).substring(2);
        //if($.inArray(str, $A.d.uniques) >= 0){
        if( $A.d.uniques.indexOf(str) > -1 ){
            return $A.getUniqueString();
        }
        $A.d.uniques.push(str);
        index++;
        return str;
    }
})();

(function(){
    $A.runFunctions = function(functions, functionThis, functionParameters){
        var returnValue = true;
        if($.isArray(functions)) {
            for (var i = 0; i < functions.length; i++) {
                if (functions[i].apply(functionThis, functionParameters) === false) {
                    returnValue = false;
                }
            }
        }else{
            for (var i in functions) {
                if(functions[i].life !== 0) {
                    functions[i].life--;
                    if (functions[i].func.apply(functionThis, functionParameters) === false) {
                        returnValue = false;
                    }
                }
            }
        }
        return returnValue;
    }
})();

(function(){
    var Dialog = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<table cellpadding="0" cellspacing="0" border="0" class="automizy-dialog"></table>'),
            $cell: $('<td class="automizy-dialog-cell"></td>'),
            $box: $('<div class="automizy-dialog-box"></div>'),
            $head: $('<div class="automizy-dialog-head"></div>'),
            $close: $('<div class="automizy-dialog-close">&#10006;</div>'),
            $buttons: $('<div class="automizy-dialog-buttons"></div>'),
            $content: $('<div class="automizy-dialog-content"></div>'),
            buttons: [],
            positionX: 'center',
            positionY: 'middle',
            title: 'My Dialog',
            width: '60%',
            maxWidth: '100%',
            minWidth: '250px',
            minHeight: '0px',
            zIndex: 2501,
            isClose: true,
            hasObject: false,
            hash: false,
            openable: true,
            closable: true,
            buttonsBox: true,
            clickOutClose:false,
            id: 'automizy-dialog-' + $A.getUniqueString(),
            openFunctions: [],
            beforeOpenFunctions: [],
            closeFunctions: [],
            create: function () {
            }
        };
        t.f = {};
        t.init();

        var $tr = $('<tr></tr>');
        t.d.$cell.appendTo($tr);
        $tr.appendTo(t.d.$widget);
        t.d.$box.click(function () {
            t.d.isClose = false;
        }).appendTo(t.d.$cell);
        t.d.$widget.attr('id', t.id()).click(function () {
            if (t.d.isClose) {
                if(t.d.clickOutClose) {
                    t.close();
                }
            } else {
                t.d.isClose = true;
            }
        });
        t.d.$close.click(function () {
            t.close();
        });
        t.d.$close.appendTo(t.d.$box);
        t.d.$head.appendTo(t.d.$box);
        t.d.$content.appendTo(t.d.$box);
        t.d.$buttons.appendTo(t.d.$box);

        if (typeof obj !== 'undefined') {
            if (typeof obj.title !== 'undefined') {
                t.title(obj.title);
            }
            if (typeof obj.displayHeader !== 'undefined') {
                t.displayHeader(obj.displayHeader);
            }
            if (typeof obj.positionX !== 'undefined') {
                t.positionX(obj.positionX);
            }
            if (typeof obj.positionY !== 'undefined') {
                t.positionY(obj.positionY);
            }
            if (typeof obj.position !== 'undefined') {
                t.position(obj.position);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.maxWidth !== 'undefined') {
                t.maxWidth(obj.maxWidth);
            }
            if (typeof obj.minWidth !== 'undefined') {
                t.minWidth(obj.minWidth);
            }
            if (typeof obj.maxWidth !== 'undefined') {
                t.maxWidth(obj.maxWidth);
            }
            if (typeof obj.minHeight !== 'undefined') {
                t.minHeight(obj.minHeight);
            }
            if (typeof obj.zIndex !== 'undefined') {
                t.zIndex(obj.zIndex);
            }
            if (typeof obj.closable !== 'undefined') {
                t.closable(obj.closable);
            }
            if (typeof obj.buttonsBox !== 'undefined') {
                t.buttonsBox(obj.buttonsBox);
            }
            if (typeof obj.open === 'function') {
                t.open(obj.open);
            }
            if (typeof obj.beforeOpen === 'function') {
                t.beforeOpen(obj.beforeOpen);
            }
            if (typeof obj.close === 'function') {
                t.close(obj.close);
            }
            if (typeof obj.clickOutClose !== 'undefined') {
                t.clickOutClose(obj.clickOutClose);
            }
            if (typeof obj.content !== 'undefined') {
                t.content(obj.content);
            }
            if (typeof obj.hash !== 'undefined') {
                t.hash(obj.hash);
            }
            t.initParameter(obj);
        }
    };

    var p = Dialog.prototype;

    p.title = function (newTitle) {
        var t = this;
        if (typeof newTitle !== 'undefined') {
            t.d.title = newTitle;
            t.d.$head.html(newTitle);
            return t;
        }
        return t.d.title;
    };
    p.displayHeader = function (displayHeader) {
        var t = this;
        if (typeof displayHeader !== 'undefined') {
            t.d.displayHeader = $A.parseBoolean(displayHeader);
            if (t.d.displayHeader) {
                t.d.$head.hide();
            } else {
                t.d.$head.hide();
            }
            return t;
        }
        return t.d.displayHeader;
    };
    p.hash = function (hash) {
        var t = this;
        if (typeof hash !== 'undefined') {
            t.d.hash = hash;
            return t;
        }
        return t.d.hash;
    };
    p.buttonsBox = function (buttonsBox) {
        var t = this;
        if (typeof buttonsBox !== 'undefined') {
            t.d.buttonsBox = $A.parseBoolean(buttonsBox);
            if (!t.d.buttonsBox) {
                t.d.$buttons.hide();
            }
            return t;
        }
        return t.d.buttonsBox;
    };
    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            t.d.$content.empty();
            if (content instanceof jQuery) {
                content.appendTo(t.d.$content);
            } else if (typeof content === "object" && typeof content.draw === "function") {
                content.draw(t.d.$content);
            } else {
                t.d.$content.html(content);
            }
            return t;
        }
        return t.d.$content;
    };
    p.positionX = function (x) {
        var t = this;
        if (typeof x !== 'undefined') {
            $cell = t.d.$cell;
            if (x === 'left') {
                $cell.css({textAlign: 'left', textIndent: 0});
            } else if (x === 'right') {
                $cell.css({textAlign: 'right', textIndent: 0});
            } else if (x === 'center' || x === 'middle') {
                x = 'center';
                $cell.css({textAlign: 'center', textIndent: 0});
            } else {
                $cell.css({textAlign: 'left', textIndent: x});
            }
            t.d.positionX = x;
            return t;
        }
        return t.d.positionX;
    };
    p.positionY = function (y) {
        var t = this;
        if (typeof y !== 'undefined') {
            $cell = t.d.$cell;
            if (y === 'top') {
                $cell.css({verticalAlign: 'top', paddingTop: 0, paddingBottom: 0});
            } else if (y === 'bottom') {
                $cell.css({verticalAlign: 'bottom', paddingTop: 0, paddingBottom: 0});
            } else if (y === 'center' || y === 'middle') {
                y = 'middle';
                $cell.css({verticalAlign: 'middle', paddingTop: 0, paddingBottom: 0});
            } else {
                /*
                 if ($(t.d.$box).height()+parseInt(y)>$(window).height()){
                 $(t.d.$content).height($(t.d.$content).height()+($(window).height()-$(t.d.$box).height()-parseInt(y)));
                 }
                 */

                $cell.css({verticalAlign: 'top', paddingTop: y, paddingBottom: y});
            }
            t.d.positionY = y;
            t.setMaxHeight();
            return t;
        }
        return t.d.positionY;
    };
    p.position = function (xy) {
        var t = this;
        if (typeof xy === 'string') {
            var pos = xy.split(" ");
            t.positionX(pos[0]);
            t.positionY(pos[1]);
            t.d.positionX = pos[0];
            t.d.positionY = pos[1];
            t.setMaxHeight();
            return t;
        } else if (typeof xy !== 'undefined') {
            console.warn('Bad parameter type.', xy);
        }
        return t.d.positionX + ' ' + t.d.positionY;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$box.width(width);
            return t;
        }
        return t.d.width;
    };
    p.maxWidth = function (maxWidth) {
        var t = this;
        if (typeof maxWidth !== 'undefined') {
            t.d.maxWidth = maxWidth;
            t.d.$box.css('maxWidth', maxWidth);
            return t;
        }
        return t.d.maxWidth;
    };
    p.minWidth = function (minWidth) {
        var t = this;
        if (typeof minWidth !== 'undefined') {
            t.d.minWidth = minWidth;
            t.d.$box.css('minWidth', minWidth);
            return t;
        }
        return t.d.minWidth;
    };
    p.minHeight = function (minHeight) {
        var t = this;
        if (typeof minHeight !== 'undefined') {
            t.d.minHeight = minHeight;
            t.d.$box.css('min-height', minHeight);
            t.d.$content.css('min-height', parseInt(t.d.$box.css('min-height')) - 108 + 'px');
            t.setMaxHeight();
            return t;
        }
        return t.d.minHeight;
    };
    p.zIndex = function (zIndex) {
        var t = this;
        if (typeof zIndex !== 'undefined' && Number(zIndex) === zIndex && zIndex % 1 === 0) {
            t.d.zIndex = zIndex;
            t.d.$widget.css({zIndex: zIndex});
            return t;
        } else {
            console.warn('Bad parameter type.', zIndex);
        }
        return t.d.zIndex;
    };
    p.clickOutClose = function (clickOutClose) {
        var t = this;
        if (typeof clickOutClose !== 'undefined') {
            t.d.clickOutClose = $A.parseBoolean(clickOutClose);
            return t;
        }
        return t.d.clickOutClose;
    };
    p.setMaxHeight = function () {
        var t = this;
        var buttonBoxHeight = 0;
        if (t.buttonsBox()) {
            buttonBoxHeight = t.d.$buttons.outerHeight();
        }
        var maxHeight = $(window).height() - buttonBoxHeight - t.d.$head.outerHeight();
        if (!isNaN(parseInt(t.d.positionY))) {
            maxHeight -= parseInt(t.d.positionY);
        }
        t.d.$content.css({
            maxHeight: maxHeight
        });
        return maxHeight;
    };
    p.show = function (func) {
        var t = this;
        $A.setWindowScroll(false, this.d.id);
        if (!t.d.hasObject) {
            t.draw();
        }
        this.d.$widget.ashow();
        t.setMaxHeight();
        return this;
    };

    p.openable = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.openable = $A.parseBoolean(value);
        } else {
            return t.d.openable;
        }
        return t;
    };
    p.open = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction.apply(t, ['open', func, name, life]);
        } else {
            if (t.beforeOpen().returnValue() !== false) {
                if (t.hash() !== false) {
                    $A.hashChange(t.hash());
                }
                //t.widget().insertAfter($('.automizy-dialog').last());
                //var zIndex = parseInt($('.automizy-dialog').last().css('z-index')) + 1;
                var dialogs = $A.getAllDialog();
                var maxZIndex = 0;
                for(var i in dialogs){
                    var dialogZIndex = dialogs[i].zIndex();
                    if(dialogZIndex  > maxZIndex){
                        maxZIndex = dialogZIndex;
                    }
                }
                t.zIndex(maxZIndex+1);
                t.show();
                t.runFunctions('open');
            }
            $A.runFunctions($A.events.dialog.functions.open, this, [this, this.d.$widget]);
        }
        t.setMaxHeight();
        return t;
    };
    p.beforeOpen = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('beforeOpen', func, name, life);
        } else {
            var a = t.runFunctions('beforeOpen');
            t.returnValue(!(t.openable() === false || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.closable = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.closable = $A.parseBoolean(value);
            if (value) {
                t.d.$close.show();
            }
            else {
                t.d.$close.hide();
            }
        } else {
            return t.d.closable;
        }
        return t;
    };
    p.close = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('close', func, name, life);
        } else {
            if (t.beforeClose().returnValue() !== false) {
                t.hide();
                t.runFunctions('close');
            }
        }
        return t;
    };
    p.beforeClose = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('beforeClose', func, name, life);
        } else {
            var a = t.runFunctions('beforeClose');
            t.returnValue(!(t.closable() === false || a[0] === false || a[1] === false));
        }
        return t;
    };

    $A.initBasicFunctions(Dialog, "Dialog", ['open', 'close', 'beforeOpen', 'beforeClose']);

})();

(function(){
    $A.d.defines.input = {};

    $A.d.defines.input.setupSelectObj = {
        multiple: false,
        header: false,
        selectedList: 1,
        create: function (event, ui) {
            var $t = $(this);
            $t.removeAttr('multiple');
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });

            var box = $t.parent().find(".ui-multiselect");
            box.find(".ui-icon").removeClass("ui-icon-triangle-2-n-s");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
        },
        open: function (event, ui) {
            var ddbox = $(this).multiselect("widget");
            ddbox.width($(this).parent().find(".ui-multiselect").width() + 8);
            ddbox.find(".ui-corner-all").removeClass("ui-corner-all");
            if (ddbox.find(".ui-multiselect-checkboxes li:first").find("span").html().length <= 0) {
                ddbox.find(".ui-multiselect-checkboxes li:first").css({
                    "height": "0",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
            //$(this).multiselect("widget").find(".ui-multiselect-checkboxes").getNiceScroll().show();
        },
        close: function (event, ui) {
            //$(this).multiselect("widget").find(".ui-multiselect-checkboxes").getNiceScroll().hide();
        },
        click: function (event, ui) {
            //$(this).trigger('change');
        }
    };

    $A.d.defines.input.setupSelectListObj = {
        multiple: false,
        height: 150,
        header: false,
        selectedList: 1,
        create: function (event, ui) {
            var $t = $(this);
            $t.attr('multiple', 'multiple');
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });
            var box = $t.parent().find(".ui-multiselect");
            box.find(".ui-icon").removeClass("ui-icon-triangle-2-n-s");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
            $t.multiselect("open");
        },
        open: function (event, ui) {
            var box = $(this).parent().find(".ui-multiselect");
            var ddbox = $(this).multiselect("widget");
            ddbox.width($(this).parent().find(".ui-multiselect").width() + 8);
            ddbox.find(".ui-corner-all").removeClass("ui-corner-all");
            if (ddbox.find(".ui-multiselect-checkboxes li:first").find("span").html().length <= 0) {
                ddbox.find(".ui-multiselect-checkboxes li:first").css({
                    "height": "0",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
            ddbox.find(".ui-multiselect-checkboxes").css({
                backgroundColor: "#f7f8f0"
            })
            box.css({
                display: "none"
            });
            $(function () {
                ddbox.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    zIndex: 0
                }).appendTo(box.parent());
            });

        },
        beforeclose: function (event, ui) {
            return false;
        },
        click: function (event, ui) {
            $(this).trigger('change');
        }
    };

    $A.d.defines.input.setupSelectSearchCheckObj = {
        multiple: true,
        header: '',
        selectedList: 1,
        noneSelectedText: '',
        selectedText: '# selected',
        create: function (event, ui) {
            var $t = $(this);
            $t.attr('multiple', 'multiple');
            $t.multiselect("uncheckAll").multiselectfilter({label: "Filter: "});
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");

            var box = $t.parent().find(".ui-multiselect");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });
        },
        beforeopen: function () {
            var ddbox = $(this).multiselect("widget");
            var $h = ddbox.find('.ui-widget-header');
            ddbox.find(".ui-multiselect-filter").contents().filter(function () {
                return this.nodeType != 1;
            }).remove();
            if ($h.find('svg').length < 1) {
                $('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="float:right; margin:2px 4px 0 0"><g transform="scale(0.03)"><path fill="none" stroke="#999" stroke-width="36" stroke-linecap="round"d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/></g></svg>').appendTo($h);
            }
            $A.setWindowScroll(false, 'multiselect');
        },
        beforeclose: function () {
            $A.setWindowScroll(true, 'multiselect');
        }
    }
    
    $A.d.defines.input.upAndDownControl = {
        create: function (tp_inst, obj, unit, val, min, max, step) {
            $('<input class="ui-timepicker-input" value="' + val + '" maxlength="' + max.toString().length + '" style="width:50%">')
                    .appendTo(obj)
                    .jStepper({
                        minValue: min,
                        maxValue: max,
                        allowDecimals: false
                    })
                    .spinner({
                        min: min,
                        max: max,
                        step: step,
                        change: function (e, ui) {
                            if (e.originalEvent !== undefined)
                                tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        },
                        spin: function (e, ui) {
                            tp_inst.control.value(tp_inst, obj, unit, ui.value);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }
                    });
            return obj;
        },
        options: function (tp_inst, obj, unit, opts, val) {
            if (typeof (opts) == 'string' && val !== undefined)
                return obj.find('.ui-timepicker-input').spinner(opts, val);
            return obj.find('.ui-timepicker-input').spinner(opts);
        },
        value: function (tp_inst, obj, unit, val) {
            if (val !== undefined)
                return obj.find('.ui-timepicker-input').spinner('value', val);
            return obj.find('.ui-timepicker-input').spinner('value');
        },
        click: function (event, ui) {
            $(this).trigger('change');
        }
    };
})();

(function(){
    $A.parseBoolean = function (value, nullOnFailure) {
        if (typeof value === 'string')
            value = value.toLowerCase();
        switch (value) {
            case true:
            case 'true':
            case 1:
            case '1':
            case 'on':
            case 'yes':
            case 'y':
            case '✓':
            case '✔':
            case '☑':
            case '☒':
                value = true;
                break;
            case false:
            case 'false':
            case 0:
            case '0':
            case 'off':
            case 'no':
            case 'n':
            case 'x':
            case '✗':
            case '✘':
            case '☐':
                value = false;
                break;
            default:
                if (nullOnFailure) {
                    value = null;
                } else {
                    value = false;
                }
                break;
        }
        return value;
    };
})();

(function(){
    var Validator = function (obj) {
        var t = this;
        t.d = {
            email: false,
            domain: false,
            url: false,
            domainOrUrl: false,
            int: false,
            number: false,
            minLength: false,
            maxLength: false,
            min: false,
            max: false,
            file: false,
            sameas: false,
            isValid: true,
            notEmpty:false,
            validValues: [],
            errors: [],
            options: {},
            id: 'automizy-validator-' + $A.getUniqueString(),
            regular: {
                email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                domain: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                url: /^(((https?|ftp):\/\/)|(www\.))(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
            },
            input: false,
            value: ''
        };

        /*
         if (typeof obj !== "undefined") {
         if (typeof obj === "function" && obj instanceof Input) {
         t.d.input = obj;
         } else if (typeof obj === 'object') {
         if (typeof obj.input !== 'undefined') {
         if (obj.input instanceof Input) {
         t.d.input = obj.input;
         } else if (typeof obj.input === 'string') {
         t.d.input = $A.getInput(obj.input) || false;
         }
         }
         }
         if (t.d.input instanceof Input)
         t.d.value = t.d.input.val();
         }
         */

        if (typeof obj === 'object') {
            t.set(obj);
        }
    };

    var p = Validator.prototype;
    p.set = function (obj) {
        var t = this;
        if (typeof obj === 'string'){
            var os = obj;
            obj = {};
            obj[os] = true;
        }
        if (typeof obj.value !== 'undefined')
            t.d.value = obj.value;
        if (typeof obj.email !== 'undefined')
            t.d.options.email = $A.parseBoolean(obj.email);
        if (typeof obj.domain !== 'undefined')
            t.d.options.domain = $A.parseBoolean(obj.domain);
        if (typeof obj.url !== 'undefined')
            t.d.options.url = $A.parseBoolean(obj.url);
        if (typeof obj.domainOrUrl !== 'undefined')
            t.d.options.domainOrUrl = $A.parseBoolean(obj.domainOrUrl);
        if (typeof obj.int !== 'undefined')
            t.d.options.int = $A.parseBoolean(obj.int);
        if (typeof obj.number !== 'undefined')
            t.d.options.number = $A.parseBoolean(obj.number);
        if (typeof obj.minLength !== 'undefined')
            t.d.options.minLength = parseInt(obj.minLength);
        if (typeof obj.maxLength !== 'undefined')
            t.d.options.maxLength = parseInt(obj.maxLength);
        if (typeof obj.min !== 'undefined')
            t.d.options.min = parseInt(obj.min);
        if (typeof obj.max !== 'undefined')
            t.d.options.max = parseInt(obj.max);
        if (typeof obj.file !== 'undefined')
            t.d.options.file = $A.parseBoolean(obj.file);
        if (typeof obj.sameas !== 'undefined')
            t.d.options.sameas = obj.sameas;
        if (typeof obj.notEmpty !== 'undefined')
            t.d.options.notEmpty = obj.notEmpty;
        if (typeof obj.invalidValue !== 'undefined')
            t.d.options.invalidValue = obj.invalidValue;
        return t;
    };
    p.run = function (obj) {
        var t = this;
        if ((typeof obj === 'object' || typeof obj === 'array') && !$.isArray(obj)) {
            t.set(obj);
        }
        if (typeof obj === 'string' || typeof obj === 'number' || $.isArray(obj)) {
            t.value(obj);
        }
        t.d.errors = [];
        t.d.isValid = true;
        for (var i in t.d.options) {
            var a = t.d.options[i];
            if (i === 'email' && a === true)
                t.email(t.d.value);
            if (i === 'domain' && a === true)
                t.domain(t.d.value);
            if (i === 'url' && a === true)
                t.url(t.d.value);
            if (i === 'domainOrUrl' && a === true)
                t.domainOrUrl(t.d.value);
            if (i === 'int' && a === true)
                t.int(t.d.value);
            if (i === 'num' && a === true)
                t.num(t.d.value);
            if (i === 'minLength' && !isNaN(a))
                t.minLength(t.d.value, a);
            if (i === 'maxLength' && !isNaN(a))
                t.maxLength(t.d.value, a);
            if (i === 'min' && !isNaN(a))
                t.min(t.d.value, a);
            if (i === 'max' && !isNaN(a))
                t.max(t.d.value, a);
            if (i === 'file' && a === true)
                t.file(t.d.value);
            if (i === 'sameas' && typeof a !== 'undefined')
                t.sameas(t.d.value, a);
            if (i === 'notEmpty' && a === true)
                t.notEmpty(t.d.value);
            if (i === 'invalidValue')
                t.invalidValue(t.d.value, a);
        }
        return t;
    };
    p.execute = function (obj) {
        var t = this;
        if(typeof obj === 'undefined')var obj = false;
        if(obj === null)obj = [];
        t.run(obj);
        return t.d.isValid;
    };

    p.errors = function () {
        return this.d.errors;
    };

    p.value = p.val = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            return t;
        }
        return t.d.value;
    };

    p.email = function (value) {
        this.d.email = true;
        var a = this.d.regular.email.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid email address");
        }
        return a;
    };
    p.domain = function (value) {
        this.d.domain = true;
        var a = this.d.regular.domain.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid domain");
        }
        return a;
    };
    p.url = function (value) {
        this.d.url = true;
        var a = this.d.regular.url.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid URL");
        }
        return a;
    };
    p.domainOrUrl = function (value) {
        this.d.domainOrUrl = true;
        var a = this.d.regular.domain.test(value) || this.d.regular.url.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid domain or URL");
        }
        return a;
    };
    p.int = p.integer = function (value) {
        this.d.int = true;
        var a = (value == +value && value == (value | 0));
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Not an integer");
        }
        return a;
    };
    p.num = p.number = function (value) {
        this.d.number = true;
        var a = !isNaN(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Not a number");
        }
        return a;
    };
    p.minLength = p.minLen = function (value, len) {
        len = parseInt(len);
        this.d.minLength = len;
        var a = value.length >= len;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too short");
        }
        return a;
    };
    p.notEmpty = function (value) {
        this.d.notEmpty = true;
        var a = value != '';
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("No empty");
        }
        return a;
    };
    p.maxLength = function (value, len) {
        len = parseInt(len);
        this.d.maxLength = len;
        var a = value.length <= len;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too long");
        }
        return a;
    };
    p.min = function (value, number) {
        number = parseInt(number);
        this.d.min = number;
        var a = value >= number;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too little");
        }
        return a;
    };
    p.max = function (value, number) {
        number = parseInt(number);
        this.d.max = number;
        var a = value <= number;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too many");
        }
        return a;
    };
    p.file = function () {
    };
    p.sameas = function (value, otherValue) {
        if(typeof otherValue.val === 'function'){
            otherValue = otherValue.val();
        }
        var a = value === otherValue;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("The values are not equals");
        }
        return a;
    };
    p.invalidValue = function (value, invalidValue) {
        this.d.invalidValue = invalidValue;
        var a = value != invalidValue;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid value");
        }
        return a;
    };

    p.errors = function () {
        return this.d.errors;
    };


    p.id = function (id) {
        if (typeof id === 'number' || typeof id === 'string') {
            $A.d.validator.renameProperty(this.d.id, id);
            this.d.id = id;
            return this;
        }
        return this.d.id;
    };
    p.data = function (data, value) {
        if (typeof this.d.data === 'undefined')
            this.d.data = {};
        if (typeof data !== 'string') {
            return this.d.data;
        }
        if (typeof value === 'undefined') {
            return this.d.data[data];
        }
        this.d.data[data] = value;
        return this;
    };

    $A.m.Validator = Validator;
    $A.d.validator = new $A.m.Validator();
    $A.validate = function(){
        return $A.d.validator;
    };
    $A.newValidator = $A.createValidator = function (obj) {
        var t = new Validator(obj);
        $A.d.validators[t.d.id] = t;
        return t;
    };
    $A.getValidator = function (id) {
        return $A.d.validatorss[id];
    };
    $A.getAllValidator = function () {
        return $A.d.validators;
    };
    $A.removeValidator = $A.deleteValidator = function (id) {
        return $A.getValidator[id].remove();
    };
    $A.removeAllValidator = $A.deleteAllValidator = function (id) {
        for (i in $A.getAllValidator())
            $A.getAllValidator()[i].remove();
    };
})();

(function(){
    var Input = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<span class="automizy-input new-row"></span>'),
            $widgetInput: $('<input type="text" />'),
            $widgetInputBox: $('<span class="automizy-input-box"></span>'),
            $widgetInputBoxError: $('<span class="automizy-input-box-error"></span>'),
            $widgetLabel: $('<label></label>'),
            $widgetLabelAfter: $('<span></span>'),
            $widgetHelp: $('<img src="' + $A.images.helpIcon + '" class="automizy-input-help" />'),
            $widgetHelpContent: $('<div class="automizy-input-help-content"><img src="' + $A.images.helpArrow + '" class="automizy-input-help-content-arrow" /></div>'),
            $widgetHelpContentInner: $('<span></span>'),
            $widgetInputIcon: $('<span class="automizy-input-icon"></span>'),
            $input: $('<input />'),
            $textarea: $('<textarea></textarea>'),
            $select: $('<select></select>'),
            $loadingBox:$('<div class="automizy-input-loading-box"></div>'),
            specialElements: [],
            type: 'text',
            skin: 'simple-automizy',
            triggers:{
                enter:0,
                change:0,
                focus:0,
                blur:0,
                click:0
            },
            icon:false,
            iconPosition:'right',
            multiple: false,
            multiselect: false,
            readonly: false,
            hasObject: false,
            isDatepicker: false,
            newRow: true,
            breakInput: false,
            needModify: false,
            disabled:false,
            float: 'none',
            labelPosition: 'left',
            labelWidth: '',
            value: '',
            placeholder: '',
            name: '',
            width: '300px',
            height: 'auto',
            label: '',
            labelAfter: '',
            accept: [],
            items: {},
            itemsArray: [],
            groups:{},
            activeGroup:false,
            validator: $A.newValidator(),
            validate: function () {},
            createFunctions: [],
            automizySelect:false,
            id: 'automizy-input-' + $A.getUniqueString(),

            change:function () { //change keyup paste
                if (t.change().returnValue() === false) {
                    return false;
                }
            }
        };
        t.f = {};
        t.init();

        t.d.$input.addClass('automizy-input');
        t.d.$textarea.addClass('automizy-input');
        t.d.$select.addClass('automizy-input');
        t.d.$widgetLabel.appendTo(t.d.$widget).attr('for', t.d.id + '-input').ahide();
        t.d.$widgetInput.appendTo(t.d.$widgetInputBox).attr('id', t.d.id + '-input');
        t.d.$loadingBox.appendTo(t.d.$widgetInputBox).html($A.d.elements.$loading.clone());
        t.d.$widgetInputBox.appendTo(t.d.$widget);
        t.d.$widgetLabelAfter.appendTo(t.d.$widget).ahide();
        //t.d.$widgetInputBoxError.appendTo(t.d.$widget);
        t.d.$widgetInputBoxError.appendTo(t.d.$widgetInputBox);
        t.d.$widgetInputIcon.appendTo(t.d.$widgetInputBox);
        t.d.$widgetHelpContentInner.appendTo(t.d.$widgetHelpContent);
        t.d.$widgetHelpContent.appendTo('body:first');
        t.d.$widgetHelp.appendTo(t.d.$widget).on('mouseenter click', function () {
            t.d.$widgetHelp.stop().fadeTo(250, 1);
            var posX = t.d.$widgetHelp.offset().left + 40;
            var posY = t.d.$widgetHelp.offset().top - 16;
            t.d.$widgetHelpContent.css({
                left: posX + 'px',
                top: posY + 'px'
            }).stop().fadeIn();
        }).mouseout(function () {
            t.d.$widgetHelpContent.stop().fadeOut();
            t.d.$widgetHelp.stop().fadeTo(250, 0.5);
        }).ahide();
        t.d.$widget.attr('type', 'text').attr('id', t.id()).addClass('automizy-skin-' + t.d.skin);
        t.setupJQueryEvents();
        if (typeof obj !== 'undefined') {
            if (typeof obj.label !== 'undefined') {
                t.label(obj.label);
            }
            if (typeof obj.labelAfter !== 'undefined') {
                t.labelAfter(obj.labelAfter);
            }
            if (typeof obj.type !== 'undefined') {
                t.type(obj.type);
            }
            if (typeof obj.disable !== 'undefined') {
                if (obj.disable) {
                    t.disable();
                } else {
                    t.enable();
                }
            }
            if (typeof obj.enable !== 'undefined') {
                if (obj.enable) {
                    t.enable();
                } else {
                    t.disable();
                }
            }
            if (typeof obj.checked !== 'undefined') {
                t.checked(obj.checked);
            }
            if (typeof obj.click !== 'undefined') {
                t.click(obj.click);
            }
            if (typeof obj.help !== 'undefined') {
                t.help(obj.help);
            }
            if (typeof obj.height !== 'undefined') {
                t.height(obj.height);
            }
            if (typeof obj.name !== 'undefined') {
                t.name(obj.name);
            }
            if (typeof obj.multiple !== 'undefined') {
                t.multiple(obj.multiple);
            }
            if (typeof obj.datepicker !== 'undefined') {
                t.datepicker(obj.datepicker);
            }
            if (typeof obj.multiselect !== 'undefined' && obj.multiselect !== false) {
                t.multiselect(obj.multiselect);
            }
            if (typeof obj.options !== 'undefined') {
                t.options(obj.options);
            }
            if (typeof obj.accept !== 'undefined') {
                t.accept(obj.accept);
            }
            if (typeof obj.readonly !== 'undefined') {
                t.readonly(obj.readonly);
            }
            if (typeof obj.newRow !== 'undefined') {
                t.newRow(obj.newRow);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.placeholder !== 'undefined') {
                t.placeholder(obj.placeholder);
            }
            if (typeof obj.breakInput !== 'undefined') {
                t.breakInput(obj.breakInput);
            }
            if (typeof obj.labelPosition !== 'undefined') {
                t.labelPosition(obj.labelPosition);
            }
            if (typeof obj.labelWidth !== 'undefined') {
                t.labelWidth(obj.labelWidth);
            }
            if (typeof obj.float !== 'undefined') {
                t.float(obj.float);
            }
            if (typeof obj.change === 'function') {
                t.change(obj.change);
            }
            if (typeof obj.keyup === 'function') {
                t.keyup(obj.keyup);
            }
            if (typeof obj.enter === 'function') {
                t.enter(obj.enter);
            }
            if (typeof obj.focus === 'function') {
                t.focus(obj.focus);
            }
            if (typeof obj.blur === 'function') {
                t.blur(obj.blur);
            }
            if (typeof obj.disabled === 'function') {
                t.disabled(obj.disabled);
            }
            if (typeof obj.needModify !== 'undefined') {
                t.needModify(obj.needModify);
            }
            if (typeof obj.val !== 'undefined' || typeof obj.value !== 'undefined') {
                t.val(obj.val || obj.value);
            }
            if (typeof obj.validator !== 'undefined') {
                t.validator(obj.validator);
            }
            if (typeof obj.validate !== 'undefined') {
                t.validate(obj.validate);
            }
            if (typeof obj.focus !== 'undefined') {
                t.focus(obj.focus);
            }
            if (typeof obj.icon !== 'undefined') {
                t.icon(obj.icon);
            }
            if (typeof obj.iconPosition !== 'undefined') {
                t.iconPosition(obj.iconPosition);
            }
            if (typeof obj.iconClick === 'function') {
                t.iconClick(obj.iconClick);
            }
            t.initParameter(obj);
        }
    };

    var p = Input.prototype;
    p.setupJQueryEvents = function(){
        var t = this;
        t.d.$widgetInput.unbind('change', t.d.change).bind('change', t.d.change).focus(function () {
            if (t.focus().returnValue() === false) {
                return false;
            }
        }).blur(function () {
            if (t.blur().returnValue() === false) {
                return false;
            }
            t.validate();
        }).keypress(function (e) {
            if (e.which == 13) {
                if (t.enter().returnValue() === false) {
                    return false;
                }
            }
        }).keyup(function (e) {
            if (t.keyup().returnValue() === false) {
                return false;
            }
        }).click(function () {
            if (t.click().returnValue() === false) {
                return false;
            }
        });
    };
    p.disabled = function (disabled) {
        var t = this;
        if (typeof disabled !== 'undefined') {
            t.d.disabled = $A.parseBoolean(disabled);
            t.input().prop('disabled', t.d.disabled);
            t.d.$widget.toggleClass('disabled', t.d.disabled);
            return t;
        }
        return t.d.disabled;
    };
    p.enter = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('enter', func, name, life);
        } else {
            var a = t.runFunctions('enter');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.change = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('change', func, name, life);
        } else {
            var a = t.runFunctions('change');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.keyup = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('keyup', func, name, life);
        } else {
            var a = t.runFunctions('keyup');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.focus = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('focus', func, name, life);
        } else {
            var a = t.runFunctions('focus');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.blur = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('blur', func, name, life);
        } else {
            var a = t.runFunctions('blur');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.click = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('click', func, name, life);
        } else {
            var a = t.runFunctions('click');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };

    p.disable = function () {
        var t = this;
        t.d.$widgetInput.prop('disabled', true);
        if (t.d.multiselect) {
            t.multiselect('disable');
        }
        return t;
    };
    p.enable = function () {
        var t = this;
        t.d.$widgetInput.prop('disabled', false);
        if (t.d.multiselect) {
            t.multiselect('enable');
        }
        return t;
    };
    p.checked = function (checked) {
        var t = this;
        if (typeof checked !== 'undefined') {
            checked = $A.parseBoolean(checked);
            if (t.d.hasObject) {
                t.d.$widgetInput.prop('checked', checked);
            } else {
                t.d.createFunctions.push(function () {
                    t.d.$widgetInput.prop('checked', checked);
                });
            }
            return t;
        }
        return t.input().is(':checked');
    };
    p.check = function () {
        var t = this;
        t.d.$widgetInput.prop('checked', true).trigger('change');
        return t;
    };
    p.uncheck = function () {
        var t = this;
        t.d.$widgetInput.prop('checked', false).trigger('change');
        return t;
    };
    p.label = function (label) {
        var t = this;
        if (typeof label !== 'undefined') {
            t.d.label = label;
            if (label instanceof jQuery) {
                label.appendTo(t.d.$widgetLabel.empty());
            }else{
                t.d.$widgetLabel.html(label);
            }
            t.d.$widgetLabel.ashow();
            return t;
        }
        return t.d.label;
    };
    p.labelAfter = function (labelAfter) {
        var t = this;
        if (typeof labelAfter !== 'undefined') {
            t.d.labelAfter = labelAfter;
            if (labelAfter instanceof jQuery) {
                labelAfter.appendTo(t.d.$widgetLabelAfter.empty());
            }else{
                t.d.$widgetLabelAfter.html(labelAfter);
            }
            t.d.$widgetLabelAfter.ashow();
            return t;
        }
        return t.d.labelAfter;
    };
    p.float = function (float) {
        var t = this;
        if (typeof float !== 'undefined') {
            t.d.float = float;
            t.d.$widget.css('float', float);
            return t;
        }
        return t.d.float;
    };
    p.needModify = function (needModify) {
        var t = this;
        if (typeof needModify !== 'undefined') {
            t.d.needModify = $A.parseBoolean(needModify);
            return t;
        }
        return t.d.needModify;
    };
    p.labelPosition = function (labelPosition) {
        var t = this;
        if (typeof labelPosition !== 'undefined') {
            t.d.labelPosition = labelPosition;
            //t.d.$widgetLabel.html(label).ashow();
            if (t.d.labelPosition === 'left') {
                t.d.$widgetLabel.insertBefore(t.d.$widgetInput);
            } else {
                t.d.$widgetLabel.insertAfter(t.d.$widgetInput);
            }
            return t;
        }
        return t.d.labelPosition;
    };
    p.labelWidth = function (labelWidth) {
        var t = this;
        if (typeof labelWidth !== 'undefined') {
            t.d.labelWidth = labelWidth;
            t.d.$widgetLabel.css('width', labelWidth);
            return t;
        }
        return t.d.labelWidth;
    };
    p.help = function (help) {
        var t = this;
        if (typeof help !== 'undefined') {
            t.d.help = help;
            t.d.$widgetHelpContentInner.html(help);
            t.d.$widgetHelp.ashow();

            /*Sizing input if it has help icon*/
            t.d.$widgetInputBox.addClass('automizy-input-has-help');

            return t;
        }
        return t.d.help;
    };
    p.val = p.value = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            if (typeof value === 'function') {
                value = value.call(t, [t]);
            }
            t.d.value = value;
            if (t.d.type === 'file') {
                t.input().data('value', value);
            } else if (t.d.type === 'html') {
                t.input().html(value);
            } else {
                t.input().val(value);
            }
            if (t.d.multiselect) {
                t.input().multiselect().multiselect('refresh');
            }
            if (t.d.needModify) {
                t.input().data('originalValue', value);
            }
            return t;
        }
        if (t.d.type === 'html') {
            return t.input().html();
        }
        return t.input().val();
    };
    p.valEq = function(value){
        var t = this;
        if(t.d.itemsArray.length < value){
            return t;
        }
        if(typeof t.d.itemsArray[value] === 'undefined'){
            return t;
        }
        var value = t.d.itemsArray[value][0];
        t.val(value);
        return t;
    };
    p.optionValue = p.optionVal = function () {
        return this.options()[this.val()];
    };
    p.name = function (name) {
        var t = this;
        if (typeof name !== 'undefined') {
            t.d.name = name;
            t.d.$widgetInput.attr('name', name);
            return t;
        }
        return t.d.$widgetInput.attr('name');
    };
    p.placeholder = function (placeholder) {
        var t = this;
        if (typeof placeholder !== 'undefined') {
            t.d.placeholder = placeholder;
            t.d.$widgetInput.attr('placeholder', placeholder);
            return t;
        }
        return t.d.placeholder;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            if (t.type() === 'file') {
                t.widget().add(t.d.$widgetInputBox).width('100%');
                t.input().data('table').width(width);
            } else {
                t.widget().width('auto');
                t.input().add(t.d.$widgetInputBox).width(width);
                if (t.d.multiselect) {
                    t.input().next().css({maxWidth: width});
                }
            }
            return t;
        }
        return t.d.width;
    };
    p.height = function (height) {
        var t = this;
        if (typeof height !== 'undefined') {
            t.d.height = height;
            t.widget().height('auto');
            t.input().add(t.d.$widgetInputBox).height(height);
            return t;
        }
        return t.d.height;
    };
    p.type = function (type) {
        var t = this;
        if (typeof type !== 'undefined') {
            type = type.toLowerCase();
            t.d.type = type;
            var attributes = t.d.$widgetInput.getAttributes();
            delete attributes.type;
            delete attributes.checked;
            if (t.d.type === 'select' || t.d.type === 'automizy-select') {
                t.d.$widgetInput = $('<select></select>');
            } else if (t.d.type === 'textarea') {
                t.d.$widgetInput = $('<textarea></textarea>');
            } else if (t.d.type === 'html') {
                t.d.$widgetInput = $('<span></span>');
            } else if (t.d.type === 'date') {
                t.datepicker();
            } else if (t.d.type === 'datetime') {
                t.datetimepicker();
            } else {
                t.d.$widgetInput = $('<input/>').attr('type', t.d.type);
            }
            t.d.$loadingBox.appendTo($A.d.elements.$tmp);
            t.d.$widgetInputBox.ashow().empty();
            t.d.$widgetInput.attr(attributes).show();
            t.d.$widgetInput.appendTo(t.d.$widgetInputBox);
            t.d.$widgetInputBoxError.appendTo(t.d.$widgetInputBox);
            t.d.$loadingBox.appendTo(t.d.$widgetInputBox);
            setTimeout(function(){
                t.setupJQueryEvents();
            }, 10);
            if (t.d.type === 'hidden' && t.d.label.length < 1) {
                t.d.createFunctions.push(function () {
                    t.widget().ahide();
                });
            } else if (type === 'file') {
                t.d.createFunctions.push(function () {
                    $A.skin(t);
                });
            } else if (type === 'slider') {
                t.d.createFunctions.push(function () {
                    $A.skin(t);
                });
            }
            return t;
        }
        return t.d.type;
    };
    p.displayType = function(type, settings){
        var t = this;
        var input = t.input();
        var type = type || false;
        if(!type){
            return t;
        }
        var settings = settings || false;
        var thisType = t.type();
        if(thisType === 'select' || thisType === 'automizy-select'){
            t.d.multiselect=false;
            t.multiple(false);
        }
        if (t.input().hasClass('hasDatepicker')) {
            t.input().datepicker("destroy");
            t.input().removeClass("hasDatepicker");
        }
        type = type.toLowerCase();
        if(type === 'text' || type === 'string'){
            t.type('text');
        }else if(type === 'number' || type === 'integer'){
            t.type('number');
        }else if(type === 'datetime') {
            t.type('text');
            t.input().datetimepicker(settings || {
                dateFormat: 'yy-mm-dd',
                timeFormat: 'HH:mm:ss',
                changeYear: true,
                changeMonth: true,
                showOtherMonths: true,
                selectOtherMonths: false,
                yearRange: '1900:c',
                showButtonPanel: true,
                showSecond: true,
                showMillisec: false,
                showMicrosec: false,
                showTimezone: false,
                showTime: true,
                controlType: 'slider'
            });
        }else if(type === 'select' || type === 'automizy-select') {
            t.type('select');
        }else if(type === 'multiple_choices') {
            t.type('select').multiple(true).multiselect(true);
        }
        return t;
    };
    p.datepicker = function () {
        var t = this;
        if (typeof $.ui === 'undefined') {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isDatepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.datepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.datetimepicker = function () {
        var t = this;
        if (typeof $.ui === 'undefined' || typeof $().timepicker === 'undefined') {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isDatetimepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.datetimepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.timepicker = function () {
        var t = this;
        if (typeof $.ui === 'undefined' || typeof $().timepicker === 'undefined') {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isTimepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.timepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.multiple = function (multiple) {
        var t = this;
        if (typeof multiple !== 'undefined') {
            multiple = $A.parseBoolean(multiple);
            if (multiple) {
                t.d.$widgetInput.attr('multiple', 'multiple');
            } else {
                t.d.$widgetInput.removeAttr('multiple');
            }
            t.d.multiple = multiple;
            return t;
        }
        t.d.$widgetInput.attr('multiple', 'multiple');

        return t.d.multiple;
    };
    p.multiselect = function () {
        var t = this;
        var args = arguments;
        if (typeof $().multiselect === "undefined") {
            console.warn('Missing plugin!');
            return t;
        }
        if (!t.d.hasObject) {
            t.d.createFunctions.push(function () {
                p.multiselect.apply(t, args);
                t.width(t.d.width);
            });
            return t;
        }
        t.d.multiselect = true;
        var $w = t.d.$widgetInput;
        setTimeout(function () {
            $w.multiselect().multiselect('refresh');
        }, 1);
        if (args.length <= 0 || args[0] === true) {
            if (t.d.multiple) {
                args[0] = $A.d.defines.input.setupSelectSearchCheckObj;
            } else {
                args[0] = $A.d.defines.input.setupSelectObj;
            }
        }

        var freturn = $w.multiselect.apply($w, args);

        return (freturn !== $w) ? freturn : t;
    };

    p.options = p.items = function (arr) {
        var t = this;
        if (typeof arr !== 'undefined') {
            t.d.items = {};
            t.d.itemsArray = [];
            t.removeOptions();
            t.addOptions(arr);
            return t;
        }
        return t.d.items;
    };

    p.removeOptions = function () {
        var t = this;
        t.d.$widgetInput.find('option, optgroup').remove();
        return t;
    };

    p.addOptions = p.addItems = function (arr, before) {
        var t = this;
        var val = t.val();
        var before = before || false;
        if (t.d.type !== 'select') {
            console.warn('Bad type!');
        } else if (typeof arr === 'undefined') {
            console.warn('Bad parameters!');
        } else if (typeof arr === 'object' || typeof arr === 'array') {
            if (!$.isArray(arr)) {
                var na = [];
                for (var i in arr) {
                    var inVal = arr[i];
                    var inSelected = false;
                    if ((typeof inVal === 'object' || typeof inVal === 'array') && !$.isArray(inVal)) {
                        inSelected = inVal.selected;
                        inVal = inVal.value;
                    }
                    na.push([i, inVal, inSelected]);
                }
                arr = na;
            }
            if ($.isArray(arr)) {
                var values = [];
                for (var i = 0; i < arr.length; i++) {
                    var $option = $('<option></option>');

                    var value = arr[i];
                    if (typeof value !== 'string' && typeof value !== 'number') {
                        value = arr[i][0];
                    }

                    var text = arr[i];
                    if (typeof text !== 'string' && typeof text !== 'number') {
                        text = arr[i][1] || arr[i][0];
                    }

                    $option.attr('value', value);
                    $option.html(text);
                    if (typeof arr[i] !== 'string' && typeof arr[i] !== 'number' && typeof arr[i][2] !== 'undefined' && $A.parseBoolean(arr[i][2])) {
                        values.push(arr[i][0]);
                    }
                    if (before) {
                        var $container = t.d.$widgetInput;
                        if(!$.isEmptyObject(t.d.groups) && t.d.activeGroup !== false && typeof t.d.groups[t.d.activeGroup] !== 'undefined'){
                            $container = t.d.groups[t.d.activeGroup];
                        }
                        var $of = $container.find('option:first');
                        if ($of.val() == 0) {
                            $option.insertAfter($of);
                        } else {
                            $option.prependTo($container);
                        }
                    } else {
                        if($.isEmptyObject(t.d.groups) || t.d.activeGroup === false || typeof t.d.groups[t.d.activeGroup] === 'undefined'){
                            $option.appendTo(t.d.$widgetInput);
                        }else{
                            $option.appendTo(t.d.groups[t.d.activeGroup]);
                        }
                    }
                    t.d.items[value] = text;
                }
                //t.d.$widgetInput.val(values);
                t.d.itemsArray = arr;
            }
        }
        if (t.d.multiselect) {
            t.multiselect().multiselect('refresh');
        }
        t.val(values || val);
        return t;
    };
    p.option = p.addOption = p.addItem = function (key, value) {
        var t = this;
        return t.addOptions([[key, (value || key)]]);
    };
    p.addOptionBefore = p.addItemBefore = function (key, value) {
        var t = this;
        return t.addOptions([[key, (value || key)]], true);
    };
    p.group = function(groupName){
        var t = this;

        if(typeof groupName !== 'undefined'){
            if(groupName === false){
                t.d.activeGroup = false;
            }else if(typeof t.d.groups[groupName] !== 'undefined'){
                t.d.activeGroup = groupName;
            }else{
                t.d.groups[groupName] = $('<optgroup label="' + groupName + '"></optgroup>').appendTo(t.d.$widgetInput);
                t.d.activeGroup = groupName;
            }
            return t;
        }

        return t.d.activeGroup;
    };
    p.accept = function (arr) {
        var t = this;
        if (typeof arr !== 'undefined') {
            if (typeof arr === 'string') {
                t.d.accept = arr.split(',');
                t.d.$widgetInput.attr('accept', arr);
            } else {
                t.d.accept = arr;
                t.d.$widgetInput.attr('accept', arr.join(','));
            }
            return t;
        }
        return t.d.accept;
    };
    p.readonly = function (readonly) {
        var t = this;
        if (typeof readonly !== 'undefined') {
            readonly = $A.parseBoolean(readonly);
            t.d.readonly = readonly;
            t.d.$widgetInput.attr('readonly', readonly);
            return t;
        }
        return t.d.readonly;
    };
    p.newRow = function (newRow) {
        var t = this;
        if (typeof newRow !== 'undefined') {
            newRow = $A.parseBoolean(newRow);
            t.d.newRow = newRow;
            if (newRow) {
                t.d.$widget.addClass('new-row');
            } else {
                t.d.$widget.removeClass('new-row');
            }
            return t;
        }
        return t.d.newRow;
    };
    p.validator = function (validator) {
        var t = this;
        if (typeof validator !== 'undefined') {
            if(validator === false){
                t.d.validator = $A.newValidator();
            }else if (validator instanceof $A.m.Validator) {
                t.d.validator = validator;
            } else {
                t.d.validator.set(validator);
            }
            return t;
        }
        return t.d.validator;
    };
    p.validate = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.validate = func;
        } else {
            var a = t.validator().execute(t.val());
            if (!a) {
                t.showError(t.validator().errors().join('<br/>'));
            } else {
                t.hideError();
            }
            t.d.validate.apply(this, [a, this, this.d.$widget]);
            return a;
        }
        return t;
    };

    p.breakInput = function (breakInput) {
        var t = this;
        if (typeof breakInput !== 'undefined') {
            breakInput = $A.parseBoolean(breakInput);
            t.d.breakInput = breakInput;
            if (breakInput) {
                t.d.$widgetInputBox.addClass('new-row');
                t.d.$widgetLabel.addClass('new-row');
            } else {
                t.d.$widgetInputBox.removeClass('new-row');
                t.d.$widgetLabel.removeClass('new-row');
            }
            return t;
        }
        return t.d.breakInput;
    };
    p.input = function () {
        var t = this;
        return t.d.$widgetInput;
    };
    p.showError = p.error = function(msg){
        var t = this;
        if(typeof msg !== 'undefined') {
            t.errorBox().html(msg);
        }
        t.widget().addClass('error');
        return t;
    };
    p.hideError = function(){
        var t = this;
        t.widget().removeClass('error');
        return t;
    };
    p.errorBox = function () {
        return this.d.$widgetInputBoxError;
    };
    p.rowSpacing = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            t.widget().css('padding-bottom', value);
            return t;
        }
        return t.widget().css('padding-bottom');
    };
    p.loadingOn = function(){
        var t = this;
        t.d.$loadingBox.show();
        return t;
    };
    p.loadingOff = function(){
        var t = this;
        t.d.$loadingBox.hide();
        return t;
    };
    p.thin = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            value = $A.parseBoolean(value);
            if(!value){
                t.widget().removeClass('automizy-input-thin');
                return t;
            }
        }
        t.widget().addClass('automizy-input-thin');
        return t;
    };
    p.icon = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            if(value === false){
                t.d.$widgetInputIcon.css('display', 'none');
            }else if(value === true){
                t.d.$widgetInputIcon.css('display', 'inline-block');
            }else{
                t.d.icon = value;
                t.d.$widgetInputIcon.addClass('automizy-icon-'+value);
                t.d.$widgetInputIcon.css('display', 'inline-block');
            }
            t.iconPosition();
            return t;
        }

        return t.d.icon;
    };
    p.iconPosition = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            value = value.toLowerCase();
            if(value === 'left'){
                t.d.iconPosition = 'left';
                t.d.$widgetInputIcon.css({
                    left:'0',
                    right:'auto'
                })
            }else{
                t.d.iconPosition = 'right';
                t.d.$widgetInputIcon.css({
                    left:'auto',
                    right:'0'
                })
            }
            t.iconPosition();
            return t;
        }

        if(t.d.iconPosition === 'left'){
            t.input().css({
                paddingLeft:'30px',
                paddingRight:'8px'
            })
        }else{
            t.input().css({
                paddingLeft:'8px',
                paddingRight:'30px'
            })
        }
        return t.d.iconPosition;
    };
    p.iconClick = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.$widgetInputIcon.click(function () {
                func.call(t, [t]);
            });
            return t;
        }
        t.d.$widgetInputIcon.click();
        return t;
    };
    p.automizySelect = function(){
        return this.input().automizySelect();
    };


    $A.initBasicFunctions(Input, "Input", ["change", "keyup", "enter", "focus", "blur", "click"]);
})();

(function(){
    var Form = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<form class="automizy-form" onsubmit="return false;"></form>'),
            $inputs: $('<div class="automizy-form-inputs"></div>'),
            $buttons: $('<div class="automizy-form-buttons"></div>'),
            $tables: $('<div class="automizy-form-tables"></div>'),
            buttons: [],
            inputs: [],
            tables: [],
            subtitles: [],
            htmls: [],
            groups:[],
            hasObject: false,
            id: 'automizy-form-' + $A.getUniqueString(),
            create: function () {
            },
            submit:function(){},
            method: 'POST',
            enctype: false,
            url: document.location.href
        };
        t.init();

        t.d.$widget.attr('id', t.id());
        t.d.$inputs.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$widget);
        t.d.$tables.appendTo(t.d.$widget);

        if (typeof obj !== 'undefined') {
            if (typeof obj.subTitle !== 'undefined')
                t.subTitle(obj.subTitle);
            if (typeof obj.htmls !== 'undefined')
                t.htmls(obj.htmls);
            if (typeof obj.inputs !== 'undefined')
                t.addInputs(obj.inputs);
            if (typeof obj.tables !== 'undefined')
                t.addTables(obj.tables);
            if (typeof obj.buttons !== 'undefined')
                t.addButtons(obj.buttons);
            if (typeof obj.groups !== 'undefined')
                t.groups(obj.groups);
            if (typeof obj.method !== 'undefined')
                t.method(obj.method);
            if (typeof obj.enctype !== 'undefined')
                t.enctype(obj.enctype);
            if (typeof obj.submit === 'function')
                t.submit(obj.submit);
            if (typeof obj.url !== 'undefined' || typeof obj.action !== 'undefined')
                t.url(obj.url || obj.action);
            t.initParameter(obj);
        }
    };

    var p = Form.prototype;
    p.subTitle = p.addSubTitle = function (text) {
        var t = this;
        var id = "automizy-form-subtitle-" + $A.getUniqueString();
        if (typeof text === 'string') {
            var $widget = $('<div id="' + id + '" class="automizy-form-subtitle"></div>');
            t.d.subtitles.push({id: id, text: text, $widget:$widget});
            $widget.html(text).appendTo(t.d.$inputs);
        } else {
            console.warn('Bad parameter type.', text);
        }
        return t;
    };
    p.removeSubTitle = function (subTitle) {
        var t = this;
        if (typeof subTitle === 'string') {
            for (var i = 0; i < t.d.subtitles.length; i++) {
                if (t.d.subtitles[i].id === subTitle)
                    t.d.subtitles[i].remove();
            }
        } else if (typeof subTitle === 'object') {
            subTitle.remove();
        }
    };

    p.button = p.addButton = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Button) {
                obj.drawTo(t.d.$buttons);
                t.d.buttons.push(obj);
            } else {
                obj.target = obj.target || t.d.$buttons;
                var button = $A.newButton(obj);
                t.d.buttons.push(button);
            }
            return t;
        }
        var button = $A.newButton();
        t.d.buttons.push(button);
        button.drawTo(t.d.$buttons);
        return button;
    };
    p.removeButton = function (button) {
        var t = this;
        if (typeof button === 'string') {
            for (var i = 0; i < t.d.buttons.length; i++) {
                if (t.d.buttons[i].id() === button)
                    t.d.buttons[i].remove();
            }
        } else if (typeof button === 'object') {
            button.remove();
        }
    };
    p.addButtons = function (buttons) {
        var t = this;
        if (typeof buttons !== 'undefined') {
            for (var i = 0; i < buttons.length; i++) {
                t.addButton(buttons[i]);
            }
            return t;
        }
        return t.d.buttons;
    };
    
    p.input = p.addInput = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Input || obj instanceof $A.m.Select) {
                obj.drawTo(t.d.$inputs);
                t.d.inputs.push(obj);
            } else {
                obj.target = obj.target || t.d.$inputs;
                var input = $A.newInput(obj);
                t.d.inputs.push(input);
            }
            return t;
        }
        var input = $A.newInput();
        t.d.inputs.push(input);
        input.drawTo(t.d.$inputs);
        return input;
    };
    p.removeInput = function (input) {
        var t = this;
        if (typeof input === 'string') {
            for (var i = 0; i < t.d.inputs.length; i++) {
                if (t.d.inputs[i].id() === input)
                    t.d.inputs[i].remove();
            }
        } else if (typeof input === 'object') {
            input.remove();
        }
    };
    p.addInputs = function (inputs) {
        var t = this;
        if (typeof inputs !== 'undefined') {
            for (var i = 0; i < inputs.length; i++) {
                t.addInput(inputs[i]);
            }
            return t;
        }
        return t.d.inputs;
    };
    
    p.table = p.addTable = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Table) {
                obj.drawTo(t.d.$tables);
                t.d.tables.push(obj);
            } else {
                obj.target = obj.target || t.d.$tables;
                var table = $A.newTable(obj);
                t.d.tables.push(table);
            }
            return t;
        }
        var table = $A.newTable();
        t.d.tables.push(table);
        table.drawTo(t.d.$tables);
        return table;
    };
    p.removeTable = function (table) {
        var t = this;
        if (typeof table === 'string') {
            for (var i = 0; i < t.d.tables.length; i++) {
                if (t.d.tables[i].id() === table)
                    t.d.tables[i].remove();
            }
        } else if (typeof table === 'object') {
            table.remove();
        }
    };
    p.addTables = function (tables) {
        var t = this;
        if (typeof tables !== 'undefined') {
            for (var i = 0; i < tables.length; i++) {
                t.addTable(tables[i]);
            }
            return t;
        }
        return t.d.tables;
    };

    p.group = p.addGroup = function (obj) {
        var t = this;
        if (typeof obj === 'object' || typeof obj === 'array') {
            var $group = $('<div class="automizy-form-group"></div>');
            var $groupSwitch = $('<div class="automizy-form-group-switch"></div>').text(obj.text || $A.translate('Group')).click(function () {
                $groupSwitch.toggleClass('active');
                $group.toggleClass('active');
            });
            if (obj.width !== 'undefined')
                $groupSwitch.width(obj.width);
            if (typeof obj.inputs !== 'undefined') {
                for (var i = 0; i < obj.inputs.length; i++) {
                    if (obj.inputs[i] instanceof $A.m.Input) {
                        t.d.inputs.push(obj.inputs[i].drawTo($group));
                    } else {
                        obj.inputs[i].target = $group;
                        t.addInput(obj.inputs[i]);
                    }
                }
            }
            if (typeof obj.buttons !== 'undefined') {
                for (var i = 0; i < obj.buttons.length; i++) {
                    obj.buttons[i].target = $group;
                    t.addButton(obj.buttons[i]);
                }
            }
            if (typeof obj.htmls !== 'undefined') {
                for (var i = 0; i < obj.htmls.length; i++) {
                    obj.htmls[i].appendTo($group);
                }
            }
            $groupSwitch.appendTo(t.d.$inputs);
            $group.appendTo(t.d.$inputs);
            t.d.groups.push({
                $group:$group,
                $groupSwitch:$groupSwitch,
                $box:t.d.$inputs,
                id:$A.getUniqueString()
            })
        }
        return t;
    };
    p.removeGroup = function (group) {
        var t = this;
        if (typeof group === 'string') {
            for (var i = 0; i < t.d.groups.length; i++) {
                if (t.d.groups[i].id === group) {
                    t.d.groups[i].$group.remove();
                    t.d.groups[i].$groupSwitch.remove();
                }
            }
        }
    };
    p.groups = p.addGroups = function (groups) {
        var t = this;
        if (typeof groups !== 'undefined') {
            for (var i in groups) {
                t.addGroup(groups[i]);
            }
            return t;
        }
        return t;
    };

    p.method = function (method) {
        var t = this;
        if (typeof method !== 'undefined') {
            t.d.method = method;
            t.widget().attr('method', method);
            return t;
        }
        return t.d.method;
    };
    p.enctype = function (enctype) {
        var t = this;
        if (typeof enctype !== 'undefined') {
            t.d.enctype = enctype;
            t.widget().attr('enctype', enctype);
            return t;
        }
        return t.d.enctype;
    };
    p.url = p.action = function (url) {
        var t = this;
        if (typeof url !== 'undefined') {
            t.d.url = url;
            t.widget().attr('action', url);
            return t;
        }
        return t.d.url;
    };
    p.submit = function (func) {
        var t = this;
        if(typeof func === 'function'){
            t.d.submit = func;
            return t;
        }
        t.d.submit.apply(t, []);
        t.widget().removeAttr('onsubmit').submit();
    };
    p.break = function () {
        var t = this;
        t.d.$inputs.append('<br/>');
        return t;
    };
    p.validate = function (){
        var t = this;
        var validate = true;
        for(var i = 0; i < t.d.inputs.length; i++){
            if(!t.d.inputs[i].validate()){
                validate = false;
            }
        }
        return validate;
    };

    p.htmls = p.addHtmls = function (htmls) {
        var t = this;
        if (typeof htmls !== 'undefined') {
            for (var i in htmls) {
                t.addHtml(htmls[i]);
            }
            return t;
        }
        return t.d.htmls;
    };

    p.html = p.addHtml = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            var id = "automizy-form-html-" + $A.getUniqueString();
            var $htmlBox = $('<span id="' + id + '" class="automizy-form-html"></span>');
            if (html instanceof jQuery) {
                if (t.d.hasObject === false)
                    html.appendTo($htmlBox);
            } else {
                $htmlBox.html(html);
            }
            $htmlBox.appendTo(t.d.$inputs);
            t.d.htmls.push($htmlBox);
            return t;
        }
        return t.d.htmls;
    };
    p.removeHtml = function (html) {
        var t = this;
        if (typeof html === 'string') {
            for (var i = 0; i < t.d.htmls.length; i++) {
                if (t.d.htmls[i].attr('id') === html)
                    t.d.htmls[i].remove();
            }
        } else if (html instanceof jQuery) {
            html.remove();
        }
    };

    p.json = function () {
        return JSON.stringify(this.object());
    };

    p.object = function (dotted) {
        var t = this;

        var result = {};
        var ignoreArray = [];
        if(typeof dotted !== 'undefined'){
            dotted = $A.parseBoolean(dotted);
        }else{
            var dotted = false;
        }
        t.widget().find('input, select, textarea').filter(function(){
            var returnValue = true;
            var $input = $(this);
            if(!$input.attr('name')){
                returnValue = false;
            }else if($input.closest('.automizy-table-box').length > 0){
                returnValue = false;
            }
            return returnValue
        }).each(function () {
            var $t = $(this);
            if (typeof $t.data('originalValue') !== 'undefined' && $t.data('originalValue') == $t.val()) {
                ignoreArray.push($t.attr('name'));
            }

            if($t.is(':disabled')){
                return true;
            }
            var name = $t.attr('name');
            if($.inArray(name, ignoreArray) >= 0){
                return true;
            }
            var value = $t.val();

            if (dotted && name.indexOf('.') > -1) {
                var arr = name.split('.');
                if (typeof result[arr[0]] === 'undefined') {
                    result[arr[0]] = {};
                }
                result[arr[0]][arr[1]] = value;
            } else if (name.slice(-2) === '[]') {
                name = name.slice(0, -2);
                if (typeof result[name] === 'undefined')
                    result[name] = [];
                result[name].push(value);
            } else {
                result[name] = value;
            }

        });

        /*$.each(t.widget().serializeArray(), function () {
            var name = this.name;
            if($.inArray(name, ignoreArray) >= 0){
                return true;
            }
            var value = this.value;

            if (dotted && name.indexOf('.') > -1) {
                var arr = name.split('.');
                if (typeof result[arr[0]] === 'undefined') {
                    result[arr[0]] = {};
                }
                result[arr[0]][arr[1]] = value;
            } else if (name.slice(-2) === '[]') {
                name = name.slice(0, -2);
                if (typeof result[name] === 'undefined')
                    result[name] = [];
                result[name].push(value);
            } else {
                result[name] = value;
            }
        });*/

        return result;
    };

    $A.initBasicFunctions(Form, "Form");
})();

(function(){

    SlideWindow = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<div class="automizy-slide-window"></div>'),
            $head: $('<div class="automizy-slide-window-head"></div>'),
            $buttons: $('<div class="automizy-slide-window-buttons"></div>'),
            $content: $('<div class="automizy-slide-window-content"></div>'),
            $tab: $('<div class="automizy-slide-window-tab"></div>'),
            buttons: [],
            positionY: 'bottom',
            positionX: 'center',
            position: 'right',
            title: 'My SlideWindow',
            hash: '',
            tab: {
                text: 'Click this!',
                html: $('<span></span>'),
                width: 'auto',
                pos: 'right'
            },
            width: 600,
            zIndex: 3000,
            isOpened: false,
            isCloseable: true,
            autoClose: true,
            hasObject: false,
            id: 'automizy-slide-window-' + $A.getUniqueString(),
            animation: {
                open: 'swing',
                close: 'swing',
                openTime: 200,
                closeTime: 200
            },
            createFunctions: [],
            open: function () {
            },
            close: function () {
            },
            animationOpen: function () {
                var animation = {};
                switch (t.d.position) {
                    case "right":
                        animation = {right: 0};
                        break;
                    case "left":
                        animation = {left: 0};
                        break;
                    case "top":
                        animation = {top: 0};
                        break;
                    case "bottom":
                        animation = {bottom: 0};
                        break;
                    default:
                        animation = {right: -t.d.$widget.width()};
                        break;
                }
                return animation;
            },
            animationClose: function () {
                var animation = {};
                switch (t.d.position) {
                    case "right":
                        animation = {right: -t.d.$widget.outerWidth()};
                        break;
                    case "left":
                        animation = {left: -t.d.$widget.outerWidth()};
                        break;
                    case "top":
                        animation = {top: -t.d.$widget.outerHeight()};
                        break;
                    case "bottom":
                        animation = {bottom: -t.d.$widget.outerHeight()};
                        break;
                    default:
                        animation = {right: 0};
                        break;
                }
                return animation;
            }
        };
        t.init();

        t.d.$widget.attr('id', t.id());
        t.d.$tab.text(t.d.tab.text);
        t.d.$head.text(t.d.title);
        t.d.$tab.appendTo(t.d.$widget);
        t.d.$head.appendTo(t.d.$widget);
        t.d.$content.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$widget);
        t.d.$widget.css({visibility:'hidden'});
        t.d.createFunctions.push(function () {
            t.position(t.d.position);
            t.d.$widget.stop().animate(t.d.animationClose(), 0, 'swing', function(){
                t.d.$widget.css({visibility:'visible'});
            });
            t.show();
        });
        t.d.$tab.click(function () {
            if (t.d.isOpened === true) {
                t.close();
            } else {
                t.open();
            }
        });
        t.d.$widget.click(function () {
            if (t.d.autoClose === true)
                t.d.isCloseable = false;
        });
        $(window).click(function () {
            if (t.d.isCloseable === true && t.d.autoClose === true) {
                t.close();
            }
            t.d.isCloseable = true;
        });

        if (typeof obj !== 'undefined') {
            if (typeof obj.tab !== 'undefined')
                t.tab(obj.tab);
            if (typeof obj.title !== 'undefined')
                t.title(obj.title);
            if (typeof obj.position !== 'undefined')
                t.position(obj.position);
            if (typeof obj.positionY !== 'undefined')
                t.positionY(obj.positionY);
            if (typeof obj.positionX !== 'undefined')
                t.positionX(obj.positionX);
            if (typeof obj.width !== 'undefined')
                t.width(obj.width);
            if (typeof obj.zIndex !== 'undefined')
                t.zIndex(obj.zIndex);
            if (typeof obj.animation !== 'undefined')
                t.animation(obj.animation);
            if (typeof obj.open === 'function')
                t.open(obj.open);
            if (typeof obj.close === 'function')
                t.close(obj.close);
            if (typeof obj.autoClose !== 'undefined')
                t.autoClose(obj.autoClose);
            if (typeof obj.content !== 'undefined')
                t.content(obj.content);
            t.initParameter(obj);
        }
    };
    var p = SlideWindow.prototype;

    p.show = function (func) {
        var t = this;
        $A.setWindowScroll(false, this.d.id);
        if (!t.d.hasObject) {
            t.draw();
        }
        this.d.$widget.ashow();
        return this;
    };
    p.hash = function (hash) {
        var t = this;
        if (typeof hash !== 'undefined') {
            t.d.hash = hash;
            return t;
        }
        return t.d.hash;
    };
    p.close = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.close = func;
        } else {
            t.d.isOpened = false;
            t.d.$widget.stop().animate(t.d.animationClose(), t.d.animation.closeTime, t.d.animation.close, function () {
                t.d.close.apply(t, [t, t.d.$widget]);
            });
        }
        return t;
    };
    p.open = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.open = func;
        } else {
            t.d.isOpened = true;
            if (t.hash() !== false) {
                $A.hashChange(t.hash());
            }
            t.d.$widget.stop().animate(t.d.animationOpen(), t.d.animation.openTime, t.d.animation.open, function () {
                t.d.open.apply(t, [t, t.d.$widget]);
                t.show();
            });
        }
        return t;
    };
    p.autoClose = function (bool) {
        var t = this;
        if (typeof bool !== 'undefined') {
            t.d.autoClose = bool;
            return t;
        }
        return t.d.autoClose;
    };
    
    p.title = function (newTitle) {
        var t = this;
        if (typeof newTitle !== 'undefined') {
            t.d.title = newTitle;
            t.d.$head.html(newTitle);
            return t;
        }
        return t.d.title;
    };
    p.tab = function (tab) {
        var t = this;
        if (typeof tab === 'undefined')
            return t.d.tab;
        var tab = tab || {};
        t.d.tab.text = tab.text || t.d.tab.text;
        t.d.$tab.text(t.d.tab.text);
        t.d.tab.html = tab.html || t.d.tab.html;
        if(!t.d.tab.html instanceof jQuery){
            t.d.tab.html = $(t.d.tab.html);
        }
        t.d.tab.html.appendTo(t.d.$tab);
        return t;
    };

    p.tabPos = function (pos) {
        var t = this;
        if (typeof pos === 'undefined')
            return t.d.tab.pos;
        else {
            if (pos === 'right' || pos === 'left' || pos === 'center')
                t.d.tab.pos = pos;
            var hd = t.d.$tab.outerWidth();
            var hg = t.d.$tab.outerHeight();
            var halfWd = hd / 2;
            var halfHg = hg / 2;
            switch (t.d.position) {
                case 'right':
                    t.d.$tab.css({
                        left: -halfHg - halfWd,
                        top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                    });
                    t.d.$content.css({'min-height': t.d.$tab.width() - t.d.$head.height() - t.d.$buttons.height()});
                    break;
                case 'left':
                    t.d.$tab.css({
                        left: -halfHg - halfWd + t.widget().outerWidth() + t.d.$tab.outerHeight() -parseInt(t.widget().css('border-right-width')) -parseInt(t.widget().css('border-left-width')),
                        top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                    });
                    t.d.$content.css({'min-height': t.d.$tab.width() - t.d.$head.height() - t.d.$buttons.height()});
                    break;
                case 'bottom':
                    t.d.$tab.css({
                        top: -parseInt(t.d.$tab.outerHeight())
                    });
                    break;
                case 'top':
                    t.d.$tab.css({
                        top: t.d.$widget.outerHeight() -parseInt(t.widget().css('border-top-width'))
                    });
                    break;
            }
            switch (pos) {
                case 'center':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: (parseInt(t.d.$widget.outerWidth()) - parseInt(t.d.$tab.outerWidth())) / 2 -parseInt(t.widget().css('border-left-width'))
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: ((t.d.$widget.outerHeight() - t.d.$tab.outerHeight()) / 2 -(parseInt(t.widget().css('border-top-width'))))
                        });
                    break;
                case 'right':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: t.widget().outerWidth() - t.d.$tab.outerWidth()
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                        });
                    break;
                case 'left':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: -1
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: t.widget().outerHeight() - t.d.$tab.outerWidth() / 2 - hg / 2
                        });
                    break;
            }
            return t;
        }
    };

    p.tabWidth = function (width) {
        var t = this;
        if (typeof width === 'undefined')
            return t.d.tab.width;
        t.d.tab.width = width;
        if (width === '100%') {
            if (t.d.position === 'left' || t.d.position === 'right') {
                t.d.$tab.css({'padding-left': (parseInt(t.d.$widget.outerHeight()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))+parseInt(t.widget().css('border-bottom-width'))});
                t.d.$tab.css({'padding-right': (parseInt(t.d.$widget.outerHeight()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-right-width')+parseInt(t.widget().css('border-top-width')))});
            }
            else {
                t.d.$tab.css({'padding-left': (parseInt(t.d.$widget.outerWidth()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))});
                t.d.$tab.css({'padding-right': (parseInt(t.d.$widget.outerWidth()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-right-width'))});
            }
            t.tabPos('center');
            t.d.tab.pos = 'center';
            return t;
        }
        if (width === 'auto') {
            t.d.$tab.css({padding: '3px 6px'});
            t.tabPos(t.d.tab.pos);
            return t;
        }
        else {
            width = parseInt(width);
            if (width < t.d.$tab.width()) {
                console.warn('Not wide enough! Min. width is:' + t.d.$tab.width());
            }
            else {
                t.d.$tab.css({'padding-left': (width - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))});
                t.d.$tab.css({'padding-right': (width - t.d.$tab.width() / 2 -parseInt(t.d.$tab.css('border-right-width')))});
                t.tabPos(t.d.tab.pos);
            }
            return t;
        }
    };
    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            if (content instanceof jQuery) {
                content.appendTo(t.d.$content.html(''));
            } else if (content instanceof $A.m.Form) {
                content.drawTo(t.d.$content.html(''));
            } else {
                t.d.$content.html(content);
            }
            return t;
        }
        return t.d.$content;
    };
    p.positionY = function (y) {
        var t = this;
        if (t.d.position === "bottom" || t.d.position === "top") {
            console.warn("Only defined if slide window widget is positioned to the right or to the left.");
            if (typeof y !== 'undefined')
                return t;
        }
        if (typeof y !== 'undefined') {
            t.d.positionY = y;
            if (y === 'top')
                t.d.$widget.css({bottom:'auto', top:0});
            else if (y==='bottom')
                t.d.$widget.css({top:'auto', bottom:0});
            else if (y==='middle')
                t.widget().css({bottom: 'auto', top:(parseInt($('body').outerHeight()) - parseInt(t.widget().outerHeight()))/2});
            else
            t.d.$widget.css({'top': t.d.positionY});
            return t;
        }
        return t.d.positionY;
    };
    p.positionX = function (x) {
        var t = this;
        if (!(t.d.position === "bottom" || t.d.position === "top")) {
            console.warn("Only defined if slide window widget is positioned to the top or on the bottom.");
            if (typeof x !== 'undefined')
                return t;
        }
        if (typeof x !== 'undefined') {
            t.d.positionX = x;
            if (x === 'right')
                t.d.$widget.css({left:'auto', right:0});
            else if (x==='left')
                t.d.$widget.css({right:'auto', left:0});
            else if (x==='center')
                t.d.$widget.css({right: 'auto', left: ($('body').outerWidth() - t.d.$widget.width()) / 2});
            else
            t.d.$widget.css({'left': t.d.positionX});
            return t;
        }
        return t.d.positionX;
    };
    p.position = function (pos) {
        var t = this;
        if (typeof pos !== 'undefined') {
            if (pos === 'left' || pos === 'right' || pos === 'bottom' || pos === 'top'){
                t.d.$widget.removeClass('slideWindow-position-right');
                t.d.$widget.removeClass('slideWindow-position-left');
                t.d.$widget.removeClass('slideWindow-position-top');
                t.d.$widget.removeClass('slideWindow-position-bottom');
                t.d.position = pos;
                t.d.isOpened = false;
                t.d.isCloseable = true;
                switch (pos) {
                    case 'left':
                        t.d.$widget.addClass('slideWindow-position-left');
                        t.positionY(t.d.positionY);
                        t.d.positionX = -t.d.width;
                        t.d.$widget.css({left: t.d.positionX, right: 'auto', bottom: 'auto'});
                        t.tabWidth(t.d.tab.width);
                        break;
                    case 'right':
                        t.d.$widget.addClass('slideWindow-position-right');
                        t.positionY(t.d.positionY);
                        t.d.positionX = -t.d.width;
                        t.d.$widget.css({right: t.d.positionX, left: 'auto', bottom: 'auto'});
                        t.tabWidth(t.d.tab.width);
                        break;
                    case 'top':
                        t.d.$widget.addClass('slideWindow-position-top');
                        t.d.$widget.css({top: -t.d.$widget.outerHeight()});
                        t.d.positionX = ($('body').outerWidth() - t.d.$widget.width()) / 2;
                        t.d.$widget.css({bottom: 'auto'});
                        t.d.$widget.css({left: t.d.positionX});
                        t.tabWidth(t.d.tab.width);
                        t.d.$content.css({'min-height': 'auto'});
                        break;
                    case 'bottom':
                        t.d.$widget.addClass('slideWindow-position-bottom');
                        t.d.$widget.css({bottom: -t.d.$widget.outerHeight()});
                        t.positionX(t.d.positionX);
                        t.d.$widget.css({top: 'auto'});
                        t.d.$widget.css({left: t.d.positionX});
                        t.tabWidth(t.d.tab.width);
                        t.d.$content.css({'min-height': 'auto'});
                        break;
                }
                return t;
            }
            else
                console.warn("Only the following arguments are accepted: 'left' | 'right' | 'top' | 'bottom'.");
        }
        else
            return t.d.position;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$widget.width(width);
            return t;
        }
        return t.d.width;
    };
    p.animation = function (animation) {
        var t = this;
        if (typeof animation !== 'undefined') {
            if (typeof animation === 'object' && animation.hasOwnProperty('open') && animation.hasOwnProperty('close') && animation.hasOwnProperty('openTime') && animation.hasOwnProperty('closeTime') && Object.keys(animation).length === 4) {
                animation.closeTime = parseInt(animation.closeTime);
                animation.openTime = parseInt(animation.openTime);
                this.d.animation = animation;
                return t;
            }
            else
                console.warn('Bad parameters!');
        } else
            return t.d.animation;
    };
    p.zIndex = function (zIndex) {
        var t = this;
        if (typeof zIndex !== 'undefined' && Number(zIndex) === zIndex && zIndex % 1 === 0) {
            t.d.zIndex = zIndex;
            t.d.$widget.css({zIndex: zIndex});
            return t;
        } else {
            console.warn('Bad parameter type.', zIndex);
        }
        return t.d.zIndex;
    };
    
    $A.initBasicFunctions(SlideWindow, "SlideWindow");
})();

(function(){
    var Table = function (obj) {
        var t = this;
        var d = $A.default.table;
        t.d = {
            $widget:$('<div class="automizy-table-box"></div>'),
            $tableContainerBox:$('<div class="automizy-table-container-box"></div>'),
            $tableContainer:$('<div class="automizy-table-container"></div>'),
            $table:  $('<table cellpadding="0" cellspacing="0" border="0" class="automizy-table automizy-table-clickable collapsed"></table>'),
            $tbody:  $('<tbody></tbody>'),
            $header:  $('<tr class="automizy-table-header"></tr>'),
            $title: $('<div class="automizy-table-title"></div>'),
            $actions: $('<div class="automizy-table-actions"></div>'),
            $buttons:  $('<div class="automizy-table-buttons"></div>'),
            $perPageBox: $('<div class="automizy-table-perpage-box"></div>'),
            perPageSelect:  $A.newInput(),

            $stepPageBox: $('<div class="automizy-table-steppage-box"></div>'),
            $stepFirst: $('<div class="automizy-table-stepfirst automizy-noselect"></div>'),
            $stepBack: $('<div class="automizy-table-stepback automizy-noselect"></div>'),
            $stepNext: $('<div class="automizy-table-stepnext automizy-noselect"></div>'),
            $stepLast: $('<div class="automizy-table-steplast automizy-noselect"></div>'),
            $pageBox: $('<div class="automizy-table-pagenumber-box"></div>'),
            $page: $('<input type="number" pattern="[0-9]*" class="automizy-table-pagenumber" value="1">'),
            $pageMax: $('<span class="automizy-table-pagenumber-max">1</span>'),

            $stepPageBoxBottom: $('<div class="automizy-table-steppage-box"></div>'),
            $stepFirstBottom: $('<div class="automizy-table-stepfirst automizy-noselect"></div>'),
            $stepBackBottom: $('<div class="automizy-table-stepback automizy-noselect"></div>'),
            $stepNextBottom: $('<div class="automizy-table-stepnext automizy-noselect"></div>'),
            $stepLastBottom: $('<div class="automizy-table-steplast automizy-noselect"></div>'),
            $pageBoxBottom: $('<div class="automizy-table-pagenumber-box"></div>'),
            $pageBottom: $('<input type="number" pattern="[0-9]*" class="automizy-table-pagenumber" value="1">'),
            $pageMaxBottom: $('<span class="automizy-table-pagenumber-max">1</span>'),

            $panel:$('<div class="automizy-table-panel automizy-noselect"></div>'),
            $settingsIcon: $('<div class="automizy-table-settings-icon automizy-noselect"></div>'),
            $settingsBox: $('<div class="automizy-table-settings-box"></div>'),
            $settingsBoxTitle: $('<div class="automizy-table-settings-box-title"></div>'),
            $settingsBoxContent: $('<form class="automizy-table-settings-box-content"></form>'),
            $searchIcon: $('<div class="automizy-table-search-icon automizy-noselect"></div>'),
            $searchBox: $('<div class="automizy-table-search-box"></div>'),
            $searchBoxContent: $('<div class="automizy-table-search-box-content"></div>'),
            $searchInput:$A.newInput(),
            $exportIcon: $('<div class="automizy-table-export-icon automizy-noselect"></div>'),
            $inlineButtons: $('<td class="automizy-table-inline-buttons"></td>'),
            $inlineButtonsBox: $('<tr class="automizy-table-inline-buttons-box"></tr>'),
            $checkboxCheckAll: $('<input type="checkbox" class="automizy-table-checkall" />'),
            $automizyTableBorderCss: $('<style></style>'),
            $loadingCellContent:$('<div class="automizy-table-loading-cell-content"></div>'),
            loadingCellContent:$A.translate('<b>Loading...</b>'),
            openedRow:false,
            buttons:  [],
            inlineButtons:[],
            title: '',
            border: 'none',
            perPage: 10,
            perPageList: [5, 10, 50, 100, 1000],
            perPageLabel: $A.translate('Results per page'),
            page: 1,
            pageMax: 1,
            searchValue:'',
            borderCollapse: true,
            settings:{
                cols:[]
            },
            settingsCheckboxes:{},
            orderBy:false,
            orderDir:'asc',
            hasObject:  false,
            selectable:false,
            exportable:true,
            openableInlineBox:true,
            clickableRow:true,
            storeData:false,
            id: 'automizy-table-' + $A.getUniqueString(),
            onPerPage: function(){},
            onPageFirst: function(){},
            onPagePrev: function(){},
            onPageNext: function(){},
            onPageLast: function(){},
            onSetPage: function(){},
            onSearch:function(){},
            onHideCol:function(){},
            onShowCol:function(){},
            onSort:function(){},
            onExport:function(){},
            beforeOpenInlineBox:function(){},
            stepFunction: function(){
                if(t.d.page <= 1){
                    t.d.$stepFirst.add(t.d.$stepBack).add(t.d.$stepFirstBottom).add(t.d.$stepBackBottom).stop().fadeTo(250, 0.5);
                }else{
                    t.d.$stepFirst.add(t.d.$stepBack).add(t.d.$stepFirstBottom).add(t.d.$stepBackBottom).stop().fadeTo(250, 1);
                }
                if(t.d.page >= t.d.pageMax){
                    t.d.$stepNext.add(t.d.$stepLast).add(t.d.$stepNextBottom).add(t.d.$stepLastBottom).stop().fadeTo(250, 0.5);
                }else{
                    t.d.$stepNext.add(t.d.$stepLast).add(t.d.$stepNextBottom).add(t.d.$stepLastBottom).stop().fadeTo(250, 1);
                }
                t.d.$page.add(t.d.$pageBottom).val(t.d.page);
            }
        };
        t.init();

        t.d.$stepFirst.add(t.d.$stepFirstBottom).append('<img src="'+$A.images.pageStepFirst+'" />').click(function(){
            if(t.d.page <= 1)return false;
            t.page(1);
            t.d.stepFunction();
            t.d.onPageFirst.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepFirst.appendTo(t.d.$stepPageBox);
        t.d.$stepFirstBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepBack.add(t.d.$stepBackBottom).append('<img src="'+$A.images.pageStepBack+'" />').click(function(){
            if(t.d.page <= 1)return false;
            t.page(Math.max(t.d.page-1, 1));
            t.d.stepFunction();
            t.d.onPagePrev.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepBack.appendTo(t.d.$stepPageBox);
        t.d.$stepBackBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$page.appendTo(t.d.$pageBox);
        t.d.$pageBottom.appendTo(t.d.$pageBoxBottom);

        t.d.$page.add(t.d.$pageBottom).attr({
            max:1,
            min:1
        }).keydown(function (e) {
            var $t = $(this);
            // Allow: backspace, delete, tab, escape and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                    // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            // Enter
            if(e.keyCode === 13){
                t.d.stepFunction();
                t.d.onSetPage.apply(t, [t, t.d.$widget]);
                $t.data('old-val', $t.val());
            }
        }).keyup(function() {
            var $t = $(this);
            var val = parseInt($t.val());
            var max = parseInt($t.attr('max'));
            var min = parseInt($t.attr('min'));
            if (isNaN(val)) {
                $t.val(min);
            }
            if (val > max) {
                $t.val(max);
            } else if (val < min) {
                $t.val(min);
            }
            t.d.page = parseInt($t.val());
        }).focus(function(){
            var $t = $(this);
            $t.data('old-val', $t.val());
        }).focusout(function(){
            var $t = $(this);
            if($t.data('old-val') != $t.val()) {
                t.d.stepFunction();
                t.d.onSetPage.apply(t, [t, t.d.$widget]);
            }
        }).on('mousewheel', function(e){
            e.preventDefault();
        });

        t.d.$pageBox.add(t.d.$pageBoxBottom).append('/');

        t.d.$pageMax.appendTo(t.d.$pageBox);
        t.d.$pageMaxBottom.appendTo(t.d.$pageBoxBottom);

        t.d.$pageBox.appendTo(t.d.$stepPageBox);
        t.d.$pageBoxBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepNext.add(t.d.$stepNextBottom).append('<img src="'+$A.images.pageStepNext+'" />').click(function(){
            if(t.d.page >= t.d.pageMax)return false;
            t.page(Math.min(t.d.page+1, t.d.pageMax));
            t.d.stepFunction();
            t.d.onPageNext.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepNext.appendTo(t.d.$stepPageBox);
        t.d.$stepNextBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepLast.add(t.d.$stepLastBottom).append('<img src="'+$A.images.pageStepLast+'" />').click(function(){
            if(t.d.page >= t.d.pageMax)return false;
            t.page(t.d.pageMax);
            t.d.stepFunction();
            t.d.onPageLast.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepLast.appendTo(t.d.$stepPageBox);
        t.d.$stepLastBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepPageBox.appendTo(t.d.$actions);

        t.d.$perPageBox.appendTo(t.d.$actions);
        t.d.perPageSelect.type('select').options(t.d.perPageList).val(t.d.perPage).label(t.d.perPageLabel).width('83px').change(function(){
            t.d.perPage = this.val();
            if(t.d.storeData){
                $A.store.set(t.id()+'-per-page', t.d.perPage);
            }
            t.d.onPerPage.apply(this, [t, t.d.$widget]);
        }).drawTo(t.d.$perPageBox);
        t.d.$widget.attr('id', t.id());
        t.d.$tbody.appendTo(t.d.$table);
        t.d.$header.appendTo(t.d.$tbody);
        t.d.$title.html(t.d.title).appendTo(t.d.$widget);
        t.d.$actions.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$actions);
        t.d.$tableContainerBox.appendTo(t.d.$widget);
        t.d.$tableContainer.appendTo(t.d.$tableContainerBox);
        t.d.$table.appendTo(t.d.$tableContainer);
        t.d.$panel.appendTo(t.d.$tableContainerBox);
        t.d.$stepPageBoxBottom.appendTo(t.d.$widget);



        t.d.$settingsBox.appendTo(t.d.$panel).click(function(){
            t.d.settingsBoxCanClose = false;
        });
        t.d.$settingsBoxContent.appendTo(t.d.$settingsBox);
        t.d.$settingsBoxTitle.text($A.translate('Displayed columns')).appendTo(t.d.$settingsBoxContent);

        t.d.$searchBox.appendTo(t.d.$panel).click(function(){
            t.d.searchBoxCanClose = false;
        });
        t.d.$searchBoxContent.appendTo(t.d.$searchBox);
        t.d.$searchInput.placeholder($A.translate('Search in this list...')).enter(function(){
            t.d.searchValue = this.val();
            t.d.onSearch.apply(this, [t, t.d.$widget]);
            t.d.$searchBoxContent.stop().slideUp(250);
        }).drawTo(t.d.$searchBoxContent);

        setTimeout(function() {
            t.d.$settingsIcon.append('<img src="' + $A.images.settingsIcon + '" />').insertAfter(t.d.$settingsBox).click(function () {
                t.d.$settingsBoxContent.stop().slideToggle();
                t.d.settingsBoxCanClose = false;
            });
            t.d.$searchIcon.append('<img src="' + $A.images.searchIcon + '" />').insertAfter(t.d.$searchBox).click(function () {
                t.d.$searchBoxContent.stop().slideToggle();
                t.d.searchBoxCanClose = false;
                t.d.$searchInput.input().focus().select();
            });
            t.d.$exportIcon.append('<img src="' + $A.images.exportIcon + '" />').appendTo(t.d.$panel).click(function () {
                t.d.onExport.apply(t, [t, t.d.$widget]);
            });
        }, 1);



        $(window).click(function(){
            if(t.d.settingsBoxCanClose){
                t.d.$settingsBoxContent.stop().slideUp(250);
            }
            if(t.d.searchBoxCanClose){
                t.d.$searchBoxContent.stop().slideUp(250);
            }
            t.d.settingsBoxCanClose = true;
            t.d.searchBoxCanClose = true;
        });

        t.d.$searchBox.appendTo(t.d.$panel);
        t.d.$inlineButtons.appendTo(t.d.$inlineButtonsBox);
        t.d.$automizyTableBorderCss.appendTo('head:first');
        t.d.$checkboxCheckAll.change(function(){
            $A.d.tableRowCheckBoxClick = true;
            var checked = this.checked;
            var col = t.getColByIndex(0);
            if(typeof col.$cells === 'function'){
                col.$cells().find('input:enabled').prop('checked', checked);
            }
        });
        t.border(t.d.border);
        t.borderCollapse(t.d.borderCollapse);
        var oSelectable = false;
        if(t.d.selectable) {
            t.d.selectable = false;
            oSelectable = true;
        }

        t.d.$loadingCellContent.html(t.d.loadingCellContent);

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.$widget = obj;
                if(obj.find('.automizy-table-title').length === 1)t.title(obj.find('.automizy-table-title').html());
                if(obj.find('.automizy-table th:first input').length === 1)t.d.selectable = true;
            } else {
                if (typeof obj.id !== 'undefined')
                    t.id(obj.id);
                if (typeof obj.storeData !== 'undefined')
                    t.storeData(obj.storeData);
                if (typeof obj.title !== 'undefined')
                    t.title(obj.title);
                if (typeof obj.border !== 'undefined')
                    t.border(obj.border || t.d.border);
                if (typeof obj.borderCollapse !== 'undefined')
                    t.borderCollapse(obj.borderCollapse);
                if (typeof obj.cols !== 'undefined')
                    t.cols(obj.cols);
                if (typeof obj.rows !== 'undefined')
                    t.rows(obj.rows);
                if (typeof obj.exportable !== 'undefined')
                    t.exportable(obj.exportable);
                if (typeof obj.selectable !== 'undefined')
                    setTimeout(function(){t.selectable(obj.selectable)}, 10);
                if (typeof obj.perPageList !== 'undefined')
                    t.perPageList(obj.perPageList);
                if (typeof obj.perPage !== 'undefined')
                    t.perPage(obj.perPage);
                if (typeof obj.perPageLabel !== 'undefined')
                    t.perPageLabel(obj.perPageLabel);
                if (typeof obj.page !== 'undefined')
                    t.page(obj.page);
                if (typeof obj.pageMax !== 'undefined')
                    t.pageMax(obj.pageMax);
                if (typeof obj.searchValue !== 'undefined')
                    t.searchValue(obj.searchValue);
                if (typeof obj.onPageFirst === 'function')
                    t.onPageFirst(obj.onPageFirst);
                if (typeof obj.onPagePrev === 'function')
                    t.onPagePrev(obj.onPagePrev);
                if (typeof obj.onPageNext === 'function')
                    t.onPageNext(obj.onPageNext);
                if (typeof obj.onPageLast === 'function')
                    t.onPageLast(obj.onPageLast);
                if (typeof obj.onSetPage === 'function')
                    t.onSetPage(obj.onSetPage);
                if (typeof obj.onSort === 'function')
                    t.onSort(obj.onSort);
                if (typeof obj.onPerPage === 'function')
                    t.onPerPage(obj.onPerPage);
                if (typeof obj.onShowCol === 'function')
                    t.onShowCol(obj.onShowCol);
                if (typeof obj.onSearch === 'function')
                    t.onSearch(obj.onSearch);
                if (typeof obj.onExport === 'function')
                    t.onExport(obj.onExport);
                if (typeof obj.buttons !== 'undefined')
                    t.tableButtons(obj.buttons);
                if (typeof obj.inlineButtons !== 'undefined')
                    t.inlineButtons(obj.inlineButtons);
                if (typeof obj.openableInlineBox !== 'undefined')
                    t.openableInlineBox(obj.openableInlineBox);
                if (typeof obj.clickableRow !== 'undefined')
                    t.clickableRow(obj.clickableRow);
                if (typeof obj.beforeOpenInlineBox === 'function')
                    t.beforeOpenInlineBox(obj.beforeOpenInlineBox);
                if (typeof obj.loadingCellContent !== 'undefined')
                    t.loadingCellContent(obj.loadingCellContent);
                t.initParameter(obj);

            }
        }

        if(oSelectable) {
            t.selectable(true);
        }
        t.d.stepFunction();
    };

    var p = Table.prototype;

    p.table = function () {
        return this.d.$table;
    };
    p.tbody = function () {
        return this.d.$tbody;
    };

    p.storeData = function(storeData){
        var t = this;
        if (typeof storeData !== 'undefined') {
            t.d.storeData = $A.parseBoolean(storeData);
            return t
        }
        return t.d.storeData;
    };

    p.onPageFirst = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageFirst = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageFirst.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPagePrev = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPagePrev = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPagePrev.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPageNext = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageNext = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageNext.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPageLast = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageLast = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageLast.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onSetPage = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onSetPage = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onSetPage.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPerPage = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPerPage = func;
        } else {
            return t.d.onPerPage.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onSearch = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onSearch = func;
        } else {
            return t.d.onSearch.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onHideCol = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onHideCol = func;
        } else {
            return t.d.onHideCol.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onShowCol = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onShowCol = func;
        } else {
            return t.d.onShowCol.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onSort = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onSort = func;
        } else {
            if(t.d.hasObject)t.d.onSort.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onExport = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onExport = func;
        } else {
            if(t.d.hasObject)t.d.onExport.apply(t, [t, t.d.$widget]);
        }
        return t;
    };

    p.border = function(border){
        var t = this;
        if (typeof border !== 'undefined') {
            t.d.border = border;
            t.d.$automizyTableBorderCss.text('#'+t.id()+' .automizy-table, #'+t.id()+' .automizy-table td, #'+t.id()+' .automizy-table th{border: '+border+'}');
            return t;
        }
        return t.d.border;
    };
    //nem megy, mindig collapsed
    p.borderCollapse = function (borderCollapse) {
        var t = this;
        if (typeof borderCollapse !== 'undefined') {
            t.d.borderCollapse = $A.parseBoolean(borderCollapse);
            t.table().removeClass('collapsed');
            if(t.d.borderCollapse){
                t.table().addClass('collapsed');
            }
            return t;
        }
        return t.d.borderCollapse;
    };
    p.title = function (title) {
        var t = this;
        if (typeof title !== 'undefined') {
            t.d.title = title;
            t.d.$title.html(title);
            return t;
        }
        return t.d.title;
    };
    p.searchValue = function (searchValue) {
        var t = this;
        if (typeof searchValue !== 'undefined') {
            t.d.searchValue = searchValue;
            t.d.$searchInput.value(t.d.searchValue);
            return t;
        }
        return t.d.searchValue;
    };
    p.perPageList = function (perPageList) {
        var t = this;
        if (typeof perPageList !== 'undefined') {
            t.d.perPageList = perPageList;
            t.d.perPageSelect.options(perPageList);
            t.perPage(t.perPage());
            return t;
        }
        return t.d.perPageList;
    };
    p.perPage = function (perPage) {
        var t = this;
        if (typeof perPage !== 'undefined') {
            perPage = parseInt(perPage);
            if($.inArray(perPage, t.d.perPageList) < 0){
                perPage = t.d.perPageList[0] || 0;
            }
            t.d.perPage = perPage;
            t.d.perPageSelect.val(perPage);
            if(t.d.storeData){
                $A.store.set(t.id()+'-per-page', t.d.perPage);
            }
            if(t.d.hasObject)t.d.onPerPage.apply(t.d.perPageSelect, [t, t.d.$widget]);
            return t;
        }
        return t.d.perPage;
    };
    p.perPageLabel = function (perPageLabel) {
        var t = this;
        if (typeof perPageLabel !== 'undefined') {
            t.d.perPageLabel = perPageLabel;
            t.d.perPageSelect.label(perPageLabel);
            return t;
        }
        return t.d.perPageLabel;
    };
    p.page = function (page) {
        var t = this;
        if (typeof page !== 'undefined') {
            t.d.page = parseInt(page);
            t.d.$page.add(t.d.$pageBottom).val(t.d.page);
            return t;
        }
        return t.d.page;
    };
    p.pageMax = function (pageMax) {
        var t = this;
        if (typeof pageMax !== 'undefined') {
            t.d.pageMax = parseInt(pageMax);
            t.d.$pageMax.add(t.d.$pageMaxBottom).text($A.numberFormat(t.d.pageMax));
            t.d.$page.add(t.d.$pageBottom).attr('max', t.d.pageMax);
            return t;
        }
        return t.d.pageMax;
    };
    p.selectable = function (selectable) {
        var t = this;
        if (typeof selectable !== 'undefined') {
            var oSelectable = t.d.selectable;
            t.d.selectable = $A.parseBoolean(selectable);
            if(t.d.selectable && !oSelectable){
                t.table().addClass('checkboxed');
                var cbcagac = t.addCol({name:'checkbox-column', html:t.d.$checkboxCheckAll, index:0});
                cbcagac.$cells().eq(0).click(function(){
                    if(!$A.d.tableRowCheckBoxClick){
                        $(this).find('input:first').each(function(){
                            this.checked = !this.checked;
                            $(this).trigger('change');
                        });
                    }
                    $A.d.tableRowCheckBoxClick = false;
                });
                var $cbcagac = cbcagac.$cells().slice(1);
                $cbcagac.html(function(){
                    var id = $(this).closest('tr').data('recordId') || 0;
                    return $('<input type="checkbox" class="automizy-table-rowcheck" onClick="console.log(2)" value="'+id+'" />');
                }).click(function(){

                });
            }else if(!t.d.selectable && oSelectable){
                t.table().removeClass('checkboxed');
                t.deleteCol(0);
            }
            return t;
        }
        return t.d.selectable;
    };
    p.exportable = function (exportable) {
        var t = this;
        if (typeof exportable !== 'undefined') {
            t.d.exportable = $A.parseBoolean(exportable);
            if (exportable === false)
                t.d.$exportIcon.hide();
            return t;
        }
        return t.d.exportable;
    };
    p.openableInlineBox = function (openableInlineBox) {
        var t = this;
        if (typeof openableInlineBox !== 'undefined') {
            t.d.openableInlineBox = $A.parseBoolean(openableInlineBox);
            if (openableInlineBox === false) {
                t.d.$inlineButtonsBox.hide();
            }else{
                t.d.$inlineButtonsBox.show();
            }
            return t;
        }
        return t.d.openableInlineBox;
    };
    p.clickableRow = function (clickableRow) {
        var t = this;
        if (typeof clickableRow !== 'undefined') {
            t.d.clickableRow = $A.parseBoolean(clickableRow);
            if (clickableRow === false) {
                t.d.$table.removeClass('automizy-table-clickable');
            }else{
                t.d.$table.addClass('automizy-table-clickable');
            }
            return t;
        }
        return t.d.clickableRow;
    };
    p.beforeOpenInlineBox = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.beforeOpenInlineBox = func;
            return this;
        }
        return this;
    };
    p.selectedRows = function(){
        var t = this;
        var rows = [];
        var ids = t.selectedIds();
        for(var i = 0; i < ids.length; i++){
            rows.push(t.getRowByRecordId(ids[i]));
        }
        return rows;
    };
    p.selectedRow = function(){
        var t = this;
        if (typeof t.selectedId()==='undefined')
            return false;
        return t.getRowByRecordId(t.selectedId());
    };
    p.selectedIds = function(){
        var t = this;
        var col = t.getColByIndex(0);
        if(typeof col.$cells === 'function'){
            return col.$cells().find('input[type="checkbox"][value]:checked').map(function(){return this.value}).get();
        }
        return [];
    };
    p.selectedId = function(){
        var t = this;

        var col = t.getColByIndex(0);
        if(typeof col.$cells === 'function'){
            return col.$cells().find('input[type="checkbox"][value]:checked:first').val();
        }
        return [];
    };
    p.openedRow = function(openedRow){
        var t = this;
        if (typeof openedRow !== 'undefined') {
            t.d.openedRow = openedRow;
            return t;
        }
        return t.d.openedRow;
    };
    
    p.openedId = function(){
        var t = this;
        if (t.d.openedRow!==false)
            return t.d.openedRow.recordId();
        return false;
    };

    p.getCell = function (colIndex, rowIndex) {
        var t = this;
        var $cell = t.table().find('tr:first').siblings().addBack().eq(rowIndex).find('td, th').eq(colIndex);
        return $A.tableCell($cell);
    };
    
    
    
    p.getCells = function (type) {
        var t = this;
        var tableId = t.id();

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return t.table().find('th, td');
        } else {
            var tableDom = t.table()[0];
            var cells = [];
            for(var i = 0; i < tableDom.rows.length; i++){
                for(var j = 0; j < tableDom.rows[i].cells.length; j++){
                    var cell = tableDom.rows[i].cells[j];
                    if (type === 'DOM'){
                        cells.push(cell);
                    }else{
                        cells.push($A.tableCell(cell));
                    }
                }
            }
            return cells;
        }
    };
    p.$getCells = function () {
        return this.getCells('jQuery');
    };
    p.getDomCells = function () {
        return this.getCells('DOM');
    };
    
    
    
    p.getRowByIndex = function (index) {
        var $row = this.table().find('tr:first').siblings().addBack().eq(index);
        if($row.length === 0){
            return false;
        }
        return $A.tableRow($row);
    };
    p.getRowByRecordId = function (recordId) {
        var t = this;
        var $row = t.table().find('tr:first').siblings().addBack().filter(function(){
            return $(this).data('recordId') == recordId;
        });
        if($row.length === 0){
            return false;
        }
        return $A.tableRow($row);
    };
    p.getColByIndex = function (index) {
        var $col = this.table().find('th:first').siblings().addBack().eq(index);
        if($col.length === 0){
            return false;
        }
        return $A.tableCol($col);
    };
    p.getColByName = function (name) {
        var t = this;
        var $col = t.table().find('th:first').siblings().addBack().filter(function(){
            return $(this).data('name') == name;
        });
        if($col.length === 0){
            return false;
        }
        return $A.tableCol($col);
    };
    
    p.addCols = function (arr) {
        var t = this;
        if (!$.isArray(arr))
            return t.addCols([arr]);
        
        var table = t.table()[0];
        t.d.settings.cols = [];
        for(var i = 0; i < arr.length; i++){
            var obj = arr[i];
            var index = -1;
            if(typeof obj.index !== 'undefined'){
                index = parseInt(obj.index);
            }
            for (var j = 0; j < table.rows.length; j++) {
                var cell = table.rows[j].insertCell(index);

                var visibility = (obj.visibility === false)?false:true;
                if(t.d.storeData && typeof $A.store.get(t.id()+"ActiveCols") !== 'undefined'){
                    var activeCols = $A.store.get(t.id()+"ActiveCols");
                    if(typeof activeCols[obj.name] !== 'undefined') {
                        visibility = $A.parseBoolean(activeCols[obj.name]);
                    }
                }

                if(visibility === false){
                    cell.style.display = 'none';
                }
                if(j === 0){
                    var $cell = $(cell);
                    if(t.d.selectable && $cell.siblings().length <= 0){
                        $(table.rows[0].insertCell(0)).replaceWith(function(){
                            var $th = $("<th />");
                            t.d.$checkboxCheckAll.appendTo($th);
                            /*var th = $th[0];
                            th.automizyData = th.automizyData || {};
                            th.automizyData.name = 'automizyCheckboxCheckAll';*/
                            return $th;
                        });
                    }

                    if(typeof obj.name === 'undefined'){
                        obj.name = $A.getUniqueString();
                    }
                    if(obj.hideable !== false){
                        t.addSettingsCheckbox({
                            name:obj.name,
                            label:obj.text,
                            checked:visibility
                        });
                    }

                    $cell.replaceWith(function(){
                        var $th = $("<th />").append($(this).contents());
                        if(visibility === false){
                            $th.hide();
                        }
                        $th.data('name', obj.name);
                        var th = $th[0];
                        th.automizyData = th.automizyData || {};
                        th.automizyData.name = obj.name;

                        if (typeof obj.order !== 'undefined') {
                            t.d.orderBy = obj.name;
                            t.d.orderDir = obj.order;
                        }
                        if(typeof obj.text !== 'undefined'){
                            $th.append(obj.text);
                        }
                        if(typeof obj.html !== 'undefined'){
                            if(obj.html instanceof jQuery){
                                obj.html.appendTo($th);
                            }else{
                                $th.append(obj.html);
                            }
                        }
                        if(obj.sortable !== false) {
                            var $sort = $('<span class="automizy-table-sort-arrow automizy-noselect"></span>');

                            $th.click(function(){
                                var $thth = $(this);
                                $thth.siblings().find('.automizy-table-sort-arrow').removeClass('asc desc');
                                var thObj = t.d.settings.cols.filter(function ( elem ) {return elem.name === $thth.data('name');})[0];
                                if(thObj.order === 'asc'){
                                    thObj.order = 'desc';
                                    $sort.switchClass( "asc", "desc", 250, "linear" );
                                }else{
                                    thObj.order = 'asc';
                                    $sort.switchClass( "desc", "asc", 250, "linear" );
                                }
                                t.d.orderBy = thObj.name;
                                t.d.orderDir = thObj.order;
                                t.d.onSort.apply(thObj, [t, t.d.$widget]);
                            });

                            if (typeof obj.order !== 'undefined') {
                                $sort.addClass(obj.order);
                            }
                            $sort.appendTo($th);
                        }

                        obj.col = $A.tableCol($th);
                        t.d.settings.cols.push(obj);
                        return $th;
                    });
                }
            }
        }
        return t;
    };
    p.addSettingsCheckbox = function(obj){
        var t = this;
        var name = obj.name || $A.getUniqueString();
        var label = obj.label || name;
        var checked = obj.checked || false;
        t.d.settingsCheckboxes[name] = $A.input({
            type:'checkbox',
            label:label,
            name:name,
            labelPosition:'right',
            checked:checked,
            target:t.d.$settingsBoxContent,
            change:function(){
                var name = this.name();
                var col = t.getColByName(name);
                if(!this.checked()){
                    col.hide();
                    t.d.onHideCol.apply(col, [t, t.widget()]);
                }else{
                    col.show();
                    t.d.onShowCol.apply(col, [t, t.widget()]);
                }
                if(t.d.storeData){
                    $A.store.set(t.id()+'ActiveCols', t.d.$settingsBoxContent.serializeObject(true));
                }
            }
        });
        return t;
    };
    p.getSettingsCheckbox = function(name){
        return this.d.settingsCheckboxes[name];
    };
    p.removeSettingsCheckbox = function(name){
        var t = this;
        var settingCheckbox = t.d.settingsCheckboxes[name];
        if(typeof settingCheckbox !== 'undefined' && typeof settingCheckbox.remove === 'function') {
            settingCheckbox.remove();
        }
        return t;
    };
    p.addCol = function (obj) {
        var t = this;
        if (typeof obj === 'undefined') {
            return $A.newTableCol();
        }
        obj.table = obj.table || t;
        obj.newCol = true;
        return $A.tableCol(obj);
    };
    p.cols = function(arr){
        var t = this;
        if (typeof arr === 'undefined') {
            var cols = [];
            this.table().find('th:first').siblings().addBack().each(function(){
                cols.push($A.tableCol($(this)));
            });
            return cols;
        }
        t.deleteCols();
        return t.addCols(arr);
    };
    p.deleteCols = function(arr){
        var t = this;
        var table = t.table()[0];
        if (typeof arr !== 'undefined'){
            var sortArr = arr.sort();
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = sortArr.length - 1; j >= 0; j--) {
                    if(i === 0){
                        t.removeSettingsCheckbox($(table.rows[i].cells[j]).attr('name'));
                    }
                    table.rows[i].deleteCell(sortArr[j]);
                }
            }
            return t;
        }

        var cols = t.cols();
        for(var i = 0; i < cols.length; i++){
            t.removeSettingsCheckbox(cols[i].name());
        }
        t.removeSettingsCheckbox($(table.rows[i].cells[j]).attr('name'));

        var lastCol = table.rows[0].cells.length - 1;
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = lastCol; j > 0; j--) {
                table.rows[i].deleteCell(j);
            }
        }
        return t;
    };
    p.deleteCol = function(index){
        var t = this;
        return t.deleteCols([index]);
    };
    
    p.addRows = function (arr) {
        var t = this;
        if (!$.isArray(arr)){
            return t.addRows([arr]);
        }

        $A.runFunctions($A.events.table.functions.beforeAddRows, t, [t, arr]);
        
        var table = t.table()[0];
        for(var i = 0; i < arr.length; i++){
            var recordId = 0;
            var rowArr = arr[i];
            var rowIndex = table.rows.length;
            if (!$.isArray(arr[i])){
                if(typeof rowArr.index !== 'undefined'){
                    rowIndex = parseInt(rowArr.index);
                    if(rowIndex < 1)rowIndex = 1;
                }
                recordId = rowArr.recordId || recordId;
                rowArr = rowArr.values || [];
            }
            var row = table.insertRow(rowIndex);
            $(row).data('recordId', recordId).click(function(){
                var $t = $(this);
                setTimeout(function(){
                    if(!t.d.isCheckboxClick) {
                        t.openedRow($A.tableRow($t));
                        if(t.d.beforeOpenInlineBox.apply($t, [t.openedRow(), t.d.openedRow.recordId()]) !== false && $A.runFunctions($A.events.table.functions.beforeOpenInlineBox, $t, [$t, t.openedRow(), t.d.openedRow.recordId()]) !== false){
                            if (t.d.openableInlineBox) {
                                t.d.$inlineButtons.attr('colspan', t.table()[0].rows[0].cells.length - t.table().find('tr:first th:not(:visible)').length);
                                t.d.$inlineButtonsBox.insertAfter($t);
                                t.d.$inlineButtonsBox.show();
                            }
                        }
                    }
                    t.d.isCheckboxClick = false;
                }, 10);
            });

            if (!$.isArray(rowArr)){
                var newArr = [];
                for (var j = t.d.selectable?1:0; j < table.rows[0].cells.length; j++) {
                    var ad = table.rows[0].cells[j].automizyData;
                    if(typeof ad === 'undefined'){
                        ad = {};
                    }
                    var a = rowArr[ad.name];
                    newArr.push((typeof a !== 'undefined')?a:'');
                }
                rowArr = newArr;
            }

            if(t.d.selectable){
                rowArr.unshift({
                    html:'<input type="checkbox" class="automizy-table-rowcheck" onClick="AutomizyJs.d.tableRowCheckBoxClick = true" value="'+recordId+'" />',
                    click:function () {
                        t.d.isCheckboxClick = true;
                        if(!$A.d.tableRowCheckBoxClick){
                            $(this).find('input:first').each(function(){
                                this.checked = !this.checked;
                                $(this).trigger('change');
                            });
                        }
                        $A.d.tableRowCheckBoxClick = false;
                    }
                });
            }
            for (var j = 0; j < table.rows[0].cells.length; j++) {
                var cell = row.insertCell(j);
                if(j === 0){
                    cell.className = 'automizy-main-cell';
                }

                var value = rowArr[j];
                if(typeof value === 'undefined' || !value){
                    value = '';
                }
                if (typeof value.drawTo === 'function') {
                    value.drawTo($(cell));
                }else if(value instanceof jQuery){
                    value.appendTo($(cell));
                }else if(value !== null && typeof value === 'object'){
                    if(typeof value.html !== 'undefined'){
                        cell.innerHTML = value.html;
                    }
                    if(typeof value.text !== 'undefined'){
                        cell.textContent = value.text;
                        cell.title = value.text;
                    }
                    cell.onclick = value.click || function(){};
                }else{
                    cell.textContent = value;
                    cell.title = value;
                }

                var jMod = t.d.selectable ? j-1 : j;
                if(typeof t.d.settings.cols[jMod] !== 'undefined'){
                    if(typeof t.d.settings.cols[jMod].cellFunction === 'function') {
                        if(typeof t.d.settings.cols[jMod].cellData !== 'undefined') {
                            cell.automizyData = t.d.settings.cols[jMod].cellData;
                        }
                        t.d.settings.cols[jMod].cellFunction.apply(cell, [cell, value, i, j]);
                    }
                    if(typeof t.d.settings.cols[jMod].mainCell !== 'undefined') {
                        if($A.parseBoolean(t.d.settings.cols[jMod].mainCell)){
                            cell.className = 'automizy-main-cell';
                        }
                    }
                }

                if(table.rows[0].cells[j].style.display === 'none'){
                    cell.style.display = 'none'
                }
            }
        }
        $A.runFunctions($A.events.table.functions.addRows, t, [t, table.rows]);
        return t;
    };
    p.addRow = function (arr) {
        var t = this;
        if (typeof arr === 'undefined') {
            return $A.newTableRow();
        } else if (typeof arr === 'object' || typeof arr === 'array') {
            return t.addRows(arr);
        }
        return t;
    };
    p.rows = function(arr){
        var t = this;
        if (typeof arr === 'undefined') {
            var rows = [];
            this.table().find('tr:first').siblings().addBack().each(function(){
                rows.push($A.tableRow($(this)));
            });
            return rows;
        }
        t.deleteRows();
        return t.addRows(arr);
    };
    p.rowCount = function(){
        return this.rows().length-1;
    };
    p.deleteRows = function(arr){
        var t = this;
        var table = t.table()[0];
        if (typeof arr !== 'undefined'){
            var sortArr = arr.sort();
            for (var i = (sortArr.length - 1); i >= 0; i--) {
                table.deleteRow(sortArr[i]);
            }
            return t;
        }
        
        var lastRow = table.rows.length - 1;
        for (var i = lastRow; i > 0; i--) {
            table.deleteRow(i);
        }
        return t;
    };
    p.deleteRow = function(index){
        var t = this;
        return t.deleteRows([index]);
    };

    p.setButtonsStatus = function(){
        var t = this;
        var buttons = t.buttons();
        for(var i = 0; i < buttons.length; i++){
            var button = buttons[i];
            if(button.data('condition') !== 'undefined'){
                var condition = button.data('condition');
                if(condition === 'select-one'){
                    if(t.selectedIds().length === 1){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }else if(condition === 'select-more-than-zero'){
                    if(t.selectedIds().length >= 1){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }else if(condition === 'select-between-two-and-four'){
                    if(t.selectedIds().length >= 2 && t.selectedIds().length <= 4){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }
            }
        }
        return t;
    };

    p.tableButtons = function(arr){
        var t = this;
        if (typeof arr === 'undefined')
            return t.d.buttons;
        for(var i = 0; i < arr.length; i++){
            if(arr[i].condition !== 'undefined'){
                arr[i].data = arr[i].data || {};
                arr[i].data.condition = arr[i].condition;
            }
        }
        t.buttons(arr);
        t.table().on('change', 'input.automizy-table-rowcheck, input.automizy-table-checkall', function(){
            t.setButtonsStatus();
        });
        return t;
    };
    p.inlineButtons = function(inlineButtons){
        var t = this;
        if(typeof inlineButtons !== 'undefined'){
            t.d.inlineButtons = inlineButtons;
            for(var i = 0; i < inlineButtons.length; i++){
                var inlineButton = inlineButtons[i];
                var $button = $('<a>'+inlineButton.text+'</a>').data('click', inlineButton.click || function(){}).click(function(){
                    var $t = $(this);
                    var $row = $t.closest('tr').prev();
                    var row = $A.tableRow($row);
                    t.openedRow(row);
                    $t.data('click').apply(row, [t, t.d.$widget]);
                }).appendTo(t.d.$inlineButtons);
                if(!inlineButton.permission){
                    $button.wrap('<span class="automizy-permission-trap"></span>');
                }
            }
            return t;
        }
        return t.d.inlineButtons;
    };
    p.loading = function(){
        var t = this;
        if(t.table().find('tr.automizy-table-loading-row').length > 0){
            return t;
        }
        //setTimeout(function(){
            t.deleteRows();
            t.setButtonsStatus();
            var $tr = $('<tr class="automizy-table-loading-row"></tr>');
            var $td = $('<td colspan="'+t.getRowByIndex(0).$cells().length+'"></td>').appendTo($tr);
            t.d.$loadingCellContent.appendTo($td);
            $tr.appendTo(t.table());
            $A.runFunctions($A.events.table.functions.loading, t, [t]);
        //}, 10);
        return t;
    };
    p.loadingCellContent = function(loadingCellContent){
        var t = this;
        if (typeof loadingCellContent !== 'undefined') {
            if (loadingCellContent instanceof jQuery) {
                loadingCellContent = loadingCellContent.clone();
            }
            t.d.loadingCellContent = loadingCellContent;
            t.d.$loadingCellContent.html(loadingCellContent);
            return t;
        }
        return t.d.loadingCellContent;
    };
    p.addButton = p.addButton || function (obj) {
            var t = this;
            if (typeof t.d.buttons === 'undefined') {
                return t;
            }
            if (typeof obj !== 'undefined') {
                if (obj instanceof $A.m.Button || obj instanceof $A.m.Input) {
                    obj.drawTo(t.d.$buttons || t.d.$widget);
                    obj.thin(true);
                } else {
                    obj.thin = true;
                    obj.target = obj.target || t.d.$buttons || t.d.$widget;
                    var button = $A.newButton(obj);
                    t.d.buttons.push(button);
                }
                t.d.$widget.addClass('has-button');
                return t;
            }
            var button = $A.newButton();
            t.d.buttons.push(button);
            button.drawTo(t.d.$buttons || t.d.$widget);
            return button;
        };

    $A.initBasicFunctions(Table, "Table", ['addRows', 'beforeAddRows', 'beforeOpenInlineBox', 'loading']);

})();

(function(){
    var TableRow = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<tr class="automizy-table-row"></tr>'),
            table:false,
            hasObject: false
        };
        t.init();

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.index(obj.index());
                t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
                if(typeof obj.data('recordId') !== 'undefined')t.recordId(obj.data('recordId'));
                if(typeof obj.attr('id') !== 'undefined')t.id(obj.attr('id'));
            } else {
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.recordId !== 'undefined')
                    t.recordId(obj.recordId);
                t.initParameter(obj);
            }
        }
    };
    var p = TableRow.prototype;
    
    p.table = function (table) {
        var t = this;
        if (typeof table !== 'undefined') {
            t.d.table = table;
            var rowIndex = t.d.index;
            var trs = t.d.table.table().find('tr:first').siblings().addBack();
            var id = trs.eq(rowIndex).attr('id') || 0;
            
            if(typeof $A.getTableRow(id) === 'undefined'){
                t.$widget().insertBefore(trs.eq(rowIndex));
            }
            return t;
        }
        if (!t.d.table) {
            t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
        }
        return t.d.table;
    };
    p.index = function () {
        return this.widget().index();
    };
    p.recordId = function () {
        return this.widget().data('id') || this.widget().data('recordId') || this.widget().find('td:first input').val() || 0;
    };

    p.$checkbox = function(){
        return this.d.$widget.find('.automizy-table-rowcheck:first');
    };
    p.getCellByColName = function(name){
        var t = this;
        if(typeof name === 'undefined'){
            return false;
        }
        var cells = t.cells();
        for(var i = 0; i < cells.length; i++){
            if(cells[i].col().name() == name){
                cell = cells[i];
                break;
            }
        }
        return cell || false;
    }
    
    p.cells = function (type) {
        var t = this;
        var table = t.table();
        var tableId = table.id();
        var index = t.index();
        var colCount = table.table()[0].rows[0].cells.length;

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return t.widget().find('th, td');
        } else if (type === 'DOM') {
            return table.table()[0].rows[index].cells;
        }

        var aCells = [];
        for (var i = 0; i < colCount; i++) {
            var cell = table.table()[0].rows[index].cells[i];
            aCells.push($A.tableCell(cell));
        }
        return aCells;
    };
    p.$cells = function () {
        return this.cells('jQuery');
    };
    p.domCells = function () {
        return this.cells('DOM');
    };
    
    $A.initBasicFunctions(TableRow, "TableRow");

})();

(function(){
    var TableCol = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<th class="automizy-table-col"></th>'),
            table: false,
            hasObject: false,
            newCol: false,
            html:'',
            text:'',
            active:true
        };
        t.init();

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.d.index = obj.index();
                t.d.text = obj.text();
                t.d.html = obj.html();
                t.d.active = obj.css('display') !== 'none';
                //t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
                if(typeof obj.data('name') !== 'undefined')t.name(obj.data('name'));
                if(typeof obj.attr('id') !== 'undefined')t.id(obj.attr('id'));
            } else {
                if (typeof obj.newCol !== 'undefined')
                    t.d.newCol = obj.newCol;
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.name !== 'undefined')
                    t.name(obj.name);
                if (typeof obj.html !== 'undefined')
                    t.html(obj.html);
                if (typeof obj.text !== 'undefined')
                    t.text(obj.text);
                if (typeof obj.active !== 'undefined')
                    t.active(obj.active);
                t.initParameter(obj);
            }
        }
    };
    var p = TableCol.prototype;

    p.table = function (table) {
        var t = this;
        if (typeof table !== 'undefined') {
            t.d.table = table;
            var colIndex = t.d.index;
            var $cols = t.d.table.table().find('th, td').eq(0).siblings().addBack();
            var colLen = $cols.length;
            var id = $cols.eq(colIndex).attr('id') || 0;
            
            //if(typeof $A.getTableCol(id) === 'undefined'){
            if(t.d.newCol){
                t.$cells().each(function (index) {
                    var $this = $(this);
                    var $clone = $this.clone().empty().removeAttr('id');
                    var $row = $this.closest('tr');
                    if(index === 0){
                        t.d.$widget = $clone;
                        t.d.$widget.attr('id', t.id());
                    }
                    if(colIndex >= colLen){
                        $clone.insertAfter($row.find('th, td').eq(colLen - 1));
                    }
                    else{
                        if(colIndex < 0){
                            colIndex = 0;
                        }
                        $clone.insertBefore($row.find('th, td').eq(colIndex));
                    }
                });
            }
            return t;
        }
        if (!t.d.table) {
            t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
        }
        return t.d.table;
    };
    p.index = function (index) {
        var t = this;
        if (typeof index !== 'undefined') {
            if (t.d.hasObject) {
                t.$cells().each(function () {
                    var $this = $(this);
                    var row = $this.closest('tr');
                    $this.insertBefore(row.find('th, td').eq(index));
                })
            }
            t.d.index = index;
            return t;
        }
        t.d.index = t.widget().index();
        return t.d.index;
    };
    p.text = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widget.text(text);
            t.d.html=text;
            t.d.$widget.html(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widget.html(html);
            t.d.text=t.d.$widget.text();
            return t;
        }
        return t.d.html;
    };
    p.name = function (name) {
        var t = this;
        if (typeof name !== 'undefined') {
            t.d.name = name;
            t.d.$widget.data('name', name);
            return t;
        }
        return t.d.name;
    };
    p.active = function (active) {
        var t = this;
        if (typeof active !== 'undefined') {
            t.d.active = $A.parseBoolean(active);
            if(t.d.active){
                t.show();
            }else{
                t.hide();
            }
            return t;
        }
        return t.d.active;
    };
    p.cells = function (type) {
        var t = this;
        var table = t.table();
        var tableId = table.id();
        var rowCount = table.table()[0].rows.length;
        var index = t.index();

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return table.table().find('th:nth-child(' + (index + 1) + '), td:nth-child(' + (index + 1) + ')');
        } else if (type === 'DOM') {
            var cells = [];
            var rows = table.table()[0].rows;
            for(var i = 0; i < rows.length; i++){
                cells.push(rows[i].cells[index]);
            }
            return cells;
            //return table.table()[0].rows[i].cells;
        }

        var aCells = [];
        for (var i = 0; i < rowCount; i++) {
            var cell = table.table()[0].rows[i].cells[index];
            aCells.push($A.tableCell(cell));
        }
        return aCells;
    };
    p.$cells = function () {
        return this.cells('jQuery');
    };
    p.domCells = function () {
        return this.cells('DOM');
    };

    p.hide = function(){
        this.$cells().hide();
        this.d.active = false;
        return this;
    };
    p.show = function(){
        this.$cells().show();
        this.d.active = true;
        return this;
    };
    p.remove = function () {
        this.$cells().remove();
        delete $A.d["tablecols"][this.id()];
        return true;
    };

    $A.initBasicFunctions(TableCol, "TableCol");

})();

(function(){
    var TableCell = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<td class="automizy-table-cell"></td>'),
            hasObject: false
        };
        t.init();
        
        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.d.html = obj.html();
                t.d.text = obj.text();
                t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
            } else {
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.recordId !== 'undefined')
                    t.recordId(obj.recordId);
                t.initParameter(obj);
            }
        }
    };
    var p = TableCell.prototype;

    p.table = function () {
        var $table = this.widget().closest('table');
        if($table.hasClass('automizy-table')){
            return $A.getTable($table.closest('.automizy-table-box').attr('id')) || $table;
        }
        return $table;
    };
    
    p.row = function () {
        return $A.tableRow(this.table().table().find('tr:first').siblings().addBack().eq(this.widget().parent().index()));
    };
    p.col = function () {
        return $A.tableCol(this.table().table().find('th, td').eq(0).siblings().addBack().eq(this.widget().index()));
    };
    p.index = function () {
        return [this.col().index(), this.row().index()];
    };
    p.recordId = function () {
        return this.row().recordId();
    };
    p.text = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widget.text(text);
            t.d.html=text;
            t.d.$widget.html(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widget.html(html);
            t.d.text=t.d.$widget.text();
            return t;
        }
        return t.d.html;
    };
    
    $A.initBasicFunctions(TableCell, "TableCell");

})();

(function(){
    var SelectOptionBox = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<span class="automizy-select-option-box-widget"></span>'),
            $searchBox: $('<div class="automizy-select-search-box"></div>'),
            searchInput: $A.newInput({
                type:'text',
                width:'100%',
                placeholder:$A.translate('Search for ...'),
                keyup:function(){
                    if(t.selectModule() !== false){
                        t.selectModule().search(this.val());
                    }
                }
            }),
            $optionBox: $('<div class="automizy-select-option-box"></div>'),
            $options:$('<table border="0" cellpadding="0" cellspacing="0" class="automizy-select-option-table"></table>'),
            selectModule:false,
            maxHeight: '250px',
            position:'auto',
            id: 'automizy-select-option-box-' + $A.getUniqueString()
        };
        t.f = {};
        t.init();

        t.d.$searchBox.appendTo(t.d.$widget).hide();
        t.d.searchInput.drawTo(t.d.$searchBox);
        t.d.$optionBox.appendTo(t.d.$widget);
        t.d.$options.appendTo(t.d.$optionBox);

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };

    var p = SelectOptionBox.prototype;

    p.selectModule = function (selectModule) {
        var t = this;
        if (typeof selectModule !== 'undefined') {
            t.d.selectModule = selectModule;
            return t;
        }
        return t.d.selectModule;
    };
    p.maxHeight = function (maxHeight) {
        var t = this;
        if (typeof maxHeight !== 'undefined') {
            t.d.maxHeight = maxHeight;
            t.widget().css('max-height', t.d.maxHeight);
            t.rePositioning();
            return t;
        }
        return t.d.maxHeight;
    };
    p.position = function (position) {
        var t = this;
        if (typeof position !== 'undefined') {
            t.d.position = position;
            t.rePositioning();
            return t;
        }
        return t.d.position;
    };
    p.rePositioning = function(){
        var t = this;

        var position = t.position();
        var maxHeight = parseInt(t.maxHeight());
        var $input = t.selectModule().widget();
        var inputOffset = $input.offset();
        var inputOffsetTop = inputOffset.top;
        var inputOffsetLeft = inputOffset.left;
        var inputHeight = $input.height();
        var inputWidth = $input.outerWidth();
        var windowHeight = window.innerHeight;

        if(position === 'auto'){
            if(inputOffsetTop + inputHeight + maxHeight >= windowHeight){
                position = 'top';
            }else{
                position = 'bottom';
            }
        }

        if(position === 'top'){
            t.widget().css({
                bottom:(windowHeight - inputOffsetTop) + 'px',
                left:inputOffsetLeft + 'px',
                top:'auto',
                width:inputWidth + 'px'
            })
        }else{
            t.widget().css({
                bottom:'auto',
                left:inputOffsetLeft + 'px',
                top:(inputOffsetTop + inputHeight) + 'px',
                width:inputWidth + 'px'
            })
        }

        return t;
    };



    p.beforeOpen = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('beforeOpen', func, name, life);
        } else {
            var a = t.runFunctions('beforeOpen');
            t.returnValue(!(t.selectModule().disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.beforeClose = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('beforeClose', func, name, life);
        } else {
            var a = t.runFunctions('beforeClose');
            t.returnValue(!(t.selectModule().disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.open = function (func, name, life) {
        var t = this;
        $A.closeAllSelectBox();
        $A.activeSelectBox = t;
        if(t.d.opened){
            return t;
        }
        t.d.opened = true;
        if (typeof func === 'function') {
            t.addFunction('open', func, name, life);
        } else {
            if (t.beforeOpen().returnValue() !== false) {
                t.rePositioning();
                t.show();
                t.runFunctions('open');
                t.selectModule().widget().addClass('automizy-active');
                if(t.selectModule().searchable()){
                    t.d.searchInput.input().focus();
                }
            }
        }
        return t;
    };
    p.close = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('close', func, name, life);
        } else {
            $A.activeSelectBox = false;
            if(!t.d.opened){
                return t;
            }
            t.d.opened = false;
            if (t.beforeClose().returnValue() !== false) {
                t.hide();
                t.runFunctions('close');
                t.selectModule().widget().removeClass('automizy-active');
            }
        }
        return t;
    };


    $A.activeSelectBox = false;
    $A.initBasicFunctions(SelectOptionBox, "SelectOptionBox", ['beforeOpen', 'beforeClose', 'open', 'close']);
    $A.closeAllSelectBox = function(){
        $A.activeSelectBox = false;
        var boxes = $A.getAllSelectOptionBox();
        for(var i in boxes){
            boxes[i].close();
        }
    };
    $A.resizeAllSelectBox = function(){
        var boxes = $A.getAllSelectOptionBox();
        for(var i in boxes){
            boxes[i].rePositioning();
        }
    };


    $(window).on('resize', function(){
        $A.resizeAllSelectBox();
    });
    $(document).on('click', function(event) {
        if(!$(event.target).closest('.automizy-select-option-box-widget, .automizy-select').length) {
            $A.closeAllSelectBox();
        }
    });
    $(document).on('mousewheel DOMMouseScroll', function(event) {
        if(!$(event.target).closest('.automizy-select-option-box-widget').length) {
            $A.closeAllSelectBox();
        }
    });


})();

(function(){
    var SelectOption = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<tr class="automizy-select-option-tr automizy-has-select"></tr>'),
            $widgetTdIcon: $('<td class="automizy-select-option-td-icon"></td>'),
            $widgetTdContent: $('<td class="automizy-select-option-td-content"></td>'),
            $widgetTdCheck: $('<td class="automizy-select-option-td-check"></td>'),
            $icon: $('<span class="automizy-icon"></span>'),
            $option:$('<option></option>'),
            selectModule:false,
            selectOptionBoxModule:false,
            value: '',
            html:'',
            textValue:false,
            group:'',
            disabled: false,
            selected:false,
            hasSelect:false,
            hasIcon:false,
            id: 'automizy-select-option-' + $A.getUniqueString()
        };
        t.f = {};
        t.init();

        t.d.$widgetTdIcon.appendTo(t.d.$widget);
        t.d.$icon.appendTo(t.d.$widgetTdIcon);
        t.d.$widgetTdContent.appendTo(t.d.$widget);
        t.d.$widgetTdCheck.appendTo(t.d.$widget);


        if (typeof obj !== 'undefined') {
            if (typeof obj.selectModule !== 'undefined') {
                t.selectModule(obj.selectModule);
            }
            if (typeof obj.selectOptionBoxModule !== 'undefined') {
                t.selectOptionBoxModule(obj.selectOptionBoxModule);
            }
            if (typeof obj.value !== 'undefined') {
                t.value(obj.value);
            }
            if (typeof obj.textValue !== 'undefined') {
                t.textValue(obj.textValue);
            }
            if (typeof obj.html !== 'undefined') {
                t.html(obj.html);
            }
            if (typeof obj.disabled !== 'undefined') {
                t.disabled(obj.disabled);
            }
            if (typeof obj.selected !== 'undefined') {
                t.selected(obj.selected);
            }
            if (typeof obj.icon !== 'undefined') {
                t.icon(obj.icon);
            }
            if (typeof obj.group !== 'undefined') {
                t.group(obj.group);
            }
            if (typeof obj.data !== 'undefined') {
                t.data(obj.data);
            }
            t.initParameter(obj);
        }

        t.widget().click(function(){
            if(t.disabled()){
                return t;
            }
            if(t.selectModule().multiple()){
                t.toggleSelect(true);
            }else{
                t.selectModule().unselectAll().close();
                t.toggleSelect(true);
            }
            t.selectModule().manualChange();
            return t;
        })
    };

    var p = SelectOption.prototype;

    p.selectModule = function (selectModule) {
        var t = this;
        if (typeof selectModule !== 'undefined') {
            t.d.selectModule = selectModule;

            var $select = t.d.selectModule.originalInput();
            if(typeof $select.input === 'function'){
                $select = originalInput.input();
            }
            var value = t.d.$option.attr('value');
            var $options = $select.find('option[value="'+value+'"]');
            if($options.length <= 0){
                t.d.$option.appendTo($select);
            }else{
                t.d.$option = $options.eq(0);
            }

            return t;
        }
        return t.d.selectModule;
    };
    p.selectOptionBoxModule = function (selectOptionBoxModule) {
        var t = this;
        if (typeof selectOptionBoxModule !== 'undefined') {
            t.d.selectOptionBoxModule = selectOptionBoxModule;
            t.drawTo(t.d.selectOptionBoxModule.d.$options);
            return t;
        }
        return t.d.selectOptionBoxModule;
    };
    p.val = p.value = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            if(t.textValue() === false){
                t.textValue(t.d.value);
            }

            var $select = t.d.selectModule.originalInput();
            if(typeof $select.input === 'function'){
                $select = originalInput.input();
            }
            var $options = $select.find('option[value="'+t.d.value+'"]');
            if($options.length <= 0){
                t.d.$option.attr('value', t.d.value);
            }else{
                t.d.$option.remove();
                t.d.$option = $options.eq(0);
            }

            return t;
        }
        return t.d.value;
    };
    p.textValue = function (textValue) {
        var t = this;
        if (typeof textValue !== 'undefined') {
            t.d.textValue = textValue;
            t.d.$option.html(t.d.textValue);
            return t;
        }
        return t.d.textValue;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            if(t.textValue() === false || t.textValue() == t.val()){
                t.textValue(t.d.html);
            }
            t.d.$widgetTdContent.html(t.d.html);
            return t;
        }
        return t.d.html;
    };
    p.group = function (group) {
        var t = this;
        if (typeof group !== 'undefined') {
            var selectModule = t.selectModule();
            if(group === false){
                t.widget().appendTo(t.selectOptionBoxModule().d.$options);
                selectModule.cleanGroups();
            }
            t.d.group = group;
            var groups = selectModule.d.groups;
            if(typeof groups[t.d.group] === 'undefined'){
                groups[t.d.group] = {
                    $titleTr:$('<tr class="automizy-select-group"></tr>'),
                    $titleTd:$('<td colspan="3" class="automizy-select-group-title">'+t.d.group+'</td>'),
                    $separatorTr:$('<tr class="automizy-select-group-separator-tr"></tr>'),
                    $separatorTd:$('<td colspan="3" class="automizy-select-group-separator-td"></td>')
                };
                var $options = t.selectOptionBoxModule().d.$options;
                groups[t.d.group].$titleTr.appendTo($options);
                groups[t.d.group].$titleTd.appendTo(groups[t.d.group].$titleTr);
                groups[t.d.group].$separatorTr.appendTo($options);
                groups[t.d.group].$separatorTd.appendTo(groups[t.d.group].$separatorTr);
            }

            var theGroup = groups[t.d.group];
            t.widget().addClass('automizy-has-group').insertBefore(theGroup.$separatorTr);
            return t;
        }
        return t.d.group;
    };
    p.disabled = function (disabled) {
        var t = this;
        if (typeof disabled !== 'undefined') {
            t.d.disabled = $A.parseBoolean(disabled);
            if(t.d.disabled === true){
                t.widget().addClass('automizy-disabled');
            }else{
                t.widget().removeClass('automizy-disabled');
            }
            return t;
        }
        return t.d.disabled;
    };
    p.disable = function () {
        return this.disabled(true);
    };
    p.enable = function () {
        return this.disabled(false);
    };

    p.selected = function (selected, triggerChange, isNotRefreshValue) {
        var t = this;
        var triggerChange = triggerChange || false;
        var isNotRefreshValue = isNotRefreshValue || false;
        if (typeof selected !== 'undefined') {
            t.d.selected = $A.parseBoolean(selected);
            var selectModule = t.selectModule();
            if(t.d.selected === true){
                t.widget().addClass('automizy-selected');
                t.d.$option.prop("selected", true);
            }else{
                t.widget().removeClass('automizy-selected');
                t.d.$option.prop("selected", false);
            }

            if(!isNotRefreshValue){
                selectModule.refreshValue();
            }
            if(triggerChange){
                selectModule.originalInput().trigger('change');
            }
            return t;
        }
        return t.d.selected;
    };
    p.toggleSelect = function (triggerChange, isNotRefreshValue) {
        return this.selected(!this.selected(), triggerChange || false, isNotRefreshValue || false);
    };
    p.select = function (triggerChange, isNotRefreshValue) {
        return this.selected(true, triggerChange || false, isNotRefreshValue || false);
    };
    p.unselect = function (triggerChange, isNotRefreshValue) {
        return this.selected(false, triggerChange || false, isNotRefreshValue || false);
    };
    p.hasSelect = function(hasSelect){
        var t = this;
        if (typeof hasSelect !== 'undefined') {
            t.d.hasSelect = $A.parseBoolean(hasSelect);
            if(t.d.hasSelect === true){
                t.widget().addClass('automizy-has-select');
            }else{
                t.widget().removeClass('automizy-has-select');
            }
            return t;
        }
        return t.d.hasSelect;
    };


    p.icon = function(o){
        var t = this;
        if (typeof o !== 'undefined') {
            if(o === false){
                t.hasIcon(false);
            } else if(typeof o === 'string'){
                t.d.icon = o;
                t.d.$icon.removeClass().addClass('automizy-icon automizy-icon-'+o);
                t.hasIcon(true);
            } else {
                var icon = {
                    url: '',
                    width: '14px',
                    height: '14px',
                    bgPositionX: 'center',
                    bgPositionY: 'center',
                    align: 'center',
                    valign: 'middle'
                };

                for (var i in icon) {
                    if (typeof o[i] !== 'undefined') {
                        icon[i] = o[i];
                    }
                    t.d.icon[i] = icon[i];
                }
                t.hasIcon(true);
            }
            return t;
        }

        return t.d.icon;
    };
    p.hasIcon = function(hasIcon){
        var t = this;
        if (typeof hasIcon !== 'undefined') {
            t.d.hasIcon = $A.parseBoolean(hasIcon);
            if(t.d.hasIcon === true){
                t.widget().addClass('automizy-has-icon');
            }else{
                t.widget().removeClass('automizy-has-icon');
            }
            return t;
        }
        return t.d.hasIcon;
    };

    p.data = function (data, value) {
        var t = this;
        if (typeof t.d.data === 'undefined') {
            t.d.data = {};
        }
        if (typeof data === 'undefined') {
            return t.d.data;
        }
        if (typeof data === 'array' || typeof data === 'object') {
            for (var i in data) {
                t.d.data[i] = data[i];
            }
            return t;
        }
        if (typeof value === 'undefined') {
            return t.d.data[data];
        }

        t.d.data[data] = value;
        return t;
    };



    p.remove = function(){
        var t = this;
        if (typeof func === 'function') {
            t.d.remove = func;
            return this;
        }
        t.d.remove.apply(t, [t, t.d.$widget]);
        t.widget().remove();
        delete $A.getSelectOption[t.id()];
        return true;
    };


    $A.initBasicFunctions(SelectOption, "SelectOption", []);


})();

(function(){
    var Select = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<div class="automizy-select automizy-has-arrow automizy-empty"></div>'),
            $loadingBox: $('<div class="automizy-select-loading-box">'+$A.translate('loading...')+'</div>'),
            $emptyBox: $('<div class="automizy-select-empty-box"></div>'),
            $widgetTable: $('<table border="0" cellpadding="0" cellspacing="0" class="automizy-select-table"></table>'),
            $widgetTr: $('<tr class="automizy-select-tr"></tr>'),
            $widgetTdIcon: $('<td class="automizy-select-td-icon"></td>'),
            $widgetTdContent: $('<td class="automizy-select-td-content"></td>'),
            $widgetTdContentDiv: $('<div class="automizy-select-td-content-div"></div>'),
            $widgetTdArrow: $('<td class="automizy-select-td-arrow"></td>'),
            $widgetTdArrowIcon: $('<span class="automizy-icon automizy-icon-select-arrow"></span>'),
            $icon: $('<span class="automizy-icon"></span>'),
            originalInput: $('<select></select>').data('automizy-select-remove', true),
            optionBox:$A.newSelectOptionBox().selectModule(t),
            options:[],
            groups:{},
            tmpValue: null,
            value: null,
            content:false,
            multiple:false,
            disabled: false,
            loading:false,
            empty:false,
            searchable:false,
            showMessageIfEmpty:false,
            emptyText:$A.translate('Select an option'),
            selectedText:$A.translate('# items selected'),
            maxVisibleItems:2,
            width: 'auto',
            height: 'auto',
            id: 'automizy-select-' + $A.getUniqueString(),

            change: function () {
                if (t.change().returnValue() === false) {
                    return false;
                }
            },
            manualChange: function () {
                if (t.manualChange().returnValue() === false) {
                    return false;
                }
            }
        };
        t.f = {};
        t.init();


        t.d.$widgetTable.appendTo(t.d.$widget);
        t.d.$loadingBox.appendTo(t.d.$widget);
        t.d.$emptyBox.appendTo(t.d.$widget);
        t.d.$widgetTr.appendTo(t.d.$widgetTable);
        t.d.$widgetTdIcon.appendTo(t.d.$widgetTr);
        t.d.$icon.appendTo(t.d.$widgetTdIcon);
        t.d.$widgetTdContent.appendTo(t.d.$widgetTr);
        t.d.$widgetTdContentDiv.appendTo(t.d.$widgetTdContent).html(t.d.emptyText);
        t.d.$widgetTdArrow.appendTo(t.d.$widgetTr);
        t.d.$widgetTdArrowIcon.appendTo(t.d.$widgetTdArrow);


        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }

        t.widget().click(function(){
            if(t.d.loading === true || t.d.empty){
                return false;
            }
            if(t.widget().hasClass('automizy-active')){
                $A.closeAllSelectBox();
            }else {
                t.open();
            }
        });

        t.setupJQueryEvents();
    };

    var p = Select.prototype;


    p.setupJQueryEvents = function(){
        var t = this;
        t.originalInput().unbind('change', t.d.change).bind('change', t.d.change);
    };

    p.originalInput = function (originalInput) {
        var t = this;
        if (typeof originalInput !== 'undefined') {
            if(t.d.originalInput.data('automizy-select-remove') == true){
                t.d.originalInput.remove();
            }
            t.d.originalInput = originalInput;
            var $elem;
            if(t.width() === 'auto'){
                t.width(t.d.originalInput.width());
            }
            /*if(t.height() === 'auto'){
                t.height(t.d.originalInput.height());
            }*/
            if(typeof t.d.originalInput.input === 'function'){
                $elem = t.d.originalInput.input();
            }else{
                $elem = t.d.originalInput;
            }
            (function(t){setTimeout(function(){
                t.widget().insertAfter($elem);
            }, 10)})(t);
            $elem.hide();
            $elem.data('automizy-select', t);
            t.d.originalInput.data('automizy-select', t);
            t.setupJQueryEvents();
            return t;
        }
        return t.d.originalInput;
    };
    p.optionBox = function () {
        return this.d.optionBox;
    };
    p.confirmValue = function(){
        var t = this;

        t.unselectAll();
        var hasValue = false;

        console.log(t.d.value);
        if(typeof t.d.value === 'object' || typeof t.d.value === 'array'){
            for(var i = 0; i < t.d.options.length; i++){
                for(var j = 0; j < t.d.value.length; j++){
                    if(t.d.options[i].val() == t.d.value[j]){
                        t.d.options[i].select(false, true);
                        hasValue = true;
                    }
                }
            }
            t.refreshValue();
        }else{
            for(var i = 0; i < t.d.options.length; i++){
                if(t.d.options[i].val() == t.d.value){
                    t.d.options[i].select();
                    hasValue = true;
                    break;
                }
            }
        }

        if(!hasValue){
            t.content(t.emptyText());
            t.widget().addClass('automizy-empty');
        }else{
            t.widget().removeClass('automizy-empty');
        }
        console.log(t.d.value);
        t.d.originalInput.val(t.d.value).trigger('change');

        return t;
    };
    p.val = p.value = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            if(t.d.loading){
                t.d.tmpValue = t.d.value;
            }else {
                t.confirmValue();
            }
            return t;
        }
        return t.d.value;
    };
    p.selectedOptions = function () {
        var t = this;

        var options = [];
        for(var i = 0; i < t.d.options.length; i++){
            if(t.d.options[i].selected()){
                options.push(t.d.options[i]);
            }
        }

        return options;
    };
    p.selectedOption = function () {
        var t = this;

        var option = false;
        for(var i = 0; i < t.d.options.length; i++){
            if(t.d.options[i].selected()){
                option = t.d.options[i];
                break;
            }
        }

        return option;
    };
    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            t.d.content = content;
            t.d.$widgetTdContentDiv.html(t.d.content);
            return t;
        }
        return t.d.content;
    };


    p.icon = function(o){
        var t = this;
        if (typeof o !== 'undefined') {
            if(o === false){
                t.hasIcon(false);
            } else if(typeof o === 'string'){
                t.d.icon = o;
                t.d.$icon.removeClass().addClass('automizy-icon automizy-icon-'+o);
                t.hasIcon(true);
            } else {
                var icon = {
                    url: '',
                    width: '14px',
                    height: '14px',
                    bgPositionX: 'center',
                    bgPositionY: 'center',
                    align: 'center',
                    valign: 'middle'
                };

                for (var i in icon) {
                    if (typeof o[i] !== 'undefined') {
                        icon[i] = o[i];
                    }
                    t.d.icon[i] = icon[i];
                }
                t.hasIcon(true);
            }
            return t;
        }

        return t.d.icon;
    };
    p.hasIcon = function(hasIcon){
        var t = this;
        if (typeof hasIcon !== 'undefined') {
            t.d.hasIcon = $A.parseBoolean(hasIcon);
            if(t.d.hasIcon === true){
                t.widget().addClass('automizy-has-icon');
            }else{
                t.widget().removeClass('automizy-has-icon');
            }
            return t;
        }
        return t.d.hasIcon;
    };


    p.multiple = function (multiple) {
        var t = this;
        if (typeof multiple !== 'undefined') {
            t.d.multiple = $A.parseBoolean(multiple);
            if(typeof t.d.originalInput.multiple !== 'undefined'){
                t.d.originalInput.multiple(t.d.multiple);
            }else{
                t.d.originalInput.attr('multiple', t.d.multiple);
            }

            if(t.d.multiple === true){
                t.widget().addClass('automizy-multiple');
            }else{
                t.widget().removeClass('automizy-multiple');
            }

            return t;
        }
        return t.d.multiple;
    };
    p.disabled = function (disabled) {
        var t = this;
        if (typeof disabled !== 'undefined') {
            disabled = $A.parseBoolean(disabled);
            if(disabled){
                $A.closeAllSelectBox();
                t.widget().addClass('automizy-disabled');
            }else{
                t.widget().removeClass('automizy-disabled');
            }
            t.d.disabled = disabled;
            if(typeof t.d.originalInput.disabled !== 'undefined'){
                t.d.originalInput.disabled(t.d.disabled);
            }else{
                t.d.originalInput.attr('disabled', disabled);
            }
            return t;
        }
        return t.d.disabled;
    };
    p.disable = function () {
        return this.disabled(true);
    };
    p.enable = function () {
        return this.disabled(false);
    };
    p.unselectAll = function (triggerChange) {
        var t = this;
        var triggerChange = triggerChange || false;
        for(var i = 0; i < t.d.options.length; i++){
            t.d.options[i].unselect(false, true);
        }
        if(triggerChange === true){
            t.originalInput().trigger('change');
        }
        return t;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.widget().css('width', t.d.width);
            setTimeout(function() {
                //t.d.$widgetTdContentDiv.css('max-width', t.widget().width() - 12 + 'px');
            }, 10);
            return t;
        }
        return t.d.width;
    };
    /*p.height = function (height) {
        var t = this;
        if (typeof height !== 'undefined') {
            t.d.height = height;
            t.d.$widgetTable.css('height', t.d.height);
            return t;
        }
        return t.d.height;
    };*/
    p.refreshValue = function () {
        var t = this;
        var options = t.d.options;
        var textValues = [];
        var values = [];
        var selectedOptionCount = 0;
        var icon = false;

        for(var i = 0; i < options.length; i++){
            if(options[i].selected()){
                selectedOptionCount++;
                textValues.push(options[i].textValue());
                values.push(options[i].val());
                if(options[i].hasIcon()){
                    icon = options[i].icon();
                }
            }
        }

        if(selectedOptionCount === 1){
            t.icon(icon);
        }else {
            t.icon(false);
        }

        if(textValues.length <= 0){
            t.content(t.emptyText());
            t.widget().addClass('automizy-empty');
        }else {
            if(textValues.length > t.maxVisibleItems()){
                t.content(t.selectedText().replace("#", textValues.length));
            }else {
                t.content(textValues.join(', '));
            }
            t.widget().removeClass('automizy-empty');
        }

        if(values.length > 0) {
            if (t.multiple()) {
                t.d.value = values;
            } else {
                t.d.value = values[0];
            }
            t.originalInput().val(t.d.value);
        }else{
            t.d.value = null;
            t.originalInput().prop("selectedIndex", -1);
        }

        return t;
    };
    p.cleanGroups = function () {
        var t = this;
        var groups = t.d.groups;
        var usableGroups = [];
        var options = t.d.options;
        for(var i = 0; i < options.length; i++){
            var group = options[i].group();
            if(usableGroups.indexOf(group) < 0){
                usableGroups.push(group);
            }
        }
        for(var i in groups){
            if(usableGroups.indexOf(i) < 0){
                groups[i].$titleTd.remove();
                groups[i].$separatorTd.remove();
                groups[i].$titleTr.remove();
                groups[i].$separatorTr.remove();
                delete groups[i];
            }
        }
        return t;
    };
    p.emptyText = function(emptyText){
        var t = this;
        if (typeof emptyText !== 'undefined') {
            t.d.emptyText = emptyText;
            return t;
        }
        return t.d.emptyText;
    };
    p.selectedText = function(selectedText){
        var t = this;
        if (typeof selectedText !== 'undefined') {
            t.d.selectedText = selectedText;
            return t;
        }
        return t.d.selectedText;
    };
    p.maxVisibleItems = function(maxVisibleItems){
        var t = this;
        if (typeof maxVisibleItems !== 'undefined') {
            t.d.maxVisibleItems = parseInt(maxVisibleItems);
            return t;
        }
        return t.d.maxVisibleItems;
    };


    p.removeOptions = function () {
        var t = this;
        for(var i = 0; i < t.d.options.length; i++){
            t.d.options[i].remove();
        }
        t.d.options = [];
        t.cleanGroups();
        return t;
    };
    p.removeOption = function (value) {
        var t = this;
        for(var i = 0; i < t.d.options.length; i++){
            if(t.d.options[i].val() == value){
                t.d.options[i].remove();
            }
        }
        t.cleanGroups();
        return t;
    };
    p.addOption = function(option){
        return this.addOptions([option]);
    };
    p.options = function (options) {
        var t = this;
        if (typeof options !== 'undefined') {
            t.removeOptions();
            t.addOptions(options);
            if(t.d.showMessageIfEmpty) {
                if (options.length <= 0) {
                    t.widget().addClass('automizy-empty-select');
                    t.d.empty = true;
                } else {
                    t.widget().removeClass('automizy-empty-select');
                    t.d.empty = false;
                }
            }
            return t;
        }
        return t.d.options;
    };
    p.addOptions = function(options, before){
        var t = this;
        var val = t.val();
        var before = before || false;
        var options = options || [];
        for(var i = 0; i < options.length; i++){
            if(options[i] instanceof Array){
                options[i] = {
                    value:options[i][0] || 0,
                    html:options[i][1] || options[i][0],
                    selected:$A.parseBoolean(options[i][2] || false)
                };
            }
            options[i].selectModule = t;
            options[i].selectOptionBoxModule = t.optionBox();
            if(options[i].selected === true){
                hasSelected = true;
            }
            var option = $A.newSelectOption(options[i], false);
            t.d.options.push(option);
        }
        t.refreshValue();
        t.originalInput().change();
        return t;
    };
    p.loadingStart = function(){
        var t = this;
        t.widget().addClass('automizy-loading');
        t.d.tmpValue = t.val() || false;
        t.d.loading = true;
        return t;
    };
    p.loadingStop = function(){
        var t = this;
        t.widget().removeClass('automizy-loading');
        t.d.loading = false;
        return t;
    };
    p.loadingComplete = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('loadingComplete', func, name, life);
        } else {
            var a = t.runFunctions('loadingComplete');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
            t.loadingStop();
            if(t.d.tmpValue !== false){
                t.val(t.d.tmpValue);
                t.d.tmpValue = false;
            }
        }
        return t;
    };

    p.emptyMessage = function(msg){
        var t = this;
        t.d.showMessageIfEmpty = true;

        if (typeof msg !== 'undefined') {
            t.d.$emptyBox.html(msg);
        }

        return t;
    };


    p.beforeOpen = function (func, name, life) {
        return this.d.optionBox.beforeOpen.apply(this.d.optionBox, [func, name, life]);
    };
    p.beforeClose = function (func, name, life) {
        return this.d.optionBox.beforeClose.apply(this.d.optionBox, [func, name, life]);
    };
    p.open = function (func, name, life) {
        return this.d.optionBox.open.apply(this.d.optionBox, [func, name, life]);
    };
    p.close = function (func, name, life) {
        return this.d.optionBox.close.apply(this.d.optionBox, [func, name, life]);
    };

    p.change = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('change', func, name, life);
        } else {
            var a = t.runFunctions('change');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };
    p.manualChange = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('manualChange', func, name, life);
        } else {
            var a = t.runFunctions('manualChange');
            t.returnValue(!(t.disabled() === true || a[0] === false || a[1] === false));
        }
        return t;
    };

    p.remove = function (func) {
        if (typeof func === 'function') {
            this.d.remove = func;
            return this;
        }
        delete $A.d["selects"][this.id()];
        this.d.remove.apply(this, [this, this.d.$widget]);
        this.d.optionBox.remove();
        for(var i = 0; i < this.d.options.length; i++){
            this.d.options[i].remove();
        }
        this.originalInput().remove();
        this.d.$widget.remove();
        return true;
    };

    p.drawTo = p.draw = p.appendTo = function ($target) {
        var t = this;
        var $target = $target || $('body');

        t.originalInput().appendTo($target);
        t.d.$widget.appendTo($target);

        return t;
    };
    p.show = function () {
        var t = this;
        this.d.$widget.ashow();
        return t;
    };
    p.hide = function () {
        var t = this;
        this.d.$widget.ahide();
        return t;
    };
    p.searchable = function (value) {
        var t = this;
        if(typeof value !== 'undefined'){
            t.d.searchable = $A.parseBoolean(value);
            if(t.d.searchable){
                t.d.optionBox.d.$searchBox.show();
            }else{
                t.d.optionBox.d.$searchBox.hide();
            }
            return t;
        }
        return t.d.searchable;
    };
    p.search = function (text) {
        var t = this;
        var text = text || '';
        var options = t.options();
        if(text.length <= 0){
            for(var i = 0; i < options.length; i++) {
                options[i].show();
            }
        }else{
            for (var i = 0; i < options.length; i++) {
                var str = '';
                str += options[i].val();
                str += ' ' + options[i].textValue();
                str += ' ' + $('<p>' + options[i].html() + '</p>').text();
                if (str.toLowerCase().search(text.toLowerCase()) > -1) {
                    options[i].show();
                } else {
                    options[i].hide();
                }
            }
        }
        return t;
    };



    $A.initBasicFunctions(Select, "Select", ['change', 'loadingComplete', 'manualChange']);


    $.fn.automizySelect = function () {
        var lastElement = false;
        if(typeof this.data('automizy-select') !== 'undefined'){
            return this.data('automizy-select');
        }
        this.each(function(){
            var selectModule = $A.newSelect();
            var $t = $(this);

            if($t.prop("tagName").toLowerCase() !== 'select'){
                var $newElem = $('<select></select>');
                $.each(this.attributes, function() {
                    $newElem.attr(this.name, this.value);
                });
                $t.replaceWith($newElem);
                $t = $newElem;
            }


            selectModule.multiple($t.is("[multiple]")).originalInput($t);

            var options = [];
            $t.find('option').each(function(){
                var $to = $(this);
                var option = {
                    value:$to.attr('value'),
                    html:$to.html(),
                    disabled:$to.is(':disabled'),
                    selected:$to.is(':selected')
                };
                var optgroup = $to.closest('optgroup');
                if(optgroup.length >= 0){
                    option.group = optgroup.attr('label');
                }

                options.push(option);
            });
            selectModule.options(options);

            $t.data('automizy-select', selectModule);

            lastElement = selectModule;
        });
        return lastElement;
    };


})();

(function(){
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        };
    }
    if (!Date.timestamp) {
        Date.timestamp = function () {
            return Math.floor(Date.now() / 1000);
        };
    }
})();

(function(){
    var isChangeManually = false;
    $A.hashChange = function (hash, add) {
        if(typeof hash === 'undefined'){
            $(window).trigger('hashchange');
            return true;
        }
        if(typeof add === 'undefined'){
            var add = true;
        }else{
            var add = $A.parseBoolean(add);
        }
        if(add){
            $A.d.hashes.push(hash);
        }else{
            $A.d.hashes.remove(hash);
            hash = $A.d.hashes[$A.d.hashes.length - 1] || '';
        }
        isChangeManually = true;
        window.location.hash = hash;
        setTimeout(function(){
            isChangeManually = false;
        }, 10)
    };
    
    $(window).on('hashchange', function() {
        if(!isChangeManually){
            var hash = window.location.hash;
            if(hash.charAt(0) === '#')
                hash = hash.slice(1);
            $A.hashChange(hash);
        }
    });
})();

(function(){
    $A.getFunctionStringFromArray = function (f, args) {
        var len = args.length;
        f += '(';
        for(var i = 0; i < len; i++){
            f += 'arguments['+i+']';
            if(i < len-1)f += ', ';
        }
        f += ')';
        return f;
    };
})();

(function(){
    $A.insertAtCaret = function(input,text) {
        var txtarea = input;
        if(txtarea instanceof jQuery)txtarea = txtarea[0];
        if(txtarea instanceof $A.m.Input)txtarea = txtarea.input();
        var scrollPos = txtarea.scrollTop;
        var strPos = 0;
        var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false ) );
        if (br == "ie") { 
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                strPos = range.text.length;
        }
        else if (br == "ff") strPos = txtarea.selectionStart;

        var front = (txtarea.value).substring(0,strPos);  
        var back = (txtarea.value).substring(strPos,txtarea.value.length); 
        txtarea.value=front+text+back;
        strPos = strPos + text.length;
        if (br == "ie") { 
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                range.moveStart ('character', strPos);
                range.moveEnd ('character', 0);
                range.select();
        }
        else if (br == "ff") {
                txtarea.selectionStart = strPos;
                txtarea.selectionEnd = strPos;
                txtarea.focus();
        }
        txtarea.scrollTop = scrollPos;
        $(txtarea).trigger('change');
    }
})();

(function(){

    $A.delay = function (a) {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    };

})();

(function(){
    $A.rand = function(min, max){
        var min = min || 0;
        var max = max || Number.MAX_SAFE_INTEGER || Number.MAX_VALUE;
        if(min > max){
            var a = max;
            max = min;
            min = a;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();

(function(){
    
    $A.getFileNameFromUrl = function(url){
        var url = url || document.location.href;
        url = url.substring(0, (url.indexOf("#") === -1) ? url.length : url.indexOf("#"));
        url = url.substring(0, (url.indexOf("?") === -1) ? url.length : url.indexOf("?"));
        url = url.substring(url.lastIndexOf("/") + 1, url.length);
        return url;
    }
})();

(function(){

    $A.ajaxDocumentCover = function (a, b) {
        if(typeof a === 'undefined'){
            var a = false;
        }
        if(typeof b === 'undefined'){
            var b = ['auto', 'auto', 'auto'];
        }

        if(typeof b[0] === 'undefined'){
            b[0] = {
                text:'',
                time:0
            }
        }else if(b[0] === 'auto'){
            b[0] = {
                text:'',
                time:3000
            };
        }
        if(typeof b[1] === 'undefined'){
            b[1] = {
                text:'',
                time:0
            }
        }else if(b[1] === 'auto'){
            b[1] = {
                text:$A.translate("Still working."),
                time:5000
            };
        }
        if(typeof b[2] === 'undefined'){
            b[2] = {
                text:'',
                time:0
            }
        }else if(b[2] === 'auto'){
            b[2] = {
                text:$A.translate("Little more patience please, I'm still working."),
                time:15000
            };
        }

        if ($A.parseBoolean(a) === true) {
            clearTimeout($A.d.ajaxDocumentCoverFalseTimeout);
            var $oldCover = $("#automizy-document-cover");
            var $cover = $('<div id="automizy-document-cover"></div>');
            var $text = $('<div id="automizy-document-cover-text"></div>');
            $text.appendTo($cover);
            $cover.prependTo('body:first');
            $oldCover.remove();

            $text.html(b[0].text);
            $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                $text.html(b[1].text);
                $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                    $text.html(b[2].text);
                    $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                        $A.ajaxDocumentCover(0);
                    }, b[2].time);
                }, b[1].time);
            }, b[0].time);

        }else{
            $A.d.ajaxDocumentCoverFalseTimeout = setTimeout(function(){
                clearTimeout($A.d.ajaxDocumentCoverTimeout);
                $("#automizy-document-cover").remove();
            }, 50);
        }
    };

})();

(function(){
    $A.skin = function (module) {
        var skin = module.skin();
        var success = false;

        if (module instanceof $A.m.Input) {
            var input = module;
            var $input = input.input();
            var tagName = $input.prop('tagName').toLowerCase();
            var type = input.type();
            var se = input.d.specialElements;
            if (tagName === 'input') {
                if (type === 'file') {
                    if (skin === 'simple-automizy') {
                        //se.file
                        var $fileBox = se.$fileBox = $('<span class="simple-automizy-file-box"></span>');
                        var $table = $('<table cellpadding="0" cellspacing="0" border="0" style="display:inline-table"></table>').width(input.width()).appendTo($fileBox);
                        var $tr = $('<tr></tr>').appendTo($table);
                        var $td1 = $('<td></td>').appendTo($tr);
                        var $td2 = $td1.clone().width(1).appendTo($tr);
                        var fileText = se.fileText = $A.newInput().readonly(true).newRow(false).width('100%').drawTo($td1);
                        fileText.widget().width('100%');
                        var fileButton = se.fileButton = $A.newButton().text($A.translate('Upload')).drawTo($td2);
                        input.data({
                            automizyInput:fileText,
                            automizyButton:fileButton,
                            $automizyTable:$table,
                            $automizyFileBox:$fileBox,
                            $automizyTr:$tr,
                            $automizyTd1:$td1,
                            $automizyTd2:$td2
                        });
                        input.data('automizyButton', fileButton);
                        input.off('change', 'automizy-change').on('change', function () {
                            var filename = input.val().split('\\').pop();
                            fileText.val(filename);
                        }, 'automizy-change');
                        $fileBox.insertAfter($input);
                        $input.data('table', $table).css({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            opacity:0,
                            height: '33px',
                            width: '100%'
                        });
                        success = true;
                    }
                } else if (type === 'slider') {
                    if (skin === 'simple-automizy') {
                        var $slider = se.$slider = $('<span class="simple-automizy-slider"></span>');
                        var $sliderValue = se.$sliderValue = $('<span class="simple-automizy-slider-value"></span>');
                        $slider.insertAfter($input);
                        $sliderValue.insertAfter($slider);
                        $slider.slider({
                            range: "min",
                            value: 10,
                            min: 5,
                            max: 100,
                            step: 5,
                            slide: function (event, ui) {
                                input.val(ui.value);
                                input.change();
                                $sliderValue.text(ui.value + '%');
                            }
                        });
                        $sliderValue.text($slider.slider("value") + "%");
                        $input.ahide();
                        success = true;
                    }
                }
            }
        }

        return success;
    };
})();

(function(){

    $A.base64Encode = function (data) {
        //  discuss at: http://phpjs.org/functions/base64_encode/
        // original by: Tyler Akins (http://rumkin.com)
        // improved by: Bayron Guevara
        // improved by: Thunder.m
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Rafał Kukawski (http://kukawski.pl)
        // bugfixed by: Pellentesque Malesuada
        //   example 1: base64_encode('Kevin van Zonneveld');
        //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        //   example 2: base64_encode('a');
        //   returns 2: 'YQ=='

        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                enc = '',
                tmp_arr = [];

        if (!data) {
            return data;
        }

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    }
})();

(function(){

    $A.base64Decode = function (data) {
        //  discuss at: http://phpjs.org/functions/base64_decode/
        // original by: Tyler Akins (http://rumkin.com)
        // improved by: Thunder.m
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        //    input by: Aman Gupta
        //    input by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: Onno Marsman
        // bugfixed by: Pellentesque Malesuada
        // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        //   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
        //   returns 1: 'Kevin van Zonneveld'
        //   example 2: base64_decode('YQ===');
        //   returns 2: 'a'

        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                dec = '',
                tmp_arr = [];

        if (!data) {
            return data;
        }

        data += '';

        do { // unpack four hexets into three octets using index points in b64
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;

            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);

        dec = tmp_arr.join('');

        return dec.replace(/\0+$/, '');
    }
})();

(function(){
    /*
    * Date Format 1.2.3
    * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
    * MIT license
    *
    * Includes enhancements by Scott Trenda <scott.trenda.net>
    * and Kris Kowal <cixar.com/~kris.kowal/>
    *
    * Accepts a date, a mask, or a date and a mask.
    * Returns a formatted version of the given date.
    * The date defaults to the current date/time.
    * The mask defaults to dateFormat.masks.default.
    */
    var dateFormat = function () {
        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len)
                        val = "0" + val;
                    return val;
                };

        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date))
                throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }

            var _ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d: d,
                        dd: pad(d),
                        ddd: dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m: m + 1,
                        mm: pad(m + 1),
                        mmm: dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy: String(y).slice(2),
                        yyyy: y,
                        h: H % 12 || 12,
                        hh: pad(H % 12 || 12),
                        H: H,
                        HH: pad(H),
                        M: M,
                        MM: pad(M),
                        s: s,
                        ss: pad(s),
                        l: pad(L, 3),
                        L: pad(L > 99 ? Math.round(L / 10) : L),
                        t: H < 12 ? "a" : "p",
                        tt: H < 12 ? "am" : "pm",
                        T: H < 12 ? "A" : "P",
                        TT: H < 12 ? "AM" : "PM",
                        Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();

// Some common format strings
    dateFormat.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        mysqlDateTime: "yyyy-mm-dd HH:MM:ss",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

// Internationalization strings
    dateFormat.i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };
    $A.dateFormat = dateFormat;
// For convenience...
    /*Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };*/
})();

(function(){
    /*
    * store.js 1.3.18
    * (c) 2010-2014 Marcus Westin <http://marcuswest.in>
    * MIT license
    *
    * localStorage wrapper for all browsers without using cookies or flash.
    * Uses localStorage, globalStorage, and userData behavior under the hood
    */
    var win = window;
    var store = {},
        doc = win.document,
        localStorageName = 'localStorage',
        scriptTag = 'script',
        storage;

    store.disabled = false;
    store.version = '1.3.17';
    store.set = function(key, value) {};
    store.get = function(key, defaultVal) {};
    store.has = function(key) { return store.get(key) !== undefined };
    store.remove = function(key) {};
    store.clear = function() {};
    store.transact = function(key, defaultVal, transactionFn) {
        if (transactionFn == null) {
            transactionFn = defaultVal;
            defaultVal = null;
        }
        if (defaultVal == null) {
            defaultVal = {};
        }
        var val = store.get(key, defaultVal);
        transactionFn(val);
        store.set(key, val);
    };
    store.getAll = function() {};
    store.forEach = function() {};

    store.serialize = function(value) {
        return JSON.stringify(value)
    };
    store.deserialize = function(value) {
        if (typeof value != 'string') { return undefined }
        try { return JSON.parse(value) }
        catch(e) { return value || undefined }
    };

    // Functions to encapsulate questionable FireFox 3.6.13 behavior
    // when about.config::dom.storage.enabled === false
    // See https://github.com/marcuswestin/store.js/issues#issue/13
    function isLocalStorageNameSupported() {
        try { return (localStorageName in win && win[localStorageName]) }
        catch(err) { return false }
    }

    if (isLocalStorageNameSupported()) {
        storage = win[localStorageName];
        store.set = function(key, val) {
            if (val === undefined) { return store.remove(key) }
            storage.setItem(key, store.serialize(val));
            return val
        };
        store.get = function(key, defaultVal) {
            var val = store.deserialize(storage.getItem(key));
            return (val === undefined ? defaultVal : val)
        };
        store.remove = function(key) { storage.removeItem(key) };
        store.clear = function() { storage.clear() };
        store.getAll = function() {
            var ret = {};
            store.forEach(function(key, val) {
                ret[key] = val
            });
            return ret
        };
        store.forEach = function(callback) {
            for (var i=0; i<storage.length; i++) {
                var key = storage.key(i);
                callback(key, store.get(key))
            }
        }
    } else if (doc.documentElement.addBehavior) {
        var storageOwner,
            storageContainer;
        // Since #userData storage applies only to specific paths, we need to
        // somehow link our data to a specific path.  We choose /favicon.ico
        // as a pretty safe option, since all browsers already make a request to
        // this URL anyway and being a 404 will not hurt us here.  We wrap an
        // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
        // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
        // since the iframe access rules appear to allow direct access and
        // manipulation of the document element, even for a 404 page.  This
        // document can be used instead of the current document (which would
        // have been limited to the current path) to perform #userData storage.
        try {
            storageContainer = new ActiveXObject('htmlfile');
            storageContainer.open();
            storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>');
            storageContainer.close();
            storageOwner = storageContainer.w.frames[0].document;
            storage = storageOwner.createElement('div')
        } catch(e) {
            // somehow ActiveXObject instantiation failed (perhaps some special
            // security settings or otherwse), fall back to per-path storage
            storage = doc.createElement('div');
            storageOwner = doc.body;
        }
        var withIEStorage = function(storeFunction) {
            return function() {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(storage);
                // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                storageOwner.appendChild(storage);
                storage.addBehavior('#default#userData');
                storage.load(localStorageName);
                var result = storeFunction.apply(store, args);
                storageOwner.removeChild(storage);
                return result
            }
        };

        // In IE7, keys cannot start with a digit or contain certain chars.
        // See https://github.com/marcuswestin/store.js/issues/40
        // See https://github.com/marcuswestin/store.js/issues/83
        var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
        function ieKeyFix(key) {
            return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
        }
        store.set = withIEStorage(function(storage, key, val) {
            key = ieKeyFix(key);
            if (val === undefined) { return store.remove(key) }
            storage.setAttribute(key, store.serialize(val));
            storage.save(localStorageName);
            return val
        });
        store.get = withIEStorage(function(storage, key, defaultVal) {
            key = ieKeyFix(key);
            var val = store.deserialize(storage.getAttribute(key));
            return (val === undefined ? defaultVal : val)
        });
        store.remove = withIEStorage(function(storage, key) {
            key = ieKeyFix(key);
            storage.removeAttribute(key);
            storage.save(localStorageName)
        });
        store.clear = withIEStorage(function(storage) {
            var attributes = storage.XMLDocument.documentElement.attributes;
            storage.load(localStorageName);
            for (var i=0, attr; attr=attributes[i]; i++) {
                storage.removeAttribute(attr.name)
            }
            storage.save(localStorageName)
        });
        store.getAll = function(storage) {
            var ret = {};
            store.forEach(function(key, val) {
                ret[key] = val
            });
            return ret
        };
        store.forEach = withIEStorage(function(storage, callback) {
            var attributes = storage.XMLDocument.documentElement.attributes;
            for (var i=0, attr; attr=attributes[i]; ++i) {
                callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
            }
        })
    }

    try {
        var testKey = '__storejs__';
        store.set(testKey, testKey);
        if (store.get(testKey) != testKey) { store.disabled = true }
        store.remove(testKey)
    } catch(e) {
        store.disabled = true
    }
    store.enabled = !store.disabled;

    /*
    if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
    else if (typeof define === 'function' && define.amd) { (function(){ win.store = store }
    */
    $A.store = store;
})();

(function(){

    $A.convertToResponsive = function (data) {
        $('body').addClass('automizy-mobile');

        /*JavaScripts needed for mobile version*/

    }
})();

(function(){

    $A.default.numberFormat = {
        decimals:0,
        decPoint:'.',
        thousandsSep:','
    };

    $A.numberFormat = function (number, decimals, decPoint, thousandsSep) {
        if(typeof decimals === 'undefined'){
            var decimals = $A.default.numberFormat.decimals;
        }
        if(typeof decPoint === 'undefined'){
            var decPoint = $A.default.numberFormat.decPoint;
        }
        if(typeof thousandsSep === 'undefined'){
            var thousandsSep = $A.default.numberFormat.thousandsSep;
        }

        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
            dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
            s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    };
    $A.defaultNumberFormat = function (numberFormat) {
        if(typeof numberFormat === 'undefined'){
            return $A.default.numberFormat;
        }
        var numberFormat = numberFormat || {};
        if(typeof numberFormat.decimals !== 'undefined'){
            $A.default.numberFormat.decimals = numberFormat.decimals;
        }
        if(typeof numberFormat.decPoint !== 'undefined'){
            $A.default.numberFormat.decPoint = numberFormat.decPoint;
        }
        if(typeof numberFormat.thousandsSep !== 'undefined'){
            $A.default.numberFormat.thousandsSep = numberFormat.thousandsSep;
        }
        return $A;
    };

})();

(function(){

    var doc = document.implementation.createHTMLDocument("");
    var element = doc.createElement('div');

    function getText(str) {
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
        return str;
    }

    $A.decodeEntities = function (str) {
        if (str && typeof str === 'string') {
            var x = getText(str);
            while (str !== x) {
                str = x;
                x = getText(x);
            }
            return x;
        }
        return str;
    }
})();

(function(){
    $A.registerEvent = function(eventName){
        if($.inArray(eventName, ['function', 'on', 'off', 'one']) >= 0){
            return false;
        }
        if(typeof $A.customEvents.functions[eventName] === 'undefined') {
            $A.customEvents.functions[eventName] = {};
        }
        $A.customEvents[eventName] = $A.customEvents.on[eventName] = function (func, name) {
            if (typeof func === 'function') {
                $A.customEvents.functions[eventName][name || $A.getUniqueString()] = {
                    func: func,
                    life: -1
                };
            }
        };
        $A.customEvents.off[eventName] = function (name) {
            delete $A.customEvents.functions[eventName][name];
        };
        $A.customEvents.one[eventName] = function (func) {
            $A.customEvents.functions[eventName][$A.getUniqueString()] = {
                func: func,
                life: 1
            };
        };
    };
})();

(function(){
    $A.getExtension = function (fname) {
        return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2).toLowerCase();
    };
})();

(function(){
    $A.getGetParameter = function (param) {
        var vars = {};
        var href = window.location.href;
        var indexOfValue = href.indexOf("#");
        if(indexOfValue >= 0){
            href = href.substring(0, indexOfValue);
        }
        href.replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function( m, key, value ) {
                vars[key] = value !== undefined ? value : '';
            }
        );

        if ( param ) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    };
})();

(function(){
    $A.iphoneStyle = function(input){
        var input = input || $(':checkbox.iphone');
        input.each(function () {
            var $t = $(this);
            var counter = 0;
            if ($t.hasClass("inited")) {
                $t.siblings().remove();
                if ($t.parent().hasClass("iPhoneCheckContainer")) {
                    $t.unwrap();
                }
                var $clone = $t.clone();
                $t.after($clone);
                $t.remove();
                $t = $clone;
            }
            $t.iphoneStyle({
                checkedLabel: '&nbsp;&nbsp;&nbsp;',
                uncheckedLabel: '&nbsp;&nbsp;&nbsp;',
                resizeContainer: false,
                resizeHandle: false,
                onChange: function (elem, value) {
                    var box = this.container[0];
                    var $box = $(box);
                    var $input = $box.find("input");
                    var $handler = $box.find(".iPhoneCheckHandleCenter");
                    var stringOn = $input.attr("data-on") || $input.data('on') || $A.translate('On');
                    var stringOff = $input.attr("data-off") || $input.data('off') || $A.translate('Off');
                    if (value) {
                        $handler.html(stringOn);
                        $box.removeClass("off")
                    } else {
                        $handler.html(stringOff);
                        $box.addClass("off");
                    }
                    var target = $input.attr("data-target");
                    if (target) {
                        var targetElement = $box.closest("form").find('[name="' + target + '"]');
                        targetElement.prop("disabled", !value);
                    }
                    $input.trigger("forceChange", [counter]);
                    counter++;
                }
            });
            if ($t.hasClass("inline")) {
                $t.parent().css({'display': 'inline-block', 'vertical-align': 'middle'});
            }
            if (!$t.is(":checked")) {
                $t.parent().addClass("off");
            }
            $t.addClass("inited");

            $(this).parent().parent().removeClass('automizy-input-has-help');
        });
        input.parent().css({display: 'inline-block', verticalAlign: 'middle'});
        $(".iPhoneCheckHandleCenter").html(function () {
            var $container = $(this).closest(".iPhoneCheckContainer");
            if ($container.find("input").is(":checked")) {
                return $container.find("input").attr("data-on");
            } else {
                return $container.find("input").attr("data-off");
            }
        });

        input.iphoneStyle("refresh");
    }
})();

(function(){

    $A.confirm = function (obj) {
        var obj = obj || {};
        var data = {
            ok:function(){},
            okText:$A.translate('OK'),
            cancel:function(){},
            cancelText:$A.translate('Cancel'),
            content:'',
            title:$A.translate('Please confirm your action.')
        };
        if(typeof obj.ok === 'function'){
            data.ok = obj.ok;
        }
        if(typeof obj.cancel !== 'undefined'){
            data.cancel = obj.cancel;
        }
        if(typeof obj.okText !== 'undefined'){
            data.okText = obj.okText;
        }
        if(typeof obj.cancelText !== 'undefined'){
            data.cancelText = obj.cancelText;
        }
        if(typeof obj.content !== 'undefined'){
            data.content = obj.content;
        }
        if(typeof obj.title !== 'undefined'){
            data.title = obj.title;
        }

        var buttons = [];

        if(data.cancel !== false){
            buttons.push({
                text: data.cancelText,
                click: function () {
                    data.cancel();
                    dialog.close();
                }
            });
        }
        if(data.ok !== false){
            buttons.push({
                text: data.okText,
                skin: 'simple-orange',
                click: function () {
                    data.ok();
                    dialog.close();
                }
            });
        }

        var dialog = $A.newDialog({
            content:data.content,
            width:'500px',
            positionY:'40px',
            title:data.title,
            close:function(){
                this.remove();
            },
            buttons:buttons
        }).open();

    };

})();

(function(){

    $A.alert = function (obj) {
        var obj = obj || {};
        var data = {
            ok:function(){},
            okText:$A.translate('OK'),
            content:'',
            title:$A.translate('Something wrong...')
        };
        if(typeof obj === 'string'){
            data.content = obj;
        }else{
            if (typeof obj.ok === 'function') {
                data.ok = obj.ok;
            }
            if (typeof obj.cancel === 'function') {
                data.cancel = obj.cancel;
            }
            if (typeof obj.okText !== 'undefined') {
                data.okText = obj.okText;
            }
            if (typeof obj.cancelText !== 'undefined') {
                data.cancelText = obj.cancelText;
            }
            if (typeof obj.content !== 'undefined') {
                data.content = obj.content;
            }
            if (typeof obj.title !== 'undefined') {
                data.title = obj.title;
            }
        }

        var dialog = $A.newDialog({
            content:data.content,
            width:'500px',
            positionY:'40px',
            title:data.title,
            close:function(){
                this.remove();
            },
            buttons:[
                {
                    text: data.okText,
                    skin:'simple-orange',
                    click: function () {
                        data.ok();
                        dialog.close();
                    }
                }
            ]
        }).open();

    };

})();

(function(){
    $A.runEvent = function(eventName, thisParameter, parameterArray){
        return $A.runFunctions($A.customEvents.functions[eventName], thisParameter || $A, parameterArray || []);
    };
})();

(function(){
    var originalDocumentTitle = document.title;
    var step = 0;
    var characters = ['☰', '☱', '☳', '☷', '☶', '☴'];
    //var characters = ['➫', '➩', '➬', '➩'];
    var titleInterval = false;
    var isPageVisibilityInterval = false;

    $A.isPageVisibility = function (doc) {
        if(typeof doc === 'undefined'){
            var doc = document;
        }

        var isHidden = false;
        if (typeof doc.hidden !== "undefined") {
            isHidden = doc.hidden;
        } else if (typeof doc.mozHidden !== "undefined") {
            isHidden = doc.mozHidden;
        } else if (typeof doc.msHidden !== "undefined") {
            isHidden = doc.msHidden;
        } else if (typeof doc.webkitHidden !== "undefined") {
            isHidden = doc.webkitHidden;
        }

        if(isHidden){
            isPageVisibilityInterval = setInterval(function() {
                if (!isHidden) {
                    $A.isPageVisibility();
                    return false;
                }
            }, 1000);
            /*
            if(characters.indexOf(document.title[0]) < 0){
                originalDocumentTitle = document.title;
                step = 0;
                titleInterval = setInterval(function(){
                    document.title = characters[step] + ' ' + originalDocumentTitle;
                    step++;
                    if(step >= characters.length){
                        step = 0;
                    }
                }, 1000);
            }
            document.title = characters[step] + ' ' + originalDocumentTitle;
            */
        }else{
            /*
            if(characters.indexOf(document.title[0]) >= 0){
                clearInterval(titleInterval);
                document.title = originalDocumentTitle;
            }
            */
        }

        return !isHidden;
    };
})();

(function(){
    $A.sameAs = function(s1, s2){
        var a = false;
        if(s1 == s2){
            return true;
        }
        
        s1 = String(s1);
        s2 = String(s2);
        if(s1 == s2){
            return true;
        }

        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        if(s1 == s2){
            return true;
        }

        s1 = s1.replace(/[_-]|\s/gi, '');
        s2 = s2.replace(/[_-]|\s/gi, '');
        if(s1 == s2){
            return true;
        }

        return false;
    }
})();

(function(){
    console.log('%c AutomizyJs module loaded! ', 'background: #000000; color: #bada55; font-size:14px');
    return $A;
})();
window.$A = $A;
window.AutomizyJs = $A;
})($);