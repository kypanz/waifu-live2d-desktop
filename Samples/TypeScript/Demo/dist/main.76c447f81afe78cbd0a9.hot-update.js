"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappwavfilehandler.ts":
/*!***********************************!*\
  !*** ./src/lappwavfilehandler.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


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
/******/ 	__webpack_require__.h = function() { return "779e6fb039674b2e5b36"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NmM0NDdmODFhZmU3OGNiZDBhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNXLGtCQUFVLEdBQXVCLElBQUksQ0FBQztBQUVqRDtJQTBRRTtRQUFBLGlCQU9DO1FBUUQscUJBQWdCLEdBQUcsVUFBQyxXQUF3QixFQUFFLE1BQWM7WUFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQWxCQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQTFRYSw4QkFBVyxHQUF6QjtRQUNFLElBQUksa0JBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsa0JBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLGtDQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FB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QWUsRUFBRSxFQUFFO1lBQ3BFLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLENBQ0wsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFNSCxpQkFBQztBQUFELENBQUM7QUFwRlksZ0NBQVU7Ozs7Ozs7OztVQzNUdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHB3YXZmaWxlaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuXG5leHBvcnQgbGV0IHNfaW5zdGFuY2U6IExBcHBXYXZGaWxlSGFuZGxlciA9IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gdm9pZCAwO1xuICAgIH1cblxuICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpIHtcbiAgICBsZXQgZ29hbE9mZnNldDogbnVtYmVyO1xuICAgIGxldCBybXM6IG51bWJlcjtcblxuICAgIC8vIOODh+ODvOOCv+ODreODvOODieWJjS/jg5XjgqHjgqTjg6vmnKvlsL7jgavpgZTjgZfjgZ/loLTlkIjjga/mm7TmlrDjgZfjgarjgYRcbiAgICBpZiAoXG4gICAgICB0aGlzLl9wY21EYXRhID09IG51bGwgfHxcbiAgICAgIHRoaXMuX3NhbXBsZU9mZnNldCA+PSB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWxcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g57WM6YGO5pmC6ZaT5b6M44Gu54q25oWL44KS5L+d5oyBXG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG4gICAgZ29hbE9mZnNldCA9IE1hdGguZmxvb3IoXG4gICAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKiB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlXG4gICAgKTtcbiAgICBpZiAoZ29hbE9mZnNldCA+IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCkge1xuICAgICAgZ29hbE9mZnNldCA9IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbDtcbiAgICB9XG5cbiAgICAvLyBSTVPoqIjmuKxcbiAgICBybXMgPSAwLjA7XG4gICAgZm9yIChcbiAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICBjaGFubmVsQ291bnQrK1xuICAgICkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gdGhpcy5fc2FtcGxlT2Zmc2V0O1xuICAgICAgICBzYW1wbGVDb3VudCA8IGdvYWxPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50KytcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwY20gPSB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF1bc2FtcGxlQ291bnRdO1xuICAgICAgICBybXMgKz0gcGNtICogcGNtO1xuICAgICAgfVxuICAgIH1cbiAgICBybXMgPSBNYXRoLnNxcnQoXG4gICAgICBybXMgL1xuICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgKlxuICAgICAgICAgIChnb2FsT2Zmc2V0IC0gdGhpcy5fc2FtcGxlT2Zmc2V0KSlcbiAgICApO1xuXG4gICAgdGhpcy5fbGFzdFJtcyA9IHJtcztcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSBnb2FsT2Zmc2V0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyDjgrXjg7Pjg5fjg6vkvY3lj4LnhafkvY3nva7jgpLliJ3mnJ/ljJZcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSAwO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcblxuICAgIC8vIFJNU+WApOOCkuODquOCu+ODg+ODiFxuICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnU2VhcmNoaW5nIGZvciBhdWRpbyA/Pz8nKTtcblxuICAgIFxuXG4gICAgY29uc29sZS5sb2coJ2J1c2NhbmRvID0+ICcsIGZpbGVQYXRoKTtcbiAgICBpZiAoIXRoaXMubG9hZFdhdkZpbGUoZmlsZVBhdGgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2UgZWplY3V0YSBlc3RvIGRlbCBsb2FkV2F2RmlsZSAhJylcbiAgICAgIC8vIFRPRE8gOiBsaXBzLCBhcXVpIHZhbiBlbCBtb3ZpbWllbnRvIGRlIGxhIGJvY2FcbiAgICAgIFxuICAgICAgY29uc3QgYXVkaW86IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZScpO1xuICAgICAgYXVkaW8uc3JjID0gZmlsZVBhdGg7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFJtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Um1zO1xuICB9XG5cbiAgcHVibGljIGxvYWRXYXZGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fcGNtRGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbGVhc2VQY21EYXRhKCk7XG4gICAgfVxuXG4gICAgLy8g44OV44Kh44Kk44Or44Ot44O844OJXG4gICAgY29uc3QgYXN5bmNGaWxlTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChmaWxlUGF0aCkudGhlbihyZXNwb25jZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25jZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFzeW5jV2F2RmlsZU1hbmFnZXIgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhd2FpdCBhc3luY0ZpbGVMb2FkKCk7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUpO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPSB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZS5ieXRlTGVuZ3RoO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA9IDA7XG5cbiAgICAgIC8vIOODleOCoeOCpOODq+ODreODvOODieOBq+WkseaVl+OBl+OBpuOBhOOCi+OBi+OAgeWFiOmgreOBruOCt+OCsOODjeODgeODo1wiUklGRlwi44KS5YWl44KM44KL44K144Kk44K644KC44Gq44GE5aC05ZCI44Gv5aSx5pWXXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID09IG51bGwgfHxcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPCA0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyDjg5XjgqHjgqTjg6vlkI1cbiAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9maWxlTmFtZSA9IGZpbGVQYXRoO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJSSUZGXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdSSUZGJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcIlJJRkZcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5XjgqHjgqTjg6vjgrXjgqTjgrotOO+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcIldBVkVcIlxuICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ1dBVkUnKSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiV0FWRVwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcImZtdCBcIlxuICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2ZtdCAnKSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiZm10XCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm1044OB44Oj44Oz44Kv44K144Kk44K6XG4gICAgICAgIGNvbnN0IGZtdENodW5rU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OV44Kp44O844Oe44OD44OISUTjga8x77yI44Oq44OL44KiUENN77yJ5Lul5aSW5Y+X44GR5LuY44GR44Gq44GEXG4gICAgICAgIGlmICh0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCkgIT0gMSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBpcyBub3QgbGluZWFyIFBDTS4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg4Hjg6Pjg7Pjg43jg6vmlbBcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgPVxuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44K144Oz44OX44Oq44Oz44Kw44Os44O844OIXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODh+ODvOOCv+mAn+W6pltieXRlL3NlY13vvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjg5bjg63jg4Pjgq/jgrXjgqTjgrrvvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDph4/lrZDljJbjg5Pjg4Pjg4jmlbBcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIGZtdOODgeODo+ODs+OCr+OBruaLoeW8temDqOWIhuOBruiqreOBv+mjm+OBsOOBl1xuICAgICAgICBpZiAoZm10Q2h1bmtTaXplID4gMTYpIHtcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ICs9IGZtdENodW5rU2l6ZSAtIDE2O1xuICAgICAgICB9XG4gICAgICAgIC8vIFwiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GZ44KL44G+44Gn6Kqt44G/6aOb44Gw44GXXG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICAhdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnZGF0YScpICYmXG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA8IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgKz1cbiAgICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKSArIDQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OV44Kh44Kk44Or5YaF44GrXCJkYXRhXCLjg4Hjg6Pjg7Pjgq/jgYzlh7rnj77jgZfjgarjgYvjgaPjgZ9cbiAgICAgICAgaWYgKHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPj0gdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFwiZGF0YVwiIENodW5rLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCteODs+ODl+ODq+aVsFxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgZGF0YUNodW5rU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWwgPVxuICAgICAgICAgICAgKGRhdGFDaHVua1NpemUgKiA4KSAvXG4gICAgICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUgKlxuICAgICAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6aCY5Z+f56K65L+dXG4gICAgICAgIHRoaXMuX3BjbURhdGEgPSBuZXcgQXJyYXkodGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMpO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOazouW9ouODh+ODvOOCv+WPluW+l1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBzYW1wbGVDb3VudCA9IDA7XG4gICAgICAgICAgc2FtcGxlQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWw7XG4gICAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF1bc2FtcGxlQ291bnRdID0gdGhpcy5nZXRQY21TYW1wbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQY21TYW1wbGUoKTogbnVtYmVyIHtcbiAgICBsZXQgcGNtMzI7XG5cbiAgICAvLyAzMuODk+ODg+ODiOW5heOBq+aLoeW8teOBl+OBpuOBi+OCiS0x772eMeOBruevhOWbsuOBq+S4uOOCgeOCi1xuICAgIHN3aXRjaCAodGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDgoKSAtIDEyODtcbiAgICAgICAgcGNtMzIgPDw9IDI0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpIDw8IDE2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQyNExpdHRsZUVuZGlhbigpIDw8IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8g5a++5b+c44GX44Gm44GE44Gq44GE44OT44OD44OI5bmFXG4gICAgICAgIHBjbTMyID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBjbTMyIC8gMjE0NzQ4MzY0NzsgLy9OdW1iZXIuTUFYX1ZBTFVFO1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2VQY21EYXRhKCk6IHZvaWQge1xuICAgIGZvciAoXG4gICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgY2hhbm5lbENvdW50KytcbiAgICApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF07XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9wY21EYXRhO1xuICAgIHRoaXMuX3BjbURhdGEgPSBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcGNtRGF0YSA9IG51bGw7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG4gICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID0gMC4wO1xuICAgIHRoaXMuX3dhdkZpbGVJbmZvID0gbmV3IFdhdkZpbGVJbmZvKCk7XG4gICAgdGhpcy5fYnl0ZVJlYWRlciA9IG5ldyBCeXRlUmVhZGVyKCk7XG4gIH1cblxuICBfcGNtRGF0YTogQXJyYXk8RmxvYXQzMkFycmF5PjtcbiAgX3VzZXJUaW1lU2Vjb25kczogbnVtYmVyO1xuICBfbGFzdFJtczogbnVtYmVyO1xuICBfc2FtcGxlT2Zmc2V0OiBudW1iZXI7XG4gIF93YXZGaWxlSW5mbzogV2F2RmlsZUluZm87XG4gIF9ieXRlUmVhZGVyOiBCeXRlUmVhZGVyO1xuICBfbG9hZEZpbGV0b0J5dGVzID0gKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciwgbGVuZ3RoOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9IGFycmF5QnVmZmVyO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVEYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSk7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPSBsZW5ndGg7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBXYXZGaWxlSW5mbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gJyc7XG4gICAgdGhpcy5fbnVtYmVyT2ZDaGFubmVscyA9IDA7XG4gICAgdGhpcy5fYml0c1BlclNhbXBsZSA9IDA7XG4gICAgdGhpcy5fc2FtcGxpbmdSYXRlID0gMDtcbiAgICB0aGlzLl9zYW1wbGVzUGVyQ2hhbm5lbCA9IDA7XG4gIH1cblxuICBfZmlsZU5hbWU6IHN0cmluZzsgLy8vPCDjg5XjgqHjgqTjg6vlkI1cbiAgX251bWJlck9mQ2hhbm5lbHM6IG51bWJlcjsgLy8vPCDjg4Hjg6Pjg7Pjg43jg6vmlbBcbiAgX2JpdHNQZXJTYW1wbGU6IG51bWJlcjsgLy8vPCDjgrXjg7Pjg5fjg6vjgYLjgZ/jgorjg5Pjg4Pjg4jmlbBcbiAgX3NhbXBsaW5nUmF0ZTogbnVtYmVyOyAvLy88IOOCteODs+ODl+ODquODs+OCsOODrOODvOODiFxuICBfc2FtcGxlc1BlckNoYW5uZWw6IG51bWJlcjsgLy8vPCAx44OB44Oj44Oz44ON44Or44GC44Gf44KK57eP44K144Oz44OX44Or5pWwXG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlUmVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZmlsZUJ5dGUgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVEYXRhVmlldyA9IG51bGw7XG4gICAgdGhpcy5fZmlsZVNpemUgPSAwO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiA444OT44OD44OI6Kqt44G/6L6844G/XG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50OCDoqq3jgb/lj5bjgaPjgZ8444OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0OCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0Kys7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMTbjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQxNiDoqq3jgb/lj5bjgaPjgZ8xNuODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDE2TGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDI7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMjTjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQzMiDoqq3jgb/lj5bjgaPjgZ8yNOODk+ODg+ODiOWApO+8iOS4i+S9jTI044OT44OD44OI44Gr6Kit5a6a77yJXG4gICAqL1xuICBwdWJsaWMgZ2V0MjRMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMikgPDwgMTYpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDM7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMzLjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQzMiDoqq3jgb/lj5bjgaPjgZ8zMuODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDMyTGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDMpIDw8IDI0KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAyKSA8PCAxNikgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gNDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiDjgrfjgrDjg43jg4Hjg6Pjga7lj5blvpfjgajlj4LnhafmloflrZfliJfjgajjga7kuIDoh7Tjg4Hjgqfjg4Pjgq9cbiAgICogQHBhcmFtW2luXSByZWZlcmVuY2Ug5qSc5p+75a++6LGh44Gu44K344Kw44ON44OB44Oj5paH5a2X5YiXXG4gICAqIEByZXR2YWwgIHRydWUgICAg5LiA6Ie044GX44Gm44GE44KLXG4gICAqIEByZXR2YWwgIGZhbHNlICAg5LiA6Ie044GX44Gm44GE44Gq44GEXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2hlY2tTaWduYXR1cmUocmVmZXJlbmNlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBnZXRTaWduYXR1cmU6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSg0KTtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmc6IFVpbnQ4QXJyYXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocmVmZXJlbmNlKTtcbiAgICBpZiAocmVmZXJlbmNlLmxlbmd0aCAhPSA0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IHNpZ25hdHVyZU9mZnNldCA9IDA7IHNpZ25hdHVyZU9mZnNldCA8IDQ7IHNpZ25hdHVyZU9mZnNldCsrKSB7XG4gICAgICBnZXRTaWduYXR1cmVbc2lnbmF0dXJlT2Zmc2V0XSA9IHRoaXMuZ2V0OCgpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0U2lnbmF0dXJlWzBdID09IHJlZmVyZW5jZVN0cmluZ1swXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzFdID09IHJlZmVyZW5jZVN0cmluZ1sxXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzJdID09IHJlZmVyZW5jZVN0cmluZ1syXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzNdID09IHJlZmVyZW5jZVN0cmluZ1szXVxuICAgICk7XG4gIH1cblxuICBfZmlsZUJ5dGU6IEFycmF5QnVmZmVyOyAvLy88IOODreODvOODieOBl+OBn+ODleOCoeOCpOODq+OBruODkOOCpOODiOWIl1xuICBfZmlsZURhdGFWaWV3OiBEYXRhVmlldztcbiAgX2ZpbGVTaXplOiBudW1iZXI7IC8vLzwg44OV44Kh44Kk44Or44K144Kk44K6XG4gIF9yZWFkT2Zmc2V0OiBudW1iZXI7IC8vLzwg44OV44Kh44Kk44Or5Y+C54Wn5L2N572uXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNzc5ZTZmYjAzOTY3NGIyZTViMzZcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==