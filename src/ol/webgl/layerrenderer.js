goog.provide('ol.webgl.LayerRenderer');

goog.require('goog.vec.Mat4');
goog.require('ol.Layer');
goog.require('ol.LayerRenderer');



/**
 * @constructor
 * @extends {ol.LayerRenderer}
 * @param {ol.webgl.Map} map Map.
 * @param {ol.Layer} layer Layer.
 */
ol.webgl.LayerRenderer = function(map, layer) {
  goog.base(this, map, layer);
};
goog.inherits(ol.webgl.LayerRenderer, ol.LayerRenderer);


/**
 * @protected
 */
ol.webgl.LayerRenderer.prototype.dispatchChangeEvent = function() {
  this.dispatchEvent(goog.events.EventType.CHANGE);
};


/**
 * @return {WebGLTexture} Texture.
 */
ol.webgl.LayerRenderer.prototype.getTexture = goog.abstractMethod;


/**
 * @return {WebGLRenderingContext} GL.
 */
ol.webgl.LayerRenderer.prototype.getGL = function() {
  var map = /** @type {ol.webgl.Map} */ this.getMap();
  return map.getGL();
};


/**
 * @override
 * @return {ol.webgl.Map} Map.
 */
ol.webgl.LayerRenderer.prototype.getMap = function() {
  return /** @type {ol.webgl.Map} */ goog.base(this, 'getMap');
};


/**
 * @return {goog.vec.Mat4.AnyType} Matrix.
 */
ol.webgl.LayerRenderer.prototype.getMatrix = goog.abstractMethod;


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerBrightnessChange = function() {
  this.dispatchChangeEvent();
};


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerContrastChange = function() {
  this.dispatchChangeEvent();
};


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerHueChange = function() {
  this.dispatchChangeEvent();
};


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerOpacityChange = function() {
  this.dispatchChangeEvent();
};


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerSaturationChange = function() {
  this.dispatchChangeEvent();
};


/**
 * @inheritDoc
 */
ol.webgl.LayerRenderer.prototype.handleLayerVisibleChange = function() {
  this.dispatchChangeEvent();
};


/**
 */
ol.webgl.LayerRenderer.prototype.handleWebGLContextLost = goog.nullFunction;


/**
 */
ol.webgl.LayerRenderer.prototype.render = goog.abstractMethod;
