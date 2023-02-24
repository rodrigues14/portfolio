import { Icon } from '../UI';
import moon from './moon.svg'
import sun from './sun.svg'

const light = <Icon src={sun} alt="Modo claro" />
const dark =  <Icon src={moon} alt="Modo escuro" />

export default ({ theme }: {theme: boolean}) => (theme ? dark : light);