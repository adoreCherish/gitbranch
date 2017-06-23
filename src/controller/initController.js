'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gitController = require('./gitController');

var _gitController2 = _interopRequireDefault(_gitController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index', _gitController2.default.index());
            _.get('/addGitBranch', _gitController2.default.addBranch());
        }));
    }
};
exports.default = initController;