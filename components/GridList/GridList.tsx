import React from 'react';
import {View, FlatList, Text, ListRenderItem} from 'react-native';
import {styles} from './styles';
import EmptyText from './EmptyText';
interface GridListProps {
  title: string;
  data: any[];
  renderItem: ListRenderItem<any>;
  onEndReached?: () => void;
}
let i = 0;
const GridList: React.FC<GridListProps> = ({
  title,
  data,
  renderItem,
  onEndReached,
}) => {
  return (
    <View>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyText}
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          flex: 1,
        }}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={() => '' + i++}
      />
    </View>
  );
};

export default GridList;
