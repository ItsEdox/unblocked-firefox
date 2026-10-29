/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const PREF_LOGLEVEL = "browser.policies.loglevel";

const lazy = {};

ChromeUtils.defineLazyGetter(lazy, "log", () => {
  let { ConsoleAPI } = ChromeUtils.importESModule(
    "resource://gre/modules/Console.sys.mjs"
  );
  return new ConsoleAPI({
    prefix: "WindowsGPOParser",
    // tip: set maxLogLevel to "debug" and use log.debug() to create detailed
    // messages during development. See LOG_LEVELS in Console.sys.mjs for details.
    maxLogLevel: "error",
    maxLogLevelPref: PREF_LOGLEVEL,
  });
});

export var WindowsGPOParser = {
  readPolicies(wrk, policies) {
    return {};
  },
};

// Policies that may be supplied as either a single value holding JSON (a
// REG_SZ/REG_MULTI_SZ) or a subkey tree keyed by id. When a registry path has
// both forms, registryToObject merges them rather than letting one silently
// drop the other.
const MERGEABLE_POLICIES = ["ExtensionSettings"];

function registryToObject(wrk) {
  return [];
}

function isObject(value) {
  return typeof value == "object" && value !== null && !Array.isArray(value);
}

function readRegistryValue(wrk, value) {
  return null;
}
