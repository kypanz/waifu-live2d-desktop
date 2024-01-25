"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/touchmanager.ts":
/*!*****************************!*\
  !*** ./src/touchmanager.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchManager = void 0;
var TouchManager = (function () {
    function TouchManager() {
        this._startX = 0.0;
        this._startY = 0.0;
        this._lastX = 0.0;
        this._lastY = 0.0;
        this._lastX1 = 0.0;
        this._lastY1 = 0.0;
        this._lastX2 = 0.0;
        this._lastY2 = 0.0;
        this._lastTouchDistance = 0.0;
        this._deltaX = 0.0;
        this._deltaY = 0.0;
        this._scale = 1.0;
        this._touchSingle = false;
        this._flipAvailable = false;
    }
    TouchManager.prototype.getCenterX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getCenterY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getDeltaX = function () {
        return this._deltaX;
    };
    TouchManager.prototype.getDeltaY = function () {
        return this._deltaY;
    };
    TouchManager.prototype.getStartX = function () {
        return this._startX;
    };
    TouchManager.prototype.getStartY = function () {
        return this._startY;
    };
    TouchManager.prototype.getScale = function () {
        return this._scale;
    };
    TouchManager.prototype.getX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getX1 = function () {
        return this._lastX1;
    };
    TouchManager.prototype.getY1 = function () {
        return this._lastY1;
    };
    TouchManager.prototype.getX2 = function () {
        return this._lastX2;
    };
    TouchManager.prototype.getY2 = function () {
        return this._lastY2;
    };
    TouchManager.prototype.isSingleTouch = function () {
        return this._touchSingle;
    };
    TouchManager.prototype.isFlickAvailable = function () {
        return this._flipAvailable;
    };
    TouchManager.prototype.disableFlick = function () {
        this._flipAvailable = false;
    };
    TouchManager.prototype.touchesBegan = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._startX = deviceX;
        this._startY = deviceY;
        this._lastTouchDistance = -1.0;
        this._flipAvailable = true;
        this._touchSingle = true;
    };
    TouchManager.prototype.touchesMoved = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._lastTouchDistance = -1.0;
        this._touchSingle = true;
        console.log('drag ?');
    };
    TouchManager.prototype.getFlickDistance = function () {
        return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
    };
    TouchManager.prototype.calculateDistance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    TouchManager.prototype.calculateMovingAmount = function (v1, v2) {
        if (v1 > 0.0 != v2 > 0.0) {
            return 0.0;
        }
        var sign = v1 > 0.0 ? 1.0 : -1.0;
        var absoluteValue1 = Math.abs(v1);
        var absoluteValue2 = Math.abs(v2);
        return (sign * (absoluteValue1 < absoluteValue2 ? absoluteValue1 : absoluteValue2));
    };
    return TouchManager;
}());
exports.TouchManager = TouchManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b60c33fbc0f38ccbcf6a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NDA2NmEyYzE1Nzg4NjZjZjhiOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0NBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxvQ0FBYSxHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFRTSxtQ0FBWSxHQUFuQixVQUFvQixPQUFlLEVBQUUsT0FBZTtRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQVFNLG1DQUFZLEdBQW5CLFVBQW9CLE9BQWUsRUFBRSxPQUFlO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFNTSx1Q0FBZ0IsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO0lBQ0osQ0FBQztJQVVNLHdDQUFpQixHQUF4QixVQUNFLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBV00sNENBQXFCLEdBQTVCLFVBQTZCLEVBQVUsRUFBRSxFQUFVO1FBQ2pELElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxJQUFNLElBQUksR0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQ0wsSUFBSSxHQUFHLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFnQkgsbUJBQUM7QUFBRCxDQUFDO0FBckxZLG9DQUFZOzs7Ozs7Ozs7VUNQekIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RvdWNobWFuYWdlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBjbGFzcyBUb3VjaE1hbmFnZXIge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdGFydFggPSAwLjA7XG4gICAgdGhpcy5fc3RhcnRZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYMSA9IDAuMDtcbiAgICB0aGlzLl9sYXN0WTEgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFgyID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZMiA9IDAuMDtcbiAgICB0aGlzLl9sYXN0VG91Y2hEaXN0YW5jZSA9IDAuMDtcbiAgICB0aGlzLl9kZWx0YVggPSAwLjA7XG4gICAgdGhpcy5fZGVsdGFZID0gMC4wO1xuICAgIHRoaXMuX3NjYWxlID0gMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gZmFsc2U7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldENlbnRlclgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2VudGVyWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWx0YVgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsdGFYO1xuICB9XG5cbiAgcHVibGljIGdldERlbHRhWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWx0YVk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhcnRYKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0WDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGFydFkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRZO1xuICB9XG5cbiAgcHVibGljIGdldFNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG5cbiAgcHVibGljIGdldFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0WSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRYMSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WDE7XG4gIH1cblxuICBwdWJsaWMgZ2V0WTEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFkxO1xuICB9XG5cbiAgcHVibGljIGdldFgyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RYMjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZMigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTI7XG4gIH1cblxuICBwdWJsaWMgaXNTaW5nbGVUb3VjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hTaW5nbGU7XG4gIH1cblxuICBwdWJsaWMgaXNGbGlja0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpcEF2YWlsYWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlRmxpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgemWi+Wni+aZguOCpOODmeODs+ODiFxuICAgKiBAcGFyYW0gZGV2aWNlWCDjgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSBkZXZpY2VZIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIC8vIHRvZG8gOiBoZXJlIHlvdSBuZWVkIHRvIGhhbmRsZSB0aGUgZXZlbnQgZW1pdGVkIHdoZW4gdG91Y2ggdGhlIHNjcmVlblxuICBwdWJsaWMgdG91Y2hlc0JlZ2FuKGRldmljZVg6IG51bWJlciwgZGV2aWNlWTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fbGFzdFggPSBkZXZpY2VYO1xuICAgIHRoaXMuX2xhc3RZID0gZGV2aWNlWTtcbiAgICB0aGlzLl9zdGFydFggPSBkZXZpY2VYO1xuICAgIHRoaXMuX3N0YXJ0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fbGFzdFRvdWNoRGlzdGFuY2UgPSAtMS4wO1xuICAgIHRoaXMuX2ZsaXBBdmFpbGFibGUgPSB0cnVlO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4njg6njg4PjgrDmmYLjga7jgqTjg5njg7Pjg4hcbiAgICogQHBhcmFtIGRldmljZVgg44K/44OD44OB44GX44Gf55S76Z2i44GueOOBruWApFxuICAgKiBAcGFyYW0gZGV2aWNlWSDjgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5544Gu5YCkXG4gICAqL1xuICAvLyBUaGlzIGNhbiBiZSBkcmFnID9cbiAgcHVibGljIHRvdWNoZXNNb3ZlZChkZXZpY2VYOiBudW1iZXIsIGRldmljZVk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9sYXN0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fbGFzdFRvdWNoRGlzdGFuY2UgPSAtMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnZHJhZyA/Jyk7XG4gIH1cblxuICAvKipcbiAgICog44OV44Oq44OD44Kv44Gu6Led6Zui5ris5a6aXG4gICAqIEByZXR1cm4g44OV44Oq44OD44Kv6Led6ZuiXG4gICAqL1xuICBwdWJsaWMgZ2V0RmxpY2tEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKFxuICAgICAgdGhpcy5fc3RhcnRYLFxuICAgICAgdGhpcy5fc3RhcnRZLFxuICAgICAgdGhpcy5fbGFzdFgsXG4gICAgICB0aGlzLl9sYXN0WVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog54K577yR44GL44KJ54K577yS44G444Gu6Led6Zui44KS5rGC44KB44KLXG4gICAqXG4gICAqIEBwYXJhbSB4MSDvvJHjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSB5MSDvvJHjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5544Gu5YCkXG4gICAqIEBwYXJhbSB4MiDvvJLjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSB5MiDvvJLjgaTnm67jga7jgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5544Gu5YCkXG4gICAqL1xuICBwdWJsaWMgY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgeDE6IG51bWJlcixcbiAgICB5MTogbnVtYmVyLFxuICAgIHgyOiBudW1iZXIsXG4gICAgeTI6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHgxIC0geDIpICogKHgxIC0geDIpICsgKHkxIC0geTIpICogKHkxIC0geTIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDvvJLjgaTnm67jga7lgKTjgYvjgonjgIHnp7vli5Xph4/jgpLmsYLjgoHjgovjgIJcbiAgICog6YGV44GG5pa55ZCR44Gu5aC05ZCI44Gv56e75YuV6YeP77yQ44CC5ZCM44GY5pa55ZCR44Gu5aC05ZCI44Gv44CB57W25a++5YCk44GM5bCP44GV44GE5pa544Gu5YCk44KS5Y+C54Wn44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSB2MSDvvJHjgaTnm67jga7np7vli5Xph49cbiAgICogQHBhcmFtIHYyIO+8kuOBpOebruOBruenu+WLlemHj1xuICAgKlxuICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruenu+WLlemHj1xuICAgKi9cbiAgcHVibGljIGNhbGN1bGF0ZU1vdmluZ0Ftb3VudCh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodjEgPiAwLjAgIT0gdjIgPiAwLjApIHtcbiAgICAgIHJldHVybiAwLjA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbjogbnVtYmVyID0gdjEgPiAwLjAgPyAxLjAgOiAtMS4wO1xuICAgIGNvbnN0IGFic29sdXRlVmFsdWUxID0gTWF0aC5hYnModjEpO1xuICAgIGNvbnN0IGFic29sdXRlVmFsdWUyID0gTWF0aC5hYnModjIpO1xuICAgIHJldHVybiAoXG4gICAgICBzaWduICogKGFic29sdXRlVmFsdWUxIDwgYWJzb2x1dGVWYWx1ZTIgPyBhYnNvbHV0ZVZhbHVlMSA6IGFic29sdXRlVmFsdWUyKVxuICAgICk7XG4gIH1cblxuICBfc3RhcnRZOiBudW1iZXI7IC8vIOOCv+ODg+ODgeOCkumWi+Wni+OBl+OBn+aZguOBrnjjga7lgKRcbiAgX3N0YXJ0WDogbnVtYmVyOyAvLyDjgr/jg4Pjg4HjgpLplovlp4vjgZfjgZ/mmYLjga5544Gu5YCkXG4gIF9sYXN0WDogbnVtYmVyOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga5444Gu5YCkXG4gIF9sYXN0WTogbnVtYmVyOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga5544Gu5YCkXG4gIF9sYXN0WDE6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LiA44Gk55uu44GueOOBruWApFxuICBfbGFzdFkxOiBudW1iZXI7IC8vIOODgOODluODq+OCv+ODg+ODgeaZguOBruS4gOOBpOebruOBrnnjga7lgKRcbiAgX2xhc3RYMjogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuozjgaTnm67jga5444Gu5YCkXG4gIF9sYXN0WTI6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LqM44Gk55uu44GueeOBruWApFxuICBfbGFzdFRvdWNoRGlzdGFuY2U6IG51bWJlcjsgLy8gMuacrOS7peS4iuOBp+OCv+ODg+ODgeOBl+OBn+OBqOOBjeOBruaMh+OBrui3nembolxuICBfZGVsdGFYOiBudW1iZXI7IC8vIOWJjeWbnuOBruWApOOBi+OCieS7iuWbnuOBruWApOOBuOOBrnjjga7np7vli5Xot53pm6LjgIJcbiAgX2RlbHRhWTogbnVtYmVyOyAvLyDliY3lm57jga7lgKTjgYvjgonku4rlm57jga7lgKTjgbjjga5544Gu56e75YuV6Led6Zui44CCXG4gIF9zY2FsZTogbnVtYmVyOyAvLyDjgZPjga7jg5Xjg6zjg7zjg6DjgafmjpvjgZHlkIjjgo/jgZvjgovmi6HlpKfnjofjgILmi6HlpKfmk43kvZzkuK3ku6XlpJbjga8x44CCXG4gIF90b3VjaFNpbmdsZTogYm9vbGVhbjsgLy8g44K344Oz44Kw44Or44K/44OD44OB5pmC44GvdHJ1ZVxuICBfZmxpcEF2YWlsYWJsZTogYm9vbGVhbjsgLy8g44OV44Oq44OD44OX44GM5pyJ5Yq544GL44Gp44GG44GLXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYjYwYzMzZmJjMGYzOGNjYmNmNmFcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==