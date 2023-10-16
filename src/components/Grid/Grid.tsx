import { styled } from 'styled-components';
import { Box } from '../Box';
import { ComponentProps } from '../../utils/types';

const Grid = styled(Box).bind({})``;

export type GridProps = ComponentProps<typeof Grid>;

export default Grid;
