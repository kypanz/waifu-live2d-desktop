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
        console.log('Searching for audio ???');
        var audio = document.getElementById('voice');
        audio.play();
        if (!this.loadWavFile(filePath)) {
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
/******/ 	__webpack_require__.h = function() { return "e46e04975b7d1156ea2c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZWMyMTUwZmQ5YmM5MDFmNTNlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNXLGtCQUFVLEdBQXVCLElBQUksQ0FBQztBQUVqRDtJQXNRRTtRQUFBLGlCQU9DO1FBUUQscUJBQWdCLEdBQUcsVUFBQyxXQUF3QixFQUFFLE1BQWM7WUFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQWxCQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQXRRYSw4QkFBVyxHQUF6QjtRQUNFLElBQUksa0JBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsa0JBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLGtCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUthLGtDQUFlLEdBQTdCO1FBQ0UsSUFBSSxrQkFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixrQkFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsa0JBQVUsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FB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SUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxDQUNMLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBTUgsaUJBQUM7QUFBRCxDQUFDO0FBcEZZLGdDQUFVOzs7Ozs7Ozs7VUN2VHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXBwd2F2ZmlsZWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwV2F2RmlsZUhhbmRsZXIgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgTEFwcFdhdkZpbGVIYW5kbGVyIHtcbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkui/lOOBmeOAglxuICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgYznlJ/miJDjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/lhoXpg6jjgafjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTEFwcFdhdkZpbGVIYW5kbGVyIHtcbiAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gbmV3IExBcHBXYXZGaWxlSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBzX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWxlYXNlSW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHNfaW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICBzX2luc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZGVsdGFUaW1lU2Vjb25kczogbnVtYmVyKSB7XG4gICAgbGV0IGdvYWxPZmZzZXQ6IG51bWJlcjtcbiAgICBsZXQgcm1zOiBudW1iZXI7XG5cbiAgICAvLyDjg4fjg7zjgr/jg63jg7zjg4nliY0v44OV44Kh44Kk44Or5pyr5bC+44Gr6YGU44GX44Gf5aC05ZCI44Gv5pu05paw44GX44Gq44GEXG4gICAgaWYgKFxuICAgICAgdGhpcy5fcGNtRGF0YSA9PSBudWxsIHx8XG4gICAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPj0gdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsXG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXN0Um1zID0gMC4wO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOe1jOmBjuaZgumWk+W+jOOBrueKtuaFi+OCkuS/neaMgVxuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArPSBkZWx0YVRpbWVTZWNvbmRzO1xuICAgIGdvYWxPZmZzZXQgPSBNYXRoLmZsb29yKFxuICAgICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICogdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsaW5nUmF0ZVxuICAgICk7XG4gICAgaWYgKGdvYWxPZmZzZXQgPiB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWwpIHtcbiAgICAgIGdvYWxPZmZzZXQgPSB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWw7XG4gICAgfVxuXG4gICAgLy8gUk1T6KiI5risXG4gICAgcm1zID0gMC4wO1xuICAgIGZvciAoXG4gICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgY2hhbm5lbENvdW50KytcbiAgICApIHtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBzYW1wbGVDb3VudCA9IHRoaXMuX3NhbXBsZU9mZnNldDtcbiAgICAgICAgc2FtcGxlQ291bnQgPCBnb2FsT2Zmc2V0O1xuICAgICAgICBzYW1wbGVDb3VudCsrXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcGNtID0gdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdW3NhbXBsZUNvdW50XTtcbiAgICAgICAgcm1zICs9IHBjbSAqIHBjbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm1zID0gTWF0aC5zcXJ0KFxuICAgICAgcm1zIC9cbiAgICAgICAgKHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzICpcbiAgICAgICAgICAoZ29hbE9mZnNldCAtIHRoaXMuX3NhbXBsZU9mZnNldCkpXG4gICAgKTtcblxuICAgIHRoaXMuX2xhc3RSbXMgPSBybXM7XG4gICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID0gZ29hbE9mZnNldDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydChmaWxlUGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8g44K144Oz44OX44Or5L2N5Y+C54Wn5L2N572u44KS5Yid5pyf5YyWXG4gICAgdGhpcy5fc2FtcGxlT2Zmc2V0ID0gMDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG5cbiAgICAvLyBSTVPlgKTjgpLjg6rjgrvjg4Pjg4hcbiAgICB0aGlzLl9sYXN0Um1zID0gMC4wO1xuXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaGluZyBmb3IgYXVkaW8gPz8/Jyk7XG5cbiAgICAvLyBUT0RPIDogbGlwcywgYXF1aSB2YW4gZWwgbW92aW1pZW50byBkZSBsYSBib2NhXG4gICAgY29uc3QgYXVkaW86IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZScpO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIGlmICghdGhpcy5sb2FkV2F2RmlsZShmaWxlUGF0aCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZSBlamVjdXRhIGVzdG8gZGVsIGxvYWRXYXZGaWxlICEnKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRSbXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFJtcztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkV2F2RmlsZShmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX3BjbURhdGEgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZWxlYXNlUGNtRGF0YSgpO1xuICAgIH1cblxuICAgIC8vIOODleOCoeOCpOODq+ODreODvOODiVxuICAgIGNvbnN0IGFzeW5jRmlsZUxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goZmlsZVBhdGgpLnRoZW4ocmVzcG9uY2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uY2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhc3luY1dhdkZpbGVNYW5hZ2VyID0gKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlID0gYXdhaXQgYXN5bmNGaWxlTG9hZCgpO1xuICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZURhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlKTtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplID0gdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUuYnl0ZUxlbmd0aDtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPSAwO1xuXG4gICAgICAvLyDjg5XjgqHjgqTjg6vjg63jg7zjg4njgavlpLHmlZfjgZfjgabjgYTjgovjgYvjgIHlhYjpoK3jga7jgrfjgrDjg43jg4Hjg6NcIlJJRkZcIuOCkuWFpeOCjOOCi+OCteOCpOOCuuOCguOBquOBhOWgtOWQiOOBr+WkseaVl1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9PSBudWxsIHx8XG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplIDwgNFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8g44OV44Kh44Kk44Or5ZCNXG4gICAgICB0aGlzLl93YXZGaWxlSW5mby5fZmlsZU5hbWUgPSBmaWxlUGF0aDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiUklGRlwiXG4gICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnUklGRicpKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJSSUZGXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OV44Kh44Kk44Or44K144Kk44K6LTjvvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJXQVZFXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdXQVZFJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcIldBVkVcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJmbXQgXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdmbXQgJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcImZtdFwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZtdOODgeODo+ODs+OCr+OCteOCpOOCulxuICAgICAgICBjb25zdCBmbXRDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODleOCqeODvOODnuODg+ODiElE44GvMe+8iOODquODi+OColBDTe+8ieS7peWkluWPl+OBkeS7mOOBkeOBquOBhFxuICAgICAgICBpZiAodGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpICE9IDEpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgaXMgbm90IGxpbmVhciBQQ00uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OB44Oj44Oz44ON44Or5pWwXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzID1cbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOOCteODs+ODl+ODquODs+OCsOODrOODvOODiFxuICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjg4fjg7zjgr/pgJ/luqZbYnl0ZS9zZWNd77yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OW44Ot44OD44Kv44K144Kk44K677yI6Kqt44G/6aOb44Gw44GX77yJXG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g6YeP5a2Q5YyW44OT44OD44OI5pWwXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyBmbXTjg4Hjg6Pjg7Pjgq/jga7mi6HlvLXpg6jliIbjga7oqq3jgb/po5vjgbDjgZdcbiAgICAgICAgaWYgKGZtdENodW5rU2l6ZSA+IDE2KSB7XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCArPSBmbXRDaHVua1NpemUgLSAxNjtcbiAgICAgICAgfVxuICAgICAgICAvLyBcImRhdGFcIuODgeODo+ODs+OCr+OBjOWHuuePvuOBmeOCi+OBvuOBp+iqreOBv+mjm+OBsOOBl1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgIXRoaXMuX2J5dGVSZWFkZXIuZ2V0Q2hlY2tTaWduYXR1cmUoJ2RhdGEnKSAmJlxuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgPCB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ICs9XG4gICAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCkgKyA0O1xuICAgICAgICB9XG4gICAgICAgIC8vIOODleOCoeOCpOODq+WGheOBq1wiZGF0YVwi44OB44Oj44Oz44Kv44GM5Ye654++44GX44Gq44GL44Gj44GfXG4gICAgICAgIGlmICh0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ID49IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBcImRhdGFcIiBDaHVuay4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgrXjg7Pjg5fjg6vmlbBcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGRhdGFDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsID1cbiAgICAgICAgICAgIChkYXRhQ2h1bmtTaXplICogOCkgL1xuICAgICAgICAgICAgKHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlICpcbiAgICAgICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmgmOWfn+eiuuS/nVxuICAgICAgICB0aGlzLl9wY21EYXRhID0gbmV3IEFycmF5KHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzKTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF0gPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDms6LlvaLjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgc2FtcGxlQ291bnQgPSAwO1xuICAgICAgICAgIHNhbXBsZUNvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsZXNQZXJDaGFubmVsO1xuICAgICAgICAgIHNhbXBsZUNvdW50KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICAgICAgICBjaGFubmVsQ291bnQrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdW3NhbXBsZUNvdW50XSA9IHRoaXMuZ2V0UGNtU2FtcGxlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGNtU2FtcGxlKCk6IG51bWJlciB7XG4gICAgbGV0IHBjbTMyO1xuXG4gICAgLy8gMzLjg5Pjg4Pjg4jluYXjgavmi6HlvLXjgZfjgabjgYvjgoktMe+9njHjga7nr4Tlm7LjgavkuLjjgoHjgotcbiAgICBzd2l0Y2ggKHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQ4KCkgLSAxMjg7XG4gICAgICAgIHBjbTMyIDw8PSAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKSA8PCAxNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MjRMaXR0bGVFbmRpYW4oKSA8PCA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIOWvvuW/nOOBl+OBpuOBhOOBquOBhOODk+ODg+ODiOW5hVxuICAgICAgICBwY20zMiA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwY20zMiAvIDIxNDc0ODM2NDc7IC8vTnVtYmVyLk1BWF9WQUxVRTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlUGNtRGF0YSgpOiB2b2lkIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBkZWxldGUgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fcGNtRGF0YTtcbiAgICB0aGlzLl9wY21EYXRhID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3BjbURhdGEgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcbiAgICB0aGlzLl9sYXN0Um1zID0gMC4wO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDAuMDtcbiAgICB0aGlzLl93YXZGaWxlSW5mbyA9IG5ldyBXYXZGaWxlSW5mbygpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIgPSBuZXcgQnl0ZVJlYWRlcigpO1xuICB9XG5cbiAgX3BjbURhdGE6IEFycmF5PEZsb2F0MzJBcnJheT47XG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjtcbiAgX2xhc3RSbXM6IG51bWJlcjtcbiAgX3NhbXBsZU9mZnNldDogbnVtYmVyO1xuICBfd2F2RmlsZUluZm86IFdhdkZpbGVJbmZvO1xuICBfYnl0ZVJlYWRlcjogQnl0ZVJlYWRlcjtcbiAgX2xvYWRGaWxldG9CeXRlcyA9IChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGxlbmd0aDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhcnJheUJ1ZmZlcjtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplID0gbGVuZ3RoO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgV2F2RmlsZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maWxlTmFtZSA9ICcnO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSAwO1xuICAgIHRoaXMuX2JpdHNQZXJTYW1wbGUgPSAwO1xuICAgIHRoaXMuX3NhbXBsaW5nUmF0ZSA9IDA7XG4gICAgdGhpcy5fc2FtcGxlc1BlckNoYW5uZWwgPSAwO1xuICB9XG5cbiAgX2ZpbGVOYW1lOiBzdHJpbmc7IC8vLzwg44OV44Kh44Kk44Or5ZCNXG4gIF9udW1iZXJPZkNoYW5uZWxzOiBudW1iZXI7IC8vLzwg44OB44Oj44Oz44ON44Or5pWwXG4gIF9iaXRzUGVyU2FtcGxlOiBudW1iZXI7IC8vLzwg44K144Oz44OX44Or44GC44Gf44KK44OT44OD44OI5pWwXG4gIF9zYW1wbGluZ1JhdGU6IG51bWJlcjsgLy8vPCDjgrXjg7Pjg5fjg6rjg7PjgrDjg6zjg7zjg4hcbiAgX3NhbXBsZXNQZXJDaGFubmVsOiBudW1iZXI7IC8vLzwgMeODgeODo+ODs+ODjeODq+OBguOBn+OCiue3j+OCteODs+ODl+ODq+aVsFxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZVJlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpbGVCeXRlID0gbnVsbDtcbiAgICB0aGlzLl9maWxlRGF0YVZpZXcgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVTaXplID0gMDtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgOOODk+ODg+ODiOiqreOBv+i+vOOBv1xuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDgg6Kqt44G/5Y+W44Gj44GfOOODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDgoKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCsrO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDE244OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MTYg6Kqt44G/5Y+W44Gj44GfMTbjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQxNkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAyO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDI044OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMjTjg5Pjg4Pjg4jlgKTvvIjkuIvkvY0yNOODk+ODg+ODiOOBq+ioreWumu+8iVxuICAgKi9cbiAgcHVibGljIGdldDI0TGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDIpIDw8IDE2KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDMy44OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMzLjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQzMkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAzKSA8PCAyNCkgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMikgPDwgMTYpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYg44K344Kw44ON44OB44Oj44Gu5Y+W5b6X44Go5Y+C54Wn5paH5a2X5YiX44Go44Gu5LiA6Ie044OB44Kn44OD44KvXG4gICAqIEBwYXJhbVtpbl0gcmVmZXJlbmNlIOaknOafu+WvvuixoeOBruOCt+OCsOODjeODgeODo+aWh+Wtl+WIl1xuICAgKiBAcmV0dmFsICB0cnVlICAgIOS4gOiHtOOBl+OBpuOBhOOCi1xuICAgKiBAcmV0dmFsICBmYWxzZSAgIOS4gOiHtOOBl+OBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIGdldENoZWNrU2lnbmF0dXJlKHJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZ2V0U2lnbmF0dXJlOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nOiBVaW50OEFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHJlZmVyZW5jZSk7XG4gICAgaWYgKHJlZmVyZW5jZS5sZW5ndGggIT0gNCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaWduYXR1cmVPZmZzZXQgPSAwOyBzaWduYXR1cmVPZmZzZXQgPCA0OyBzaWduYXR1cmVPZmZzZXQrKykge1xuICAgICAgZ2V0U2lnbmF0dXJlW3NpZ25hdHVyZU9mZnNldF0gPSB0aGlzLmdldDgoKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGdldFNpZ25hdHVyZVswXSA9PSByZWZlcmVuY2VTdHJpbmdbMF0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsxXSA9PSByZWZlcmVuY2VTdHJpbmdbMV0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsyXSA9PSByZWZlcmVuY2VTdHJpbmdbMl0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVszXSA9PSByZWZlcmVuY2VTdHJpbmdbM11cbiAgICApO1xuICB9XG5cbiAgX2ZpbGVCeXRlOiBBcnJheUJ1ZmZlcjsgLy8vPCDjg63jg7zjg4njgZfjgZ/jg5XjgqHjgqTjg6vjga7jg5DjgqTjg4jliJdcbiAgX2ZpbGVEYXRhVmlldzogRGF0YVZpZXc7XG4gIF9maWxlU2l6ZTogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+OCteOCpOOCulxuICBfcmVhZE9mZnNldDogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+WPgueFp+S9jee9rlxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImU0NmUwNDk3NWI3ZDExNTZlYTJjXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=