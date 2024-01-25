"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappdelegate.ts":
/*!*****************************!*\
  !*** ./src/lappdelegate.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppDelegate = exports.frameBuffer = exports.gl = exports.s_instance = exports.ky_text = exports.canvas = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lapptexturemanager_1 = __webpack_require__(/*! ./lapptexturemanager */ "./src/lapptexturemanager.ts");
var lappview_1 = __webpack_require__(/*! ./lappview */ "./src/lappview.ts");
exports.canvas = null;
exports.ky_text = null;
exports.s_instance = null;
exports.gl = null;
exports.frameBuffer = null;
var LAppDelegate = (function () {
    function LAppDelegate() {
        this._captured = false;
        this._mouseX = 0.0;
        this._mouseY = 0.0;
        this._isEnd = false;
        this._cubismOption = new live2dcubismframework_1.Option();
        this._view = new lappview_1.LAppView();
        this._textureManager = new lapptexturemanager_1.LAppTextureManager();
    }
    LAppDelegate.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppDelegate();
        }
        return exports.s_instance;
    };
    LAppDelegate.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance.release();
        }
        exports.s_instance = null;
    };
    LAppDelegate.prototype.initialize = function () {
        exports.canvas = document.createElement('canvas');
        exports.ky_text = document.createElement('canvas');
        exports.canvas.setAttribute('id', 'ky-character-area');
        exports.ky_text.setAttribute('id', 'ky-text');
        exports.ky_text.style.cssText = "position: absolute; top:0; left: 0;";
        if (LAppDefine.CanvasSize === 'auto') {
            this._resizeCanvas();
            exports.ky_text.width = window.innerWidth / 2;
            exports.ky_text.height = window.innerHeight / 2;
        }
        else {
            exports.canvas.width = LAppDefine.CanvasSize.width;
            exports.canvas.height = LAppDefine.CanvasSize.height;
            exports.ky_text.width = LAppDefine.CanvasSize.width;
            exports.ky_text.height = LAppDefine.CanvasSize.height;
        }
        console.log(exports.ky_text);
        exports.gl = exports.canvas.getContext('webgl') || exports.canvas.getContext('experimental-webgl');
        if (!exports.gl) {
            alert('Cannot initialize WebGL. This browser does not support.');
            exports.gl = null;
            document.body.innerHTML =
                'This browser does not support the <code>&lt;canvas&gt;</code> element.';
            return false;
        }
        document.body.appendChild(exports.canvas);
        document.body.appendChild(exports.ky_text);
        var ctx = exports.ky_text.getContext('2d');
        runTest(ctx);
        if (!exports.frameBuffer) {
            exports.frameBuffer = exports.gl.getParameter(exports.gl.FRAMEBUFFER_BINDING);
        }
        exports.gl.enable(exports.gl.BLEND);
        exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
        var supportTouch = 'ontouchend' in exports.canvas;
        if (supportTouch) {
            exports.canvas.ontouchstart = onTouchBegan;
            exports.canvas.ontouchmove = onTouchMoved;
            exports.canvas.ontouchend = onTouchEnded;
            exports.canvas.ontouchcancel = onTouchCancel;
        }
        else {
            exports.canvas.onmousedown = onClickBegan;
            exports.canvas.onmousemove = onMouseMoved;
            exports.canvas.onmouseup = onClickEnded;
        }
        this._view.initialize();
        this.initializeCubism();
        return true;
    };
    LAppDelegate.prototype.onResize = function () {
        this._resizeCanvas();
        this._view.initialize();
        this._view.initializeSprite();
        var viewport = [0, 0, exports.canvas.width, exports.canvas.height];
        exports.gl.viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
    };
    LAppDelegate.prototype.release = function () {
        this._textureManager.release();
        this._textureManager = null;
        this._view.release();
        this._view = null;
        lapplive2dmanager_1.LAppLive2DManager.releaseInstance();
        live2dcubismframework_1.CubismFramework.dispose();
    };
    LAppDelegate.prototype.run = function () {
        var _this = this;
        var loop = function () {
            if (exports.s_instance == null) {
                return;
            }
            lapppal_1.LAppPal.updateTime();
            exports.gl.clearColor(0.0, 0.0, 0.0, 1.0);
            exports.gl.enable(exports.gl.DEPTH_TEST);
            exports.gl.depthFunc(exports.gl.LEQUAL);
            exports.gl.clear(exports.gl.COLOR_BUFFER_BIT | exports.gl.DEPTH_BUFFER_BIT);
            exports.gl.clearDepth(1.0);
            exports.gl.enable(exports.gl.BLEND);
            exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
            _this._view.render();
            requestAnimationFrame(loop);
        };
        loop();
    };
    LAppDelegate.prototype.createShader = function () {
        var vertexShaderId = exports.gl.createShader(exports.gl.VERTEX_SHADER);
        if (vertexShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create vertexShader');
            return null;
        }
        var vertexShader = 'precision mediump float;' +
            'attribute vec3 position;' +
            'attribute vec2 uv;' +
            'varying vec2 vuv;' +
            'void main(void)' +
            '{' +
            '   gl_Position = vec4(position, 1.0);' +
            '   vuv = uv;' +
            '}';
        exports.gl.shaderSource(vertexShaderId, vertexShader);
        exports.gl.compileShader(vertexShaderId);
        var fragmentShaderId = exports.gl.createShader(exports.gl.FRAGMENT_SHADER);
        if (fragmentShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create fragmentShader');
            return null;
        }
        var fragmentShader = 'precision mediump float;' +
            'varying vec2 vuv;' +
            'uniform sampler2D texture;' +
            'void main(void)' +
            '{' +
            '   gl_FragColor = texture2D(texture, vuv);' +
            '}';
        exports.gl.shaderSource(fragmentShaderId, fragmentShader);
        exports.gl.compileShader(fragmentShaderId);
        var programId = exports.gl.createProgram();
        exports.gl.attachShader(programId, vertexShaderId);
        exports.gl.attachShader(programId, fragmentShaderId);
        exports.gl.deleteShader(vertexShaderId);
        exports.gl.deleteShader(fragmentShaderId);
        exports.gl.linkProgram(programId);
        exports.gl.useProgram(programId);
        return programId;
    };
    LAppDelegate.prototype.getView = function () {
        return this._view;
    };
    LAppDelegate.prototype.getTextureManager = function () {
        return this._textureManager;
    };
    LAppDelegate.prototype.initializeCubism = function () {
        this._cubismOption.logFunction = lapppal_1.LAppPal.printMessage;
        this._cubismOption.loggingLevel = LAppDefine.CubismLoggingLevel;
        live2dcubismframework_1.CubismFramework.startUp(this._cubismOption);
        live2dcubismframework_1.CubismFramework.initialize();
        lapplive2dmanager_1.LAppLive2DManager.getInstance();
        lapppal_1.LAppPal.updateTime();
        this._view.initializeSprite();
    };
    LAppDelegate.prototype._resizeCanvas = function () {
        exports.canvas.width = window.innerWidth;
        exports.canvas.height = window.innerHeight;
    };
    return LAppDelegate;
}());
exports.LAppDelegate = LAppDelegate;
function onClickBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.pageX;
    var posY = e.pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onMouseMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onClickEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.changedTouches[0].pageX;
    var posY = e.changedTouches[0].pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onTouchMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onTouchEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchCancel(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function runTest(ctx) {
    try {
        var random_number = Math.random() * 10;
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Testing R number => ".concat(random_number), 10, 50);
        setTimeout(function () {
            runTest(ctx);
        }, 2000);
    }
    catch (error) {
        console.log('error on render ? ...');
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3937497dc54127796292"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYWNlZTkwMTIwZjBiY2E2NjVmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsNklBQTJFO0FBRTNFLDhGQUEyQztBQUMzQyx1R0FBd0Q7QUFDeEQseUVBQW9DO0FBQ3BDLDBHQUEwRDtBQUMxRCw0RUFBc0M7QUFFM0IsY0FBTSxHQUFzQixJQUFJLENBQUM7QUFDakMsZUFBTyxHQUFzQixJQUFJLENBQUM7QUFDbEMsa0JBQVUsR0FBaUIsSUFBSSxDQUFDO0FBQ2hDLFVBQUUsR0FBMEIsSUFBSSxDQUFDO0FBQ2pDLG1CQUFXLEdBQXFCLElBQUksQ0FBQztBQVFoRDtJQW1RRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw4QkFBTSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBclFhLHdCQUFXLEdBQXpCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLDRCQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUtNLGlDQUFVLEdBQWpCO1FBSUUs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O1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0QztBQUNILENBQUM7Ozs7Ozs7OztVQ2hlRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFwcGRlbGVnYXRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtRnJhbWV3b3JrLCBPcHRpb24gfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vbGFwcHRleHR1cmVtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBWaWV3IH0gZnJvbSAnLi9sYXBwdmlldyc7XG5cbmV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XG5leHBvcnQgbGV0IGt5X3RleHQ6IEhUTUxDYW52YXNFbGVtZW50ID0gbnVsbDtcbmV4cG9ydCBsZXQgc19pbnN0YW5jZTogTEFwcERlbGVnYXRlID0gbnVsbDtcbmV4cG9ydCBsZXQgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XG5leHBvcnQgbGV0IGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyID0gbnVsbDtcblxuLyoqXG4gKiDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjgq/jg6njgrnjgIJcbiAqIEN1YmlzbSBTREvjga7nrqHnkIbjgpLooYzjgYbjgIJcbiAqL1xuXG4vLyBUaGlzIGlzIGEgc2luZ2xldG9uIGNsYXNzXG5leHBvcnQgY2xhc3MgTEFwcERlbGVnYXRlIHtcbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkui/lOOBmeOAglxuICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgYznlJ/miJDjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/lhoXpg6jjgafjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTEFwcERlbGVnYXRlIHtcbiAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gbmV3IExBcHBEZWxlZ2F0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWxlYXNlSW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHNfaW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZS5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQVBQ44Gr5b+F6KaB44Gq54mp44KS5Yid5pyf5YyW44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiBib29sZWFuIHtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7kvZzmiJBcblxuICAgIC8vIENyZWF0aW5nIGVsZW1lbnRzXG4gICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAga3lfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gICAgLy8gRGVmaW5lIHRoZSBuYW1lcyBvZiBlbGVtZW50c1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2t5LWNoYXJhY3Rlci1hcmVhJyk7XG4gICAga3lfdGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2t5LXRleHQnKTtcbiAgICBreV90ZXh0LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjA7IGxlZnQ6IDA7XCI7XG5cbiAgICBpZiAoTEFwcERlZmluZS5DYW52YXNTaXplID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZUNhbnZhcygpO1xuICAgICAga3lfdGV4dC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgIGt5X3RleHQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzLndpZHRoID0gTEFwcERlZmluZS5DYW52YXNTaXplLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IExBcHBEZWZpbmUuQ2FudmFzU2l6ZS5oZWlnaHQ7XG4gICAgICBreV90ZXh0LndpZHRoID0gTEFwcERlZmluZS5DYW52YXNTaXplLndpZHRoO1xuICAgICAga3lfdGV4dC5oZWlnaHQgPSBMQXBwRGVmaW5lLkNhbnZhc1NpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGt5X3RleHQpO1xuXG4gICAgLy8gZ2zjgrPjg7Pjg4bjgq3jgrnjg4jjgpLliJ3mnJ/ljJZcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cbiAgICBpZiAoIWdsKSB7XG4gICAgICBhbGVydCgnQ2Fubm90IGluaXRpYWxpemUgV2ViR0wuIFRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0LicpO1xuICAgICAgZ2wgPSBudWxsO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9XG4gICAgICAgICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgPGNvZGU+Jmx0O2NhbnZhcyZndDs8L2NvZGU+IGVsZW1lbnQuJztcblxuICAgICAgLy8gZ2zliJ3mnJ/ljJblpLHmlZdcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDjgq3jg6Pjg7Pjg5DjgrnjgpIgRE9NIOOBq+i/veWKoFxuICAgIC8vIEFkZGluZyB0aGUgY2FudmFzXG4gICAgLy8gdG9kbyA6IGhlcmUgYWRkIHRoZSBjYW52YXMgdG8gdGhlIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChreV90ZXh0KTtcblxuICAgIC8vIFRlc3RpbmdcbiAgICBjb25zdCBjdHggPSBreV90ZXh0LmdldENvbnRleHQoJzJkJyk7XG4gICAgcnVuVGVzdChjdHgpO1xuXG4gICAgaWYgKCFmcmFtZUJ1ZmZlcikge1xuICAgICAgZnJhbWVCdWZmZXIgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuRlJBTUVCVUZGRVJfQklORElORyk7XG4gICAgfVxuXG4gICAgLy8g6YCP6YGO6Kit5a6aXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgIGNvbnN0IHN1cHBvcnRUb3VjaDogYm9vbGVhbiA9ICdvbnRvdWNoZW5kJyBpbiBjYW52YXM7XG5cbiAgICBpZiAoc3VwcG9ydFRvdWNoKSB7XG4gICAgICAvLyDjgr/jg4Pjg4HplqLpgKPjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDnmbvpjLJcbiAgICAgIGNhbnZhcy5vbnRvdWNoc3RhcnQgPSBvblRvdWNoQmVnYW47XG4gICAgICBjYW52YXMub250b3VjaG1vdmUgPSBvblRvdWNoTW92ZWQ7XG4gICAgICBjYW52YXMub250b3VjaGVuZCA9IG9uVG91Y2hFbmRlZDtcbiAgICAgIGNhbnZhcy5vbnRvdWNoY2FuY2VsID0gb25Ub3VjaENhbmNlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g44Oe44Km44K56Zai6YCj44Kz44O844Or44OQ44OD44Kv6Zai5pWw55m76YyyXG4gICAgICBjYW52YXMub25tb3VzZWRvd24gPSBvbkNsaWNrQmVnYW47XG4gICAgICBjYW52YXMub25tb3VzZW1vdmUgPSBvbk1vdXNlTW92ZWQ7XG4gICAgICBjYW52YXMub25tb3VzZXVwID0gb25DbGlja0VuZGVkO1xuICAgIH1cblxuICAgIC8vIEFwcFZpZXfjga7liJ3mnJ/ljJZcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemUoKTtcblxuICAgIC8vIEN1YmlzbSBTREvjga7liJ3mnJ/ljJZcbiAgICB0aGlzLmluaXRpYWxpemVDdWJpc20oKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBjYW52YXMgYW5kIHJlLWluaXRpYWxpemUgdmlldy5cbiAgICovXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVDYW52YXMoKTtcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemVTcHJpdGUoKTtcblxuICAgIC8vIOOCreODo+ODs+ODkOOCueOCteOCpOOCuuOCkua4oeOBmVxuICAgIGNvbnN0IHZpZXdwb3J0OiBudW1iZXJbXSA9IFswLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdO1xuXG4gICAgZ2wudmlld3BvcnQodmlld3BvcnRbMF0sIHZpZXdwb3J0WzFdLCB2aWV3cG9ydFsyXSwgdmlld3BvcnRbM10pO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fdGV4dHVyZU1hbmFnZXIucmVsZWFzZSgpO1xuICAgIHRoaXMuX3RleHR1cmVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHRoaXMuX3ZpZXcucmVsZWFzZSgpO1xuICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuXG4gICAgLy8g44Oq44K944O844K544KS6Kej5pS+XG4gICAgTEFwcExpdmUyRE1hbmFnZXIucmVsZWFzZUluc3RhbmNlKCk7XG5cbiAgICAvLyBDdWJpc20gU0RL44Gu6Kej5pS+XG4gICAgQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrp/ooYzlh6bnkIbjgIJcbiAgICovXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgLy8g44Oh44Kk44Oz44Or44O844OXXG4gICAgY29uc3QgbG9vcCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIC8vIOOCpOODs+OCueOCv+ODs+OCueOBruacieeEoeOBrueiuuiqjVxuICAgICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOaZgumWk+abtOaWsFxuICAgICAgTEFwcFBhbC51cGRhdGVUaW1lKCk7XG5cbiAgICAgIC8vIOeUu+mdouOBruWIneacn+WMllxuICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG4gICAgICAvLyDmt7Hluqbjg4bjgrnjg4jjgpLmnInlirnljJZcbiAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcblxuICAgICAgLy8g6L+R44GP44Gr44GC44KL54mp5L2T44Gv44CB6YGg44GP44Gr44GC44KL54mp5L2T44KS6KaG44GE6Zqg44GZXG4gICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcblxuICAgICAgLy8g44Kr44Op44O844OQ44OD44OV44Kh44KE5rex5bqm44OQ44OD44OV44Kh44KS44Kv44Oq44Ki44GZ44KLXG4gICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cbiAgICAgIGdsLmNsZWFyRGVwdGgoMS4wKTtcblxuICAgICAgLy8g6YCP6YGO6Kit5a6aXG4gICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cbiAgICAgIC8vIOaPj+eUu+abtOaWsFxuICAgICAgdGhpcy5fdmlldy5yZW5kZXIoKTtcblxuICAgICAgLy8g44Or44O844OX44Gu44Gf44KB44Gr5YaN5biw5ZG844Gz5Ye644GXXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICBsb29wKCk7XG4gIH1cblxuICAvKipcbiAgICog44K344Kn44O844OA44O844KS55m76Yyy44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlU2hhZGVyKCk6IFdlYkdMUHJvZ3JhbSB7XG4gICAgLy8g44OQ44O844OG44OD44Kv44K544K344Kn44O844OA44O844Gu44Kz44Oz44OR44Kk44OrXG4gICAgY29uc3QgdmVydGV4U2hhZGVySWQgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG5cbiAgICBpZiAodmVydGV4U2hhZGVySWQgPT0gbnVsbCkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ2ZhaWxlZCB0byBjcmVhdGUgdmVydGV4U2hhZGVyJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXI6IHN0cmluZyA9XG4gICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyArXG4gICAgICAnYXR0cmlidXRlIHZlYzMgcG9zaXRpb247JyArXG4gICAgICAnYXR0cmlidXRlIHZlYzIgdXY7JyArXG4gICAgICAndmFyeWluZyB2ZWMyIHZ1djsnICtcbiAgICAgICd2b2lkIG1haW4odm9pZCknICtcbiAgICAgICd7JyArXG4gICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAxLjApOycgK1xuICAgICAgJyAgIHZ1diA9IHV2OycgK1xuICAgICAgJ30nO1xuXG4gICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlcklkLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodmVydGV4U2hhZGVySWQpO1xuXG4gICAgLy8g44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu44Kz44Oz44OR44Kk44OrXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXJJZCA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuXG4gICAgaWYgKGZyYWdtZW50U2hhZGVySWQgPT0gbnVsbCkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ2ZhaWxlZCB0byBjcmVhdGUgZnJhZ21lbnRTaGFkZXInKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyOiBzdHJpbmcgPVxuICAgICAgJ3ByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OycgK1xuICAgICAgJ3ZhcnlpbmcgdmVjMiB2dXY7JyArXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTsnICtcbiAgICAgICd2b2lkIG1haW4odm9pZCknICtcbiAgICAgICd7JyArXG4gICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHZ1dik7JyArXG4gICAgICAnfSc7XG5cbiAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXJJZCwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjga7kvZzmiJBcbiAgICBjb25zdCBwcm9ncmFtSWQgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW1JZCwgdmVydGV4U2hhZGVySWQpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtSWQsIGZyYWdtZW50U2hhZGVySWQpO1xuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcklkKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICAvLyDjg6rjg7Pjgq9cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtSWQpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSWQpO1xuXG4gICAgcmV0dXJuIHByb2dyYW1JZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWV35oOF5aCx44KS5Y+W5b6X44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgZ2V0VmlldygpOiBMQXBwVmlldyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXc7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGV4dHVyZU1hbmFnZXIoKTogTEFwcFRleHR1cmVNYW5hZ2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dHVyZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jYXB0dXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuX21vdXNlWCA9IDAuMDtcbiAgICB0aGlzLl9tb3VzZVkgPSAwLjA7XG4gICAgdGhpcy5faXNFbmQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2N1YmlzbU9wdGlvbiA9IG5ldyBPcHRpb24oKTtcbiAgICB0aGlzLl92aWV3ID0gbmV3IExBcHBWaWV3KCk7XG4gICAgdGhpcy5fdGV4dHVyZU1hbmFnZXIgPSBuZXcgTEFwcFRleHR1cmVNYW5hZ2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3ViaXNtIFNES+OBruWIneacn+WMllxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVDdWJpc20oKTogdm9pZCB7XG4gICAgLy8gc2V0dXAgY3ViaXNtXG4gICAgdGhpcy5fY3ViaXNtT3B0aW9uLmxvZ0Z1bmN0aW9uID0gTEFwcFBhbC5wcmludE1lc3NhZ2U7XG4gICAgdGhpcy5fY3ViaXNtT3B0aW9uLmxvZ2dpbmdMZXZlbCA9IExBcHBEZWZpbmUuQ3ViaXNtTG9nZ2luZ0xldmVsO1xuICAgIEN1YmlzbUZyYW1ld29yay5zdGFydFVwKHRoaXMuX2N1YmlzbU9wdGlvbik7XG5cbiAgICAvLyBpbml0aWFsaXplIGN1YmlzbVxuICAgIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBsb2FkIG1vZGVsXG4gICAgTEFwcExpdmUyRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgIExBcHBQYWwudXBkYXRlVGltZSgpO1xuXG4gICAgdGhpcy5fdmlldy5pbml0aWFsaXplU3ByaXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIHRoZSBjYW52YXMgdG8gZmlsbCB0aGUgc2NyZWVuLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVzaXplQ2FudmFzKCk6IHZvaWQge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBfY3ViaXNtT3B0aW9uOiBPcHRpb247IC8vIEN1YmlzbSBTREsgT3B0aW9uXG4gIF92aWV3OiBMQXBwVmlldzsgLy8gVmlld+aDheWgsVxuICBfY2FwdHVyZWQ6IGJvb2xlYW47IC8vIOOCr+ODquODg+OCr+OBl+OBpuOBhOOCi+OBi1xuICBfbW91c2VYOiBudW1iZXI7IC8vIOODnuOCpuOCuVjluqfmqJlcbiAgX21vdXNlWTogbnVtYmVyOyAvLyDjg57jgqbjgrlZ5bqn5qiZXG4gIF9pc0VuZDogYm9vbGVhbjsgLy8gQVBQ57WC5LqG44GX44Gm44GE44KL44GLXG4gIF90ZXh0dXJlTWFuYWdlcjogTEFwcFRleHR1cmVNYW5hZ2VyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjg57jg43jg7zjgrjjg6Pjg7xcbn1cblxuLyoqXG4gKiDjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25DbGlja0JlZ2FuKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IHRydWU7XG5cbiAgY29uc3QgcG9zWDogbnVtYmVyID0gZS5wYWdlWDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5wYWdlWTtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNCZWdhbihwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjg57jgqbjgrnjg53jgqTjg7Pjgr/jgYzli5XjgYTjgZ/jgonlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Nb3VzZU1vdmVkKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc01vdmVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCr+ODquODg+OCr+OBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbkNsaWNrRW5kZWQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSBmYWxzZTtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgcG9zWDogbnVtYmVyID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZOiBudW1iZXIgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNFbmRlZChwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgr/jg4Pjg4HjgZfjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gdHJ1ZTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzQmVnYW4ocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K544Ov44Kk44OX44GZ44KL44Go5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzTW92ZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hFbmRlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgcG9zWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0VuZGVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCv+ODg+ODgeOBjOOCreODo+ODs+OCu+ODq+OBleOCjOOCi+OBqOWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoQ2FuY2VsKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gZmFsc2U7XG5cbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzRW5kZWQocG9zWCwgcG9zWSk7XG59XG5cblxuXG5cblxuLy8gdG9kbyA6IFRlc3RpbmdcbmZ1bmN0aW9uIHJ1blRlc3QoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSoxMDtcbiAgICBjdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICBjdHguZmlsbFRleHQoYFRlc3RpbmcgUiBudW1iZXIgPT4gJHtyYW5kb21fbnVtYmVyfWAsIDEwLCA1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBydW5UZXN0KGN0eCk7XG4gICAgfSwgMjAwMCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIG9uIHJlbmRlciA/IC4uLicpO1xuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjM5Mzc0OTdkYzU0MTI3Nzk2MjkyXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=