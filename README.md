## My clothes weather app

** For this app I used the Open Weather API **

![img](Documents/DWD/APIs/assets/WeatherApp-02.jpg)

For this assignment I wanted to start very simple. I followed the workbook for that week and the Studio Ghibli example article as well. They both worked nicely but when I tried to modify the code or use another API the whole thing came apart. I restarted this homework twice so it was lucky that we had an extra week for it.

In the end I decided to do something a lot simpler than what I had in mind at first. I wanted to have a weather app that showed the temperture, the description of the day, the "felt like" temperature and suggestions on what you could wear depending on the temperature along with a quantity of layers. I wasn't very sure how far I would be able to go with this but I decided to try anyway. After my couple false tries I leaned heavily on the example code for the weather app that was on the homework page and used a lot of the JS structure.

I made a rough sketch so I could get an idea of where I wanted things to go.

![img](Documents/DWD/APIs/assets/IMG_4302.JPG)

Then I transferred it to a digital format:
![img](Documents/DWD/APIs/assets/WeatherApp-01.jpg)

I added some colors based on a cold and warm color palette that I thought I could use later to represent different temperatures. I also started my design with a particular font, then changed it, then went back to my original one.

![img](Documents/DWD/APIs/assets/weatherApp_StyleGuide.002.jpeg)

I struggled a little in the beginning to format my grid the way I wanted to and put the information from the API in the correct spots. Once I managed that and added the styles I wanted I went on to the JS.

Essentially I divided my "clothes icons" in three categories: winter, fall and summer and gave my code a conditional statement that would test against the current "feels like" temperature and only display the category div that I need for that particular temperature. In an ideal world where I'm a JS whiz I could have made the app change the quantity of layers and display the correct amount of clothes as opposed to a pre-set amount.

I also had very cute weather icons that matched my clothes icons to display in the center. However, after I pulled the icons from the API I couldn't figure out how to replace each one with mine. I also checked the API documentation and they had A LOT more icons than I was prepared for:

![img](Documents/DWD/APIs/assets/icons1.png)
![img](Documents/DWD/APIs/assets/icons2.png)

So I decided to use the ones from the API but I'm not thrilled about the look. I considered changing my design to match but at that point I was already really happy with my color palette and decided against it.

My other concern was that I didn't have enough time to be able to make the form responsive and react to user input. I tried watching a couple tutorials on it but I think I was a little out of my depth. I also tried to make the background change between warm and cold colors depending on temperature but my function wouldn't work as I intended either.