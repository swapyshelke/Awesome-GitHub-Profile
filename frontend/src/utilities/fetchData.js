

const fetchData = (url) => {
  fetch(url)
    .then(res => res.json)
    .then(data => data)
    .catch(err => console.log(err))
  
  return data
}