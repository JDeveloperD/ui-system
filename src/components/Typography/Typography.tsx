import styled from 'styled-components';
import sx, { SxProp } from '../../utils/sx';
import { ComponentProps } from '../../utils/types';

export type StyledTypographyProps = SxProp & {
  variant?: 'text1';
};

const Typography = styled('p').withConfig({
  shouldForwardProp: (prop) => !['sx'].includes(prop),
  displayName: 'Typography',
})<StyledTypographyProps>`
  margin: 0;
  ${sx}
`;

export type TypographyProps = ComponentProps<typeof Typography>;

export default Typography;
