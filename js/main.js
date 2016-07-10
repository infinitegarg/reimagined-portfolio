//(function(){
//    var app;
//    app = angular.module('filltext',[ ]);
//    
//    app.controller('TextController', function(){
//        var skillsvalue;
//        this.skillsvalue = skillset;
//    });
//
//    var skillset =[ {
//        name : 'HTML5',
//        description : 8},
//        {
//        name : 'CSS3',
//        description : 5},
//        {
//        name : 'JavaScript',
//        description : 8} ]
//    
//})();


var skills = [
    {   name: 'HTML5',
        val: 9 },
    {   name: 'CSS3',
        val: 8 },
    {   name: 'JavaScript',
        val: 7 },
    {   name: 'jQuery',
        val: 7 },
    {   name: 'Ajax',
        val: 7 },
    {   name: 'Angular',
        val: 6 },
    {   name: 'Photoshop',
        val: 9 },
    {   name: 'Illustrator',
        val: 8 },
    {   name: 'After_Effects',
        val: 8 },
    {   name: 'Lightroom',
        val: 7 },
    {   name: '3ds_Max',
        val: 5 },
    {   name: 'Maya',
        val: 5 },
    {   name: 'Element_3D',
        val: 7 }
];


skills.forEach(function(value,index) {
    var data1 = " ";
    data1 += "<div class='container-skill'><div class='"+value.name+"'>"+value.name+"</div><div class='"+value.name+"'>"+value.name+"</div></div>";
        
   $(".skills").append(data1);
    
    var CssWebkitProperty = "-webkit-clip-path"
    var CssWebkitValue = "polygon(0% 0, "+value.val*10+"% 0, "+value.val*10+"% 100%, 0% 100%)";
    
    
    $("."+value.name).css(CssWebkitProperty,CssWebkitValue);

    }
    );