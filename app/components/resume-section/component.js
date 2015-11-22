import Ember from 'ember';

export default Ember.Component.extend({

  didRender: function() {
    if (!this.get('isPhone')) {
      Ember.$(window).scroll(function() {

        Ember.$('.resume-section').each(function() {

          const header = Ember.$('.resume-header');
          const resume = Ember.$(this);
          const windowTop = 0;
          const headerTop = header.offset().top ;
          const resumeTop = resume.offset().top;
          const headerBottom = headerTop + header.height() + 40;
          const resumeBottom = resumeTop + resume.height();

          const sectionId = Number(Ember.$(this).attr('id'));
          const nextSectionId = sectionId + 1;

          if (headerBottom  >= resumeTop && windowTop < resumeBottom) {
            Ember.$('#' + nextSectionId).addClass('first');
            Ember.$('#' + nextSectionId).removeClass('middle');
            return Ember.$(this).css('opacity', 0);
          }
          
          Ember.$('#' + nextSectionId).removeClass('first');
          Ember.$('#' + nextSectionId).addClass('middle');
          return Ember.$(this).css('opacity', 1);
        });
      });
    }
  }

});
