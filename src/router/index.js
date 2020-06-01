import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import HeadingDetail from '../components/listing/HeadingDetail';
import History from '../components/listing/history';

Vue.use (VueRouter);

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/detail/:id',
      component: HeadingDetail,
      name: 'heading-detail',
    },
    {
      path: '/history',
      component: History,
      name: 'history-component',
    },
  ],
});

router.path = routeName => {
  return router.matcher.match ({name: routeName}).path;
};

export default router;
