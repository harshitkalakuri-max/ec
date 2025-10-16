import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics-report-page',
  templateUrl: './analytics-report-page.component.html',
  styleUrls: ['./analytics-report-page.component.css'],
  standalone: true
})
export class AnalyticsReportPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createCharts();
  }

  createCharts(): void {
    // Sales Rate Chart
    const salesCtx = (document.getElementById('salesChart') as HTMLCanvasElement).getContext('2d');
    if (salesCtx) {
      new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [12000, 19000, 3000, 5000, 2000, 3000],
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              display: false
            },
            x: {
              display: false
            }
          }
        }
      });
    }

    // Revenue Chart
    const revenueCtx = (document.getElementById('revenueChart') as HTMLCanvasElement).getContext('2d');
    if (revenueCtx) {
      new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue',
            data: [10000, 15000, 20000, 25000, 30000, 35000],
            backgroundColor: 'rgba(23, 162, 184, 0.8)',
            borderColor: 'rgba(23, 162, 184, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              display: false
            },
            x: {
              display: false
            }
          }
        }
      });
    }

    // Product Performance Chart
    const productCtx = (document.getElementById('productChart') as HTMLCanvasElement).getContext('2d');
    if (productCtx) {
      new Chart(productCtx, {
        type: 'doughnut',
        data: {
          labels: ['Headphones', 'Laptops', 'Phones', 'Tablets'],
          datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
              'rgba(255, 193, 7, 0.8)',
              'rgba(255, 193, 7, 0.6)',
              'rgba(255, 193, 7, 0.4)',
              'rgba(255, 193, 7, 0.2)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // User Engagement Chart
    const userCtx = (document.getElementById('userChart') as HTMLCanvasElement).getContext('2d');
    if (userCtx) {
      new Chart(userCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Users',
            data: [1200, 1900, 3000, 5000],
            borderColor: 'rgba(108, 117, 125, 1)',
            backgroundColor: 'rgba(108, 117, 125, 0.1)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              display: false
            },
            x: {
              display: false
            }
          }
        }
      });
    }

    // Order Trends Chart
    const orderCtx = (document.getElementById('orderChart') as HTMLCanvasElement).getContext('2d');
    if (orderCtx) {
      new Chart(orderCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Orders',
            data: [50, 75, 100, 125, 150, 175, 200],
            borderColor: 'rgba(40, 167, 69, 1)',
            backgroundColor: 'rgba(40, 167, 69, 0.3)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              display: false
            },
            x: {
              display: false
            }
          }
        }
      });
    }

    // Inventory Status Chart
    const inventoryCtx = (document.getElementById('inventoryChart') as HTMLCanvasElement).getContext('2d');
    if (inventoryCtx) {
      new Chart(inventoryCtx, {
        type: 'pie',
        data: {
          labels: ['In Stock', 'Low Stock', 'Out of Stock'],
          datasets: [{
            data: [72, 23, 5],
            backgroundColor: [
              'rgba(220, 53, 69, 0.8)',
              'rgba(255, 193, 7, 0.8)',
              'rgba(108, 117, 125, 0.8)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }
}


