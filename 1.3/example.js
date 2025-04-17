/// <reference types="cdef" />

// @ts-check

/** @type {IWidgetType} */
const types = {}    // 报错

class Widget extends InvisibleWidget {}

exports.types = types
exports.widget = Widget