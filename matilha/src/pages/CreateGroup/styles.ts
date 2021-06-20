import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface WeekDayProps {
  selected: boolean;
}

export const Header = styled.View`
  padding: 24px;
  background: #1b1b1e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
`;

export const Title = styled.Text`
  font-size:21px;
  color: #fff;
  font-family: 'TradeWinds-Regular';
`;

export const Weekday = styled(RectButton)<WeekDayProps>`
  padding: 10px 10px;
  margin-left: 5px;
  background: ${props => props.selected ? '#bd0507' : '#262529'};
  borderRadius: 10px;
`;

export const TitleDay = styled.Text`
  font-size:14px;
  color: #fff;
  font-family: 'TradeWinds-Regular';
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'TradeWinds-Regular';
  margin: 0 24px 12px
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showHorizontalScrollIndicator: false,
})``;

export const Content = styled.ScrollView``;