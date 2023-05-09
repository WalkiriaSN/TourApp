import { Icities } from "src/app/interfaces/icities";
import { Iweather } from "src/app/interfaces/iweather";

let cityInfo: Icities[]=[

    {name:"Banff", attractionSites:["hiking Trails", "Restaurants", "Lakes"]},
   
    {name:"Calgary", attractionSites:["Bow River", "Fish Creek", "Downtown"]},
    
    {name:"Waterton", attractionSites:["High Tea", "Red Rock Canyon", "lake Waterton"]},
   
    {name:"Edmonton", attractionSites:["Edmonton Mall", "Elk Island", "The Art Gallery "]},
];


let cityWeather: Iweather[]=[
{name:"Banff", springM:40, springN:23, summerM:43, summerN: 28, fallM:36, fallN: 22, winterM:25, winterN:12,visitFrom:"October", visitTo:"April"},
  
{name:"Calgary", springM:30, springN:18, summerM:35, summerN: 23, fallM:13, fallN: 21, winterM:15, winterN:5,visitFrom:"December", visitTo:"January"},
   
{name:"Waterton", springM:35, springN:17, summerM:41, summerN: 25, fallM:10, fallN: 18, winterM:10, winterN:1,visitFrom:"October", visitTo:"April"},
   
{name:"Edmonton", springM:30, springN:21, summerM:38, summerN: 29, fallM:36, fallN: 16, winterM:14, winterN:12,visitFrom:"October", visitTo:"November"}

];


export{cityInfo, cityWeather}