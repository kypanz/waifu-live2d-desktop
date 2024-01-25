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
        var positions = {
            x: this._lastX,
            y: this._lastY,
        };
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
/******/ 	__webpack_require__.h = function() { return "164448088da53f011adc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMDk1ZTU4ZmZiMTU1MzI4OWYxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0NBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FB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QUFDO1FBQzNDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQ0wsSUFBSSxHQUFHLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFnQkgsbUJBQUM7QUFBRCxDQUFDO0FBMUxZLG9DQUFZOzs7Ozs7Ozs7VUNQekIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RvdWNobWFuYWdlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBjbGFzcyBUb3VjaE1hbmFnZXIge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdGFydFggPSAwLjA7XG4gICAgdGhpcy5fc3RhcnRZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZID0gMC4wO1xuICAgIHRoaXMuX2xhc3RYMSA9IDAuMDtcbiAgICB0aGlzLl9sYXN0WTEgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFgyID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZMiA9IDAuMDtcbiAgICB0aGlzLl9sYXN0VG91Y2hEaXN0YW5jZSA9IDAuMDtcbiAgICB0aGlzLl9kZWx0YVggPSAwLjA7XG4gICAgdGhpcy5fZGVsdGFZID0gMC4wO1xuICAgIHRoaXMuX3NjYWxlID0gMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gZmFsc2U7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldENlbnRlclgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2VudGVyWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWx0YVgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsdGFYO1xuICB9XG5cbiAgcHVibGljIGdldERlbHRhWSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWx0YVk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhcnRYKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0WDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGFydFkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRZO1xuICB9XG5cbiAgcHVibGljIGdldFNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG5cbiAgcHVibGljIGdldFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFg7XG4gIH1cblxuICBwdWJsaWMgZ2V0WSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRYMSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WDE7XG4gIH1cblxuICBwdWJsaWMgZ2V0WTEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFkxO1xuICB9XG5cbiAgcHVibGljIGdldFgyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RYMjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZMigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTI7XG4gIH1cblxuICBwdWJsaWMgaXNTaW5nbGVUb3VjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hTaW5nbGU7XG4gIH1cblxuICBwdWJsaWMgaXNGbGlja0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpcEF2YWlsYWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlRmxpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fZmxpcEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgemWi+Wni+aZguOCpOODmeODs+ODiFxuICAgKiBAcGFyYW0gZGV2aWNlWCDjgr/jg4Pjg4HjgZfjgZ/nlLvpnaLjga5444Gu5YCkXG4gICAqIEBwYXJhbSBkZXZpY2VZIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIC8vIG5vdGUgOiBPbiBDbGlja1xuICAvLyB0b2RvIDogaGVyZSB5b3UgbmVlZCB0byBoYW5kbGUgdGhlIGV2ZW50IGVtaXRlZCB3aGVuIHRvdWNoIHRoZSBzY3JlZW5cbiAgcHVibGljIHRvdWNoZXNCZWdhbihkZXZpY2VYOiBudW1iZXIsIGRldmljZVk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9sYXN0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fc3RhcnRYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9zdGFydFkgPSBkZXZpY2VZO1xuICAgIHRoaXMuX2xhc3RUb3VjaERpc3RhbmNlID0gLTEuMDtcbiAgICB0aGlzLl9mbGlwQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl90b3VjaFNpbmdsZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICog44OJ44Op44OD44Kw5pmC44Gu44Kk44OZ44Oz44OIXG4gICAqIEBwYXJhbSBkZXZpY2VYIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIGRldmljZVkg44K/44OD44OB44GX44Gf55S76Z2i44GueeOBruWApFxuICAgKi9cbiAgLy8gbm90ZSA6IE9uIERyYWdcbiAgLy8gdG9kbyA6IGhlcmUgeW91IGNhbiBhZGQgYW4gZWZmZWN0IGluIGRyYWcgbW92ZW1lbnRcbiAgcHVibGljIHRvdWNoZXNNb3ZlZChkZXZpY2VYOiBudW1iZXIsIGRldmljZVk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9sYXN0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fbGFzdFRvdWNoRGlzdGFuY2UgPSAtMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gdHJ1ZTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICB4OiB0aGlzLl9sYXN0WCxcbiAgICAgIHk6IHRoaXMuX2xhc3RZLFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjg6rjg4Pjgq/jga7ot53pm6LmuKzlrppcbiAgICogQHJldHVybiDjg5Xjg6rjg4Pjgq/ot53pm6JcbiAgICovXG4gIHB1YmxpYyBnZXRGbGlja0Rpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICB0aGlzLl9zdGFydFgsXG4gICAgICB0aGlzLl9zdGFydFksXG4gICAgICB0aGlzLl9sYXN0WCxcbiAgICAgIHRoaXMuX2xhc3RZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDngrnvvJHjgYvjgonngrnvvJLjgbjjga7ot53pm6LjgpLmsYLjgoHjgotcbiAgICpcbiAgICogQHBhcmFtIHgxIO+8keOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIHkxIO+8keOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICogQHBhcmFtIHgyIO+8kuOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIHkyIO+8kuOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIHB1YmxpYyBjYWxjdWxhdGVEaXN0YW5jZShcbiAgICB4MTogbnVtYmVyLFxuICAgIHkxOiBudW1iZXIsXG4gICAgeDI6IG51bWJlcixcbiAgICB5MjogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5MikpO1xuICB9XG5cbiAgLyoqXG4gICAqIO+8kuOBpOebruOBruWApOOBi+OCieOAgeenu+WLlemHj+OCkuaxguOCgeOCi+OAglxuICAgKiDpgZXjgYbmlrnlkJHjga7loLTlkIjjga/np7vli5Xph4/vvJDjgILlkIzjgZjmlrnlkJHjga7loLTlkIjjga/jgIHntbblr77lgKTjgYzlsI/jgZXjgYTmlrnjga7lgKTjgpLlj4LnhafjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHYxIO+8keOBpOebruOBruenu+WLlemHj1xuICAgKiBAcGFyYW0gdjIg77yS44Gk55uu44Gu56e75YuV6YePXG4gICAqXG4gICAqIEByZXR1cm4g5bCP44GV44GE5pa544Gu56e75YuV6YePXG4gICAqL1xuICBwdWJsaWMgY2FsY3VsYXRlTW92aW5nQW1vdW50KHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh2MSA+IDAuMCAhPSB2MiA+IDAuMCkge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduOiBudW1iZXIgPSB2MSA+IDAuMCA/IDEuMCA6IC0xLjA7XG4gICAgY29uc3QgYWJzb2x1dGVWYWx1ZTEgPSBNYXRoLmFicyh2MSk7XG4gICAgY29uc3QgYWJzb2x1dGVWYWx1ZTIgPSBNYXRoLmFicyh2Mik7XG4gICAgcmV0dXJuIChcbiAgICAgIHNpZ24gKiAoYWJzb2x1dGVWYWx1ZTEgPCBhYnNvbHV0ZVZhbHVlMiA/IGFic29sdXRlVmFsdWUxIDogYWJzb2x1dGVWYWx1ZTIpXG4gICAgKTtcbiAgfVxuXG4gIF9zdGFydFk6IG51bWJlcjsgLy8g44K/44OD44OB44KS6ZaL5aeL44GX44Gf5pmC44GueOOBruWApFxuICBfc3RhcnRYOiBudW1iZXI7IC8vIOOCv+ODg+ODgeOCkumWi+Wni+OBl+OBn+aZguOBrnnjga7lgKRcbiAgX2xhc3RYOiBudW1iZXI7IC8vIOOCt+ODs+OCsOODq+OCv+ODg+ODgeaZguOBrnjjga7lgKRcbiAgX2xhc3RZOiBudW1iZXI7IC8vIOOCt+ODs+OCsOODq+OCv+ODg+ODgeaZguOBrnnjga7lgKRcbiAgX2xhc3RYMTogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuIDjgaTnm67jga5444Gu5YCkXG4gIF9sYXN0WTE6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LiA44Gk55uu44GueeOBruWApFxuICBfbGFzdFgyOiBudW1iZXI7IC8vIOODgOODluODq+OCv+ODg+ODgeaZguOBruS6jOOBpOebruOBrnjjga7lgKRcbiAgX2xhc3RZMjogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuozjgaTnm67jga5544Gu5YCkXG4gIF9sYXN0VG91Y2hEaXN0YW5jZTogbnVtYmVyOyAvLyAy5pys5Lul5LiK44Gn44K/44OD44OB44GX44Gf44Go44GN44Gu5oyH44Gu6Led6ZuiXG4gIF9kZWx0YVg6IG51bWJlcjsgLy8g5YmN5Zue44Gu5YCk44GL44KJ5LuK5Zue44Gu5YCk44G444GueOOBruenu+WLlei3nembouOAglxuICBfZGVsdGFZOiBudW1iZXI7IC8vIOWJjeWbnuOBruWApOOBi+OCieS7iuWbnuOBruWApOOBuOOBrnnjga7np7vli5Xot53pm6LjgIJcbiAgX3NjYWxlOiBudW1iZXI7IC8vIOOBk+OBruODleODrOODvOODoOOBp+aOm+OBkeWQiOOCj+OBm+OCi+aLoeWkp+eOh+OAguaLoeWkp+aTjeS9nOS4reS7peWkluOBrzHjgIJcbiAgX3RvdWNoU2luZ2xlOiBib29sZWFuOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga90cnVlXG4gIF9mbGlwQXZhaWxhYmxlOiBib29sZWFuOyAvLyDjg5Xjg6rjg4Pjg5fjgYzmnInlirnjgYvjganjgYbjgYtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxNjQ0NDgwODhkYTUzZjAxMWFkY1wiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9