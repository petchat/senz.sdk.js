var LeanCloud = (function (params) {
    var ClassDefines = {};
    return {
        setup: function (params) {
            if (typeof params === 'object') {
                ClassDefines = params;
            }
        },
        angularizeAll: function () {
            console.log('angularize,%s', JSON.stringify(ClassDefines));
            angular.forEach(ClassDefines, function (classDefine, className) {
                var classObject = AV.Object.extend(className);
                angular.forEach(classDefine.attributes, function (attr) {
                    Object.defineProperty(classObject.prototype, attr, {
                        get: function () {
                            return this.get(attr);
                        },
                        set: function (value) {
                            this.set(attr, value);
                        }
                    });
                })
            })
        }
    }
})();
