module.exports = () => {
  return (query, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-comment-o',
          title: 'Say it!',
          value: query,
        }
      ])
    })
  }
}
