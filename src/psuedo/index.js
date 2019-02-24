export default {
  hover: function(rule) {
    return { '&:hover': rule }
  },
  active: function(rule) {
    return { '&:active': rule }
  },
  focus: function(rule) {
    return { '&:focus': rule }
  },
  visited: function(rule) {
    return { '&:visited': rule }
  }
}
