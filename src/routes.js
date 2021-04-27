
import CustomButton from './components/CustomButton.vue'
import PageContent from './components/PageContent.vue'
import Item from './components/Item.vue'
import ItemDetail from './components/ItemDetail.vue'
import RouterViewWrapper from './components/RouterViewWrapper';

export default[
{ path: '/', component: PageContent},
{ path: '/custom', component: CustomButton},
{ 
    path: '/item',
    component: RouterViewWrapper,
    children: [
        {
            path: ':id',
            component: Item,
            props: true,
        },
        {
            path: ':id/detail/:itemName',
            component: ItemDetail,
            props: true,
        }
    ],
},
]
