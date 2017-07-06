$(function() {
    console.log('ready for DOM manipulation!');
});


// // Ex 2
// // 1
// $('#secretBox').css('background-color', 'white').html('<h1>secret box!</h1>')
//
// // 2
// $('#row1').children().addClass('boxType3').removeClass('boxType1')
//
// // 3
// $('.box').last().css('display', 'none')
//
// // 4
// $('.boxType1').css('background', 'white')
//
// // 5
// $('#row2').children().slice(0,2).removeAttr('class')
//
// // 6
// $('.box').not('#secretBox').css('width', '2px')


// Ex 3
// 1
$('#container').click(function(e) {
  var offset = $(this).offset();
  var x = e.pageX - offset.left;
  var y = e.pageY - offset.top;
  console.log(x, y)
});

// 2
var link = $('.boxType1').html('<a href="http://galvanize.com">click me!</a>');
link.click(function(e) {
  alert("you can never leave hehe")
  e.preventDefault();
})

// 3
$('.box').click(function() {
  if (!$(this)[0].innerHTML.includes('img')) {
    $(this).html('<img style="width: 150px; height: 150px" src="https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg">')
  } else {
    $(this).html('')
  }
})

// 4
$('#container').click(function(e) {
  if (e.target.className.includes('box')) {
    $(this).css('background-color', 'black');
    e.target.style.backgroundColor = 'white'
  } else {
    $(this).css('background-color', 'limegreen');
  }
})
