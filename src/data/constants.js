import airpodsImage from '../assets/products/airpods.jpg';
import btspeaker from '../assets/products/btspeaker.jpg';
import phonestand from '../assets/products/phonestand.webp';
import watch from '../assets/products/watch.jpg';
import portablecharger from '../assets/products/portablecharger.webp';

export function products() {
     return [
          {
               id: 1,
               name: 'Apple AirPods',
               price: 150,
               stock: 50,
               image: airpodsImage,
          },
          {
               id: 2,
               name: 'Smartphone Stand',
               price: 25,
               stock: 200,
               image: phonestand,
          },
          {
               id: 3,
               name: 'Portable Charger',
               price: 45,
               stock: 150,
               image: portablecharger,
          },
          {
               id: 4,
               name: 'Bluetooth Speaker',
               price: 80,
               stock: 100,
               image: btspeaker,
          },
          {
               id: 5,
               name: 'Smartwatch',
               price: 200,
               stock: 75,
               image: watch,
          }
     ];
}
