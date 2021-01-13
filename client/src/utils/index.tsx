import Moment from 'react-moment';

export const pushItem = (item : any, refData : any) => refData.push(item);
export const removeItem = (key : any , refData : any) => refData.child(key).remove();
export const updateItem = (item : any, key : any, refData : any) => refData.child(key).set(item);
export const renderDate = (time : string) => <Moment format="MMMM D, YYYY">{time}</Moment>;
export const formatField = (str : string)=>
  str
    .split(',')
    .map((elm : any) => elm.trim())
    .filter(elm => elm !== '');

export const tabContent =(wrap : string, listItems : string , buttons : string )=>{
  const self = document.querySelector(wrap);
  const btns = document.querySelectorAll(buttons);
  const items=document.querySelectorAll(listItems);
  if (self===null) return;
  btns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
      btns.forEach(item=>item.classList.remove('active'));
      items.forEach(item=>item.classList.remove('active'));

      btns[index].classList.add('active');
      items[index].classList.add('active');
    })
  })
}    