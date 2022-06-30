

import Container from "./Container";
import TextSize from "./TextSize";
import ButtonMode from "./ButtonMode"; 
import CardBig  from "./CardBig";
import CardSmall from "./CardSmall";
import PercentCardeSmall from "./PercentCardeSmall";
import NumberCardBig from "./NumberCardBig";
import NumberCardSmall from "./NumberCardSmall";
import FacebookComponent from "./FacebookComponent";
import YoutubeComponent from "./YoutubeComponent";
import TwiterComponent from "./TwiterComponent";
import InstagramComponent from "./InstagramComponent";
import DisplayPage  from "./DisplayPage";


function App() {


  return (
    <div className="App">
      <Container>
        <DisplayPage as="displayHead">
          <DisplayPage as="displayTitle"> 
          <TextSize as="h1">Social Media Dashboard </TextSize>
          <TextSize as="p">Total Followers : 23.004 </TextSize>
          </DisplayPage>
          <ButtonMode />
        </DisplayPage>

        <DisplayPage as="displayCard" >
        <CardBig > 
          <FacebookComponent /> 
          <TextSize as="p">@nathanf</TextSize>
          <NumberCardBig >1987</NumberCardBig >
        </CardBig>

        <CardBig > 
          <TwiterComponent /> 
          <TextSize as="p">@nathanf</TextSize>
          <NumberCardBig >1044</NumberCardBig >
        </CardBig>

        <CardBig > 
          <InstagramComponent />
          <TextSize as="p">@realnathanf</TextSize>
          <NumberCardBig >11k</NumberCardBig >
        </CardBig>

        <CardBig > 
          <YoutubeComponent />
          <TextSize as="p">Nathan F.</TextSize> 
          <NumberCardBig >8239</NumberCardBig >
        </CardBig>
        </DisplayPage>

        <TextSize as="h2">Overview-Today</TextSize>

        <DisplayPage as="displayCard" >
        <CardSmall>
          <TextSize as="p">Page Views </TextSize>
          <FacebookComponent /> 
          <NumberCardSmall >87</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Likes </TextSize>
          <FacebookComponent />   
          <NumberCardSmall >52</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Likes </TextSize>
          <InstagramComponent />  
          <NumberCardSmall >5462</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Profile Views</TextSize>
          <InstagramComponent /> 
          <NumberCardSmall >52k</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>
        
        </DisplayPage>

        <DisplayPage as="displayCard" >
        <CardSmall>
          <TextSize as="p">Retweets</TextSize>
          <TwiterComponent />  
          <NumberCardSmall >117</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Likes</TextSize>
          <TwiterComponent />  
          <NumberCardSmall>507</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Likes</TextSize>
          <YoutubeComponent />  
          <NumberCardSmall >107</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>

        <CardSmall>
          <TextSize as="p">Total Views</TextSize>
          <YoutubeComponent />  
          <NumberCardSmall >1407</NumberCardSmall >
          <PercentCardeSmall /> 
        </CardSmall>
        </DisplayPage>
      </Container>
     
    </div>
  );
}

export default App;
