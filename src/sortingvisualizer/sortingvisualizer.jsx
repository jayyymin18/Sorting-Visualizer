import React, { Component } from 'react';
import './sortingvisualizer.css';
import {MergeSort} from '../sortingalgorithms/mergesort';
import {bubbles} from '../sortingalgorithms/bubblesort';
import {insertions} from '../sortingalgorithms/insertionsort';
import {quickSort} from '../sortingalgorithms/quicksort';
import {selectionSort} from '../sortingalgorithms/selectionsort';

const NUMER_OF_BARS=100;
const DEFAULT_COLOR= 'pink';
const COLOR_CHANGE= 'blue';
const COLOR_DIFF='black';
const ANIMATION_SPEED=1;
 class sortingvisulaizer extends Component {
   constructor(props){
       super(props);
       this.state={
           array:[],
         
       };
   }
  componentDidMount(){
      this.resetarray();
  }
  
  //Generates a new array 
  resetarray(){
    
      const array=[];
      for(let i=0;i<NUMER_OF_BARS;i++){
           array.push(randomIntFromInterval(5, 300));
      }
      this.setState({array});
     
  }

  // performs the merge sort animation
  mergesort(){
  
    const animations= MergeSort(this.state.array); // animation array which stores all the swaps taking place
  
    for(let i=0;i<animations.length;i++){
        const arraybars= document.getElementsByClassName('bar');
      const ischange= i%3!==2;
      if(ischange){
          const [baroneidx, bartwoidx]= animations[i];
          const baroneStyle= arraybars[baroneidx].style; 
          const bartwoStyle= arraybars[bartwoidx].style;
          const color= i%3===0? COLOR_CHANGE: DEFAULT_COLOR; 
          // i%3===0, suggests that the comparison is taking place and change the color of the twp indices
          // i%3===1, reverting the colors
          setTimeout(()=>{
             baroneStyle.backgroundColor= color;
             bartwoStyle.backgroundColor= color; 

          }, i*ANIMATION_SPEED);
      }
      else{
           // the actual animation takes place
          setTimeout(()=>{
          const [baridx, newheight]= animations[i];
          const barStyle= arraybars[baridx].style;
          barStyle.height=`${newheight}px`;
          },i* ANIMATION_SPEED);
      }

    }
    
  }

  //performs quicksort animation
  quicksort(){
    
    const animations=[];  //stores all the swaps to be done
     quickSort(this.state.array, 0, this.state.array.length-1, animations);
     
     for(let i=0;i<animations.length;i++){
      const arraybars= document.getElementsByClassName('bar');
        const ischange = i%3!==2;
        if(ischange){
          const [firstidx, secondidx, firsth, secondh]= animations[i];
          let color1;
          let color2;
          if(i%3===0){
              color1=COLOR_CHANGE;
              color2= COLOR_DIFF;
          }
          else{
              color1= DEFAULT_COLOR;
              color2= DEFAULT_COLOR;
          }
            setTimeout(()=>{
          
              arraybars[firstidx].style.backgroundColor= color1;
              arraybars[secondidx].style.backgroundColor= color2;
             
            }, i*ANIMATION_SPEED);
        }
        else {
          setTimeout(()=>{
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            const firststyle= arraybars[firstidx].style;
            const secondstyle= arraybars[secondidx].style;
            firststyle.height=`${firsth}px`;
            secondstyle.height=`${secondh}px`;
               }, i*ANIMATION_SPEED);
        }
       
        
    }

  }
  bubblesort(){
  
    
    const animations= bubbles(this.state.array);
    
    for(let i=0;i<animations.length;i++){
      const arraybars= document.getElementsByClassName('bar');
        const ischange = i%3!==2;
        if(ischange){
          const [firstidx, secondidx, firsth, secondh]= animations[i];
          let color1;
          let color2;
          if(i%3===0){
              color1=COLOR_CHANGE;
              color2= COLOR_DIFF;
          }
          else{
              color1= DEFAULT_COLOR;
              color2= DEFAULT_COLOR;
          }
            setTimeout(()=>{
          
              arraybars[firstidx].style.backgroundColor= color1;
              arraybars[secondidx].style.backgroundColor= color2;
             
            }, i*ANIMATION_SPEED);
        }
        else {
          setTimeout(()=>{
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            const firststyle= arraybars[firstidx].style;
            const secondstyle= arraybars[secondidx].style;
            firststyle.height=`${firsth}px`;
            secondstyle.height=`${secondh}px`;
               }, i*ANIMATION_SPEED);
        }
       
        
    }


  }
  insertionsort(){ 
      const animations=  insertions(this.state.array);;

      for(let i=0;i<animations.length;i++){
        const arraybars= document.getElementsByClassName('bar');
          const ischange = i%3!==2;
          if(ischange){
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            let color1;
            let color2;
            if(i%3===0){
                color1=COLOR_CHANGE;
                color2= COLOR_DIFF;
            }
            else{
                color1= DEFAULT_COLOR;
                color2= DEFAULT_COLOR;
            }
              setTimeout(()=>{
            
                arraybars[firstidx].style.backgroundColor= color1;
                arraybars[secondidx].style.backgroundColor= color2;
               
              }, i*ANIMATION_SPEED);
          }
          else {
            setTimeout(()=>{
              const [firstidx, secondidx, firsth, secondh]= animations[i];
              const firststyle= arraybars[firstidx].style;
              const secondstyle= arraybars[secondidx].style;
              firststyle.height=`${firsth}px`;
              secondstyle.height=`${secondh}px`;
                 }, i*ANIMATION_SPEED);
          }
         
          
      }
  
  }
  selectionsort(){
      
    
    //const temp=document.getElementsByClassName('bar');
  
    const animations= selectionSort(this.state.array);;
     console.log(animations);
    for(let i=0;i<animations.length;i++){
      const arraybars= document.getElementsByClassName('bar');
        const ischange = i%3!==2;
        if(ischange){
          const [firstidx, secondidx, firsth, secondh]= animations[i];
          let color1;
          let color2;
          if(i%3===0){
              color1=COLOR_CHANGE;
              color2= COLOR_DIFF;
          }
          else{
              color1= DEFAULT_COLOR;
              color2= DEFAULT_COLOR;
          }
            setTimeout(()=>{
          
              arraybars[firstidx].style.backgroundColor= color1;
              arraybars[secondidx].style.backgroundColor= color2;
             
            }, i*ANIMATION_SPEED);
        }
        else {
          setTimeout(()=>{
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            const firststyle= arraybars[firstidx].style;
            const secondstyle= arraybars[secondidx].style;
            firststyle.height=`${firsth}px`;
            secondstyle.height=`${secondh}px`;
               }, i*ANIMATION_SPEED);
        }
       
        
    }
    //console.log(this.state.array);*/

}
    render() {
        const {array}= this.state;
        return (
            <div  className='bar-container'>
            { array.map((value,idx)=>(
              <div className='bar' key={idx} 
              style={{ backgroundColor:DEFAULT_COLOR, height:`${value}px`}}
              > 
            </div>        
            ))
            }
           
            <button onClick={()=>this.resetarray()}>Generate a new array</button>
            <button onClick={()=>this.mergesort()}>Merge Sort</button>
            <button onClick={()=>this.quicksort()}>Quick Sort</button>
            <button onClick={()=>this.bubblesort()}>Bubble Sort</button>
            <button onClick={()=>this.insertionsort()}>Insertion Sort</button>
            <button onClick={()=>this.selectionsort()}>Selection Sort</button>
            </div>
          
        )
    }

}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default sortingvisulaizer;
