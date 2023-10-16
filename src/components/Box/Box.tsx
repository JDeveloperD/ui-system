import styled from 'styled-components';
import sx, { SxProp } from '../../utils/sx';
import { ComponentProps } from '../../utils/types';

const Box = styled('div').withConfig({
  shouldForwardProp: (prop) => !['sx', 'as'].includes(prop),
  displayName: 'Box',
})<SxProp>(sx);

export type BoxProps = ComponentProps<typeof Box>;

export default Box;
