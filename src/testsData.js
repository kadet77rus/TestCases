const testsData = [
    {
        id: 1,
        title: 'Simple rules',
        link: 'Filters/simple-rules/test-simple-rules.html',
        rulesUrl: 'Filters/simple-rules/test-simple-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 2,
        title: 'Generic hide rules',
        link: 'Filters/simple-rules/generichide-test/generichide-test.html',
        rulesUrl: 'Filters/simple-rules/generichide-test/generichide-test.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 3,
        title: 'Extended Css rules',
        link: 'Filters/extended-css-rules/test-extended-css-rules.html',
        rulesUrl: 'Filters/extended-css-rules/test-extended-css-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 4,
        title: 'Extended CSS rules injection into iframe created with js',
        link: 'Filters/extended-css-rules/extended-css-iframejs-injection/extended-css-iframejs-injection.html',
        rulesUrl: 'Filters/extended-css-rules/extended-css-iframejs-injection/extended-css-iframejs-injection.txt',
        compatibility: 'Chrome, Edge, FF, Opera, Edge Legacy, Safari',
        incompatibility: 'Windows, MacOS, Android, iOS, Content Blocker',
    },
    {
        id: 5,
        title: '$important rules',
        link: 'Filters/important-rules/test-important-rules.html',
        rulesUrl: 'Filters/important-rules/test-important-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/important-rules/README.md',
    },
    {
        id: 6,
        title: '$important rule vs $urlblock exception',
        link: 'Filters/important-rules/important-vs-urlblock/test-important-vs-urlblock.html',
        rulesUrl: 'Filters/important-rules/important-vs-urlblock/test-important-vs-urlblock.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/important-rules/important-vs-urlblock/README.md',
    },
    {
        id: 7,
        title: '$replace rules',
        link: 'Filters/replace-rules/test-replace-rules.html',
        rulesUrl: 'Filters/replace-rules/test-replace-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/replace-rules/README.md',
    },
    {
        id: 8,
        title: '$replace rule vs $generichide exception',
        link: 'Filters/replace-rules/replace-vs-generichide-rule/replace-vs-generichide-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-generichide-rule/replace-vs-generichide-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 9,
        title: '$replace rule vs $content exception',
        link: 'Filters/replace-rules/replace-vs-content-rule/replace-vs-content-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-content-rule/replace-vs-content-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 10,
        title: '$replace rule vs $elemhide exception',
        link: 'Filters/replace-rules/replace-vs-elemhide-rule/replace-vs-elemhide-rule.html',
        rulesUrl: 'Filters/replace-rules/replace-vs-elemhide-rule/replace-vs-elemhide-rule.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 11,
        title: '$csp rules',
        link: 'Filters/csp-rules/test-csp-rules.html',
        rulesUrl: 'Filters/csp-rules/test-csp-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF, Chrome, Edge, Opera',
        incompatibility: 'Edge Legacy, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/csp-rules/README.md',
    },
    {
        id: 12,
        title: '$csp exception test',
        link: 'Filters/csp-rules/csp-global-exception/csp-global-exception.html',
        rulesUrl: 'Filters/csp-rules/csp-global-exception/csp-global-exception.txt',
        compatibility: 'Windows, MacOS, Android, FF, Chrome, Edge, Opera',
        incompatibility: 'Edge Legacy, Safari, iOS, Content Blocker',
        readmeUrl: 'Filters/csp-rules/csp-global-exception/README.md',
    },
    {
        id: 13,
        title: 'Websocket blocking',
        link: 'Filters/websockets/test-websockets.html',
        rulesUrl: 'Filters/websockets/test-websockets.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy',
        incompatibility: 'Safari, iOS, Content Blocker',
    },
    {
        id: 14,
        title: 'Content rules',
        link: 'Filters/content-rules/test-content-rules.html',
        rulesUrl: 'Filters/content-rules/test-content-rules.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 15,
        title: '$content modifier tests',
        link: 'Filters/content-rules/content-modifier-test/content-modifier-test.html',
        rulesUrl: 'Filters/content-rules/content-modifier-test/content-modifier-test.txt',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 16,
        title: 'Script rules',
        link: 'Filters/script-rules/test-script-rules.html',
        rulesUrl: 'Filters/script-rules/test-script-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 17,
        title: 'Scriptlet rules',
        link: 'Filters/scriptlet-rules/test-scriptlet-rules.html',
        rulesUrl: 'Filters/scriptlet-rules/test-scriptlet-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, Opera, FF, Safari',
        incompatibility: 'Edge Legacy, iOS, Content Blocker',
    },
    {
        id: 18,
        title: 'Userscripts',
        link: 'Userscripts/test-userscripts.html',
        rulesUrl: 'Userscripts/apiTester/api-tester.user.js',
        compatibility: 'Windows, MacOS, Android, FF',
        incompatibility: 'Chrome, Edge, Opera, Edge Legacy, Safari, iOS, Content Blocker',
    },
    {
        id: 19,
        title: 'Popup blocker',
        link: 'PopupBlocker/test-popup-blocker.html',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 20,
        title: 'Popup blocker event recovery',
        link: 'PopupBlocker/test-event-recovery.html',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Opera, Edge Legacy, Safari',
        incompatibility: 'iOS, Content Blocker',
    },
    {
        id: 21,
        title: '$badfilter rules',
        link: 'Filters/badfilter-rules/test-badfilter-rules.html',
        rulesUrl: 'Filters/badfilter-rules/test-badfilter-rules.txt',
        compatibility: 'Chrome, Edge, FF, Edge Legacy, Safari, Opera',
        incompatibility: 'Windows, MacOS, Android, iOS, Content Blocker',
        readmeUrl: 'Filters/badfilter-rules/README.md',
    },
    {
        id: 22,
        title: '$network rules',
        link: 'Filters/network-rules/test-network-rules.html',
        rulesUrl: 'Filters/network-rules/test-network-rules.txt',
        compatibility: 'Windows, MacOS, Android',
        incompatibility: 'Chrome, Edge, FF, Edge Legacy, Safari, Opera, iOS, Content Blocker',
        readmeUrl: 'Filters/network-rules/README.md',
    },
    {
        id: 23,
        title: '$redirect rules',
        link: 'Filters/redirect-rules/test-redirect-rules.html',
        rulesUrl: 'Filters/redirect-rules/test-redirect-rules.txt',
        compatibility: 'Windows, MacOS, Android, Chrome, Edge, FF, Safari, Opera',
        incompatibility: 'Edge Legacy, iOS, Content Blocker',
        readmeUrl: 'Filters/redirect-rules/README.md',
    },
];

export default testsData;
