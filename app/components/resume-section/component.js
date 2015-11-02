import Ember from 'ember';

export default Ember.Component.extend({

  didRender: function() {
    $(window).scroll(function() {

      $('.resume-section').each(function() {

        const header = $('.resume-header');
        const resume = $(this);
        const windowTop = 0;
        const headerTop = header.offset().top ;
        const resumeTop = resume.offset().top;
        const headerBottom = headerTop + header.height();
        const resumeBottom = resumeTop + resume.height();

        const sectionId = Number($(this).attr('id'));
        const nextSectionId = sectionId + 1;
        const previousSectionId = sectionId - 1;

        if (headerBottom  >= resumeTop && windowTop < resumeBottom) {
          $('#' + nextSectionId).addClass('first');
          $('#' + nextSectionId).removeClass('middle');
          return $(this).css('opacity', 0);
        }
        $('#' + nextSectionId).removeClass('first');
        $('#' + nextSectionId).addClass('middle');
        return $(this).css('opacity', 1);
      });
    });
  }

});
