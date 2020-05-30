import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton,AtSwitch } from 'taro-ui'
import { View, Text,AtTextarea } from '@tarojs/components'
import './vote.scss'

export default class Vote extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '投票'
  }
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      options: ["",""]
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  handleAddOption(value) {
    this.setState((state, props) => ({
      options: [...state.options, ""]
    }));
  }
  onSubmit (event) {
    console.log(this.state.value)
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }

  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
        name='value'
        title='投票标题'
        type='text'
        placeholder='CS本科Offer怎么选'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
      <AtInput
        name='value'
        title=''
        type='text'
        placeholder='详细问题描述'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
      <AtSwitch title='允许多选' checked={this.state.value} onChange={this.handleChange} />

      {this.state.options.map((value, index) => {
        return <AtInput
        name='value'
        title=''
        type='text'
        placeholder={index}
        value={value}
        onChange={this.handleChange.bind(this)}
      />
      })}
      <AtButton type='secondary' onClick={this.handleAddOption.bind(this)}>增加选项</AtButton>


        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>

      </AtForm>
    )
  }
}
