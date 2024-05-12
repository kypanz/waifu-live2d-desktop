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
        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();
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
            if (!this._temp_expression)
                this._temp_expression = true;
            console.log('temp epxression actual vale => ', this._temp_expression);
            if (this._temp_expression) {
                console.log('pasa por verdadero');
                this.setExpression(ky_expression[0].first);
                this._temp_expression = false;
            }
            else {
                console.log('pasa por falso');
                this.setExpression(ky_expression[1].first);
                this._temp_expression = true;
            }
            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
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
/******/ 	__webpack_require__.h = function() { return "df8523207a54f3a6b11f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NmNhNjUyMDYzZjBhYmE0ZTRkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsZ0ZBQXNCO0FBR3RCLHNKQUErRTtBQUMvRSxnSkFBMkU7QUFDM0UsZ0lBR3dDO0FBQ3hDLHNJQUFrRTtBQUdsRSw2SUFBbUU7QUFFbkUsdUlBQW1FO0FBQ25FLG1JQUd5QztBQUV6QyxvS0FHb0Q7QUFDcEQsMEdBQWdEO0FBR2hELG1IQUFzRDtBQUN0RCwySEFJc0M7QUFFdEMsOEZBQTJDO0FBQzNDLHdGQUE0RTtBQUM1RSx5RUFBb0M7QUFFcEMsMEdBQTBEO0FBQzFELHFIQUF1RDtBQUV2RCxJQUFLLFFBd0JKO0FBeEJELFdBQUssUUFBUTtJQUNYLG1EQUFVO0lBQ1YsaURBQVM7SUFDVCx5REFBYTtJQUNiLDJEQUFjO0lBQ2QsbUVBQWtCO0lBQ2xCLHFEQUFXO0lBQ1gsNkRBQWU7SUFDZiwrQ0FBUTtJQUNSLHVEQUFZO0lBQ1oseURBQWE7SUFDYixzREFBVztJQUNYLHdEQUFZO0lBQ1osZ0VBQWdCO0lBQ2hCLGdFQUFnQjtJQUNoQiw4REFBZTtJQUNmLHNEQUFXO0lBQ1gsb0RBQVU7SUFDViw0REFBYztJQUNkLG9FQUFrQjtJQUNsQixvRUFBa0I7SUFDbEIsc0RBQVc7SUFDWCw4REFBZTtJQUNmLDBEQUFhO0FBQ2YsQ0FBQyxFQXhCSSxRQUFRLEtBQVIsUUFBUSxRQXdCWjtBQU1EO0lBQStCLDZCQUFlO0lBcXpCNUM7UUFBQSxZQUNFLGlCQUFPLFNBNkNSO1FBM0NDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFFNUIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJ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d2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkIH0gZnJvbSAnQGZyYW1ld29yay9jdWJpc21kZWZhdWx0cGFyYW1ldGVyaWQnO1xuaW1wb3J0IHsgQ3ViaXNtTW9kZWxTZXR0aW5nSnNvbiB9IGZyb20gJ0BmcmFtZXdvcmsvY3ViaXNtbW9kZWxzZXR0aW5nanNvbic7XG5pbXBvcnQge1xuICBCcmVhdGhQYXJhbWV0ZXJEYXRhLFxuICBDdWJpc21CcmVhdGhcbn0gZnJvbSAnQGZyYW1ld29yay9lZmZlY3QvY3ViaXNtYnJlYXRoJztcbmltcG9ydCB7IEN1YmlzbUV5ZUJsaW5rIH0gZnJvbSAnQGZyYW1ld29yay9lZmZlY3QvY3ViaXNtZXllYmxpbmsnO1xuaW1wb3J0IHsgSUN1YmlzbU1vZGVsU2V0dGluZyB9IGZyb20gJ0BmcmFtZXdvcmsvaWN1YmlzbW1vZGVsc2V0dGluZyc7XG5pbXBvcnQgeyBDdWJpc21JZEhhbmRsZSB9IGZyb20gJ0BmcmFtZXdvcmsvaWQvY3ViaXNtaWQnO1xuaW1wb3J0IHsgQ3ViaXNtRnJhbWV3b3JrIH0gZnJvbSAnQGZyYW1ld29yay9saXZlMmRjdWJpc21mcmFtZXdvcmsnO1xuaW1wb3J0IHsgQ3ViaXNtTWF0cml4NDQgfSBmcm9tICdAZnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHsgQ3ViaXNtVXNlck1vZGVsIH0gZnJvbSAnQGZyYW1ld29yay9tb2RlbC9jdWJpc211c2VybW9kZWwnO1xuaW1wb3J0IHtcbiAgQUN1YmlzbU1vdGlvbixcbiAgRmluaXNoZWRNb3Rpb25DYWxsYmFja1xufSBmcm9tICdAZnJhbWV3b3JrL21vdGlvbi9hY3ViaXNtbW90aW9uJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvbiB9IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2N1YmlzbW1vdGlvbic7XG5pbXBvcnQge1xuICBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlLFxuICBJbnZhbGlkTW90aW9uUXVldWVFbnRyeUhhbmRsZVZhbHVlXG59IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2N1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlcic7XG5pbXBvcnQgeyBjc21NYXAgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtbWFwJztcbmltcG9ydCB7IGNzbVJlY3QgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtcmVjdGYnO1xuaW1wb3J0IHsgY3NtU3RyaW5nIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXN0cmluZyc7XG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7XG4gIENTTV9BU1NFUlQsXG4gIEN1YmlzbUxvZ0Vycm9yLFxuICBDdWJpc21Mb2dJbmZvXG59IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcnO1xuXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBjYW52YXMsIGN0eCwgZnJhbWVCdWZmZXIsIGdsLCBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnLi9sYXBwdGV4dHVyZW1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcFdhdkZpbGVIYW5kbGVyIH0gZnJvbSAnLi9sYXBwd2F2ZmlsZWhhbmRsZXInO1xuaW1wb3J0IHsgQ3ViaXNtTW9jIH0gZnJvbSAnQGZyYW1ld29yay9tb2RlbC9jdWJpc21tb2MnO1xuXG5lbnVtIExvYWRTdGVwIHtcbiAgTG9hZEFzc2V0cyxcbiAgTG9hZE1vZGVsLFxuICBXYWl0TG9hZE1vZGVsLFxuICBMb2FkRXhwcmVzc2lvbixcbiAgV2FpdExvYWRFeHByZXNzaW9uLFxuICBMb2FkUGh5c2ljcyxcbiAgV2FpdExvYWRQaHlzaWNzLFxuICBMb2FkUG9zZSxcbiAgV2FpdExvYWRQb3NlLFxuICBTZXR1cEV5ZUJsaW5rLFxuICBTZXR1cEJyZWF0aCxcbiAgTG9hZFVzZXJEYXRhLFxuICBXYWl0TG9hZFVzZXJEYXRhLFxuICBTZXR1cEV5ZUJsaW5rSWRzLFxuICBTZXR1cExpcFN5bmNJZHMsXG4gIFNldHVwTGF5b3V0LFxuICBMb2FkTW90aW9uLFxuICBXYWl0TG9hZE1vdGlvbixcbiAgQ29tcGxldGVJbml0aWFsaXplLFxuICBDb21wbGV0ZVNldHVwTW9kZWwsXG4gIExvYWRUZXh0dXJlLFxuICBXYWl0TG9hZFRleHR1cmUsXG4gIENvbXBsZXRlU2V0dXBcbn1cblxuLyoqXG4gKiDjg6bjg7zjgrbjg7zjgYzlrp/pmpvjgavkvb/nlKjjgZnjgovjg6Ljg4fjg6vjga7lrp/oo4Xjgq/jg6njgrk8YnI+XG4gKiDjg6Ljg4fjg6vnlJ/miJDjgIHmqZ/og73jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgIHmm7TmlrDlh6bnkIbjgajjg6zjg7Pjg4Djg6rjg7PjgrDjga7lkbzjgbPlh7rjgZfjgpLooYzjgYbjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBNb2RlbCBleHRlbmRzIEN1YmlzbVVzZXJNb2RlbCB7XG4gIFxuICAvLyBUT0RPIDogVGhpcyBjcmVhdGUgdGhlIGF1ZGlvIHByb3BlcnR5IHRvIGhhbmRsZSB0aGUgYXZhdGFyIHNwZWFrIFxuICBwcml2YXRlIF9hdWRpb1NyYzogYW55O1xuICBwcml2YXRlIF90ZW1wX2V4cHJlc3Npb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIG1vZGVsMy5qc29u44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44Oq44Go44OV44Kh44Kk44Or44OR44K544GL44KJ44Oi44OH44Or44KS55Sf5oiQ44GZ44KLXG4gICAqIEBwYXJhbSBkaXJcbiAgICogQHBhcmFtIGZpbGVOYW1lXG4gICAqL1xuICBwdWJsaWMgbG9hZEFzc2V0cyhkaXI6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGVsSG9tZURpciA9IGRpcjtcblxuICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke2ZpbGVOYW1lfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nID0gbmV3IEN1YmlzbU1vZGVsU2V0dGluZ0pzb24oXG4gICAgICAgICAgYXJyYXlCdWZmZXIsXG4gICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIOOCueODhuODvOODiOOCkuabtOaWsFxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb2RlbDtcblxuICAgICAgICAvLyDntZDmnpzjgpLkv53lrZhcbiAgICAgICAgdGhpcy5zZXR1cE1vZGVsKHNldHRpbmcpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgovjgIJcbiAgICogbW9kZWwzLmpzb27jga7oqJjov7DjgavlvpPjgaPjgabjg6Ljg4fjg6vnlJ/miJDjgIHjg6Ljg7zjgrfjg6fjg7PjgIHniannkIbmvJTnrpfjgarjganjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgpLooYzjgYbjgIJcbiAgICpcbiAgICogQHBhcmFtIHNldHRpbmcgSUN1YmlzbU1vZGVsU2V0dGluZ+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE1vZGVsKHNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAvLyBDdWJpc21Nb2RlbFxuICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICBjb25zdCBtb2RlbEZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKTtcblxuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW9kZWxGaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTW9kZWwoYXJyYXlCdWZmZXIsIHRoaXMuX21vY0NvbnNpc3RlbmN5KTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRFeHByZXNzaW9uO1xuXG4gICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICBsb2FkQ3ViaXNtRXhwcmVzc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG5cbiAgICAvLyBFeHByZXNzaW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbUV4cHJlc3Npb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpID4gMCkge1xuICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25OYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25OYW1lKGkpO1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25GaWxlTmFtZSA9XG4gICAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0RXhwcmVzc2lvbkZpbGVOYW1lKGkpO1xuXG4gICAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7ZXhwcmVzc2lvbkZpbGVOYW1lfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBtb3Rpb246IEFDdWJpc21Nb3Rpb24gPSB0aGlzLmxvYWRFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbk5hbWVcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5fZXhwcmVzc2lvbnMuZ2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBQ3ViaXNtTW90aW9uLmRlbGV0ZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25OYW1lKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMuc2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUsIG51bGwpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMuc2V0VmFsdWUoZXhwcmVzc2lvbk5hbWUsIG1vdGlvbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5fZXhwcmVzc2lvbkNvdW50Kys7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25Db3VudCA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBoeXNpY3M7XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGxvYWRDdWJpc21QaHlzaWNzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRFeHByZXNzaW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkUGh5c2ljcztcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBsb2FkQ3ViaXNtUGh5c2ljcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBQaHlzaWNzXG4gICAgY29uc3QgbG9hZEN1YmlzbVBoeXNpY3MgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFBoeXNpY3NGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICAgIGNvbnN0IHBoeXNpY3NGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRQaHlzaWNzRmlsZU5hbWUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHtwaHlzaWNzRmlsZU5hbWV9YClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBoeXNpY3MoYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICAgICAgbG9hZEN1YmlzbVBvc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFBoeXNpY3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQb3NlO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGxvYWRDdWJpc21Qb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBvc2VcbiAgICBjb25zdCBsb2FkQ3ViaXNtUG9zZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UG9zZUZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgICAgY29uc3QgcG9zZUZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFBvc2VGaWxlTmFtZSgpO1xuXG4gICAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke3Bvc2VGaWxlTmFtZX1gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkUG9zZShhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGluaztcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIHNldHVwRXllQmxpbmsoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFBvc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbms7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgc2V0dXBFeWVCbGluaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeWVCbGlua1xuICAgIGNvbnN0IHNldHVwRXllQmxpbmsgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVyQ291bnQoKSA+IDApIHtcbiAgICAgICAgdGhpcy5fZXllQmxpbmsgPSBDdWJpc21FeWVCbGluay5jcmVhdGUodGhpcy5fbW9kZWxTZXR0aW5nKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEJyZWF0aDtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIHNldHVwQnJlYXRoKCk7XG4gICAgfTtcblxuICAgIC8vIEJyZWF0aFxuICAgIGNvbnN0IHNldHVwQnJlYXRoID0gKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5fYnJlYXRoID0gQ3ViaXNtQnJlYXRoLmNyZWF0ZSgpO1xuXG4gICAgICBjb25zdCBicmVhdGhQYXJhbWV0ZXJzOiBjc21WZWN0b3I8QnJlYXRoUGFyYW1ldGVyRGF0YT4gPSBuZXcgY3NtVmVjdG9yKCk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQW5nbGVYLCAwLjAsIDE1LjAsIDYuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1BbmdsZVksIDAuMCwgOC4wLCAzLjUzNDUsIDAuNSlcbiAgICAgICk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQW5nbGVaLCAwLjAsIDEwLjAsIDUuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVYLCAwLjAsIDQuMCwgMTUuNTM0NSwgMC41KVxuICAgICAgKTtcbiAgICAgIGJyZWF0aFBhcmFtZXRlcnMucHVzaEJhY2soXG4gICAgICAgIG5ldyBCcmVhdGhQYXJhbWV0ZXJEYXRhKFxuICAgICAgICAgIEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgICAgIEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZC5QYXJhbUJyZWF0aFxuICAgICAgICAgICksXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAzLjIzNDUsXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9icmVhdGguc2V0UGFyYW1ldGVycyhicmVhdGhQYXJhbWV0ZXJzKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFVzZXJEYXRhO1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgbG9hZFVzZXJEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vIFVzZXJEYXRhXG4gICAgY29uc3QgbG9hZFVzZXJEYXRhID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRVc2VyRGF0YUZpbGUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCB1c2VyRGF0YUZpbGUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VXNlckRhdGFGaWxlKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7dXNlckRhdGFGaWxlfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VyRGF0YShhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGlua0lkcztcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIHNldHVwRXllQmxpbmtJZHMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkVXNlckRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbmtJZHM7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgc2V0dXBFeWVCbGlua0lkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeWVCbGlua0lkc1xuICAgIGNvbnN0IHNldHVwRXllQmxpbmtJZHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBleWVCbGlua0lkQ291bnQ6IG51bWJlciA9XG4gICAgICAgIHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXllQmxpbmtJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fZXllQmxpbmtJZHMucHVzaEJhY2soXG4gICAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVySWQoaSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cExpcFN5bmNJZHM7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExpcFN5bmNJZHMoKTtcbiAgICB9O1xuXG4gICAgLy8gTGlwU3luY0lkc1xuICAgIGNvbnN0IHNldHVwTGlwU3luY0lkcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxpcFN5bmNJZENvdW50ID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcFN5bmNJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fbGlwU3luY0lkcy5wdXNoQmFjayh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGlwU3luY1BhcmFtZXRlcklkKGkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBMYXlvdXQ7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExheW91dCgpO1xuICAgIH07XG5cbiAgICAvLyBMYXlvdXRcbiAgICBjb25zdCBzZXR1cExheW91dCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxheW91dDogY3NtTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBjc21NYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbE1hdHJpeCA9PSBudWxsKSB7XG4gICAgICAgIEN1YmlzbUxvZ0Vycm9yKCdGYWlsZWQgdG8gc2V0dXBMYXlvdXQoKS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGF5b3V0TWFwKGxheW91dCk7XG4gICAgICB0aGlzLl9tb2RlbE1hdHJpeC5zZXR1cEZyb21MYXlvdXQobGF5b3V0KTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZE1vdGlvbjtcblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIGxvYWRDdWJpc21Nb3Rpb24oKTtcbiAgICB9O1xuXG4gICAgLy8gTW90aW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbU1vdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRNb3Rpb247XG4gICAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpO1xuICAgICAgdGhpcy5fYWxsTW90aW9uQ291bnQgPSAwO1xuICAgICAgdGhpcy5fbW90aW9uQ291bnQgPSAwO1xuICAgICAgY29uc3QgZ3JvdXA6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGNvbnN0IG1vdGlvbkdyb3VwQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Hcm91cENvdW50KCk7XG5cbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBrue3j+aVsOOCkuaxguOCgeOCi1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Rpb25Hcm91cENvdW50OyBpKyspIHtcbiAgICAgICAgZ3JvdXBbaV0gPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uR3JvdXBOYW1lKGkpO1xuICAgICAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCArPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7oqq3jgb/ovrzjgb9cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW90aW9uR3JvdXBDb3VudDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJlTG9hZE1vdGlvbkdyb3VwKGdyb3VwW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8g44Oi44O844K344On44Oz44GM44Gq44GE5aC05ZCIXG4gICAgICBpZiAobW90aW9uR3JvdXBDb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFRleHR1cmU7XG5cbiAgICAgICAgLy8g5YWo44Gm44Gu44Oi44O844K344On44Oz44KS5YGc5q2i44GZ44KLXG4gICAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc3RvcEFsbE1vdGlvbnMoKTtcblxuICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnN0YXJ0VXAoZ2wpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44OG44Kv44K544OB44Oj44Om44OL44OD44OI44Gr44OG44Kv44K544OB44Oj44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBwcml2YXRlIHNldHVwVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgLy8gaVBob25l44Gn44Gu44Ki44Or44OV44Kh5ZOB6LOq5ZCR5LiK44Gu44Gf44KBVHlwZXNjcmlwdOOBp+OBr3ByZW11bHRpcGxpZWRBbHBoYeOCkuaOoeeUqFxuICAgIGNvbnN0IHVzZVByZW11bHRpcGx5ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBMb2FkU3RlcC5Mb2FkVGV4dHVyZSkge1xuICAgICAgLy8g44OG44Kv44K544OB44Oj6Kqt44G/6L6844G/55SoXG4gICAgICBjb25zdCB0ZXh0dXJlQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlQ291bnQoKTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IG1vZGVsVGV4dHVyZU51bWJlciA9IDA7XG4gICAgICAgIG1vZGVsVGV4dHVyZU51bWJlciA8IHRleHR1cmVDb3VudDtcbiAgICAgICAgbW9kZWxUZXh0dXJlTnVtYmVyKytcbiAgICAgICkge1xuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PlkI3jgYznqbrmloflrZfjgaDjgaPjgZ/loLTlkIjjga/jg63jg7zjg4njg7vjg5DjgqTjg7Pjg4nlh6bnkIbjgpLjgrnjgq3jg4Pjg5dcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlRmlsZU5hbWUobW9kZWxUZXh0dXJlTnVtYmVyKSA9PSAnJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRUZXh0dXJlRmlsZU5hbWUgbnVsbCcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViR0zjga7jg4bjgq/jgrnjg4Hjg6Pjg6bjg4vjg4Pjg4jjgavjg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4njgZnjgotcbiAgICAgICAgbGV0IHRleHR1cmVQYXRoID1cbiAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VGV4dHVyZUZpbGVOYW1lKG1vZGVsVGV4dHVyZU51bWJlcik7XG4gICAgICAgIHRleHR1cmVQYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgdGV4dHVyZVBhdGg7XG5cbiAgICAgICAgLy8g44Ot44O844OJ5a6M5LqG5pmC44Gr5ZG844Gz5Ye644GZ44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAgICAgIGNvbnN0IG9uTG9hZCA9ICh0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuYmluZFRleHR1cmUobW9kZWxUZXh0dXJlTnVtYmVyLCB0ZXh0dXJlSW5mby5pZCk7XG5cbiAgICAgICAgICB0aGlzLl90ZXh0dXJlQ291bnQrKztcblxuICAgICAgICAgIGlmICh0aGlzLl90ZXh0dXJlQ291bnQgPj0gdGV4dHVyZUNvdW50KSB7XG4gICAgICAgICAgICAvLyDjg63jg7zjg4nlrozkuoZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g6Kqt44G/6L6844G/XG4gICAgICAgIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpXG4gICAgICAgICAgLmdldFRleHR1cmVNYW5hZ2VyKClcbiAgICAgICAgICAuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKHRleHR1cmVQYXRoLCB1c2VQcmVtdWx0aXBseSwgb25Mb2FkKTtcbiAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnNldElzUHJlbXVsdGlwbGllZEFscGhhKHVzZVByZW11bHRpcGx5KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZFRleHR1cmU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeOCkuWGjeani+evieOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbG9hZFJlbmRlcmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gIH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPSBMb2FkU3RlcC5Db21wbGV0ZVNldHVwKSByZXR1cm47XG5cbiAgICBjb25zdCBkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIgPSBMQXBwUGFsLmdldERlbHRhVGltZSgpO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyArPSBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgdGhpcy5fZHJhZ01hbmFnZXIudXBkYXRlKGRlbHRhVGltZVNlY29uZHMpO1xuICAgIHRoaXMuX2RyYWdYID0gdGhpcy5fZHJhZ01hbmFnZXIuZ2V0WCgpO1xuICAgIHRoaXMuX2RyYWdZID0gdGhpcy5fZHJhZ01hbmFnZXIuZ2V0WSgpO1xuXG4gICAgLy8g44Oi44O844K344On44Oz44Gr44KI44KL44OR44Op44Oh44O844K/5pu05paw44Gu5pyJ54ShXG4gICAgbGV0IG1vdGlvblVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9tb2RlbC5sb2FkUGFyYW1ldGVycygpOyAvLyDliY3lm57jgrvjg7zjg5bjgZXjgozjgZ/nirbmhYvjgpLjg63jg7zjg4lcbiAgICBpZiAodGhpcy5fbW90aW9uTWFuYWdlci5pc0ZpbmlzaGVkKCkpIHtcbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBruWGjeeUn+OBjOOBquOBhOWgtOWQiOOAgeW+heapn+ODouODvOOCt+ODp+ODs+OBruS4reOBi+OCieODqeODs+ODgOODoOOBp+WGjeeUn+OBmeOCi1xuICAgICAgLy8gVE9ETyA6IE1vdGlvblxuICAgICAgY29uc3QgaGFyZF9jb2RlZCA9IExBcHBEZWZpbmUuTW90aW9uR3JvdXBUYXBCb2R5XG4gICAgICB0aGlzLnN0YXJ0UmFuZG9tTW90aW9uKFxuICAgICAgICAvL0xBcHBEZWZpbmUuTW90aW9uR3JvdXBJZGxlLFxuICAgICAgICBoYXJkX2NvZGVkLFxuICAgICAgICBMQXBwRGVmaW5lLlByaW9yaXR5SWRsZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3Bhc2EgcG9yIGFudGVzIGRlbCB1cGRhdGVNb3Rpb24nKTtcbiAgICAgIC8vIG1vdGlvblVwZGF0ZWQgPSB0aGlzLl9tb3Rpb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbihcbiAgICAgIC8vICAgdGhpcy5fbW9kZWwsXG4gICAgICAvLyAgIGRlbHRhVGltZVNlY29uZHNcbiAgICAgIC8vICk7IC8vIOODouODvOOCt+ODp+ODs+OCkuabtOaWsFxuICAgIH1cbiAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpOyAvLyDnirbmhYvjgpLkv53lrZhcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyDjgb7jgbDjgZ/jgY1cbiAgICBpZiAoIW1vdGlvblVwZGF0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9leWVCbGluayAhPSBudWxsKSB7XG4gICAgICAgIC8vIOODoeOCpOODs+ODouODvOOCt+ODp+ODs+OBruabtOaWsOOBjOOBquOBhOOBqOOBjVxuICAgICAgICB0aGlzLl9leWVCbGluay51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g55uu44OR44OBXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXNhIHBvciBlbCBfZXhwcmVzc2lvbk1hbmFnZXInLCB0aGlzLl9leHByZXNzaW9uTWFuYWdlcik7XG4gICAgICBjb25zdCBreV9leHByZXNzaW9uID0gdGhpcy5fZXhwcmVzc2lvbnMuX2tleVZhbHVlcztcbiAgICAgIGNvbnNvbGUubG9nKCdleHByZXNzaW9uZXMgPT4gJywga3lfZXhwcmVzc2lvbik7XG4gICAgICBpZighdGhpcy5fdGVtcF9leHByZXNzaW9uKSB0aGlzLl90ZW1wX2V4cHJlc3Npb24gPSB0cnVlO1xuICBjb25zb2xlLmxvZygndGVtcCBlcHhyZXNzaW9uIGFjdHVhbCB2YWxlID0+ICcsIHRoaXMuX3RlbXBfZXhwcmVzc2lvbik7XG4gICAgICBpZiAodGhpcy5fdGVtcF9leHByZXNzaW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNhIHBvciB2ZXJkYWRlcm8nKVxuICAgICAgICB0aGlzLnNldEV4cHJlc3Npb24oa3lfZXhwcmVzc2lvblswXS5maXJzdCk7XG4gICAgICAgIHRoaXMuX3RlbXBfZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bhc2EgcG9yIGZhbHNvJyk7XG4gICAgICAgIHRoaXMuc2V0RXhwcmVzc2lvbihreV9leHByZXNzaW9uWzFdLmZpcnN0KTtcbiAgICAgICAgdGhpcy5fdGVtcF9leHByZXNzaW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbih0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7IC8vIOihqOaDheOBp+ODkeODqeODoeODvOOCv+abtOaWsO+8iOebuOWvvuWkieWMlu+8iVxuICAgIH1cblxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+WkieWMllxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+mhlOOBruWQkeOBjeOBruiqv+aVtFxuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVYLCB0aGlzLl9kcmFnWCAqIDMwKTsgLy8gLTMw44GL44KJMzDjga7lgKTjgpLliqDjgYjjgotcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUFuZ2xlWSwgdGhpcy5fZHJhZ1kgKiAzMCk7XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKFxuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWixcbiAgICAgIHRoaXMuX2RyYWdYICogdGhpcy5fZHJhZ1kgKiAtMzBcbiAgICApO1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL5L2T44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKFxuICAgICAgdGhpcy5faWRQYXJhbUJvZHlBbmdsZVgsXG4gICAgICB0aGlzLl9kcmFnWCAqIDEwXG4gICAgKTsgLy8gLTEw44GL44KJMTDjga7lgKTjgpLliqDjgYjjgotcblxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+ebruOBruWQkeOBjeOBruiqv+aVtFxuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtRXllQmFsbFgsIHRoaXMuX2RyYWdYKTsgLy8gLTHjgYvjgokx44Gu5YCk44KS5Yqg44GI44KLXG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVCYWxsWSwgdGhpcy5fZHJhZ1kpO1xuXG4gICAgLy8g5ZG85ZC444Gq44GpXG4gICAgaWYgKHRoaXMuX2JyZWF0aCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9icmVhdGgudXBkYXRlUGFyYW1ldGVycyh0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLy8g54mp55CG5ryU566X44Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX3BoeXNpY3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fcGh5c2ljcy5ldmFsdWF0ZSh0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLy8g44Oq44OD44OX44K344Oz44Kv44Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX2xpcHN5bmMpIHtcbiAgICAgIGxldCB2YWx1ZSA9IDAuMDsgLy8g44Oq44Ki44Or44K/44Kk44Og44Gn44Oq44OD44OX44K344Oz44Kv44KS6KGM44GG5aC05ZCI44CB44K344K544OG44Og44GL44KJ6Z+z6YeP44KS5Y+W5b6X44GX44Gm44CBMH4x44Gu56+E5Zuy44Gn5YCk44KS5YWl5Yqb44GX44G+44GZ44CCXG4gICAgICBjb25zb2xlLmxvZygnTElQUFAgU1lOQyA/Pz8nKTtcbiAgICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyLnVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICAgIHZhbHVlID0gdGhpcy5fd2F2RmlsZUhhbmRsZXIuZ2V0Um1zKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlwU3luY0lkcy5nZXRTaXplKCk7ICsraSkge1xuICAgICAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5fbGlwU3luY0lkcy5hdChpKSwgdmFsdWUsIDAuOCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g44Od44O844K644Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX3Bvc2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9zZS51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbC51cGRhdGUoKTtcblxuICAgIC8vIFRPRE8gOiBBZGQgaGVyZSB0aGUgYXVkaW8gbG9naWNcbiAgICAvLyBjb25zdCBhdWRpbzogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlJyk7XG4gICAgLy8gaWYgKGF1ZGlvLnNyYyAhPT0gdGhpcy5fYXVkaW9TcmMpIHtcbiAgICAvLyAgIHRoaXMuX2F1ZGlvU3JjID0gYXVkaW8uc3JjO1xuICAgIC8vICAgYXVkaW8ucGxheSgpO1xuICAgIC8vIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+ODouODvOOCt+ODp+ODs+OBruWGjeeUn+OCkumWi+Wni+OBmeOCi1xuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44Kw44Or44O844OX5ZCNXG4gICAqIEBwYXJhbSBubyDjgrDjg6vjg7zjg5flhoXjga7nlarlj7dcbiAgICogQHBhcmFtIHByaW9yaXR5IOWEquWFiOW6plxuICAgKiBAcGFyYW0gb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIg44Oi44O844K344On44Oz5YaN55Sf57WC5LqG5pmC44Gr5ZG844Gz5Ye644GV44KM44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAqIEByZXR1cm4g6ZaL5aeL44GX44Gf44Oi44O844K344On44Oz44Gu6K2Y5Yil55Wq5Y+344KS6L+U44GZ44CC5YCL5Yil44Gu44Oi44O844K344On44Oz44GM57WC5LqG44GX44Gf44GL5ZCm44GL44KS5Yik5a6a44GZ44KLaXNGaW5pc2hlZCgp44Gu5byV5pWw44Gn5L2/55So44GZ44KL44CC6ZaL5aeL44Gn44GN44Gq44GE5pmC44GvWy0xXVxuICAgKi9cbiAgcHVibGljIHN0YXJ0TW90aW9uKFxuICAgIGdyb3VwOiBzdHJpbmcsXG4gICAgbm86IG51bWJlcixcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyPzogRmluaXNoZWRNb3Rpb25DYWxsYmFja1xuICApOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlIHtcbiAgICBpZiAocHJpb3JpdHkgPT0gTEFwcERlZmluZS5Qcmlvcml0eUZvcmNlKSB7XG4gICAgICB0aGlzLl9tb3Rpb25NYW5hZ2VyLnNldFJlc2VydmVQcmlvcml0eShwcmlvcml0eSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fbW90aW9uTWFuYWdlci5yZXNlcnZlTW90aW9uKHByaW9yaXR5KSkge1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcIltBUFBdY2FuJ3Qgc3RhcnQgbW90aW9uLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBJbnZhbGlkTW90aW9uUXVldWVFbnRyeUhhbmRsZVZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdGlvbkZpbGVOYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZpbGVOYW1lKGdyb3VwLCBubyk7XG5cbiAgICAvLyBleCkgaWRsZV8wXG4gICAgY29uc3QgbmFtZSA9IGAke2dyb3VwfV8ke25vfWA7XG4gICAgbGV0IG1vdGlvbjogQ3ViaXNtTW90aW9uID0gdGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSBhcyBDdWJpc21Nb3Rpb247XG4gICAgbGV0IGF1dG9EZWxldGUgPSBmYWxzZTtcblxuICAgIGlmIChtb3Rpb24gPT0gbnVsbCkge1xuICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7bW90aW9uRmlsZU5hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgIG1vdGlvbiA9IHRoaXMubG9hZE1vdGlvbihcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlclxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IGZhZGVUaW1lOiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKFxuICAgICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgICBub1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICBtb3Rpb24uc2V0RmFkZUluVGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmFkZVRpbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmFkZU91dFRpbWVWYWx1ZShncm91cCwgbm8pO1xuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIG1vdGlvbi5zZXRGYWRlT3V0VGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbW90aW9uLnNldEVmZmVjdElkcyh0aGlzLl9leWVCbGlua0lkcywgdGhpcy5fbGlwU3luY0lkcyk7XG4gICAgICAgICAgYXV0b0RlbGV0ZSA9IHRydWU7IC8vIOe1guS6huaZguOBq+ODoeODouODquOBi+OCieWJiumZpFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW90aW9uLnNldEZpbmlzaGVkTW90aW9uSGFuZGxlcihvbkZpbmlzaGVkTW90aW9uSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gVE9ETyA6IHZvaWNlIGhhbmRsZXIgaGVyZVxuICAgIC8vdm9pY2VcbiAgICBjb25zdCB2b2ljZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwLCBubyk7XG4gICAgaWYgKHZvaWNlLmxvY2FsZUNvbXBhcmUoJycpICE9IDApIHtcbiAgICBjb25zdCB0ZXN0ID0gdHJ1ZTtcbiAgICAvLyBpZiAodGVzdCkge1xuICAgICAgY29uc29sZS5sb2coJ2dyb3VwID0+ICcsIGdyb3VwKTtcbiAgICAgIGNvbnNvbGUubG9nKCdudW1lcm8gPT4gJywgbm8pO1xuICAgICAgY29uc29sZS5sb2coJ1NlIGJ1c2NvIGVuID0+ICcsIHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwLCBubykpO1xuICAgICAgbGV0IHBhdGggPSB2b2ljZTtcbiAgICAgIHBhdGggPSB0aGlzLl9tb2RlbEhvbWVEaXIgKyBwYXRoO1xuICAgICAgY29uc29sZS5sb2coJ3BhdGggZ2VuZXJhZG8gPT4gJywgcGF0aCk7XG4gICAgICB0aGlzLl93YXZGaWxlSGFuZGxlci5zdGFydChwYXRoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1zdGFydCBtb3Rpb246IFske2dyb3VwfV8ke25vfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbW90aW9uTWFuYWdlci5zdGFydE1vdGlvblByaW9yaXR5KFxuICAgICAgbW90aW9uLFxuICAgICAgYXV0b0RlbGV0ZSxcbiAgICAgIHByaW9yaXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgavpgbjjgbDjgozjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLplovlp4vjgZnjgovjgIJcbiAgICogQHBhcmFtIGdyb3VwIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+WQjVxuICAgKiBAcGFyYW0gcHJpb3JpdHkg5YSq5YWI5bqmXG4gICAqIEBwYXJhbSBvbkZpbmlzaGVkTW90aW9uSGFuZGxlciDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/ntYLkuobmmYLjgavlkbzjgbPlh7rjgZXjgozjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICogQHJldHVybiDplovlp4vjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7orZjliKXnlarlj7fjgpLov5TjgZnjgILlgIvliKXjga7jg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/jgYvlkKbjgYvjgpLliKTlrprjgZnjgotpc0ZpbmlzaGVkKCnjga7lvJXmlbDjgafkvb/nlKjjgZnjgovjgILplovlp4vjgafjgY3jgarjgYTmmYLjga9bLTFdXG4gICAqL1xuICAvLyBUT0RPIDogaGVyZSBlbWl0IGFuIGV2ZW50IHdoZW4gcmFuZG9tIG1vdGlvbiBpcyBnZW5lcmF0ZWRcbiAgcHVibGljIHN0YXJ0UmFuZG9tTW90aW9uKFxuICAgIGdyb3VwOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcj86IEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbiAgKTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSB7XG4gICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cCkgPT0gMCkge1xuICAgICAgcmV0dXJuIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVE9ETyA6IGlmIHRoZSBtb3Rpb24gb3BlbiB0aGUgbW91dGggKCBjYWxsIHRvIE9wZW5BSSBhcGkgKVxuICAgIC8vIEFsc28gZGVmaW5lIGEgaW5maW5pdGUgbG9vcCBvZiB0aGUgc2FtZSBtb3Rpb24sIGlmIHRoZSBzcGVhayBzdG9wcywgcmV0YWtlIHRoZSBuZXh0cyByYW5kb20gbW90aW9uc1xuICAgIC8vIE51bWJlciBvZiB0aGUgbW90aW9uIHNlbGVjdGVkXG4gICAgY29uc3QgcmFuZG9tX21vdGlvbiA9IE1hdGguZmxvb3IoXG4gICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKVxuICAgICk7XG4gICAgLy8gY29uc3Qgbm86IG51bWJlciA9IHJhbmRvbV9tb3Rpb247XG5jb25zdCBubzogbnVtYmVyID0gMTtcbiAgICBydW5UZXN0KHRoaXMuX21vdGlvbnMuX2tleVZhbHVlc1tub10uZmlyc3QpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRNb3Rpb24oZ3JvdXAsIG5vLCBwcmlvcml0eSwgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+ihqOaDheODouODvOOCt+ODp+ODs+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgKlxuICAgKiBAcGFyYW0gZXhwcmVzc2lvbklkIOihqOaDheODouODvOOCt+ODp+ODs+OBrklEXG4gICAqL1xuICAvLyBUaGlzIGlzIGdvbm5hIGJlIHNlbGVjdGVkIG9uIGNsaWNrXG4gIHB1YmxpYyBzZXRFeHByZXNzaW9uKGV4cHJlc3Npb25JZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICBjb25zdCBtb3Rpb246IEFDdWJpc21Nb3Rpb24gPSB0aGlzLl9leHByZXNzaW9ucy5nZXRWYWx1ZShleHByZXNzaW9uSWQpO1xuXG4gICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoYFtBUFBdZXhwcmVzc2lvbjogWyR7ZXhwcmVzc2lvbklkfV1gKTtcbiAgICB9XG5cbiAgICBpZiAobW90aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyLnN0YXJ0TW90aW9uUHJpb3JpdHkoXG4gICAgICAgIG1vdGlvbixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIExBcHBEZWZpbmUuUHJpb3JpdHlGb3JjZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1leHByZXNzaW9uWyR7ZXhwcmVzc2lvbklkfV0gaXMgbnVsbGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgY29kZSBpcyBub3QgZ29ubmEgYmUuIG5lY2Vzc2FyeSBpIHRoaW5rXG4gIC8vIFRPRE8gOiBIYW5kbGUgaGVyZSB0aGUgRXhwcmVzc2lvbnMgb2YgdGhlIGNoYXJhY3RlclxuICBwdWJsaWMgc2V0UmFuZG9tRXhwcmVzc2lvbigpOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCkgPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCkpO1xuICAgIGNvbnNvbGUubG9nKCdleHByZXNzaW9uZXMgPT4gJywgdGhpcy5fZXhwcmVzc2lvbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZXhwcmVzc2lvbnMuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGlmIChpID09IG5vKSB7XG4gICAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IHRoaXMuX2V4cHJlc3Npb25zLl9rZXlWYWx1ZXNbaV0uZmlyc3Q7XG4gICAgICAgIHRoaXMuc2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqTjg5njg7Pjg4jjga7nmbrngavjgpLlj5fjgZHlj5bjgotcbiAgICovXG4gIHB1YmxpYyBtb3Rpb25FdmVudEZpcmVkKGV2ZW50VmFsdWU6IGNzbVN0cmluZyk6IHZvaWQge1xuICAgIEN1YmlzbUxvZ0luZm8oJ3swfSBpcyBmaXJlZCBvbiBMQXBwTW9kZWwhIScsIGV2ZW50VmFsdWUucyk7XG4gIH1cblxuICAvKipcbiAgICog5b2T44Gf44KK5Yik5a6a44OG44K544OIXG4gICAqIOaMh+Wumu+8qe+8pOOBrumggueCueODquOCueODiOOBi+OCieefqeW9ouOCkuioiOeul+OBl+OAgeW6p+aomeOCkuOBjOefqeW9ouevhOWbsuWGheOBi+WIpOWumuOBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gaGl0QXJlbmFOYW1lICDlvZPjgZ/jgorliKTlrprjgpLjg4bjgrnjg4jjgZnjgovlr77osaHjga5JRFxuICAgKiBAcGFyYW0geCAgICAgICAgICAgICDliKTlrprjgpLooYzjgYZY5bqn5qiZXG4gICAqIEBwYXJhbSB5ICAgICAgICAgICAgIOWIpOWumuOCkuihjOOBhlnluqfmqJlcbiAgICovXG4gIHB1YmxpYyBoaXRUZXN0KGhpdEFyZW5hTmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIOmAj+aYjuaZguOBr+W9k+OBn+OCiuWIpOWumueEoeOBl+OAglxuICAgIGlmICh0aGlzLl9vcGFjaXR5IDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYXNDb3VudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFOYW1lKGkpID09IGhpdEFyZW5hTmFtZSkge1xuICAgICAgICBjb25zdCBkcmF3SWQ6IEN1YmlzbUlkSGFuZGxlID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFJZChpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIaXQoZHJhd0lkLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44OH44O844K/44KS44Kw44Or44O844OX5ZCN44GL44KJ5LiA5ous44Gn44Ot44O844OJ44GZ44KL44CCXG4gICAqIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OBruWQjeWJjeOBr+WGhemDqOOBp01vZGVsU2V0dGluZ+OBi+OCieWPluW+l+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZ3JvdXAg44Oi44O844K344On44Oz44OH44O844K/44Gu44Kw44Or44O844OX5ZCNXG4gICAqL1xuICBwdWJsaWMgcHJlTG9hZE1vdGlvbkdyb3VwKGdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Db3VudChncm91cCk7IGkrKykge1xuICAgICAgY29uc3QgbW90aW9uRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uRmlsZU5hbWUoZ3JvdXAsIGkpO1xuXG4gICAgICAvLyBleCkgaWRsZV8wXG4gICAgICBjb25zdCBuYW1lID0gYCR7Z3JvdXB9XyR7aX1gO1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcbiAgICAgICAgICBgW0FQUF1sb2FkIG1vdGlvbjogJHttb3Rpb25GaWxlTmFtZX0gPT4gWyR7bmFtZX1dYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHttb3Rpb25GaWxlTmFtZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgY29uc3QgdG1wTW90aW9uOiBDdWJpc21Nb3Rpb24gPSB0aGlzLmxvYWRNb3Rpb24oXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGxldCBmYWRlVGltZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GYWRlSW5UaW1lVmFsdWUoZ3JvdXAsIGkpO1xuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIHRtcE1vdGlvbi5zZXRGYWRlSW5UaW1lKGZhZGVUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmYWRlVGltZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GYWRlT3V0VGltZVZhbHVlKGdyb3VwLCBpKTtcbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICB0bXBNb3Rpb24uc2V0RmFkZU91dFRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0bXBNb3Rpb24uc2V0RWZmZWN0SWRzKHRoaXMuX2V5ZUJsaW5rSWRzLCB0aGlzLl9saXBTeW5jSWRzKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9tb3Rpb25zLmdldFZhbHVlKG5hbWUpICE9IG51bGwpIHtcbiAgICAgICAgICAgIEFDdWJpc21Nb3Rpb24uZGVsZXRlKHRoaXMuX21vdGlvbnMuZ2V0VmFsdWUobmFtZSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21vdGlvbnMuc2V0VmFsdWUobmFtZSwgdG1wTW90aW9uKTtcblxuICAgICAgICAgIHRoaXMuX21vdGlvbkNvdW50Kys7XG4gICAgICAgICAgaWYgKHRoaXMuX21vdGlvbkNvdW50ID49IHRoaXMuX2FsbE1vdGlvbkNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRUZXh0dXJlO1xuXG4gICAgICAgICAgICAvLyDlhajjgabjga7jg6Ljg7zjgrfjg6fjg7PjgpLlgZzmraLjgZnjgotcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc3RvcEFsbE1vdGlvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gICAgICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc3RhcnRVcChnbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44GZ44G544Gm44Gu44Oi44O844K344On44Oz44OH44O844K/44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZU1vdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fbW90aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOOBpuOBruihqOaDheODh+ODvOOCv+OCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VFeHByZXNzaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9leHByZXNzaW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi+WHpueQhuOAguODouODh+ODq+OCkuaPj+eUu+OBmeOCi+epuumWk+OBrlZpZXctUHJvamVjdGlvbuihjOWIl+OCkua4oeOBmeOAglxuICAgKi9cbiAgcHVibGljIGRvRHJhdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544K144Kk44K644KS5rih44GZXG4gICAgY29uc3Qgdmlld3BvcnQ6IG51bWJlcltdID0gWzAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XG5cbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0UmVuZGVyU3RhdGUoZnJhbWVCdWZmZXIsIHZpZXdwb3J0KTtcbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuZHJhd01vZGVsKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44KS5o+P55S744GZ44KL5Yem55CG44CC44Oi44OH44Or44KS5o+P55S744GZ44KL56m66ZaT44GuVmlldy1Qcm9qZWN0aW9u6KGM5YiX44KS5rih44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZHJhdyhtYXRyaXg6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlkIToqq3jgb/ovrzjgb/ntYLkuoblvoxcbiAgICBpZiAodGhpcy5fc3RhdGUgPT0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cCkge1xuICAgICAgbWF0cml4Lm11bHRpcGx5QnlNYXRyaXgodGhpcy5fbW9kZWxNYXRyaXgpO1xuXG4gICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0TXZwTWF0cml4KG1hdHJpeCk7XG5cbiAgICAgIHRoaXMuZG9EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhc01vY0NvbnNpc3RlbmN5RnJvbUZpbGUoKSB7XG4gICAgQ1NNX0FTU0VSVCh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpLmxvY2FsZUNvbXBhcmUoYGApKTtcblxuICAgIC8vIEN1YmlzbU1vZGVsXG4gICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgIGNvbnN0IG1vZGVsRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YCk7XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG5cbiAgICAgIHRoaXMuX2NvbnNpc3RlbmN5ID0gQ3ViaXNtTW9jLmhhc01vY0NvbnNpc3RlbmN5KGFycmF5QnVmZmVyKTtcblxuICAgICAgaWYgKCF0aGlzLl9jb25zaXN0ZW5jeSkge1xuICAgICAgICBDdWJpc21Mb2dJbmZvKCdJbmNvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN1YmlzbUxvZ0luZm8oJ0NvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NvbnNpc3RlbmN5O1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IG51bGw7XG4gICAgdGhpcy5fbW9kZWxIb21lRGlyID0gbnVsbDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG5cbiAgICB0aGlzLl9leWVCbGlua0lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XG4gICAgdGhpcy5fbGlwU3luY0lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XG5cbiAgICB0aGlzLl9tb3Rpb25zID0gbmV3IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+KCk7XG4gICAgdGhpcy5fZXhwcmVzc2lvbnMgPSBuZXcgY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj4oKTtcblxuICAgIHRoaXMuX2hpdEFyZWEgPSBuZXcgY3NtVmVjdG9yPGNzbVJlY3Q+KCk7XG4gICAgdGhpcy5fdXNlckFyZWEgPSBuZXcgY3NtVmVjdG9yPGNzbVJlY3Q+KCk7XG5cbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVYXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVZXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtQW5nbGVaID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVaXG4gICAgKTtcbiAgICB0aGlzLl9pZFBhcmFtRXllQmFsbFggPSBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVCYWxsWFxuICAgICk7XG4gICAgdGhpcy5faWRQYXJhbUV5ZUJhbGxZID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtRXllQmFsbFlcbiAgICApO1xuICAgIHRoaXMuX2lkUGFyYW1Cb2R5QW5nbGVYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQm9keUFuZ2xlWFxuICAgICk7XG5cbiAgICBpZiAoTEFwcERlZmluZS5NT0NDb25zaXN0ZW5jeVZhbGlkYXRpb25FbmFibGUpIHtcbiAgICAgIHRoaXMuX21vY0NvbnNpc3RlbmN5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRBc3NldHM7XG4gICAgdGhpcy5fZXhwcmVzc2lvbkNvdW50ID0gMDtcbiAgICB0aGlzLl90ZXh0dXJlQ291bnQgPSAwO1xuICAgIHRoaXMuX21vdGlvbkNvdW50ID0gMDtcbiAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCA9IDA7XG4gICAgdGhpcy5fd2F2RmlsZUhhbmRsZXIgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gICAgdGhpcy5fY29uc2lzdGVuY3kgPSBmYWxzZTtcbiAgfVxuXG4gIF9tb2RlbFNldHRpbmc6IElDdWJpc21Nb2RlbFNldHRpbmc7IC8vIOODouODh+ODq+OCu+ODg+ODhuOCo+ODs+OCsOaDheWgsVxuICBfbW9kZWxIb21lRGlyOiBzdHJpbmc7IC8vIOODouODh+ODq+OCu+ODg+ODhuOCo+ODs+OCsOOBjOe9ruOBi+OCjOOBn+ODh+OCo+ODrOOCr+ODiOODqlxuICBfdXNlclRpbWVTZWNvbmRzOiBudW1iZXI7IC8vIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXG5cbiAgX2V5ZUJsaW5rSWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+OyAvLyDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/nnqzjgY3mqZ/og73nlKjjg5Hjg6njg6Hjg7zjgr9JRFxuICBfbGlwU3luY0lkczogY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPjsgLy8g44Oi44OH44Or44Gr6Kit5a6a44GV44KM44Gf44Oq44OD44OX44K344Oz44Kv5qmf6IO955So44OR44Op44Oh44O844K/SURcblxuICBfbW90aW9uczogY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj47IC8vIOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODouODvOOCt+ODp+ODs+OBruODquOCueODiFxuICBfZXhwcmVzc2lvbnM6IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+OyAvLyDoqq3jgb/ovrzjgb7jgozjgabjgYTjgovooajmg4Xjga7jg6rjgrnjg4hcblxuICBfaGl0QXJlYTogY3NtVmVjdG9yPGNzbVJlY3Q+O1xuICBfdXNlckFyZWE6IGNzbVZlY3Rvcjxjc21SZWN0PjtcblxuICBfaWRQYXJhbUFuZ2xlWDogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWFxuICBfaWRQYXJhbUFuZ2xlWTogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWVxuICBfaWRQYXJhbUFuZ2xlWjogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUFuZ2xlWlxuICBfaWRQYXJhbUV5ZUJhbGxYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtRXllQmFsbFhcbiAgX2lkUGFyYW1FeWVCYWxsWTogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUV5ZUJBbGxZXG4gIF9pZFBhcmFtQm9keUFuZ2xlWDogQ3ViaXNtSWRIYW5kbGU7IC8vIOODkeODqeODoeODvOOCv0lEOiBQYXJhbUJvZHlBbmdsZVhcblxuICBfc3RhdGU6IG51bWJlcjsgLy8g54++5Zyo44Gu44K544OG44O844K/44K5566h55CG55SoXG4gIF9leHByZXNzaW9uQ291bnQ6IG51bWJlcjsgLy8g6KGo5oOF44OH44O844K/44Kr44Km44Oz44OIXG4gIF90ZXh0dXJlQ291bnQ6IG51bWJlcjsgLy8g44OG44Kv44K544OB44Oj44Kr44Km44Oz44OIXG4gIF9tb3Rpb25Db3VudDogbnVtYmVyOyAvLyDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jgqvjgqbjg7Pjg4hcbiAgX2FsbE1vdGlvbkNvdW50OiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+e3j+aVsFxuICBfd2F2RmlsZUhhbmRsZXI6IExBcHBXYXZGaWxlSGFuZGxlcjsgLy93YXbjg5XjgqHjgqTjg6vjg4/jg7Pjg4njg6lcbiAgX2NvbnNpc3RlbmN5OiBib29sZWFuOyAvLyBNT0Mz5LiA6LKr5oCn44OB44Kn44OD44Kv566h55CG55SoXG59XG5cbi8vIFRPRE8gOiBzYXkgc29tZXRoaW5nXG5leHBvcnQgZnVuY3Rpb24gcnVuVGVzdChtc2c6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGNoYXRfYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtYm94Jyk7XG4gICAgY2hhdF9ib3guaW5uZXJIVE1MID0gYEN1cnJlbnQgTW90aW9uID0+ICR7bXNnfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3Igb24gcmVuZGVyID8gLi4uJywgZXJyb3IpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZGY4NTIzMjA3YTU0ZjNhNmIxMWZcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==