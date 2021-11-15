import styled from  'styled-components'

export const SliderContainer = styled.section`
/* background: #00FF00; */
background: rgb(0,128,0);
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

@media screen and (max-width: 768px){
    height: 60vh;
}
`

export const Icon = styled.img`
width: 1100px;
height: 600px;
border-radius: 20px;

@media screen and (max-width:768px){
    width:55vw;
    height: 250px;
}
`
export const PrevContainer = styled.span`
position:absolute;
left: 3rem;
background:#000;
color:#fff;
padding:10px 20px;
border-radius:10px;
text-transform: capitalize;
cursor: pointer;

@media screen and (max-width: 768px){
    left:1rem;
    padding:6px 14px;
    font-size:14px;
}

&:hover {
    background:rgba(255, 255, 255, 0.6);
    color: #000;
    transition: all 0.5s ease;
}
`;
export const NextContainer = styled.span`
position:absolute;
right: 3rem;
background:#000;
color:#fff;
padding:10px 20px;
border-radius:10px;
text-transform: capitalize;
cursor: pointer;

@media screen and (max-width: 768px){
    right:1rem;
    padding:6px 14px;
    font-size:14px;
}

&:hover {
    background:rgba(255, 255, 255, 0.6);
    color: #000;
    transition: all 0.5s ease;
}
`;

export const ItemContainer = styled.div`
&.slide {
    opacity: 0;
    transition: 0.2s;
    animation-delay: 0.3s;
}

&.slideItem.active {
    opacity: 1;
    transform: scale(1.09);
    transition: all 0.2s;
    animation-delay: 2s;
}
`;