/*******************************************************************************
 * @license
 * Copyright (c) 2010, 2015 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*eslint-env browser, amd, mocha*/

define(["chai/chai",
		'orion/editor/textModel',
		'orion/editor/annotations',
		'orion/editor/rulers'
], function(chai, mTextModel, mAnnotations, mRulers) {
		 	
	var assert = chai.assert;

	describe("AnnotationModel", function() {

		it("1", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 0, end: 5};
			var annotation2 = {start: 10, end: 15};
			var annotation3 = {start: 20, end: 30};
			var annotation4 = {start: 25, end: 35};
			var annotation5 = {start: 40, end: 60};
			var annotation6 = {start: 35, end: 45};
			var annotation7 = {start: 35, end: 65};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			annotationModel.addAnnotation(annotation4);
			annotationModel.addAnnotation(annotation5);
			annotationModel.addAnnotation(annotation6);
			annotationModel.addAnnotation(annotation7);
			var iter;
			
			iter = annotationModel.getAnnotations(0, 30);
			assert.equal(iter.hasNext(), true);
			assert.equal(iter.next(), annotation1);
			assert.equal(iter.hasNext(), true);
			assert.equal(iter.next(), annotation2);
			assert.equal(iter.hasNext(), true);
			assert.equal(iter.next(), annotation3);
			assert.equal(iter.hasNext(), true);
			assert.equal(iter.next(), annotation4);
			assert.equal(iter.hasNext(), false);
		});
		
		it("2", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			var iter;
			
			iter = annotationModel.getAnnotations(65, 67);
			assert.equal(iter.hasNext(), true, "a1");
			assert.equal(iter.next(), annotation1, "a2");
			assert.equal(iter.hasNext(), false, "a3");
			
			iter = annotationModel.getAnnotations(40, 41);
			assert.equal(iter.hasNext(), true, "b1");
			assert.equal(iter.next(), annotation1, "b2");
			assert.equal(iter.hasNext(), false, "b3");
			
			iter = annotationModel.getAnnotations(70, 71);
			assert.equal(iter.hasNext(), false, "c3");
			
			iter = annotationModel.getAnnotations(0, 1);
			assert.equal(iter.hasNext(), false, "d3");
			
			iter = annotationModel.getAnnotations(28, 30);
			assert.equal(iter.hasNext(), true, "e1");
			assert.equal(iter.next(), annotation1, "e2");
			assert.equal(iter.hasNext(), false, "e3");
			
			iter = annotationModel.getAnnotations(48, 50);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation1, "f2");
			assert.equal(iter.hasNext(), false, "f3");
			
			iter = annotationModel.getAnnotations(30, 40);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation1, "f2");
			assert.equal(iter.hasNext(), true, "f3");
			assert.equal(iter.next(), annotation2, "f4");
			assert.equal(iter.hasNext(), false, "f5");
			
			iter = annotationModel.getAnnotations(50, 60);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation1, "f2");
			assert.equal(iter.hasNext(), true, "f3");
			assert.equal(iter.next(), annotation3, "f4");
			assert.equal(iter.hasNext(), false, "f5");
			
			iter = annotationModel.getAnnotations(0, 70);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation1, "f2");
			assert.equal(iter.hasNext(), true, "f3");
			assert.equal(iter.next(), annotation2, "f4");
			assert.equal(iter.hasNext(), true, "f5");
			assert.equal(iter.next(), annotation3, "f6");
			assert.equal(iter.hasNext(), false, "f7");
		});
		
		it("2a", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			var iter;
			
			annotationModel.removeAnnotation(annotation1);
			iter = annotationModel.getAnnotations(0, 80);
			assert.equal(iter.hasNext(), true, "a1");
			assert.equal(iter.next(), annotation2, "a2");
			assert.equal(iter.hasNext(), true, "a3");
			assert.equal(iter.next(), annotation3, "a3");
			assert.equal(iter.hasNext(), false, "a4");
		});
		
		it("3", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 2, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation2, "a4");
				assert.equal(e.changed[0], annotation1, "a5");
				assert.equal(e.changed[1], annotation3, "a6");
			});
			textModel.setText("", 30, 40);
		});
		
		it("4", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 2, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation2, "a4");
				assert.equal(e.changed[0], annotation1, "a5");
				assert.equal(e.changed[1], annotation3, "a6");
			});
			textModel.setText("", 35, 40);
		});
		
		it("5", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 2, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation2, "a4");
				assert.equal(e.changed[0], annotation1, "a5");
				assert.equal(e.changed[1], annotation3, "a6");
			});
			textModel.setText("", 25, 35);
		});
		
		it("6", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 70};
			var annotation2 = {start: 30, end: 40};
			var annotation3 = {start: 50, end: 60};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 2, "a1");
				assert.equal(e.changed.length, 1, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation2, "a4");
				assert.equal(e.removed[1], annotation3, "a6");
				assert.equal(e.changed[0], annotation1, "a5");
			});
			textModel.setText("", 25, 55);
		});
		
		it("7: annotation before range", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 10, end: 20};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.fail("f0");
			});
			textModel.setText("", 25, 55);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation, "f2");
			assert.equal(iter.hasNext(), false, "f3");
			assert.equal(iter.next(), null, "f4");
		});
		
		
		it("8: range at annotation start ", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 60, end: 70};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 0, "a1");
				assert.equal(e.changed.length, 1, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.changed[0], annotation, "a4");
				assert.equal(e.changed[0].start, 61, "a5");
				assert.equal(e.changed[0].end, 71, "a6");
			});
			textModel.setText("a", 60, 60);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation, "f2");
			assert.equal(iter.hasNext(), false, "f3");
			assert.equal(iter.next(), null, "f4");
		});
		
		it("9: annotation after range", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 60, end: 70};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 0, "a1");
				assert.equal(e.changed.length, 1, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.changed[0], annotation, "a4");
				assert.equal(e.changed[0].start, 51, "a5");
				assert.equal(e.changed[0].end, 61, "a6");
			});
			textModel.setText("a", 30, 40);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation, "f2");
			assert.equal(iter.hasNext(), false, "f3");
			assert.equal(iter.next(), null, "f4");
		});
		
		it("10: range includes annotation", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 30, end: 40};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 0, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation, "a4");
			});
			textModel.setText("a", 10, 60);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), false, "f1");
			assert.equal(iter.next(), null, "f2");
		});
		
		it("11: annotation includes range ", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 20, end: 60};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 0, "a1");
				assert.equal(e.changed.length, 1, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.changed[0], annotation, "a4");
				assert.equal(e.changed[0].start, 20, "a5");
				assert.equal(e.changed[0].end, 64, "a5");			
			});
			textModel.setText("abcd", 30, 30);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), true, "f1");
			assert.equal(iter.next(), annotation, "f2");
			assert.equal(iter.hasNext(), false, "f3");
			assert.equal(iter.next(), null, "f4");
		});
		
		it("12: annotation intersects range start", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 20, end: 40};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 0, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation, "a4");
			});
			textModel.setText("a", 30, 60);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), false, "f1");
			assert.equal(iter.next(), null, "f2");
		});
		
		it("13: annotation intersects range end", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation = {start: 30, end: 60};
			annotationModel.addAnnotation(annotation);
			annotationModel.addEventListener("Changed", function(e) {
				assert.equal(e.removed.length, 1, "a1");
				assert.equal(e.changed.length, 0, "a2");
				assert.equal(e.added.length, 0, "a3");
				assert.equal(e.removed[0], annotation, "a4");
			});
			textModel.setText("a", 20, 40);
			var iter = annotationModel.getAnnotations(0, text.length);
			assert.equal(iter.hasNext(), false, "f1");
			assert.equal(iter.next(), null, "f2");
		});
	
		it("14: getAnnotation() with no parameters returns everything", function() {
	//		                      1         2         3         4         5         6         7	
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			annotationModel.addAnnotation({start: Number.NEGATIVE_INFINITY, end: Number.NEGATIVE_INFINITY});
			annotationModel.addAnnotation({start: Number.POSITIVE_INFINITY, end: Number.POSITIVE_INFINITY});
	
			var iter = annotationModel.getAnnotations();
			assert.equal(iter.hasNext(), true);
			var a1 = iter.next();
			assert.equal(iter.hasNext(), true);
			var a2 = iter.next();
			assert.equal(iter.hasNext(), false);
			assert.equal(a1.start, Number.NEGATIVE_INFINITY);
			assert.equal(a2.start, Number.POSITIVE_INFINITY);
		});
		
		
		it("15: Iterate over annotations found in a range", function() {
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var ruler = new mRulers.Ruler();
			
			var annotation1 = {start: 0, end: 5};
			var annotation2 = {start: 10, end: 15};
			var annotation3 = {start: 20, end: 30};
			var annotation4 = {start: 35, end: 64};
			
			var next = ruler._findNextAnnotation(annotationModel, 0, 65);			
			assert.equal(next, null, 'No annotations, no selection');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 10, 15);			
			assert.equal(next, null, 'No annotations, no selection 2');
			
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			annotationModel.addAnnotation(annotation4);
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65);			
			assert.equal(next, annotation1, 'No selection, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 0);			
			assert.equal(next, annotation1, 'Line start selection, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 67, 67);			
			assert.equal(next, annotation1, 'Out of range selection, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, -1, -1);			
			assert.equal(next, annotation1, 'Out of range selection, select first annotation 2');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 65);			
			assert.equal(next, annotation1, 'Full range selection, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 5);			
			assert.equal(next, annotation2, 'First annotation selection, select second annotation');
						
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 10, 15);			
			assert.equal(next, annotation3, 'Second annotation selection, select third annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 10, 35);			
			assert.equal(next, annotation2, 'Overlapping selection, select first annotation after selection start');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 12, 14);			
			assert.equal(next, annotation2, 'Subset selected, select first annotation after selection start');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 35, 40);			
			assert.equal(next, annotation4, 'Subset selected, select first annotation after selection start 2');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 35, 64);			
			assert.equal(next, null, 'Last annotation selection, no selection');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 65, 65);			
			assert.equal(next, annotation1, 'End of range selection, select first annotation');
		});
		
		it("16: Iterate over annotations found in a range with overlapping annotations", function() {
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 0, end: 5};
			var annotation2 = {start: 0, end: 5};
			var annotation3 = {start: 20, end: 30};
			var annotation4 = {start: 25, end: 35};
			var annotation5 = {start: 35, end: 65};
			var annotation6 = {start: 40, end: 45};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			annotationModel.addAnnotation(annotation3);
			annotationModel.addAnnotation(annotation4);
			annotationModel.addAnnotation(annotation5);
			annotationModel.addAnnotation(annotation6);
			
			var ruler = new mRulers.Ruler();
			var next;
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65);			
			assert.equal(next, annotation2, 'No selection, select second annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 0);			
			assert.equal(next, annotation2, 'Line start selection, select second annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 67, 67);			
			assert.equal(next, annotation2, 'Out of range selection, select second annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, -1, -1);			
			assert.equal(next, annotation2, 'Out of range selection, select second annotation 2');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 65);			
			assert.equal(next, annotation2, 'Full range selection, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 5);			
			assert.equal(next, annotation3, 'First annotation selection, skip duplicate range, select third annotation');
						
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 20, 30);			
			assert.equal(next, annotation4, 'Third annotation selection, select fourth overlapping annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 10, 35);			
			assert.equal(next, annotation3, 'Overlapping selection, select third annotation, first in selection');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 35, 65);			
			assert.equal(next, annotation6, 'Overlapping fifth annotation selected, select inner sixth annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 40, 45);			
			assert.equal(next, null, 'Inner sixth annotation selected, reach end of list, use no select');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 40, 40);			
			assert.equal(next, annotation5, 'Selection inside fifth and sixth annotation, use fifth annotation');
		});
		
		it("17: Iterate over annotations found in a range with excluded types", function() {
			var text = "01234567890123456789012345678901234567890123456789012345678901234567890123456789";
			var textModel = new mTextModel.TextModel(text, "\n");
			var annotationModel = new mAnnotations.AnnotationModel(textModel);
			var annotation1 = {start: 1, end: 5, type: 'aaa'};
			var annotation2 = {start: 6, end: 10, type: 'bbb'};
			annotationModel.addAnnotation(annotation1);
			annotationModel.addAnnotation(annotation2);
			
			var ruler = new mRulers.Ruler();
			var next;
			
			var isTypeVisible = function(annotationType) { return annotationType === 'aaa'};
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 0, 0, isTypeVisible);			
			assert.equal(next, annotation1, 'Line start, select first annotation');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 1, 5, isTypeVisible);			
			assert.equal(next, null, 'First annotation selection, second is not valid, no selection');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 6, 10, isTypeVisible);			
			assert.equal(next, null, 'Second annotation selection, not valid, no selection');
			
			next = ruler._findNextAnnotation(annotationModel, 0, 65, 11, 11, isTypeVisible);			
			assert.equal(next, null, 'End annotation selection, no selection');
		});
	});
});
