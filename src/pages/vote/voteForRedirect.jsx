import Taro, { Component } from '@tarojs/taro'
import {AtButton, AtCard, AtForm, AtInput, AtImagePicker, AtCheckbox, AtTextarea } from 'taro-ui'
import { View, Text } from '@tarojs/components'
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
      questionTitle: '',
      options: ["",""],
      detailedInfo: "",
      files: [],
      timeLimit:"",
      peopleRequired:100,
      checkedSettings:["anonymous","visile"]
    }

    this.checkedSettings = [{
      value: 'anonymous',
      label: '是否匿名',
    },{
      value: 'visible',
      label: '是否允许他人直接查看结果'
    }]
  }
  handleChange (value) {
    this.setState({
      questionTitle
    })
  }

  handleDetailInfo (value) {
    this.setState({
      detailedInfo
    })
  }

  handleAddOption(value) {
    this.setState((state, props) => ({
      options: [...state.options, ""]
    }));
  }
  onSubmit (event) {
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }

  onImageChange (files) {
    this.setState({
      files
    })
  }

  onTimeSettingChange(value) {
    this.setState({
      timeLimit
    })
  }

  onNumPeopleRequiredChange(value) {
    this.setState({
      peopleRequired
    })
  }

  handleCheckedSettings (value) {
    this.setState({
      checkedSettings: value
    })
  }

  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }

  render () {
    return (
      <View>
      <AtCard title='提出我的问题'>
       <AtInput
        name='questionTitle'
        type='text'
        placeholder='输入我的问题'
        required={true}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        />
        <AtTextarea name='detailedInfo' placeholder='输入详细问题描述'  
        value={this.state.detailedInfo} maxLength={200} 
        height={80}  
        onChange={this.handleDetailInfo.bind(this)}></AtTextarea>
      
        <View className='optionWrapper'>
          <View className='optionButton'>
            <AtButton circle={true} size='small'> Yes
            </AtButton>
          </View>
          <View className='optionText'>
            <AtInput
            name='options1'
            type='text'
            placeholder='选项具体描述'
            required={true}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          </View>
       </View>
        <View className='optionWrapper'>
          <View className='optionButton'>
          <AtButton circle={true} size='small'> No
          </AtButton>
          </View>
          <View className='optionText '>
            <AtInput
            name='options1'
            type='text'
            placeholder='选项具体描述'
            required={true}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          </View>
        </View>
        <View className="imageBox">
          <View className="image">
          <AtImagePicker
            length={1}
            files={this.state.files}
            onChange={this.onImageChange.bind(this)}
            onFail={this.onFail.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
          />
          </View>
        </View>

        <View className='at-row'>
          <View className='at-col at-col__offset-1'>
            <AtButton 
              name='tag-1' 
              type='primary' 
              circle
              size='small' 
              onClick={this.onTimeSettingChange.bind(this)}
            >
              Vote时间设置  
              </AtButton>
          </View>
          <View className='at-col at-col__offset-2'>
            <AtButton 
              name='tag-1' 
              type='secondary' 
              circle 
              size='small' 
              onClick={this.onNumPeopleRequiredChange.bind(this)}
            >
              Vote人数设置  
            </AtButton>
          </View>
        </View>
      <View className='settingArea'>
        <View className='checkedSetting'>
        <AtCheckbox
          options={this.checkedSettings}
          selectedList={this.state.checkedSettings}
          onChange={this.handleCheckedSettings.bind(this)}
        />
        </View>
        <View className='checkedSetting'>
          <View margin="auto auto">
            <AtButton
                type='primary' 
                circle
                size='big' 
                onClick={this.onSubmit.bind(this)}
              >
                发布
            </AtButton>
          </View>
        </View>
      </View> 
      {/* <AtSwitch title='允许多选' checked={this.state.value} onChange={this.handleChange} /> */}
      </AtCard>
      {/* {this.state.options.map((value, index) => {
        return <AtInput
            name='value'
            title=''
            type='text'
            placeholder={index}
            value={value}
            onChange={this.handleChange.bind(this)}
      />
      })} */}
      {/* <AtButton type='secondary' onClick={this.handleAddOption.bind(this)}>增加选项</AtButton> */}

{/* 
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton> */}

      </View>
    )
  }
}
