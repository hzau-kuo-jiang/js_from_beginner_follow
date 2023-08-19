const update = (names, name) => ({...names, [name]: names[name] === undefined ? 0 : names[name] + 1});

const formatName = name => name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();


module.exports = {
  update,
  formatName
}