import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'RelewayBold';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    background-color: #8F53BF;
    padding: 24px 16px 16px 16px;

}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1{
    font-family: 'SairaStencilOne', sans-serif;
    font-size: 32px;
    line-height: 50px;
    color:#FFFFFF;
}

h2{
    font-family: 'RelewayBold';
    font-size: 26px;
    line-height: 31px;
    color:#FFFFFF;
    font-weight: 700;
}

input:focus, textarea:focus, select:focus{
        outline: none;
    }

*{
    box-sizing: border-box;
}
button{
  cursor: pointer;
  background-color: inherit;
  border: none;
}
`;

export default GlobalStyle;
