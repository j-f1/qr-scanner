workflow "Run tests" {
  on = "push"
  resolves = ["Lint"]
}

action "Install Dependencies" {
  uses = "CultureHQ/actions-yarn@master"
  args = ["install"]
}

action "Lint" {
  uses = "CultureHQ/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = ["lint"]
}
