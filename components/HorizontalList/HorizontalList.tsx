import React from 'react';
import {View, FlatList, Text, ListRenderItem} from 'react-native';
import {styles} from './styles';

interface HorizontalListProps {
  title: string;
  data: any[];
  renderItem: ListRenderItem<any>;
  onEndReached?: () => void;
  testID?: string;
}
let i = 0;
const HorizontalList: React.FC<HorizontalListProps> = ({
  title,
  data,
  renderItem,
  onEndReached,
  testID,
}) => {
  return (
    <View>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        testID={testID}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        onEndReached={onEndReached}
        renderItem={renderItem}
        keyExtractor={() => '' + i++}
      />
    </View>
  );
};

export default HorizontalList;
