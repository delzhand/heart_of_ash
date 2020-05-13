$(document).ready(function() {

  var json = { 
    "known_speakers": [
      "Cainas",
      "Aescher"
    ],
    "scenes": [
      {
        "scene_id": "s1",
        "location": "Gulmada, Tercia - Winterclad Barracks",
        "reverse_speakers": [
          "Cainas",
          "Marta"
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
      },
      {
        "scene_id": "s2/b1",
        "location": "Gulmada, Tercia - Parvio Bridge",
        "reverse_speakers": [
          "Guard 1",
          "Guard 2",
          "Aescher"
        ],
        "lines": [
          {"description": 'Rain pours down on Aescher and Cainas, wearing dark cloaks and standing in the middle of a stone bridge with their mercenary allies. A crude barrier blocks the road. A pair of guards enter the scene from the far end.'},
          {"speaker": "Guard 1", "text": "Uhl’domin! The Gar-Azul! I might have known."},
          {"speaker": "Guard 2", "text": "After all the trouble we went to, avoiding the highroad..."},
          {"speaker": "Cainas", "text": "Why bother avoiding the highroad if you weren’t going to ford the river?"},
          {"speaker": "Guard 1", "text": "Halt the wagons! Defend the caravan!"},
          {"description": "Guard 2 whistles and three more guards enter the scene."},
          {"description": "Battle ensues."},
          {"speaker": "Cainas", "text": "That’s the last of the guards. All that remains is to terrify the merchants, let loose the horses, and destroy the wagons."},
          {"speaker": "Aescher", "text": "I hate this part. Villainy doesn’t suit either of us."},
          {"description": "Aescher moves towards the wagons."},
          {"speaker": "Aescher", "text": "What are they transporting, anyway?"},
          {"speaker": "Cainas", "text": "Timber and grain. Not much for victory spoils, but at least it all burns."},
          {"speaker": "Aescher", "text": "Grain? Cainas…"},
          {"description": "Cainas looks away."},
          {"speaker": "Aescher", "text": "Cainas Allesander! That’s food! Food the people in Farrongard need!"},
          {"speaker": "Cainas", "text": "Not this again…"},
          {"speaker": "Aescher", "text": "Brother, I can’t keep doing this. People depend on these shipments. This is one step away from taking food from the mouths of the poor."},
          {"speaker": "Cainas", "text": "Why didn’t you ask what the shipment was before we left?"},
          {"speaker": "Aescher", "text": "I thought it was steel or spices or—or—fucking gemstones! I don’t know! I assumed you’d tell me if it was something like this!"},
          {"speaker": "Cainas", "text": "No you didn’t! You didn’t ask because you didn’t want to know until it was already done! Because you were always going to do it, and you didn’t want to feel bad until afterwards!"},
          {"speaker": "Aescher", "text": "For you! How dense can you be!? Do you imagine that, had you not dragged me into this business, I would be standing in a muddy Malhaven by-road in the middle of the night, with blood still wet on my blade?"},
          {"speaker": "Cainas", "text": "We need the money, Ash."},
          {"description": "Aescher turns and walks away, then pauses."},
          {"speaker": "Aescher", "text": "You need the money, Cainas. You think you’ll buy back the ancestral home and restore our family name and everything will be bright."},
          {"speaker": "Aescher", "text": "And maybe you’ll be right. But the way things are going, I won’t be there with you."},
          {"description": "AESCHER exits the scene."}
        ]
      }
    ]
  };
      
  $.each(json.scenes, function(i, data){
    $('.base .scene-card').clone().html(data.location).appendTo('.lines');
    $.each(data.lines, function(j, line){
      if (line.description) {
        $('.base .description-item').clone().html(line.description).appendTo('.lines');
      }
      if (line.speaker) {
        $el = $('.base .dialogue-item').clone();
        $el.find('.text').html(line.text);
        $el.find('.speaker-name').html(line.speaker);
        if ($.inArray(line.speaker, json.known_speakers) >= 0) {
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
    $el = $('.lines .line:hidden').first().fadeIn(600);
    if (!$('.lines .line:hidden').length) {
      $('.advance').remove();
    }
    $('.lines')[0].scrollIntoView({behavior: "smooth", block: "end"});
  });

});