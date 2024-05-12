"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappmodel.ts":
/*!**************************!*\
  !*** ./src/lappmodel.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.runTest = exports.LAppModel = void 0;
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
var cubismdefaultparameterid_1 = __webpack_require__(/*! @framework/cubismdefaultparameterid */ "../../../Framework/src/cubismdefaultparameterid.ts");
var cubismmodelsettingjson_1 = __webpack_require__(/*! @framework/cubismmodelsettingjson */ "../../../Framework/src/cubismmodelsettingjson.ts");
var cubismbreath_1 = __webpack_require__(/*! @framework/effect/cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts");
var cubismeyeblink_1 = __webpack_require__(/*! @framework/effect/cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts");
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismusermodel_1 = __webpack_require__(/*! @framework/model/cubismusermodel */ "../../../Framework/src/model/cubismusermodel.ts");
var acubismmotion_1 = __webpack_require__(/*! @framework/motion/acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var cubismmotionqueuemanager_1 = __webpack_require__(/*! @framework/motion/cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts");
var csmmap_1 = __webpack_require__(/*! @framework/type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! @framework/utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappwavfilehandler_1 = __webpack_require__(/*! ./lappwavfilehandler */ "./src/lappwavfilehandler.ts");
var cubismmoc_1 = __webpack_require__(/*! @framework/model/cubismmoc */ "../../../Framework/src/model/cubismmoc.ts");
var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
var LAppModel = (function (_super) {
    __extends(LAppModel, _super);
    function LAppModel() {
        var _this = _super.call(this) || this;
        _this._temp_expression = true;
        _this._modelSetting = null;
        _this._modelHomeDir = null;
        _this._userTimeSeconds = 0.0;
        _this._eyeBlinkIds = new csmvector_1.csmVector();
        _this._lipSyncIds = new csmvector_1.csmVector();
        _this._motions = new csmmap_1.csmMap();
        _this._expressions = new csmmap_1.csmMap();
        _this._hitArea = new csmvector_1.csmVector();
        _this._userArea = new csmvector_1.csmVector();
        _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleX);
        _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleY);
        _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleZ);
        _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallX);
        _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallY);
        _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleX);
        if (LAppDefine.MOCConsistencyValidationEnable) {
            _this._mocConsistency = true;
        }
        _this._state = LoadStep.LoadAssets;
        _this._expressionCount = 0;
        _this._textureCount = 0;
        _this._motionCount = 0;
        _this._allMotionCount = 0;
        _this._wavFileHandler = new lappwavfilehandler_1.LAppWavFileHandler();
        _this._consistency = false;
        return _this;
    }
    LAppModel.prototype.loadAssets = function (dir, fileName) {
        var _this = this;
        this._modelHomeDir = dir;
        fetch("".concat(this._modelHomeDir).concat(fileName))
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) {
            var setting = new cubismmodelsettingjson_1.CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
            _this._state = LoadStep.LoadModel;
            _this.setupModel(setting);
        });
    };
    LAppModel.prototype.setupModel = function (setting) {
        var _this = this;
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        if (this._modelSetting.getModelFileName() != '') {
            var modelFileName = this._modelSetting.getModelFileName();
            fetch("".concat(this._modelHomeDir).concat(modelFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                _this.loadModel(arrayBuffer, _this._mocConsistency);
                _this._state = LoadStep.LoadExpression;
                loadCubismExpression();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            lapppal_1.LAppPal.printMessage('Model data does not exist.');
        }
        var loadCubismExpression = function () {
            if (_this._modelSetting.getExpressionCount() > 0) {
                var count_1 = _this._modelSetting.getExpressionCount();
                var _loop_1 = function (i) {
                    var expressionName = _this._modelSetting.getExpressionName(i);
                    var expressionFileName = _this._modelSetting.getExpressionFileName(i);
                    fetch("".concat(_this._modelHomeDir).concat(expressionFileName))
                        .then(function (response) { return response.arrayBuffer(); })
                        .then(function (arrayBuffer) {
                        var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
                        if (_this._expressions.getValue(expressionName) != null) {
                            acubismmotion_1.ACubismMotion.delete(_this._expressions.getValue(expressionName));
                            _this._expressions.setValue(expressionName, null);
                        }
                        _this._expressions.setValue(expressionName, motion);
                        _this._expressionCount++;
                        if (_this._expressionCount >= count_1) {
                            _this._state = LoadStep.LoadPhysics;
                            loadCubismPhysics();
                        }
                    });
                };
                for (var i = 0; i < count_1; i++) {
                    _loop_1(i);
                }
                _this._state = LoadStep.WaitLoadExpression;
            }
            else {
                _this._state = LoadStep.LoadPhysics;
                loadCubismPhysics();
            }
        };
        var loadCubismPhysics = function () {
            if (_this._modelSetting.getPhysicsFileName() != '') {
                var physicsFileName = _this._modelSetting.getPhysicsFileName();
                fetch("".concat(_this._modelHomeDir).concat(physicsFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.LoadPose;
                    loadCubismPose();
                });
                _this._state = LoadStep.WaitLoadPhysics;
            }
            else {
                _this._state = LoadStep.LoadPose;
                loadCubismPose();
            }
        };
        var loadCubismPose = function () {
            if (_this._modelSetting.getPoseFileName() != '') {
                var poseFileName = _this._modelSetting.getPoseFileName();
                fetch("".concat(_this._modelHomeDir).concat(poseFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPose(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlink;
                    setupEyeBlink();
                });
                _this._state = LoadStep.WaitLoadPose;
            }
            else {
                _this._state = LoadStep.SetupEyeBlink;
                setupEyeBlink();
            }
        };
        var setupEyeBlink = function () {
            if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
                _this._eyeBlink = cubismeyeblink_1.CubismEyeBlink.create(_this._modelSetting);
                _this._state = LoadStep.SetupBreath;
            }
            setupBreath();
        };
        var setupBreath = function () {
            _this._breath = cubismbreath_1.CubismBreath.create();
            var breathParameters = new csmvector_1.csmVector();
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath), 0.5, 0.5, 3.2345, 1));
            _this._breath.setParameters(breathParameters);
            _this._state = LoadStep.LoadUserData;
            loadUserData();
        };
        var loadUserData = function () {
            if (_this._modelSetting.getUserDataFile() != '') {
                var userDataFile = _this._modelSetting.getUserDataFile();
                fetch("".concat(_this._modelHomeDir).concat(userDataFile))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlinkIds;
                    setupEyeBlinkIds();
                });
                _this._state = LoadStep.WaitLoadUserData;
            }
            else {
                _this._state = LoadStep.SetupEyeBlinkIds;
                setupEyeBlinkIds();
            }
        };
        var setupEyeBlinkIds = function () {
            var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
            for (var i = 0; i < eyeBlinkIdCount; ++i) {
                _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
            }
            _this._state = LoadStep.SetupLipSyncIds;
            setupLipSyncIds();
        };
        var setupLipSyncIds = function () {
            var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
            for (var i = 0; i < lipSyncIdCount; ++i) {
                _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
            }
            _this._state = LoadStep.SetupLayout;
            setupLayout();
        };
        var setupLayout = function () {
            var layout = new csmmap_1.csmMap();
            if (_this._modelSetting == null || _this._modelMatrix == null) {
                (0, cubismdebug_1.CubismLogError)('Failed to setupLayout().');
                return;
            }
            _this._modelSetting.getLayoutMap(layout);
            _this._modelMatrix.setupFromLayout(layout);
            _this._state = LoadStep.LoadMotion;
            loadCubismMotion();
        };
        var loadCubismMotion = function () {
            _this._state = LoadStep.WaitLoadMotion;
            _this._model.saveParameters();
            _this._allMotionCount = 0;
            _this._motionCount = 0;
            var group = [];
            var motionGroupCount = _this._modelSetting.getMotionGroupCount();
            for (var i = 0; i < motionGroupCount; i++) {
                group[i] = _this._modelSetting.getMotionGroupName(i);
                _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
            }
            for (var i = 0; i < motionGroupCount; i++) {
                _this.preLoadMotionGroup(group[i]);
            }
            if (motionGroupCount == 0) {
                _this._state = LoadStep.LoadTexture;
                _this._motionManager.stopAllMotions();
                _this._updating = false;
                _this._initialized = true;
                _this.createRenderer();
                _this.setupTextures();
                _this.getRenderer().startUp(lappdelegate_1.gl);
            }
        };
    };
    LAppModel.prototype.setupTextures = function () {
        var _this = this;
        var usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            var textureCount_1 = this._modelSetting.getTextureCount();
            var _loop_2 = function (modelTextureNumber) {
                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    return "continue";
                }
                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this_1._modelHomeDir + texturePath;
                var onLoad = function (textureInfo) {
                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    _this._textureCount++;
                    if (_this._textureCount >= textureCount_1) {
                        _this._state = LoadStep.CompleteSetup;
                    }
                };
                lappdelegate_1.LAppDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            };
            var this_1 = this;
            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                _loop_2(modelTextureNumber);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    };
    LAppModel.prototype.reloadRenderer = function () {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    };
    LAppModel.prototype.update = function () {
        if (this._state != LoadStep.CompleteSetup)
            return;
        var deltaTimeSeconds = 10000;
        this._userTimeSeconds += deltaTimeSeconds;
        this._dragManager.update(deltaTimeSeconds);
        this._dragX = this._dragManager.getX();
        this._dragY = this._dragManager.getY();
        var motionUpdated = false;
        this._model.loadParameters();
        if (this._motionManager.isFinished()) {
            var hard_coded = LAppDefine.MotionGroupTapBody;
            this.startRandomMotion(hard_coded, LAppDefine.PriorityIdle);
        }
        else {
            console.log('pasa por antes del updateMotion');
        }
        this._model.saveParameters();
        if (!motionUpdated) {
            if (this._eyeBlink != null) {
                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
            }
        }
        if (this._expressionManager != null) {
            var ky_expression = this._expressions._keyValues;
            console.log('expressiones => ', ky_expression);
            console.log('temp epxression actual vale => ', this._temp_expression);
            if (this._temp_expression) {
                console.log('pasa por verdadero');
                this.setExpression(ky_expression[0].first);
                this._temp_expression = false;
                console.log('ahora vale => ', this._temp_expression);
            }
            else {
                console.log('pasa por falso');
                this.setExpression(ky_expression[6].first);
                this._temp_expression = true;
            }
            this._expressionManager.updateMotion(this._model, (deltaTimeSeconds * 60 * 60));
        }
        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
        if (this._breath != null) {
            this._breath.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._physics != null) {
            this._physics.evaluate(this._model, deltaTimeSeconds);
        }
        if (this._lipsync) {
            var value = 0.0;
            console.log('LIPPP SYNC ???');
            this._wavFileHandler.update(deltaTimeSeconds);
            value = this._wavFileHandler.getRms();
            for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
            }
        }
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        this._model.update();
    };
    LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {
        var _this = this;
        if (priority == LAppDefine.PriorityForce) {
            this._motionManager.setReservePriority(priority);
        }
        else if (!this._motionManager.reserveMotion(priority)) {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]can't start motion.");
            }
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var motionFileName = this._modelSetting.getMotionFileName(group, no);
        var name = "".concat(group, "_").concat(no);
        var motion = this._motions.getValue(name);
        var autoDelete = false;
        if (motion == null) {
            fetch("".concat(this._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeOutTime(fadeTime);
                }
                motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                autoDelete = true;
            });
        }
        else {
            motion.setFinishedMotionHandler(onFinishedMotionHandler);
        }
        var voice = this._modelSetting.getMotionSoundFileName(group, no);
        if (voice.localeCompare('') != 0) {
            var test = true;
            console.log('group => ', group);
            console.log('numero => ', no);
            console.log('Se busco en => ', this._modelSetting.getMotionSoundFileName(group, no));
            var path = voice;
            path = this._modelHomeDir + path;
            console.log('path generado => ', path);
            this._wavFileHandler.start(path);
        }
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]start motion: [".concat(group, "_").concat(no));
        }
        return this._motionManager.startMotionPriority(motion, autoDelete, priority);
    };
    LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {
        if (this._modelSetting.getMotionCount(group) == 0) {
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var random_motion = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
        var no = 1;
        runTest(this._motions._keyValues[no].first);
        return this.startMotion(group, no, priority, onFinishedMotionHandler);
    };
    LAppModel.prototype.setExpression = function (expressionId) {
        var motion = this._expressions.getValue(expressionId);
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]expression: [".concat(expressionId, "]"));
        }
        if (motion != null) {
            this._expressionManager.startMotionPriority(motion, false, LAppDefine.PriorityForce);
        }
        else {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]expression[".concat(expressionId, "] is null"));
            }
        }
    };
    LAppModel.prototype.setRandomExpression = function () {
        if (this._expressions.getSize() == 0) {
            return;
        }
        var no = Math.floor(Math.random() * this._expressions.getSize());
        console.log('expressiones => ', this._expressions);
        for (var i = 0; i < this._expressions.getSize(); i++) {
            if (i == no) {
                var name_1 = this._expressions._keyValues[i].first;
                this.setExpression(name_1);
                return;
            }
        }
    };
    LAppModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);
    };
    LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
        if (this._opacity < 1) {
            return false;
        }
        var count = this._modelSetting.getHitAreasCount();
        for (var i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                var drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    };
    LAppModel.prototype.preLoadMotionGroup = function (group) {
        var _this = this;
        var _loop_3 = function (i) {
            var motionFileName = this_2._modelSetting.getMotionFileName(group, i);
            var name_2 = "".concat(group, "_").concat(i);
            if (this_2._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]load motion: ".concat(motionFileName, " => [").concat(name_2, "]"));
            }
            fetch("".concat(this_2._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeOutTime(fadeTime);
                }
                tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                if (_this._motions.getValue(name_2) != null) {
                    acubismmotion_1.ACubismMotion.delete(_this._motions.getValue(name_2));
                }
                _this._motions.setValue(name_2, tmpMotion);
                _this._motionCount++;
                if (_this._motionCount >= _this._allMotionCount) {
                    _this._state = LoadStep.LoadTexture;
                    _this._motionManager.stopAllMotions();
                    _this._updating = false;
                    _this._initialized = true;
                    _this.createRenderer();
                    _this.setupTextures();
                    _this.getRenderer().startUp(lappdelegate_1.gl);
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
            _loop_3(i);
        }
    };
    LAppModel.prototype.releaseMotions = function () {
        this._motions.clear();
    };
    LAppModel.prototype.releaseExpressions = function () {
        this._expressions.clear();
    };
    LAppModel.prototype.doDraw = function () {
        if (this._model == null)
            return;
        var viewport = [0, 0, lappdelegate_1.canvas.width, lappdelegate_1.canvas.height];
        this.getRenderer().setRenderState(lappdelegate_1.frameBuffer, viewport);
        this.getRenderer().drawModel();
    };
    LAppModel.prototype.draw = function (matrix) {
        if (this._model == null) {
            return;
        }
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    };
    LAppModel.prototype.hasMocConsistencyFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modelFileName, response, arrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, cubismdebug_1.CSM_ASSERT)(this._modelSetting.getModelFileName().localeCompare(""));
                        if (!(this._modelSetting.getModelFileName() != '')) return [3, 3];
                        modelFileName = this._modelSetting.getModelFileName();
                        return [4, fetch("".concat(this._modelHomeDir).concat(modelFileName))];
                    case 1:
                        response = _a.sent();
                        return [4, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        this._consistency = cubismmoc_1.CubismMoc.hasMocConsistency(arrayBuffer);
                        if (!this._consistency) {
                            (0, cubismdebug_1.CubismLogInfo)('Inconsistent MOC3.');
                        }
                        else {
                            (0, cubismdebug_1.CubismLogInfo)('Consistent MOC3.');
                        }
                        return [2, this._consistency];
                    case 3:
                        lapppal_1.LAppPal.printMessage('Model data does not exist.');
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    return LAppModel;
}(cubismusermodel_1.CubismUserModel));
exports.LAppModel = LAppModel;
function runTest(msg) {
    try {
        var chat_box = document.getElementById('chat-box');
        chat_box.innerHTML = "Current Motion => ".concat(msg);
    }
    catch (error) {
        console.error('error on render ? ...', error);
    }
}
exports.runTest = runTest;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0925922c2cb2a9aab94a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NWMxZDM4ZjI5MWE1ZWFiYWEzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsZ0ZBQXNCO0FBR3RCLHNKQUErRTtBQUMvRSxnSkFBMkU7QUFDM0UsZ0lBR3dDO0FBQ3hDLHNJQUFrRTtBQUdsRSw2SUFBbUU7QUFFbkUsdUlBQW1FO0FBQ25FLG1JQUd5QztBQUV6QyxvS0FHb0Q7QUFDcEQsMEdBQWdEO0FBR2hELG1IQUFzRDtBQUN0RCwySEFJc0M7QUFFdEMsOEZBQTJDO0FBQzNDLHdGQUE0RTtBQUM1RSx5RUFBb0M7QUFFcEMsMEdBQTBEO0FBQzFELHFIQUF1RDtBQUV2RCxJQUFLLFFBd0JKO0FBeEJELFdBQUssUUFBUTtJQUNYLG1EQUFVO0lBQ1YsaURBQVM7SUFDVCx5REFBYTtJQUNiLDJEQUFjO0lBQ2QsbUVBQWtCO0lBQ2xCLHFEQUFXO0lBQ1gsNkRBQWU7SUFDZiwrQ0FBUTtJQUNSLHVEQUFZO0lBQ1oseURBQWE7SUFDYixzREFBVztJQUNYLHdEQUFZO0lBQ1osZ0VBQWdCO0lBQ2hCLGdFQUFnQjtJQUNoQiw4REFBZTtJQUNmLHNEQUFXO0lBQ1gsb0RBQVU7SUFDViw0REFBYztJQUNkLG9FQUFrQjtJQUNsQixvRUFBa0I7SUFDbEIsc0RBQVc7SUFDWCw4REFBZTtJQUNmLDBEQUFhO0FBQ2YsQ0FBQyxFQXhCSSxRQUFRLEtBQVIsUUFBUSxRQXdCWjtBQU1EO0lBQStCLDZCQUFlO0lBeXpCNUM7UUFBQSxZQUNFLGlCQUFPLFNBNkNSO1FBbjJCTyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUF3ekJ2QyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFD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Olsid2VicGFjazovLy8uL3NyYy9sYXBwbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQgfSBmcm9tICdAZnJhbWV3b3JrL2N1YmlzbWRlZmF1bHRwYXJhbWV0ZXJpZCc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbFNldHRpbmdKc29uIH0gZnJvbSAnQGZyYW1ld29yay9jdWJpc21tb2RlbHNldHRpbmdqc29uJztcbmltcG9ydCB7XG4gIEJyZWF0aFBhcmFtZXRlckRhdGEsXG4gIEN1YmlzbUJyZWF0aFxufSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21icmVhdGgnO1xuaW1wb3J0IHsgQ3ViaXNtRXllQmxpbmsgfSBmcm9tICdAZnJhbWV3b3JrL2VmZmVjdC9jdWJpc21leWVibGluayc7XG5pbXBvcnQgeyBJQ3ViaXNtTW9kZWxTZXR0aW5nIH0gZnJvbSAnQGZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nJztcbmltcG9ydCB7IEN1YmlzbUlkSGFuZGxlIH0gZnJvbSAnQGZyYW1ld29yay9pZC9jdWJpc21pZCc7XG5pbXBvcnQgeyBDdWJpc21GcmFtZXdvcmsgfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21Vc2VyTW9kZWwgfSBmcm9tICdAZnJhbWV3b3JrL21vZGVsL2N1YmlzbXVzZXJtb2RlbCc7XG5pbXBvcnQge1xuICBBQ3ViaXNtTW90aW9uLFxuICBGaW5pc2hlZE1vdGlvbkNhbGxiYWNrXG59IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uIH0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9uJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUsXG4gIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWVcbn0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyJztcbmltcG9ydCB7IGNzbU1hcCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21tYXAnO1xuaW1wb3J0IHsgY3NtUmVjdCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21yZWN0Zic7XG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHtcbiAgQ1NNX0FTU0VSVCxcbiAgQ3ViaXNtTG9nRXJyb3IsXG4gIEN1YmlzbUxvZ0luZm9cbn0gZnJvbSAnQGZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zyc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IGNhbnZhcywgY3R4LCBmcmFtZUJ1ZmZlciwgZ2wsIExBcHBEZWxlZ2F0ZSB9IGZyb20gJy4vbGFwcGRlbGVnYXRlJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tICcuL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwV2F2RmlsZUhhbmRsZXIgfSBmcm9tICcuL2xhcHB3YXZmaWxlaGFuZGxlcic7XG5pbXBvcnQgeyBDdWJpc21Nb2MgfSBmcm9tICdAZnJhbWV3b3JrL21vZGVsL2N1YmlzbW1vYyc7XG5cbmVudW0gTG9hZFN0ZXAge1xuICBMb2FkQXNzZXRzLFxuICBMb2FkTW9kZWwsXG4gIFdhaXRMb2FkTW9kZWwsXG4gIExvYWRFeHByZXNzaW9uLFxuICBXYWl0TG9hZEV4cHJlc3Npb24sXG4gIExvYWRQaHlzaWNzLFxuICBXYWl0TG9hZFBoeXNpY3MsXG4gIExvYWRQb3NlLFxuICBXYWl0TG9hZFBvc2UsXG4gIFNldHVwRXllQmxpbmssXG4gIFNldHVwQnJlYXRoLFxuICBMb2FkVXNlckRhdGEsXG4gIFdhaXRMb2FkVXNlckRhdGEsXG4gIFNldHVwRXllQmxpbmtJZHMsXG4gIFNldHVwTGlwU3luY0lkcyxcbiAgU2V0dXBMYXlvdXQsXG4gIExvYWRNb3Rpb24sXG4gIFdhaXRMb2FkTW90aW9uLFxuICBDb21wbGV0ZUluaXRpYWxpemUsXG4gIENvbXBsZXRlU2V0dXBNb2RlbCxcbiAgTG9hZFRleHR1cmUsXG4gIFdhaXRMb2FkVGV4dHVyZSxcbiAgQ29tcGxldGVTZXR1cFxufVxuXG4vKipcbiAqIOODpuODvOOCtuODvOOBjOWun+mam+OBq+S9v+eUqOOBmeOCi+ODouODh+ODq+OBruWun+ijheOCr+ODqeOCuTxicj5cbiAqIOODouODh+ODq+eUn+aIkOOAgeapn+iDveOCs+ODs+ODneODvOODjeODs+ODiOeUn+aIkOOAgeabtOaWsOWHpueQhuOBqOODrOODs+ODgOODquODs+OCsOOBruWRvOOBs+WHuuOBl+OCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcE1vZGVsIGV4dGVuZHMgQ3ViaXNtVXNlck1vZGVsIHtcbiAgXG4gIC8vIFRPRE8gOiBUaGlzIGNyZWF0ZSB0aGUgYXVkaW8gcHJvcGVydHkgdG8gaGFuZGxlIHRoZSBhdmF0YXIgc3BlYWsgXG4gIHByaXZhdGUgX2F1ZGlvU3JjOiBhbnk7XG4gIHByaXZhdGUgX3RlbXBfZXhwcmVzc2lvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIG1vZGVsMy5qc29u44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Go44OV44Kh44Kk44Or44OR44K544GL44KJ44Oi44OH44Or44KS55Sf5oiQ44GZ44KLXG4gICAqIEBwYXJhbSBkaXJcbiAgICogQHBhcmFtIGZpbGVOYW1lXG4gICAqL1xuICBwdWJsaWMgbG9hZEFzc2V0cyhkaXI6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGVsSG9tZURpciA9IGRpcjtcblxuICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke2ZpbGVOYW1lfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nID0gbmV3IEN1YmlzbU1vZGVsU2V0dGluZ0pzb24oXG4gICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIOOCueODhuODvOODiOOCkuabtOaWsFxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb2RlbDtcblxuICAgICAgICAvLyDntZDmnpzjgpLkv53lrZhcbiAgICAgICAgdGhpcy5zZXR1cE1vZGVsKHNldHRpbmcpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgovjgIJcbiAgICogbW9kZWwzLmpzb27jga7oqJjov7DjgavlvpPjgaPjgabjg6Ljg4fjg6vnlJ/miJDjgIHjg6Ljg7zjgrfjg6fjg7PjgIHniannkIbmvJTnrpfjgarjganjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgpLooYzjgYbjgIJcbiAgICpcbiAgICogQHBhcmFtIHNldHRpbmcgSUN1YmlzbU1vZGVsU2V0dGluZ+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE1vZGVsKHNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAvLyBDdWJpc21Nb2RlbFxuICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICBjb25zdCBtb2RlbEZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKTtcblxuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW9kZWxGaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTW9kZWwoYXJyYXlCdWZmZXIsIHRoaXMuX21vY0NvbnNpc3RlbmN5KTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRFeHByZXNzaW9uO1xuXG4gICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICBsb2FkQ3ViaXNtRXhwcmVzc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG5cbiAgICAvLyBFeHByZXNzaW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbUV4cHJlc3Npb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpID4gMCkge1xuICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25OYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25OYW1lKGkpO1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25GaWxlTmFtZSA9XG4gICAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbkZpbGVOYW1lKGkpO1xuXG4gICAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7ZXhwcmVzc2lvbkZpbGVOYW1lfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtb3Rpb246IEFDdWJpc21Nb3Rpb24gPSB0aGlzLmxvYWRFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbk5hbWVcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5fZXhwcmVzc2lvbnMuZ2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBQ3ViaXNtTW90aW9uLmRlbGV0ZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25OYW1lKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMuc2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUsIG51bGwpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMuc2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUsIG1vdGlvbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbkNvdW50Kys7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25Db3VudCA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBoeXNpY3M7XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGxvYWRDdWJpc21QaHlzaWNzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRFeHByZXNzaW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkUGh5c2ljcztcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBsb2FkQ3ViaXNtUGh5c2ljcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBQaHlzaWNzXG4gICAgY29uc3QgbG9hZEN1YmlzbVBoeXNpY3MgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFBoeXNpY3NGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICAgIGNvbnN0IHBoeXNpY3NGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRQaHlzaWNzRmlsZU5hbWUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHtwaHlzaWNzRmlsZU5hbWV9YClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBoeXNpY3MoYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgbG9hZEN1YmlzbVBvc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFBoeXNpY3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGxvYWRDdWJpc21Qb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBvc2VcbiAgICBjb25zdCBsb2FkQ3ViaXNtUG9zZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UG9zZUZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgcG9zZUZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFBvc2VGaWxlTmFtZSgpO1xuXG4gICAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke3Bvc2VGaWxlTmFtZX1gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkUG9zZShhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGluaztcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIHNldHVwRXllQmxpbmsoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFBvc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbms7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgc2V0dXBFeWVCbGluaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeWVCbGlua1xuICAgIGNvbnN0IHNldHVwRXllQmxpbmsgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVyQ291bnQoKSA+IDApIHtcbiAgICAgICAgdGhpcy5fZXllQmxpbmsgPSBDdWJpc21FeWVCbGluay5jcmVhdGUodGhpcy5fbW9kZWxTZXR0aW5nKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEJyZWF0aDtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIHNldHVwQnJlYXRoKCk7XG4gICAgfTtcblxuICAgIC8vIEJyZWF0aFxuICAgIGNvbnN0IHNldHVwQnJlYXRoID0gKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fYnJlYXRoID0gQ3ViaXNtQnJlYXRoLmNyZWF0ZSgpO1xuXG4gICAgICBjb25zdCBicmVhdGhQYXJhbWV0ZXJzOiBjc21WZWN0b3I8QnJlYXRoUGFyYW1ldGVyRGF0YT4gPSBuZXcgY3NtVmVjdG9yKCk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQW5nbGVYLCAwLjAsIDE1LjAsIDYuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVksIDAuMCwgOC4wLCAzLjUzNDUsIDAuNSlcbiAgICAgICk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQW5nbGVaLCAwLjAsIDEwLjAsIDUuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVYLCAwLjAsIDQuMCwgMTUuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKFxuICAgICAgICAgIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUJyZWF0aFxuICAgICAgICAgICksXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAzLjIzNDUsXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9icmVhdGguc2V0UGFyYW1ldGVycyhicmVhdGhQYXJhbWV0ZXJzKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFVzZXJEYXRhO1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgbG9hZFVzZXJEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vIFVzZXJEYXRhXG4gICAgY29uc3QgbG9hZFVzZXJEYXRhID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRVc2VyRGF0YUZpbGUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCB1c2VyRGF0YUZpbGUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VXNlckRhdGFGaWxlKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7dXNlckRhdGFGaWxlfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VyRGF0YShhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGlua0lkcztcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIHNldHVwRXllQmxpbmtJZHMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkVXNlckRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbmtJZHM7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgc2V0dXBFeWVCbGlua0lkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeWVCbGlua0lkc1xuICAgIGNvbnN0IHNldHVwRXllQmxpbmtJZHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBleWVCbGlua0lkQ291bnQ6IG51bWJlciA9XG4gICAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXllQmxpbmtJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fZXllQmxpbmtJZHMucHVzaEJhY2soXG4gICAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVySWQoaSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cExpcFN5bmNJZHM7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExpcFN5bmNJZHMoKTtcbiAgICB9O1xuXG4gICAgLy8gTGlwU3luY0lkc1xuICAgIGNvbnN0IHNldHVwTGlwU3luY0lkcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxpcFN5bmNJZENvdW50ID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcFN5bmNJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fbGlwU3luY0lkcy5wdXNoQmFjayh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGlwU3luY1BhcmFtZXRlcklkKGkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBMYXlvdXQ7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExheW91dCgpO1xuICAgIH07XG5cbiAgICAvLyBMYXlvdXRcbiAgICBjb25zdCBzZXR1cExheW91dCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxheW91dDogY3NtTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBjc21NYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbE1hdHJpeCA9PSBudWxsKSB7XG4gICAgICAgIEN1YmlzbUxvZ0Vycm9yKCdGYWlsZWQgdG8gc2V0dXBMYXlvdXQoKS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGF5b3V0TWFwKGxheW91dCk7XG4gICAgICB0aGlzLl9tb2RlbE1hdHJpeC5zZXR1cEZyb21MYXlvdXQobGF5b3V0KTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZE1vdGlvbjtcblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIGxvYWRDdWJpc21Nb3Rpb24oKTtcbiAgICB9O1xuXG4gICAgLy8gTW90aW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbU1vdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRNb3Rpb247XG4gICAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpO1xuICAgICAgdGhpcy5fYWxsTW90aW9uQ291bnQgPSAwO1xuICAgICAgdGhpcy5fbW90aW9uQ291bnQgPSAwO1xuICAgICAgY29uc3QgZ3JvdXA6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGNvbnN0IG1vdGlvbkdyb3VwQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Hcm91cENvdW50KCk7XG5cbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBrue3j+aVsOOCkuaxguOCgeOCi1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Rpb25Hcm91cENvdW50OyBpKyspIHtcbiAgICAgICAgZ3JvdXBbaV0gPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uR3JvdXBOYW1lKGkpO1xuICAgICAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCArPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7oqq3jgb/ovrzjgb9cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW90aW9uR3JvdXBDb3VudDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJlTG9hZE1vdGlvbkdyb3VwKGdyb3VwW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8g44Oi44O844K344On44Oz44GM44Gq44GE5aC05ZCIXG4gICAgICBpZiAobW90aW9uR3JvdXBDb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFRleHR1cmU7XG5cbiAgICAgICAgLy8g5YWo44Gm44Gu44Oi44O844K344On44Oz44KS5YGc5q2i44GZ44KLXG4gICAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc3RvcEFsbE1vdGlvbnMoKTtcblxuICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnN0YXJ0VXAoZ2wpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44OG44Kv44K544OB44Oj44Om44OL44OD44OI44Gr44OG44Kv44K544OB44Oj44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBwcml2YXRlIHNldHVwVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgLy8gaVBob25l44Gn44Gu44Ki44Or44OV44Kh5ZOB6LOq5ZCR5LiK44Gu44Gf44KBVHlwZXNjcmlwdOOBp+OBr3ByZW11bHRpcGxpZWRBbHBoYeOCkuaOoeeUqFxuICAgIGNvbnN0IHVzZVByZW11bHRpcGx5ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBMb2FkU3RlcC5Mb2FkVGV4dHVyZSkge1xuICAgICAgLy8g44OG44Kv44K544OB44Oj6Kqt44G/6L6844G/55SoXG4gICAgICBjb25zdCB0ZXh0dXJlQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlQ291bnQoKTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IG1vZGVsVGV4dHVyZU51bWJlciA9IDA7XG4gICAgICAgIG1vZGVsVGV4dHVyZU51bWJlciA8IHRleHR1cmVDb3VudDtcbiAgICAgICAgbW9kZWxUZXh0dXJlTnVtYmVyKytcbiAgICAgICkge1xuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PlkI3jgYznqbrmloflrZfjgaDjgaPjgZ/loLTlkIjjga/jg63jg7zjg4njg7vjg5DjgqTjg7Pjg4nlh6bnkIbjgpLjgrnjgq3jg4Pjg5dcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlRmlsZU5hbWUobW9kZWxUZXh0dXJlTnVtYmVyKSA9PSAnJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRUZXh0dXJlRmlsZU5hbWUgbnVsbCcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViR0zjga7jg4bjgq/jgrnjg4Hjg6Pjg6bjg4vjg4Pjg4jjgavjg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4njgZnjgotcbiAgICAgICAgbGV0IHRleHR1cmVQYXRoID1cbiAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VGV4dHVyZUZpbGVOYW1lKG1vZGVsVGV4dHVyZU51bWJlcik7XG4gICAgICAgIHRleHR1cmVQYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgdGV4dHVyZVBhdGg7XG5cbiAgICAgICAgLy8g44Ot44O844OJ5a6M5LqG5pmC44Gr5ZG844Gz5Ye644GZ44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAgICAgIGNvbnN0IG9uTG9hZCA9ICh0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuYmluZFRleHR1cmUobW9kZWxUZXh0dXJlTnVtYmVyLCB0ZXh0dXJlSW5mby5pZCk7XG5cbiAgICAgICAgICB0aGlzLl90ZXh0dXJlQ291bnQrKztcblxuICAgICAgICAgIGlmICh0aGlzLl90ZXh0dXJlQ291bnQgPj0gdGV4dHVyZUNvdW50KSB7XG4gICAgICAgICAgICAvLyDjg63jg7zjg4nlrozkuoZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g6Kqt44G/6L6844G/XG4gICAgICAgIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpXG4gICAgICAgICAgLmdldFRleHR1cmVNYW5hZ2VyKClcbiAgICAgICAgICAuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKHRleHR1cmVQYXRoLCB1c2VQcmVtdWx0aXBseSwgb25Mb2FkKTtcbiAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnNldElzUHJlbXVsdGlwbGllZEFscGhhKHVzZVByZW11bHRpcGx5KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFRleHR1cmU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeOCkuWGjeani+evieOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbG9hZFJlbmRlcmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gIH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPSBMb2FkU3RlcC5Db21wbGV0ZVNldHVwKSByZXR1cm47XG5cbiAgICAvLyBjb25zdCBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIgPSBMQXBwUGFsLmdldERlbHRhVGltZSgpO1xuICAgIGNvbnN0IGRlbHRhVGltZVNlY29uZHM6IG51bWJlciA9IDEwMDAwO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArPSBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgdGhpcy5fZHJhZ01hbmFnZXIudXBkYXRlKGRlbHRhVGltZVNlY29uZHMpO1xuICAgIHRoaXMuX2RyYWdYID0gdGhpcy5fZHJhZ01hbmFnZXIuZ2V0WCgpO1xuICAgIHRoaXMuX2RyYWdZID0gdGhpcy5fZHJhZ01hbmFnZXIuZ2V0WSgpO1xuXG4gICAgLy8g44Oi44O844K344On44Oz44Gr44KI44KL44OR44Op44Oh44O844K/5pu05paw44Gu5pyJ54ShXG4gICAgbGV0IG1vdGlvblVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9tb2RlbC5sb2FkUGFyYW1ldGVycygpOyAvLyDliY3lm57jgrvjg7zjg5bjgZXjgozjgZ/nirbmhYvjgpLjg63jg7zjg4lcbiAgICBpZiAodGhpcy5fbW90aW9uTWFuYWdlci5pc0ZpbmlzaGVkKCkpIHtcbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBruWGjeeUn+OBjOOBquOBhOWgtOWQiOOAgeW+heapn+ODouODvOOCt+ODp+ODs+OBruS4reOBi+OCieODqeODs+ODgOODoOOBp+WGjeeUn+OBmeOCi1xuICAgICAgLy8gVE9ETyA6IE1vdGlvblxuICAgICAgY29uc3QgaGFyZF9jb2RlZCA9IExBcHBEZWZpbmUuTW90aW9uR3JvdXBUYXBCb2R5XG4gICAgICB0aGlzLnN0YXJ0UmFuZG9tTW90aW9uKFxuICAgICAgICAvL0xBcHBEZWZpbmUuTW90aW9uR3JvdXBJZGxlLFxuICAgICAgICBoYXJkX2NvZGVkLFxuICAgICAgICBMQXBwRGVmaW5lLlByaW9yaXR5SWRsZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3Bhc2EgcG9yIGFudGVzIGRlbCB1cGRhdGVNb3Rpb24nKTtcbiAgICAgIC8vIG1vdGlvblVwZGF0ZWQgPSB0aGlzLl9tb3Rpb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbihcbiAgICAgIC8vICAgdGhpcy5fbW9kZWwsXG4gICAgICAvLyAgIGRlbHRhVGltZVNlY29uZHNcbiAgICAgIC8vICk7IC8vIOODouODvOOCt+ODp+ODs+OCkuabtOaWsFxuICAgIH1cbiAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpOyAvLyDnirbmhYvjgpLkv53lrZhcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyDjgb7jgbDjgZ/jgY1cbiAgICBpZiAoIW1vdGlvblVwZGF0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9leWVCbGluayAhPSBudWxsKSB7XG4gICAgICAgIC8vIOODoeOCpOODs+ODouODvOOCt+ODp+ODs+OBruabtOaWsOOBjOOBquOBhOOBqOOBjVxuICAgICAgICB0aGlzLl9leWVCbGluay51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g55uu44OR44OBXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXNhIHBvciBlbCBfZXhwcmVzc2lvbk1hbmFnZXInLCB0aGlzLl9leHByZXNzaW9uTWFuYWdlcik7XG4gICAgICBjb25zdCBreV9leHByZXNzaW9uID0gdGhpcy5fZXhwcmVzc2lvbnMuX2tleVZhbHVlcztcbiAgICAgIGNvbnNvbGUubG9nKCdleHByZXNzaW9uZXMgPT4gJywga3lfZXhwcmVzc2lvbik7XG4gICAgICAvLyBpZighdGhpcy5fdGVtcF9leHByZXNzaW9uKSB0aGlzLl90ZW1wX2V4cHJlc3Npb24gPSB0cnVlO1xuICBjb25zb2xlLmxvZygndGVtcCBlcHhyZXNzaW9uIGFjdHVhbCB2YWxlID0+ICcsIHRoaXMuX3RlbXBfZXhwcmVzc2lvbik7XG4gICAgICBpZiAodGhpcy5fdGVtcF9leHByZXNzaW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNhIHBvciB2ZXJkYWRlcm8nKVxuICAgICAgICB0aGlzLnNldEV4cHJlc3Npb24oa3lfZXhwcmVzc2lvblswXS5maXJzdCk7XG4gICAgICAgIHRoaXMuX3RlbXBfZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZygnYWhvcmEgdmFsZSA9PiAnLCB0aGlzLl90ZW1wX2V4cHJlc3Npb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncGFzYSBwb3IgZmFsc28nKTtcbiAgICAgICAgdGhpcy5zZXRFeHByZXNzaW9uKGt5X2V4cHJlc3Npb25bNl0uZmlyc3QpO1xuICAgICAgICB0aGlzLl90ZW1wX2V4cHJlc3Npb24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIudXBkYXRlTW90aW9uKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g6KGo5oOF44Gn44OR44Op44Oh44O844K/5pu05paw77yI55u45a++5aSJ5YyW77yJXG4gICAgICB0aGlzLl9leHByZXNzaW9uTWFuYWdlci51cGRhdGVNb3Rpb24odGhpcy5fbW9kZWwsIChkZWx0YVRpbWVTZWNvbmRzICogNjAgKiA2MCkpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0RFTFRBIFNFQ09OR1MgPT4gJywgZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL5aSJ5YyWXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL6aGU44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1BbmdsZVgsIHRoaXMuX2RyYWdYICogMzApOyAvLyAtMzDjgYvjgokzMOOBruWApOOCkuWKoOOBiOOCi1xuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVZLCB0aGlzLl9kcmFnWSAqIDMwKTtcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQW5nbGVaLFxuICAgICAgdGhpcy5fZHJhZ1ggKiB0aGlzLl9kcmFnWSAqIC0zMFxuICAgICk7XG5cbiAgICAvLyDjg4njg6njg4PjgrDjgavjgojjgovkvZPjga7lkJHjgY3jga7oqr/mlbRcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQoXG4gICAgICB0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCxcbiAgICAgIHRoaXMuX2RyYWdYICogMTBcbiAgICApOyAvLyAtMTDjgYvjgokxMOOBruWApOOCkuWKoOOBiOOCi1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL55uu44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVCYWxsWCwgdGhpcy5fZHJhZ1gpOyAvLyAtMeOBi+OCiTHjga7lgKTjgpLliqDjgYjjgotcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUV5ZUJhbGxZLCB0aGlzLl9kcmFnWSk7XG5cbiAgICAvLyDlkbzlkLjjgarjgalcbiAgICBpZiAodGhpcy5fYnJlYXRoICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2JyZWF0aC51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDniannkIbmvJTnrpfjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcGh5c2ljcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9waHlzaWNzLmV2YWx1YXRlKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDjg6rjg4Pjg5fjgrfjg7Pjgq/jga7oqK3lrppcbiAgICBpZiAodGhpcy5fbGlwc3luYykge1xuICAgICAgbGV0IHZhbHVlID0gMC4wOyAvLyDjg6rjgqLjg6vjgr/jgqTjg6Djgafjg6rjg4Pjg5fjgrfjg7Pjgq/jgpLooYzjgYbloLTlkIjjgIHjgrfjgrnjg4bjg6DjgYvjgonpn7Pph4/jgpLlj5blvpfjgZfjgabjgIEwfjHjga7nr4Tlm7LjgaflgKTjgpLlhaXlipvjgZfjgb7jgZnjgIJcbiAgICAgIGNvbnNvbGUubG9nKCdMSVBQUCBTWU5DID8/PycpO1xuICAgICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIudXBkYXRlKGRlbHRhVGltZVNlY29uZHMpO1xuICAgICAgdmFsdWUgPSB0aGlzLl93YXZGaWxlSGFuZGxlci5nZXRSbXMoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXBTeW5jSWRzLmdldFNpemUoKTsgKytpKSB7XG4gICAgICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9saXBTeW5jSWRzLmF0KGkpLCB2YWx1ZSwgMC44KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDjg53jg7zjgrrjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcG9zZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3NlLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGVsLnVwZGF0ZSgpO1xuXG4gICAgLy8gVE9ETyA6IEFkZCBoZXJlIHRoZSBhdWRpbyBsb2dpY1xuICAgIC8vIGNvbnN0IGF1ZGlvOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2UnKTtcbiAgICAvLyBpZiAoYXVkaW8uc3JjICE9PSB0aGlzLl9hdWRpb1NyYykge1xuICAgIC8vICAgdGhpcy5fYXVkaW9TcmMgPSBhdWRpby5zcmM7XG4gICAgLy8gICBhdWRpby5wbGF5KCk7XG4gICAgLy8gfVxuXG4gIH1cblxuICAvKipcbiAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf44Oi44O844K344On44Oz44Gu5YaN55Sf44KS6ZaL5aeL44GZ44KLXG4gICAqIEBwYXJhbSBncm91cCDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5flkI1cbiAgICogQHBhcmFtIG5vIOOCsOODq+ODvOODl+WGheOBrueVquWPt1xuICAgKiBAcGFyYW0gcHJpb3JpdHkg5YSq5YWI5bqmXG4gICAqIEBwYXJhbSBvbkZpbmlzaGVkTW90aW9uSGFuZGxlciDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/ntYLkuobmmYLjgavlkbzjgbPlh7rjgZXjgozjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICogQHJldHVybiDplovlp4vjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7orZjliKXnlarlj7fjgpLov5TjgZnjgILlgIvliKXjga7jg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/jgYvlkKbjgYvjgpLliKTlrprjgZnjgotpc0ZpbmlzaGVkKCnjga7lvJXmlbDjgafkvb/nlKjjgZnjgovjgILplovlp4vjgafjgY3jgarjgYTmmYLjga9bLTFdXG4gICAqL1xuICBwdWJsaWMgc3RhcnRNb3Rpb24oXG4gICAgZ3JvdXA6IHN0cmluZyxcbiAgICBubzogbnVtYmVyLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXI/OiBGaW5pc2hlZE1vdGlvbkNhbGxiYWNrXG4gICk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUge1xuICAgIGlmIChwcmlvcml0eSA9PSBMQXBwRGVmaW5lLlByaW9yaXR5Rm9yY2UpIHtcbiAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc2V0UmVzZXJ2ZVByaW9yaXR5KHByaW9yaXR5KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9tb3Rpb25NYW5hZ2VyLnJlc2VydmVNb3Rpb24ocHJpb3JpdHkpKSB7XG4gICAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFwiW0FQUF1jYW4ndCBzdGFydCBtb3Rpb24uXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgbW90aW9uRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmlsZU5hbWUoZ3JvdXAsIG5vKTtcblxuICAgIC8vIGV4KSBpZGxlXzBcbiAgICBjb25zdCBuYW1lID0gYCR7Z3JvdXB9XyR7bm99YDtcbiAgICBsZXQgbW90aW9uOiBDdWJpc21Nb3Rpb24gPSB0aGlzLl9tb3Rpb25zLmdldFZhbHVlKG5hbWUpIGFzIEN1YmlzbU1vdGlvbjtcbiAgICBsZXQgYXV0b0RlbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKG1vdGlvbiA9PSBudWxsKSB7XG4gICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHttb3Rpb25GaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgbW90aW9uID0gdGhpcy5sb2FkTW90aW9uKFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgICBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgZmFkZVRpbWU6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GYWRlSW5UaW1lVmFsdWUoXG4gICAgICAgICAgICBncm91cCxcbiAgICAgICAgICAgIG5vXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIG1vdGlvbi5zZXRGYWRlSW5UaW1lKGZhZGVUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmYWRlVGltZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GYWRlT3V0VGltZVZhbHVlKGdyb3VwLCBubyk7XG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgbW90aW9uLnNldEZhZGVPdXRUaW1lKGZhZGVUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtb3Rpb24uc2V0RWZmZWN0SWRzKHRoaXMuX2V5ZUJsaW5rSWRzLCB0aGlzLl9saXBTeW5jSWRzKTtcbiAgICAgICAgICBhdXRvRGVsZXRlID0gdHJ1ZTsgLy8g57WC5LqG5pmC44Gr44Oh44Oi44Oq44GL44KJ5YmK6ZmkXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3Rpb24uc2V0RmluaXNoZWRNb3Rpb25IYW5kbGVyKG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIDogdm9pY2UgaGFuZGxlciBoZXJlXG4gICAgLy92b2ljZVxuICAgIGNvbnN0IHZvaWNlID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvblNvdW5kRmlsZU5hbWUoZ3JvdXAsIG5vKTtcbiAgICBpZiAodm9pY2UubG9jYWxlQ29tcGFyZSgnJykgIT0gMCkge1xuICAgIGNvbnN0IHRlc3QgPSB0cnVlO1xuICAgIC8vIGlmICh0ZXN0KSB7XG4gICAgICBjb25zb2xlLmxvZygnZ3JvdXAgPT4gJywgZ3JvdXApO1xuICAgICAgY29uc29sZS5sb2coJ251bWVybyA9PiAnLCBubyk7XG4gICAgICBjb25zb2xlLmxvZygnU2UgYnVzY28gZW4gPT4gJywgdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvblNvdW5kRmlsZU5hbWUoZ3JvdXAsIG5vKSk7XG4gICAgICBsZXQgcGF0aCA9IHZvaWNlO1xuICAgICAgcGF0aCA9IHRoaXMuX21vZGVsSG9tZURpciArIHBhdGg7XG4gICAgICBjb25zb2xlLmxvZygncGF0aCBnZW5lcmFkbyA9PiAnLCBwYXRoKTtcbiAgICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyLnN0YXJ0KHBhdGgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXXN0YXJ0IG1vdGlvbjogWyR7Z3JvdXB9XyR7bm99YCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tb3Rpb25NYW5hZ2VyLnN0YXJ0TW90aW9uUHJpb3JpdHkoXG4gICAgICBtb3Rpb24sXG4gICAgICBhdXRvRGVsZXRlLFxuICAgICAgcHJpb3JpdHlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBq+mBuOOBsOOCjOOBn+ODouODvOOCt+ODp+ODs+OBruWGjeeUn+OCkumWi+Wni+OBmeOCi+OAglxuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44Kw44Or44O844OX5ZCNXG4gICAqIEBwYXJhbSBwcmlvcml0eSDlhKrlhYjluqZcbiAgICogQHBhcmFtIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huaZguOBq+WRvOOBs+WHuuOBleOCjOOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgKiBAcmV0dXJuIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi2lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr1stMV1cbiAgICovXG4gIC8vIFRPRE8gOiBoZXJlIGVtaXQgYW4gZXZlbnQgd2hlbiByYW5kb20gbW90aW9uIGlzIGdlbmVyYXRlZFxuICBwdWJsaWMgc3RhcnRSYW5kb21Nb3Rpb24oXG4gICAgZ3JvdXA6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyPzogRmluaXNoZWRNb3Rpb25DYWxsYmFja1xuICApOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlIHtcbiAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKSA9PSAwKSB7XG4gICAgICByZXR1cm4gSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIDogaWYgdGhlIG1vdGlvbiBvcGVuIHRoZSBtb3V0aCAoIGNhbGwgdG8gT3BlbkFJIGFwaSApXG4gICAgLy8gQWxzbyBkZWZpbmUgYSBpbmZpbml0ZSBsb29wIG9mIHRoZSBzYW1lIG1vdGlvbiwgaWYgdGhlIHNwZWFrIHN0b3BzLCByZXRha2UgdGhlIG5leHRzIHJhbmRvbSBtb3Rpb25zXG4gICAgLy8gTnVtYmVyIG9mIHRoZSBtb3Rpb24gc2VsZWN0ZWRcbiAgICBjb25zdCByYW5kb21fbW90aW9uID0gTWF0aC5mbG9vcihcbiAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXApXG4gICAgKTtcbiAgICAvLyBjb25zdCBubzogbnVtYmVyID0gcmFuZG9tX21vdGlvbjtcbmNvbnN0IG5vOiBudW1iZXIgPSAxO1xuICAgIHJ1blRlc3QodGhpcy5fbW90aW9ucy5fa2V5VmFsdWVzW25vXS5maXJzdCk7XG5cbiAgICByZXR1cm4gdGhpcy5zdGFydE1vdGlvbihncm91cCwgbm8sIHByaW9yaXR5LCBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf6KGo5oOF44Oi44O844K344On44Oz44KS44K744OD44OI44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSBleHByZXNzaW9uSWQg6KGo5oOF44Oi44O844K344On44Oz44GuSURcbiAgICovXG4gIC8vIFRoaXMgaXMgZ29ubmEgYmUgc2VsZWN0ZWQgb24gY2xpY2tcbiAgcHVibGljIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgIGNvbnN0IG1vdGlvbjogQUN1YmlzbU1vdGlvbiA9IHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25JZCk7XG5cbiAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1leHByZXNzaW9uOiBbJHtleHByZXNzaW9uSWR9XWApO1xuICAgIH1cblxuICAgIGlmIChtb3Rpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbk1hbmFnZXIuc3RhcnRNb3Rpb25Qcmlvcml0eShcbiAgICAgICAgbW90aW9uLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eUZvcmNlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXWV4cHJlc3Npb25bJHtleHByZXNzaW9uSWR9XSBpcyBudWxsYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBjb2RlIGlzIG5vdCBnb25uYSBiZS4gbmVjZXNzYXJ5IGkgdGhpbmtcbiAgLy8gVE9ETyA6IEhhbmRsZSBoZXJlIHRoZSBFeHByZXNzaW9ucyBvZiB0aGUgY2hhcmFjdGVyXG4gIHB1YmxpYyBzZXRSYW5kb21FeHByZXNzaW9uKCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25zLmdldFNpemUoKSA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm86IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2V4cHJlc3Npb25zLmdldFNpemUoKSk7XG4gICAgY29uc29sZS5sb2coJ2V4cHJlc3Npb25lcyA9PiAnLCB0aGlzLl9leHByZXNzaW9ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKGkgPT0gbm8pIHtcbiAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gdGhpcy5fZXhwcmVzc2lvbnMuX2tleVZhbHVlc1tpXS5maXJzdDtcbiAgICAgICAgdGhpcy5zZXRFeHByZXNzaW9uKG5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODmeODs+ODiOOBrueZuueBq+OCkuWPl+OBkeWPluOCi1xuICAgKi9cbiAgcHVibGljIG1vdGlvbkV2ZW50RmlyZWQoZXZlbnRWYWx1ZTogY3NtU3RyaW5nKTogdm9pZCB7XG4gICAgQ3ViaXNtTG9nSW5mbygnezB9IGlzIGZpcmVkIG9uIExBcHBNb2RlbCEhJywgZXZlbnRWYWx1ZS5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPjgZ/jgorliKTlrprjg4bjgrnjg4hcbiAgICog5oyH5a6a77yp77yk44Gu6aCC54K544Oq44K544OI44GL44KJ55+p5b2i44KS6KiI566X44GX44CB5bqn5qiZ44KS44GM55+p5b2i56+E5Zuy5YaF44GL5Yik5a6a44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBoaXRBcmVuYU5hbWUgIOW9k+OBn+OCiuWIpOWumuOCkuODhuOCueODiOOBmeOCi+WvvuixoeOBrklEXG4gICAqIEBwYXJhbSB4ICAgICAgICAgICAgIOWIpOWumuOCkuihjOOBhljluqfmqJlcbiAgICogQHBhcmFtIHkgICAgICAgICAgICAg5Yik5a6a44KS6KGM44GGWeW6p+aomVxuICAgKi9cbiAgcHVibGljIGhpdFRlc3QoaGl0QXJlbmFOYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgLy8g6YCP5piO5pmC44Gv5b2T44Gf44KK5Yik5a6a54Sh44GX44CCXG4gICAgaWYgKHRoaXMuX29wYWNpdHkgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhc0NvdW50KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYU5hbWUoaSkgPT0gaGl0QXJlbmFOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRyYXdJZDogQ3ViaXNtSWRIYW5kbGUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYUlkKGkpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hpdChkcmF3SWQsIHgsIHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jgpLjgrDjg6vjg7zjg5flkI3jgYvjgonkuIDmi6zjgafjg63jg7zjg4njgZnjgovjgIJcbiAgICog44Oi44O844K344On44Oz44OH44O844K/44Gu5ZCN5YmN44Gv5YaF6YOo44GnTW9kZWxTZXR0aW5n44GL44KJ5Y+W5b6X44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBncm91cCDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jga7jgrDjg6vjg7zjg5flkI1cbiAgICovXG4gIHB1YmxpYyBwcmVMb2FkTW90aW9uR3JvdXAoZ3JvdXA6IHN0cmluZyk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKTsgaSsrKSB7XG4gICAgICBjb25zdCBtb3Rpb25GaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GaWxlTmFtZShncm91cCwgaSk7XG5cbiAgICAgIC8vIGV4KSBpZGxlXzBcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtncm91cH1fJHtpfWA7XG4gICAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICAgIGBbQVBQXWxvYWQgbW90aW9uOiAke21vdGlvbkZpbGVOYW1lfSA9PiBbJHtuYW1lfV1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vdGlvbkZpbGVOYW1lfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICBjb25zdCB0bXBNb3Rpb246IEN1YmlzbU1vdGlvbiA9IHRoaXMubG9hZE1vdGlvbihcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbGV0IGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVJblRpbWVWYWx1ZShncm91cCwgaSk7XG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgdG1wTW90aW9uLnNldEZhZGVJblRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXAsIGkpO1xuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIHRtcE1vdGlvbi5zZXRGYWRlT3V0VGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcE1vdGlvbi5zZXRFZmZlY3RJZHModGhpcy5fZXllQmxpbmtJZHMsIHRoaXMuX2xpcFN5bmNJZHMpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX21vdGlvbnMuZ2V0VmFsdWUobmFtZSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUodGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbW90aW9ucy5zZXRWYWx1ZShuYW1lLCB0bXBNb3Rpb24pO1xuXG4gICAgICAgICAgdGhpcy5fbW90aW9uQ291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5fbW90aW9uQ291bnQgPj0gdGhpcy5fYWxsTW90aW9uQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFRleHR1cmU7XG5cbiAgICAgICAgICAgIC8vIOWFqOOBpuOBruODouODvOOCt+ODp+ODs+OCkuWBnOatouOBmeOCi1xuICAgICAgICAgICAgdGhpcy5fbW90aW9uTWFuYWdlci5zdG9wQWxsTW90aW9ucygpO1xuXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zdGFydFVwKGdsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgZnjgbnjgabjga7jg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlTW90aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9tb3Rpb25zLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo44Gm44Gu6KGo5oOF44OH44O844K/44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZUV4cHJlc3Npb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX2V4cHJlc3Npb25zLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44KS5o+P55S744GZ44KL5Yem55CG44CC44Oi44OH44Or44KS5o+P55S744GZ44KL56m66ZaT44GuVmlldy1Qcm9qZWN0aW9u6KGM5YiX44KS5rih44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZG9EcmF3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tb2RlbCA9PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyDjgq3jg6Pjg7Pjg5DjgrnjgrXjgqTjgrrjgpLmuKHjgZlcbiAgICBjb25zdCB2aWV3cG9ydDogbnVtYmVyW10gPSBbMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XTtcblxuICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zZXRSZW5kZXJTdGF0ZShmcmFtZUJ1ZmZlciwgdmlld3BvcnQpO1xuICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5kcmF3TW9kZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovlh6bnkIbjgILjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovnqbrplpPjga5WaWV3LVByb2plY3Rpb27ooYzliJfjgpLmuKHjgZnjgIJcbiAgICovXG4gIHB1YmxpYyBkcmF3KG1hdHJpeDogQ3ViaXNtTWF0cml4NDQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWQhOiqreOBv+i+vOOBv+e1guS6huW+jFxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBMb2FkU3RlcC5Db21wbGV0ZVNldHVwKSB7XG4gICAgICBtYXRyaXgubXVsdGlwbHlCeU1hdHJpeCh0aGlzLl9tb2RlbE1hdHJpeCk7XG5cbiAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zZXRNdnBNYXRyaXgobWF0cml4KTtcblxuICAgICAgdGhpcy5kb0RyYXcoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFzTW9jQ29uc2lzdGVuY3lGcm9tRmlsZSgpIHtcbiAgICBDU01fQVNTRVJUKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCkubG9jYWxlQ29tcGFyZShgYCkpO1xuXG4gICAgLy8gQ3ViaXNtTW9kZWxcbiAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgY29uc3QgbW9kZWxGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW9kZWxGaWxlTmFtZX1gKTtcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICAgICAgdGhpcy5fY29uc2lzdGVuY3kgPSBDdWJpc21Nb2MuaGFzTW9jQ29uc2lzdGVuY3koYXJyYXlCdWZmZXIpO1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbnNpc3RlbmN5KSB7XG4gICAgICAgIEN1YmlzbUxvZ0luZm8oJ0luY29uc2lzdGVudCBNT0MzLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ3ViaXNtTG9nSW5mbygnQ29uc2lzdGVudCBNT0MzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fY29uc2lzdGVuY3k7XG4gICAgfSBlbHNlIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdNb2RlbCBkYXRhIGRvZXMgbm90IGV4aXN0LicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fbW9kZWxTZXR0aW5nID0gbnVsbDtcbiAgICB0aGlzLl9tb2RlbEhvbWVEaXIgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcblxuICAgIHRoaXMuX2V5ZUJsaW5rSWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcbiAgICB0aGlzLl9saXBTeW5jSWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcblxuICAgIHRoaXMuX21vdGlvbnMgPSBuZXcgY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj4oKTtcbiAgICB0aGlzLl9leHByZXNzaW9ucyA9IG5ldyBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPigpO1xuXG4gICAgdGhpcy5faGl0QXJlYSA9IG5ldyBjc21WZWN0b3I8Y3NtUmVjdD4oKTtcbiAgICB0aGlzLl91c2VyQXJlYSA9IG5ldyBjc21WZWN0b3I8Y3NtUmVjdD4oKTtcblxuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVhcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVlcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1BbmdsZVogPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1BbmdsZVpcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1FeWVCYWxsWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUV5ZUJhbGxYXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllQmFsbFkgPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVCYWxsWVxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUJvZHlBbmdsZVggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1Cb2R5QW5nbGVYXG4gICAgKTtcblxuICAgIGlmIChMQXBwRGVmaW5lLk1PQ0NvbnNpc3RlbmN5VmFsaWRhdGlvbkVuYWJsZSkge1xuICAgICAgdGhpcy5fbW9jQ29uc2lzdGVuY3kgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZEFzc2V0cztcbiAgICB0aGlzLl9leHByZXNzaW9uQ291bnQgPSAwO1xuICAgIHRoaXMuX3RleHR1cmVDb3VudCA9IDA7XG4gICAgdGhpcy5fbW90aW9uQ291bnQgPSAwO1xuICAgIHRoaXMuX2FsbE1vdGlvbkNvdW50ID0gMDtcbiAgICB0aGlzLl93YXZGaWxlSGFuZGxlciA9IG5ldyBMQXBwV2F2RmlsZUhhbmRsZXIoKTtcbiAgICB0aGlzLl9jb25zaXN0ZW5jeSA9IGZhbHNlO1xuICB9XG5cbiAgX21vZGVsU2V0dGluZzogSUN1YmlzbU1vZGVsU2V0dGluZzsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw5oOF5aCxXG4gIF9tb2RlbEhvbWVEaXI6IHN0cmluZzsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44OqXG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjsgLy8g44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cblxuICBfZXllQmxpbmtJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT47IC8vIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+eerOOBjeapn+iDveeUqOODkeODqeODoeODvOOCv0lEXG4gIF9saXBTeW5jSWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+OyAvLyDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/jg6rjg4Pjg5fjgrfjg7Pjgq/mqZ/og73nlKjjg5Hjg6njg6Hjg7zjgr9JRFxuXG4gIF9tb3Rpb25zOiBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPjsgLy8g6Kqt44G/6L6844G+44KM44Gm44GE44KL44Oi44O844K344On44Oz44Gu44Oq44K544OIXG4gIF9leHByZXNzaW9uczogY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj47IC8vIOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ihqOaDheOBruODquOCueODiFxuXG4gIF9oaXRBcmVhOiBjc21WZWN0b3I8Y3NtUmVjdD47XG4gIF91c2VyQXJlYTogY3NtVmVjdG9yPGNzbVJlY3Q+O1xuXG4gIF9pZFBhcmFtQW5nbGVYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVYXG4gIF9pZFBhcmFtQW5nbGVZOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVZXG4gIF9pZFBhcmFtQW5nbGVaOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVaXG4gIF9pZFBhcmFtRXllQmFsbFg6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1FeWVCYWxsWFxuICBfaWRQYXJhbUV5ZUJhbGxZOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtRXllQkFsbFlcbiAgX2lkUGFyYW1Cb2R5QW5nbGVYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQm9keUFuZ2xlWFxuXG4gIF9zdGF0ZTogbnVtYmVyOyAvLyDnj77lnKjjga7jgrnjg4bjg7zjgr/jgrnnrqHnkIbnlKhcbiAgX2V4cHJlc3Npb25Db3VudDogbnVtYmVyOyAvLyDooajmg4Xjg4fjg7zjgr/jgqvjgqbjg7Pjg4hcbiAgX3RleHR1cmVDb3VudDogbnVtYmVyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqvjgqbjg7Pjg4hcbiAgX21vdGlvbkNvdW50OiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCq+OCpuODs+ODiFxuICBfYWxsTW90aW9uQ291bnQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz57eP5pWwXG4gIF93YXZGaWxlSGFuZGxlcjogTEFwcFdhdkZpbGVIYW5kbGVyOyAvL3dhduODleOCoeOCpOODq+ODj+ODs+ODieODqVxuICBfY29uc2lzdGVuY3k6IGJvb2xlYW47IC8vIE1PQzPkuIDosqvmgKfjg4Hjgqfjg4Pjgq/nrqHnkIbnlKhcbn1cblxuLy8gVE9ETyA6IHNheSBzb21ldGhpbmdcbmV4cG9ydCBmdW5jdGlvbiBydW5UZXN0KG1zZzogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2hhdF9ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1ib3gnKTtcbiAgICBjaGF0X2JveC5pbm5lckhUTUwgPSBgQ3VycmVudCBNb3Rpb24gPT4gJHttc2d9YDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBvbiByZW5kZXIgPyAuLi4nLCBlcnJvcik7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwOTI1OTIyYzJjYjJhOWFhYjk0YVwiOyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9