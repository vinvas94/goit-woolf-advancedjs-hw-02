import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as d}from"./assets/vendor-651d7991.js";const e={inputData:document.querySelector("#datetime-picker"),button:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let a=null,u=null,n=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){y(t)}};h("#datetime-picker",f);function y(t){a=t[0].getTime(),n=new Date().getTime(),a<n?(e.button.disabled=!0,d.show({title:"Hey",message:"Please choose a date in the future",position:"topRight",progressBarColor:"red"})):e.button.disabled=!1}e.button.disabled=!0;e.button.addEventListener("click",b);function b(){d.show({title:"Hey",message:"Timing is started ⏲️",position:"topRight",progressBarColor:"green"}),u=setInterval(()=>{n=new Date().getTime();const t=a-n;g(D(t)),e.button.disabled=!0,e.inputData.disabled=!0,a-n<1e3&&(clearInterval(u),e.inputData.disabled=!1)},1e3)}function g({days:t,hours:r,minutes:s,seconds:i}){e.days.textContent=`${t}`,e.hours.textContent=`${r}`,e.minutes.textContent=`${s}`,e.seconds.textContent=`${i}`}function D(t){const c=o(Math.floor(t/864e5)),l=o(Math.floor(t%864e5/36e5)),m=o(Math.floor(t%864e5%36e5/6e4)),p=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:l,minutes:m,seconds:p}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map