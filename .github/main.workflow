workflow "Run tests" {
  on = "push"
  resolves = [
    "Test",
    "Lint",
  ]
}

action "Install Dependencies" {
  uses = "CultureHQ/actions-yarn@master"
  args = ["install"]
}

action "Test" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = ["test"]
}

action "Lint" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = ["lint"]
}
