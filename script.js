$(document).ready(function() {

  $json = { 
    "scenes": [
      {
        "scene_id": "s1",
        "location": "Gulmada, Tercia - Winterclad Barracks",
        "reverse_speakers": [
          "Cainas",
          "Marta"
        ],
        "known_speakers": [
          "Cainas",
          "Aescher"
        ],
        "lines": [
          {"transition": "FADE IN"},
          {"description": "Aescher stands in the training room behind a trio of recruits who take turns attacking a training dummy. The room contains several dummies on a straw-strewn floor. Crates and weapon racks line the walls."},
          {"speaker": "Aescher", "text": "Steady footwork, good. Strike now! Yusef, he’s wounded you, fall back! Hilde, cover his withdrawal."},
          {"description": "Cainas enters. Aescher glances his way."},
          {"speaker": "Aescher", "text": "Swords down, recruits. A break is well in order. Excellent work this morning. Marta, your stance in particular is much improved."},
          {"speaker": "Marta", "text": "Thank you, captain!"},
          {"description": "The recruits exit, passing Cainas, who holds up an envelope."},
          {"speaker": "Cainas", "text": "Any guesses?"},
          {"speaker": "Aescher", "text": "From Sindren to… the Proper?"},
          {"speaker": "Cainas", "text": "Right origin, wrong destination."},
          {"speaker": "Aescher", "text": "Blast. Farrongard, then?"},
          {"speaker": "Cainas", "text": "Right. Straight through western Tercia."},
          {"speaker": "Aescher", "text": "White or black cloaks? Nevermind, your face gives it away."},
          {"speaker": "Cainas", "text": "I know you hate the black cloak jobs. But this one will be easy. It’s familiar territory. We can catch them at Parvio Bridge."},
          {"description": "Aescher looks away."},
          {"speaker": "Cainas", "text": "Come on, I couldn't do this without you. I’ll even let you choose our company."},
          {"speaker": "Aescher", "text": "Delightful. My pick of the assassins, thieves, and marauders. I don’t understand why they’re having you lead so many of the black cloak raids recently."},
          {"speaker": "Aescher", "text": "It’s your name and face on the recruiting handbills. If Winterclad wants to take advantage of your reputation to keep talented sellswords from joining the imperial army, why put you at risk?"},
          {"speaker": "Cainas", "text": "There’s been an influx of Dinavede pirates turning to honest work. I don’t know the hows or whys, but Sindren’s parliament has been turning a blind eye and quietly withdrawing bounties. So…"},
          {"speaker": "Aescher", "text": "So the local merchants are hiring these ex-raiders as wainguards, and demand for Winterclad’s services dwindles."},
          {"speaker": "Cainas", "text": "There it is."},
          {"speaker": "Aescher", "text": "So it falls to us to show those merchants the error of their ways."},
          {"speaker": "Cainas", "text": "That’s what Lagria seems to intend, yes."},
          {"speaker": "Aescher", "text": "I still don’t understand why us. There are other veterans in Winterclad."},
          {"speaker": "Cainas", "text": "It’s because we’re the best. Lagria trusts us to do the job."},
          {"description": "Aescher sighs."},
          {"speaker": "Aescher", "text": "The things I do for you, brother."},
          {"transition": "PAN UP to END SCENE"}
        ]
      }
    ]
  };

  $.each($json.scenes, function(i, data){
    $('.base .scene-card').clone().html(data.location).appendTo('.lines');
    $.each(data.lines, function(j, line){
      if (line.description) {
        $('.base .description-item').clone().html(line.description).appendTo('.lines');
      }
      if (line.speaker) {
        $el = $('.base .dialogue-item').clone();
        $el.find('.text').html(line.text);
        $el.find('.speaker-name').html(line.speaker);
        if ($.inArray(line.speaker, data.known_speakers) >= 0) {
          $el.find('.speaker-img img').attr('src', 'speakers/' + line.speaker.toLowerCase() + '.png');
        }
        if ($.inArray(line.speaker, data.reverse_speakers) >= 0) {
          $el.addClass('reverse');
        }
        $el.appendTo('.lines');
      }
    });
  });


  $('.advance').on("click", function(){
    $('.lines .line:hidden').first().show();

    if (!$('.lines .line:hidden').length) {
      $('.advance').remove();
    }
  });

});