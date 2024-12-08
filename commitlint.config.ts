// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Enforce specific commit types
    "type-enum": [
      2, // Error level (2 means "error" when violated)
      "always", // Always enforce these types
      [
        "feat", // New feature
        "fix", // Bug fix
        "chore", // Maintenance tasks
        "docs", // Documentation changes
        "style", // Code style changes (formatting, etc.)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "build", // Changes to build process or dependencies
        "ci", // Changes to CI configuration
        "revert", // Reverting changes
        "wip", // Work in progress
      ],
    ],
    // Ensure the subject is not empty
    "subject-empty": [2, "never"],
    // Ensure commit messages start with the type (feat/fix/chore)
    "type-empty": [2, "never"],
  },
};
