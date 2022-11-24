//引入路由组件
// import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
//引入二级路由组件
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
//路由配置信息
export default [
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    //二级路由组件
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //去支付页面，必须是从交易
      if (from.path == "/trade") {
        next();
      } else {
        //其他的路由组件而来，停留在当前页面
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //去交易页面，必须是从购物车而来
      if (from.path == "/shopcart") {
        next();
      } else {
        //其他的路由组件而来，停留在当前页面
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    ///addcartsuccess要小写
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    //显示footer
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    //路由懒加载
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
