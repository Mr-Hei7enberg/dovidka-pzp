/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./langs/tail.select-ru.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.15 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Shebanits Oleksii - (https://github.com/tizis)
 */
; (function (factory) {
    if (typeof (define) == "function" && define.amd) {
        define(function () {
            return function (select) { factory(select); };
        });
    } else {
        if (typeof (window.tail) != "undefined" && window.tail.select) {
            factory(window.tail.select);
        }
    }
}(function (select) {
    select.strings.register("ru", {
        all: "Всі",
        none: "Ничего",
        empty: "Немає доступних варіантів",
        emptySearch: "Нічого не знайдено",
        limit: "Ви не можете вибрати більше варіантів",
        placeholder: "Виберіть варіант...",
        placeholderMulti: function (args) {
            var strings = ["варіанта", "варіантів", "варіантів"], cases = [2, 0, 1, 1, 1, 2], num = args[":limit"];
            var string = strings[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
            return "Вібір до :limit " + string + " ...";
        },
        search: "Почніть набирати для пошуку ...",
        disabled: "Поле вимкнено"
    });
    return select;
}));