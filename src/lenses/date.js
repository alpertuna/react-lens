import dateFormat from 'dateformat';
import make from '../make';

export default make('date', Date, (content, format = 'dd.mm.yyyy') => dateFormat(content, format));
