
//just for copy-to-clipboard functionality (add data-link attribute to any element)
(function() {
    function buildTween(){
    var mytween = TweenMax.to('.circle', 60, {
        ease:Linear.easeNone,
        rotation: 360, repeat:-1,
    });  
    }  
    buildTween(); 
    
      
    Draggable.create('.circle', {
        type: 'rotation',
        throwProps:true,
        repeat:1,
        onPress: function(){
          mytween.kill()
        },
        onRelease: function(){
          
        }
      });
    })();


