var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
    isNotEmpty: function(assertionToCheck) {
    if (assertionToCheck.length == 0) {
      throw new Error("Assertion failed: " + assertionToCheck + " is empty");
    }
  }
};