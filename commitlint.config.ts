module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
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
  },
};
