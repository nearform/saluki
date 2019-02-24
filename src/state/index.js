export default {
  hover: function(rule) {
    return { '&:hover': rule }
  },
  active: function(rule) {
    return { '&:active': rule }
  }
}
