/**
 * (c) 2014 Kip Streithorst https://github.com/kstreith/js-debugging-samples 
 * License: MIT
 */
var app = app || {};
app.ui = {};
app.ui.drawResults = function (resultList) {
  var $teamRows = $("#teamRows");
  $teamRows.children().remove();
  if (resultList.length) {
    for (var i = 0; i < resultList.length; ++i) {
      var $tr = $("<tr>").data("teamIndex", i);
      $("<td>").text(resultList[i].team).appendTo($tr);
      $("<td>").text(resultList[i].wins).appendTo($tr);
      $tr.appendTo($teamRows);
    }
  }
}
app.ui.drawTeamDetail = function (teamObj) {
  $("#teamDetail").text(teamObj.team + " Details");
  var $tbody = $("#teamSummary > tbody");
  $tbody.children().remove();
  var $detailRow = $("<tr>");
  $("<td>").text(teamObj.wins).appendTo($detailRow);
  $("<td>").text(teamObj.homeWin).appendTo($detailRow);
  $("<td>").text(teamObj.roadWin).appendTo($detailRow);
  $detailRow.appendTo($tbody);
}
app.ui.confSelectionEnable = function (enable) {
  if (enable) {
    $("[name='selectedConf']").removeAttr("disabled");    
  } else {
    $("[name='selectedConf']").attr("disabled", "disabled");
  }
}
app.ui.bindTeamClick = function () {
  $("#teamRows tr").on("click", function () {
    var onTeamClick = app.ui.onTeamClick;
    if (onTeamClick) {
      onTeamClick($(this).data("teamIndex"));
    }
  });
}
app.ui.bind = function () {
  $("[name='selectedConf']").on("change", function () {
    var onConference = app.ui.onConference;
    if (onConference) {
      onConference($(this).val());
    }
  });  
}
