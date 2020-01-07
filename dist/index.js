!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.rbac=r():e.rbac=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";r.__esModule=!0;var n=function(){function e(e){this.users={},this.roles={},this.debug=void 0!==e.debug&&e.debug,this.roles=e.rolesConfig.reduce((function(e,r){for(var t=0,n=r.roles;t<n.length;t++){e[n[t]]=r.permissions}return e}),{})}return e.prototype.getUserRoles=function(e){return e?this.users[e]?this.users[e]:this.generateError(e+" userId is not defined, please add a user to the RBAC using addUserRoles method"):this.generateError("userId is not defined, expected 1 arguments")},e.prototype.addUserRoles=function(e,r){if(!e||!r)return this.generateError("userId or roles is not defined, expected 2 arguments");if(0===r.length)return this.generateError("roles length is 0, expected at least 1");for(var t=0,n=r;t<n.length;t++){var o=n[t];if(!this.roles[o])return this.generateError(o+" role is not defined in initial config");this.users[e]?this.users[e].includes(o)||this.users[e].push(o):this.users[e]=[o]}},e.prototype.removeUserRoles=function(e,r){if(!e)return this.generateError("userId is not defined, expected 1 arguments");if(!this.users[e])return this.generateError(e+" userId is not defined, please add a user to the RBAC using addUserRoles method");if(r)for(var t=0,n=r;t<n.length;t++){var o=n[t],s=this.users[e].indexOf(o);s+1&&this.users[e].splice(s,1)}else delete this.users[e]},e.prototype.isAllowed=function(e,r){var t=this;if(!e||!r)return this.generateError("userId or permissionId is not defined, expected 2 arguments");var n=this.users[e];return n?n.some((function(e){return t.roles[e].includes(r)})):this.generateError(e+" userId is nor defined, please add user to the RBAC using addUserRoles method")},e.prototype.extendRole=function(e,r){if(!e||!r)return this.generateError("role or extendingRoles is not defined, expected 2 arguments");if(0===r.length)return this.generateError("extendingRoles length is 0, expected at least 1");if(!this.roles[e])return this.generateError(e+" role is not defined in the initial config");for(var t=0,n=r;t<n.length;t++){var o=n[t];if(!this.roles[o])return this.generateError(e+" role is not defined in the initial config");this.roles[e]=this.roles[e].concat(this.roles[o])}},e.prototype.middleware=function(e,r,t){if(!e||!r||!t)return r(),this.generateError("one of the incoming parameters is not defined, expected 3 arguments");this.isAllowed(e.userId,e.permissionId)?t():r()},e.prototype.generateError=function(e){return this.debug&&console.warn(e),new Error(e)},e}();r.RBAC=n,r.default=n}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYmFjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yYmFjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JiYWMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNvbmZpZyIsInVzZXJzIiwicm9sZXMiLCJ0aGlzIiwiZGVidWciLCJyb2xlc0NvbmZpZyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInBlcm1pc3Npb25zIiwiZ2V0VXNlclJvbGVzIiwidXNlcklkIiwiZ2VuZXJhdGVFcnJvciIsImFkZFVzZXJSb2xlcyIsImxlbmd0aCIsInJvbGUiLCJpbmNsdWRlcyIsInB1c2giLCJyZW1vdmVVc2VyUm9sZXMiLCJyb2xlSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaXNBbGxvd2VkIiwicGVybWlzc2lvbklkIiwidXNlciIsInNvbWUiLCJ1c2VyUm9sZSIsImV4dGVuZFJvbGUiLCJleHRlbmRpbmdSb2xlcyIsImV4dGVuZGluZ1JvbGUiLCJjb25jYXQiLCJtaWRkbGV3YXJlIiwicGFyYW1zIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVz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QUFLUyxjQUFjLG1EQUc5QixJQUFJVCxLQUFLRCxNQUFNYSxHQVNYLE9BQU9aLEtBQUtTLGNBQWNHLEVBQU8sOENBUmpDLElBQTBCLFVBQUFhLEVBQUEsZUFBZ0IsQ0FBckMsSUFBSUMsRUFBYSxLQUNsQixJQUFJMUIsS0FBS0QsTUFBTTJCLEdBR1gsT0FBTzFCLEtBQUtTLGNBQWNHLEVBQU8sOENBRmpDWixLQUFLRCxNQUFNYSxHQUFRWixLQUFLRCxNQUFNYSxHQUFNZSxPQUFPM0IsS0FBS0QsTUFBTTJCLE1BVS9ELFlBQUFFLFdBQVAsU0FBa0JDLEVBQW1EQyxFQUFtQkMsR0FDcEYsSUFBS0YsSUFBV0MsSUFBVUMsRUFFdEIsT0FEQUQsSUFDTzlCLEtBQUtTLGNBQWMsdUVBRzFCVCxLQUFLbUIsVUFBVVUsRUFBT3JCLE9BQVFxQixFQUFPVCxjQUNyQ1csSUFFQUQsS0FJQSxZQUFBckIsY0FBUixTQUFzQnVCLEdBSWxCLE9BSEloQyxLQUFLQyxPQUNMZ0MsUUFBUUMsS0FBS0YsR0FFVixJQUFJRyxNQUFNSCxJQUV6QixFQXRJQSxHQUFhLEVBQUFJLE9Bd0liLFVBQWVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmJhY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyYmFjXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbnRlcmZhY2UgSVVzZXJzIHtcbiAgICBbdXNlcklkOiBzdHJpbmddOiBzdHJpbmdbXVxufVxuXG5pbnRlcmZhY2UgSVJvbGVzIHtcbiAgICBbcGVybWlzc2lvbklkOiBzdHJpbmddOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm9sZXNDb25maWcge1xuICAgIHJvbGVzOiBzdHJpbmdbXSxcbiAgICBwZXJtaXNzaW9uczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWlkZGxld2FyZSB7XG4gICAgKHBhcmFtczogeyB1c2VySWQ6IHN0cmluZzsgcGVybWlzc2lvbklkOiBzdHJpbmc7IH0sIGVycm9yOiAoKSA9PiB2b2lkLCBzdWNjZXNzOiAoKSA9PiB2b2lkKTogdm9pZCB8IEVycm9yO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSQkFDIHtcbiAgICBnZXRVc2VyUm9sZXM6ICh1c2VySWQ6IHN0cmluZykgPT4gc3RyaW5nW10gfCBFcnJvcjtcbiAgICByZW1vdmVVc2VyUm9sZXM6ICh1c2VySWQ6IHN0cmluZywgcm9sZT86IHN0cmluZ1tdKSA9PiB2b2lkIHwgRXJyb3I7XG4gICAgYWRkVXNlclJvbGVzOiAodXNlcklkOiBzdHJpbmcsIHJvbGU6IHN0cmluZ1tdKSA9PiB2b2lkIHwgRXJyb3I7XG4gICAgaXNBbGxvd2VkOiAodXNlcklkOiBzdHJpbmcsIHBlcm1pc3Npb25JZDogc3RyaW5nKSA9PiBib29sZWFuIHwgRXJyb3I7XG4gICAgZXh0ZW5kUm9sZTogKHJvbGU6IHN0cmluZywgZXh0ZW5kaW5nUm9sZXM6IHN0cmluZ1tdKSA9PiB2b2lkIHwgRXJyb3I7XG4gICAgbWlkZGxld2FyZTogSU1pZGRsZXdhcmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XG4gICAgcm9sZXNDb25maWc6IElSb2xlc0NvbmZpZ1tdO1xuICAgIGRlYnVnPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJCQUMgaW1wbGVtZW50cyBJUkJBQyB7XG4gICAgcHJpdmF0ZSB1c2VyczogSVVzZXJzID0ge307XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWJ1ZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvbGVzOiBJUm9sZXMgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUNvbmZpZykge1xuICAgICAgICB0aGlzLmRlYnVnID0gKHR5cGVvZiBjb25maWcuZGVidWcgIT09ICd1bmRlZmluZWQnKSA/IGNvbmZpZy5kZWJ1ZyA6IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm9sZXMgPSBjb25maWcucm9sZXNDb25maWcucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3VtdWxhdG9yOiBJUm9sZXMsIGl0ZW06IElSb2xlc0NvbmZpZyk6IElSb2xlcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm9sZSBvZiBpdGVtLnJvbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yW3JvbGVdID0gaXRlbS5wZXJtaXNzaW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVzZXJSb2xlcyh1c2VySWQ6IHN0cmluZyk6IHN0cmluZ1tdIHwgRXJyb3Ige1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcigndXNlcklkIGlzIG5vdCBkZWZpbmVkLCBleHBlY3RlZCAxIGFyZ3VtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXNlcnNbdXNlcklkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcnNbdXNlcklkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlRXJyb3IodXNlcklkICsgJyB1c2VySWQgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgYSB1c2VyIHRvIHRoZSBSQkFDIHVzaW5nIGFkZFVzZXJSb2xlcyBtZXRob2QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRVc2VyUm9sZXModXNlcklkOiBzdHJpbmcsIHJvbGVzOiBzdHJpbmdbXSk6IHZvaWQgfCBFcnJvciB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFyb2xlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcigndXNlcklkIG9yIHJvbGVzIGlzIG5vdCBkZWZpbmVkLCBleHBlY3RlZCAyIGFyZ3VtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcigncm9sZXMgbGVuZ3RoIGlzIDAsIGV4cGVjdGVkIGF0IGxlYXN0IDEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHJvbGUgb2Ygcm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVzW3JvbGVdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlcnNbdXNlcklkXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlcnNbdXNlcklkXS5pbmNsdWRlcyhyb2xlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc1t1c2VySWRdLnB1c2gocm9sZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzW3VzZXJJZF0gPSBbcm9sZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUVycm9yKHJvbGUgKyAnIHJvbGUgaXMgbm90IGRlZmluZWQgaW4gaW5pdGlhbCBjb25maWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIHJlbW92ZVVzZXJSb2xlcyh1c2VySWQ6IHN0cmluZywgcm9sZXM/OiBzdHJpbmdbXSk6IHZvaWQgfCBFcnJvciB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUVycm9yKCd1c2VySWQgaXMgbm90IGRlZmluZWQsIGV4cGVjdGVkIDEgYXJndW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51c2Vyc1t1c2VySWRdKSB7XG4gICAgICAgICAgICBpZiAoIXJvbGVzKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudXNlcnNbdXNlcklkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm9sZSBvZiByb2xlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb2xlSW5kZXggPSB0aGlzLnVzZXJzW3VzZXJJZF0uaW5kZXhPZihyb2xlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZUluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc1t1c2VySWRdLnNwbGljZShyb2xlSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcih1c2VySWQgKyAnIHVzZXJJZCBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBhIHVzZXIgdG8gdGhlIFJCQUMgdXNpbmcgYWRkVXNlclJvbGVzIG1ldGhvZCcpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBbGxvd2VkKHVzZXJJZDogc3RyaW5nLCBwZXJtaXNzaW9uSWQ6IHN0cmluZyk6IGJvb2xlYW4gfCBFcnJvciB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFwZXJtaXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlRXJyb3IoJ3VzZXJJZCBvciBwZXJtaXNzaW9uSWQgaXMgbm90IGRlZmluZWQsIGV4cGVjdGVkIDIgYXJndW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy51c2Vyc1t1c2VySWRdO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci5zb21lKHVzZXJSb2xlID0+IHRoaXMucm9sZXNbdXNlclJvbGVdLmluY2x1ZGVzKHBlcm1pc3Npb25JZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcih1c2VySWQgKyAnIHVzZXJJZCBpcyBub3IgZGVmaW5lZCwgcGxlYXNlIGFkZCB1c2VyIHRvIHRoZSBSQkFDIHVzaW5nIGFkZFVzZXJSb2xlcyBtZXRob2QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleHRlbmRSb2xlKHJvbGU6IHN0cmluZywgZXh0ZW5kaW5nUm9sZXM6IHN0cmluZ1tdKTogdm9pZCB8IEVycm9yIHtcbiAgICAgICAgaWYgKCFyb2xlIHx8ICFleHRlbmRpbmdSb2xlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcigncm9sZSBvciBleHRlbmRpbmdSb2xlcyBpcyBub3QgZGVmaW5lZCwgZXhwZWN0ZWQgMiBhcmd1bWVudHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHRlbmRpbmdSb2xlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlRXJyb3IoJ2V4dGVuZGluZ1JvbGVzIGxlbmd0aCBpcyAwLCBleHBlY3RlZCBhdCBsZWFzdCAxJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yb2xlc1tyb2xlXSkge1xuICAgICAgICAgICAgZm9yIChsZXQgZXh0ZW5kaW5nUm9sZSBvZiBleHRlbmRpbmdSb2xlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGVzW2V4dGVuZGluZ1JvbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZXNbcm9sZV0gPSB0aGlzLnJvbGVzW3JvbGVdLmNvbmNhdCh0aGlzLnJvbGVzW2V4dGVuZGluZ1JvbGVdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUVycm9yKHJvbGUgKyAnIHJvbGUgaXMgbm90IGRlZmluZWQgaW4gdGhlIGluaXRpYWwgY29uZmlnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFcnJvcihyb2xlICsgJyByb2xlIGlzIG5vdCBkZWZpbmVkIGluIHRoZSBpbml0aWFsIGNvbmZpZycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1pZGRsZXdhcmUocGFyYW1zOiB7IHVzZXJJZDogc3RyaW5nOyBwZXJtaXNzaW9uSWQ6IHN0cmluZzsgfSwgZXJyb3I6ICgpID0+IHZvaWQsIHN1Y2Nlc3M6ICgpID0+IHZvaWQpOiB2b2lkIHwgRXJyb3Ige1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhZXJyb3IgfHwgIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUVycm9yKCdvbmUgb2YgdGhlIGluY29taW5nIHBhcmFtZXRlcnMgaXMgbm90IGRlZmluZWQsIGV4cGVjdGVkIDMgYXJndW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0FsbG93ZWQocGFyYW1zLnVzZXJJZCwgcGFyYW1zLnBlcm1pc3Npb25JZCkpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlRXJyb3IobWVzc2FnZTogYW55KTogRXJyb3Ige1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSQkFDO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==