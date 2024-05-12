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
        console.log('return es => ', ret);
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
/******/ 	__webpack_require__.h = function() { return "ffd9cc90fa405c02464c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMGM5YmI4OTJkOTIwZDZhMDU2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVXLGtCQUFVLEdBQXVCLElBQUksQ0FBQztBQUVqRDtJQTBRRTtRQUFBLGlCQU9DO1FBUUQscUJBQWdCLEdBQUcsVUFBQyxXQUF3QixFQUFFLE1BQWM7WUFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQWxCQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQTFRYSw4QkFBVyxHQUF6QjtRQUNFLElBQUksa0JBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsa0JBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLGtDQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FB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RUFBRSxlQUFlLEVBQUUsRUFBRTtZQUNwRSxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxDQUNMLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBTUgsaUJBQUM7QUFBRCxDQUFDO0FBcEZZLGdDQUFVOzs7Ozs7Ozs7VUM1VHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXBwd2F2ZmlsZWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5cbmV4cG9ydCBsZXQgc19pbnN0YW5jZTogTEFwcFdhdkZpbGVIYW5kbGVyID0gbnVsbDtcblxuZXhwb3J0IGNsYXNzIExBcHBXYXZGaWxlSGFuZGxlciB7XG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLov5TjgZnjgIJcbiAgICog44Kk44Oz44K544K/44Oz44K544GM55Sf5oiQ44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv5YaF6YOo44Gn44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GZ44KL44CCXG4gICAqXG4gICAqIEByZXR1cm4g44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBXYXZGaWxlSGFuZGxlciB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwV2F2RmlsZUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRlbHRhVGltZVNlY29uZHM6IG51bWJlcikge1xuICAgIGxldCBnb2FsT2Zmc2V0OiBudW1iZXI7XG4gICAgbGV0IHJtczogbnVtYmVyO1xuXG4gICAgLy8g44OH44O844K/44Ot44O844OJ5YmNL+ODleOCoeOCpOODq+acq+WwvuOBq+mBlOOBl+OBn+WgtOWQiOOBr+abtOaWsOOBl+OBquOBhFxuICAgIGlmIChcbiAgICAgIHRoaXMuX3BjbURhdGEgPT0gbnVsbCB8fFxuICAgICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID49IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbFxuICAgICkge1xuICAgICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDntYzpgY7mmYLplpPlvozjga7nirbmhYvjgpLkv53mjIFcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcbiAgICBnb2FsT2Zmc2V0ID0gTWF0aC5mbG9vcihcbiAgICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyAqIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGVcbiAgICApO1xuICAgIGlmIChnb2FsT2Zmc2V0ID4gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsKSB7XG4gICAgICBnb2FsT2Zmc2V0ID0gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgIH1cblxuICAgIC8vIFJNU+ioiOa4rFxuICAgIHJtcyA9IDAuMDtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSB0aGlzLl9zYW1wbGVPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50IDwgZ29hbE9mZnNldDtcbiAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHBjbSA9IHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF07XG4gICAgICAgIHJtcyArPSBwY20gKiBwY207XG4gICAgICB9XG4gICAgfVxuICAgIHJtcyA9IE1hdGguc3FydChcbiAgICAgIHJtcyAvXG4gICAgICAgICh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyAqXG4gICAgICAgICAgKGdvYWxPZmZzZXQgLSB0aGlzLl9zYW1wbGVPZmZzZXQpKVxuICAgICk7XG5cbiAgICB0aGlzLl9sYXN0Um1zID0gcm1zO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IGdvYWxPZmZzZXQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoZmlsZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIOOCteODs+ODl+ODq+S9jeWPgueFp+S9jee9ruOCkuWIneacn+WMllxuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDA7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuXG4gICAgLy8gUk1T5YCk44KS44Oq44K744OD44OIXG4gICAgdGhpcy5fbGFzdFJtcyA9IDAuMDtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdTZWFyY2hpbmcgZm9yIGF1ZGlvID8/PycpO1xuXG4gICAgXG5cbiAgICBjb25zb2xlLmxvZygnYnVzY2FuZG8gPT4gJywgZmlsZVBhdGgpO1xuICAgIGlmICghdGhpcy5sb2FkV2F2RmlsZShmaWxlUGF0aCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gUlJSID0+ICcsIHRoaXMubG9hZFdhdkZpbGUoZmlsZVBhdGgpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzZSBlamVjdXRhIGVzdG8gZGVsIGxvYWRXYXZGaWxlICEnKVxuICAgICAgLy8gVE9ETyA6IGxpcHMsIGFxdWkgdmFuIGVsIG1vdmltaWVudG8gZGUgbGEgYm9jYVxuICAgICAgLy8gY29uc3QgYXVkaW86IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZScpO1xuICAgICAgLy8gYXVkaW8uc3JjID0gZmlsZVBhdGg7XG4gICAgICAvLyBhdWRpby5wbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFJtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Um1zO1xuICB9XG5cbiAgcHVibGljIGxvYWRXYXZGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fcGNtRGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbGVhc2VQY21EYXRhKCk7XG4gICAgfVxuXG4gICAgLy8g44OV44Kh44Kk44Or44Ot44O844OJXG4gICAgY29uc3QgYXN5bmNGaWxlTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChmaWxlUGF0aCkudGhlbihyZXNwb25jZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25jZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFzeW5jV2F2RmlsZU1hbmFnZXIgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhd2FpdCBhc3luY0ZpbGVMb2FkKCk7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUpO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPSB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZS5ieXRlTGVuZ3RoO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA9IDA7XG5cbiAgICAgIC8vIOODleOCoeOCpOODq+ODreODvOODieOBq+WkseaVl+OBl+OBpuOBhOOCi+OBi+OAgeWFiOmgreOBruOCt+OCsOODjeODgeODo1wiUklGRlwi44KS5YWl44KM44KL44K144Kk44K644KC44Gq44GE5aC05ZCI44Gv5aSx5pWXXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID09IG51bGwgfHxcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPCA0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyDjg5XjgqHjgqTjg6vlkI1cbiAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9maWxlTmFtZSA9IGZpbGVQYXRoO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJSSUZGXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdSSUZGJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcIlJJRkZcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5XjgqHjgqTjg6vjgrXjgqTjgrotOO+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcIldBVkVcIlxuICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ1dBVkUnKSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiV0FWRVwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCt+OCsOODjeODgeODoyBcImZtdCBcIlxuICAgICAgICBpZiAoIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2ZtdCAnKSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgU2lnbmV0dXJlIFwiZm10XCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm1044OB44Oj44Oz44Kv44K144Kk44K6XG4gICAgICAgIGNvbnN0IGZtdENodW5rU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OV44Kp44O844Oe44OD44OISUTjga8x77yI44Oq44OL44KiUENN77yJ5Lul5aSW5Y+X44GR5LuY44GR44Gq44GEXG4gICAgICAgIGlmICh0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCkgIT0gMSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBpcyBub3QgbGluZWFyIFBDTS4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg4Hjg6Pjg7Pjg43jg6vmlbBcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgPVxuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44K144Oz44OX44Oq44Oz44Kw44Os44O844OIXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGluZ1JhdGUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODh+ODvOOCv+mAn+W6pltieXRlL3NlY13vvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjg5bjg63jg4Pjgq/jgrXjgqTjgrrvvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDph4/lrZDljJbjg5Pjg4Pjg4jmlbBcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIGZtdOODgeODo+ODs+OCr+OBruaLoeW8temDqOWIhuOBruiqreOBv+mjm+OBsOOBl1xuICAgICAgICBpZiAoZm10Q2h1bmtTaXplID4gMTYpIHtcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ICs9IGZtdENodW5rU2l6ZSAtIDE2O1xuICAgICAgICB9XG4gICAgICAgIC8vIFwiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GZ44KL44G+44Gn6Kqt44G/6aOb44Gw44GXXG4gICAgICAgIHdoaWxlIChcbiAgICAgICAgICAhdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnZGF0YScpICYmXG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA8IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgKz1cbiAgICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKSArIDQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OV44Kh44Kk44Or5YaF44GrXCJkYXRhXCLjg4Hjg6Pjg7Pjgq/jgYzlh7rnj77jgZfjgarjgYvjgaPjgZ9cbiAgICAgICAgaWYgKHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPj0gdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFwiZGF0YVwiIENodW5rLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOOCteODs+ODl+ODq+aVsFxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgZGF0YUNodW5rU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWwgPVxuICAgICAgICAgICAgKGRhdGFDaHVua1NpemUgKiA4KSAvXG4gICAgICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUgKlxuICAgICAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6aCY5Z+f56K65L+dXG4gICAgICAgIHRoaXMuX3BjbURhdGEgPSBuZXcgQXJyYXkodGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMpO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XSA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOazouW9ouODh+ODvOOCv+WPluW+l1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBzYW1wbGVDb3VudCA9IDA7XG4gICAgICAgICAgc2FtcGxlQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWw7XG4gICAgICAgICAgc2FtcGxlQ291bnQrK1xuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF1bc2FtcGxlQ291bnRdID0gdGhpcy5nZXRQY21TYW1wbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygncmV0dXJuIGVzID0+ICcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQY21TYW1wbGUoKTogbnVtYmVyIHtcbiAgICBsZXQgcGNtMzI7XG5cbiAgICAvLyAzMuODk+ODg+ODiOW5heOBq+aLoeW8teOBl+OBpuOBi+OCiS0x772eMeOBruevhOWbsuOBq+S4uOOCgeOCi1xuICAgIHN3aXRjaCAodGhpcy5fd2F2RmlsZUluZm8uX2JpdHNQZXJTYW1wbGUpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcGNtMzIgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDgoKSAtIDEyODtcbiAgICAgICAgcGNtMzIgPDw9IDI0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpIDw8IDE2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQyNExpdHRsZUVuZGlhbigpIDw8IDg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8g5a++5b+c44GX44Gm44GE44Gq44GE44OT44OD44OI5bmFXG4gICAgICAgIHBjbTMyID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBjbTMyIC8gMjE0NzQ4MzY0NzsgLy9OdW1iZXIuTUFYX1ZBTFVFO1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2VQY21EYXRhKCk6IHZvaWQge1xuICAgIGZvciAoXG4gICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgY2hhbm5lbENvdW50KytcbiAgICApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF07XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9wY21EYXRhO1xuICAgIHRoaXMuX3BjbURhdGEgPSBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcGNtRGF0YSA9IG51bGw7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG4gICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID0gMC4wO1xuICAgIHRoaXMuX3dhdkZpbGVJbmZvID0gbmV3IFdhdkZpbGVJbmZvKCk7XG4gICAgdGhpcy5fYnl0ZVJlYWRlciA9IG5ldyBCeXRlUmVhZGVyKCk7XG4gIH1cblxuICBfcGNtRGF0YTogQXJyYXk8RmxvYXQzMkFycmF5PjtcbiAgX3VzZXJUaW1lU2Vjb25kczogbnVtYmVyO1xuICBfbGFzdFJtczogbnVtYmVyO1xuICBfc2FtcGxlT2Zmc2V0OiBudW1iZXI7XG4gIF93YXZGaWxlSW5mbzogV2F2RmlsZUluZm87XG4gIF9ieXRlUmVhZGVyOiBCeXRlUmVhZGVyO1xuICBfbG9hZEZpbGV0b0J5dGVzID0gKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciwgbGVuZ3RoOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9IGFycmF5QnVmZmVyO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVEYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSk7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemUgPSBsZW5ndGg7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBXYXZGaWxlSW5mbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gJyc7XG4gICAgdGhpcy5fbnVtYmVyT2ZDaGFubmVscyA9IDA7XG4gICAgdGhpcy5fYml0c1BlclNhbXBsZSA9IDA7XG4gICAgdGhpcy5fc2FtcGxpbmdSYXRlID0gMDtcbiAgICB0aGlzLl9zYW1wbGVzUGVyQ2hhbm5lbCA9IDA7XG4gIH1cblxuICBfZmlsZU5hbWU6IHN0cmluZzsgLy8vPCDjg5XjgqHjgqTjg6vlkI1cbiAgX251bWJlck9mQ2hhbm5lbHM6IG51bWJlcjsgLy8vPCDjg4Hjg6Pjg7Pjg43jg6vmlbBcbiAgX2JpdHNQZXJTYW1wbGU6IG51bWJlcjsgLy8vPCDjgrXjg7Pjg5fjg6vjgYLjgZ/jgorjg5Pjg4Pjg4jmlbBcbiAgX3NhbXBsaW5nUmF0ZTogbnVtYmVyOyAvLy88IOOCteODs+ODl+ODquODs+OCsOODrOODvOODiFxuICBfc2FtcGxlc1BlckNoYW5uZWw6IG51bWJlcjsgLy8vPCAx44OB44Oj44Oz44ON44Or44GC44Gf44KK57eP44K144Oz44OX44Or5pWwXG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlUmVhZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZmlsZUJ5dGUgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVEYXRhVmlldyA9IG51bGw7XG4gICAgdGhpcy5fZmlsZVNpemUgPSAwO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiA444OT44OD44OI6Kqt44G/6L6844G/XG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50OCDoqq3jgb/lj5bjgaPjgZ8444OT44OD44OI5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0OCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0Kys7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMTbjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQxNiDoqq3jgb/lj5bjgaPjgZ8xNuODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDE2TGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDI7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMjTjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQzMiDoqq3jgb/lj5bjgaPjgZ8yNOODk+ODg+ODiOWApO+8iOS4i+S9jTI044OT44OD44OI44Gr6Kit5a6a77yJXG4gICAqL1xuICBwdWJsaWMgZ2V0MjRMaXR0bGVFbmRpYW4oKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPVxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMikgPDwgMTYpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDM7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgMzLjg5Pjg4Pjg4joqq3jgb/ovrzjgb/vvIjjg6rjg4jjg6vjgqjjg7Pjg4fjgqPjgqLjg7PvvIlcbiAgICogQHJldHVybiBDc206OmNzbVVpbnQzMiDoqq3jgb/lj5bjgaPjgZ8zMuODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDMyTGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDMpIDw8IDI0KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAyKSA8PCAxNikgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMSkgPDwgOCkgfFxuICAgICAgdGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQpO1xuICAgIHRoaXMuX3JlYWRPZmZzZXQgKz0gNDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBicmllZiDjgrfjgrDjg43jg4Hjg6Pjga7lj5blvpfjgajlj4LnhafmloflrZfliJfjgajjga7kuIDoh7Tjg4Hjgqfjg4Pjgq9cbiAgICogQHBhcmFtW2luXSByZWZlcmVuY2Ug5qSc5p+75a++6LGh44Gu44K344Kw44ON44OB44Oj5paH5a2X5YiXXG4gICAqIEByZXR2YWwgIHRydWUgICAg5LiA6Ie044GX44Gm44GE44KLXG4gICAqIEByZXR2YWwgIGZhbHNlICAg5LiA6Ie044GX44Gm44GE44Gq44GEXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2hlY2tTaWduYXR1cmUocmVmZXJlbmNlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBnZXRTaWduYXR1cmU6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSg0KTtcbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmc6IFVpbnQ4QXJyYXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocmVmZXJlbmNlKTtcbiAgICBpZiAocmVmZXJlbmNlLmxlbmd0aCAhPSA0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IHNpZ25hdHVyZU9mZnNldCA9IDA7IHNpZ25hdHVyZU9mZnNldCA8IDQ7IHNpZ25hdHVyZU9mZnNldCsrKSB7XG4gICAgICBnZXRTaWduYXR1cmVbc2lnbmF0dXJlT2Zmc2V0XSA9IHRoaXMuZ2V0OCgpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0U2lnbmF0dXJlWzBdID09IHJlZmVyZW5jZVN0cmluZ1swXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzFdID09IHJlZmVyZW5jZVN0cmluZ1sxXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzJdID09IHJlZmVyZW5jZVN0cmluZ1syXSAmJlxuICAgICAgZ2V0U2lnbmF0dXJlWzNdID09IHJlZmVyZW5jZVN0cmluZ1szXVxuICAgICk7XG4gIH1cblxuICBfZmlsZUJ5dGU6IEFycmF5QnVmZmVyOyAvLy88IOODreODvOODieOBl+OBn+ODleOCoeOCpOODq+OBruODkOOCpOODiOWIl1xuICBfZmlsZURhdGFWaWV3OiBEYXRhVmlldztcbiAgX2ZpbGVTaXplOiBudW1iZXI7IC8vLzwg44OV44Kh44Kk44Or44K144Kk44K6XG4gIF9yZWFkT2Zmc2V0OiBudW1iZXI7IC8vLzwg44OV44Kh44Kk44Or5Y+C54Wn5L2N572uXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZmZkOWNjOTBmYTQwNWMwMjQ2NGNcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==