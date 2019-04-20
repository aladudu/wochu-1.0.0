export default {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/classify'),
    meta:{
      tabBarFlag:true
    },
    children:[
      {
        path:"/classify",
        redirect:"/classify/one"
      },
      {
        path:'one',
        name:'one',
        component: ()=> import('@/components/classify/one.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'two',
        name:'two',
        component: ()=> import('@/components/classify/two.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'three',
        name:'three',
        component: ()=> import('@/components/classify/three.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'four',
        name:'four',
        component: ()=> import('@/components/classify/four.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'five',
        name:'five',
        component: ()=> import('@/components/classify/five.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'six',
        name:'six',
        component: ()=> import('@/components/classify/six.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'seven',
        name:'seven',
        component: ()=> import('@/components/classify/seven.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'eight',
        name:'eight',
        component: ()=> import('@/components/classify/eight.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'nine',
        name:'nine',
        component: ()=> import('@/components/classify/nine.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'ten',
        name:'ten',
        component: ()=> import('@/components/classify/ten.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'eleven',
        name:'eleven',
        component: ()=> import('@/components/classify/eleven.vue'),
        meta:{
          tabBarFlag:true
        },
      },
      {
        path:'twelve',
        name:'twelve',
        component: ()=> import('@/components/classify/twelve.vue'),
        meta:{
          tabBarFlag:true
        },
      }
    ]
  }