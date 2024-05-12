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
        if (this.loadWavFile(filePath)) {
            console.log('Resultado RRR => ', this.loadWavFile(filePath));
            console.log('se ejecuta esto del loadWavFile !');
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
            var _a, fmtChunkSize, dataChunkSize, channelCount, sampleCount, channelCount, _b, _c, _d, e_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this._byteReader;
                        return [4, asyncFileLoad()];
                    case 1:
                        _a._fileByte = _e.sent();
                        this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
                        this._byteReader._fileSize = this._byteReader._fileByte.byteLength;
                        this._byteReader._readOffset = 0;
                        if (this._byteReader._fileByte == null ||
                            this._byteReader._fileSize < 4) {
                            return [2, false];
                        }
                        this._wavFileInfo._fileName = filePath;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
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
                        _c = (_b = console).log;
                        _d = ['Respuesta wave file => '];
                        return [4, asyncWavFileManager];
                    case 3:
                        _c.apply(_b, _d.concat([_e.sent()]));
                        ret = true;
                        return [2, ret];
                    case 4:
                        e_1 = _e.sent();
                        console.log(e_1);
                        return [3, 5];
                    case 5: return [2];
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
/******/ 	__webpack_require__.h = function() { return "ad647aaf9300e0ed0148"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMjBmN2E1M2MwMTFiY2I0ZmM3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVXLGtCQUFVLEdBQXVCLElBQUksQ0FBQztBQUVqRDtJQTZRRTtRQUFBLGlCQU9DO1FBUUQscUJBQWdCLEdBQUcsVUFBQyxXQUF3QixFQUFFLE1BQWM7WUFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQWxCQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQTdRYSw4QkFBVyxHQUF6QjtRQUNFLElBQUksa0JBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsa0JBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLGtDQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FB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ZSxHQUFHLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRTtZQUNwRSxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxDQUNMLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBTUgsaUJBQUM7QUFBRCxDQUFDO0FBcEZZLGdDQUFVOzs7Ozs7Ozs7VUMvVHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXBwd2F2ZmlsZWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5cbmV4cG9ydCBsZXQgc19pbnN0YW5jZTogTEFwcFdhdkZpbGVIYW5kbGVyID0gbnVsbDtcblxuZXhwb3J0IGNsYXNzIExBcHBXYXZGaWxlSGFuZGxlciB7XG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLov5TjgZnjgIJcbiAgICog44Kk44Oz44K544K/44Oz44K544GM55Sf5oiQ44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv5YaF6YOo44Gn44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GZ44KL44CCXG4gICAqXG4gICAqIEByZXR1cm4g44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBXYXZGaWxlSGFuZGxlciB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwV2F2RmlsZUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRlbHRhVGltZVNlY29uZHM6IG51bWJlcikge1xuICAgIGxldCBnb2FsT2Zmc2V0OiBudW1iZXI7XG4gICAgbGV0IHJtczogbnVtYmVyO1xuXG4gICAgLy8g44OH44O844K/44Ot44O844OJ5YmNL+ODleOCoeOCpOODq+acq+WwvuOBq+mBlOOBl+OBn+WgtOWQiOOBr+abtOaWsOOBl+OBquOBhFxuICAgIGlmIChcbiAgICAgIHRoaXMuX3BjbURhdGEgPT0gbnVsbCB8fFxuICAgICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID49IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDntYzpgY7mmYLplpPlvozjga7nirbmhYvjgpLkv53mjIFcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcbiAgICBnb2FsT2Zmc2V0ID0gTWF0aC5mbG9vcihcbiAgICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyAqIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGVcbiAgICApO1xuICAgIGlmIChnb2FsT2Zmc2V0ID4gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsKSB7XG4gICAgICBnb2FsT2Zmc2V0ID0gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgIH1cblxuICAgIC8vIFJNU+ioiOa4rFxuICAgIHJtcyA9IDAuMDtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSB0aGlzLl9zYW1wbGVPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50IDwgZ29hbE9mZnNldDtcbiAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHBjbSA9IHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF07XG4gICAgICAgIHJtcyArPSBwY20gKiBwY207XG4gICAgICB9XG4gICAgfVxuICAgIHJtcyA9IE1hdGguc3FydChcbiAgICAgIHJtcyAvXG4gICAgICAgICh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyAqXG4gICAgICAgICAgKGdvYWxPZmZzZXQgLSB0aGlzLl9zYW1wbGVPZmZzZXQpKVxuICAgICk7XG5cbiAgICB0aGlzLl9sYXN0Um1zID0gcm1zO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IGdvYWxPZmZzZXQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoZmlsZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIOOCteODs+ODl+ODq+S9jeWPgueFp+S9jee9ruOCkuWIneacn+WMllxuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDA7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuXG4gICAgLy8gUk1T5YCk44KS44Oq44K744OD44OIXG4gICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdTZWFyY2hpbmcgZm9yIGF1ZGlvID8/PycpO1xuXG4gICAgXG5cbiAgICBjb25zb2xlLmxvZygnYnVzY2FuZG8gPT4gJywgZmlsZVBhdGgpO1xuICAgIGlmICh0aGlzLmxvYWRXYXZGaWxlKGZpbGVQYXRoKSkge1xuICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBSUlIgPT4gJywgdGhpcy5sb2FkV2F2RmlsZShmaWxlUGF0aCkpO1xuICAgICAgY29uc29sZS5sb2coJ3NlIGVqZWN1dGEgZXN0byBkZWwgbG9hZFdhdkZpbGUgIScpXG4gICAgICAvLyBUT0RPIDogbGlwcywgYXF1aSB2YW4gZWwgbW92aW1pZW50byBkZSBsYSBib2NhXG4gICAgICAvLyBjb25zdCBhdWRpbzogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlJyk7XG4gICAgICAvLyBhdWRpby5zcmMgPSBmaWxlUGF0aDtcbiAgICAgIC8vIGF1ZGlvLnBsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Um1zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RSbXM7XG4gIH1cblxuICBwdWJsaWMgbG9hZFdhdkZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCByZXQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9wY21EYXRhICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVsZWFzZVBjbURhdGEoKTtcbiAgICB9XG5cbiAgICAvLyDjg5XjgqHjgqTjg6vjg63jg7zjg4lcbiAgICBjb25zdCBhc3luY0ZpbGVMb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKGZpbGVQYXRoKS50aGVuKHJlc3BvbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbmNlLmFycmF5QnVmZmVyKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXN5bmNXYXZGaWxlTWFuYWdlciA9IChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9IGF3YWl0IGFzeW5jRmlsZUxvYWQoKTtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVEYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSk7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlLmJ5dGVMZW5ndGg7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ID0gMDtcblxuICAgICAgLy8g44OV44Kh44Kk44Or44Ot44O844OJ44Gr5aSx5pWX44GX44Gm44GE44KL44GL44CB5YWI6aCt44Gu44K344Kw44ON44OB44OjXCJSSUZGXCLjgpLlhaXjgozjgovjgrXjgqTjgrrjgoLjgarjgYTloLTlkIjjga/lpLHmlZdcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPT0gbnVsbCB8fFxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA8IDRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIOODleOCoeOCpOODq+WQjVxuICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX2ZpbGVOYW1lID0gZmlsZVBhdGg7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcIlJJRkZcIlxuICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ1JJRkYnKSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiUklGRlwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOODleOCoeOCpOODq+OCteOCpOOCui0477yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiV0FWRVwiXG4gICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnV0FWRScpKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJXQVZFXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiZm10IFwiXG4gICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnZm10ICcpKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJmbXRcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmbXTjg4Hjg6Pjg7Pjgq/jgrXjgqTjgrpcbiAgICAgICAgY29uc3QgZm10Q2h1bmtTaXplID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjg5Xjgqnjg7zjg57jg4Pjg4hJROOBrzHvvIjjg6rjg4vjgqJQQ03vvInku6XlpJblj5fjgZHku5jjgZHjgarjgYRcbiAgICAgICAgaWYgKHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKSAhPSAxKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGlzIG5vdCBsaW5lYXIgUENNLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOODgeODo+ODs+ODjeODq+aVsFxuICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyA9XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjgrXjg7Pjg5fjg6rjg7PjgrDjg6zjg7zjg4hcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsaW5nUmF0ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OH44O844K/6YCf5bqmW2J5dGUvc2VjXe+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODluODreODg+OCr+OCteOCpOOCuu+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOmHj+WtkOWMluODk+ODg+ODiOaVsFxuICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8gZm1044OB44Oj44Oz44Kv44Gu5ouh5by16YOo5YiG44Gu6Kqt44G/6aOb44Gw44GXXG4gICAgICAgIGlmIChmbXRDaHVua1NpemUgPiAxNikge1xuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgKz0gZm10Q2h1bmtTaXplIC0gMTY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gXCJkYXRhXCLjg4Hjg6Pjg7Pjgq/jgYzlh7rnj77jgZnjgovjgb7jgafoqq3jgb/po5vjgbDjgZdcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdkYXRhJykgJiZcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0IDwgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCArPVxuICAgICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpICsgNDtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5XjgqHjgqTjg6vlhoXjgatcImRhdGFcIuODgeODo+ODs+OCr+OBjOWHuuePvuOBl+OBquOBi+OBo+OBn1xuICAgICAgICBpZiAodGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA+PSB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgXCJkYXRhXCIgQ2h1bmsuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44K144Oz44OX44Or5pWwXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBkYXRhQ2h1bmtTaXplID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCA9XG4gICAgICAgICAgICAoZGF0YUNodW5rU2l6ZSAqIDgpIC9cbiAgICAgICAgICAgICh0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSAqXG4gICAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDpoJjln5/norrkv51cbiAgICAgICAgdGhpcy5fcGNtRGF0YSA9IG5ldyBBcnJheSh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyk7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICAgICAgY2hhbm5lbENvdW50KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rOi5b2i44OH44O844K/5Y+W5b6XXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gMDtcbiAgICAgICAgICBzYW1wbGVDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbDtcbiAgICAgICAgICBzYW1wbGVDb3VudCsrXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgICAgICAgY2hhbm5lbENvdW50KytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF0gPSB0aGlzLmdldFBjbVNhbXBsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwdWVzdGEgd2F2ZSBmaWxlID0+ICcsIGF3YWl0IGFzeW5jV2F2RmlsZU1hbmFnZXIpO1xuXG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGdldFBjbVNhbXBsZSgpOiBudW1iZXIge1xuICAgIGxldCBwY20zMjtcblxuICAgIC8vIDMy44OT44OD44OI5bmF44Gr5ouh5by144GX44Gm44GL44KJLTHvvZ4x44Gu56+E5Zuy44Gr5Li444KB44KLXG4gICAgc3dpdGNoICh0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSkge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0OCgpIC0gMTI4O1xuICAgICAgICBwY20zMiA8PD0gMjQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCkgPDwgMTY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNDpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDI0TGl0dGxlRW5kaWFuKCkgPDwgODtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyDlr77lv5zjgZfjgabjgYTjgarjgYTjg5Pjg4Pjg4jluYVcbiAgICAgICAgcGNtMzIgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGNtMzIgLyAyMTQ3NDgzNjQ3OyAvL051bWJlci5NQVhfVkFMVUU7XG4gIH1cblxuICBwdWJsaWMgcmVsZWFzZVBjbURhdGEoKTogdm9pZCB7XG4gICAgZm9yIChcbiAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICBjaGFubmVsQ291bnQrK1xuICAgICkge1xuICAgICAgZGVsZXRlIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX3BjbURhdGE7XG4gICAgdGhpcy5fcGNtRGF0YSA9IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wY21EYXRhID0gbnVsbDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSAwLjA7XG4gICAgdGhpcy5fd2F2RmlsZUluZm8gPSBuZXcgV2F2RmlsZUluZm8oKTtcbiAgICB0aGlzLl9ieXRlUmVhZGVyID0gbmV3IEJ5dGVSZWFkZXIoKTtcbiAgfVxuXG4gIF9wY21EYXRhOiBBcnJheTxGbG9hdDMyQXJyYXk+O1xuICBfdXNlclRpbWVTZWNvbmRzOiBudW1iZXI7XG4gIF9sYXN0Um1zOiBudW1iZXI7XG4gIF9zYW1wbGVPZmZzZXQ6IG51bWJlcjtcbiAgX3dhdkZpbGVJbmZvOiBXYXZGaWxlSW5mbztcbiAgX2J5dGVSZWFkZXI6IEJ5dGVSZWFkZXI7XG4gIF9sb2FkRmlsZXRvQnl0ZXMgPSAoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyLCBsZW5ndGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID0gYXJyYXlCdWZmZXI7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZURhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlKTtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA9IGxlbmd0aDtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhdkZpbGVJbmZvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSAnJztcbiAgICB0aGlzLl9udW1iZXJPZkNoYW5uZWxzID0gMDtcbiAgICB0aGlzLl9iaXRzUGVyU2FtcGxlID0gMDtcbiAgICB0aGlzLl9zYW1wbGluZ1JhdGUgPSAwO1xuICAgIHRoaXMuX3NhbXBsZXNQZXJDaGFubmVsID0gMDtcbiAgfVxuXG4gIF9maWxlTmFtZTogc3RyaW5nOyAvLy88IOODleOCoeOCpOODq+WQjVxuICBfbnVtYmVyT2ZDaGFubmVsczogbnVtYmVyOyAvLy88IOODgeODo+ODs+ODjeODq+aVsFxuICBfYml0c1BlclNhbXBsZTogbnVtYmVyOyAvLy88IOOCteODs+ODl+ODq+OBguOBn+OCiuODk+ODg+ODiOaVsFxuICBfc2FtcGxpbmdSYXRlOiBudW1iZXI7IC8vLzwg44K144Oz44OX44Oq44Oz44Kw44Os44O844OIXG4gIF9zYW1wbGVzUGVyQ2hhbm5lbDogbnVtYmVyOyAvLy88IDHjg4Hjg6Pjg7Pjg43jg6vjgYLjgZ/jgornt4/jgrXjg7Pjg5fjg6vmlbBcbn1cblxuZXhwb3J0IGNsYXNzIEJ5dGVSZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maWxlQnl0ZSA9IG51bGw7XG4gICAgdGhpcy5fZmlsZURhdGFWaWV3ID0gbnVsbDtcbiAgICB0aGlzLl9maWxlU2l6ZSA9IDA7XG4gICAgdGhpcy5fcmVhZE9mZnNldCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDjjg5Pjg4Pjg4joqq3jgb/ovrzjgb9cbiAgICogQHJldHVybiBDc206OmNzbVVpbnQ4IOiqreOBv+WPluOBo+OBnzjjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQ4KCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQrKztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAxNuODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDE2IOiqreOBv+WPluOBo+OBnzE244OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0MTZMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gMjtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAyNOODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDMyIOiqreOBv+WPluOBo+OBnzI044OT44OD44OI5YCk77yI5LiL5L2NMjTjg5Pjg4Pjg4jjgavoqK3lrprvvIlcbiAgICovXG4gIHB1YmxpYyBnZXQyNExpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAyKSA8PCAxNikgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gMztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiAzMuODk+ODg+ODiOiqreOBv+i+vOOBv++8iOODquODiOODq+OCqOODs+ODh+OCo+OCouODs++8iVxuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDMyIOiqreOBv+WPluOBo+OBnzMy44OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0MzJMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMykgPDwgMjQpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDIpIDw8IDE2KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSA0O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIOOCt+OCsOODjeODgeODo+OBruWPluW+l+OBqOWPgueFp+aWh+Wtl+WIl+OBqOOBruS4gOiHtOODgeOCp+ODg+OCr1xuICAgKiBAcGFyYW1baW5dIHJlZmVyZW5jZSDmpJzmn7vlr77osaHjga7jgrfjgrDjg43jg4Hjg6PmloflrZfliJdcbiAgICogQHJldHZhbCAgdHJ1ZSAgICDkuIDoh7TjgZfjgabjgYTjgotcbiAgICogQHJldHZhbCAgZmFsc2UgICDkuIDoh7TjgZfjgabjgYTjgarjgYRcbiAgICovXG4gIHB1YmxpYyBnZXRDaGVja1NpZ25hdHVyZShyZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGdldFNpZ25hdHVyZTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KDQpO1xuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZzogVWludDhBcnJheSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShyZWZlcmVuY2UpO1xuICAgIGlmIChyZWZlcmVuY2UubGVuZ3RoICE9IDQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgc2lnbmF0dXJlT2Zmc2V0ID0gMDsgc2lnbmF0dXJlT2Zmc2V0IDwgNDsgc2lnbmF0dXJlT2Zmc2V0KyspIHtcbiAgICAgIGdldFNpZ25hdHVyZVtzaWduYXR1cmVPZmZzZXRdID0gdGhpcy5nZXQ4KCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBnZXRTaWduYXR1cmVbMF0gPT0gcmVmZXJlbmNlU3RyaW5nWzBdICYmXG4gICAgICBnZXRTaWduYXR1cmVbMV0gPT0gcmVmZXJlbmNlU3RyaW5nWzFdICYmXG4gICAgICBnZXRTaWduYXR1cmVbMl0gPT0gcmVmZXJlbmNlU3RyaW5nWzJdICYmXG4gICAgICBnZXRTaWduYXR1cmVbM10gPT0gcmVmZXJlbmNlU3RyaW5nWzNdXG4gICAgKTtcbiAgfVxuXG4gIF9maWxlQnl0ZTogQXJyYXlCdWZmZXI7IC8vLzwg44Ot44O844OJ44GX44Gf44OV44Kh44Kk44Or44Gu44OQ44Kk44OI5YiXXG4gIF9maWxlRGF0YVZpZXc6IERhdGFWaWV3O1xuICBfZmlsZVNpemU6IG51bWJlcjsgLy8vPCDjg5XjgqHjgqTjg6vjgrXjgqTjgrpcbiAgX3JlYWRPZmZzZXQ6IG51bWJlcjsgLy8vPCDjg5XjgqHjgqTjg6vlj4LnhafkvY3nva5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhZDY0N2FhZjkzMDBlMGVkMDE0OFwiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9