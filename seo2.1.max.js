/*
 * JQUERY ALL ONE SEO MAX WIZARD
 * Author: @jp00p
 * DON'T LOOK AT MY SECRET ALGORITHM
 */

;(function( $, window, document, undefined ){

  // our plugin constructor
  var SEO = function( elem, options ){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;
      this.metadata = this.$elem.data( "plugin-options" );
    };


  SEO.prototype = {
    defaults: {
      // TRADERIGHTED LIST OF SECRET TOP KEYWORDS FOR THE GOOGLE/BINGS
      keywordz: "aggregate architect benchmark brand cultivate deliver deploy disintermediate drive e-enable embrace empower enable engage engineer enhance envisioneer evolve expedite exploit extend facilitate generate grow harness implement incentivize incubate innovate integrate iterate leverage matrix maximize mesh monetize morph optimize orchestrate productize recontextualize redefine reintermediate reinvent repurpose revolutionize scale seize strategize streamline syndicate synergize synthesize target transform transition unleash utilize visualize whiteboard 24/365 24/7 B2B B2C back-end best-of-breed bleeding-edge bricks-and-clicks clicks-and-mortar collaborative compelling cross-platform cross-media customized cutting-edge distributed dot-com dynamic e-business efficient end-to-end enterprise extensible frictionless front-end global granular holistic impactful innovative integrated interactive intuitive killer leading-edge magnetic mission-critical next-generation one-to-one open-source out-of-the-box plug-and-play proactive real-time revolutionary rich robust scalable seamless sexy sticky strategic synergistic transparent turn-key ubiquitous user-centric value-added vertical viral virtual visionary web-enabled wireless world-class action-items applications architectures bandwidth channels communities content convergence deliverables e-business e-commerce e-markets e-services e-tailers experiences eyeballs functionalities infomediaries infrastructures initiatives interfaces markets methodologies metrics mindshare models networks niches paradigms partnerships platforms portals relationships ROI synergies web-readiness schemas solutions supply-chains systems technologies users vortals web services",
      factorz: 5
    },

    init: function() {
      this.config = $.extend({}, this.defaults, this.options,
      this.metadata);
      console.log(this.config)
      
      werdz = this.config.keywordz.split(' ');
        werdz.sort(function() {return 0.5 - Math.random()});
        for(var i=0;i<=this.config.factorz;i++){
          werdz.sort(function() {return 0.5 - Math.random()});
          // secret, don't tell
          $("<META NAME='KEYWORDS' VALUE='"+werdz+"'>").appendTo("head");
          // shhhhhhhhhhhhhhhhh
          $("<DIV ID='SEOWIZARD_SECRET_KEYWORDS'>").html("<H1>"+werdz.join(" ")+"</H1>").appendTo("html,body").css({ 'background': '#fff', 'color' : '#fff', 'text-align' : 'center', 'display' : 'inline-block' });
          // google can never know
        }
        console.log("DID YOU FEEL THAT?  YOUR PAGE JUST MOVED ON BINGS/GOOGLES");
      return this;
    }
  }

  SEO.defaults = SEO.prototype.defaults;

  $.fn.SEO = function(options) {
    return this.each(function() {
      new SEO(this, options).init();
    });
  };

})( jQuery, window , document );
