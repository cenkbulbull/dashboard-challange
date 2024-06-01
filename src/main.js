import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';

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
app.use(store);

//ui
import Icon from "@/components/atoms/Icon.vue";
import Text from "@/components/atoms/Text.vue";
import Input from "@/components/atoms/Input.vue";
import Button from "@/components/atoms/Button.vue";
import Avatar from "@/components/atoms/Avatar.vue";
import Search from "@/components/Search.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import NotificationItem from '@/components/NotificationItem.vue';
import LinkItem from "@/components/LinkItem.vue";
import Widget from "@/components/Widget"
import ChartWidget from "@/components/ChartWidget"

app.component('Icon',Icon)
app.component('Text',Text)
app.component('Input',Input)
app.component('Button',Button)
app.component('Search',Search)
app.component('Breadcrumb',Breadcrumb)
app.component('NotificationItem',NotificationItem)
app.component('Avatar',Avatar)
app.component('LinkItem',LinkItem)
app.component('Widget',Widget)
app.component('ChartWidget',ChartWidget)

//layouts
import Dashboard from "@/layouts/Dashboard.vue"
import Header from "@/layouts/Header.vue"
import Rightbar from "@/layouts/Rightbar.vue"
import Sidebar from "@/layouts/Sidebar.vue"

app.component('Dashboard',Dashboard)
app.component('Header',Header)
app.component('Rightbar',Rightbar)
app.component('Sidebar',Sidebar)

// Chart
app.component('Bar', Bar);
app.component('Line', Line);
app.component('Doughnut', Doughnut);

app.mount("#app");
