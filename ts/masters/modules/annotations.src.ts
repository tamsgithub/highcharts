/**
 * @license Highcharts JS v@product.version@ (@product.date@)
 * @module highcharts/modules/annotations
 * @requires highcharts
 *
 * Annotations module
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Annotation from '../../Extensions/Annotations/Annotation.js';
const G: AnyRecord = Highcharts;
// Annotations
G.Annotation = Annotation;
G.extendAnnotation = Annotation.extendAnnotation;
// Compositions
Annotation.compose(G.Chart, G.Pointer);
import '../../Extensions/Annotations/NavigationBindings.js';
import '../../Extensions/Annotations/Popup.js';
