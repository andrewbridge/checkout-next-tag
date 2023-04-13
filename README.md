# `checkout-next-tag`

`checkout-next-tag` is a tiny Node command to checkout the next sequential git tag for a given git repository. This is useful to step through a repository's development over time.

The motivation for this command is to provide a cross-platform, no install way of doing this cleanly.

## Usage

In a git repository, run:

```sh
npx checkout-next-tag
```

## Alternatives

This could be done without Node with a bash command:

```bash
checkout_next_tag() {
  local current_tag=$(git describe --tags)
  local next_tag=$(git tag -l | sed -n "/$current_tag/{n;p;q;}")
  git checkout "$next_tag"
}
```