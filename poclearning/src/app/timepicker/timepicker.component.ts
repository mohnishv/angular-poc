import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  

  constructor() {
   
   }

  ngOnInit(): void {
    
  }
 
  toggle: boolean = false;
  last1 = 13;
  last2 = 0;
  num1 = 0;
  num2 = 0;
  dm;
  colon;
  hourup(){
   
  if (this.num1 === this.last1) {
    console.log("disable");
  } else {
    //this.num1++ ;
    //console.log("Value of num1 after increment ", this.num1 );
    this.dm=this.num1++;
    this.dm=this.padLeadingZeros(this.dm)
     console.log("Value of num1 after increment ", this.padLeadingZeros(this.num1));
  }
  if(this.dm.length == 0){
    console.log(this.dm);
    }
    else{
      this.colon=":";
    }
  }
  hourdown(){
  if (this.num1 === this.last2) {
    console.log("disable");
  } else {
   // this.num1--;
   // console.log("Value of num1 after decr ", this.num1);
    this.dm=this.num1--;
    this.dm=this.padLeadingZeros(this.dm)
     console.log("Value of num1 after decr ", this.padLeadingZeros(this.num1));
  }
  if(this.dm.length == 0){
    console.log(this.dm);
    }
    else{
      this.colon=":";
    }
  }
  onChangeEvent(event: any){
    if (event.target.value >= 13) {
      event.target.value = 0;
      this.dm=0;
      console.log("disable");
    } 
    console.log(event.target.value);
    this.dm=('0' + this.dm).slice(-2)
  }
  onChangeEvent1(event: any){
    if (event.target.value >= 60) {
      event.target.value = 0;
      this.sm=0;
      console.log("disable");
    } 
    console.log(event.target.value);
    this.sm=('0' + this.sm).slice(-2)
  }
  lasts1 = 60;
  lasts2 = 0;
  numb1 = 0;
  numb2 = 0;
  sm;
  minup(){
   
  if (this.numb1 === this.lasts1) {
    console.log("disable");
  } else {
   // this.numb1++;
   this.sm=this.numb1++;
   this.sm=this.padLeadingZeros(this.sm)
   //this.numb1 = this.padLeadingZeros(this.numb1++);
   // console.log("Value of num1 after increment ", this.numb1);
    console.log("Value of num1 after increment ", this.padLeadingZeros(this.numb1));
  }
  if(this.sm.length == 0){
    console.log(this.dm);
    }
    else{
      this.colon=":";
    }
  }
  mindown(){
  if (this.numb1 === this.lasts2) {
    console.log("disable");
  } else {
    //this.numb1--;
    this.sm=this.numb1--;
   this.sm=this.padLeadingZeros(this.sm)
    console.log("Value of num1 after decr ", this.padLeadingZeros(this.numb1));
  }
  if(this.sm.length == 0){
    console.log(this.dm);
    }
    else{
      this.colon=":";
    }
  }
  
  
  msg:any;
  onItemSelectoram() {
  this.msg='AM';
    return this.msg;
    
  }
  onItemSelectorpm() {
    this.msg='PM';
      return this.msg;
    }
    somethingChanged(e:any){
     
      let t=e.target.value;
      
      const str = String(t);
      
    console.log(this.colon);
    var convertedTime = moment(str, 'hh:mm A').format('HH:mm')
    console.log(convertedTime);
        }
    condatetime(){
    }
    padLeadingZeros(num) {
  
      var s = num+"";
      let size =2;
    
      while (s.length < size) s = "0" + s;
    
      return s;
    
    }
  
}
