const types = {
    type: 'EXAMPLE_WIDGET',
    icon: 'https://coco.codemao.cn/favicon.ico',
    title: '示例控件',
    version: '1.0.0',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: []
};
class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);
    }
}
exports.types = types;
exports.widget = Widget;