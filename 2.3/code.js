/// <reference types="cdef" />
// @ts-check

/**
 * @type {IWidgetType}
 */
const types = {
    type: 'EXAMPLE_WIDGET',
    icon: 'https://coco.codemao.cn/favicon.ico',
    title: '示例控件',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: 'prop1',
            label: '属性1',
            valueType: 'string',
            defaultValue: '默认值'
        }
    ],
    methods: [
        {
            key: 'method1',
            label: '方法1',
            params: [
                {
                    key: 'param1',
                    label: '参数1',
                    valueType: 'string',
                    defaultValue: '默认值'
                }
            ]
        }
    ],
    events: [
        {
            key: 'event1',
            label: '事件1',
            params: [
                {
                    key: 'param1',
                    label: '参数1',
                    valueType: 'string'
                }
            ]
        }
    ]
};