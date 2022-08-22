import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  lasts1:number = 60;
  lasts2:number = 0;
  numb1:number = 0;
  numb2:number = 0;
  sm:any;
  toggle: boolean = false;
  last1:number = 13;
  last2:number = 0;
  num1:number = 0;
  num2:number = 0;
  dm:any;
  colon:any;
  msg?:any;
  convertedTime: any;
  convertedTime1: any;
  isShown: boolean = false;
  changeCount: number = 0;
  constructor() {
   
   }

  ngOnInit(): void {
    
  }
 
 //function for increment the hours

  hourup(){
    
    console.log(this.num1);
  if (this.num1 !== this.last1) {
    this.dm= ++this.num1;
    this.dm=this.padLeadingZeros(this.dm)
  } 
  if(this.dm.length != 0){
    this.colon=":";
    }
   
  }

  //function for Decrement  the hours

  hourdown(){
  if (this.num1 !== this.last2) {
    this.dm=--this.num1;
    this.dm=this.padLeadingZeros(this.dm)
    
  } 
  if(this.dm.length != 0){
    this.colon=":";
    }
    
  }

  //function for Increment  the Minutes

  minup(){
   
    if (this.numb1 !== this.lasts1) {
      this.sm=++this.numb1;
      this.sm=this.padLeadingZeros(this.sm)
    } 
    if(this.sm.length != 0){
      this.colon=":";
      }
      
    }

    //function for Decrement  the Minutes

    mindown(){
    if (this.numb1 !== this.lasts2) {
      this.sm=--this.numb1;
      this.sm=this.padLeadingZeros(this.sm)
    } 
    
    if(this.sm.length != 0){
      this.colon=":";
      }
     
    }
     //function for AM Select
    onItemSelector(event: any) {
      console.log(event.target.name);
      this.msg= event.target.name;
        return this.msg;
      
      }

   

   //function for Input Change Value for Hours

  onChangeEvent(event: any){
    
    
    console.log(this.num1);
    if (event.target.value >= 13) {
      event.target.value = 0;
      this.dm=0;
    } 
    this.num1=this.dm;
    this.dm=('0' + this.dm).slice(-2)
    
  }

   //function for Input Change Value for Minutes

  onChangeEvent1(event: any){
    this.numb1=this.sm;
    if (event.target.value >= 60) {
      event.target.value = 0;
      this.sm=0;
    } 
    this.sm=('0' + this.sm).slice(-2)
    
  }
 

 //function for Submit the Results

    somethingChanged(e:any){
      this.isShown = true;
      if (this.msg == undefined){
        this.msg='AM';
      }
      if (this.dm == undefined){
        this.dm='00';
      }
      if (this.sm == undefined){
        this.sm='00';
      }
      const str =String (this.dm)+':'+String(this.sm)+ ' '+String(this.msg);
     
      
   
    this.convertedTime1 = moment(str, 'hh:mm A').format('HH:mm A')
    this.convertedTime = str;

        }
  //function for active class
  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
   //function for adding 0 before single digit 
    padLeadingZeros(num) {
  
      let s = num+"";
      let size =2;
    
      while (s.length < size) s = "0" + s;
    
      return s;
    
    }
  
}
