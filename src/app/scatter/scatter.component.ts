import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {

  private data = [
    {
      "premise_name": "Byteworks Lagos",
      "count": 20,
      "hour": "06"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 3,
      "hour": "05"
    },

    {
      "premise_name": "BW HQ Office",
      "count": 2,
      "hour": "07"
    },
    
    {
      "premise_name": "Byteworks Enugu",
      "count": 5,
      "hour": "01"
    },
    {
      "premise_name": "HQ Staff",
      "count": 2,
      "hour": "06"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 8,
      "hour": "04"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 11,
      "hour": "01"
    },
    
    {
      "premise_name": "Byteworks HQ",
      "count": 3,
      "hour": "03"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 4,
      "hour": "05"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 10,
      "hour": "11"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 50,
      "hour": "07"
    },
    {
      "premise_name": "Fidelity Bank",
      "count": 1,
      "hour": "02"
    },
    
    {
      "premise_name": "BW HQ Office",
      "count": 1,
      "hour": "03"
    },
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 7,
      "hour": "08"
    },
    
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 4,
      "hour": "12"
    },
    
    {
      "premise_name": "Byteworks HQ",
      "count": 1,
      "hour": "04"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 4,
      "hour": "11"
    },
    {
      "premise_name": "Fidelity Bank",
      "count": 1,
      "hour": "12"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 2,
      "hour": "03"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 6,
      "hour": "06"
    },
    {
      "premise_name": "THE VIEW HOTEL",
      "count": 2,
      "hour": "02"
    },
   
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 6,
      "hour": "02"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 27,
      "hour": "11"
    },
    {
      "premise_name": "Premise 2",
      "count": 2,
      "hour": "06"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 2,
      "hour": "01"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 1,
      "hour": "03"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 5,
      "hour": "05"
    },
   
    {
      "premise_name": "Byteworks HQ",
      "count": 7,
      "hour": "11"
    },
    {
      "premise_name": "HQ Staff",
      "count": 2,
      "hour": "07"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 3,
      "hour": "06"
    },
    {
      "premise_name": "Fidelity Bank Branch 2",
      "count": 1,
      "hour": "02"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 40,
      "hour": "07"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 6,
      "hour": "01"
    },
    {
      "premise_name": "HQ Staff",
      "count": 1,
      "hour": "04"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 4,
      "hour": "05"
    },
    
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 1,
      "hour": "09"
    },
    
    {
      "premise_name": "Byteworks HQ",
      "count": 3,
      "hour": "02"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 6,
      "hour": "10"
    },
   
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 3,
      "hour": "06"
    },
    
    {
      "premise_name": "Byteworks Enugu",
      "count": 7,
      "hour": "10"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 1,
      "hour": "09"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 7,
      "hour": "08"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 1,
      "hour": "12"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 7,
      "hour": "02"
    },
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 4,
      "hour": "11"
    },
  
    {
      "premise_name": "Byteworks Lagos",
      "count": 1,
      "hour": "12"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 30,
      "hour": "09"
    },
    {
      "premise_name": "Fidelity Bank Branch 2",
      "count": 4,
      "hour": "01"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 27,
      "hour": "08"
    },
    {
      "premise_name": "Premise BW",
      "count": 1,
      "hour": "06"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 1,
      "hour": "02"
    },
   
    {
      "premise_name": "Byteworks HQ",
      "count": 8,
      "hour": "10"
    },
   
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 2,
      "hour": "03"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 1,
      "hour": "02"
    },
    {
      "premise_name": "THE VIEW HOTEL",
      "count": 1,
      "hour": "03"
    },
    {
      "premise_name": "BW HQ Office",
      "count": 18,
      "hour": "12"
    },
   
    {
      "premise_name": "BW HQ Office",
      "count": 16,
      "hour": "10"
    },
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 15,
      "hour": "07"
    },
    {
      "premise_name": "Byteworks Enugu",
      "count": 9,
      "hour": "09"
    },
    
    {
      "premise_name": "Fidelity Bank",
      "count": 4,
      "hour": "01"
    },
   
    {
      "premise_name": "AIRTEL HQ OFFICE",
      "count": 1,
      "hour": "04"
    },
  
    {
      "premise_name": "Byteworks HQ",
      "count": 2,
      "hour": "12"
    },
    {
      "premise_name": "Byteworks Lagos",
      "count": 8,
      "hour": "09"
    },
    {
      "premise_name": "Byteworks HQ",
      "count": 63,
      "hour": "08"
    },
    {
      "premise_name": "THE VIEW HOTEL",
      "count": 3,
      "hour": "04"
    }
  ]
  
  
    private svg: any;
    private margin = 50;
    private width = 750 - (this.margin * 2);
    private height = 400 - (this.margin * 2);
    

    private createSvg(): void {
      this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([0, 12])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 50])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add path
    const dots = this.svg.append('dots')
    // dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", (d: any) => x(d.count))
    .attr("cy", (d: any) => y(parseInt(d.hour)))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // .attr("fill", "none")
    // .attr("stroke", "black")
    // .attr("stroke-width", 1.5)
    // .attr("d", d3.line()
    //   .curve(d3.curveBasis) // Just add that to have a curve instead of segments
    //   .x((d: any) => x(d.count))
    //   .y((d: any) => y(parseInt(d.hour))))

    // Add labels
    const toolTip = d3.select("figure#scatter")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    var mouseover = (d: any) => toolTip.style("opacity", 1)
    var mousemove = (d: any) => toolTip.html("Premise: " + d.premise_name)
                                      .style("right", (d3.pointer(this)[0]+70) + "px")
                                      .style("bottom", (d3.pointer(this)[1]) + "px")

    var mouseleave = (d: any) => toolTip.style("opacity", 0)

      this.svg.append("g")
      .selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("class", "myCircle")
      .attr("cx", (d: any) => x(d.count))
      .attr("cy", (d: any) => y(parseInt(d.hour)))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "#69b3a2")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
      // .attr("x", (d: any) => x(d.count))
      // .attr("y", (d: any) => y(parseInt(d.hour)))
}
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  }

}
