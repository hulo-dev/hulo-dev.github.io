  document.querySelectorAll('[data-section-anchor]').forEach(function(sectionAnchor) {
    var parentSection =  sectionAnchor.closest("section");
    sectionAnchor.closest(".sqs-block-code").classList.add('code-block-with-anchor');
    parentSection.setAttribute('id', sectionAnchor.getAttribute('data-section-anchor'));
    parentSection.setAttribute('data-scroll-offset', sectionAnchor.getAttribute('data-offset'));
  });

  document.querySelectorAll('a[href*="-anchor"]').forEach(function(anchorLink) {
    anchorLink.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var sectionId = anchorLink.getAttribute('href').replace(/^#/, "");
      sectionId = sectionId.replace(/^//, "");
      var scrollOffset = document.querySelectorAll('[data-section-anchor="'+sectionId+'"]')[0].getAttribute('data-offset') || 0;
      EPPZScrollTo.scrollVerticalToElementById(sectionId, scrollOffset);
    })
  });
