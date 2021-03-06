function Pipe(){
    this.top = random(height/2)
    this.bottom = random(height/2)
    this.x = width
    this.w = 30
    this.speed = 4

    this.heighlight = false

    this.hits = function(bird){
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
               this.highlight = true
               score++
                return true
                
            }
            this.highlight = false
            return false
        }
    }

    this.show = function(){
        fill(rgb(255, 248, 144))
        if (this.highlight){
            fill(rgb(255, 2, 36))
        }
        rect(this.x, 0, this.w, this.top)
        rect(this.x, height - this.bottom, this.w, this.bottom)      
    }

    this.update = function(){
        this.x -= this.speed
    }

    this.offscreen = function(){
        if(this.x < -this.w){
            return true;
        }
        else{
            return false
        }
    }
}