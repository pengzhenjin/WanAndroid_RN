import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';
import Touchable from './Touchable';
import { Icon } from 'react-native-elements';

class ArticleItemRow extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {item, onCollectFunc} = this.props;
        return (
            <View style={styles.item_container}>
                <Text numberOfLines={2} style={styles.item_desc_text}>
                    {item.desc}
                </Text>
                <View style={styles.item_more_container}>
                    <Touchable isPreventDouble={false} onPress={onCollectFunc}>
                        <Icon
                            name='favorite'
                            type='material'
                            size={32}
                            color={item.collect ? Color.COLLECT : Color.ICON_GRAY}
                        />
                    </Touchable>
                    <Text numberOfLines={1} style={styles.item_date_text}>
                        {item.niceDate}
                    </Text>
                    <Text numberOfLines={1} style={styles.item_author_text}>
                        {item.author || item.shareUser || item.chapterName}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item_container: {
        alignItems: 'flex-start',
    },
    item_desc_text: {
        fontSize: 16,
        color: Color.TEXT_DARK,
        marginVertical: 10,
    },
    item_more_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_date_text: {
        maxWidth: 110,
        fontSize: 16,
        color: Color.TEXT_LIGHT,
        marginLeft: 10,
        marginRight: 10,
    },
    item_author_text: {
        fontSize: 16,
        color: Color.TEXT_LIGHT,
        maxWidth: 100,
    },
});

ArticleItemRow.propTypes = {
    item: PropTypes.object.isRequired,
    onCollectFunc: PropTypes.func.isRequired, // 收藏
};

ArticleItemRow.defaultProps = {
    item: null,
    onCollectFunc: () => {
    },
};

export default ArticleItemRow;
