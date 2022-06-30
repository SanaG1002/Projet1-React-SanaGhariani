import TextSize from "./TextSize";
import BackgroundTheme from "./BackgroundTheme"; 
import CardBig  from "./CardBig";
import CardSmall from "./CardSmall";
import PercentStyle from "./PercentStyle";
import FacebookComponent from "./FacebookComponent";
import YoutubeComponent from "./YoutubeComponent";
import TwiterComponent from "./TwiterComponent";
import InstagramComponent from "./InstagramComponent";
import DisplayPage  from "./DisplayPage";


function App() {
  return (
    <div className="App">
 
        <BackgroundTheme>
          <DisplayPage as="displayHead">
            <DisplayPage as="displayTitle"> 
            <TextSize as="h1">Social Media Dashboard </TextSize>
            <TextSize as="p">Total Followers : 23.004 </TextSize>
            </DisplayPage>
          </DisplayPage>

          <DisplayPage as="displayCard" >
          <CardBig > 
            <FacebookComponent /> 
            <TextSize as="p">@nathanf</TextSize>
            <TextSize as="numberBig">1987</TextSize >
            <TextSize as="followerStyle">Followers </TextSize>
            <PercentStyle as="colorGreen">12 Today </PercentStyle>
          </CardBig>

          <CardBig > 
            <TwiterComponent /> 
            <TextSize as="p">@nathanf</TextSize>
            <TextSize as="numberBig" >1044</TextSize >
            <TextSize as="followerStyle">Followers </TextSize>
            <PercentStyle as="colorGreen">99 Today </PercentStyle>
          </CardBig>

          <CardBig > 
            <InstagramComponent />
            <TextSize as="p">@realnathanf</TextSize>
            <TextSize as="numberBig">11k</TextSize >
            <TextSize as="followerStyle">Followers </TextSize>
            <PercentStyle as="colorGreen">1099 Today </PercentStyle>
          </CardBig>

          <CardBig > 
            <YoutubeComponent />
            <TextSize as="p">Nathan F.</TextSize> 
            <TextSize as="numberBig">8239</TextSize >
            <TextSize as="followerStyle">Followers </TextSize>
            <PercentStyle as="colorRed">144 Today </PercentStyle>
          </CardBig>
          </DisplayPage>

          <TextSize as="h2">Overview-Today</TextSize>

          <DisplayPage as="displayCard" >
          <CardSmall>
            <TextSize as="p">Page Views </TextSize>
            <FacebookComponent /> 
            <TextSize as="numberSmall">87</TextSize >
            <PercentStyle as="colorGreen">3% </PercentStyle>
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Likes </TextSize>
            <FacebookComponent />   
            <TextSize as="numberSmall">52</TextSize >
            <PercentStyle as="colorRed">2% </PercentStyle>
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Likes </TextSize>
            <InstagramComponent />  
            <TextSize as="numberSmall">5462</TextSize >
            <PercentStyle as="colorGreen">2257% </PercentStyle> 
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Profile Views</TextSize>
            <InstagramComponent /> 
            <TextSize as="numberSmall">52k</TextSize >
            <PercentStyle as="colorGreen">1375%</PercentStyle>
          </CardSmall>
          
          </DisplayPage>

          <DisplayPage as="displayCard" >
          <CardSmall>
            <TextSize as="p">Retweets</TextSize>
            <TwiterComponent />  
            <TextSize as="numberSmall">117</TextSize >
            <PercentStyle as="colorGreen">303% </PercentStyle> 
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Likes</TextSize>
            <TwiterComponent />  
            <TextSize as="numberSmall">507</TextSize >
            <PercentStyle as="colorGreen">553% </PercentStyle> 
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Likes</TextSize>
            <YoutubeComponent />  
            <TextSize as="numberSmall">107</TextSize >
            <PercentStyle as="colorRed">19% </PercentStyle>
          </CardSmall>

          <CardSmall>
            <TextSize as="p">Total Views</TextSize>
            <YoutubeComponent />  
            <TextSize as="numberSmall">1407</TextSize >
            <PercentStyle as="colorRed">12% </PercentStyle>
          </CardSmall>
          </DisplayPage>
        </BackgroundTheme>
     
    </div>
  );
}

export default App;
