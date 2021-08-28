import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-bar3',
  templateUrl: './bar3.component.html',
  styleUrls: ['./bar3.component.css']
})
export class Bar3Component implements OnInit {

 
  private data = [
    {
      "premise_name": "BW Lagos ",
      "hour": "12",
      "count": 9
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "11",
      "count": 19
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "09",
      "count": 23
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "08",
      "count": 1
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "02",
      "count": 13
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "12",
      "count": 1
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "08",
      "count": 54
    },
    {
      "premise_name": "null",
      "hour": "03",
      "count": 6
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "06",
      "count": 23
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "10",
      "count": 6
    },
    {
      "premise_name": "null",
      "hour": "07",
      "count": 41
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "02",
      "count": 9
    },
    {
      "premise_name": "null",
      "hour": "04",
      "count": 5
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "05",
      "count": 7
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "09",
      "count": 23
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "01",
      "count": 2
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "10",
      "count": 7
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "09",
      "count": 3
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "10",
      "count": 13
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "08",
      "count": 59
    },
    {
      "premise_name": "null",
      "hour": "06",
      "count": 23
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "07",
      "count": 50
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "12",
      "count": 17
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "09",
      "count": 18
    },
    {
      "premise_name": "null",
      "hour": "05",
      "count": 5
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "04",
      "count": 14
    },
    {
      "premise_name": "null",
      "hour": "01",
      "count": 13
    },
    {
      "premise_name": "null",
      "hour": "11",
      "count": 12
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "02",
      "count": 6
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "08",
      "count": 50
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "10",
      "count": 14
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "03",
      "count": 3
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "12",
      "count": 7
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "04",
      "count": 1
    },
    {
      "premise_name": "null",
      "hour": "02",
      "count": 3
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "11",
      "count": 10
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "12",
      "count": 14
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "07",
      "count": 36
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "03",
      "count": 9
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "08",
      "count": 65
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "03",
      "count": 5
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "06",
      "count": 15
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "07",
      "count": 50
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "10",
      "count": 12
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "01",
      "count": 7
    },
    {
      "premise_name": "null",
      "hour": "09",
      "count": 26
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "04",
      "count": 16
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "06",
      "count": 2
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "01",
      "count": 2
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "05",
      "count": 6
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "06",
      "count": 14
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "07",
      "count": 66
    },
    {
      "premise_name": "null",
      "hour": "10",
      "count": 9
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "01",
      "count": 11
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "09",
      "count": 22
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "05",
      "count": 10
    },
    {
      "premise_name": "BW Lagos ",
      "hour": "07",
      "count": 3
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "04",
      "count": 5
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "11",
      "count": 14
    },
    {
      "premise_name": "The View Hotel ",
      "hour": "02",
      "count": 10
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "05",
      "count": 6
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "01",
      "count": 13
    },
    {
      "premise_name": "Airtel HQ  ",
      "hour": "11",
      "count": 11
    },
    {
      "premise_name": "null",
      "hour": "12",
      "count": 3
    },
    {
      "premise_name": "BW Enugu   ",
      "hour": "06",
      "count": 13
    },
    {
      "premise_name": "BW Abuja   ",
      "hour": "03",
      "count": 2
    },
    {
      "premise_name": "null",
      "hour": "08",
      "count": 74
    }
  ];


private svg: any;
private margin = 50;
private width = 750 - (this.margin * 2);
private height = 400 - (this.margin * 2);
premises = new Set(this.data.map(x=>x.premise_name));
form: FormGroup;



constructor(private formBuilder: FormBuilder,) {

}

ngOnInit(): void {
 this.createSvg();
 this.drawBars(this.data);
 this.form = this.formBuilder.group({
   premise: ['']
 });
 this.form.controls.premise.valueChanges.subscribe(v => {
console.log(v)

  this.applyFilter(v)
});
 
}



private createSvg(): void {
  this.svg = d3.select("figure#bar3")
  .append("svg")
  .attr("width", this.width + (this.margin * 2))
  .attr("height", this.height + (this.margin * 2))
  .append("g")
  .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}


private drawBars(data: any[]): void {
// Create the X-axis band scale
const x = d3.scaleBand()
.range([0, this.width])
.domain(data.map(d => d.hour))
.padding(0.2);

// Draw the X-axis on the DOM
this.svg.append("g")
.attr("transform", "translate(0," + this.height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end");

// Create the Y-axis band scale
const y = d3.scaleLinear()
.domain([0, 100])
.range([this.height, 0]);

// Draw the Y-axis on the DOM
this.svg.append("g")
.call(d3.axisLeft(y));

// Create and fill the bars
this.svg.selectAll("bars")
.data(data)
.enter()
.append("rect")
.attr("x", (d: any) => x(d.hour))
.attr("y", (d: any) => y(d.count))
.attr("width", x.bandwidth())
.attr("height", (d: any) => this.height - y(d.count))
.attr("fill", "#d04a35");
}


//   // call this whenever the filter changes
private applyFilter(value: string) {
  // filter the data
  var data = this.data.filter((d: any) =>  d.premise_name === value)
  // var remove = d3.set().remove()
  console.log(data)
  // update the bars
  this.svg.selectAll("bars")
    .data(data)
    .transition().duration(1000)
    .attr("x", (d: any) =>  x(d.hour))
    .attr("y", (d: any) => y(d.count))
    .attr("height", (d: any) => this.height - (d.count));
  this.svg.selectAll("*").remove() ;
  this.createSvg;
  this.drawBars(data);



function weekDay(weekDay: any) {
throw new Error('Function not implemented.');
}

function y(count: number) {
    throw new Error('Function not implemented.');
  }
  function x(hour: any) {
    throw new Error('Function not implemented.');
  }
}
}

