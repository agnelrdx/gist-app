export default url =>
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .catch(err => ({ error: true }))
