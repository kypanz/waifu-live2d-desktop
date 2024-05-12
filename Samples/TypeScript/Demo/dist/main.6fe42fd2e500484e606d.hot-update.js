"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappwavfilehandler.ts":
/*!***********************************!*\
  !*** ./src/lappwavfilehandler.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteReader = exports.WavFileInfo = exports.LAppWavFileHandler = exports.s_instance = void 0;
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
exports.s_instance = null;
var LAppWavFileHandler = (function () {
    function LAppWavFileHandler() {
        var _this = this;
        this._loadFiletoBytes = function (arrayBuffer, length) {
            _this._byteReader._fileByte = arrayBuffer;
            _this._byteReader._fileDataView = new DataView(_this._byteReader._fileByte);
            _this._byteReader._fileSize = length;
        };
        this._pcmData = null;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        this._sampleOffset = 0.0;
        this._wavFileInfo = new WavFileInfo();
        this._byteReader = new ByteReader();
    }
    LAppWavFileHandler.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppWavFileHandler();
        }
        return exports.s_instance;
    };
    LAppWavFileHandler.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppWavFileHandler.prototype.update = function (deltaTimeSeconds) {
        var goalOffset;
        var rms;
        if (this._pcmData == null ||
            this._sampleOffset >= this._wavFileInfo._samplesPerChannel) {
            this._lastRms = 0.0;
            return false;
        }
        this._userTimeSeconds += deltaTimeSeconds;
        goalOffset = Math.floor(this._userTimeSeconds * this._wavFileInfo._samplingRate);
        if (goalOffset > this._wavFileInfo._samplesPerChannel) {
            goalOffset = this._wavFileInfo._samplesPerChannel;
        }
        rms = 0.0;
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            for (var sampleCount = this._sampleOffset; sampleCount < goalOffset; sampleCount++) {
                var pcm = this._pcmData[channelCount][sampleCount];
                rms += pcm * pcm;
            }
        }
        rms = Math.sqrt(rms /
            (this._wavFileInfo._numberOfChannels *
                (goalOffset - this._sampleOffset)));
        this._lastRms = rms;
        this._sampleOffset = goalOffset;
        return true;
    };
    LAppWavFileHandler.prototype.start = function (filePath) {
        this._sampleOffset = 0;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        console.log('buscando => ', filePath);
        if (!this.loadWavFile(filePath)) {
            console.log('se ejecuta esto del loadWavFile !');
            console.log('MANAGER MODEL => ', lapplive2dmanager_1.LAppLive2DManager.getInstance());
            var audio = document.getElementById('voice');
            audio.src = filePath;
            audio.play();
            return;
        }
    };
    LAppWavFileHandler.prototype.getRms = function () {
        return this._lastRms;
    };
    LAppWavFileHandler.prototype.loadWavFile = function (filePath) {
        var _this = this;
        var ret = false;
        if (this._pcmData != null) {
            this.releasePcmData();
        }
        var asyncFileLoad = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fetch(filePath).then(function (responce) {
                        return responce.arrayBuffer();
                    })];
            });
        }); };
        var asyncWavFileManager = (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, fmtChunkSize, dataChunkSize, channelCount, sampleCount, channelCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._byteReader;
                        return [4, asyncFileLoad()];
                    case 1:
                        _a._fileByte = _b.sent();
                        this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
                        this._byteReader._fileSize = this._byteReader._fileByte.byteLength;
                        this._byteReader._readOffset = 0;
                        if (this._byteReader._fileByte == null ||
                            this._byteReader._fileSize < 4) {
                            return [2, false];
                        }
                        this._wavFileInfo._fileName = filePath;
                        try {
                            if (!this._byteReader.getCheckSignature('RIFF')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "RIFF".');
                            }
                            this._byteReader.get32LittleEndian();
                            if (!this._byteReader.getCheckSignature('WAVE')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "WAVE".');
                            }
                            if (!this._byteReader.getCheckSignature('fmt ')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "fmt".');
                            }
                            fmtChunkSize = this._byteReader.get32LittleEndian();
                            if (this._byteReader.get16LittleEndian() != 1) {
                                ret = false;
                                throw new Error('File is not linear PCM.');
                            }
                            this._wavFileInfo._numberOfChannels =
                                this._byteReader.get16LittleEndian();
                            this._wavFileInfo._samplingRate = this._byteReader.get32LittleEndian();
                            this._byteReader.get32LittleEndian();
                            this._byteReader.get16LittleEndian();
                            this._wavFileInfo._bitsPerSample = this._byteReader.get16LittleEndian();
                            if (fmtChunkSize > 16) {
                                this._byteReader._readOffset += fmtChunkSize - 16;
                            }
                            while (!this._byteReader.getCheckSignature('data') &&
                                this._byteReader._readOffset < this._byteReader._fileSize) {
                                this._byteReader._readOffset +=
                                    this._byteReader.get32LittleEndian() + 4;
                            }
                            if (this._byteReader._readOffset >= this._byteReader._fileSize) {
                                ret = false;
                                throw new Error('Cannot find "data" Chunk.');
                            }
                            {
                                dataChunkSize = this._byteReader.get32LittleEndian();
                                this._wavFileInfo._samplesPerChannel =
                                    (dataChunkSize * 8) /
                                        (this._wavFileInfo._bitsPerSample *
                                            this._wavFileInfo._numberOfChannels);
                            }
                            this._pcmData = new Array(this._wavFileInfo._numberOfChannels);
                            for (channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                                this._pcmData[channelCount] = new Float32Array(this._wavFileInfo._samplesPerChannel);
                            }
                            for (sampleCount = 0; sampleCount < this._wavFileInfo._samplesPerChannel; sampleCount++) {
                                for (channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                                    this._pcmData[channelCount][sampleCount] = this.getPcmSample();
                                }
                            }
                            ret = true;
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [2];
                }
            });
        }); })();
        return ret;
    };
    LAppWavFileHandler.prototype.getPcmSample = function () {
        var pcm32;
        switch (this._wavFileInfo._bitsPerSample) {
            case 8:
                pcm32 = this._byteReader.get8() - 128;
                pcm32 <<= 24;
                break;
            case 16:
                pcm32 = this._byteReader.get16LittleEndian() << 16;
                break;
            case 24:
                pcm32 = this._byteReader.get24LittleEndian() << 8;
                break;
            default:
                pcm32 = 0;
                break;
        }
        return pcm32 / 2147483647;
    };
    LAppWavFileHandler.prototype.releasePcmData = function () {
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            delete this._pcmData[channelCount];
        }
        delete this._pcmData;
        this._pcmData = null;
    };
    return LAppWavFileHandler;
}());
exports.LAppWavFileHandler = LAppWavFileHandler;
var WavFileInfo = (function () {
    function WavFileInfo() {
        this._fileName = '';
        this._numberOfChannels = 0;
        this._bitsPerSample = 0;
        this._samplingRate = 0;
        this._samplesPerChannel = 0;
    }
    return WavFileInfo;
}());
exports.WavFileInfo = WavFileInfo;
var ByteReader = (function () {
    function ByteReader() {
        this._fileByte = null;
        this._fileDataView = null;
        this._fileSize = 0;
        this._readOffset = 0;
    }
    ByteReader.prototype.get8 = function () {
        var ret = this._fileDataView.getUint8(this._readOffset);
        this._readOffset++;
        return ret;
    };
    ByteReader.prototype.get16LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 2;
        return ret;
    };
    ByteReader.prototype.get24LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 3;
        return ret;
    };
    ByteReader.prototype.get32LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 3) << 24) |
            (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 4;
        return ret;
    };
    ByteReader.prototype.getCheckSignature = function (reference) {
        var getSignature = new Uint8Array(4);
        var referenceString = new TextEncoder().encode(reference);
        if (reference.length != 4) {
            return false;
        }
        for (var signatureOffset = 0; signatureOffset < 4; signatureOffset++) {
            getSignature[signatureOffset] = this.get8();
        }
        return (getSignature[0] == referenceString[0] &&
            getSignature[1] == referenceString[1] &&
            getSignature[2] == referenceString[2] &&
            getSignature[3] == referenceString[3]);
    };
    return ByteReader;
}());
exports.ByteReader = ByteReader;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "45acfab1faa2a8dbb22b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZmU0MmZkMmU1MDA0ODRlNjA2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLHVHQUF3RDtBQUU3QyxrQkFBVSxHQUF1QixJQUFJLENBQUM7QUFFakQ7SUEwUUU7UUFBQSxpQkFPQztRQVFELHFCQUFnQixHQUFHLFVBQUMsV0FBd0IsRUFBRSxNQUFjO1lBQzFELEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUN6QyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFsQkEsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUExUWEsOEJBQVcsR0FBekI7UUFDRSxJQUFJLGtCQUFVLElBQUksSUFBSSxFQUFFO1lBQ3RCLGtCQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxrQkFBVSxDQUFDO0lBQ3BCLENBQUM7SUFLYSxrQ0FBZSxHQUE3QjtRQUNFLElBQUksa0JBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsa0JBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNyQjtRQUVELGtCQUFVLEdBQUcsSUFBSSxD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WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssSUFBSSxlQUFlLEdBQUcsQ0FBQyxFQUFFLGVBQWUsR0FBRyxDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUU7WUFDcEUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sQ0FDTCxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUN0QyxDQUFDO0lBQ0osQ0FBQztJQU1ILGlCQUFDO0FBQUQsQ0FBQztBQXBGWSxnQ0FBVTs7Ozs7Ozs7O1VDNVR2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFwcHdhdmZpbGVoYW5kbGVyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgTEFwcFBhbCB9IGZyb20gJy4vbGFwcHBhbCc7XG5pbXBvcnQgeyBMQXBwTGl2ZTJETWFuYWdlciB9IGZyb20gJy4vbGFwcGxpdmUyZG1hbmFnZXInO1xuXG5leHBvcnQgbGV0IHNfaW5zdGFuY2U6IExBcHBXYXZGaWxlSGFuZGxlciA9IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gdm9pZCAwO1xuICAgIH1cblxuICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpIHtcbiAgICBsZXQgZ29hbE9mZnNldDogbnVtYmVyO1xuICAgIGxldCBybXM6IG51bWJlcjtcblxuICAgIC8vIOODh+ODvOOCv+ODreODvOODieWJjS/jg5XjgqHjgqTjg6vmnKvlsL7jgavpgZTjgZfjgZ/loLTlkIjjga/mm7TmlrDjgZfjgarjgYRcbiAgICBpZiAoXG4gICAgICB0aGlzLl9wY21EYXRhID09IG51bGwgfHxcbiAgICAgIHRoaXMuX3NhbXBsZU9mZnNldCA+PSB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWxcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g57WM6YGO5pmC6ZaT5b6M44Gu54q25oWL44KS5L+d5oyBXG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG4gICAgZ29hbE9mZnNldCA9IE1hdGguZmxvb3IoXG4gICAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKiB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlXG4gICAgKTtcbiAgICBpZiAoZ29hbE9mZnNldCA+IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCkge1xuICAgICAgZ29hbE9mZnNldCA9IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbDtcbiAgICB9XG5cbiAgICAvLyBSTVPoqIjmuKxcbiAgICBybXMgPSAwLjA7XG4gICAgZm9yIChcbiAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICBjaGFubmVsQ291bnQrK1xuICAgICkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gdGhpcy5fc2FtcGxlT2Zmc2V0O1xuICAgICAgICBzYW1wbGVDb3VudCA8IGdvYWxPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50KytcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwY20gPSB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF1bc2FtcGxlQ291bnRdO1xuICAgICAgICBybXMgKz0gcGNtICogcGNtO1xuICAgICAgfVxuICAgIH1cbiAgICBybXMgPSBNYXRoLnNxcnQoXG4gICAgICBybXMgL1xuICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgKlxuICAgICAgICAgIChnb2FsT2Zmc2V0IC0gdGhpcy5fc2FtcGxlT2Zmc2V0KSlcbiAgICApO1xuXG4gICAgdGhpcy5fbGFzdFJtcyA9IHJtcztcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSBnb2FsT2Zmc2V0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyDjgrXjg7Pjg5fjg6vkvY3lj4LnhafkvY3nva7jgpLliJ3mnJ/ljJZcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSAwO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcblxuICAgIC8vIFJNU+WApOOCkuODquOCu+ODg+ODiFxuICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnU2VhcmNoaW5nIGZvciBhdWRpbyA/Pz8nKTtcblxuICAgIFxuXG4gICAgY29uc29sZS5sb2coJ2J1c2NhbmRvID0+ICcsIGZpbGVQYXRoKTtcbiAgICBpZiAoIXRoaXMubG9hZFdhdkZpbGUoZmlsZVBhdGgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2UgZWplY3V0YSBlc3RvIGRlbCBsb2FkV2F2RmlsZSAhJylcbiAgICAgIC8vIFRPRE8gOiBsaXBzLCBhcXVpIHZhbiBlbCBtb3ZpbWllbnRvIGRlIGxhIGJvY2FcbiAgICAgIGNvbnNvbGUubG9nKCdNQU5BR0VSIE1PREVMID0+ICcsIExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCkpOyBcbiAgICAgIGNvbnN0IGF1ZGlvOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2UnKTtcbiAgICAgIGF1ZGlvLnNyYyA9IGZpbGVQYXRoO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRSbXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFJtcztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkV2F2RmlsZShmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX3BjbURhdGEgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZWxlYXNlUGNtRGF0YSgpO1xuICAgIH1cblxuICAgIC8vIOODleOCoeOCpOODq+ODreODvOODiVxuICAgIGNvbnN0IGFzeW5jRmlsZUxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goZmlsZVBhdGgpLnRoZW4ocmVzcG9uY2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uY2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhc3luY1dhdkZpbGVNYW5hZ2VyID0gKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID0gYXdhaXQgYXN5bmNGaWxlTG9hZCgpO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZURhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlKTtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplID0gdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUuYnl0ZUxlbmd0aDtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPSAwO1xuXG4gICAgICAvLyDjg5XjgqHjgqTjg6vjg63jg7zjg4njgavlpLHmlZfjgZfjgabjgYTjgovjgYvjgIHlhYjpoK3jga7jgrfjgrDjg43jg4Hjg6NcIlJJRkZcIuOCkuWFpeOCjOOCi+OCteOCpOOCuuOCguOBquOBhOWgtOWQiOOBr+WkseaVl1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9PSBudWxsIHx8XG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplIDwgNFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8g44OV44Kh44Kk44Or5ZCNXG4gICAgICB0aGlzLl93YXZGaWxlSW5mby5fZmlsZU5hbWUgPSBmaWxlUGF0aDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiUklGRlwiXG4gICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnUklGRicpKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJSSUZGXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OV44Kh44Kk44Or44K144Kk44K6LTjvvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJXQVZFXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdXQVZFJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcIldBVkVcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJmbXQgXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdmbXQgJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcImZtdFwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZtdOODgeODo+ODs+OCr+OCteOCpOOCulxuICAgICAgICBjb25zdCBmbXRDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODleOCqeODvOODnuODg+ODiElE44GvMe+8iOODquODi+OColBDTe+8ieS7peWkluWPl+OBkeS7mOOBkeOBquOBhFxuICAgICAgICBpZiAodGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpICE9IDEpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgaXMgbm90IGxpbmVhciBQQ00uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OB44Oj44Oz44ON44Or5pWwXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzID1cbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOOCteODs+ODl+ODquODs+OCsOODrOODvOODiFxuICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjg4fjg7zjgr/pgJ/luqZbYnl0ZS9zZWNd77yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OW44Ot44OD44Kv44K144Kk44K677yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g6YeP5a2Q5YyW44OT44OD44OI5pWwXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyBmbXTjg4Hjg6Pjg7Pjgq/jga7mi6HlvLXpg6jliIbjga7oqq3jgb/po5vjgbDjgZdcbiAgICAgICAgaWYgKGZtdENodW5rU2l6ZSA+IDE2KSB7XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCArPSBmbXRDaHVua1NpemUgLSAxNjtcbiAgICAgICAgfVxuICAgICAgICAvLyBcImRhdGFcIuODgeODo+ODs+OCr+OBjOWHuuePvuOBmeOCi+OBvuOBp+iqreOBv+mjm+OBsOOBl1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2RhdGEnKSAmJlxuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPCB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ICs9XG4gICAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCkgKyA0O1xuICAgICAgICB9XG4gICAgICAgIC8vIOODleOCoeOCpOODq+WGheOBq1wiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GX44Gq44GL44Gj44GfXG4gICAgICAgIGlmICh0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ID49IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBcImRhdGFcIiBDaHVuay4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgrXjg7Pjg5fjg6vmlbBcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGRhdGFDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsID1cbiAgICAgICAgICAgIChkYXRhQ2h1bmtTaXplICogOCkgL1xuICAgICAgICAgICAgKHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlICpcbiAgICAgICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmgmOWfn+eiuuS/nVxuICAgICAgICB0aGlzLl9wY21EYXRhID0gbmV3IEFycmF5KHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzKTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF0gPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDms6LlvaLjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSAwO1xuICAgICAgICAgIHNhbXBsZUNvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgICAgICAgIHNhbXBsZUNvdW50KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdW3NhbXBsZUNvdW50XSA9IHRoaXMuZ2V0UGNtU2FtcGxlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGNtU2FtcGxlKCk6IG51bWJlciB7XG4gICAgbGV0IHBjbTMyO1xuXG4gICAgLy8gMzLjg5Pjg4Pjg4jluYXjgavmi6HlvLXjgZfjgabjgYvjgoktMe+9njHjga7nr4Tlm7LjgavkuLjjgoHjgotcbiAgICBzd2l0Y2ggKHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQ4KCkgLSAxMjg7XG4gICAgICAgIHBjbTMyIDw8PSAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKSA8PCAxNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MjRMaXR0bGVFbmRpYW4oKSA8PCA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIOWvvuW/nOOBl+OBpuOBhOOBquOBhOODk+ODg+ODiOW5hVxuICAgICAgICBwY20zMiA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwY20zMiAvIDIxNDc0ODM2NDc7IC8vTnVtYmVyLk1BWF9WQUxVRTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlUGNtRGF0YSgpOiB2b2lkIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBkZWxldGUgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fcGNtRGF0YTtcbiAgICB0aGlzLl9wY21EYXRhID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3BjbURhdGEgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcbiAgICB0aGlzLl9sYXN0Um1zID0gMC4wO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDAuMDtcbiAgICB0aGlzLl93YXZGaWxlSW5mbyA9IG5ldyBXYXZGaWxlSW5mbygpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIgPSBuZXcgQnl0ZVJlYWRlcigpO1xuICB9XG5cbiAgX3BjbURhdGE6IEFycmF5PEZsb2F0MzJBcnJheT47XG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjtcbiAgX2xhc3RSbXM6IG51bWJlcjtcbiAgX3NhbXBsZU9mZnNldDogbnVtYmVyO1xuICBfd2F2RmlsZUluZm86IFdhdkZpbGVJbmZvO1xuICBfYnl0ZVJlYWRlcjogQnl0ZVJlYWRlcjtcbiAgX2xvYWRGaWxldG9CeXRlcyA9IChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGxlbmd0aDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhcnJheUJ1ZmZlcjtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplID0gbGVuZ3RoO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgV2F2RmlsZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maWxlTmFtZSA9ICcnO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSAwO1xuICAgIHRoaXMuX2JpdHNQZXJTYW1wbGUgPSAwO1xuICAgIHRoaXMuX3NhbXBsaW5nUmF0ZSA9IDA7XG4gICAgdGhpcy5fc2FtcGxlc1BlckNoYW5uZWwgPSAwO1xuICB9XG5cbiAgX2ZpbGVOYW1lOiBzdHJpbmc7IC8vLzwg44OV44Kh44Kk44Or5ZCNXG4gIF9udW1iZXJPZkNoYW5uZWxzOiBudW1iZXI7IC8vLzwg44OB44Oj44Oz44ON44Or5pWwXG4gIF9iaXRzUGVyU2FtcGxlOiBudW1iZXI7IC8vLzwg44K144Oz44OX44Or44GC44Gf44KK44OT44OD44OI5pWwXG4gIF9zYW1wbGluZ1JhdGU6IG51bWJlcjsgLy8vPCDjgrXjg7Pjg5fjg6rjg7PjgrDjg6zjg7zjg4hcbiAgX3NhbXBsZXNQZXJDaGFubmVsOiBudW1iZXI7IC8vLzwgMeODgeODo+ODs+ODjeODq+OBguOBn+OCiue3j+OCteODs+ODl+ODq+aVsFxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZVJlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpbGVCeXRlID0gbnVsbDtcbiAgICB0aGlzLl9maWxlRGF0YVZpZXcgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVTaXplID0gMDtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgOOODk+ODg+ODiOiqreOBv+i+vOOBv1xuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDgg6Kqt44G/5Y+W44Gj44GfOOODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDgoKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCsrO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDE244OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MTYg6Kqt44G/5Y+W44Gj44GfMTbjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQxNkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAyO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDI044OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMjTjg5Pjg4Pjg4jlgKTvvIjkuIvkvY0yNOODk+ODg+ODiOOBq+ioreWumu+8iVxuICAgKi9cbiAgcHVibGljIGdldDI0TGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDIpIDw8IDE2KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDMy44OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMzLjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQzMkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAzKSA8PCAyNCkgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMikgPDwgMTYpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYg44K344Kw44ON44OB44Oj44Gu5Y+W5b6X44Go5Y+C54Wn5paH5a2X5YiX44Go44Gu5LiA6Ie044OB44Kn44OD44KvXG4gICAqIEBwYXJhbVtpbl0gcmVmZXJlbmNlIOaknOafu+WvvuixoeOBruOCt+OCsOODjeODgeODo+aWh+Wtl+WIl1xuICAgKiBAcmV0dmFsICB0cnVlICAgIOS4gOiHtOOBl+OBpuOBhOOCi1xuICAgKiBAcmV0dmFsICBmYWxzZSAgIOS4gOiHtOOBl+OBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIGdldENoZWNrU2lnbmF0dXJlKHJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZ2V0U2lnbmF0dXJlOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nOiBVaW50OEFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHJlZmVyZW5jZSk7XG4gICAgaWYgKHJlZmVyZW5jZS5sZW5ndGggIT0gNCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaWduYXR1cmVPZmZzZXQgPSAwOyBzaWduYXR1cmVPZmZzZXQgPCA0OyBzaWduYXR1cmVPZmZzZXQrKykge1xuICAgICAgZ2V0U2lnbmF0dXJlW3NpZ25hdHVyZU9mZnNldF0gPSB0aGlzLmdldDgoKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGdldFNpZ25hdHVyZVswXSA9PSByZWZlcmVuY2VTdHJpbmdbMF0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsxXSA9PSByZWZlcmVuY2VTdHJpbmdbMV0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsyXSA9PSByZWZlcmVuY2VTdHJpbmdbMl0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVszXSA9PSByZWZlcmVuY2VTdHJpbmdbM11cbiAgICApO1xuICB9XG5cbiAgX2ZpbGVCeXRlOiBBcnJheUJ1ZmZlcjsgLy8vPCDjg63jg7zjg4njgZfjgZ/jg5XjgqHjgqTjg6vjga7jg5DjgqTjg4jliJdcbiAgX2ZpbGVEYXRhVmlldzogRGF0YVZpZXc7XG4gIF9maWxlU2l6ZTogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+OCteOCpOOCulxuICBfcmVhZE9mZnNldDogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+WPgueFp+S9jee9rlxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjQ1YWNmYWIxZmFhMmE4ZGJiMjJiXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=