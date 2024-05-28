import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS (Optional)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Remixicon
import 'remixicon/fonts/remixicon.css';

// Chartjs
import { Chart as ChartJS, CategoryScale, RadialLinearScale, ArcElement, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Doughnut } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const app = createApp(App);

app.use(router);

// Chart
app.component('Bar', Bar);
app.component('Line', Line);
app.component('Doughnut', Doughnut);

app.mount("#app");
