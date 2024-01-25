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
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);
        ctx.fillStyle = "#FFFFFF";
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6e24d404aded5763d057"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNGFiNWE4YTgyMzZlOWYxNDE5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsNklBQTJFO0FBRTNFLDhGQUEyQztBQUMzQyx1R0FBd0Q7QUFDeEQseUVBQW9DO0FBQ3BDLDBHQUEwRDtBQUMxRCw0RUFBc0M7QUFFM0IsY0FBTSxHQUFzQixJQUFJLENBQUM7QUFDakMsZUFBTyxHQUFzQixJQUFJLENBQUM7QUFDbEMsa0JBQVUsR0FBaUIsSUFBSSxDQUFDO0FBQ2hDLFVBQUUsR0FBMEIsSUFBSSxDQUFDO0FBQ2pDLG1CQUFXLEdBQXFCLElBQUksQ0FBQztBQVFoRDtJQXFRRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw4QkFBTSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBdlFhLHdCQUFXLEdBQXpCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDakM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLDRCQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUtNLGlDQUFVLEdBQWpCO1FBSUUs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LElBQUksR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFcEQsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFLRCxTQUFTLGFBQWEsQ0FBQyxDQUFhO0lBQ2xDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRTdDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ3JDLGlCQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLE9BQU87S0FDUjtJQUVELElBQU0sSUFBSSxHQUFJLENBQUMsQ0FBQyxNQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFM0QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXBELFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7Ozs7VUMvY0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHBkZWxlZ2F0ZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IEN1YmlzbUZyYW1ld29yaywgT3B0aW9uIH0gZnJvbSAnQGZyYW1ld29yay9saXZlMmRjdWJpc21mcmFtZXdvcmsnO1xuXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBMQXBwTGl2ZTJETWFuYWdlciB9IGZyb20gJy4vbGFwcGxpdmUyZG1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcFBhbCB9IGZyb20gJy4vbGFwcHBhbCc7XG5pbXBvcnQgeyBMQXBwVGV4dHVyZU1hbmFnZXIgfSBmcm9tICcuL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwVmlldyB9IGZyb20gJy4vbGFwcHZpZXcnO1xuXG5leHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBudWxsO1xuZXhwb3J0IGxldCBreV90ZXh0OiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XG5leHBvcnQgbGV0IHNfaW5zdGFuY2U6IExBcHBEZWxlZ2F0ZSA9IG51bGw7XG5leHBvcnQgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xuZXhwb3J0IGxldCBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlciA9IG51bGw7XG5cbi8qKlxuICog44Ki44OX44Oq44Kx44O844K344On44Oz44Kv44Op44K544CCXG4gKiBDdWJpc20gU0RL44Gu566h55CG44KS6KGM44GG44CCXG4gKi9cblxuLy8gVGhpcyBpcyBhIHNpbmdsZXRvbiBjbGFzc1xuZXhwb3J0IGNsYXNzIExBcHBEZWxlZ2F0ZSB7XG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLov5TjgZnjgIJcbiAgICog44Kk44Oz44K544K/44Oz44K544GM55Sf5oiQ44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv5YaF6YOo44Gn44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GZ44KL44CCXG4gICAqXG4gICAqIEByZXR1cm4g44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBEZWxlZ2F0ZSB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwRGVsZWdhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UucmVsZWFzZSgpO1xuICAgIH1cblxuICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQUOOBq+W/heimgeOBqueJqeOCkuWIneacn+WMluOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogYm9vbGVhbiB7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu5L2c5oiQXG5cbiAgICAvLyBDcmVhdGluZyBlbGVtZW50c1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGt5X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICAgIC8vIERlZmluZSB0aGUgbmFtZXMgb2YgZWxlbWVudHNcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsICdreS1jaGFyYWN0ZXItYXJlYScpO1xuICAgIGt5X3RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdreS10ZXh0Jyk7XG4gICAga3lfdGV4dC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDowOyBsZWZ0OiAwO1wiO1xuXG4gICAgaWYgKExBcHBEZWZpbmUuQ2FudmFzU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl9yZXNpemVDYW52YXMoKTtcbiAgICAgIGt5X3RleHQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICBreV90ZXh0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IExBcHBEZWZpbmUuQ2FudmFzU2l6ZS53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBMQXBwRGVmaW5lLkNhbnZhc1NpemUuaGVpZ2h0O1xuICAgICAga3lfdGV4dC53aWR0aCA9IExBcHBEZWZpbmUuQ2FudmFzU2l6ZS53aWR0aDtcbiAgICAgIGt5X3RleHQuaGVpZ2h0ID0gTEFwcERlZmluZS5DYW52YXNTaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhreV90ZXh0KTtcblxuICAgIC8vIGds44Kz44Oz44OG44Kt44K544OI44KS5Yid5pyf5YyWXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG4gICAgaWYgKCFnbCkge1xuICAgICAgYWxlcnQoJ0Nhbm5vdCBpbml0aWFsaXplIFdlYkdMLiBUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydC4nKTtcbiAgICAgIGdsID0gbnVsbDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPVxuICAgICAgICAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIDxjb2RlPiZsdDtjYW52YXMmZ3Q7PC9jb2RlPiBlbGVtZW50Lic7XG5cbiAgICAgIC8vIGds5Yid5pyf5YyW5aSx5pWXXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544KSIERPTSDjgavov73liqBcbiAgICAvLyBBZGRpbmcgdGhlIGNhbnZhc1xuICAgIC8vIHRvZG8gOiBoZXJlIGFkZCB0aGUgY2FudmFzIHRvIHRoZSBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoa3lfdGV4dCk7XG5cbiAgICAvLyBUZXN0aW5nXG4gICAgY29uc3QgY3R4ID0ga3lfdGV4dC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGVsbG8gV29ybGRcIiwgMTAsIDUwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG5cbiAgICBpZiAoIWZyYW1lQnVmZmVyKSB7XG4gICAgICBmcmFtZUJ1ZmZlciA9IGdsLmdldFBhcmFtZXRlcihnbC5GUkFNRUJVRkZFUl9CSU5ESU5HKTtcbiAgICB9XG5cbiAgICAvLyDpgI/pgY7oqK3lrppcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuXG4gICAgY29uc3Qgc3VwcG9ydFRvdWNoOiBib29sZWFuID0gJ29udG91Y2hlbmQnIGluIGNhbnZhcztcblxuICAgIGlmIChzdXBwb3J0VG91Y2gpIHtcbiAgICAgIC8vIOOCv+ODg+ODgemWoumAo+OCs+ODvOODq+ODkOODg+OCr+mWouaVsOeZu+mMslxuICAgICAgY2FudmFzLm9udG91Y2hzdGFydCA9IG9uVG91Y2hCZWdhbjtcbiAgICAgIGNhbnZhcy5vbnRvdWNobW92ZSA9IG9uVG91Y2hNb3ZlZDtcbiAgICAgIGNhbnZhcy5vbnRvdWNoZW5kID0gb25Ub3VjaEVuZGVkO1xuICAgICAgY2FudmFzLm9udG91Y2hjYW5jZWwgPSBvblRvdWNoQ2FuY2VsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDjg57jgqbjgrnplqLpgKPjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDnmbvpjLJcbiAgICAgIGNhbnZhcy5vbm1vdXNlZG93biA9IG9uQ2xpY2tCZWdhbjtcbiAgICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IG9uTW91c2VNb3ZlZDtcbiAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSBvbkNsaWNrRW5kZWQ7XG4gICAgfVxuXG4gICAgLy8gQXBwVmlld+OBruWIneacn+WMllxuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gQ3ViaXNtIFNES+OBruWIneacn+WMllxuICAgIHRoaXMuaW5pdGlhbGl6ZUN1YmlzbSgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIGNhbnZhcyBhbmQgcmUtaW5pdGlhbGl6ZSB2aWV3LlxuICAgKi9cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZUNhbnZhcygpO1xuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZVNwcml0ZSgpO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544K144Kk44K644KS5rih44GZXG4gICAgY29uc3Qgdmlld3BvcnQ6IG51bWJlcltdID0gWzAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XG5cbiAgICBnbC52aWV3cG9ydCh2aWV3cG9ydFswXSwgdmlld3BvcnRbMV0sIHZpZXdwb3J0WzJdLCB2aWV3cG9ydFszXSk7XG4gIH1cblxuICAvKipcbiAgICog6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlci5yZWxlYXNlKCk7XG4gICAgdGhpcy5fdGV4dHVyZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fdmlldy5yZWxlYXNlKCk7XG4gICAgdGhpcy5fdmlldyA9IG51bGw7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjgpLop6PmlL5cbiAgICBMQXBwTGl2ZTJETWFuYWdlci5yZWxlYXNlSW5zdGFuY2UoKTtcblxuICAgIC8vIEN1YmlzbSBTREvjga7op6PmlL5cbiAgICBDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWun+ihjOWHpueQhuOAglxuICAgKi9cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICAvLyDjg6HjgqTjg7Pjg6vjg7zjg5dcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgLy8g44Kk44Oz44K544K/44Oz44K544Gu5pyJ54Sh44Gu56K66KqNXG4gICAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8g5pmC6ZaT5pu05pawXG4gICAgICBMQXBwUGFsLnVwZGF0ZVRpbWUoKTtcblxuICAgICAgLy8g55S76Z2i44Gu5Yid5pyf5YyWXG4gICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG5cbiAgICAgIC8vIOa3seW6puODhuOCueODiOOCkuacieWKueWMllxuICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAvLyDov5HjgY/jgavjgYLjgovniankvZPjga/jgIHpgaDjgY/jgavjgYLjgovniankvZPjgpLopobjgYTpmqDjgZlcbiAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuXG4gICAgICAvLyDjgqvjg6njg7zjg5Djg4Pjg5XjgqHjgoTmt7Hluqbjg5Djg4Pjg5XjgqHjgpLjgq/jg6rjgqLjgZnjgotcbiAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAgICAgZ2wuY2xlYXJEZXB0aCgxLjApO1xuXG4gICAgICAvLyDpgI/pgY7oqK3lrppcbiAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgICAgLy8g5o+P55S75pu05pawXG4gICAgICB0aGlzLl92aWV3LnJlbmRlcigpO1xuXG4gICAgICAvLyDjg6vjg7zjg5fjga7jgZ/jgoHjgavlho3luLDlkbzjgbPlh7rjgZdcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuICAgIGxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjgqfjg7zjg4Djg7zjgpLnmbvpjLLjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVTaGFkZXIoKTogV2ViR0xQcm9ncmFtIHtcbiAgICAvLyDjg5Djg7zjg4bjg4Pjgq/jgrnjgrfjgqfjg7zjg4Djg7zjga7jgrPjg7Pjg5HjgqTjg6tcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXJJZCA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcblxuICAgIGlmICh2ZXJ0ZXhTaGFkZXJJZCA9PSBudWxsKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnZmFpbGVkIHRvIGNyZWF0ZSB2ZXJ0ZXhTaGFkZXInKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleFNoYWRlcjogc3RyaW5nID1cbiAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnICtcbiAgICAgICdhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjsnICtcbiAgICAgICdhdHRyaWJ1dGUgdmVjMiB1djsnICtcbiAgICAgICd2YXJ5aW5nIHZlYzIgdnV2OycgK1xuICAgICAgJ3ZvaWQgbWFpbih2b2lkKScgK1xuICAgICAgJ3snICtcbiAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7JyArXG4gICAgICAnICAgdnV2ID0gdXY7JyArXG4gICAgICAnfSc7XG5cbiAgICBnbC5zaGFkZXJTb3VyY2UodmVydGV4U2hhZGVySWQsIHZlcnRleFNoYWRlcik7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXJJZCk7XG5cbiAgICAvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7jgrPjg7Pjg5HjgqTjg6tcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlcklkID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICBpZiAoZnJhZ21lbnRTaGFkZXJJZCA9PSBudWxsKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnZmFpbGVkIHRvIGNyZWF0ZSBmcmFnbWVudFNoYWRlcicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXI6IHN0cmluZyA9XG4gICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyArXG4gICAgICAndmFyeWluZyB2ZWMyIHZ1djsnICtcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlOycgK1xuICAgICAgJ3ZvaWQgbWFpbih2b2lkKScgK1xuICAgICAgJ3snICtcbiAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdnV2KTsnICtcbiAgICAgICd9JztcblxuICAgIGdsLnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlcklkLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcklkKTtcblxuICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBruS9nOaIkFxuICAgIGNvbnN0IHByb2dyYW1JZCA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbUlkLCB2ZXJ0ZXhTaGFkZXJJZCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW1JZCwgZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVySWQpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcklkKTtcblxuICAgIC8vIOODquODs+OCr1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW1JZCk7XG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JZCk7XG5cbiAgICByZXR1cm4gcHJvZ3JhbUlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXfmg4XloLHjgpLlj5blvpfjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBnZXRWaWV3KCk6IExBcHBWaWV3IHtcbiAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZXh0dXJlTWFuYWdlcigpOiBMQXBwVGV4dHVyZU1hbmFnZXIge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NhcHR1cmVkID0gZmFsc2U7XG4gICAgdGhpcy5fbW91c2VYID0gMC4wO1xuICAgIHRoaXMuX21vdXNlWSA9IDAuMDtcbiAgICB0aGlzLl9pc0VuZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fY3ViaXNtT3B0aW9uID0gbmV3IE9wdGlvbigpO1xuICAgIHRoaXMuX3ZpZXcgPSBuZXcgTEFwcFZpZXcoKTtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlciA9IG5ldyBMQXBwVGV4dHVyZU1hbmFnZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdWJpc20gU0RL44Gu5Yid5pyf5YyWXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUN1YmlzbSgpOiB2b2lkIHtcbiAgICAvLyBzZXR1cCBjdWJpc21cbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nRnVuY3Rpb24gPSBMQXBwUGFsLnByaW50TWVzc2FnZTtcbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nZ2luZ0xldmVsID0gTEFwcERlZmluZS5DdWJpc21Mb2dnaW5nTGV2ZWw7XG4gICAgQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAodGhpcy5fY3ViaXNtT3B0aW9uKTtcblxuICAgIC8vIGluaXRpYWxpemUgY3ViaXNtXG4gICAgQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKTtcblxuICAgIC8vIGxvYWQgbW9kZWxcbiAgICBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgTEFwcFBhbC51cGRhdGVUaW1lKCk7XG5cbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemVTcHJpdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgdGhlIGNhbnZhcyB0byBmaWxsIHRoZSBzY3JlZW4uXG4gICAqL1xuICBwcml2YXRlIF9yZXNpemVDYW52YXMoKTogdm9pZCB7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIF9jdWJpc21PcHRpb246IE9wdGlvbjsgLy8gQ3ViaXNtIFNESyBPcHRpb25cbiAgX3ZpZXc6IExBcHBWaWV3OyAvLyBWaWV35oOF5aCxXG4gIF9jYXB0dXJlZDogYm9vbGVhbjsgLy8g44Kv44Oq44OD44Kv44GX44Gm44GE44KL44GLXG4gIF9tb3VzZVg6IG51bWJlcjsgLy8g44Oe44Km44K5WOW6p+aomVxuICBfbW91c2VZOiBudW1iZXI7IC8vIOODnuOCpuOCuVnluqfmqJlcbiAgX2lzRW5kOiBib29sZWFuOyAvLyBBUFDntYLkuobjgZfjgabjgYTjgovjgYtcbiAgX3RleHR1cmVNYW5hZ2VyOiBMQXBwVGV4dHVyZU1hbmFnZXI7IC8vIOODhuOCr+OCueODgeODo+ODnuODjeODvOOCuOODo+ODvFxufVxuXG4vKipcbiAqIOOCr+ODquODg+OCr+OBl+OBn+OBqOOBjeOBq+WRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbkNsaWNrQmVnYW4oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gdHJ1ZTtcblxuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLnBhZ2VYO1xuICBjb25zdCBwb3NZOiBudW1iZXIgPSBlLnBhZ2VZO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0JlZ2FuKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOODnuOCpuOCueODneOCpOODs+OCv+OBjOWLleOBhOOBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbk1vdXNlTW92ZWQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHBvc1g6IG51bWJlciA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzTW92ZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44Kv44Oq44OD44Kv44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uQ2xpY2tFbmRlZChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0VuZGVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCv+ODg+ODgeOBl+OBn+OBqOOBjeOBq+WRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoQmVnYW4oZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNCZWdhbihwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgrnjg6/jgqTjg5fjgZnjgovjgajlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaE1vdmVkKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNNb3ZlZChwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgr/jg4Pjg4HjgYzntYLkuobjgZfjgZ/jgonlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaEVuZGVkKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gZmFsc2U7XG5cbiAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzRW5kZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K/44OD44OB44GM44Kt44Oj44Oz44K744Or44GV44KM44KL44Go5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hDYW5jZWwoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSBmYWxzZTtcblxuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNFbmRlZChwb3NYLCBwb3NZKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI2ZTI0ZDQwNGFkZWQ1NzYzZDA1N1wiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9