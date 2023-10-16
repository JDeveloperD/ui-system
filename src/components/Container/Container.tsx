import { styled } from 'styled-components';
import { ComponentProps } from '../../utils/types';
import { SxProp } from '../../utils/sx';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type StyledContainerProps = SxProp & {
  maxWidth?: MaxWidth;
  disableGutters?: boolean;
};

const Container = styled('div').withConfig({
  displayName: 'Container',
})<StyledContainerProps>((props) => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  ...(!props.disableGutters && {
    paddingLeft: props.theme.space[4],
    paddingRight: props.theme.space[4],
  }),
}));

export type ContainerProps = ComponentProps<typeof Container>;

export default Container;
