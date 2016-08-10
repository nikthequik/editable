angular.module('editable', [])
.directive('makeEditable', function() {
	return {
		restrict: 'A',
		templateUrl: 'editable.html',
		transclude: true,
		scope: true,
		link: function(scope, el, attrs) {
			scope.editing = false;
			el.css({paddingTop: '0.6em', position: 'relative'});

			scope.toggleEditMode = function() {
				scope.editing = !scope.editing;
				scope.editButton = el.find('button.editButton');
				
				if (scope.editing == true) {
					scope.editButton.siblings('*').attr('contenteditable', 'true');
					scope.editButton.text('Save');
				} else {
					scope.editButton.siblings('*').attr('contenteditable', 'false');
					scope.editButton.text('Edit');
				}
			}
		}
	}
});
