$(function () {

    var editorHeight = document.querySelector('.markdown-editor').offsetHeight;

    const textarea = document.querySelector('.editor-textarea');
    const preview = document.querySelector('.editor-preview');
    const editorButtons = document.querySelectorAll('[data-command]');

    // Handle tab change event
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        if (e.target.id === 'preview-tab') {

            // Hide the icon buttons when using preview mode
            $(editorButtons).parent().hide();

            editorHeight = document.querySelector('.markdown-editor').offsetHeight;
            document.querySelector('.markdown-editor').removeAttribute('style');
            document.querySelector('.markdown-editor').setAttribute('style', 'resize: unset;');

            let markdownText = textarea.value;

            // If the markdown text is empty, replace the contents with a placeholder "nothing to preview"
            if (markdownText === '') {
                preview.innerHTML = 'Nothing to preview';
            } else {

                // Replace the contents with a loading spinner
                preview.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';

                // Make AJAX call to BuildPreview endpoint
                $.ajax({
                    type: 'POST',
                    url: '/MarkdownPreviewHandler/BuildPreview',
                    data: { markdown: markdownText },
                    success: function (response) {
                        preview.innerHTML = response.previewHtml;
                    },
                    error: function () {
                        preview.innerHTML = 'An error occurred while generating the preview.';
                    }
                });
            }

        }
        else {
            // Show the icon buttons when using edit mode
            $(editorButtons).parent().show();

            let editor = document.querySelector('.markdown-editor');
            $(editor).css('height', editorHeight + 'px');
            $(editor).css('resize', 'vertical');
        }
    });

    editorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const command = button.getAttribute('data-command');
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            let replacement = selectedText;

            if (command === 'bold') {
                replacement = `**${selectedText}**`;
            } else if (command === 'italic') {
                replacement = `*${selectedText}*`;
            } else if (command === 'heading') {
                replacement = `### ${selectedText}`;
            }

            textarea.setRangeText(replacement, start, end, 'end');
            textarea.focus();
        });
    });


    document.getElementById('modalButton').addEventListener('click', function (e) {
        const modal = document.getElementById('menuModal');
        const buttonRect = document.getElementById('modalButton').getBoundingClientRect();

        // Toggle the display of the modal
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        const modalWidth = modal.getBoundingClientRect().width;

        // Position the modal to the left of the button
        modal.style.top = `${buttonRect.bottom}px`;
        modal.style.left = `${buttonRect.right - modalWidth}px`;
    });

    // Close modal if user clicks outside of it
    document.addEventListener('click', function (e) {
        const modal = document.getElementById('menuModal');
        const button = document.getElementById('modalButton');

        // Hide the modal if click happens outside the modal or button
        if (!button.contains(e.target) && !modal.contains(e.target)) {
            modal.style.display = 'none';
        }
    });

});