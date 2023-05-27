import React, { useEffect } from 'react'
import * as d3 from 'd3';
const Playground = () => {

    useEffect(()=>{
        var svg = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

    // Define the filter
    var filter = svg.append("defs")
        .append("filter")
        .attr("id", "inset-shadow")
        .attr("x", "-90%")
        .attr("y", "-90%")
        .attr("width", "200%")
        .attr("height", "200%");

    filter.append("feComponentTransfer")
        .attr("in", "SourceAlpha")
      .append("feFuncA")
        .attr("type", "table")
        .attr("tableValues", "1 0");

    filter.append("feGaussianBlur")
        .attr("stdDeviation", 3);

    filter.append("feOffset")
        .attr("dx", -3)
        .attr("dy", -3)
        .attr("result", "offsetblur");

    filter.append("feFlood")
        .attr("flood-color", "black");

    filter.append("feComposite")
        .attr("in2", "offsetblur")
        .attr("operator", "in");

    filter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["SourceGraphic", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
        .attr("in", function(d, i) { return i ? null : "coloredBlur"; });

    // Draw the square
    svg.append("rect")
        .attr("x", 50)
        .attr("y", 50)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "#E6EDED")
        .attr("filter", "url(#inset-shadow)");



    },[])
  return (
    <div>

    </div>
  )
}

export default Playground
