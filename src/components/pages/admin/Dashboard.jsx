/* // import { Chart } from "tw-elements/js/chart.es.min.js";

const Dashboard = () => {

  const dataBarDarkMode = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Traffic",
          data: [30, 15, 62, 65, 61, 65, 40],
        },
      ],
    },
  };
  
  const optionsDarkMode = {
    options: {
      scales: {
        y: {
          ticks: {
            color: "rgb(100,50,200)",
          },
          grid: {
            display: false,
          },
        },
        x: {
          ticks: {
            color: "yellow",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "green",
          },
        },
      },
    }
  };
  
  // new Chart(
  //   document.getElementById("darkmode-customization"),
  //   dataBarDarkMode,
  //   {},
  //   optionsDarkMode
  // );

  return (
    <>
      <div class="mx-auto w-11/12 overflow-hidden md:w-3/5">
        <canvas id="darkmode-customization"> </canvas>
      </div>
    </>
  )
}

export default Dashboard;*/

import React from 'react';
import { CookingPot, ListOrdered, Star, Users } from 'lucide-react';
import OutChart from '../../shared/OutChart';
import Header from '../../shared/Header';

const Dashboard = () => {
  return (
    <div className="">
      <Header title='Dashboard' />
        <div className="mx-auto max-w-7xl py-6">
          <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-4 mt-8 sm:grid-cols-2 sm:px-8">
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-green-400">
                <Users className='w-10 h-11 text-white' />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Utilisateur</h3>
                <p className="text-3xl">{1 + 2}</p>
              </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-blue-400">
                <ListOrdered className='w-10 h-11 text-white' />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Commande</h3>
                <p className="text-3xl">{1 + 2}</p>
              </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-indigo-400">
                <CookingPot className='w-10 h-11 text-white' />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total repas</h3>
                <p className="text-3xl">{1 + 2}</p>
              </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
              <div className="p-4 bg-red-400">
                <Star className='w-10 h-11 text-white' />
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Nombre d'avis</h3>
                <p className="text-3xl">{1 + 2}</p>
              </div>
            </div>
          </div>
          <OutChart />
        </div>
    </div>
  );
}

export default Dashboard;

