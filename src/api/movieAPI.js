import axios from 'axios';
import {apiConfig} from '../config/rootConfig'

export default axios.create({
  baseURL:apiConfig.BASE_URL
})
