import Loadable from '@@/Loadable'
const One = Loadable(() =>
    import ('@/pages/one'))
const Hook = Loadable(() =>
    import ('@/pages/hook'))
const Login = Loadable(() =>
    import ('@/pages/login'))
const Reg = Loadable(() =>
    import ('@/pages/reg'))
const Home = Loadable(() =>
    import ('@/pages/exam'))
const Exam = Loadable(() =>
    import ('@/pages/home'))
const Self = Loadable(() =>
    import ('@/pages/selfhook'))
export {
    One,
    Hook,
    Login,
    Self,
    Home,
    Reg,
    Exam
}