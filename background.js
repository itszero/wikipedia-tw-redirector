const patterns = [
  {
    match: /https?:\/\/zh.wikipedia.org\/(wiki|zh|zh-hans|zh-hant|zh-cn|zh-hk|zh-mo|zh-my|zh-sg)\/(.+)/,
    replace: 'https://zh.wikipedia.org/zh-tw/$2'
  },
  {
    match: /https?:\/\/zh.m.wikipedia.org\/(wiki|zh|zh-hans|zh-hant|zh-cn|zh-hk|zh-mo|zh-my|zh-sg)\/(.+)/,
    replace: 'https://zh.m.wikipedia.org/zh-tw/$2'
  },
]

chrome.webRequest.onBeforeRequest.addListener((e) => {
  const { tabId, url } = e
    for (const pattern of patterns) {
    if (url.match(pattern.match)) {
      const newUrl = url.replace(pattern.match, pattern.replace)
      if (url !== newUrl) {
        return { redirectUrl: newUrl }
      }
    }
  }
}, {
  urls: ['*://zh.wikipedia.org/*', '*://zh.m.wikipedia.org/*']
}, ['blocking'])
