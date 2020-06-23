import Taro, { Component } from '@tarojs/taro';
// import "~taro-ui/dist/style/components/article.scss";
import './article.scss';


class Article extends Component {
    constructor() {
    }

    config = {
        navigationBarTitleText: '活动'
      };

    render() {
    const {} = this.state;
    
    return (
        <View className='container'> 
            <View className='at-article__h1'>
                这是一级标题这是一级标题
            </View>
            <Text>测试文章界面</Text>
        </View>
        );
    }

}
