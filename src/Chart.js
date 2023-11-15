import * as React from "react";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

export const Linechart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Set dimensions based on the container size
    const containerWidth = chartRef.current.clientWidth;
    const containerHeight = 300;

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;
    const svg = d3
      .select(chartRef.current)
      .attr("width", containerWidth)
      .attr("height", containerHeight);
    // Create a line generator
    const line = d3
      .line()
      .x((_, i) => (i * width) / (data.length - 1))
      .y((d) => (1 - d / d3.max(data)) * height)
      .curve(d3.curveCatmullRom.alpha(0.5));

    // Clear previous chart
    svg.selectAll("*").remove();
    // Append a group element for margins
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Append the line path to the SVG
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#60BB6E")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add x-axis
    const xScale = d3.scaleLinear().domain([9, 18]).range([0, width]);
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    g.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { label: "Older", value: 20 },
      { label: "Jan 01-08", value: 35 },
      { label: "Jan 09-16", value: 65 },
      { label: "Jan 17-24", value: 45 },
      { label: "Jan 25-31", value: 55 },
      { label: "Future", value: 30 },
    ];

    // Set dimensions based on the container size
    const containerWidth = svgRef.current.clientWidth;
    const containerHeight = 350; // Set a fixed height or adjust dynamically

    const margin = { top: 20, right: 20, bottom: 60, left: 0 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", containerWidth)
      .attr("height", containerHeight)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#47B747");

    // Add x-axis with labels
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export const BarChart2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { label: "August", value: 20 },
      { label: "Septemper", value: 35 },
      { label: "Octobar", value: 65 },
      { label: "November", value: 45 },
      { label: "December", value: 55 },
      { label: "January", value: 30 },
    ];

    // Set dimensions based on the container size
    const containerWidth = svgRef.current.clientWidth;
    const containerHeight = 350; // Set a fixed height or adjust dynamically

    const margin = { top: 20, right: 20, bottom: 60, left: 0 };
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", containerWidth)
      .attr("height", containerHeight)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#47B747");

    // Add x-axis with labels
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, []);

  return <svg ref={svgRef}></svg>;
};
