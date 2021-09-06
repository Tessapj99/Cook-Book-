import axios from "axios";
 
export const fetchFoods = () => {
    return axios.get('https://yummly2.p.rapidapi.com/feeds/list?start=0&limit=10&tag=list.recipe.popular', {
        headers: {
    'x-rapidapi-host': 'yummly2.p.rapidapi.com',
    'x-rapidapi-key': '453c5638d3msh6f1e76947dc9343p1ade49jsnd71d400d884f'
        }
    })
}