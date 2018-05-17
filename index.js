/*
* @Author: jankergg
* @Date:   2018-01-23 17:24:29
* @Last Modified by:   jankergg
* @Last Modified time: 2018-05-15 19:38:13
*/
import Components from './src/components'
import baseMixin from './src/components/form-fields/mixin/base-mixin'
import AlertPlugin from './src/plugins/alert/index.js'
import ConfirmPlugin from './src/plugins/confirm/index.js'
import ToastPlugin from './src/plugins/toast/index.js'
import LoadingPlugin from './src/plugins/loading/index.js'
import {Tab, TabItem, Loading} from './src/components/vux'

const {
  // formUnit
  formUnit,
  // form fields
  // src/components/form-fields/check
  zaTitle,
  zaSex,
  zaYesno,
  zaCheckList,
  zaCheckItem,
  zaQuestion,

  // src/components/form-fields/input
  zaInput,
  zaInputBtn,
  zaInputTxt,
  zaInputCamera,
  zaTextarea,

  // src/components/form-fields/select
  zaSelect,
  zaDate,
  zaAddress,
  zaAddressFull,

  row1Col,
  row2Col,
  row3Col
} = Components

export {
  LoadingPlugin,
  Tab, TabItem,
  AlertPlugin,
  ConfirmPlugin,
  ToastPlugin,
  baseMixin,

  // components
  formUnit,
  zaTitle,
  zaSex,
  zaYesno,
  zaCheckList,
  zaCheckItem,
  zaQuestion,
  zaInput,
  zaInputBtn,
  zaInputTxt,
  zaInputCamera,
  zaTextarea,
  zaSelect,
  zaDate,
  zaAddress,
  zaAddressFull,
  row1Col,
  row2Col,
  row3Col
}
