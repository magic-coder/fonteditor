/**
 * @file 区域查看模式
 * @author mengke01(kekee000@gmail.com)
 */

define(
    function (require) {

        var mode = {

            drag: function (e) {
                if (1 === e.which) {
                    var camera = this.render.camera;
                    this.render.move(camera.mx, camera.my);
                    this.render.refresh();
                }
            },

            keyup: function (e) {
                if (e.keyCode === 32) {
                    this.setMode('bound');
                }
            },


            begin: function () {
                this.render.setCursor('pointer');
            },


            end: function () {
                this.render.setCursor('default');
            }
        };

        return mode;
    }
);
