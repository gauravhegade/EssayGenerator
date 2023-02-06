$(document).ready(function () {
  $("#generate-button").click(function () {
    $.ajax({
      url: "https://api.openai.com/v1/engines/text-davinci-002/jobs",
      type: "POST",
      headers: {
        Authorization:
          "Bearer <API GOES HERE>",
      },
      data: JSON.stringify({
        prompt: $("#prompt").val() + " " + $("#tone").val(),
        max_tokens: $("#word-count").val(),
      }),
      contentType: "application/json",
      success: function (response) {
        $("#generated-essay").val(response.choices[0].text);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
