import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import './style/index.less'
import { IWrapHomeState } from '@/store/home/type'
import { setCommon, add, minus, asyncAdd } from '../../store/home/actions'

type PageStateProps = {
  count: number
}

type PageDispatchProps = {
  add: () => void
  minus: () => void
  asyncAdd: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps & PageState

interface IState {
  [key: string]: any
}


class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  componentDidUpdate(prexProps: any) {
    console.log(this.props, prexProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { count } = this.props

    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{count}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

const mapStateToProps = (state: IWrapHomeState) => ({
  count: state.home.count
})

const mapDispatchToProps = (dispatch: any) => ({
  setCommon: (payload: any) => dispatch(setCommon(payload)),
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  asyncAdd: () => dispatch(asyncAdd())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
