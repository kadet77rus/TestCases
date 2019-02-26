/**
 * Before doing the test, import test-content-rules.txt to AdGuard
 */
window.addEventListener('load', function() {

    QUnit.test("1. Test script rule", function(assert) {
        assert.equal(window.getComputedStyle(case1).display, "none");
    });

    QUnit.test("2. Test script rule exception", function(assert) {
        assert.equal(window.getComputedStyle(case2).display, "block");
    });
});
