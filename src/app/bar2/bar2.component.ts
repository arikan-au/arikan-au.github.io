import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bar2',
  templateUrl: './bar2.component.html',
  styleUrls: ['./bar2.component.css']
})

export class Bar2Component implements OnInit {

  private data = [
      {
        "day_of_week": "Saturday ",
        "hour": "12",
        "count": 9
      },
      {
        "day_of_week": "Thursday ",
        "hour": "11",
        "count": 19
      },
      {
        "day_of_week": "Friday   ",
        "hour": "09",
        "count": 23
      },
      {
        "day_of_week": "Saturday ",
        "hour": "08",
        "count": 1
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "02",
        "count": 13
      },
      {
        "day_of_week": "Monday   ",
        "hour": "12",
        "count": 1
      },
      {
        "day_of_week": "Monday   ",
        "hour": "08",
        "count": 54
      },
      {
        "day_of_week": "Wednesday",
        "hour": "03",
        "count": 6
      },
      {
        "day_of_week": "Thursday ",
        "hour": "06",
        "count": 23
      },
      {
        "day_of_week": "Monday   ",
        "hour": "10",
        "count": 6
      },
      {
        "day_of_week": "Wednesday",
        "hour": "07",
        "count": 41
      },
      {
        "day_of_week": "Friday   ",
        "hour": "02",
        "count": 9
      },
      {
        "day_of_week": "Wednesday",
        "hour": "04",
        "count": 5
      },
      {
        "day_of_week": "Thursday ",
        "hour": "05",
        "count": 7
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "09",
        "count": 23
      },
      {
        "day_of_week": "Thursday ",
        "hour": "01",
        "count": 2
      },
      {
        "day_of_week": "Saturday ",
        "hour": "10",
        "count": 7
      },
      {
        "day_of_week": "Saturday ",
        "hour": "09",
        "count": 3
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "10",
        "count": 13
      },
      {
        "day_of_week": "Friday   ",
        "hour": "08",
        "count": 59
      },
      {
        "day_of_week": "Wednesday",
        "hour": "06",
        "count": 23
      },
      {
        "day_of_week": "Thursday ",
        "hour": "07",
        "count": 50
      },
      {
        "day_of_week": "Friday   ",
        "hour": "12",
        "count": 17
      },
      {
        "day_of_week": "Monday   ",
        "hour": "09",
        "count": 18
      },
      {
        "day_of_week": "Wednesday",
        "hour": "05",
        "count": 5
      },
      {
        "day_of_week": "Thursday ",
        "hour": "04",
        "count": 14
      },
      {
        "day_of_week": "Wednesday",
        "hour": "01",
        "count": 13
      },
      {
        "day_of_week": "Wednesday",
        "hour": "11",
        "count": 12
      },
      {
        "day_of_week": "Monday   ",
        "hour": "02",
        "count": 6
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "08",
        "count": 50
      },
      {
        "day_of_week": "Friday   ",
        "hour": "10",
        "count": 14
      },
      {
        "day_of_week": "Thursday ",
        "hour": "03",
        "count": 3
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "12",
        "count": 7
      },
      {
        "day_of_week": "Friday   ",
        "hour": "04",
        "count": 1
      },
      {
        "day_of_week": "Wednesday",
        "hour": "02",
        "count": 3
      },
      {
        "day_of_week": "Monday   ",
        "hour": "11",
        "count": 10
      },
      {
        "day_of_week": "Thursday ",
        "hour": "12",
        "count": 14
      },
      {
        "day_of_week": "Friday   ",
        "hour": "07",
        "count": 36
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "03",
        "count": 9
      },
      {
        "day_of_week": "Thursday ",
        "hour": "08",
        "count": 65
      },
      {
        "day_of_week": "Friday   ",
        "hour": "03",
        "count": 5
      },
      {
        "day_of_week": "Monday   ",
        "hour": "06",
        "count": 15
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "07",
        "count": 50
      },
      {
        "day_of_week": "Thursday ",
        "hour": "10",
        "count": 12
      },
      {
        "day_of_week": "Saturday ",
        "hour": "01",
        "count": 7
      },
      {
        "day_of_week": "Wednesday",
        "hour": "09",
        "count": 26
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "04",
        "count": 16
      },
      {
        "day_of_week": "Saturday ",
        "hour": "06",
        "count": 2
      },
      {
        "day_of_week": "Monday   ",
        "hour": "01",
        "count": 2
      },
      {
        "day_of_week": "Monday   ",
        "hour": "05",
        "count": 6
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "06",
        "count": 14
      },
      {
        "day_of_week": "Monday   ",
        "hour": "07",
        "count": 66
      },
      {
        "day_of_week": "Wednesday",
        "hour": "10",
        "count": 9
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "01",
        "count": 11
      },
      {
        "day_of_week": "Thursday ",
        "hour": "09",
        "count": 22
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "05",
        "count": 10
      },
      {
        "day_of_week": "Saturday ",
        "hour": "07",
        "count": 3
      },
      {
        "day_of_week": "Monday   ",
        "hour": "04",
        "count": 5
      },
      {
        "day_of_week": "Friday   ",
        "hour": "11",
        "count": 14
      },
      {
        "day_of_week": "Thursday ",
        "hour": "02",
        "count": 10
      },
      {
        "day_of_week": "Friday   ",
        "hour": "05",
        "count": 6
      },
      {
        "day_of_week": "Friday   ",
        "hour": "01",
        "count": 13
      },
      {
        "day_of_week": "Tuesday  ",
        "hour": "11",
        "count": 11
      },
      {
        "day_of_week": "Wednesday",
        "hour": "12",
        "count": 3
      },
      {
        "day_of_week": "Friday   ",
        "hour": "06",
        "count": 13
      },
      {
        "day_of_week": "Monday   ",
        "hour": "03",
        "count": 2
      },
      {
        "day_of_week": "Wednesday",
        "hour": "08",
        "count": 74
      }
    ];

  
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  weekDays = new Set(this.data.map(x=>x.day_of_week));
  form: FormGroup;


  constructor(private formBuilder: FormBuilder,) {
  
  }
 
 ngOnInit(): void {
   this.createSvg();
   this.drawBars(this.data);
   this.form = this.formBuilder.group({
     dayOfWeek: ['']
   });
   this.form.controls.dayOfWeek.valueChanges.subscribe(v => {
console.log(v)

    this.applyFilter(v)
  });
   
 }
 


  private createSvg(): void {
    this.svg = d3.select("figure#bar2")
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
    var data = this.data.filter((d: any) =>  d.day_of_week === value)
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
