var PoPreview = angular.module('popreview', []);

PoPreview.directive('popreview', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: {
      previewImage: '@previewImage',
      previewTitle: '@previewTitle',
      previewExtra: '@previewExtra'
    },
    link: function(scope, elem) {
      var preview = elem.find('.popreview-container');
      preview.css({
        left: -(preview.width() * 0.5)
      });

      scope.popup = false;

      elem
        .on('mouseenter', function() {
          scope.popup = true;
          scope.$apply();
        })
        .on('mouseleave', function() {
          scope.popup = false;
          scope.$apply();
        });
    },
    template: ''.concat(
      '<a class="popreview">',
      '<div class="popreview-container" ng-show="popup">',
      '<img ng-src="{{ previewImage }}">',
      '<h4>{{ previewTitle }}</h4>',
      '<small class="popreview-extra">{{ previewExtra }}</small>',
      '</div>',
      '<span class="popreview-content" ng-transclude></span>',
      '</a>'
    )
  }
});