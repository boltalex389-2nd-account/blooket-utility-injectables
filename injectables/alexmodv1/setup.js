if (!blooketUtility.prefs.test) {
  blooketUtility.prefs.test = {
    title: "Alex's Mod Version 1",
    description: "Test Pref Group",
    value: {
      testBool: {
        title: "Enabled",
        description: "Enable the mod",
        value: true,
      },
      testGroup: {
        title: "Test Group",
        description: "Test group for the Blooket Utility",
        value: {
          testBool2: {
            title: "Test 2",
            description: "Yet another test",
            value: false,
          },
          testBool3: {
            title: "Test 3",
            description: "Yet another test",
            value: true,
          },
        },
      },
    },
  };
}
