import "bootstrap";
$("body")
  .attr({
    "data-spy": "scroll",
    "data-target": ".navbar",
  })
  .scrollspy({
    offset: 150,
  });
