class Form{
    constructor(){
        this.tital = createElement("h2")
           this.input = createInput("name")
                this.button = createButton("play")
                    this.greeting = createElement("h2")                
    }
                        hide(){
                            this.greeting.hide()
                                this.button.hide()
                                    this.input.hide()
                                        
                        }
    display(){
       
        this.tital.html("carReacinggame")
       this.tital.position(displayWidth/2 -50,0)
            this.input.position(displayWidth/2 -40,displayHeight/2 -80)

        this.button.position(displayWidth/2 + 30 ,displayHeight/2)
                                         this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
                player.name = this.input.value()
                   playerCount = playerCount + 1
                   player.index = playerCount
                       player.update()
            player.updateCount(playerCount)
        
            this.greeting.html("hello " + player.name)
                    this.greeting.position(displayWidth/2 -70,displayHeight/2)
            
        })
        
    }
}