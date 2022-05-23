import styled from "styled-components";

export const ContainerConteudo = styled.div`
  width: 80vw;
  height: 70vh;
  justify-content: center;
  margin-left: 17%;
  //overflow: " hidden";
  display: block;
`;
export const ContainerGame = styled.div`
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Aviao1 = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  height: 110px;
  background-color: transparent;
  font-size: 70px;
  top: 13px;
  
 
  //z-index: 3;

  //animation: aviao 1s infinite linear;
 
  @keyframes anim-star {
    from {
      transform: translatex(0px);
    }
    to {
      transform: translatex(800px);
    }
  }

  .mov {
    display: flex;
    position: relative;
    width: 60px;
    height: 60px;
    background-color: transparent;
    font-size: 70px;
    top: 50px;
    animation: anim-star 5s linear ;
  }

/*   .mov1::after {
    position: absolute;
    content: "";
    display: flex;
    position: relative;
    width: 60px;
    height: 60px;
    background-color: transparent;
    font-size: 70px;
    top: 0px;
  }  */
`;

export const Aviao2 = styled.div`

  display: flex;
  position:  absolute;
  width: 80px;
  height: 80px;
  background-color: transparent;
  left: 0px;
  font-size: 70px;
  top: 190px;
  

  //z-index: 3;

  //animation: aviao 1s infinite linear;

  @keyframes anim-star {
    from {
      transform: translatex(0px);
    }
    to {
      transform: translatex(800px);
    }
  }

  .mov {
    display: flex;
    position: relative;
    width: 60px;
    height: 60px;
    background-color: transparent;
    font-size: 70px;
    top: 18px;
    animation: anim-star 10s linear ;

 
  }
 
  /*  .mov::after {
        background-color: yellow;
      position: absolute;
      content: "";
      display: flex;
  position: relative;
  width: 60px;
  height: 60px;
  background-color: transparent;
  font-size: 70px;
  top: 120px;
    }
   */
`;


export const Chegada1 = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: transparent;
  font-size: 70px;
  top: 30px;
    left: 790px;
  `


export const Chegada2 = styled.div`
position: absolute;
width: 60px;
height: 60px;
font-size: 70px;
top: 180px;
left: 790px;
background-color: transparent;

`