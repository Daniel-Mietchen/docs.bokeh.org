"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var min = Math.min, max = Math.max;
function empty() {
    return {
        x0: Infinity,
        y0: Infinity,
        x1: -Infinity,
        y1: -Infinity,
    };
}
exports.empty = empty;
function positive_x() {
    return {
        x0: Number.MIN_VALUE,
        y0: -Infinity,
        x1: Infinity,
        y1: Infinity,
    };
}
exports.positive_x = positive_x;
function positive_y() {
    return {
        x0: -Infinity,
        y0: Number.MIN_VALUE,
        x1: Infinity,
        y1: Infinity,
    };
}
exports.positive_y = positive_y;
function union(a, b) {
    return {
        x0: min(a.x0, b.x0),
        x1: max(a.x1, b.x1),
        y0: min(a.y0, b.y0),
        y1: max(a.y1, b.y1),
    };
}
exports.union = union;
var BBox = /** @class */ (function () {
    function BBox(box) {
        if (box == null) {
            this.x0 = 0;
            this.y0 = 0;
            this.x1 = 0;
            this.y1 = 0;
        }
        else if ('x0' in box) {
            var _a = box, x0 = _a.x0, y0 = _a.y0, x1 = _a.x1, y1 = _a.y1;
            if (!(x0 <= x1 && y0 <= y1))
                throw new Error("invalid bbox {x0: " + x0 + ", y0: " + y0 + ", x1: " + x1 + ", y1: " + y1 + "}");
            this.x0 = x0;
            this.y0 = y0;
            this.x1 = x1;
            this.y1 = y1;
        }
        else if ("x" in box) {
            var _b = box, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
            if (!(width >= 0 && height >= 0))
                throw new Error("invalid bbox {x: " + x + ", y: " + y + ", width: " + width + ", height: " + height + "}");
            this.x0 = x;
            this.y0 = y;
            this.x1 = x + width;
            this.y1 = y + height;
        }
        else {
            var left = void 0, right = void 0;
            var top_1, bottom = void 0;
            if ("width" in box) {
                if ("left" in box) {
                    left = box.left;
                    right = left + box.width;
                }
                else if ("right" in box) {
                    right = box.right;
                    left = right - box.width;
                }
                else {
                    var w2 = box.width / 2;
                    left = box.hcenter - w2;
                    right = box.hcenter + w2;
                }
            }
            else {
                left = box.left;
                right = box.right;
            }
            if ("height" in box) {
                if ("top" in box) {
                    top_1 = box.top;
                    bottom = top_1 + box.height;
                }
                else if ("bottom" in box) {
                    bottom = box.bottom;
                    top_1 = bottom - box.height;
                }
                else {
                    var h2 = box.height / 2;
                    top_1 = box.vcenter - h2;
                    bottom = box.vcenter + h2;
                }
            }
            else {
                top_1 = box.top;
                bottom = box.bottom;
            }
            if (!(left <= right && top_1 <= bottom))
                throw new Error("invalid bbox {left: " + left + ", top: " + top_1 + ", right: " + right + ", bottom: " + bottom + "}");
            this.x0 = left;
            this.y0 = top_1;
            this.x1 = right;
            this.y1 = bottom;
        }
    }
    BBox.prototype.toString = function () {
        return "BBox({left: " + this.left + ", top: " + this.top + ", width: " + this.width + ", height: " + this.height + "})";
    };
    Object.defineProperty(BBox.prototype, "left", {
        get: function () { return this.x0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "top", {
        get: function () { return this.y0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "right", {
        get: function () { return this.x1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "bottom", {
        get: function () { return this.y1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "p0", {
        get: function () { return [this.x0, this.y0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "p1", {
        get: function () { return [this.x1, this.y1]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "x", {
        get: function () { return this.x0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "y", {
        get: function () { return this.y0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "width", {
        get: function () { return this.x1 - this.x0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "height", {
        get: function () { return this.y1 - this.y0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "rect", {
        get: function () { return { x0: this.x0, y0: this.y0, x1: this.x1, y1: this.y1 }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "box", {
        get: function () { return { x: this.x, y: this.y, width: this.width, height: this.height }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "h_range", {
        get: function () { return { start: this.x0, end: this.x1 }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "v_range", {
        get: function () { return { start: this.y0, end: this.y1 }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "ranges", {
        get: function () { return [this.h_range, this.v_range]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "aspect", {
        get: function () { return this.width / this.height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "hcenter", {
        get: function () { return (this.left + this.right) / 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "vcenter", {
        get: function () { return (this.top + this.bottom) / 2; },
        enumerable: true,
        configurable: true
    });
    BBox.prototype.contains = function (x, y) {
        return x >= this.x0 && x <= this.x1 && y >= this.y0 && y <= this.y1;
    };
    BBox.prototype.clip = function (x, y) {
        if (x < this.x0)
            x = this.x0;
        else if (x > this.x1)
            x = this.x1;
        if (y < this.y0)
            y = this.y0;
        else if (y > this.y1)
            y = this.y1;
        return [x, y];
    };
    BBox.prototype.union = function (that) {
        return new BBox({
            x0: min(this.x0, that.x0),
            y0: min(this.y0, that.y0),
            x1: max(this.x1, that.x1),
            y1: max(this.y1, that.y1),
        });
    };
    BBox.prototype.equals = function (that) {
        return this.x0 == that.x0 && this.y0 == that.y0 && this.x1 == that.x1 && this.y1 == that.y1;
    };
    Object.defineProperty(BBox.prototype, "xview", {
        get: function () {
            var _this = this;
            return {
                compute: function (x) {
                    return _this.left + x;
                },
                v_compute: function (xx) {
                    var _xx = new Float64Array(xx.length);
                    var left = _this.left;
                    for (var i = 0; i < xx.length; i++) {
                        _xx[i] = left + xx[i];
                    }
                    return _xx;
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BBox.prototype, "yview", {
        get: function () {
            var _this = this;
            return {
                compute: function (y) {
                    return _this.bottom - y;
                },
                v_compute: function (yy) {
                    var _yy = new Float64Array(yy.length);
                    var bottom = _this.bottom;
                    for (var i = 0; i < yy.length; i++) {
                        _yy[i] = bottom - yy[i];
                    }
                    return _yy;
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    BBox.__name__ = "BBox";
    return BBox;
}());
exports.BBox = BBox;
