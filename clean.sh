rm -rf .husky
npm uninstall husky @commitlint/cli @commitlint/config-conventional
rm -f commitlint.config.js
rm -f .releaserc
rm -f .git/hooks/husky.sh
rm -f .git/hooks/commit-msg
rm -rf node_modules
rm -f package-lock.json
