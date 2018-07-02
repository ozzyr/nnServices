import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import 'bootstrap'
import $ from 'jquery'
import {ajax} from './ajax'
import '../index.css'
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import resetOrientation from './fb-images'
loadProgressBar()
window.resetImage = resetOrientation
window.jQuery = $
window.$ = $
window.ajax = ajax