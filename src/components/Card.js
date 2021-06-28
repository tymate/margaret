import styled, { css } from 'styled-components';
import Stack from './Stack';

const Card = styled(Stack).attrs({
  direction: 'column',
  padding: 1,
})`
  border: ${({ theme }) => theme.card?.border};
  box-shadow: ${({ theme }) => theme.card?.boxShadow};
  border-radius: ${({ theme }) => theme.card?.borderRadius};
  background: ${({ theme }) => theme.card?.background};
  width: ${({ theme }) => theme.card?.size};

  &:hover {
    border: ${({ theme }) => theme.card?.borderHover};
    color: ${({ theme }) => theme.card?.colorHover};
    box-shadow: ${({ theme }) => theme.card?.boxShadowHover};
    background: ${({ theme }) => theme.card?.backgroundHover};
  }

  ${({ variant }) =>
    Boolean(variant) &&
    css`
      border: ${({ theme }) =>
        theme.card?.[variant]?.border || theme.card?.border};
      box-shadow: ${({ theme }) =>
        theme.card?.[variant]?.boxShadow || theme.card?.boxShadow};
      border-radius: ${({ theme }) =>
        theme.card?.[variant]?.borderRadius || theme.card?.borderRadius};
      background: ${({ theme }) =>
        theme.card?.[variant]?.background || theme.card?.background};
      width: ${({ theme }) => theme.card?.[variant]?.size || theme.card?.size};

      &:hover {
        background: ${({ theme }) =>
          theme.card?.[variant]?.backgroundHover ||
          theme.card?.[variant]?.background};
        border: ${({ theme }) =>
          theme.card?.[variant]?.borderHover || theme.card?.[variant]?.border};
        box-shadow: ${({ theme }) =>
          theme.card?.[variant]?.boxShadowHover ||
          theme.card?.[variant]?.boxShadow};
        transform: ${({ theme }) => theme.card?.[variant]?.transformHover};
      }
    `}
`;

const CardTitle = styled(Text).attrs({ type: 'heading' })``;

const CardSubtitle = styled(Text).attrs({ color: 'textLight' })``;

// const Card = ({
//   title,
//   subtitle,
//   fixedSize,
//   children,
//   variant,
//   alignment,
//   thumbnailUrl,
//   header,
//   footer,
//   description,
//   ...props
// }) => (
//   <CardWrapper fixedSize={fixedSize} variant={variant} {...props}>
//     {(thumbnailUrl || header) && (
//       <CardHeader thumbnailUrl={thumbnailUrl}></CardHeader>
//     )}
//     <CardContent alignment={alignment}>
//       {title && <CardTitle>{title}</CardTitle>}
//       {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
//       {description && <CardDescription>{description}</CardDescription>}
//       {children}
//     </CardContent>
//     {footer && <CardFooter>{footer}</CardFooter>}
//   </CardWrapper>
// );

// Card.defaultProps = {
//   alignment: 'left',
// };

// Card.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   fixedSize: PropTypes.number,
//   children: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//   ]).isRequired,
//   variant: PropTypes.oneOf(['raised', 'subtle', 'link']),
//   alignment: PropTypes.oneOf(['center']),
//   thumbnailUrl: PropTypes.string,
//   footer: PropTypes.node,
// };

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export default Card;
