import ContestIndex from "../pages/Contest/Contest.index";
import ExploreIndex from "../pages/Explore/Explore.index";
import HomeIndex from "../pages/Home/Home.index";
import ProblemIndex from "../pages/Problem/Problem.index";



const routesIndex = [
    {
        path: '/home',
        main: <HomeIndex />
    },
    {
        path: '/explore',
        main: <ExploreIndex />
    },
    {
        path: '/contest',
        main: <ContestIndex />
    },
    {
        path: 'problems',
        main: <ProblemIndex />
    }
]


export default routesIndex;