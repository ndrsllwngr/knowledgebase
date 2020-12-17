const TOC = {
  Introduction: ['introduction/style_guide', 'introduction/introduction'],
  Languages: [
    'languages/go',
    'languages/css',
    'languages/html',
    'languages/java',
    'languages/javascript',
    'languages/python',
    'languages/rust',
    'languages/scala',
    'languages/typescript',
  ],
  Frameworks: [
    'frameworks/android_native',
    'frameworks/next_js',
    'frameworks/node_js',
    'frameworks/vue_js',
  ],
  Libraries: ['libraries/react'],
  OS: ['os/linux', 'os/macos'],
  Applications: [
    'applications/docker',
    'applications/git',
    'applications/homebrew',
    'applications/oh_my_zsh',
    'applications/shell',
    'applications/visual_studio_code',
  ],
}

module.exports = sortedTOC = () => {
  for (const [key, value] of Object.entries(TOC)) {
    value.sort()
  }
  return TOC
}
