const testsData = [
    {
        id: 1,
        title: 'Simple rules',
        link: 'Filters/simple-rules/test-simple-rules.html',
        rulesUrl: 'Filters/simple-rules/test-simple-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 2,
        title: 'Generic hide rules',
        link: 'Filters/simple-rules/generichide/test.html',
        rulesUrl: 'Filters/simple-rules/generichide/rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 3,
        title: 'Extended Css rules',
        link: 'Filters/extended-css-rules/test-extended-css-rules.html',
        rulesUrl: 'Filters/extended-css-rules/test-extended-css-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 4,
        title: '$replace rules',
        link: 'Filters/replace-rules/test-replace-rules.html',
        rulesUrl: 'Filters/replace-rules/test-replace-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/replace-rules/README.md',
    },
    {
        id: 5,
        title: '$replace rule vs $generichide exception',
        link: 'Filters/replace-rules/replace-vs-generichide-rule/replace-vs-generichide-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-generichide-rule/replace-vs-generichide-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 6,
        title: '$replace rule vs $content exception',
        link: 'Filters/replace-rules/replace-vs-content-rule/replace-vs-content-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-content-rule/replace-vs-content-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 7,
        title: '$replace rule vs $elemhide exception',
        link: 'Filters/replace-rules/replace-vs-elemhide-rule/replace-vs-elemhide-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-elemhide-rule/replace-vs-elemhide-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 8,
        title: '$csp rules',
        link: 'Filters/csp-rules/test-csp-rules.html',
        rulesUrl: 'Filters/csp-rules/test-csp-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF, Chrome, Opera',
        incompatibility: 'Edge, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/csp-rules/README.md',
    },
    {
        id: 9,
        title: '$csp exception test',
        link: 'Filters/csp-rules/csp-global-exception/csp-global-exception.html',
        rulesUrl: 'Filters/csp-rules/csp-global-exception/csp-global-exception.txt',
        compatibility: 'Windows, MacOS, Android, FF, Chrome, Opera',
        incompatibility: 'Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 10,
        title: 'Websocket blocking',
        link: 'Filters/websockets/test-websockets.html',
        rulesUrl: 'Filters/websockets/test-websockets.js',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge',
        incompatibility: 'Safari, iOS, Content Blocker',
    },
    {
        id: 11,
        title: 'Content rules',
        link: 'Filters/content-rules/test-content-rules.html',
        rulesUrl: 'Filters/content-rules/test-content-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 12,
        title: '$content modifier tests',
        link: 'Filters/content-rules/content-modifier-test/content-modifier-test.html',
        rulesUrl: 'Filters/content-rules/content-modifier-test/content-modifier-test.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 13,
        title: 'Script rules',
        link: 'Filters/script-rules/test-script-rules.html',
        rulesUrl: 'Filters/script-rules/test-script-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 14,
        title: 'Scriptlet rules',
        link: 'Filters/scriptlet-rules/test-scriptlet-rules.html',
        rulesUrl: 'Filters/scriptlet-rules/test-scriptlet-rules.txt',
        compatibility: 'Chrome, Opera, FF',
        incompatibility: 'Windows, MacOS, Android, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 15,
        title: 'Userscripts',
        link: 'Userscripts/test-userscripts.html',
        rulesUrl: 'Userscripts/apiTester/api-tester.user.js',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Opera, Edge, Safari, iOS, Content Blocker',
    },
    {
        id: 16,
        title: 'Popup blocker',
        link: 'PopupBlocker/test-popup-blocker.html',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 17,
        title: 'Popup blocker event recovery',
        link: 'PopupBlocker/test-event-recovery.html',
        compatibility: 'Windows, MacOS, Android, Chrome, FF, Opera, Edge, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
];

export default testsData;