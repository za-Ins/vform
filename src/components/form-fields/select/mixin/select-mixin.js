/*
* @Author: jankergg
* @Date:   2017-09-13 15:41:02
* @Last Modified by:   jankergg
* @Last Modified time: 2018-04-26 19:06:48
*/
import base from '../../mixin/base-mixin'
export default {
  data () {
    return {
      innerValue: [],
      autoTrigger: this.formModel.rules.autoTrigger
    }
  },
  mixins: [base],
  created () {
    this.convertValueType()
    this.selectInit()
  },
  computed: {
    list () {
      return this.formModel.rules.options || []
    },
    showName () {
      return this.formModel.rules.showName || false
    },
    placeholder () {
      return this.formModel.rules.placeholder || '请选择'
    },
    isValid () {
      if (!this.formModel.rules.vRules || this.formModel.rules.vRules.indexOf('required') == -1) {
        return true
      }
      return !!(this.innerValue && this.innerValue.length)
    }
  },
  methods: {
    // 根据组件转换innerValue数据类型
    convertValueType () {
      let val = ''
      if (typeof this.formModel.value === 'string') {
        // 组件需要什么类型
        val = typeof this.innerValue === 'string' ? this.formModel.value : [this.formModel.value]
      } else if (Array.isArray(this.formModel.value)){
        // 组件需要什么类型
        val = typeof this.innerValue === 'string' ? this.formModel.value[0] : this.formModel.value
      } else {
        val = typeof this.innerValue === 'string' ? '' : []
      }
      if (val[0] == '') {
        this.innerValue = []
      } else {
        this.innerValue = val
      }
    },
    selectInit () {
      this.onValidate()
      this.commit()
    },
    // popup show
    onShow (v) {
      // this.onEvent('onShow', v)
    },
    // popup hide
    onHide () {
      let neo = this.__str(this.innerValue)
      if (neo !== this.__oldValue) {
        // 必须
        // vux 不同类型的组件，onHide触发时间不一致
        // 这里放到下一个Tick，对齐
        this.$nextTick(() => {
          this.onEvent('onChange', {
            name: this.name,
            event: null,
            type: 'change',
            triggerType: 'onHide',
            value: this.innerValue
          })
        })
      }
    },
    onChange (v) {
      let neo = this.__str(v)
      if (neo !== this.__oldValue) {
        this.innerValue = v
        this.onValidate()
        this.commit()
        this.$nextTick(() => {
          this.__oldValue = neo
        })
      }
    }
  }
}
